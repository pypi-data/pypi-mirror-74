/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#define WIN32_LEAN_AND_MEAN
#include <BWAPI.h>
#include <BWAPI/Client.h>

#ifdef _WIN32
#include <winsock2.h>
#endif

#include "zmq_server.h"
#include "controller.h"
#include <utils.h>
#include <thread>
#include <chrono>

using namespace std;

namespace {
  
  
void sendFlatBuffer(
    zmq::socket_t* sock,
    const flatbuffers::FlatBufferBuilder& builder) {
  
  if (sock == nullptr) {
    throw runtime_error("Attempt to use nullptr socket");
  }
  
  try {
    size_t response = sock->send(builder.GetBufferPointer(), builder.GetSize());
    if (response != builder.GetSize()) {
      throw runtime_error(
        "ZMQ_server::send*(): zmq_send failed: no/partial send");
    }
  } catch (const zmq::error_t& e) {
    throw runtime_error(
        string("ZMQ_server::send*(): zmq_send failed: ") + e.what());
  }
}

void sendMessageAsOffset(
    zmq::socket_t* sock,
    torchcraft::fbs::Any messageType,
    const flatbuffers::Offset<void>& unionOffset,
    flatbuffers::FlatBufferBuilder& builder) {
  
  auto rootMessageOffset = torchcraft::fbs::CreateMessage(
    builder,
    messageType,
    unionOffset);      
  torchcraft::fbs::FinishMessageBuffer(builder, rootMessageOffset);
  
  sendFlatBuffer(sock, builder);
}

template <typename T>
void sendMessageAsNativeTable(
    zmq::socket_t* sock,
    const T* childMessageNativeTable) {
      
  flatbuffers::FlatBufferBuilder builder;

  auto messageType = torchcraft::fbs::AnyTraits<typename T::TableType>::enum_value;
  auto childMessageOffset = T::TableType::Pack(builder, childMessageNativeTable);
  auto unionOffset = childMessageOffset.Union();
  sendMessageAsOffset(
    sock,
    messageType,
    unionOffset, 
    builder);
}

} // namespace

ZMQ_server::ZMQ_server(Controller *c, int port) {
  server_sock_connected = false;
  controller = c;
  this->port = port;
}

ZMQ_server::ZMQ_server(Controller *c, std::string const& file_socket) {
  server_sock_connected = false;
  controller = c;
  this->file_socket = file_socket;
}

void ZMQ_server::connect() {
  if (this->server_sock_connected) return;

  // reinit ZMQ context
  ctx = std::make_unique<zmq::context_t>();

  std::string message;
  if (this->file_socket.size() > 0) {
#ifdef _WIN32
    throw std::runtime_error("Cannot use IPC on windows");
#else
    this->sock = std::make_unique<zmq::socket_t>(*ctx.get(), zmq::socket_type::rep);
    auto url = "ipc://" + this->file_socket;
    this->sock->bind(url);
    message = "TorchCraft server listening on socket " + this->file_socket;
#endif
  } else if (this->port == 0) {
    for (int port = ZMQ_server::starting_port;
      port < ZMQ_server::starting_port
      + ZMQ_server::max_instances;
    port++) {
      stringstream url;
      url << "tcp://*:" << port;
      this->sock = std::make_unique<zmq::socket_t>(*ctx.get(), zmq::socket_type::rep);
#ifndef _WIN32
      this->sock->setsockopt(ZMQ_IPV6, 1);
#endif
      try {
        this->sock->bind(url.str());
        this->port = port;
        break;
      } catch (...) {
        // Try next port
      }
      this->sock = nullptr;
    }
    message = "TorchCraft server listening on port " + std::to_string(port);
  } else {
    int success = -1;
#ifdef _WIN32
    DWORD reuse = 1;
#endif
    while (success == -1) {
      stringstream url;
      url << "tcp://*:" << this->port;
      this->sock = nullptr;
      this->sock = std::make_unique<zmq::socket_t>(*ctx.get(), zmq::socket_type::rep);
#ifdef _WIN32
      if (setsockopt(this->sock->getsockopt<int>(ZMQ_FD), SOL_SOCKET, SO_REUSEADDR, (char *)&reuse, sizeof(reuse)) != 0) {
        std::cout << "SO_REUSEADDR setsockopt failed with " << WSAGetLastError() << std::endl;
      }
#else
      this->sock->setsockopt(ZMQ_IPV6, 1);
#endif
      try {
        this->sock->bind(url.str());
        break;
      } catch (const zmq::error_t& e) {
        throw runtime_error(string("ZMQ_server::connect(): bind failed: ") + e.what());
      }
      std::this_thread::sleep_for(std::chrono::seconds(1));
    }
    message = "TorchCraft server listening on port " + std::to_string(port);
  }
  if (this->sock == nullptr) {
    throw runtime_error("No more free ports for ZMQ server socket.");
  }

  this->server_sock_connected = true;
  std::cout << message << std::endl;

  zmq::message_t zmsg;
  try {
    bool res = this->sock->recv(&zmsg);
    if (!res) {
      throw runtime_error("ZMQ_server::connect(): receive failed.");
    }
  } catch (const zmq::error_t& e) {
    throw runtime_error(string("ZMQ_server::connect(): receive failed: ") + e.what());
  }

  if (zmsg.size() == 0) {
    // Retry
    torchcraft::fbs::ErrorT err;
    sendError(&err);
    try {
      bool res = this->sock->recv(&zmsg);
      if (!res) {
        throw runtime_error("ZMQ_server::connect(): receive failed.");
      }
    } catch (const zmq::error_t& e) {
      throw runtime_error(string("ZMQ_server::connect(): receive failed: ") + e.what());
    }
  }

  uint8_t* data = zmsg.data<uint8_t>();
  size_t size = zmsg.size();
  flatbuffers::Verifier verifier(data, size);
  if (!torchcraft::fbs::VerifyMessageBuffer(verifier)) {
    throw runtime_error("ZMQ_server::connect(): invalid message.");
  }

  auto msg = torchcraft::fbs::GetMessage(data);
  if (msg->msg_type() == torchcraft::fbs::Any::HandshakeClient) {
    if (!torchcraft::fbs::VerifyAny(
            verifier, msg->msg(), torchcraft::fbs::Any::HandshakeClient)) {
      throw runtime_error("ZMQ_server::connect(): invalid message.");
    }
    client_uid = msg->uid()->str();
    handleReconnect(
        reinterpret_cast<const torchcraft::fbs::HandshakeClient*>(msg->msg()));
  } else {
    throw logic_error(
        string("ZMQ_server::connect(): cannot handle message: ") +
        torchcraft::fbs::EnumNameAny(msg->msg_type()));
  }
}

ZMQ_server::~ZMQ_server()
{
  this->close();
}

void ZMQ_server::close()
{
  if (!this->server_sock_connected) return;

  // Called when the game ends
  this->sock = nullptr;
  this->ctx = nullptr;

  Utils::bwlog(controller->output_log, "after zsock destroy");

  this->server_sock_connected = false;
}

void ZMQ_server::sendHandshake(const torchcraft::fbs::HandshakeServerT* handshake) {
  sendMessageAsNativeTable(this->sock.get(), handshake);
}

void ZMQ_server::sendFrame(
    const flatbuffers::Offset<torchcraft::fbs::StateUpdate>& stateUpdateOffset,
    flatbuffers::FlatBufferBuilder& builder) {  
  sendMessageAsOffset(
    this->sock.get(),
    torchcraft::fbs::Any::StateUpdate,
    stateUpdateOffset.Union(),
    builder);
}

void ZMQ_server::sendPlayerLeft(const torchcraft::fbs::PlayerLeftT* pl) {
  sendMessageAsNativeTable(this->sock.get(), pl);
}

void ZMQ_server::sendEndGame(
    const flatbuffers::Offset<torchcraft::fbs::EndGame>& endGameOffset,
    flatbuffers::FlatBufferBuilder& builder) {
  sendMessageAsOffset(
    this->sock.get(),
    torchcraft::fbs::Any::EndGame,
    endGameOffset.Union(),
    builder);
}

void ZMQ_server::sendError(const torchcraft::fbs::ErrorT* error) {
  sendMessageAsNativeTable(this->sock.get(), error);
}

/**
 * Receive a message from the client.
 * If timeoutMs is >= 0, only try to receive a message for that many
 * milliseconds before giving up and returning false.
 * Returns true if a message has been received (and handled).
 * Throws on network errors other than reaching the specified timeout.
 */
bool ZMQ_server::receiveMessage(int timeoutMs)
{
  /* if not yet connected, do nothing */
  if (!this->server_sock_connected) {
    return false;
  }

  zmq::message_t zmsg;
  if (timeoutMs < 0) {
    try {
      bool res = this->sock->recv(&zmsg);
      if (!res) {
        throw runtime_error("ZMQ_server::receiveMessage(): receive failed.");
      }
    } catch (const zmq::error_t& e) {
      throw runtime_error(string("ZMQ_server::receiveMessage(): receive failed: ") + e.what());
    }
  } else {
    try {
      auto start = chrono::steady_clock::now();
      auto limit = start + chrono::milliseconds(timeoutMs);
      while (!this->sock->recv(&zmsg, ZMQ_NOBLOCK)) {
        if (chrono::steady_clock::now() >= limit) {
          return false;
        }
        this_thread::sleep_for(chrono::milliseconds(1));
      }
    } catch (const zmq::error_t& e) {
      throw runtime_error(string("ZMQ_server::receiveMessage(): receive failed: ") + e.what());
    }
  }

  uint8_t *data = zmsg.data<uint8_t>();
  size_t size = zmsg.size();
  flatbuffers::Verifier verifier(data, size);
  if (!torchcraft::fbs::VerifyMessageBuffer(verifier)) {
    throw runtime_error("ZMQ_server::receiveMessage(): invalid message.");
  }

  auto msg = torchcraft::fbs::GetMessage(data);
  if (!torchcraft::fbs::VerifyAny(verifier, msg->msg(), msg->msg_type())) {
    throw runtime_error("ZMQ_server::receiveMessage(): invalid message.");
  }

  switch (msg->msg_type()) {
    case torchcraft::fbs::Any::HandshakeClient: // reconnection
      client_uid = msg->uid()->str();
      handleReconnect(
          reinterpret_cast<const torchcraft::fbs::HandshakeClient*>(msg->msg()));
      break;
    case torchcraft::fbs::Any::Commands: {
      if (client_uid != msg->uid()->str()) {
        torchcraft::fbs::ErrorT err;
        err.message = "Unexpected commands from client " + msg->uid()->str() +
            " (last handshake was from " + client_uid + ")";
        sendError(&err);
        return false;
      } else {
        auto status = handleCommands(
            reinterpret_cast<const torchcraft::fbs::Commands*>(msg->msg()));
        controller->setCommandsStatus(std::move(status));
      }
      break;
    }
    default:
      throw runtime_error(
          string("ZMQ_server::receiveMessage(): cannot handle message: ") +
          torchcraft::fbs::EnumNameAny(msg->msg_type()));
  }

  return true;
}

void ZMQ_server::handleReconnect(const torchcraft::fbs::HandshakeClient* handshake) {
  if (handshake->protocol() != ZMQ_server::protocol_version) {
    throw logic_error(
        string("Wrong protocol version: ") + to_string(handshake->protocol()));
  }
  if (flatbuffers::IsFieldPresent(
          handshake, torchcraft::fbs::HandshakeClient::VT_MAP)) {
    controller->setMap(handshake->map()->str());
  }
  if (flatbuffers::IsFieldPresent(
          handshake, torchcraft::fbs::HandshakeClient::VT_WINDOW_SIZE)) {
    controller->setWindowSize(pair<int, int>(
        handshake->window_size()->x(), handshake->window_size()->y()));
  }
  if (flatbuffers::IsFieldPresent(
          handshake, torchcraft::fbs::HandshakeClient::VT_WINDOW_POS)) {
    controller->setWindowPos(pair<int, int>(
        handshake->window_size()->x(), handshake->window_size()->y()));
  }
  controller->micro_mode = handshake->micro_mode();

  // if we aren't in client mode it means that game has started already
  // so we can go ahead with handshake
  if (!controller->is_client || (BWAPI::BWAPIClient.isConnected() && BWAPI::Broodwar->isInGame()))
    controller->setupHandshake();
}

std::vector<int8_t> ZMQ_server::handleCommands(const torchcraft::fbs::Commands* comms) {
  // Results: 0 = success, error code otherwise
  std::vector<int8_t> results;

  if (!flatbuffers::IsFieldPresent(comms, torchcraft::fbs::Commands::VT_COMMANDS)) {
    return results;
  }
  auto commands = comms->commands();
  if (commands->size() > 0) {
    Utils::bwlog(controller->output_log, "(%d) Received %d commands", BWAPI::Broodwar->getFrameCount(), commands->size());
  }

  int count = 0;
  for (auto comm : *commands) {
    if (count >= ZMQ_server::max_commands) {
      results.insert(results.end(), commands->size() - results.size(), CommandStatus::TOO_MANY_COMMANDS);
      break;
    }
    int8_t res;
    try {
      std::vector<int> args(comm->args()->data(), comm->args()->data() + comm->args()->size());
      res = controller->handleCommand(comm->code(), args, comm->str()->str());
    } catch (std::exception& e) {
      Utils::bwlog(controller->output_log, "Exception : %s", e.what());
      res = CommandStatus::UNKNOWN_ERROR;
      throw;
    }
    results.push_back(res);
    count++;
  }
  return results;
}

int ZMQ_server::getPort() {
  return port;
}

std::string ZMQ_server::getFileSocketName() {
  return file_socket.substr(file_socket.find_last_of("/\\") + 1);
}

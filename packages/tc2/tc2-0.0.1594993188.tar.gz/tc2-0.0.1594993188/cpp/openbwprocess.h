/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include "forkserver.h"
#include <atomic>
#include <future>
#include <string>
#include <unordered_map>
#include <vector>

namespace torchcraft {
class Client;
}

namespace tc2 {

struct AutoDetectPath {
  AutoDetectPath(std::vector<std::string>&& paths_): paths(paths_) {}
  std::vector<std::string> paths;
  std::string path(std::string const& suffix) const; // Returns the first path that exists
};

/**
 * Launches and manages an OpenBW process.
 */
class OpenBwProcess {
 public:
  // Totally thread safe!
  OpenBwProcess(std::vector<EnvVar> const& vars);
  OpenBwProcess(std::string, std::vector<EnvVar> const& vars);
  ~OpenBwProcess();

  /// Connect a TorchCraft client to this instance.
  /// The timeout is passed to the client _and_ the future to wait on openbw,
  /// and
  /// it is executed in sequence, so the total timeout might be 2 * timeout
  /// Returns whether the client connected successfully connected.
  bool connect(torchcraft::Client* client, int timeoutMs = -1);

  /// No further forks will be started, and subsequent
  /// OpenBwProcess constructors will throw
  static void preventFurtherProcesses();

  static AutoDetectPath bwenv;
  static AutoDetectPath bwapilauncher;
  static std::string mpqFolder;
 private:
  void redirectOutput();

  ForkServer::ForkedProcess fork_;
  std::string socketPath_;
  std::future<void> goodf_;
  std::promise<void> goodp_;
  // Need to keep a variable alive for thread to continue running
  std::future<void> outputThread_;
  std::atomic_bool running_;
};

} // namespace tc2

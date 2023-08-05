/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#pragma once

#include <map>
#include <set>
#include <string>
#include <vector>

#include <torchcraft/constants.h>
#include <torchcraft/frame.h>
#include <torchcraft/refcount.h>

// Flatbuffer messages
namespace torchcraft {
namespace fbs {
struct HandshakeServer;
struct StateUpdate;
struct EndGame;
struct PlayerLeft;
struct Error;
enum class FrameOrFrameDiff : uint8_t;
} // namespace fbs
} // namespace torchcraft

namespace torchcraft {

// Aliases for basic replayer types provided for convenience
typedef replayer::Unit Unit;
typedef replayer::Order Order;
typedef replayer::Resources Resources;
typedef replayer::Bullet Bullet;
typedef replayer::Action Action;
typedef replayer::Frame Frame;

class State : public RefCounted {
 public:
  struct Position {
    int x, y;
    Position() : x(0), y(0) {}
    Position(int x, int y) : x(x), y(y) {}
  };

  struct PlayerInfo {
    int id;
    BW::Race race = BW::Race::Unknown;
    std::string name;
    bool is_enemy;
    bool has_left;
  };

  // setup
  int lag_frames; // number of frames from order to execution
  int map_size[2]; // map size in walk tiles
  std::vector<uint8_t> ground_height_data; // 2D, walk tile resolution
  std::vector<uint8_t> walkable_data; // 2D, walk tile resolution
  std::vector<uint8_t> buildable_data; // 2D, walk tile resolution
  std::string map_name; // File name of the current map or replay; derives from BWAPI::Game::mapFileName()
  std::string map_title; // Name embedded into the current map; derives from BWAPI::Game::mapName()
  std::vector<Position> start_locations;
  std::map<int, PlayerInfo> player_info;
  int player_id;
  int neutral_id;
  bool replay;

  // game state
  Frame* frame; // this will allow for easy reset (XXX)
  std::vector<int> deaths;
  int frame_from_bwapi;

  bool game_ended; // did the game end?
  bool game_won;

  // if with image
  std::string img_mode;
  int screen_position[2]; // position of screen {x, y} in pixels. {0, 0} is
  // top-left
  std::vector<uint8_t> visibility;
  int visibility_size[2];
  std::vector<uint8_t> image; // RGB
  int image_size[2];

  /// Map of units by player ID
  /// Bots might want to use this map instead of frame->units because:
  /// - Unknown unit types are not present (e.g. map revealers)
  /// - Units reported as dead are not present (important if the server performs
  ///   frame skipping. In that case, frame->units will still contain all units
  ///   that have died since the last update.
  std::unordered_map<int32_t, std::vector<Unit>> units;
  std::vector<Unit*> allUnits;

  // Total number of updates received since creation (resets are counted as
  // well).
  uint64_t numUpdates = 0;

  State();
  State(const State& other);
  State(State&& other);
  ~State();
  State& operator=(State other);
  friend void swap(State& a, State& b);

  void reset();
  std::vector<std::string> update(const fbs::HandshakeServer* handshake);
  std::vector<std::string> update(const fbs::StateUpdate* stateUpdate);
  std::vector<std::string> update(const fbs::EndGame* end);
  std::vector<std::string> update(const fbs::PlayerLeft* left);

  // Convenience methods

  int mapWidth() const {
    return map_size[0];
  }

  int mapHeight() const {
    return map_size[1];
  }

  int getUpgradeLevel(BW::UpgradeType ut) {
    if (!(frame->resources[player_id].upgrades & (1ll << ut))) {
      return 0;
    }
    auto constexpr NB_LVLABLE_UPGRADES = 16;
    if (ut >= NB_LVLABLE_UPGRADES) {
      return 1;
    }
    uint64_t lvls = frame->resources[player_id].upgrades_level;
    if (lvls & (1ll << ut)) {
      return 2;
    }
    if (lvls & (1ll << (ut + NB_LVLABLE_UPGRADES))) {
      return 3;
    }
    return 1;
  }

  bool hasResearched(BW::TechType tt) {
    if (frame->resources[player_id].techs & (1ll << tt)) {
      return true;
    }
    return false;
  }

 private:
  bool setRawImage(const fbs::StateUpdate* frame);
  void preUpdate();
  void postUpdate(std::vector<std::string>& upd);
  bool update_frame(const void* flatBuffer, const fbs::FrameOrFrameDiff type);
};

} // namespace torchcraft

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#include <torchcraft/buildtype.h>
#include <torchcraft/constants.h>
#include <torchcraft/unit.h>
#include <torchcraft/state.h>

namespace torchcraft {
namespace replayer {

bool Unit::isMine() const {
  return playerId == state->player_id;
}
bool Unit::isNeutral() const {
  return playerId == state->neutral_id;
}

const BuildType* Unit::constructingType() const {
  return (upgrading() || researching()) ? nullptr : getUnitBuildType(buildTechUpgradeType);
}

} //namespace replayer
} //namespace torchcraft
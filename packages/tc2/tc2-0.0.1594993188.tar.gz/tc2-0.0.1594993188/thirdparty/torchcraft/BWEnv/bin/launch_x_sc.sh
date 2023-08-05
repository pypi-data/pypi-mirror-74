# Copyright (c) 2015-present, Facebook, Inc.
# All rights reserved.
# 
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree. An additional grant
# of patent rights can be found in the PATENTS file in the same directory.

# This launches 5 instances of starcraft all operating on respective ports
#    ./launch_x_sc.sh 5
# Sleeping between different launches is purely useful for self_play!
#    ./launch_x_sc.sh 2 5  # with a 5 second sleep

n_games=${1:-1}
sleep=${2:-0}
for i in $(seq 11111 $(expr 11111 + $n_games - 1)); do
	TORCHCRAFT_PORT=$i wine bwheadless.exe --headful -e StarCraft.exe -l bwapi-data/BWAPI.dll &
	echo "Sleeping for $sleep seconds"
	sleep $sleep
done

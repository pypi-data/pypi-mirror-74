/*
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is pretty much equivalent to the main executable, but instead of
 * connecting to a server we'll spin it up ourselves and play against another
 * bot.
 */

#pragma once

#include <fmt/format.h>
#include <pybind11/pybind11.h>
#include <pybind11/numpy.h>
#include <pybind11/operators.h>
#include <torchcraft/frame.h>
#include <torchcraft/replayer.h>

void init_replayer(pybind11::module& m) {
  using namespace torchcraft::replayer;
  pybind11::class_<Order>(m, "Order")
      .def(pybind11::init<>())
      .def_readwrite("first_frame", &Order::first_frame)
      .def_readwrite("type", &Order::type)
      .def_readwrite("targetId", &Order::targetId)
      .def_readwrite("targetX", &Order::targetX)
      .def_readwrite("targetY", &Order::targetY)
      .def(pybind11::self == pybind11::self);

  pybind11::class_<UnitCommand>(m, "UnitCommand")
      .def(pybind11::init<>())
      .def_readwrite("frame", &UnitCommand::frame)
      .def_readwrite("type", &UnitCommand::type)
      .def_readwrite("targetId", &UnitCommand::targetId)
      .def_readwrite("targetX", &UnitCommand::targetX)
      .def_readwrite("targetY", &UnitCommand::targetY)
      .def_readwrite("extra", &UnitCommand::extra)
      .def(pybind11::self == pybind11::self);

  pybind11::class_<Unit> unit(m, "Unit");
  unit.def(pybind11::init<>())
      .def("__repr__", [](const Unit& unit) { return fmt::format(
        "{} P{} ID{} @({}, {}) {}{}/{}hp",
        torchcraft::BW::UnitType::_from_integral(unit.type)._to_string(),
        unit.playerId < 0 ? std::string("Neutral") : std::to_string(unit.playerId),
        unit.id,
        unit.x,
        unit.y,
        unit.max_shield > 0 ? fmt::format("{}/{}sh + ", unit.shield, unit.max_shield): "",
        unit.health,
        unit.max_health);
      })
      .def_readwrite("id", &Unit::id)
      .def_readwrite("x", &Unit::x)
      .def_readwrite("y", &Unit::y)
      .def_readwrite("flags", &Unit::flags)
      .def_readwrite("health", &Unit::health)
      .def_readwrite("max_health", &Unit::max_health)
      .def_readwrite("shield", &Unit::shield)
      .def_readwrite("max_shield", &Unit::max_shield)
      .def_readwrite("energy", &Unit::energy)
      .def_readwrite("maxCD", &Unit::maxCD)
      .def_readwrite("groundCD", &Unit::groundCD)
      .def_readwrite("airCD", &Unit::airCD)
      .def_readwrite("visible", &Unit::visible)
      .def_readwrite("type", &Unit::type)
      .def_readwrite("armor", &Unit::armor)
      .def_readwrite("shieldArmor", &Unit::shieldArmor)
      .def_readwrite("size", &Unit::size)
      .def_readwrite("pixel_x", &Unit::pixel_x)
      .def_readwrite("pixel_y", &Unit::pixel_y)
      .def_readwrite("pixel_size_x", &Unit::pixel_size_x)
      .def_readwrite("pixel_size_y", &Unit::pixel_size_y)
      .def_readwrite("groundATK", &Unit::groundATK)
      .def_readwrite("airATK", &Unit::airATK)
      .def_readwrite("groundDmgType", &Unit::groundDmgType)
      .def_readwrite("airDmgType", &Unit::airDmgType)
      .def_readwrite("groundRange", &Unit::groundRange)
      .def_readwrite("airRange", &Unit::airRange)
      .def_readwrite("orders", &Unit::orders)
      .def_readwrite("command", &Unit::command)
      .def_readwrite("velocityX", &Unit::velocityX)
      .def_readwrite("velocityY", &Unit::velocityY)
      .def_readwrite("playerId", &Unit::playerId)
      .def_readwrite("resources", &Unit::resources)
      .def(
          "getFlag",
          [](const Unit& u, Unit::Flags flag) { return (u.flags & flag) > 0; })
      .def("setFlag", [](Unit& u, Unit::Flags flag, bool value) {
        if (value)
          u.flags |= flag;
        else
          u.flags &= (~flag);
      });

  std::string tmp;
#define DO_FLAG(FLAG)                                                   \
  tmp = fromCamelCaseToLower(#FLAG);                                    \
  unit.def_property(                                                    \
      tmp.c_str(),                                                      \
      [](Unit* self) { return (self->flags & Unit::Flags::FLAG) > 0; }, \
      [](Unit* self, bool value) {                                      \
        if (value)                                                      \
          self->flags |= Unit::Flags::FLAG;                             \
        else                                                            \
          self->flags &= (~Unit::Flags::FLAG);                          \
      })

  DO_FLAG(Accelerating);
  DO_FLAG(Attacking);
  DO_FLAG(AttackFrame);
  DO_FLAG(BeingConstructed);
  DO_FLAG(BeingGathered);
  DO_FLAG(BeingHealed);
  DO_FLAG(Blind);
  DO_FLAG(Braking);
  DO_FLAG(Burrowed);
  DO_FLAG(CarryingGas);
  DO_FLAG(CarryingMinerals);
  DO_FLAG(Cloaked);
  DO_FLAG(Completed);
  DO_FLAG(Constructing);
  DO_FLAG(DefenseMatrixed);
  DO_FLAG(Detected);
  DO_FLAG(Ensnared);
  DO_FLAG(Flying);
  DO_FLAG(Following);
  DO_FLAG(GatheringGas);
  DO_FLAG(GatheringMinerals);
  DO_FLAG(Hallucination);
  DO_FLAG(HoldingPosition);
  DO_FLAG(Idle);
  DO_FLAG(Interruptible);
  DO_FLAG(Invincible);
  DO_FLAG(Irradiated);
  DO_FLAG(Lifted);
  DO_FLAG(Loaded);
  DO_FLAG(LockedDown);
  DO_FLAG(Maelstrommed);
  DO_FLAG(Morphing);
  DO_FLAG(Moving);
  DO_FLAG(Parasited);
  DO_FLAG(Patrolling);
  DO_FLAG(Plagued);
  DO_FLAG(Powered);
  DO_FLAG(Repairing);
  DO_FLAG(Researching);
  DO_FLAG(Selected);
  DO_FLAG(Sieged);
  DO_FLAG(StartingAttack);
  DO_FLAG(Stasised);
  DO_FLAG(Stimmed);
  DO_FLAG(Stuck);
  DO_FLAG(Targetable);
  DO_FLAG(Training);
  DO_FLAG(UnderAttack);
  DO_FLAG(UnderDarkSwarm);
  DO_FLAG(UnderDisruptionWeb);
  DO_FLAG(UnderStorm);
  DO_FLAG(Upgrading);
#undef DO_FLAG

  pybind11::class_<Resources>(m, "Resources")
      .def(pybind11::init<>())
      .def_readwrite("ore", &Resources::ore)
      .def_readwrite("gas", &Resources::gas)
      .def_readwrite("used_psi", &Resources::used_psi)
      .def_readwrite("total_psi", &Resources::total_psi)
      .def_readwrite("upgrades", &Resources::upgrades)
      .def_readwrite("upgrades_level", &Resources::upgrades_level)
      .def_readwrite("techs", &Resources::techs);

  pybind11::class_<Bullet>(m, "Bullet")
      .def(pybind11::init<>())
      .def_readwrite("type", &Bullet::type)
      .def_readwrite("x", &Bullet::x)
      .def_readwrite("y", &Bullet::y);

  pybind11::class_<Action>(m, "Action")
      .def(pybind11::init<>())
      .def_readwrite("action", &Action::action)
      .def_readwrite("uid", &Action::uid)
      .def_readwrite("aid", &Action::aid);

  pybind11::class_<Frame>(m, "Frame")
      .def(pybind11::init<>())
      .def(pybind11::init<Frame*>())
      .def_readwrite("units", &Frame::units)
      .def_readwrite("actions", &Frame::actions)
      .def_readwrite("resources", &Frame::resources)
      .def_readwrite("bullets", &Frame::bullets)
      .def_readwrite("height", &Frame::height)
      .def_readwrite("width", &Frame::width)
      .def_readwrite("reward", &Frame::reward)
      .def_readwrite("is_terminal", &Frame::is_terminal)
      .def(
          "deepEq",
          [](Frame* self, Frame* other, bool debug) {
            return torchcraft::replayer::detail::frameEq(self, other, debug);
          },
          pybind11::arg("other"),
          pybind11::arg("debug") = false)
      .def("get_creep_at", &Frame::getCreepAt)
      .def(
          "creep_map",
          [](Frame* self) {
            auto map = pybind11::array_t<uint8_t, pybind11::array::c_style>(
                {self->height, self->width});
            auto map_data = map.mutable_unchecked<2>();
            for (auto y = 0U; y < self->height; y++) {
              for (auto x = 0U; x < self->width; x++) {
                map_data(y, x) = self->getCreepAt(x, y);
              }
            }
            return map;
          })
      .def("combine", &Frame::combine)
      .def("filter", &Frame::filter);

  pybind11::class_<Replayer>(m, "Replayer")
      .def(pybind11::init<>())
      .def("__len__", &Replayer::size)
      .def(
          "getFrame",
          &Replayer::getFrame,
          pybind11::return_value_policy::reference_internal)
      .def("push", &Replayer::push)
      .def("setKeyFrame", &Replayer::setKeyFrame)
      .def("getKeyFrame", &Replayer::getKeyFrame)
      .def("setNumUnits", &Replayer::setNumUnits)
      .def("getNumUnits", &Replayer::getNumUnits)
      .def("setMapFromState", &Replayer::setMapFromState)
      .def(
          "setMap",
          [](Replayer* self, pybind11::dict inp) {
            pybind11::object wobj = inp["walkability"];
            pybind11::object bobj = inp["buildability"];
            pybind11::object gobj = inp["ground_height"];
            auto walkability = static_cast<pybind11::array_t<uint8_t>*>(&wobj);
            auto buildability = static_cast<pybind11::array_t<uint8_t>*>(&bobj);
            auto ground_height = static_cast<pybind11::array_t<uint8_t>*>(&gobj);
            auto w_data = walkability->unchecked<2>();
            auto g_data = ground_height->unchecked<2>();
            auto b_data = buildability->unchecked<2>();
            std::vector<uint8_t> winp, ginp, binp;

            uint64_t h = w_data.shape(0);
            uint64_t w = w_data.shape(1);

            for (size_t y = 0; y < h; y++) {
              for (size_t x = 0; x < w; x++) {
                winp.push_back(w_data(y, x));
                ginp.push_back(g_data(y, x));
                binp.push_back(b_data(y, x));
              }
            }

            auto start_loc =
                inp["start_locations"].cast<std::vector<std::pair<int, int>>>();
            std::vector<int> slx, sly;
            for (auto p : start_loc) {
              slx.push_back(p.first);
              sly.push_back(p.second);
            }

            self->setMap(h, w, winp.data(), ginp.data(), binp.data(), slx, sly);
          })
      .def(
          "getMap",
          [](Replayer* self) {
#define WALKABILITY_SHIFT 0
#define BUILDABILITY_SHIFT 1
#define HEIGHT_SHIFT 2
// height is 0-5, hence 3 bits
#define START_LOC_SHIFT 5

            const auto map = self->getRawMap();
            std::size_t h = self->mapHeight();
            std::size_t w = self->mapWidth();
            auto w_vec = std::vector<uint8_t>();
            auto g_vec = std::vector<uint8_t>();
            auto b_vec = std::vector<uint8_t>();
            auto sx = std::vector<int>();
            auto sy = std::vector<int>();
            self->getMap(w_vec, g_vec, b_vec, sx, sy);

            auto walkability = pybind11::array_t<uint8_t, pybind11::array::c_style>({h, w});
            auto ground_height =
                pybind11::array_t<uint8_t, pybind11::array::c_style>({h, w});
            auto buildability =
                pybind11::array_t<uint8_t, pybind11::array::c_style>({h, w});
            auto w_data = walkability.mutable_unchecked<2>();
            auto g_data = ground_height.mutable_unchecked<2>();
            auto b_data = buildability.mutable_unchecked<2>();

            std::vector<std::pair<int, int>> start_loc;
            for (size_t y = 0; y < h; y++) {
              for (size_t x = 0; x < w; x++) {
                w_data(y, x) = w_vec[y * w + x];
                b_data(y, x) = b_vec[y * w + x];
                g_data(y, x) = g_vec[y * w + x];
              }
            }
            for (auto i = 0U; i < sx.size(); i++) {
              start_loc.emplace_back(sx[i], sy[i]);
            }

            pybind11::dict ret;
            ret[pybind11::str("walkability")] = walkability;
            ret[pybind11::str("buildability")] = buildability;
            ret[pybind11::str("ground_height")] = ground_height;
            ret[pybind11::str("start_locations")] = start_loc;
            return ret;
          })
      .def(
          "save",
          &Replayer::save,
          pybind11::arg("path"),
          pybind11::arg("compressed") = true)
      .def(
          "load",
          &Replayer::load,
          pybind11::arg("path"));
}

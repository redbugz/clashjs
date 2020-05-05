import {
  makeRandomMove,
  calculateHeading,
  findClosestAmmo,
  isActionSafe,
  threatsFacingMe,
  canMoveForward,
  enemiesInRange,
} from "../lib/helpers";

import debug from "debug";
const log = debug("clashjs:testbot");

export default {
  info: {
    name: "testbot",
    style: 94,
  },
  ai: function (player, enemies, game) {
    // console.log("AI", player, enemies, game);

    if (threatsFacingMe(player, enemies).length > 0) {
      // console.log("has threats");
      if (canMoveForward(player, game)) {
        // console.log("has threats, so moving");
        return "move";
      }
    }

    if (player.ammo > 0 && enemiesInRange(player, enemies).length > 0) {
      return "shoot";
    }

    const closestAmmo = findClosestAmmo(player, game);

    if (closestAmmo) {
      const ammoDir = calculateHeading(player.position, closestAmmo);
      if (ammoDir === player.direction) {
        return "move";
      } else {
        return ammoDir;
      }
      // if (isActionSafe(player, ammoDir, enemies, game)) {
      //   console.log("return ammodir", ammoDir);
      //   return ammoDir;
      // }
    }

    console.log("makeRandomMove");
    return makeRandomMove(true);
  },
};

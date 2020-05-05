var utils = require("../lib/helpers.js");

var MUSOLINI = {
  info: {
    name: "Horror",
    stylex: 10,
  },
  ai: (playerState, enemiesStates, gameEnvironment) => {
    var directionToAmmo;
    const enemies = utils.enemiesInRange(playerState, enemiesStates);

    console.log("Enemies", enemies);

    if (enemies.length > 0 && playerState.ammo) {
      return "shoot";
    }
    if (gameEnvironment.ammoPosition.length) {
      directionToAmmo = utils.calculateHeading(
        playerState.position,
        gameEnvironment.ammoPosition[0]
      );

      if (directionToAmmo !== playerState.direction) return directionToAmmo;
      return "move";
    }
    return utils.makeRandomMove();
  },
};

module.exports = MUSOLINI;

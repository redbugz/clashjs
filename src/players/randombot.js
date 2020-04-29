var utils = require("../lib/utils.js");

var randombot = {
  info: {
    name: "random",
  },
  ai: function (playerState, enemiesStates, gameEnvironment) {
    console.log("Player State", playerState);
    console.log("Game Environment", gameEnvironment);
    return utils.randomMove();
  },
};

module.exports = randombot;

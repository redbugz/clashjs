var { makeRandomMove } = require("../lib/helpers.js");

export default {
  info: {
    name: "random",
  },
  ai: function (playerState, enemiesStates, gameEnvironment) {
    return makeRandomMove();
  },
};

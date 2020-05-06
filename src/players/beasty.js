var a = [
  "dnVsbmVyYWJpbGl0eQ==",
  "bWF4",
  "aW5mbw==",
  "YmVhc3R5",
  "ZGlzdGFuY2U=",
  "bGVuZ3Ro",
  "ZGlyZWN0aW9u",
  "Y2FuS2lsbA==",
  "bG9n",
  "aW5kZXhPZg==",
  "YXBwbHk=",
  "dHJhY2U=",
  "YW1tb1Bvc2l0aW9u",
  "cHVzaA==",
  "aXNBbGl2ZQ==",
  "Zmxvb3I=",
  "dmVydGljYWw=",
  "aG9yaXpvbnRhbA==",
  "dnVsbmVyYWJpbGl0eUxldmVs",
  "bW92ZQ==",
  "cmV0dXJuIChmdW5jdGlvbigpIA==",
  "Z2V0RGlzdGFuY2U=",
  "cmFuZG9t",
  "d2VzdA==",
  "ZGVidWc=",
  "Y29uc29sZQ==",
  "bWlu",
  "cG9zaXRpb24=",
  "bmVhcmVzdEFtbW8=",
  "bmVhcmVzdEVuZW15",
  "YXN0ZXJvaWRz",
  "aXNPbkFzdGVyb2lk",
  "YW1tbw==",
  "ZWFzdA==",
  "aXNWaXNpYmxl",
  "YWJz",
  "bmVhcmVzdEFtbW9EaXN0YW5jZQ==",
  "bm9ydGg=",
  "d2Fybg==",
  "ZXhjZXB0aW9u",
  "ZGlzdGFuY2VMZWZ0",
  "ZmFzdEdldERpcmVjdGlvbg==",
  "aW5zdGFuY2U=",
  "c29tZQ==",
  "Z3JpZFNpemU=",
  "c2hvb3Q=",
  "Y2FuTW92ZQ==",
  "e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=",
  "dGFibGU=",
  "ZGV0b25hdGVJbg==",
  "Zm9yRWFjaA==",
  "c291dGg=",
];
(function (b, c) {
  var d = function (g) {
    while (--g) {
      b["push"](b["shift"]());
    }
  };
  d(++c);
})(a, 0x166);
var b = function (c, d) {
  c = c - 0x0;
  var e = a[c];
  if (b["ZcHhLM"] === undefined) {
    (function () {
      var g;
      try {
        var i = Function(
          "return\x20(function()\x20" +
            "{}.constructor(\x22return\x20this\x22)(\x20)" +
            ");"
        );
        g = i();
      } catch (j) {
        g = window;
      }
      var h =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      g["atob"] ||
        (g["atob"] = function (k) {
          var l = String(k)["replace"](/=+$/, "");
          var m = "";
          for (
            var n = 0x0, o, p, q = 0x0;
            (p = l["charAt"](q++));
            ~p && ((o = n % 0x4 ? o * 0x40 + p : p), n++ % 0x4)
              ? (m += String["fromCharCode"](0xff & (o >> ((-0x2 * n) & 0x6))))
              : 0x0
          ) {
            p = h["indexOf"](p);
          }
          return m;
        });
    })();
    b["vQNMIA"] = function (g) {
      var h = atob(g);
      var j = [];
      for (var k = 0x0, l = h["length"]; k < l; k++) {
        j += "%" + ("00" + h["charCodeAt"](k)["toString"](0x10))["slice"](-0x2);
      }
      return decodeURIComponent(j);
    };
    b["WXNJyM"] = {};
    b["ZcHhLM"] = !![];
  }
  var f = b["WXNJyM"][c];
  if (f === undefined) {
    e = b["vQNMIA"](e);
    b["WXNJyM"][c] = e;
  } else {
    e = f;
  }
  return e;
};
var d = (function () {
  var e = !![];
  return function (f, g) {
    var h = e
      ? function () {
          if (g) {
            var i = g[b("0x10")](f, arguments);
            g = null;
            return i;
          }
        }
      : function () {};
    e = ![];
    return h;
  };
})();
var c = d(this, function () {
  var f = function () {};
  var g;
  try {
    var h = Function(b("0x1a") + b("0x1") + ");");
    g = h();
  } catch (i) {
    g = window;
  }
  if (!g[b("0x1f")]) {
    g[b("0x1f")] = (function (j) {
      var k = {};
      k[b("0xe")] = j;
      k[b("0x2c")] = j;
      k[b("0x1e")] = j;
      k[b("0x8")] = j;
      k["error"] = j;
      k[b("0x2d")] = j;
      k[b("0x2")] = j;
      k[b("0x11")] = j;
      return k;
    })(f);
  } else {
    g["console"][b("0xe")] = f;
    g["console"][b("0x2c")] = f;
    g[b("0x1f")][b("0x1e")] = f;
    g[b("0x1f")][b("0x8")] = f;
    g[b("0x1f")]["error"] = f;
    g[b("0x1f")][b("0x2d")] = f;
    g[b("0x1f")][b("0x2")] = f;
    g[b("0x1f")][b("0x11")] = f;
  }
});
c();
var DIRECTIONS = [b("0x2b"), b("0x27"), b("0x5"), b("0x1d")];
var movements = [b("0x2b"), b("0x27"), b("0x5"), b("0x1d"), b("0x33")];
var randomMove = () => {
  return Math[b("0x1c")]() > 0.33
    ? b("0x19")
    : movements[Math[b("0x15")](Math[b("0x1c")]() * movements["length"])];
};
var safeRandomMove = () => {
  return Math[b("0x1c")]() > 0.33
    ? b("0x19")
    : DIRECTIONS[Math[b("0x15")](Math[b("0x1c")]() * DIRECTIONS[b("0xb")])];
};
var turn = (e = [], f) => {
  var g = DIRECTIONS[b("0xf")](e);
  return DIRECTIONS[(g + f) % 0x4];
};
var getDirection = (e = [], f = []) => {
  e = e || [];
  f = f || [];
  var g = Math[b("0x29")](e[0x0] - f[0x0]);
  var h = Math[b("0x29")](e[0x1] - f[0x1]);
  if (g > h) {
    return e[0x0] - f[0x0] > 0x0 ? "north" : "south";
  }
  return e[0x1] - f[0x1] > 0x0 ? b("0x1d") : b("0x27");
};
var getDistance = (e = [], f = []) => {
  var g = Math[b("0x29")](e[0x0] - f[0x0]);
  var h = Math[b("0x29")](e[0x1] - f[0x1]);
  return h + g;
};
var fastGetDirection = (e = [], f = []) => {
  var g = Math[b("0x29")](e[0x0] - f[0x0]);
  if (g) {
    return e[0x0] - f[0x0] > 0x0 ? b("0x2b") : b("0x5");
  }
  return e[0x1] - f[0x1] > 0x0 ? "west" : b("0x27");
};
var isVisible = (e = [], f = [], g = []) => {
  switch (g) {
    case DIRECTIONS[0x0]:
      return e[0x1] === f[0x1] && e[0x0] > f[0x0];
    case DIRECTIONS[0x1]:
      return e[0x0] === f[0x0] && e[0x1] < f[0x1];
    case DIRECTIONS[0x2]:
      return e[0x1] === f[0x1] && e[0x0] < f[0x0];
    case DIRECTIONS[0x3]:
      return e[0x0] === f[0x0] && e[0x1] > f[0x1];
    default:
      break;
  }
};
var canKill = (e = {}, f = []) => {
  return f["some"]((g) => {
    return g[b("0x14")] && isVisible(e[b("0x21")], g[b("0x21")], e[b("0xc")]);
  });
};
var isOnAsteroid = (e, f) => {
  const [g, h] = e;
  return f[b("0x31")](
    (i) => i[b("0x21")][0x0] === g && i[b("0x21")][0x1] === h
  );
};
var inDangerOfAsteroid = (e, f) => {
  const [g, h] = e;
  return f[b("0x31")](
    (i) =>
      i[b("0x3")] < 0x2 && i[b("0x21")][0x0] === g && i[b("0x21")][0x1] === h
  );
};
const utils = {
  randomMove: randomMove,
  getDirection: getDirection,
  isVisible: isVisible,
  canKill: canKill,
  safeRandomMove: safeRandomMove,
  fastGetDirection: fastGetDirection,
  turn: turn,
  getDistance: getDistance,
  isOnAsteroid: isOnAsteroid,
};
var ORIENTATION = {
  north: b("0x16"),
  east: b("0x17"),
  south: b("0x16"),
  west: b("0x17"),
};
export default {
  info: { name: b("0x9"), style: 0x3 },
  ai: function (e, f, g) {
    var h;
    var i = [];
    var j = {
      vulnerabilityLevel: null,
      canKill: null,
      nearestAmmo: null,
      nearestEnemy: null,
      canMove: null,
    };
    if (utils[b("0x25")](e[b("0x21")], g[b("0x24")])) {
      return b("0x19");
    }
    f[b("0x4")](function (y) {
      if (y[b("0x14")] === !![]) {
        y[b("0x2a")] = n(y[b("0x21")]);
        i[b("0x13")](y);
      }
    });
    j["vulnerabilityLevel"] = k(e[b("0x21")]);
    j[b("0xd")] = e["ammo"] > 0x0 && utils[b("0xd")](e, f);
    j[b("0x22")] = m(e[b("0x21")]);
    j[b("0x23")] = o(e[b("0x21")]);
    j["canMove"] = s(e[b("0x21")], e[b("0xc")]);
    function k(y) {
      var z = 0x0;
      i[b("0x4")](function (C) {
        if (
          utils[b("0x28")](C[b("0x21")], y, C[b("0xc")]) &&
          C[b("0x26")] > 0x0
        ) {
          z = Math[b("0x7")](z, 0x1);
        } else if (
          l(C[b("0x21")], y) &&
          (C[b("0x26")] > 0x0 || C[b("0x2a")] === 0x1)
        ) {
          z = Math[b("0x7")](z, 0.5);
        }
      });
      if (z === 0x0) {
        var A = [y[0x0] + 0x1, y[0x1] + 0x1];
        var B = [y[0x0] - 0x1, y[0x1] - 0x1];
        i[b("0x4")](function (C) {
          if (C["ammo"] > 0x0) {
            if (l(C[b("0x21")], A) || l(C[b("0x21")], B)) {
              z = Math[b("0x7")](z, 0.25);
            }
          }
        });
      }
      return z;
    }
    function l(y, z) {
      var A = ![];
      A = A || (y[0x1] === z[0x1] && y[0x0] > z[0x0]);
      A = A || (y[0x0] === z[0x0] && y[0x1] < z[0x1]);
      A = A || (y[0x1] === z[0x1] && y[0x0] < z[0x0]);
      A = A || (y[0x0] === z[0x0] && y[0x1] > z[0x1]);
      return A;
    }
    function m(y) {
      var z = null;
      var A = null;
      g["ammoPosition"][b("0x4")](function (B) {
        var C = utils["getDistance"](y, B);
        if (A === null || C < A) {
          A = C;
          z = { position: B, distance: A };
        }
      });
      return z;
    }
    function n(y) {
      var z = null;
      g[b("0x12")]["forEach"](function (A) {
        var B = utils[b("0x1b")](y, A);
        if (z === null || B < z) {
          z = B;
        }
      });
      return z;
    }
    function o(y) {
      var z = null;
      var A = null;
      i[b("0x4")](function (B) {
        var C = p(y, B);
        if (A === null || C < A) {
          A = C;
          z = { instance: B, distance: A };
        }
      });
      return z;
    }
    function p(y, z) {
      var A = Math[b("0x29")](y[0x0] - z[b("0x21")][0x0]);
      var B = Math[b("0x29")](y[0x1] - z[b("0x21")][0x1]);
      return Math[b("0x20")](B, A);
    }
    function q() {
      if (j[b("0x18")] === 0x1) {
        var y = j[b("0x0")];
        var z;
        i[b("0x4")](function (A) {
          if (
            A[b("0x26")] > 0x0 &&
            utils["isVisible"](A[b("0x21")], e[b("0x21")], A[b("0xc")])
          ) {
            z = A;
          }
        });
        if (z && ORIENTATION[z["direction"]] === ORIENTATION[e[b("0xc")]]) {
          y = ![];
        }
        if (y) {
          return "move";
        } else if (z && e[b("0x26")] > 0x0) {
          return v(z);
        } else {
          return r();
        }
      } else {
        return r();
      }
    }
    function r() {
      var y = e[b("0xc")];
      var z = j[b("0x18")];
      var A = 0x0;
      var B = [
        {
          direction: b("0x2b"),
          position: [e["position"][0x0] - 0x1, e[b("0x21")][0x1]],
        },
        {
          direction: b("0x27"),
          position: [e[b("0x21")][0x0], e[b("0x21")][0x1] + 0x1],
        },
        {
          direction: b("0x5"),
          position: [e[b("0x21")][0x0] + 0x1, e["position"][0x1]],
        },
        {
          direction: "west",
          position: [e[b("0x21")][0x0], e[b("0x21")][0x1] - 0x1],
        },
      ];
      B["forEach"](function (D) {
        D[b("0x6")] = k(D[b("0x21")]);
        D[b("0x2e")] = C(D["direction"]);
        D[b("0x0")] = s(e[b("0x21")], D["direction"]);
        var E =
          D["vulnerability"] < z || (D[b("0x6")] === z && D[b("0x2e")] > A);
        if (D[b("0x0")] && E) {
          y = D[b("0xc")];
          z = D[b("0x6")];
          A = D[b("0x2e")];
        }
      });
      if (y === e[b("0xc")]) {
        return w();
      } else {
        return y;
      }
      function C(D) {
        if (D === b("0x2b")) {
          return e[b("0x21")][0x0];
        } else if (D === b("0x27")) {
          return g[b("0x32")] - e[b("0x21")][0x1];
        } else if (D === b("0x5")) {
          return g[b("0x32")] - e[b("0x21")][0x0];
        } else if (D === b("0x1d")) {
          return e["position"][0x1];
        }
      }
    }
    function s(y, z) {
      if (z === b("0x2b")) {
        return y[0x0] > 0x0;
      } else if (z === "east") {
        return y[0x1] < g["gridSize"];
      } else if (z === "south") {
        return y[0x0] < g[b("0x32")];
      } else if (z === b("0x1d")) {
        return y[0x1] > 0x0;
      }
    }
    function t() {
      return "shoot";
    }
    function u() {
      if (e["ammo"] === 0x0 && j[b("0x22")]) {
        return x(j[b("0x22")][b("0x21")]);
      } else if (e["ammo"] > 0x0 && j[b("0x23")]) {
        if (j[b("0x22")] && j[b("0x22")][b("0xa")] < j[b("0x23")][b("0xa")]) {
          return x(j[b("0x22")][b("0x21")]);
        } else {
          return v(j[b("0x23")][b("0x30")]);
        }
      } else {
        return r();
      }
    }
    function v(y) {
      if (utils[b("0x28")](e[b("0x21")], y[b("0x21")], e[b("0xc")])) {
        return t();
      } else {
        var z = B();
        var A = p(e[b("0x21")], y);
        if (z === e[b("0xc")] && (A > 0x1 || y[b("0x26")] === 0x0)) {
          return b("0x19");
        } else {
          return z;
        }
      }
      function B() {
        var C = l(e["position"], y[b("0x21")]);
        var D = ORIENTATION[y["direction"]];
        if (C) {
          return utils[b("0x2f")](e[b("0x21")], y[b("0x21")]);
        } else {
          if (D === b("0x16")) {
            return y[b("0x21")][0x1] > e[b("0x21")][0x1]
              ? b("0x27")
              : b("0x1d");
          } else {
            return y["position"][0x0] > e[b("0x21")][0x0]
              ? b("0x5")
              : b("0x2b");
          }
        }
      }
    }
    function w() {
      var y;
      var z;
      if (e[b("0xc")] === b("0x2b")) {
        y = [e[b("0x21")][0x0] - 0x1, e[b("0x21")][0x1]];
      } else if (e[b("0xc")] === b("0x27")) {
        y = [e[b("0x21")][0x0], e[b("0x21")][0x1] + 0x1];
      } else if (e["direction"] === b("0x5")) {
        y = [e["position"][0x0] + 0x1, e[b("0x21")][0x1]];
      } else if (e[b("0xc")] === "west") {
        y = [e["position"][0x0], e[b("0x21")][0x1] - 0x1];
      }
      z = k(y);
      if (z === 0x1) {
        return null;
      } else {
        return b("0x19");
      }
    }
    function x(y) {
      var z = utils["fastGetDirection"](e["position"], y);
      if (z === e[b("0xc")]) {
        return w();
      } else {
        return z;
      }
    }
    if (j[b("0x18")] === 0x1 || (j[b("0x18")] >= 0.5 && j[b("0xd")] !== !![])) {
      h = q();
    } else if (j["canKill"] === !![]) {
      h = t();
    } else {
      h = u();
    }
    return h;
  },
};

var L2Dwidget = (function (t) {
  var n = window.webpackJsonpL2Dwidget;
  window.webpackJsonpL2Dwidget = function (e, o, i) {
    for (var c, u, a = 0, f = []; a < e.length; a++) (u = e[a]), r[u] && f.push(r[u][0]), (r[u] = 0);
    for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
    for (n && n(e, o, i); f.length; ) f.shift()();
  };
  var e = {},
    r = { 1: 0 };
  function o(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  return (
    (o.e = function (t) {
      var n = r[t];
      if (0 === n)
        return new Promise(function (t) {
          t();
        });
      if (n) return n[2];
      var e = new Promise(function (e, o) {
        n = r[t] = [e, o];
      });
      n[2] = e;
      function a() {
        (c.onerror = c.onload = null), clearTimeout(u);
        var n = r[t];
        0 !== n && (n && n[1](new Error("Loading chunk " + t + " failed.")), (r[t] = void 0));
      }
      return (c.onerror = c.onload = a), i.appendChild(c), e;
    }),
    (o.m = t),
    (o.c = e),
    (o.d = function (t, n, e) {
      o.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: e });
    }),
    (o.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (o.p = ""),
    (o.oe = function (t) {
      throw (console.error(t), t);
    }),
    o((o.s = 53))
  );
})([
  function (t, n, e) {
    var r = e(29)("wks"),
      o = e(19),
      i = e(1).Symbol,
      c = "function" == typeof i;
    (t.exports = function (t) {
      return r[t] || (r[t] = (c && i[t]) || (c ? i : o)("Symbol." + t));
    }).store = r;
  },
  function (t, n) {
    var e = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function (t, n) {
    var e = (t.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = e);
  },
  function (t, n, e) {
    var r = e(6);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function (t, n, e) {
    var r = e(11),
      o = e(31);
    t.exports = e(7)
      ? function (t, n, e) {
          return r.f(t, n, o(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        };
  },
  function (t, n, e) {
    var r = e(1),
      o = e(4),
      i = e(12),
      c = e(19)("src"),
      u = Function.toString,
      a = ("" + u).split("toString");
    (e(2).inspectSource = function (t) {
      return u.call(t);
    }),
      (t.exports = function (t, n, e, u) {
        var f = "function" == typeof e;
        f && (i(e, "name") || o(e, "name", n)),
          t[n] !== e &&
            (f && (i(e, c) || o(e, c, t[n] ? "" + t[n] : a.join(String(n)))),
            t === r ? (t[n] = e) : u ? (t[n] ? (t[n] = e) : o(t, n, e)) : (delete t[n], o(t, n, e)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[c]) || u.call(this);
      });
  },
  function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, n, e) {
    t.exports = !e(30)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, n) {
    t.exports = {};
  },
  function (t, n) {
    t.exports = function (t) {
      var n = typeof t;
      return null != t && ("object" == n || "function" == n);
    };
  },
  function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
      return e.call(t).slice(8, -1);
    };
  },
  function (t, n, e) {
    var r = e(3),
      o = e(56),
      i = e(57),
      c = Object.defineProperty;
    n.f = e(7)
      ? Object.defineProperty
      : function (t, n, e) {
          if ((r(t), (n = i(n, !0)), r(e), o))
            try {
              return c(t, n, e);
            } catch (t) {}
          if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
          return "value" in e && (t[n] = e.value), t;
        };
  },
  function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n);
    };
  },
  function (t, n, e) {
    var r = e(1),
      o = e(2),
      i = e(4),
      c = e(5),
      u = e(14),
      a = function (t, n, e) {
        var f,
          s,
          l,
          p,
          v = t & a.F,
          d = t & a.G,
          h = t & a.S,
          y = t & a.P,
          b = t & a.B,
          m = d ? r : h ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
          w = d ? o : o[n] || (o[n] = {}),
          x = w.prototype || (w.prototype = {});
        for (f in (d && (e = n), e))
          (l = ((s = !v && m && void 0 !== m[f]) ? m : e)[f]),
            (p = b && s ? u(l, r) : y && "function" == typeof l ? u(Function.call, l) : l),
            m && c(m, f, l, t & a.U),
            w[f] != l && i(w, f, p),
            y && x[f] != l && (x[f] = l);
      };
    (r.core = o),
      (a.F = 1),
      (a.G = 2),
      (a.S = 4),
      (a.P = 8),
      (a.B = 16),
      (a.W = 32),
      (a.U = 64),
      (a.R = 128),
      (t.exports = a);
  },
  function (t, n, e) {
    var r = e(15);
    t.exports = function (t, n, e) {
      if ((r(t), void 0 === n)) return t;
      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e);
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function (e, r, o) {
            return t.call(n, e, r, o);
          };
      }
      return function () {
        return t.apply(n, arguments);
      };
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function (t, n, e) {
    var r = e(27);
    t.exports = function (t, n) {
      for (var e = t.length; e--; ) if (r(t[e][0], n)) return e;
      return -1;
    };
  },
  function (t, n, e) {
    var r = e(10),
      o = e(0)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var n, e, c;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (e = (function (t, n) {
            try {
              return t[n];
            } catch (t) {}
          })((n = Object(t)), o))
        ? e
        : i
        ? r(n)
        : "Object" == (c = r(n)) && "function" == typeof n.callee
        ? "Arguments"
        : c;
    };
  },
  function (t, n) {
    t.exports = !1;
  },
  function (t, n) {
    var e = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
    };
  },
  function (t, n, e) {
    var r = e(6),
      o = e(1).document,
      i = r(o) && r(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  function (t, n) {
    var e = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function (t, n, e) {
    var r = e(64),
      o = e(22);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, n, e) {
    var r = e(29)("keys"),
      o = e(19);
    t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  },
  function (t, n, e) {
    var r = e(11).f,
      o = e(12),
      i = e(0)("toStringTag");
    t.exports = function (t, n, e) {
      t && !o((t = e ? t : t.prototype), i) && r(t, i, { configurable: !0, value: n });
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(15);
    t.exports.f = function (t) {
      return new (function (t) {
        var n, e;
        (this.promise = new t(function (t, r) {
          if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
          (n = t), (e = r);
        })),
          (this.resolve = r(n)),
          (this.reject = r(e));
      })(t);
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return t === n || (t != t && n != n);
    };
  },
  function (t, n, e) {
    var r = e(101);
    t.exports = function (t, n, e) {
      "__proto__" == n && r ? r(t, n, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : (t[n] = e);
    };
  },
  function (t, n, e) {
    var r = e(2),
      o = e(1),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
      return i[t] || (i[t] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: r.version,
      mode: e(18) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(18),
      o = e(13),
      i = e(5),
      c = e(4),
      u = e(8),
      a = e(60),
      f = e(25),
      s = e(67),
      l = e(0)("iterator"),
      p = !([].keys && "next" in [].keys()),
      v = function () {
        return this;
      };
    t.exports = function (t, n, e, d, h, y, b) {
      a(e, n, d);
      var m,
        w,
        x,
        g = function (t) {
          if (!p && t in P) return P[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new e(this, t);
              };
          }
          return function () {
            return new e(this, t);
          };
        },
        _ = n + " Iterator",
        j = "values" == h,
        O = !1,
        P = t.prototype,
        k = P[l] || P["@@iterator"] || (h && P[h]),
        S = k || g(h),
        T = h ? (j ? g("entries") : S) : void 0,
        L = ("Array" == n && P.entries) || k;
      if (
        (L &&
          (x = s(L.call(new t()))) !== Object.prototype &&
          x.next &&
          (f(x, _, !0), r || "function" == typeof x[l] || c(x, l, v)),
        j &&
          k &&
          "values" !== k.name &&
          ((O = !0),
          (S = function () {
            return k.call(this);
          })),
        (r && !b) || (!p && !O && P[l]) || c(P, l, S),
        (u[n] = S),
        (u[_] = v),
        h)
      )
        if (((m = { values: j ? S : g("values"), keys: y ? S : g("keys"), entries: T }), b))
          for (w in m) w in P || i(P, w, m[w]);
        else o(o.P + o.F * (p || O), n, m);
      return m;
    };
  },
  function (t, n, e) {
    var r = e(63),
      o = e(35);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, n, e) {
    var r = e(21),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function (t, n, e) {
    var r = e(1).document;
    t.exports = r && r.documentElement;
  },
  function (t, n, e) {
    var r = e(3),
      o = e(15),
      i = e(0)("species");
    t.exports = function (t, n) {
      var e,
        c = r(t).constructor;
      return void 0 === c || void 0 == (e = r(c)[i]) ? n : o(e);
    };
  },
  function (t, n, e) {
    var r,
      o,
      i,
      c = e(14),
      u = e(79),
      a = e(36),
      f = e(20),
      s = e(1),
      l = s.process,
      p = s.setImmediate,
      v = s.clearImmediate,
      d = s.MessageChannel,
      h = s.Dispatch,
      y = 0,
      b = {},
      m = function () {
        var t = +this;
        if (b.hasOwnProperty(t)) {
          var n = b[t];
          delete b[t], n();
        }
      },
      w = function (t) {
        m.call(t.data);
      };
    (p && v) ||
      ((p = function (t) {
        for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
        return (
          (b[++y] = function () {
            u("function" == typeof t ? t : Function(t), n);
          }),
          r(y),
          y
        );
      }),
      (v = function (t) {
        delete b[t];
      }),
      "process" == e(10)(l)
        ? (r = function (t) {
            l.nextTick(c(m, t, 1));
          })
        : h && h.now
        ? (r = function (t) {
            h.now(c(m, t, 1));
          })
        : d
        ? ((i = (o = new d()).port2), (o.port1.onmessage = w), (r = c(i.postMessage, i, 1)))
        : s.addEventListener && "function" == typeof postMessage && !s.importScripts
        ? ((r = function (t) {
            s.postMessage(t + "", "*");
          }),
          s.addEventListener("message", w, !1))
        : (r =
            "onreadystatechange" in f("script")
              ? function (t) {
                  a.appendChild(f("script")).onreadystatechange = function () {
                    a.removeChild(this), m.call(t);
                  };
                }
              : function (t) {
                  setTimeout(c(m, t, 1), 0);
                })),
      (t.exports = { set: p, clear: v });
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function (t, n, e) {
    var r = e(3),
      o = e(6),
      i = e(26);
    t.exports = function (t, n) {
      if ((r(t), o(n) && n.constructor === t)) return n;
      var e = i.f(t);
      return (0, e.resolve)(n), e.promise;
    };
  },
  function (t, n) {
    t.exports = function (t, n, e) {
      switch (e.length) {
        case 0:
          return t.call(n);
        case 1:
          return t.call(n, e[0]);
        case 2:
          return t.call(n, e[0], e[1]);
        case 3:
          return t.call(n, e[0], e[1], e[2]);
      }
      return t.apply(n, e);
    };
  },
  function (t, n, e) {
    var r = e(91),
      o = e(92),
      i = e(93);
    t.exports = function (t, n) {
      return i(o(t, n, r), t + "");
    };
  },
  function (t, n, e) {
    var r = e(95),
      o = e(44),
      i = e(103),
      c = e(105),
      u = e(9),
      a = e(51),
      f = e(50);
    t.exports = function t(n, e, s, l, p) {
      n !== e &&
        i(
          e,
          function (i, a) {
            if (u(i)) p || (p = new r()), c(n, e, a, s, t, l, p);
            else {
              var v = l ? l(f(n, a), i, a + "", n, e, p) : void 0;
              void 0 === v && (v = i), o(n, a, v);
            }
          },
          a
        );
    };
  },
  function (t, n, e) {
    var r = e(28),
      o = e(27);
    t.exports = function (t, n, e) {
      ((void 0 === e || o(t[n], e)) && (void 0 !== e || n in t)) || r(t, n, e);
    };
  },
  function (t, n, e) {
    var r = e(108),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r || o || Function("return this")();
    t.exports = i;
  },
  function (t, n, e) {
    var r = e(116)(Object.getPrototypeOf, Object);
    t.exports = r;
  },
  function (t, n, e) {
    var r = e(48),
      o = e(9),
      i = "[object AsyncFunction]",
      c = "[object Function]",
      u = "[object GeneratorFunction]",
      a = "[object Proxy]";
    t.exports = function (t) {
      if (!o(t)) return !1;
      var n = r(t);
      return n == c || n == u || n == i || n == a;
    };
  },
  function (t, n) {
    var e = Object.prototype.toString;
    t.exports = function (t) {
      return e.call(t);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      if ("__proto__" != n) return t[n];
    };
  },
  function (t, n) {
    t.exports = function (t) {
      var n = [];
      if (null != t) for (var e in Object(t)) n.push(e);
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), (n.config = n.configApplyer = void 0);
    var r = i(e(90)),
      o = i(e(132));
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var c = {};
    (n.configApplyer = function (t) {
      n.config = c = (0, r.default)(t, o.default);
    }),
      (n.config = c);
  },
  function (t, n, e) {
    e(54), e(87), (t.exports = e(88));
  },
  function (t, n, e) {
    e(55), e(58), e(69), e(73), e(85), e(86), (t.exports = e(2).Promise);
  },
  function (t, n, e) {
    "use strict";
    var r = e(17),
      o = {};
    (o[e(0)("toStringTag")] = "z"),
      o + "" != "[object z]" &&
        e(5)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + r(this) + "]";
          },
          !0
        );
  },
  function (t, n, e) {
    t.exports =
      !e(7) &&
      !e(30)(function () {
        return (
          7 !=
          Object.defineProperty(e(20)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, n, e) {
    var r = e(6);
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, o;
      if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
      if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o;
      if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(59)(!0);
    e(32)(
      String,
      "String",
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          n = this._t,
          e = this._i;
        return e >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, n, e) {
    var r = e(21),
      o = e(22);
    t.exports = function (t) {
      return function (n, e) {
        var i,
          c,
          u = String(o(n)),
          a = r(e),
          f = u.length;
        return a < 0 || a >= f
          ? t
            ? ""
            : void 0
          : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343
          ? t
            ? u.charAt(a)
            : i
          : t
          ? u.slice(a, a + 2)
          : c - 56320 + ((i - 55296) << 10) + 65536;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(61),
      o = e(31),
      i = e(25),
      c = {};
    e(4)(c, e(0)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, n, e) {
        (t.prototype = r(c, { next: o(1, e) })), i(t, n + " Iterator");
      });
  },
  function (t, n, e) {
    var r = e(3),
      o = e(62),
      i = e(35),
      c = e(24)("IE_PROTO"),
      u = function () {},
      a = function () {
        var t,
          n = e(20)("iframe"),
          r = i.length;
        for (
          n.style.display = "none",
            e(36).appendChild(n),
            n.src = "javascript:",
            (t = n.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            a = t.F;
          r--;

        )
          delete a.prototype[i[r]];
        return a();
      };
    t.exports =
      Object.create ||
      function (t, n) {
        var e;
        return (
          null !== t ? ((u.prototype = r(t)), (e = new u()), (u.prototype = null), (e[c] = t)) : (e = a()),
          void 0 === n ? e : o(e, n)
        );
      };
  },
  function (t, n, e) {
    var r = e(11),
      o = e(3),
      i = e(33);
    t.exports = e(7)
      ? Object.defineProperties
      : function (t, n) {
          o(t);
          for (var e, c = i(n), u = c.length, a = 0; u > a; ) r.f(t, (e = c[a++]), n[e]);
          return t;
        };
  },
  function (t, n, e) {
    var r = e(12),
      o = e(23),
      i = e(65)(!1),
      c = e(24)("IE_PROTO");
    t.exports = function (t, n) {
      var e,
        u = o(t),
        a = 0,
        f = [];
      for (e in u) e != c && r(u, e) && f.push(e);
      for (; n.length > a; ) r(u, (e = n[a++])) && (~i(f, e) || f.push(e));
      return f;
    };
  },
  function (t, n, e) {
    var r = e(10);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
  },
  function (t, n, e) {
    var r = e(23),
      o = e(34),
      i = e(66);
    t.exports = function (t) {
      return function (n, e, c) {
        var u,
          a = r(n),
          f = o(a.length),
          s = i(c, f);
        if (t && e != e) {
          for (; f > s; ) if ((u = a[s++]) != u) return !0;
        } else for (; f > s; s++) if ((t || s in a) && a[s] === e) return t || s || 0;
        return !t && -1;
      };
    };
  },
  function (t, n, e) {
    var r = e(21),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, n) {
      return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
    };
  },
  function (t, n, e) {
    var r = e(12),
      o = e(68),
      i = e(24)("IE_PROTO"),
      c = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = o(t)),
          r(t, i)
            ? t[i]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? c
            : null
        );
      };
  },
  function (t, n, e) {
    var r = e(22);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, n, e) {
    for (
      var r = e(70),
        o = e(33),
        i = e(5),
        c = e(1),
        u = e(4),
        a = e(8),
        f = e(0),
        s = f("iterator"),
        l = f("toStringTag"),
        p = a.Array,
        v = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        d = o(v),
        h = 0;
      h < d.length;
      h++
    ) {
      var y,
        b = d[h],
        m = v[b],
        w = c[b],
        x = w && w.prototype;
      if (x && (x[s] || u(x, s, p), x[l] || u(x, l, b), (a[b] = p), m)) for (y in r) x[y] || i(x, y, r[y], !0);
    }
  },
  function (t, n, e) {
    "use strict";
    var r = e(71),
      o = e(72),
      i = e(8),
      c = e(23);
    (t.exports = e(32)(
      Array,
      "Array",
      function (t, n) {
        (this._t = c(t)), (this._i = 0), (this._k = n);
      },
      function () {
        var t = this._t,
          n = this._k,
          e = this._i++;
        return !t || e >= t.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (t, n, e) {
    var r = e(0)("unscopables"),
      o = Array.prototype;
    void 0 == o[r] && e(4)(o, r, {}),
      (t.exports = function (t) {
        o[r][t] = !0;
      });
  },
  function (t, n) {
    t.exports = function (t, n) {
      return { value: n, done: !!t };
    };
  },
  function (t, n, e) {
    "use strict";
    var r,
      o,
      i,
      c,
      u = e(18),
      a = e(1),
      f = e(14),
      s = e(17),
      l = e(13),
      p = e(6),
      v = e(15),
      d = e(74),
      h = e(75),
      y = e(37),
      b = e(38).set,
      m = e(80)(),
      w = e(26),
      x = e(39),
      g = e(81),
      _ = e(40),
      j = a.TypeError,
      O = a.process,
      P = O && O.versions,
      k = (P && P.v8) || "",
      S = a.Promise,
      T = "process" == s(O),
      L = function () {},
      E = (o = w.f),
      M = !!(function () {
        try {
          var t = S.resolve(1),
            n = ((t.constructor = {})[e(0)("species")] = function (t) {
              t(L, L);
            });
          return (
            (T || "function" == typeof PromiseRejectionEvent) &&
            t.then(L) instanceof n &&
            0 !== k.indexOf("6.6") &&
            -1 === g.indexOf("Chrome/66")
          );
        } catch (t) {}
      })(),
      A = function (t) {
        var n;
        return !(!p(t) || "function" != typeof (n = t.then)) && n;
      },
      F = function (t, n) {
        if (!t._n) {
          t._n = !0;
          var e = t._c;
          m(function () {
            for (
              var r = t._v,
                o = 1 == t._s,
                i = 0,
                c = function (n) {
                  var e,
                    i,
                    c,
                    u = o ? n.ok : n.fail,
                    a = n.resolve,
                    f = n.reject,
                    s = n.domain;
                  try {
                    u
                      ? (o || (2 == t._h && N(t), (t._h = 1)),
                        !0 === u ? (e = r) : (s && s.enter(), (e = u(r)), s && (s.exit(), (c = !0))),
                        e === n.promise ? f(j("Promise-chain cycle")) : (i = A(e)) ? i.call(e, a, f) : a(e))
                      : f(r);
                  } catch (t) {
                    s && !c && s.exit(), f(t);
                  }
                };
              e.length > i;

            )
              c(e[i++]);
            (t._c = []), (t._n = !1), n && !t._h && C(t);
          });
        }
      },
      C = function (t) {
        b.call(a, function () {
          var n,
            e,
            r,
            o = t._v,
            i = D(t);
          if (
            (i &&
              ((n = x(function () {
                T
                  ? O.emit("unhandledRejection", o, t)
                  : (e = a.onunhandledrejection)
                  ? e({ promise: t, reason: o })
                  : (r = a.console) && r.error && r.error("Unhandled promise rejection", o);
              })),
              (t._h = T || D(t) ? 2 : 1)),
            (t._a = void 0),
            i && n.e)
          )
            throw n.v;
        });
      },
      D = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      N = function (t) {
        b.call(a, function () {
          var n;
          T ? O.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({ promise: t, reason: t._v });
        });
      },
      R = function (t) {
        var n = this;
        n._d || ((n._d = !0), ((n = n._w || n)._v = t), (n._s = 2), n._a || (n._a = n._c.slice()), F(n, !0));
      },
      I = function (t) {
        var n,
          e = this;
        if (!e._d) {
          (e._d = !0), (e = e._w || e);
          try {
            if (e === t) throw j("Promise can't be resolved itself");
            (n = A(t))
              ? m(function () {
                  var r = { _w: e, _d: !1 };
                  try {
                    n.call(t, f(I, r, 1), f(R, r, 1));
                  } catch (t) {
                    R.call(r, t);
                  }
                })
              : ((e._v = t), (e._s = 1), F(e, !1));
          } catch (t) {
            R.call({ _w: e, _d: !1 }, t);
          }
        }
      };
    M ||
      ((S = function (t) {
        d(this, S, "Promise", "_h"), v(t), r.call(this);
        try {
          t(f(I, this, 1), f(R, this, 1));
        } catch (t) {
          R.call(this, t);
        }
      }),
      ((r = function (t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = e(82)(S.prototype, {
        then: function (t, n) {
          var e = E(y(this, S));
          return (
            (e.ok = "function" != typeof t || t),
            (e.fail = "function" == typeof n && n),
            (e.domain = T ? O.domain : void 0),
            this._c.push(e),
            this._a && this._a.push(e),
            this._s && F(this, !1),
            e.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new r();
        (this.promise = t), (this.resolve = f(I, t, 1)), (this.reject = f(R, t, 1));
      }),
      (w.f = E =
        function (t) {
          return t === S || t === c ? new i(t) : o(t);
        })),
      l(l.G + l.W + l.F * !M, { Promise: S }),
      e(25)(S, "Promise"),
      e(83)("Promise"),
      (c = e(2).Promise),
      l(l.S + l.F * !M, "Promise", {
        reject: function (t) {
          var n = E(this);
          return (0, n.reject)(t), n.promise;
        },
      }),
      l(l.S + l.F * (u || !M), "Promise", {
        resolve: function (t) {
          return _(u && this === c ? S : this, t);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              M &&
              e(84)(function (t) {
                S.all(t).catch(L);
              })
            ),
        "Promise",
        {
          all: function (t) {
            var n = this,
              e = E(n),
              r = e.resolve,
              o = e.reject,
              i = x(function () {
                var e = [],
                  i = 0,
                  c = 1;
                h(t, !1, function (t) {
                  var u = i++,
                    a = !1;
                  e.push(void 0),
                    c++,
                    n.resolve(t).then(function (t) {
                      a || ((a = !0), (e[u] = t), --c || r(e));
                    }, o);
                }),
                  --c || r(e);
              });
            return i.e && o(i.v), e.promise;
          },
          race: function (t) {
            var n = this,
              e = E(n),
              r = e.reject,
              o = x(function () {
                h(t, !1, function (t) {
                  n.resolve(t).then(e.resolve, r);
                });
              });
            return o.e && r(o.v), e.promise;
          },
        }
      );
  },
  function (t, n) {
    t.exports = function (t, n, e, r) {
      if (!(t instanceof n) || (void 0 !== r && r in t)) throw TypeError(e + ": incorrect invocation!");
      return t;
    };
  },
  function (t, n, e) {
    var r = e(14),
      o = e(76),
      i = e(77),
      c = e(3),
      u = e(34),
      a = e(78),
      f = {},
      s = {};
    ((n = t.exports =
      function (t, n, e, l, p) {
        var v,
          d,
          h,
          y,
          b = p
            ? function () {
                return t;
              }
            : a(t),
          m = r(e, l, n ? 2 : 1),
          w = 0;
        if ("function" != typeof b) throw TypeError(t + " is not iterable!");
        if (i(b)) {
          for (v = u(t.length); v > w; w++)
            if ((y = n ? m(c((d = t[w]))[0], d[1]) : m(t[w])) === f || y === s) return y;
        } else for (h = b.call(t); !(d = h.next()).done; ) if ((y = o(h, m, d.value, n)) === f || y === s) return y;
      }).BREAK = f),
      (n.RETURN = s);
  },
  function (t, n, e) {
    var r = e(3);
    t.exports = function (t, n, e, o) {
      try {
        return o ? n(r(e)[0], e[1]) : n(e);
      } catch (n) {
        var i = t.return;
        throw (void 0 !== i && r(i.call(t)), n);
      }
    };
  },
  function (t, n, e) {
    var r = e(8),
      o = e(0)("iterator"),
      i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || i[o] === t);
    };
  },
  function (t, n, e) {
    var r = e(17),
      o = e(0)("iterator"),
      i = e(8);
    t.exports = e(2).getIteratorMethod = function (t) {
      if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
    };
  },
  function (t, n) {
    t.exports = function (t, n, e) {
      var r = void 0 === e;
      switch (n.length) {
        case 0:
          return r ? t() : t.call(e);
        case 1:
          return r ? t(n[0]) : t.call(e, n[0]);
        case 2:
          return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
        case 3:
          return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
        case 4:
          return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
      }
      return t.apply(e, n);
    };
  },
  function (t, n, e) {
    var r = e(1),
      o = e(38).set,
      i = r.MutationObserver || r.WebKitMutationObserver,
      c = r.process,
      u = r.Promise,
      a = "process" == e(10)(c);
    t.exports = function () {
      var t,
        n,
        e,
        f = function () {
          var r, o;
          for (a && (r = c.domain) && r.exit(); t; ) {
            (o = t.fn), (t = t.next);
            try {
              o();
            } catch (r) {
              throw (t ? e() : (n = void 0), r);
            }
          }
          (n = void 0), r && r.enter();
        };
      if (a)
        e = function () {
          c.nextTick(f);
        };
      else if (!i || (r.navigator && r.navigator.standalone))
        if (u && u.resolve) {
          var s = u.resolve(void 0);
          e = function () {
            s.then(f);
          };
        } else
          e = function () {
            o.call(r, f);
          };
      else {
        var l = !0,
          p = document.createTextNode("");
        new i(f).observe(p, { characterData: !0 }),
          (e = function () {
            p.data = l = !l;
          });
      }
      return function (r) {
        var o = { fn: r, next: void 0 };
        n && (n.next = o), t || ((t = o), e()), (n = o);
      };
    };
  },
  function (t, n, e) {
    var r = e(1).navigator;
    t.exports = (r && r.userAgent) || "";
  },
  function (t, n, e) {
    var r = e(5);
    t.exports = function (t, n, e) {
      for (var o in n) r(t, o, n[o], e);
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(1),
      o = e(11),
      i = e(7),
      c = e(0)("species");
    t.exports = function (t) {
      var n = r[t];
      i &&
        n &&
        !n[c] &&
        o.f(n, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, n, e) {
    var r = e(0)("iterator"),
      o = !1;
    try {
      var i = [7][r]();
      (i.return = function () {
        o = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, n) {
      if (!n && !o) return !1;
      var e = !1;
      try {
        var i = [7],
          c = i[r]();
        (c.next = function () {
          return { done: (e = !0) };
        }),
          (i[r] = function () {
            return c;
          }),
          t(i);
      } catch (t) {}
      return e;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(13),
      o = e(2),
      i = e(1),
      c = e(37),
      u = e(40);
    r(r.P + r.R, "Promise", {
      finally: function (t) {
        var n = c(this, o.Promise || i.Promise),
          e = "function" == typeof t;
        return this.then(
          e
            ? function (e) {
                return u(n, t()).then(function () {
                  return e;
                });
              }
            : t,
          e
            ? function (e) {
                return u(n, t()).then(function () {
                  throw e;
                });
              }
            : t
        );
      },
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(13),
      o = e(26),
      i = e(39);
    r(r.S, "Promise", {
      try: function (t) {
        var n = o.f(this),
          e = i(t);
        return (e.e ? n.reject : n.resolve)(e.v), n.promise;
      },
    });
  },
  function (t, n, e) {
    "use strict";
    function r() {
      try {
        return document.currentScript.src;
      } catch (n) {
        var t = document.getElementsByTagName("script");
        return t[t.length - 1].src;
      }
    }
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (e.p = r().replace(/[^/\\\\]+$/, "")),
      (n.getCurrentPath = r);
  },
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), (n.L2Dwidget = void 0);
    var r,
      o = (function () {
        function t(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (n, e, r) {
          return e && t(n.prototype, e), r && t(n, r), n;
        };
      })(),
      i = e(89),
      c = (r = i) && r.__esModule ? r : { default: r },
      u = e(52);
    var a = void 0,
      f = new ((function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          o(t, [
            {
              key: "init",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, u.configApplyer)(t),
                  (!u.config.mobile.show && c.default.mobile()) ||
                    e
                      .e(0)
                      .then(e.bind(null, 133))
                      .then(function (t) {
                        (a = t).theRealInit();
                      })
                      .catch(function (t) {
                        console.error(t);
                      });
              },
            },
            {
              key: "captureFrame",
              value: function (t) {
                return a.captureFrame(t);
              },
            },
            {
              key: "downloadFrame",
              value: function () {
                this.captureFrame(function (t) {
                  var n = document.createElement("a");
                  document.body.appendChild(n),
                    n.setAttribute("type", "hidden"),
                    (n.href = t),
                    (n.download = "live2d.png"),
                    n.click();
                });
              },
            },
          ]),
          t
        );
      })())();
    n.L2Dwidget = f;
  },
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o = window.device,
      i = {},
      c = [];
    window.device = i;
    var u = window.document.documentElement,
      a = window.navigator.userAgent.toLowerCase(),
      f = [
        "googletv",
        "viera",
        "smarttv",
        "internet.tv",
        "netcast",
        "nettv",
        "appletv",
        "boxee",
        "kylo",
        "roku",
        "dlnadoc",
        "roku",
        "pov_tv",
        "hbbtv",
        "ce-html",
      ];
    function s(t) {
      return -1 !== a.indexOf(t);
    }
    function l(t) {
      return u.className.match(new RegExp(t, "i"));
    }
    function p(t) {
      var n = null;
      l(t) || ((n = u.className.replace(/^\s+|\s+$/g, "")), (u.className = n + " " + t));
    }
    function v(t) {
      l(t) && (u.className = u.className.replace(" " + t, ""));
    }
    function d() {
      i.landscape() ? (v("portrait"), p("landscape"), h("landscape")) : (v("landscape"), p("portrait"), h("portrait")),
        m();
    }
    function h(t) {
      for (var n in c) c[n](t);
    }
    (i.macos = function () {
      return s("mac");
    }),
      (i.ios = function () {
        return i.iphone() || i.ipod() || i.ipad();
      }),
      (i.iphone = function () {
        return !i.windows() && s("iphone");
      }),
      (i.ipod = function () {
        return s("ipod");
      }),
      (i.ipad = function () {
        return s("ipad");
      }),
      (i.android = function () {
        return !i.windows() && s("android");
      }),
      (i.androidPhone = function () {
        return i.android() && s("mobile");
      }),
      (i.androidTablet = function () {
        return i.android() && !s("mobile");
      }),
      (i.blackberry = function () {
        return s("blackberry") || s("bb10") || s("rim");
      }),
      (i.blackberryPhone = function () {
        return i.blackberry() && !s("tablet");
      }),
      (i.blackberryTablet = function () {
        return i.blackberry() && s("tablet");
      }),
      (i.windows = function () {
        return s("windows");
      }),
      (i.windowsPhone = function () {
        return i.windows() && s("phone");
      }),
      (i.windowsTablet = function () {
        return i.windows() && s("touch") && !i.windowsPhone();
      }),
      (i.fxos = function () {
        return (s("(mobile") || s("(tablet")) && s(" rv:");
      }),
      (i.fxosPhone = function () {
        return i.fxos() && s("mobile");
      }),
      (i.fxosTablet = function () {
        return i.fxos() && s("tablet");
      }),
      (i.meego = function () {
        return s("meego");
      }),
      (i.cordova = function () {
        return window.cordova && "file:" === location.protocol;
      }),
      (i.nodeWebkit = function () {
        return "object" === r(window.process);
      }),
      (i.mobile = function () {
        return (
          i.androidPhone() ||
          i.iphone() ||
          i.ipod() ||
          i.windowsPhone() ||
          i.blackberryPhone() ||
          i.fxosPhone() ||
          i.meego()
        );
      }),
      (i.tablet = function () {
        return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet();
      }),
      (i.desktop = function () {
        return !i.tablet() && !i.mobile();
      }),
      (i.television = function () {
        for (var t = 0; t < f.length; ) {
          if (s(f[t])) return !0;
          t++;
        }
        return !1;
      }),
      (i.portrait = function () {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange")
          ? screen.orientation.type.includes("portrait")
          : window.innerHeight / window.innerWidth > 1;
      }),
      (i.landscape = function () {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange")
          ? screen.orientation.type.includes("landscape")
          : window.innerHeight / window.innerWidth < 1;
      }),
      (i.noConflict = function () {
        return (window.device = o), this;
      }),
      i.ios()
        ? i.ipad()
          ? p("ios ipad tablet")
          : i.iphone()
          ? p("ios iphone mobile")
          : i.ipod() && p("ios ipod mobile")
        : i.macos()
        ? p("macos desktop")
        : i.android()
        ? i.androidTablet()
          ? p("android tablet")
          : p("android mobile")
        : i.blackberry()
        ? i.blackberryTablet()
          ? p("blackberry tablet")
          : p("blackberry mobile")
        : i.windows()
        ? i.windowsTablet()
          ? p("windows tablet")
          : i.windowsPhone()
          ? p("windows mobile")
          : p("windows desktop")
        : i.fxos()
        ? i.fxosTablet()
          ? p("fxos tablet")
          : p("fxos mobile")
        : i.meego()
        ? p("meego mobile")
        : i.nodeWebkit()
        ? p("node-webkit")
        : i.television()
        ? p("television")
        : i.desktop() && p("desktop"),
      i.cordova() && p("cordova"),
      (i.onChangeOrientation = function (t) {
        "function" == typeof t && c.push(t);
      });
    var y = "resize";
    function b(t) {
      for (var n = 0; n < t.length; n++) if (i[t[n]]()) return t[n];
      return "unknown";
    }
    function m() {
      i.orientation = b(["portrait", "landscape"]);
    }
    Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (y = "orientationchange"),
      window.addEventListener
        ? window.addEventListener(y, d, !1)
        : window.attachEvent
        ? window.attachEvent(y, d)
        : (window[y] = d),
      d(),
      (i.type = b(["mobile", "tablet", "desktop"])),
      (i.os = b(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"])),
      m(),
      (n.default = i);
  },
  function (t, n, e) {
    var r = e(41),
      o = e(42),
      i = e(94),
      c = e(129),
      u = o(function (t) {
        return t.push(void 0, i), r(c, void 0, t);
      });
    t.exports = u;
  },
  function (t, n) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    var r = e(41),
      o = Math.max;
    t.exports = function (t, n, e) {
      return (
        (n = o(void 0 === n ? t.length - 1 : n, 0)),
        function () {
          for (var i = arguments, c = -1, u = o(i.length - n, 0), a = Array(u); ++c < u; ) a[c] = i[n + c];
          c = -1;
          for (var f = Array(n + 1); ++c < n; ) f[c] = i[c];
          return (f[n] = e(a)), r(t, this, f);
        }
      );
    };
  },
  function (t, n) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    var r = e(43),
      o = e(9);
    t.exports = function t(n, e, i, c, u, a) {
      return o(n) && o(e) && (a.set(e, n), r(n, e, void 0, t, a), a.delete(e)), n;
    };
  },
  function (t, n, e) {
    var r = e(96),
      o = e(97),
      i = e(98),
      c = e(99),
      u = e(100);
    function a(t) {
      var n = -1,
        e = null == t ? 0 : t.length;
      for (this.clear(); ++n < e; ) {
        var r = t[n];
        this.set(r[0], r[1]);
      }
    }
    (a.prototype.clear = r),
      (a.prototype.delete = o),
      (a.prototype.get = i),
      (a.prototype.has = c),
      (a.prototype.set = u),
      (t.exports = a);
  },
  function (t, n) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, n, e) {
    var r = e(16),
      o = Array.prototype.splice;
    t.exports = function (t) {
      var n = this.__data__,
        e = r(n, t);
      return !(e < 0 || (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, 0));
    };
  },
  function (t, n, e) {
    var r = e(16);
    t.exports = function (t) {
      var n = this.__data__,
        e = r(n, t);
      return e < 0 ? void 0 : n[e][1];
    };
  },
  function (t, n, e) {
    var r = e(16);
    t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  },
  function (t, n, e) {
    var r = e(16);
    t.exports = function (t, n) {
      var e = this.__data__,
        o = r(e, t);
      return o < 0 ? (++this.size, e.push([t, n])) : (e[o][1] = n), this;
    };
  },
  function (t, n, e) {
    var r = e(102),
      o = (function () {
        try {
          var t = r(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })();
    t.exports = o;
  },
  function (t, n) {
    t.exports = function (t, n) {
      return null == t ? void 0 : t[n];
    };
  },
  function (t, n, e) {
    var r = e(104)();
    t.exports = r;
  },
  function (t, n) {
    t.exports = function (t) {
      return function (n, e, r) {
        for (var o = -1, i = Object(n), c = r(n), u = c.length; u--; ) {
          var a = c[t ? u : ++o];
          if (!1 === e(i[a], a, i)) break;
        }
        return n;
      };
    };
  },
  function (t, n, e) {
    var r = e(44),
      o = e(106),
      i = e(110),
      c = e(113),
      u = e(114),
      a = e(118),
      f = e(119),
      s = e(120),
      l = e(123),
      p = e(47),
      v = e(9),
      d = e(124),
      h = e(125),
      y = e(50),
      b = e(126);
    t.exports = function (t, n, e, m, w, x, g) {
      var _ = y(t, e),
        j = y(n, e),
        O = g.get(j);
      if (O) r(t, e, O);
      else {
        var P = x ? x(_, j, e + "", t, n, g) : void 0,
          k = void 0 === P;
        if (k) {
          var S = f(j),
            T = !S && l(j),
            L = !S && !T && h(j);
          (P = j),
            S || T || L
              ? f(_)
                ? (P = _)
                : s(_)
                ? (P = c(_))
                : T
                ? ((k = !1), (P = o(j, !0)))
                : L
                ? ((k = !1), (P = i(j, !0)))
                : (P = [])
              : d(j) || a(j)
              ? ((P = _), a(_) ? (P = b(_)) : (v(_) && !p(_)) || (P = u(j)))
              : (k = !1);
        }
        k && (g.set(j, P), w(P, j, m, x, g), g.delete(j)), r(t, e, P);
      }
    };
  },
  function (t, n, e) {
    (function (t) {
      var r = e(45),
        o = "object" == typeof n && n && !n.nodeType && n,
        i = o && "object" == typeof t && t && !t.nodeType && t,
        c = i && i.exports === o ? r.Buffer : void 0,
        u = c ? c.allocUnsafe : void 0;
      t.exports = function (t, n) {
        if (n) return t.slice();
        var e = t.length,
          r = u ? u(e) : new t.constructor(e);
        return t.copy(r), r;
      };
    }).call(n, e(107)(t));
  },
  function (t, n) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, n, e) {
    (function (n) {
      var e = "object" == typeof n && n && n.Object === Object && n;
      t.exports = e;
    }).call(n, e(109));
  },
  function (t, n) {
    var e;
    e = (function () {
      return this;
    })();
    try {
      e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  },
  function (t, n, e) {
    var r = e(111);
    t.exports = function (t, n) {
      var e = n ? r(t.buffer) : t.buffer;
      return new t.constructor(e, t.byteOffset, t.length);
    };
  },
  function (t, n, e) {
    var r = e(112);
    t.exports = function (t) {
      var n = new t.constructor(t.byteLength);
      return new r(n).set(new r(t)), n;
    };
  },
  function (t, n, e) {
    var r = e(45).Uint8Array;
    t.exports = r;
  },
  function (t, n) {
    t.exports = function (t, n) {
      var e = -1,
        r = t.length;
      for (n || (n = Array(r)); ++e < r; ) n[e] = t[e];
      return n;
    };
  },
  function (t, n, e) {
    var r = e(115),
      o = e(46),
      i = e(117);
    t.exports = function (t) {
      return "function" != typeof t.constructor || i(t) ? {} : r(o(t));
    };
  },
  function (t, n, e) {
    var r = e(9),
      o = Object.create,
      i = (function () {
        function t() {}
        return function (n) {
          if (!r(n)) return {};
          if (o) return o(n);
          t.prototype = n;
          var e = new t();
          return (t.prototype = void 0), e;
        };
      })();
    t.exports = i;
  },
  function (t, n) {
    t.exports = function (t, n) {
      return function (e) {
        return t(n(e));
      };
    };
  },
  function (t, n) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, n) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, n) {
    var e = Array.isArray;
    t.exports = e;
  },
  function (t, n, e) {
    var r = e(121),
      o = e(49);
    t.exports = function (t) {
      return o(t) && r(t);
    };
  },
  function (t, n, e) {
    var r = e(47),
      o = e(122);
    t.exports = function (t) {
      return null != t && o(t.length) && !r(t);
    };
  },
  function (t, n) {
    var e = 9007199254740991;
    t.exports = function (t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= e;
    };
  },
  function (t, n) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, n, e) {
    var r = e(48),
      o = e(46),
      i = e(49),
      c = "[object Object]",
      u = Function.prototype,
      a = Object.prototype,
      f = u.toString,
      s = a.hasOwnProperty,
      l = f.call(Object);
    t.exports = function (t) {
      if (!i(t) || r(t) != c) return !1;
      var n = o(t);
      if (null === n) return !0;
      var e = s.call(n, "constructor") && n.constructor;
      return "function" == typeof e && e instanceof e && f.call(e) == l;
    };
  },
  function (t, n) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, n, e) {
    var r = e(127),
      o = e(51);
    t.exports = function (t) {
      return r(t, o(t));
    };
  },
  function (t, n, e) {
    var r = e(128),
      o = e(28);
    t.exports = function (t, n, e, i) {
      var c = !e;
      e || (e = {});
      for (var u = -1, a = n.length; ++u < a; ) {
        var f = n[u],
          s = i ? i(e[f], t[f], f, e, t) : void 0;
        void 0 === s && (s = t[f]), c ? o(e, f, s) : r(e, f, s);
      }
      return e;
    };
  },
  function (t, n, e) {
    var r = e(28),
      o = e(27),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t, n, e) {
      var c = t[n];
      (i.call(t, n) && o(c, e) && (void 0 !== e || n in t)) || r(t, n, e);
    };
  },
  function (t, n, e) {
    var r = e(43),
      o = e(130)(function (t, n, e, o) {
        r(t, n, e, o);
      });
    t.exports = o;
  },
  function (t, n, e) {
    var r = e(42),
      o = e(131);
    t.exports = function (t) {
      return r(function (n, e) {
        var r = -1,
          i = e.length,
          c = i > 1 ? e[i - 1] : void 0,
          u = i > 2 ? e[2] : void 0;
        for (
          c = t.length > 3 && "function" == typeof c ? (i--, c) : void 0,
            u && o(e[0], e[1], u) && ((c = i < 3 ? void 0 : c), (i = 1)),
            n = Object(n);
          ++r < i;

        ) {
          var a = e[r];
          a && t(n, a, r, c);
        }
        return n;
      });
    };
  },
  function (t, n) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = {
      model: {
        jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@latest/assets/shizuku.model.json",
        scale: 1,
        hHeadPos: 0.5,
        vHeadPos: 0.618,
        myDefine: [],
      },
      display: { superSample: 2, width: 150, height: 300, position: "right", hOffset: 0, vOffset: -20 },
      mobile: { show: !0, scale: 0.5, motion: !0 },
      name: { canvas: "live2dcanvas", div: "live2d-widget" },
      react: {
        opacityDefault: 0.7,
        opacityOnHover: 0.2,
        myFunc: function (t) {},
      },
      dev: {
        log: !1,
        border: !1,
        mouseLog: !1,
        mouseFunc: function (t, n, e, r) {},
      },
    };
    t.exports = r;
  },
]).L2Dwidget;
webpackJsonpL2Dwidget([0], {
  133: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.captureFrame = i.theRealInit = void 0);
    var r = e(52),
      o = e(137),
      n = e(134),
      s = e(135),
      _ = e(141),
      a = e(138),
      h = e(136),
      $ = new _.cManager(),
      l = void 0,
      u = !1,
      p = null,
      c = null,
      f = null,
      g = null,
      y = !1,
      d = 0.5;
    function m(t, i, e) {
      if (i.x < e.left + e.width && i.y < e.top + e.height && i.x > e.left && i.y > e.top) return i;
      var r = t.x - i.x,
        o = t.y - i.y;
      function n(t, i) {
        return (
          (180 *
            Math.acos(
              ((e = { x: 0, y: 1 }),
              (o = t),
              (n = i),
              (s = Math.sqrt(o * o + n * n)),
              (r = { x: o / s, y: n / s }),
              e.x * r.x + e.y * r.y)
            )) /
          Math.PI
        );
        var e, r, o, n, s;
      }
      var s = n(r, o);
      i.x < t.x && (s = 360 - s);
      var _ = 360 - n(e.left - t.x, -1 * (e.top - t.y)),
        a = 360 - n(e.left - t.x, -1 * (e.top + e.height - t.y)),
        h = n(e.left + e.width - t.x, -1 * (e.top - t.y)),
        $ = n(e.left + e.width - t.x, -1 * (e.top + e.height - t.y)),
        l = o / r,
        u = {};
      if (s < h) {
        var p = e.top - t.y,
          c = p / l;
        u = { y: t.y + p, x: t.x + c };
      } else if (s < $) {
        var f = e.left + e.width - t.x,
          g = f * l;
        u = { y: t.y + g, x: t.x + f };
      } else if (s < a) {
        var y = e.top + e.height - t.y,
          d = y / l;
        u = { y: t.y + y, x: t.x + d };
      } else if (s < _) {
        var m = t.x - e.left,
          T = m * l;
        u = { y: t.y - T, x: t.x - m };
      } else {
        var P = e.top - t.y,
          S = P / l;
        u = { y: t.y + P, x: t.x + S };
      }
      return u;
    }
    function T(t) {
      y = !0;
      var i = o.currCanvas.getBoundingClientRect(),
        e = E(t.clientX - i.left),
        r = A(t.clientY - i.top),
        n = m({ x: i.left + i.width / 2, y: i.top + i.height * d }, { x: t.clientX, y: t.clientY }, i),
        s = L(n.x - i.left),
        _ = M(n.y - i.top);
      h.cDefine.DEBUG_MOUSE_LOG && e, r, $.tapEvent(s, _);
    }
    function P() {
      y && (y = !1), p.setPoint(0, 0);
    }
    function S(t) {
      if ("mousedown" == t.type) T(t);
      else if ("mousemove" == t.type)
        !(function (t) {
          y = !0;
          var i = o.currCanvas.getBoundingClientRect(),
            e = E(t.clientX - i.left),
            r = A(t.clientY - i.top),
            n = m({ x: i.left + i.width / 2, y: i.top + i.height * d }, { x: t.clientX, y: t.clientY }, i),
            s = L(n.x - i.left),
            _ = M(n.y - i.top);
          h.cDefine.DEBUG_MOUSE_LOG && e, r, p.setPoint(s, _);
        })(t);
      else if ("mouseup" == t.type) {
        if ("button" in t && 0 != t.button) return;
      } else "mouseleave" == t.type && P();
    }
    function v(t) {
      var i,
        e,
        r,
        n,
        s,
        _,
        a,
        $ = t.touches[0];
      "touchstart" == t.type
        ? 1 == t.touches.length && T($)
        : "touchmove" == t.type
        ? ((i = $),
          (e = o.currCanvas.getBoundingClientRect()),
          (r = E(i.clientX - e.left)),
          (n = A(i.clientY - e.top)),
          (s = m({ x: e.left + e.width / 2, y: e.top + e.height * d }, { x: i.clientX, y: i.clientY }, e)),
          (_ = L(s.x - e.left)),
          (a = M(s.y - e.top)),
          h.cDefine.DEBUG_MOUSE_LOG && y && (r, n, p.setPoint(_, a)))
        : "touchend" == t.type && P();
    }
    function L(t) {
      var i = g.transformX(t);
      return c.invertTransformX(i);
    }
    function M(t) {
      var i = g.transformY(t);
      return c.invertTransformY(i);
    }
    function E(t) {
      return g.transformX(t);
    }
    function A(t) {
      return g.transformY(t);
    }
    (i.theRealInit = function () {
      (0, o.createElement)(),
        o.currCanvas.addEventListener &&
          (window.addEventListener("click", S),
          window.addEventListener("mousedown", S),
          window.addEventListener("mousemove", S),
          window.addEventListener("mouseup", S),
          document.addEventListener("mouseleave", S),
          window.addEventListener("touchstart", v),
          window.addEventListener("touchend", v),
          window.addEventListener("touchmove", v)),
        (p = new s.L2DTargetPoint());
      var t,
        i = o.currCanvas.height / o.currCanvas.width,
        e = h.cDefine.VIEW_LOGICAL_LEFT,
        _ = h.cDefine.VIEW_LOGICAL_RIGHT,
        y = -i,
        d = i;
      (c = new s.L2DViewMatrix()).setScreenRect(e, _, y, d),
        c.setMaxScreenRect(
          h.cDefine.VIEW_LOGICAL_MAX_LEFT,
          h.cDefine.VIEW_LOGICAL_MAX_RIGHT,
          h.cDefine.VIEW_LOGICAL_MAX_BOTTOM,
          h.cDefine.VIEW_LOGICAL_MAX_TOP
        ),
        (f = new s.L2DMatrix44()).multScale(1, o.currCanvas.width / o.currCanvas.height),
        (g = new s.L2DMatrix44()).multTranslate(-o.currCanvas.width / 2, -o.currCanvas.height / 2),
        g.multScale(2 / o.currCanvas.width, -2 / o.currCanvas.height),
        n.Live2D.setGL(o.currWebGL),
        o.currWebGL.clearColor(0, 0, 0, 0),
        (t = r.config.model.jsonPath),
        ($.reloadFlg = !0),
        $.count++,
        $.changeModel(o.currWebGL, t),
        u ||
          ((u = !0),
          (function t() {
            !(function () {
              a.MatrixStack.reset(),
                a.MatrixStack.loadIdentity(),
                p.update(),
                $.setDrag(p.getX(), p.getY()),
                o.currWebGL.clear(o.currWebGL.COLOR_BUFFER_BIT),
                a.MatrixStack.multMatrix(f.getArray()),
                a.MatrixStack.multMatrix(c.getArray()),
                a.MatrixStack.push();
              for (var t = 0; t < $.numModels(); t++) {
                var i = $.getModel(t);
                if (null == i) return;
                i.initialized && !i.updating && (i.update(), i.draw(o.currWebGL));
              }
              a.MatrixStack.pop();
            })();
            var i =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.msRequestAnimationFrame;
            i(t, o.currCanvas), void 0 !== l && (l(o.currCanvas.toDataURL()), (l = void 0));
          })());
    }),
      (i.captureFrame = function (t) {
        l = t;
      });
  },
  134: function (t, i, e) {
    "use strict";
    (function (t) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var e = !0;
      function r() {
        e || ((this._$MT = null), (this._$5S = null), (this._$NP = 0), r._$42++, (this._$5S = new U(this)));
      }
      function o(t) {
        if (!e) {
          (this.clipContextList = new Array()),
            (this.glcontext = t.gl),
            (this.dp_webgl = t),
            (this.curFrameNo = 0),
            (this.firstError_clipInNotUpdate = !0),
            (this.colorBuffer = 0),
            (this.isInitGLFBFunc = !1),
            (this.tmpBoundsOnModel = new P()),
            _t.glContext.length > _t.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()),
            (this.tmpModelToViewMatrix = new O()),
            (this.tmpMatrix2 = new O()),
            (this.tmpMatrixForMask = new O()),
            (this.tmpMatrixForDraw = new O()),
            (this.CHANNEL_COLORS = new Array());
          var i = new E();
          ((i = new E()).r = 0),
            (i.g = 0),
            (i.b = 0),
            (i.a = 1),
            this.CHANNEL_COLORS.push(i),
            ((i = new E()).r = 1),
            (i.g = 0),
            (i.b = 0),
            (i.a = 0),
            this.CHANNEL_COLORS.push(i),
            ((i = new E()).r = 0),
            (i.g = 1),
            (i.b = 0),
            (i.a = 0),
            this.CHANNEL_COLORS.push(i),
            ((i = new E()).r = 0),
            (i.g = 0),
            (i.b = 1),
            (i.a = 0),
            this.CHANNEL_COLORS.push(i);
          for (var r = 0; r < this.CHANNEL_COLORS.length; r++)
            this.dp_webgl.setChannelFlagAsColor(r, this.CHANNEL_COLORS[r]);
        }
      }
      function n(t, i, e) {
        (this.clipIDList = new Array()), (this.clipIDList = e), (this.clippingMaskDrawIndexList = new Array());
        for (var r = 0; r < e.length; r++) this.clippingMaskDrawIndexList.push(i.getDrawDataIndex(e[r]));
        (this.clippedDrawContextList = new Array()),
          (this.isUsing = !0),
          (this.layoutChannelNo = 0),
          (this.layoutBounds = new P()),
          (this.allClippedDrawRect = new P()),
          (this.matrixForMask = new Float32Array(16)),
          (this.matrixForDraw = new Float32Array(16)),
          (this.owner = t);
      }
      function s() {
        e ||
          ((this._$dP = null),
          (this._$eo = null),
          (this._$V0 = null),
          (this._$dP = 1e3),
          (this._$eo = 1e3),
          (this._$V0 = 1),
          this._$a0());
      }
      function _() {}
      function a() {
        e || ((this.x = null), (this.y = null), (this.width = null), (this.height = null));
      }
      function h(t) {
        e || et.prototype.constructor.call(this, t);
      }
      function $(t) {
        e || et.prototype.constructor.call(this, t);
      }
      function l() {
        e || ((this._$vo = null), (this._$F2 = null), (this._$ao = 400), (this._$1S = 400), l._$42++);
      }
      function u() {
        e ||
          ((this.p1 = new p()),
          (this.p2 = new p()),
          (this._$Fo = 0),
          (this._$Db = 0),
          (this._$L2 = 0),
          (this._$M2 = 0),
          (this._$ks = 0),
          (this._$9b = 0),
          (this._$iP = 0),
          (this._$iT = 0),
          (this._$lL = new Array()),
          (this._$qP = new Array()),
          this.setup(0.3, 0.5, 0.1));
      }
      function p() {
        (this._$p = 1),
          (this.x = 0),
          (this.y = 0),
          (this.vx = 0),
          (this.vy = 0),
          (this.ax = 0),
          (this.ay = 0),
          (this.fx = 0),
          (this.fy = 0),
          (this._$s0 = 0),
          (this._$70 = 0),
          (this._$7L = 0),
          (this._$HL = 0);
      }
      function c(t, i, e) {
        (this._$wL = null), (this.scale = null), (this._$V0 = null), (this._$wL = t), (this.scale = i), (this._$V0 = e);
      }
      function f(t, i, e, r) {
        c.prototype.constructor.call(this, i, e, r), (this._$tL = null), (this._$tL = t);
      }
      function g(t, i, e) {
        (this._$wL = null), (this.scale = null), (this._$V0 = null), (this._$wL = t), (this.scale = i), (this._$V0 = e);
      }
      function y(t, i, e, r) {
        g.prototype.constructor.call(this, i, e, r), (this._$YP = null), (this._$YP = t);
      }
      function d() {
        e ||
          ((this._$fL = 0),
          (this._$gL = 0),
          (this._$B0 = 1),
          (this._$z0 = 1),
          (this._$qT = 0),
          (this.reflectX = !1),
          (this.reflectY = !1));
      }
      (r._$0s = 1),
        (r._$4s = 2),
        (r._$42 = 0),
        (r._$62 = function (t, i) {
          try {
            if ((i instanceof ArrayBuffer && (i = new DataView(i)), !(i instanceof DataView)))
              throw new ht("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
            var e,
              o = new Pt(i),
              n = o._$ST(),
              s = o._$ST(),
              a = o._$ST();
            if (109 != n || 111 != s || 99 != a) throw new ht("_$gi _$C _$li , _$Q0 _$P0.");
            if (((e = o._$ST()), o._$gr(e), e > G._$T7))
              throw (
                ((t._$NP |= r._$4s),
                new ht(
                  "_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + G._$T7 + " < _$f0 : " + e + " )@_$SS#loadModel()\n"
                ))
              );
            var h = o._$nP();
            if (e >= G._$s7) {
              var $ = o._$9T(),
                l = o._$9T();
              if (-30584 != $ || -30584 != l) throw ((t._$NP |= r._$0s), new ht("_$gi _$C _$li , _$0 _$6 _$Ui."));
            }
            t._$KS(h);
            var u = t.getModelContext();
            u.setDrawParam(t.getDrawParam()), u.init();
          } catch (t) {
            _._$Rb(t);
          }
        }),
        (r.prototype._$KS = function (t) {
          this._$MT = t;
        }),
        (r.prototype.getModelImpl = function () {
          return null == this._$MT && ((this._$MT = new l()), this._$MT._$zP()), this._$MT;
        }),
        (r.prototype.getCanvasWidth = function () {
          return null == this._$MT ? 0 : this._$MT.getCanvasWidth();
        }),
        (r.prototype.getCanvasHeight = function () {
          return null == this._$MT ? 0 : this._$MT.getCanvasHeight();
        }),
        (r.prototype.getParamFloat = function (t) {
          return "number" != typeof t && (t = this._$5S.getParamIndex($.getID(t))), this._$5S.getParamFloat(t);
        }),
        (r.prototype.setParamFloat = function (t, i, e) {
          "number" != typeof t && (t = this._$5S.getParamIndex($.getID(t))),
            arguments.length < 3 && (e = 1),
            this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 - e) + i * e);
        }),
        (r.prototype.addToParamFloat = function (t, i, e) {
          "number" != typeof t && (t = this._$5S.getParamIndex($.getID(t))),
            arguments.length < 3 && (e = 1),
            this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) + i * e);
        }),
        (r.prototype.multParamFloat = function (t, i, e) {
          "number" != typeof t && (t = this._$5S.getParamIndex($.getID(t))),
            arguments.length < 3 && (e = 1),
            this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 + (i - 1) * e));
        }),
        (r.prototype.getParamIndex = function (t) {
          return this._$5S.getParamIndex($.getID(t));
        }),
        (r.prototype.loadParam = function () {
          this._$5S.loadParam();
        }),
        (r.prototype.saveParam = function () {
          this._$5S.saveParam();
        }),
        (r.prototype.init = function () {
          this._$5S.init();
        }),
        (r.prototype.update = function () {
          this._$5S.update();
        }),
        (r.prototype._$Rs = function () {
          return _._$li("_$60 _$PT _$Rs()"), -1;
        }),
        (r.prototype._$Ds = function (t) {
          _._$li("_$60 _$PT _$SS#_$Ds() \n");
        }),
        (r.prototype._$K2 = function () {}),
        (r.prototype.draw = function () {}),
        (r.prototype.getModelContext = function () {
          return this._$5S;
        }),
        (r.prototype._$s2 = function () {
          return this._$NP;
        }),
        (r.prototype._$P7 = function (t, i, e, r) {
          var o = -1,
            n = 0,
            s = this;
          if (0 != e)
            if (1 == t.length) {
              p = t[0];
              var _ = 0 != s.getParamFloat(p),
                a = ((c = i[0]), s.getPartsOpacity(c)),
                h = e / r;
              _ ? (a += h) > 1 && (a = 1) : (a -= h) < 0 && (a = 0), s.setPartsOpacity(c, a);
            } else {
              for (u = 0; u < t.length; u++) {
                p = t[u];
                if ((f = 0 != s.getParamFloat(p))) {
                  if (o >= 0) break;
                  o = u;
                  c = i[u];
                  (n = s.getPartsOpacity(c)), (n += e / r) > 1 && (n = 1);
                }
              }
              o < 0 && ((o = 0), (n = 1), s.loadParam(), s.setParamFloat(t[o], n), s.saveParam());
              for (u = 0; u < t.length; u++) {
                c = i[u];
                if (o == u) s.setPartsOpacity(c, n);
                else {
                  var $,
                    l = s.getPartsOpacity(c);
                  (1 - ($ = n < 0.5 ? (-0.5 * n) / 0.5 + 1 : (0.5 * (1 - n)) / 0.5)) * (1 - n) > 0.15 &&
                    ($ = 1 - 0.15 / (1 - n)),
                    l > $ && (l = $),
                    s.setPartsOpacity(c, l);
                }
              }
            }
          else
            for (var u = 0; u < t.length; u++) {
              var p = t[u],
                c = i[u],
                f = 0 != s.getParamFloat(p);
              s.setPartsOpacity(c, f ? 1 : 0);
            }
        }),
        (r.prototype.setPartsOpacity = function (t, i) {
          "number" != typeof t && (t = this._$5S.getPartsDataIndex(h.getID(t))), this._$5S.setPartsOpacity(t, i);
        }),
        (r.prototype.getPartsDataIndex = function (t) {
          return t instanceof h || (t = h.getID(t)), this._$5S.getPartsDataIndex(t);
        }),
        (r.prototype.getPartsOpacity = function (t) {
          return (
            "number" != typeof t && (t = this._$5S.getPartsDataIndex(h.getID(t))),
            t < 0 ? 0 : this._$5S.getPartsOpacity(t)
          );
        }),
        (r.prototype.getDrawParam = function () {}),
        (r.prototype.getDrawDataIndex = function (t) {
          return this._$5S.getDrawDataIndex(R.getID(t));
        }),
        (r.prototype.getDrawData = function (t) {
          return this._$5S.getDrawData(t);
        }),
        (r.prototype.getTransformedPoints = function (t) {
          var i = this._$5S._$C2(t);
          return i instanceof lt ? i.getTransformedPoints() : null;
        }),
        (r.prototype.getIndexArray = function (t) {
          if (t < 0 || t >= this._$5S._$aS.length) return null;
          var i = this._$5S._$aS[t];
          return null != i && i.getType() == W._$wb && i instanceof $t ? i.getIndexArray() : null;
        }),
        (o.CHANNEL_COUNT = 4),
        (o.RENDER_TEXTURE_USE_MIPMAP = !1),
        (o.NOT_USED_FRAME = -100),
        (o.prototype._$L7 = function () {
          if (
            (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null),
            this.tmpMatrix2 && (this.tmpMatrix2 = null),
            this.tmpMatrixForMask && (this.tmpMatrixForMask = null),
            this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null),
            this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null),
            this.CHANNEL_COLORS)
          ) {
            for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
            this.CHANNEL_COLORS = [];
          }
          this.releaseShader();
        }),
        (o.prototype.releaseShader = function () {
          for (var t = _t.frameBuffers.length, i = 0; i < t; i++)
            this.gl.deleteFramebuffer(_t.frameBuffers[i].framebuffer);
          (_t.frameBuffers = []), (_t.glContext = []);
        }),
        (o.prototype.init = function (t, i, e) {
          for (var r = 0; r < i.length; r++) {
            var o = i[r].getClipIDList();
            if (null != o) {
              var s = this.findSameClip(o);
              null == s && ((s = new n(this, t, o)), this.clipContextList.push(s));
              var _ = i[r].getDrawDataID(),
                a = t.getDrawDataIndex(_);
              s.addClippedDrawData(_, a), (e[r].clipBufPre_clipContext = s);
            }
          }
        }),
        (o.prototype.getMaskRenderTexture = function () {
          var t;
          return (t = this.dp_webgl.createFramebuffer()), (_t.frameBuffers[this.dp_webgl.glno] = t), this.dp_webgl.glno;
        }),
        (o.prototype.setupClip = function (t, i) {
          for (var e = 0, r = 0; r < this.clipContextList.length; r++) {
            var o = this.clipContextList[r];
            this.calcClippedDrawTotalBounds(t, o), o.isUsing && e++;
          }
          if (e > 0) {
            var n = i.gl.getParameter(i.gl.FRAMEBUFFER_BINDING),
              s = new Array(4);
            (s[0] = 0),
              (s[1] = 0),
              (s[2] = i.gl.canvas.width),
              (s[3] = i.gl.canvas.height),
              i.gl.viewport(0, 0, _t.clippingMaskBufferSize, _t.clippingMaskBufferSize),
              this.setupLayoutBounds(e),
              i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, _t.frameBuffers[this.curFrameNo].framebuffer),
              i.gl.clearColor(0, 0, 0, 0),
              i.gl.clear(i.gl.COLOR_BUFFER_BIT);
            for (r = 0; r < this.clipContextList.length; r++) {
              var _ = (o = this.clipContextList[r]).allClippedDrawRect,
                a = (o.layoutChannelNo, o.layoutBounds);
              this.tmpBoundsOnModel._$jL(_), this.tmpBoundsOnModel.expand(0.05 * _.width, 0.05 * _.height);
              var h = a.width / this.tmpBoundsOnModel.width,
                $ = a.height / this.tmpBoundsOnModel.height;
              this.tmpMatrix2.identity(),
                this.tmpMatrix2.translate(-1, -1, 0),
                this.tmpMatrix2.scale(2, 2, 1),
                this.tmpMatrix2.translate(a.x, a.y, 0),
                this.tmpMatrix2.scale(h, $, 1),
                this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0),
                this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m),
                this.tmpMatrix2.identity(),
                this.tmpMatrix2.translate(a.x, a.y, 0),
                this.tmpMatrix2.scale(h, $, 1),
                this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0),
                this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
              for (var l = this.tmpMatrixForMask.getArray(), u = 0; u < 16; u++) o.matrixForMask[u] = l[u];
              var p = this.tmpMatrixForDraw.getArray();
              for (u = 0; u < 16; u++) o.matrixForDraw[u] = p[u];
              for (var c = o.clippingMaskDrawIndexList.length, f = 0; f < c; f++) {
                var g = o.clippingMaskDrawIndexList[f],
                  y = t.getDrawData(g),
                  d = t._$C2(g);
                i.setClipBufPre_clipContextForMask(o), y.draw(i, t, d);
              }
            }
            i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, n),
              i.setClipBufPre_clipContextForMask(null),
              i.gl.viewport(s[0], s[1], s[2], s[3]);
          }
        }),
        (o.prototype.getColorBuffer = function () {
          return this.colorBuffer;
        }),
        (o.prototype.findSameClip = function (t) {
          for (var i = 0; i < this.clipContextList.length; i++) {
            var e = this.clipContextList[i],
              r = e.clipIDList.length;
            if (r == t.length) {
              for (var o = 0, n = 0; n < r; n++)
                for (var s = e.clipIDList[n], _ = 0; _ < r; _++)
                  if (t[_] == s) {
                    o++;
                    break;
                  }
              if (o == r) return e;
            }
          }
          return null;
        }),
        (o.prototype.calcClippedDrawTotalBounds = function (t, i) {
          for (
            var e = t._$Ri.getModelImpl().getCanvasWidth(),
              r = t._$Ri.getModelImpl().getCanvasHeight(),
              o = e > r ? e : r,
              n = o,
              s = o,
              _ = 0,
              a = 0,
              h = i.clippedDrawContextList.length,
              $ = 0;
            $ < h;
            $++
          ) {
            var l = i.clippedDrawContextList[$].drawDataIndex,
              u = t._$C2(l);
            if (u._$yo()) {
              for (
                var p = u.getTransformedPoints(), c = p.length, f = [], g = [], y = 0, d = B._$i2;
                d < c;
                d += B._$No
              )
                (f[y] = p[d]), (g[y] = p[d + 1]), y++;
              var m = Math.min.apply(null, f),
                T = Math.min.apply(null, g),
                P = Math.max.apply(null, f),
                S = Math.max.apply(null, g);
              m < n && (n = m), T < s && (s = T), P > _ && (_ = P), S > a && (a = S);
            }
          }
          if (n == o)
            (i.allClippedDrawRect.x = 0),
              (i.allClippedDrawRect.y = 0),
              (i.allClippedDrawRect.width = 0),
              (i.allClippedDrawRect.height = 0),
              (i.isUsing = !1);
          else {
            var v = _ - n,
              L = a - s;
            (i.allClippedDrawRect.x = n),
              (i.allClippedDrawRect.y = s),
              (i.allClippedDrawRect.width = v),
              (i.allClippedDrawRect.height = L),
              (i.isUsing = !0);
          }
        }),
        (o.prototype.setupLayoutBounds = function (t) {
          var i = t / o.CHANNEL_COUNT,
            e = t % o.CHANNEL_COUNT;
          (i = ~~i), (e = ~~e);
          for (var r = 0, n = 0; n < o.CHANNEL_COUNT; n++) {
            var s = i + (n < e ? 1 : 0);
            if (0 == s);
            else if (1 == s)
              ((l = this.clipContextList[r++]).layoutChannelNo = n),
                (l.layoutBounds.x = 0),
                (l.layoutBounds.y = 0),
                (l.layoutBounds.width = 1),
                (l.layoutBounds.height = 1);
            else if (2 == s)
              for (var a = 0; a < s; a++) {
                var h = 0;
                ($ = ~~($ = a % 2)),
                  ((l = this.clipContextList[r++]).layoutChannelNo = n),
                  (l.layoutBounds.x = 0.5 * $),
                  (l.layoutBounds.y = 0),
                  (l.layoutBounds.width = 0.5),
                  (l.layoutBounds.height = 1);
              }
            else if (s <= 4)
              for (a = 0; a < s; a++) {
                ($ = ~~($ = a % 2)),
                  (h = ~~(h = a / 2)),
                  ((l = this.clipContextList[r++]).layoutChannelNo = n),
                  (l.layoutBounds.x = 0.5 * $),
                  (l.layoutBounds.y = 0.5 * h),
                  (l.layoutBounds.width = 0.5),
                  (l.layoutBounds.height = 0.5);
              }
            else if (s <= 9)
              for (a = 0; a < s; a++) {
                var $, l;
                ($ = ~~($ = a % 3)),
                  (h = ~~(h = a / 3)),
                  ((l = this.clipContextList[r++]).layoutChannelNo = n),
                  (l.layoutBounds.x = $ / 3),
                  (l.layoutBounds.y = h / 3),
                  (l.layoutBounds.width = 1 / 3),
                  (l.layoutBounds.height = 1 / 3);
              }
            else _._$li("_$6 _$0P mask count : %d", s);
          }
        }),
        (n.prototype.addClippedDrawData = function (t, i) {
          var e = new (function (t, i) {
            (this._$gP = t), (this.drawDataIndex = i);
          })(t, i);
          this.clippedDrawContextList.push(e);
        }),
        (s._$JT = function (t, i, e) {
          var r = t / i,
            o = e / i,
            n = 1 - (1 - o) * (1 - o),
            s = 1 - (1 - o) * (1 - o),
            _ = (1 / 3) * (1 - o) * n + (o * (2 / 3) + (1 / 3) * (1 - o)) * (1 - n),
            a = (o + (2 / 3) * (1 - o)) * s + (o * (1 / 3) + (2 / 3) * (1 - o)) * (1 - s),
            h = 1 - 3 * a + 3 * _ - 0,
            $ = 3 * a - 6 * _ + 0,
            l = 3 * _ - 0;
          if (r <= 0) return 0;
          if (r >= 1) return 1;
          var u = r * r;
          return h * (r * u) + $ * u + l * r + 0;
        }),
        (s.prototype._$a0 = function () {}),
        (s.prototype.setFadeIn = function (t) {
          this._$dP = t;
        }),
        (s.prototype.setFadeOut = function (t) {
          this._$eo = t;
        }),
        (s.prototype._$pT = function (t) {
          this._$V0 = t;
        }),
        (s.prototype.getFadeOut = function () {
          return this._$eo;
        }),
        (s.prototype._$4T = function () {
          return this._$eo;
        }),
        (s.prototype._$mT = function () {
          return this._$V0;
        }),
        (s.prototype.getDurationMSec = function () {
          return -1;
        }),
        (s.prototype.getLoopDurationMSec = function () {
          return -1;
        }),
        (s.prototype.updateParam = function (t, i) {
          if (i._$AT && !i._$9L) {
            var e = I.getUserTimeMSec();
            if (i._$z2 < 0) {
              (i._$z2 = e), (i._$bs = e);
              var r = this.getDurationMSec();
              i._$Do < 0 && (i._$Do = r <= 0 ? -1 : i._$z2 + r);
            }
            var o = this._$V0;
            (0 <=
              (o =
                o *
                (0 == this._$dP ? 1 : at._$r2((e - i._$bs) / this._$dP)) *
                (0 == this._$eo || i._$Do < 0 ? 1 : at._$r2((i._$Do - e) / this._$eo))) &&
              o <= 1) ||
              this.updateParamExe(t, e, o, i),
              i._$Do > 0 && i._$Do < e && (i._$9L = !0);
          }
        }),
        (s.prototype.updateParamExe = function (t, i, e, r) {}),
        (_._$8s = 0),
        (_._$fT = new Object()),
        (_.start = function (t) {
          var i = _._$fT[t];
          null == i &&
            (((i = new (function () {
              (this._$r = null), (this._$0S = null);
            })())._$r = t),
            (_._$fT[t] = i)),
            (i._$0S = I.getSystemTimeMSec());
        }),
        (_.dump = function (t) {
          var i = _._$fT[t];
          if (null != i) {
            var e = I.getSystemTimeMSec() - i._$0S;
            return e;
          }
          return -1;
        }),
        (_.end = function (t) {
          var i = _._$fT[t];
          return null != i ? I.getSystemTimeMSec() - i._$0S : -1;
        }),
        (_._$li = function (t, i) {}),
        (_._$Ji = function (t, i) {}),
        (_._$dL = function (t, i) {}),
        (_._$KL = function (t, i) {}),
        (_._$nr = function (t, i, e) {}),
        (_._$Rb = function (t) {}),
        (a.prototype._$8P = function () {
          return 0.5 * (this.x + this.x + this.width);
        }),
        (a.prototype._$6P = function () {
          return 0.5 * (this.y + this.y + this.height);
        }),
        (a.prototype._$EL = function () {
          return this.x + this.width;
        }),
        (a.prototype._$5T = function () {
          return this.y + this.height;
        }),
        (a.prototype._$jL = function (t, i, e, r) {
          (this.x = t), (this.y = i), (this.width = e), (this.height = r);
        }),
        (a.prototype._$jL = function (t) {
          (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height);
        }),
        (h.prototype = new et()),
        (h._$tP = new Object()),
        (h._$27 = function () {
          h._$tP.clear();
        }),
        (h.getID = function (t) {
          var i = h._$tP[t];
          return null == i && ((i = new h(t)), (h._$tP[t] = i)), i;
        }),
        (h.prototype._$3s = function () {
          return new h();
        }),
        ($.prototype = new et()),
        ($._$tP = new Object()),
        ($._$27 = function () {
          $._$tP.clear();
        }),
        ($.getID = function (t) {
          var i = $._$tP[t];
          return null == i && ((i = new $(t)), ($._$tP[t] = i)), i;
        }),
        ($.prototype._$3s = function () {
          return new $();
        }),
        (l._$42 = 0),
        (l.prototype._$zP = function () {
          null == this._$vo && (this._$vo = new rt()), null == this._$F2 && (this._$F2 = new Array());
        }),
        (l.prototype.getCanvasWidth = function () {
          return this._$ao;
        }),
        (l.prototype.getCanvasHeight = function () {
          return this._$1S;
        }),
        (l.prototype._$F0 = function (t) {
          (this._$vo = t._$nP()), (this._$F2 = t._$nP()), (this._$ao = t._$6L()), (this._$1S = t._$6L());
        }),
        (l.prototype._$6S = function (t) {
          this._$F2.push(t);
        }),
        (l.prototype._$Xr = function () {
          return this._$F2;
        }),
        (l.prototype._$E2 = function () {
          return this._$vo;
        }),
        (u.prototype.setup = function (t, i, e) {
          (this._$ks = this._$Yb()),
            this.p2._$xT(),
            3 == arguments.length &&
              ((this._$Fo = t), (this._$L2 = i), (this.p1._$p = e), (this.p2._$p = e), (this.p2.y = t), this.setup());
        }),
        (u.prototype.getPhysicsPoint1 = function () {
          return this.p1;
        }),
        (u.prototype.getPhysicsPoint2 = function () {
          return this.p2;
        }),
        (u.prototype._$qr = function () {
          return this._$Db;
        }),
        (u.prototype._$pr = function (t) {
          this._$Db = t;
        }),
        (u.prototype._$5r = function () {
          return this._$M2;
        }),
        (u.prototype._$Cs = function () {
          return this._$9b;
        }),
        (u.prototype._$Yb = function () {
          return (-180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y))) / Math.PI;
        }),
        (u.prototype.addSrcParam = function (t, i, e, r) {
          var o = new f(t, i, e, r);
          this._$lL.push(o);
        }),
        (u.prototype.addTargetParam = function (t, i, e, r) {
          var o = new y(t, i, e, r);
          this._$qP.push(o);
        }),
        (u.prototype.update = function (t, i) {
          if (0 == this._$iP)
            return (
              (this._$iP = this._$iT = i),
              void (this._$Fo = Math.sqrt(
                (this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)
              ))
            );
          var e = (i - this._$iT) / 1e3;
          if (0 != e) {
            for (var r = this._$lL.length - 1; r >= 0; --r) {
              this._$lL[r]._$oP(t, this);
            }
            this._$oo(t, e),
              (this._$M2 = this._$Yb()),
              (this._$9b = (this._$M2 - this._$ks) / e),
              (this._$ks = this._$M2);
          }
          for (r = this._$qP.length - 1; r >= 0; --r) {
            this._$qP[r]._$YS(t, this);
          }
          this._$iT = i;
        }),
        (u.prototype._$oo = function (t, i) {
          i < 0.033 && (i = 0.033);
          var e = 1 / i;
          (this.p1.vx = (this.p1.x - this.p1._$s0) * e),
            (this.p1.vy = (this.p1.y - this.p1._$70) * e),
            (this.p1.ax = (this.p1.vx - this.p1._$7L) * e),
            (this.p1.ay = (this.p1.vy - this.p1._$HL) * e),
            (this.p1.fx = this.p1.ax * this.p1._$p),
            (this.p1.fy = this.p1.ay * this.p1._$p),
            this.p1._$xT();
          var r,
            o,
            n = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
            s = Math.cos(n),
            _ = Math.sin(n),
            a = 9.8 * this.p2._$p,
            h = this._$Db * vt._$bS,
            $ = a * Math.cos(n - h);
          (r = $ * _), (o = $ * s);
          var l = -this.p1.fx * _ * _,
            u = -this.p1.fy * _ * s,
            p = -this.p2.vx * this._$L2,
            c = -this.p2.vy * this._$L2;
          (this.p2.fx = r + l + p),
            (this.p2.fy = o + u + c),
            (this.p2.ax = this.p2.fx / this.p2._$p),
            (this.p2.ay = this.p2.fy / this.p2._$p),
            (this.p2.vx += this.p2.ax * i),
            (this.p2.vy += this.p2.ay * i),
            (this.p2.x += this.p2.vx * i),
            (this.p2.y += this.p2.vy * i);
          var f = Math.sqrt(
            (this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)
          );
          (this.p2.x = this.p1.x + (this._$Fo * (this.p2.x - this.p1.x)) / f),
            (this.p2.y = this.p1.y + (this._$Fo * (this.p2.y - this.p1.y)) / f),
            (this.p2.vx = (this.p2.x - this.p2._$s0) * e),
            (this.p2.vy = (this.p2.y - this.p2._$70) * e),
            this.p2._$xT();
        }),
        (p.prototype._$xT = function () {
          (this._$s0 = this.x), (this._$70 = this.y), (this._$7L = this.vx), (this._$HL = this.vy);
        }),
        (c.prototype._$oP = function (t, i) {}),
        (f.prototype = new c()),
        (f.prototype._$oP = function (t, i) {
          var e = this.scale * t.getParamFloat(this._$wL),
            r = i.getPhysicsPoint1();
          switch (this._$tL) {
            default:
            case u.Src.SRC_TO_X:
              r.x = r.x + (e - r.x) * this._$V0;
              break;
            case u.Src.SRC_TO_Y:
              r.y = r.y + (e - r.y) * this._$V0;
              break;
            case u.Src.SRC_TO_G_ANGLE:
              var o = i._$qr();
              (o += (e - o) * this._$V0), i._$pr(o);
          }
        }),
        (g.prototype._$YS = function (t, i) {}),
        (y.prototype = new g()),
        (y.prototype._$YS = function (t, i) {
          switch (this._$YP) {
            default:
            case u.Target.TARGET_FROM_ANGLE:
              t.setParamFloat(this._$wL, this.scale * i._$5r(), this._$V0);
              break;
            case u.Target.TARGET_FROM_ANGLE_V:
              t.setParamFloat(this._$wL, this.scale * i._$Cs(), this._$V0);
          }
        }),
        (u.Src = function () {}),
        (u.Src.SRC_TO_X = "SRC_TO_X"),
        (u.Src.SRC_TO_Y = "SRC_TO_Y"),
        (u.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE"),
        (u.Target = function () {}),
        (u.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE"),
        (u.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V"),
        (d.prototype.init = function (t) {
          (this._$fL = t._$fL),
            (this._$gL = t._$gL),
            (this._$B0 = t._$B0),
            (this._$z0 = t._$z0),
            (this._$qT = t._$qT),
            (this.reflectX = t.reflectX),
            (this.reflectY = t.reflectY);
        }),
        (d.prototype._$F0 = function (t) {
          (this._$fL = t._$_T()),
            (this._$gL = t._$_T()),
            (this._$B0 = t._$_T()),
            (this._$z0 = t._$_T()),
            (this._$qT = t._$_T()),
            t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 &&
              ((this.reflectX = t._$po()), (this.reflectY = t._$po()));
        }),
        (d.prototype._$e = function () {});
      var T = function () {};
      function P() {
        e || ((this.x = null), (this.y = null), (this.width = null), (this.height = null));
      }
      function S() {}
      function v() {
        e || ((this.x = null), (this.y = null));
      }
      function L() {
        e ||
          ((this._$gP = null),
          (this._$dr = null),
          (this._$GS = null),
          (this._$qb = null),
          (this._$Lb = null),
          (this._$mS = null),
          (this.clipID = null),
          (this.clipIDList = new Array()));
      }
      function M() {
        e ||
          ((this._$Eb = M._$ps),
          (this._$lT = 1),
          (this._$C0 = 1),
          (this._$tT = 1),
          (this._$WL = 1),
          (this.culling = !1),
          (this.matrix4x4 = new Float32Array(16)),
          (this.premultipliedAlpha = !1),
          (this.anisotropy = 0),
          (this.clippingProcess = M.CLIPPING_PROCESS_NONE),
          (this.clipBufPre_clipContextMask = null),
          (this.clipBufPre_clipContextDraw = null),
          (this.CHANNEL_COLORS = new Array()));
      }
      function E() {
        e ||
          ((this.a = 1),
          (this.r = 1),
          (this.g = 1),
          (this.b = 1),
          (this.scale = 1),
          (this._$ho = 1),
          (this.blendMode = _t.L2D_COLOR_BLEND_MODE_MULT));
      }
      function A() {
        e || ((this._$kP = null), (this._$dr = null), (this._$Ai = !0), (this._$mS = null));
      }
      function I() {}
      function x() {
        e ||
          ((this._$VP = 0),
          (this._$wL = null),
          (this._$GP = null),
          (this._$8o = x._$ds),
          (this._$2r = -1),
          (this._$O2 = 0),
          (this._$ri = 0));
      }
      function w() {}
      function D() {
        e || (this._$Ob = null);
      }
      function O() {
        (this.m = new Float32Array(16)), this.identity();
      }
      function R(t) {
        e || et.prototype.constructor.call(this, t);
      }
      function b() {
        e ||
          ((this._$7 = 1),
          (this._$f = 0),
          (this._$H = 0),
          (this._$g = 1),
          (this._$k = 0),
          (this._$w = 0),
          (this._$hi = STATE_IDENTITY),
          (this._$Z = _$pS));
      }
      function F() {
        e ||
          (s.prototype.constructor.call(this),
          (this.motions = new Array()),
          (this._$7r = null),
          (this._$7r = F._$Co++),
          (this._$D0 = 30),
          (this._$yT = 0),
          (this._$E = !0),
          (this.loopFadeIn = !0),
          (this._$AS = -1),
          _$a0());
      }
      function C() {
        (this._$P = new Float32Array(100)), (this.size = 0);
      }
      function N() {
        (this._$4P = null), (this._$I0 = null), (this._$RP = null);
      }
      function B() {}
      function G() {}
      function U(t) {
        e ||
          ((this._$QT = !0),
          (this._$co = -1),
          (this._$qo = 0),
          (this._$pb = new Array(U._$is)),
          (this._$_2 = new Float32Array(U._$is)),
          (this._$vr = new Float32Array(U._$is)),
          (this._$Rr = new Float32Array(U._$is)),
          (this._$Or = new Float32Array(U._$is)),
          (this._$fs = new Float32Array(U._$is)),
          (this._$Js = new Array(U._$is)),
          (this._$3S = new Array()),
          (this._$aS = new Array()),
          (this._$Bo = null),
          (this._$F2 = new Array()),
          (this._$db = new Array()),
          (this._$8b = new Array()),
          (this._$Hr = new Array()),
          (this._$Ws = null),
          (this._$Vs = null),
          (this._$Er = null),
          (this._$Es = new Int16Array(B._$Qb)),
          (this._$ZP = new Float32Array(2 * B._$1r)),
          (this._$Ri = t),
          (this._$b0 = U._$HP++),
          (this.clipManager = null),
          (this.dp_webgl = null));
      }
      function Y() {}
      function k() {
        e ||
          ((this._$12 = null),
          (this._$bb = null),
          (this._$_L = null),
          (this._$jo = null),
          (this._$iL = null),
          (this._$0L = null),
          (this._$Br = null),
          (this._$Dr = null),
          (this._$Cb = null),
          (this._$mr = null),
          (this._$_L = V.STATE_FIRST),
          (this._$Br = 4e3),
          (this._$Dr = 100),
          (this._$Cb = 50),
          (this._$mr = 150),
          (this._$jo = !0),
          (this._$iL = "PARAM_EYE_L_OPEN"),
          (this._$0L = "PARAM_EYE_R_OPEN"));
      }
      (T._$ni = function (t, i, e, r, o, n, s, _, a) {
        var h = s * n - _ * o;
        if (0 == h) return null;
        var $,
          l = ((t - e) * n - (i - r) * o) / h;
        return (
          ($ = 0 != o ? (t - e - l * s) / o : (i - r - l * _) / n),
          isNaN($) && (($ = (t - e - l * s) / o), isNaN($) && ($ = (i - r - l * _) / n), isNaN($)),
          null == a ? new Array($, l) : ((a[0] = $), (a[1] = l), a)
        );
      }),
        (P.prototype._$8P = function () {
          return this.x + 0.5 * this.width;
        }),
        (P.prototype._$6P = function () {
          return this.y + 0.5 * this.height;
        }),
        (P.prototype._$EL = function () {
          return this.x + this.width;
        }),
        (P.prototype._$5T = function () {
          return this.y + this.height;
        }),
        (P.prototype._$jL = function (t, i, e, r) {
          (this.x = t), (this.y = i), (this.width = e), (this.height = r);
        }),
        (P.prototype._$jL = function (t) {
          (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height);
        }),
        (P.prototype.contains = function (t, i) {
          return (
            this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height
          );
        }),
        (P.prototype.expand = function (t, i) {
          (this.x -= t), (this.y -= i), (this.width += 2 * t), (this.height += 2 * i);
        }),
        (S._$Z2 = function (t, i, e, r) {
          var o = i._$Q2(t, e),
            n = t._$vs(),
            s = t._$Tr();
          if ((i._$zr(n, s, o), o <= 0)) return r[n[0]];
          if (1 == o) return ((_ = r[n[0]]) + ((a = r[n[1]]) - _) * (l = s[0])) | 0;
          if (2 == o) {
            var _ = r[n[0]],
              a = r[n[1]],
              h = r[n[2]],
              $ = r[n[3]],
              l = s[0],
              u = s[1];
            return ((S = (_ + (a - _) * l) | 0) + (((h + ($ - h) * l) | 0) - S) * u) | 0;
          }
          if (3 == o) {
            var p = r[n[0]],
              c = r[n[1]],
              f = r[n[2]],
              g = r[n[3]],
              y = r[n[4]],
              d = r[n[5]],
              m = r[n[6]],
              T = r[n[7]],
              P = ((l = s[0]), (u = s[1]), s[2]);
            return (
              ((S = ((_ = (p + (c - p) * l) | 0) + ((a = (f + (g - f) * l) | 0) - _) * u) | 0) +
                ((((h = (y + (d - y) * l) | 0) + (($ = (m + (T - m) * l) | 0) - h) * u) | 0) - S) * P) |
              0
            );
          }
          if (4 == o) {
            var S,
              v = r[n[0]],
              L = r[n[1]],
              M = r[n[2]],
              E = r[n[3]],
              A = r[n[4]],
              I = r[n[5]],
              x = r[n[6]],
              w = r[n[7]],
              D = r[n[8]],
              O = r[n[9]],
              R = r[n[10]],
              b = r[n[11]],
              F = r[n[12]],
              C = r[n[13]],
              N = r[n[14]],
              B = r[n[15]],
              G = ((l = s[0]), (u = s[1]), (P = s[2]), s[3]);
            return (
              ((S =
                ((_ = ((p = (v + (L - v) * l) | 0) + ((c = (M + (E - M) * l) | 0) - p) * u) | 0) +
                  ((a = ((f = (A + (I - A) * l) | 0) + ((g = (x + (w - x) * l) | 0) - f) * u) | 0) - _) * P) |
                0) +
                ((((h = ((y = (D + (O - D) * l) | 0) + ((d = (R + (b - R) * l) | 0) - y) * u) | 0) +
                  (($ = ((m = (F + (C - F) * l) | 0) + ((T = (N + (B - N) * l) | 0) - m) * u) | 0) - h) * P) |
                  0) -
                  S) *
                  G) |
              0
            );
          }
          for (var U = 1 << o, Y = new Float32Array(U), k = 0; k < U; k++) {
            for (var V = k, X = 1, z = 0; z < o; z++) (X *= V % 2 == 0 ? 1 - s[z] : s[z]), (V /= 2);
            Y[k] = X;
          }
          for (var H = new Float32Array(U), W = 0; W < U; W++) H[W] = r[n[W]];
          var j = 0;
          for (W = 0; W < U; W++) j += Y[W] * H[W];
          return (j + 0.5) | 0;
        }),
        (S._$br = function (t, i, e, r) {
          var o = i._$Q2(t, e),
            n = t._$vs(),
            s = t._$Tr();
          if ((i._$zr(n, s, o), o <= 0)) return r[n[0]];
          if (1 == o) return (_ = r[n[0]]) + ((a = r[n[1]]) - _) * (l = s[0]);
          if (2 == o) {
            var _ = r[n[0]],
              a = r[n[1]],
              h = r[n[2]],
              $ = r[n[3]],
              l = s[0];
            return (1 - (T = s[1])) * (_ + (a - _) * l) + T * (h + ($ - h) * l);
          }
          if (3 == o) {
            var u = r[n[0]],
              p = r[n[1]],
              c = r[n[2]],
              f = r[n[3]],
              g = r[n[4]],
              y = r[n[5]],
              d = r[n[6]],
              m = r[n[7]],
              T = ((l = s[0]), s[1]);
            return (
              (1 - (N = s[2])) * ((1 - T) * (u + (p - u) * l) + T * (c + (f - c) * l)) +
              N * ((1 - T) * (g + (y - g) * l) + T * (d + (m - d) * l))
            );
          }
          if (4 == o) {
            var P = r[n[0]],
              S = r[n[1]],
              v = r[n[2]],
              L = r[n[3]],
              M = r[n[4]],
              E = r[n[5]],
              A = r[n[6]],
              I = r[n[7]],
              x = r[n[8]],
              w = r[n[9]],
              D = r[n[10]],
              O = r[n[11]],
              R = r[n[12]],
              b = r[n[13]],
              F = r[n[14]],
              C = r[n[15]],
              N = ((l = s[0]), (T = s[1]), s[2]),
              B = s[3];
            return (
              (1 - B) *
                ((1 - N) * ((1 - T) * (P + (S - P) * l) + T * (v + (L - v) * l)) +
                  N * ((1 - T) * (M + (E - M) * l) + T * (A + (I - A) * l))) +
              B *
                ((1 - N) * ((1 - T) * (x + (w - x) * l) + T * (D + (O - D) * l)) +
                  N * ((1 - T) * (R + (b - R) * l) + T * (F + (C - F) * l)))
            );
          }
          for (var G = 1 << o, U = new Float32Array(G), Y = 0; Y < G; Y++) {
            for (var k = Y, V = 1, X = 0; X < o; X++) (V *= k % 2 == 0 ? 1 - s[X] : s[X]), (k /= 2);
            U[Y] = V;
          }
          for (var z = new Float32Array(G), H = 0; H < G; H++) z[H] = r[n[H]];
          var W = 0;
          for (H = 0; H < G; H++) W += U[H] * z[H];
          return W;
        }),
        (S._$Vr = function (t, i, e, r, o, n, s, _) {
          var a = i._$Q2(t, e),
            h = t._$vs(),
            $ = t._$Tr();
          i._$zr(h, $, a);
          var l = 2 * r,
            u = s;
          if (a <= 0) {
            var p = o[h[0]];
            if (2 == _ && 0 == s) I._$jT(p, 0, n, 0, l);
            else for (var c = 0; c < l; ) (n[u] = p[c++]), (n[u + 1] = p[c++]), (u += _);
          } else if (1 == a) {
            p = o[h[0]];
            var f = o[h[1]],
              g = 1 - (m = $[0]);
            for (c = 0; c < l; ) (n[u] = p[c] * g + f[c] * m), ++c, (n[u + 1] = p[c] * g + f[c] * m), ++c, (u += _);
          } else if (2 == a) {
            (p = o[h[0]]), (f = o[h[1]]);
            var y = o[h[2]],
              d = o[h[3]],
              m = $[0],
              T = (k = 1 - (R = $[1])) * (g = 1 - m),
              P = k * m,
              S = R * g,
              v = R * m;
            for (c = 0; c < l; )
              (n[u] = T * p[c] + P * f[c] + S * y[c] + v * d[c]),
                ++c,
                (n[u + 1] = T * p[c] + P * f[c] + S * y[c] + v * d[c]),
                ++c,
                (u += _);
          } else if (3 == a) {
            var L = o[h[0]],
              M = o[h[1]],
              E = o[h[2]],
              A = o[h[3]],
              x = o[h[4]],
              w = o[h[5]],
              D = o[h[6]],
              O = o[h[7]],
              R = ((m = $[0]), $[1]),
              b = (V = 1 - (st = $[2])) * (k = 1 - R) * (g = 1 - m),
              F = V * k * m,
              C = V * R * g,
              N = V * R * m,
              B = st * k * g,
              G = st * k * m,
              U = st * R * g,
              Y = st * R * m;
            for (c = 0; c < l; )
              (n[u] = b * L[c] + F * M[c] + C * E[c] + N * A[c] + B * x[c] + G * w[c] + U * D[c] + Y * O[c]),
                ++c,
                (n[u + 1] = b * L[c] + F * M[c] + C * E[c] + N * A[c] + B * x[c] + G * w[c] + U * D[c] + Y * O[c]),
                ++c,
                (u += _);
          } else if (4 == a) {
            var k,
              V,
              X = o[h[0]],
              z = o[h[1]],
              H = o[h[2]],
              W = o[h[3]],
              j = o[h[4]],
              q = o[h[5]],
              J = o[h[6]],
              Q = o[h[7]],
              Z = o[h[8]],
              K = o[h[9]],
              tt = o[h[10]],
              it = o[h[11]],
              et = o[h[12]],
              rt = o[h[13]],
              ot = o[h[14]],
              nt = o[h[15]],
              st = ((m = $[0]), (R = $[1]), $[2]),
              _t = $[3],
              at = 1 - _t,
              ht = at * (V = 1 - st) * (k = 1 - R) * (g = 1 - m),
              $t = at * V * k * m,
              lt = at * V * R * g,
              ut = at * V * R * m,
              pt = at * st * k * g,
              ct = at * st * k * m,
              ft = at * st * R * g,
              gt = at * st * R * m,
              yt = _t * V * k * g,
              dt = _t * V * k * m,
              mt = _t * V * R * g,
              Tt = _t * V * R * m,
              Pt = _t * st * k * g,
              St = _t * st * k * m,
              vt = _t * st * R * g,
              Lt = _t * st * R * m;
            for (c = 0; c < l; )
              (n[u] =
                ht * X[c] +
                $t * z[c] +
                lt * H[c] +
                ut * W[c] +
                pt * j[c] +
                ct * q[c] +
                ft * J[c] +
                gt * Q[c] +
                yt * Z[c] +
                dt * K[c] +
                mt * tt[c] +
                Tt * it[c] +
                Pt * et[c] +
                St * rt[c] +
                vt * ot[c] +
                Lt * nt[c]),
                ++c,
                (n[u + 1] =
                  ht * X[c] +
                  $t * z[c] +
                  lt * H[c] +
                  ut * W[c] +
                  pt * j[c] +
                  ct * q[c] +
                  ft * J[c] +
                  gt * Q[c] +
                  yt * Z[c] +
                  dt * K[c] +
                  mt * tt[c] +
                  Tt * it[c] +
                  Pt * et[c] +
                  St * rt[c] +
                  vt * ot[c] +
                  Lt * nt[c]),
                ++c,
                (u += _);
          } else {
            for (var Mt = 1 << a, Et = new Float32Array(Mt), At = 0; At < Mt; At++) {
              for (var It = At, xt = 1, wt = 0; wt < a; wt++) (xt *= It % 2 == 0 ? 1 - $[wt] : $[wt]), (It /= 2);
              Et[At] = xt;
            }
            for (var Dt = new Float32Array(Mt), Ot = 0; Ot < Mt; Ot++) Dt[Ot] = o[h[Ot]];
            for (c = 0; c < l; ) {
              var Rt = 0,
                bt = 0,
                Ft = c + 1;
              for (Ot = 0; Ot < Mt; Ot++) (Rt += Et[Ot] * Dt[Ot][c]), (bt += Et[Ot] * Dt[Ot][Ft]);
              (c += 2), (n[u] = Rt), (n[u + 1] = bt), (u += _);
            }
          }
        }),
        (v.prototype._$HT = function (t, i) {
          (this.x = t), (this.y = i);
        }),
        (v.prototype._$HT = function (t) {
          (this.x = t.x), (this.y = t.y);
        }),
        (L._$ur = -2),
        (L._$ES = 500),
        (L._$wb = 2),
        (L._$8S = 3),
        (L._$52 = L._$ES),
        (L._$R2 = L._$ES),
        (L._$or = function () {
          return L._$52;
        }),
        (L._$Pr = function () {
          return L._$R2;
        }),
        (L.prototype.convertClipIDForV2_11 = function (t) {
          var i = [];
          return null == t ? null : 0 == t.length ? null : /,/.test(t) ? (i = t.id.split(",")) : (i.push(t.id), i);
        }),
        (L.prototype._$F0 = function (t) {
          (this._$gP = t._$nP()),
            (this._$dr = t._$nP()),
            (this._$GS = t._$nP()),
            (this._$qb = t._$6L()),
            (this._$Lb = t._$cS()),
            (this._$mS = t._$Tb()),
            t.getFormatVersion() >= G._$T7
              ? ((this.clipID = t._$nP()), (this.clipIDList = this.convertClipIDForV2_11(this.clipID)))
              : (this.clipIDList = []),
            this._$MS(this._$Lb);
        }),
        (L.prototype.getClipIDList = function () {
          return this.clipIDList;
        }),
        (L.prototype.init = function (t) {}),
        (L.prototype._$Nr = function (t, i) {
          if (((i._$IS[0] = !1), (i._$Us = S._$Z2(t, this._$GS, i._$IS, this._$Lb)), _t._$Zs));
          else if (i._$IS[0]) return;
          i._$7s = S._$br(t, this._$GS, i._$IS, this._$mS);
        }),
        (L.prototype._$2b = function (t, i) {}),
        (L.prototype.getDrawDataID = function () {
          return this._$gP;
        }),
        (L.prototype._$j2 = function (t) {
          this._$gP = t;
        }),
        (L.prototype.getOpacity = function (t, i) {
          return i._$7s;
        }),
        (L.prototype._$zS = function (t, i) {
          return i._$Us;
        }),
        (L.prototype._$MS = function (t) {
          for (var i = t.length - 1; i >= 0; --i) {
            var e = t[i];
            e < L._$52 ? (L._$52 = e) : e > L._$R2 && (L._$R2 = e);
          }
        }),
        (L.prototype.getTargetBaseDataID = function () {
          return this._$dr;
        }),
        (L.prototype._$gs = function (t) {
          this._$dr = t;
        }),
        (L.prototype._$32 = function () {
          return null != this._$dr && this._$dr != yt._$2o();
        }),
        (L.prototype.preDraw = function (t, i, e) {}),
        (L.prototype.draw = function (t, i, e) {}),
        (L.prototype.getType = function () {}),
        (L.prototype._$B2 = function (t, i, e) {}),
        (M._$ps = 32),
        (M.CLIPPING_PROCESS_NONE = 0),
        (M.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1),
        (M.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2),
        (M.CLIPPING_PROCESS_DRAW = 3),
        (M.CLIPPING_PROCESS_CLEAR_ALPHA = 4),
        (M.prototype.setChannelFlagAsColor = function (t, i) {
          this.CHANNEL_COLORS[t] = i;
        }),
        (M.prototype.getChannelFlagAsColor = function (t) {
          return this.CHANNEL_COLORS[t];
        }),
        (M.prototype._$ZT = function () {}),
        (M.prototype._$Uo = function (t, i, e, r, o, n, s) {}),
        (M.prototype._$Rs = function () {
          return -1;
        }),
        (M.prototype._$Ds = function (t) {}),
        (M.prototype.setBaseColor = function (t, i, e, r) {
          t < 0 ? (t = 0) : t > 1 && (t = 1),
            i < 0 ? (i = 0) : i > 1 && (i = 1),
            e < 0 ? (e = 0) : e > 1 && (e = 1),
            r < 0 ? (r = 0) : r > 1 && (r = 1),
            (this._$lT = t),
            (this._$C0 = i),
            (this._$tT = e),
            (this._$WL = r);
        }),
        (M.prototype._$WP = function (t) {
          this.culling = t;
        }),
        (M.prototype.setMatrix = function (t) {
          for (var i = 0; i < 16; i++) this.matrix4x4[i] = t[i];
        }),
        (M.prototype._$IT = function () {
          return this.matrix4x4;
        }),
        (M.prototype.setPremultipliedAlpha = function (t) {
          this.premultipliedAlpha = t;
        }),
        (M.prototype.isPremultipliedAlpha = function () {
          return this.premultipliedAlpha;
        }),
        (M.prototype.setAnisotropy = function (t) {
          this.anisotropy = t;
        }),
        (M.prototype.getAnisotropy = function () {
          return this.anisotropy;
        }),
        (M.prototype.getClippingProcess = function () {
          return this.clippingProcess;
        }),
        (M.prototype.setClippingProcess = function (t) {
          this.clippingProcess = t;
        }),
        (M.prototype.setClipBufPre_clipContextForMask = function (t) {
          this.clipBufPre_clipContextMask = t;
        }),
        (M.prototype.getClipBufPre_clipContextMask = function () {
          return this.clipBufPre_clipContextMask;
        }),
        (M.prototype.setClipBufPre_clipContextForDraw = function (t) {
          this.clipBufPre_clipContextDraw = t;
        }),
        (M.prototype.getClipBufPre_clipContextDraw = function () {
          return this.clipBufPre_clipContextDraw;
        }),
        (A._$ur = -2),
        (A._$c2 = 1),
        (A._$_b = 2),
        (A.prototype._$F0 = function (t) {
          (this._$kP = t._$nP()), (this._$dr = t._$nP());
        }),
        (A.prototype.readV2_opacity = function (t) {
          t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb());
        }),
        (A.prototype.init = function (t) {}),
        (A.prototype._$Nr = function (t, i) {}),
        (A.prototype.interpolateOpacity = function (t, i, e, r) {
          null == this._$mS ? e.setInterpolatedOpacity(1) : e.setInterpolatedOpacity(S._$br(t, i, r, this._$mS));
        }),
        (A.prototype._$2b = function (t, i) {}),
        (A.prototype._$nb = function (t, i, e, r, o, n, s) {}),
        (A.prototype.getType = function () {}),
        (A.prototype._$gs = function (t) {
          this._$dr = t;
        }),
        (A.prototype._$a2 = function (t) {
          this._$kP = t;
        }),
        (A.prototype.getTargetBaseDataID = function () {
          return this._$dr;
        }),
        (A.prototype.getBaseDataID = function () {
          return this._$kP;
        }),
        (A.prototype._$32 = function () {
          return null != this._$dr && this._$dr != yt._$2o();
        }),
        (I._$W2 = 0),
        (I._$CS = I._$W2),
        (I._$Mo = function () {
          return !0;
        }),
        (I._$XP = function (t) {
          try {
            for (var i = getTimeMSec(); getTimeMSec() - i < t; );
          } catch (t) {
            t._$Rb();
          }
        }),
        (I.getUserTimeMSec = function () {
          return I._$CS == I._$W2 ? I.getSystemTimeMSec() : I._$CS;
        }),
        (I.setUserTimeMSec = function (t) {
          I._$CS = t;
        }),
        (I.updateUserTimeMSec = function () {
          return (I._$CS = I.getSystemTimeMSec());
        }),
        (I.getTimeMSec = function () {
          return new Date().getTime();
        }),
        (I.getSystemTimeMSec = function () {
          return new Date().getTime();
        }),
        (I._$Q = function (t) {}),
        (I._$jT = function (t, i, e, r, o) {
          for (var n = 0; n < o; n++) e[r + n] = t[i + n];
        }),
        (x._$ds = -2),
        (x.prototype._$F0 = function (t) {
          (this._$wL = t._$nP()), (this._$VP = t._$6L()), (this._$GP = t._$nP());
        }),
        (x.prototype.getParamIndex = function (t) {
          return this._$2r != t && (this._$8o = x._$ds), this._$8o;
        }),
        (x.prototype._$Pb = function (t, i) {
          (this._$8o = t), (this._$2r = i);
        }),
        (x.prototype.getParamID = function () {
          return this._$wL;
        }),
        (x.prototype._$yP = function (t) {
          this._$wL = t;
        }),
        (x.prototype._$N2 = function () {
          return this._$VP;
        }),
        (x.prototype._$d2 = function () {
          return this._$GP;
        }),
        (x.prototype._$t2 = function (t, i) {
          (this._$VP = t), (this._$GP = i);
        }),
        (x.prototype._$Lr = function () {
          return this._$O2;
        }),
        (x.prototype._$wr = function (t) {
          this._$O2 = t;
        }),
        (x.prototype._$SL = function () {
          return this._$ri;
        }),
        (x.prototype._$AL = function (t) {
          this._$ri = t;
        }),
        (w.startsWith = function (t, i, e) {
          var r = i + e.length;
          if (r >= t.length) return !1;
          for (var o = i; o < r; o++) if (w.getChar(t, o) != e.charAt(o - i)) return !1;
          return !0;
        }),
        (w.getChar = function (t, i) {
          return String.fromCharCode(t.getUint8(i));
        }),
        (w.createString = function (t, i, e) {
          for (var r = new ArrayBuffer(2 * e), o = new Uint16Array(r), n = 0; n < e; n++) o[n] = t.getUint8(i + n);
          return String.fromCharCode.apply(null, o);
        }),
        (w._$LS = function (t, i, e, r) {
          t instanceof ArrayBuffer && (t = new DataView(t));
          var o = e,
            n = !1,
            s = !1,
            _ = 0,
            a = w.getChar(t, o);
          "-" == a && ((n = !0), o++);
          for (var h = !1; o < i; o++) {
            switch ((a = w.getChar(t, o))) {
              case "0":
                _ *= 10;
                break;
              case "1":
                _ = 10 * _ + 1;
                break;
              case "2":
                _ = 10 * _ + 2;
                break;
              case "3":
                _ = 10 * _ + 3;
                break;
              case "4":
                _ = 10 * _ + 4;
                break;
              case "5":
                _ = 10 * _ + 5;
                break;
              case "6":
                _ = 10 * _ + 6;
                break;
              case "7":
                _ = 10 * _ + 7;
                break;
              case "8":
                _ = 10 * _ + 8;
                break;
              case "9":
                _ = 10 * _ + 9;
                break;
              case ".":
                (s = !0), o++, (h = !0);
                break;
              default:
                h = !0;
            }
            if (h) break;
          }
          if (s)
            for (var $ = 0.1, l = !1; o < i; o++) {
              switch ((a = w.getChar(t, o))) {
                case "0":
                  break;
                case "1":
                  _ += 1 * $;
                  break;
                case "2":
                  _ += 2 * $;
                  break;
                case "3":
                  _ += 3 * $;
                  break;
                case "4":
                  _ += 4 * $;
                  break;
                case "5":
                  _ += 5 * $;
                  break;
                case "6":
                  _ += 6 * $;
                  break;
                case "7":
                  _ += 7 * $;
                  break;
                case "8":
                  _ += 8 * $;
                  break;
                case "9":
                  _ += 9 * $;
                  break;
                default:
                  l = !0;
              }
              if ((($ *= 0.1), l)) break;
            }
          return n && (_ = -_), (r[0] = o), _;
        }),
        (D.prototype._$zP = function () {
          this._$Ob = new Array();
        }),
        (D.prototype._$F0 = function (t) {
          this._$Ob = t._$nP();
        }),
        (D.prototype._$Ur = function (t) {
          if (t._$WS()) return !0;
          for (var i = t._$v2(), e = this._$Ob.length - 1; e >= 0; --e) {
            var r = this._$Ob[e].getParamIndex(i);
            if ((r == x._$ds && (r = t.getParamIndex(this._$Ob[e].getParamID())), t._$Xb(r))) return !0;
          }
          return !1;
        }),
        (D.prototype._$Q2 = function (t, i) {
          for (var e, r, o = this._$Ob.length, n = t._$v2(), s = 0, _ = 0; _ < o; _++) {
            var a = this._$Ob[_];
            if (((e = a.getParamIndex(n)) == x._$ds && ((e = t.getParamIndex(a.getParamID())), a._$Pb(e, n)), e < 0))
              throw new Exception("err 23242 : " + a.getParamID());
            var h = e < 0 ? 0 : t.getParamFloat(e);
            r = a._$N2();
            var $,
              l,
              u = a._$d2(),
              p = -1,
              c = 0;
            if (r < 1);
            else if (1 == r) ($ = u[0]) - B._$J < h && h < $ + B._$J ? ((p = 0), (c = 0)) : ((p = 0), (i[0] = !0));
            else if (h < ($ = u[0]) - B._$J) (p = 0), (i[0] = !0);
            else if (h < $ + B._$J) p = 0;
            else {
              for (var f = !1, g = 1; g < r; ++g) {
                if (h < (l = u[g]) + B._$J) {
                  l - B._$J < h ? (p = g) : ((p = g - 1), (c = (h - $) / (l - $)), s++), (f = !0);
                  break;
                }
                $ = l;
              }
              f || ((p = r - 1), (c = 0), (i[0] = !0));
            }
            a._$wr(p), a._$AL(c);
          }
          return s;
        }),
        (D.prototype._$zr = function (t, i, e) {
          var r = 1 << e;
          r + 1 > B._$Qb;
          for (var o = this._$Ob.length, n = 1, s = 1, _ = 0, a = 0; a < r; ++a) t[a] = 0;
          for (var h = 0; h < o; ++h) {
            var $ = this._$Ob[h];
            if (0 == $._$SL()) {
              if ((l = $._$Lr() * n) < 0 && _t._$3T) throw new Exception("err 23246");
              for (a = 0; a < r; ++a) t[a] += l;
            } else {
              var l = n * $._$Lr(),
                u = n * ($._$Lr() + 1);
              for (a = 0; a < r; ++a) t[a] += ((a / s) | 0) % 2 == 0 ? l : u;
              (i[_++] = $._$SL()), (s *= 2);
            }
            n *= $._$N2();
          }
          (t[r] = 65535), (i[_] = -1);
        }),
        (D.prototype._$h2 = function (t, i, e) {
          for (var r = new Float32Array(i), o = 0; o < i; ++o) r[o] = e[o];
          var n = new x();
          n._$yP(t), n._$t2(i, r), this._$Ob.push(n);
        }),
        (D.prototype._$J2 = function (t) {
          for (var i = t, e = this._$Ob.length, r = 0; r < e; ++r) {
            var o = this._$Ob[r],
              n = o._$N2(),
              s = i % o._$N2(),
              _ = o._$d2()[s];
            i /= n;
          }
        }),
        (D.prototype.getParamCount = function () {
          return this._$Ob.length;
        }),
        (D.prototype._$zs = function () {
          return this._$Ob;
        }),
        (O.prototype.identity = function () {
          for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0;
        }),
        (O.prototype.getArray = function () {
          return this.m;
        }),
        (O.prototype.getCopyMatrix = function () {
          return new Float32Array(this.m);
        }),
        (O.prototype.setMatrix = function (t) {
          if (null != t && 16 == t.length) for (var i = 0; i < 16; i++) this.m[i] = t[i];
        }),
        (O.prototype.mult = function (t, i, e) {
          return null == i
            ? null
            : (this == i ? this.mult_safe(this.m, t.m, i.m, e) : this.mult_fast(this.m, t.m, i.m, e), i);
        }),
        (O.prototype.mult_safe = function (t, i, e, r) {
          if (t == e) {
            var o = new Array(16);
            this.mult_fast(t, i, o, r);
            for (var n = 15; n >= 0; --n) e[n] = o[n];
          } else this.mult_fast(t, i, e, r);
        }),
        (O.prototype.mult_fast = function (t, i, e, r) {
          r
            ? ((e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2]),
              (e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6]),
              (e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10]),
              (e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12]),
              (e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2]),
              (e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6]),
              (e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10]),
              (e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13]),
              (e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2]),
              (e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6]),
              (e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10]),
              (e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14]),
              (e[3] = e[7] = e[11] = 0),
              (e[15] = 1))
            : ((e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3]),
              (e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7]),
              (e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11]),
              (e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15]),
              (e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3]),
              (e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7]),
              (e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11]),
              (e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15]),
              (e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3]),
              (e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7]),
              (e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11]),
              (e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15]),
              (e[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3]),
              (e[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7]),
              (e[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11]),
              (e[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15]));
        }),
        (O.prototype.translate = function (t, i, e) {
          (this.m[12] = this.m[0] * t + this.m[4] * i + this.m[8] * e + this.m[12]),
            (this.m[13] = this.m[1] * t + this.m[5] * i + this.m[9] * e + this.m[13]),
            (this.m[14] = this.m[2] * t + this.m[6] * i + this.m[10] * e + this.m[14]),
            (this.m[15] = this.m[3] * t + this.m[7] * i + this.m[11] * e + this.m[15]);
        }),
        (O.prototype.scale = function (t, i, e) {
          (this.m[0] *= t),
            (this.m[4] *= i),
            (this.m[8] *= e),
            (this.m[1] *= t),
            (this.m[5] *= i),
            (this.m[9] *= e),
            (this.m[2] *= t),
            (this.m[6] *= i),
            (this.m[10] *= e),
            (this.m[3] *= t),
            (this.m[7] *= i),
            (this.m[11] *= e);
        }),
        (O.prototype.rotateX = function (t) {
          var i = vt.fcos(t),
            e = vt._$9(t),
            r = this.m[4];
          (this.m[4] = r * i + this.m[8] * e),
            (this.m[8] = r * -e + this.m[8] * i),
            (r = this.m[5]),
            (this.m[5] = r * i + this.m[9] * e),
            (this.m[9] = r * -e + this.m[9] * i),
            (r = this.m[6]),
            (this.m[6] = r * i + this.m[10] * e),
            (this.m[10] = r * -e + this.m[10] * i),
            (r = this.m[7]),
            (this.m[7] = r * i + this.m[11] * e),
            (this.m[11] = r * -e + this.m[11] * i);
        }),
        (O.prototype.rotateY = function (t) {
          var i = vt.fcos(t),
            e = vt._$9(t),
            r = this.m[0];
          (this.m[0] = r * i + this.m[8] * -e),
            (this.m[8] = r * e + this.m[8] * i),
            (r = this.m[1]),
            (this.m[1] = r * i + this.m[9] * -e),
            (this.m[9] = r * e + this.m[9] * i),
            (r = m[2]),
            (this.m[2] = r * i + this.m[10] * -e),
            (this.m[10] = r * e + this.m[10] * i),
            (r = m[3]),
            (this.m[3] = r * i + this.m[11] * -e),
            (this.m[11] = r * e + this.m[11] * i);
        }),
        (O.prototype.rotateZ = function (t) {
          var i = vt.fcos(t),
            e = vt._$9(t),
            r = this.m[0];
          (this.m[0] = r * i + this.m[4] * e),
            (this.m[4] = r * -e + this.m[4] * i),
            (r = this.m[1]),
            (this.m[1] = r * i + this.m[5] * e),
            (this.m[5] = r * -e + this.m[5] * i),
            (r = this.m[2]),
            (this.m[2] = r * i + this.m[6] * e),
            (this.m[6] = r * -e + this.m[6] * i),
            (r = this.m[3]),
            (this.m[3] = r * i + this.m[7] * e),
            (this.m[7] = r * -e + this.m[7] * i);
        }),
        (R.prototype = new et()),
        (R._$tP = new Object()),
        (R._$27 = function () {
          R._$tP.clear();
        }),
        (R.getID = function (t) {
          var i = R._$tP[t];
          return null == i && ((i = new R(t)), (R._$tP[t] = i)), i;
        }),
        (R.prototype._$3s = function () {
          return new R();
        }),
        (b._$kS = -1),
        (b._$pS = 0),
        (b._$hb = 1),
        (b.STATE_IDENTITY = 0),
        (b._$gb = 1),
        (b._$fo = 2),
        (b._$go = 4),
        (b.prototype.transform = function (t, i, e) {
          var r,
            o,
            n,
            s,
            _,
            a,
            h = 0,
            $ = 0;
          switch (this._$hi) {
            default:
              return;
            case b._$go | b._$fo | b._$gb:
              for (r = this._$7, o = this._$H, n = this._$k, s = this._$f, _ = this._$g, a = this._$w; --e >= 0; ) {
                var l = t[h++],
                  u = t[h++];
                (i[$++] = r * l + o * u + n), (i[$++] = s * l + _ * u + a);
              }
              return;
            case b._$go | b._$fo:
              for (r = this._$7, o = this._$H, s = this._$f, _ = this._$g; --e >= 0; ) {
                (l = t[h++]), (u = t[h++]);
                (i[$++] = r * l + o * u), (i[$++] = s * l + _ * u);
              }
              return;
            case b._$go | b._$gb:
              for (o = this._$H, n = this._$k, s = this._$f, a = this._$w; --e >= 0; ) {
                l = t[h++];
                (i[$++] = o * t[h++] + n), (i[$++] = s * l + a);
              }
              return;
            case b._$go:
              for (o = this._$H, s = this._$f; --e >= 0; ) {
                l = t[h++];
                (i[$++] = o * t[h++]), (i[$++] = s * l);
              }
              return;
            case b._$fo | b._$gb:
              for (r = this._$7, n = this._$k, _ = this._$g, a = this._$w; --e >= 0; )
                (i[$++] = r * t[h++] + n), (i[$++] = _ * t[h++] + a);
              return;
            case b._$fo:
              for (r = this._$7, _ = this._$g; --e >= 0; ) (i[$++] = r * t[h++]), (i[$++] = _ * t[h++]);
              return;
            case b._$gb:
              for (n = this._$k, a = this._$w; --e >= 0; ) (i[$++] = t[h++] + n), (i[$++] = t[h++] + a);
              return;
            case b.STATE_IDENTITY:
              return void ((t == i && h == $) || I._$jT(t, h, i, $, 2 * e));
          }
        }),
        (b.prototype.update = function () {
          0 == this._$H && 0 == this._$f
            ? 1 == this._$7 && 1 == this._$g
              ? 0 == this._$k && 0 == this._$w
                ? ((this._$hi = b.STATE_IDENTITY), (this._$Z = b._$pS))
                : ((this._$hi = b._$gb), (this._$Z = b._$hb))
              : 0 == this._$k && 0 == this._$w
              ? ((this._$hi = b._$fo), (this._$Z = b._$kS))
              : ((this._$hi = b._$fo | b._$gb), (this._$Z = b._$kS))
            : 0 == this._$7 && 0 == this._$g
            ? 0 == this._$k && 0 == this._$w
              ? ((this._$hi = b._$go), (this._$Z = b._$kS))
              : ((this._$hi = b._$go | b._$gb), (this._$Z = b._$kS))
            : 0 == this._$k && 0 == this._$w
            ? ((this._$hi = b._$go | b._$fo), (this._$Z = b._$kS))
            : ((this._$hi = b._$go | b._$fo | b._$gb), (this._$Z = b._$kS));
        }),
        (b.prototype._$RT = function (t) {
          this._$IT(t);
          var i = t[0],
            e = t[2],
            r = t[1],
            o = t[3],
            n = Math.sqrt(i * i + r * r),
            s = i * o - e * r;
          0 == n ? _t._$so : ((t[0] = n), (t[1] = s / n), (t[2] = (r * o + i * e) / s), (t[3] = Math.atan2(r, i)));
        }),
        (b.prototype._$ho = function (t, i, e, r) {
          var o = new Float32Array(6),
            n = new Float32Array(6);
          t._$RT(o), i._$RT(n);
          var s = new Float32Array(6);
          (s[0] = o[0] + (n[0] - o[0]) * e),
            (s[1] = o[1] + (n[1] - o[1]) * e),
            (s[2] = o[2] + (n[2] - o[2]) * e),
            (s[3] = o[3] + (n[3] - o[3]) * e),
            (s[4] = o[4] + (n[4] - o[4]) * e),
            (s[5] = o[5] + (n[5] - o[5]) * e),
            r._$CT(s);
        }),
        (b.prototype._$CT = function (t) {
          var i = Math.cos(t[3]),
            e = Math.sin(t[3]);
          (this._$7 = t[0] * i),
            (this._$f = t[0] * e),
            (this._$H = t[1] * (t[2] * i - e)),
            (this._$g = t[1] * (t[2] * e + i)),
            (this._$k = t[4]),
            (this._$w = t[5]),
            this.update();
        }),
        (b.prototype._$IT = function (t) {
          (t[0] = this._$7),
            (t[1] = this._$f),
            (t[2] = this._$H),
            (t[3] = this._$g),
            (t[4] = this._$k),
            (t[5] = this._$w);
        }),
        (F.prototype = new s()),
        (F._$cs = "VISIBLE:"),
        (F._$ar = "LAYOUT:"),
        (F._$Co = 0),
        (F._$D2 = []),
        (F._$1T = 1),
        (F.loadMotion = function (t) {
          var i = new F(),
            e = [0],
            r = t.length;
          i._$yT = 0;
          for (var o = 0; o < r; ++o) {
            var n = 255 & t[o];
            if ("\n" != n && "\r" != n)
              if ("#" != n)
                if ("$" != n) {
                  if (("a" <= n && n <= "z") || ("A" <= n && n <= "Z") || "_" == n) {
                    for (h = o, $ = -1; o < r && "\r" != (n = 255 & t[o]) && "\n" != n; ++o)
                      if ("=" == n) {
                        $ = o;
                        break;
                      }
                    if ($ >= 0) {
                      var s = new N();
                      w.startsWith(t, h, F._$cs)
                        ? ((s._$RP = N._$hs), (s._$4P = new String(t, h, $ - h)))
                        : w.startsWith(t, h, F._$ar)
                        ? ((s._$4P = new String(t, h + 7, $ - h - 7)),
                          w.startsWith(t, h + 7, "ANCHOR_X")
                            ? (s._$RP = N._$xs)
                            : w.startsWith(t, h + 7, "ANCHOR_Y")
                            ? (s._$RP = N._$us)
                            : w.startsWith(t, h + 7, "SCALE_X")
                            ? (s._$RP = N._$qs)
                            : w.startsWith(t, h + 7, "SCALE_Y")
                            ? (s._$RP = N._$Ys)
                            : w.startsWith(t, h + 7, "X")
                            ? (s._$RP = N._$ws)
                            : w.startsWith(t, h + 7, "Y") && (s._$RP = N._$Ns))
                        : ((s._$RP = N._$Fr), (s._$4P = new String(t, h, $ - h))),
                        i.motions.push(s);
                      var _ = 0;
                      for (F._$D2.clear(), o = $ + 1; o < r && "\r" != (n = 255 & t[o]) && "\n" != n; ++o)
                        if ("," != n && " " != n && "\t" != n) {
                          u = w._$LS(t, r, o, e);
                          if (e[0] > 0) {
                            F._$D2.push(u), _++;
                            var a = e[0];
                            if (a < o) {
                              break;
                            }
                            o = a;
                          }
                        }
                      (s._$I0 = F._$D2._$BL()), _ > i._$yT && (i._$yT = _);
                    }
                  }
                } else {
                  for (var h = o, $ = -1; o < r && "\r" != (n = 255 & t[o]) && "\n" != n; ++o)
                    if ("=" == n) {
                      $ = o;
                      break;
                    }
                  var l = !1;
                  if ($ >= 0)
                    for (
                      $ == h + 4 && "f" == t[h + 1] && "p" == t[h + 2] && "s" == t[h + 3] && (l = !0), o = $ + 1;
                      o < r && "\r" != (n = 255 & t[o]) && "\n" != n;
                      ++o
                    )
                      if ("," != n && " " != n && "\t" != n) {
                        var u = w._$LS(t, r, o, e);
                        e[0] > 0 && l && 5 < u && u < 121 && (i._$D0 = u), (o = e[0]);
                      }
                  for (; o < r && "\n" != t[o] && "\r" != t[o]; ++o);
                }
              else for (; o < r && "\n" != t[o] && "\r" != t[o]; ++o);
          }
          return (i._$AS = ((1e3 * i._$yT) / i._$D0) | 0), i;
        }),
        (F.prototype.getDurationMSec = function () {
          return this._$AS;
        }),
        (F.prototype.dump = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t];
            for (var e = 0; e < i._$I0.length && e < 10; e++) {}
          }
        }),
        (F.prototype.updateParamExe = function (t, i, e, r) {
          for (var o = ((i - r._$z2) * this._$D0) / 1e3, n = 0 | o, s = o - n, _ = 0; _ < this.motions.length; _++) {
            var a = this.motions[_],
              h = a._$I0.length,
              $ = a._$4P;
            if (a._$RP == N._$hs) {
              var l = a._$I0[n >= h ? h - 1 : n];
              t.setParamFloat($, l);
            } else if (N._$ws <= a._$RP && a._$RP <= N._$Ys);
            else {
              var u = t.getParamFloat($),
                p = a._$I0[n >= h ? h - 1 : n],
                c = u + (p + (a._$I0[n + 1 >= h ? h - 1 : n + 1] - p) * s - u) * e;
              t.setParamFloat($, c);
            }
          }
          n >= this._$yT && (this._$E ? ((r._$z2 = i), this.loopFadeIn && (r._$bs = i)) : (r._$9L = !0));
        }),
        (F.prototype._$r0 = function () {
          return this._$E;
        }),
        (F.prototype._$aL = function (t) {
          this._$E = t;
        }),
        (F.prototype.isLoopFadeIn = function () {
          return this.loopFadeIn;
        }),
        (F.prototype.setLoopFadeIn = function (t) {
          this.loopFadeIn = t;
        }),
        (C.prototype.clear = function () {
          this.size = 0;
        }),
        (C.prototype.add = function (t) {
          if (this._$P.length <= this.size) {
            var i = new Float32Array(2 * this.size);
            I._$jT(this._$P, 0, i, 0, this.size), (this._$P = i);
          }
          this._$P[this.size++] = t;
        }),
        (C.prototype._$BL = function () {
          var t = new Float32Array(this.size);
          return I._$jT(this._$P, 0, t, 0, this.size), t;
        }),
        (N._$Fr = 0),
        (N._$hs = 1),
        (N._$ws = 100),
        (N._$Ns = 101),
        (N._$xs = 102),
        (N._$us = 103),
        (N._$qs = 104),
        (N._$Ys = 105),
        (B._$Ms = 1),
        (B._$Qs = 2),
        (B._$i2 = 0),
        (B._$No = 2),
        (B._$do = B._$Ms),
        (B._$Ls = !0),
        (B._$1r = 5),
        (B._$Qb = 65),
        (B._$J = 1e-4),
        (B._$FT = 0.001),
        (B._$Ss = 3),
        (G._$o7 = 6),
        (G._$S7 = 7),
        (G._$s7 = 8),
        (G._$77 = 9),
        (G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10),
        (G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11),
        (G._$T7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1),
        (G._$Is = -2004318072),
        (G._$h0 = 0),
        (G._$4L = 23),
        (G._$7P = 33),
        (G._$uT = function (t) {}),
        (G._$9o = function (t) {
          if (t < 40) return G._$uT(t), null;
          if (t < 50) return G._$uT(t), null;
          if (t < 60) return G._$uT(t), null;
          if (t < 100)
            switch (t) {
              case 65:
                return new Z();
              case 66:
                return new D();
              case 67:
                return new x();
              case 68:
                return new z();
              case 69:
                return new d();
              case 70:
                return new $t();
              default:
                return G._$uT(t), null;
            }
          else if (t < 150)
            switch (t) {
              case 131:
                return new nt();
              case 133:
                return new tt();
              case 136:
                return new l();
              case 137:
                return new rt();
              case 142:
                return new j();
            }
          return G._$uT(t), null;
        }),
        (U._$HP = 0),
        (U._$_0 = !0),
        (U._$V2 = -1),
        (U._$W0 = -1),
        (U._$jr = !1),
        (U._$ZS = !0),
        (U._$tr = -1e6),
        (U._$lr = 1e6),
        (U._$is = 32),
        (U._$e = !1),
        (U.prototype.getDrawDataIndex = function (t) {
          for (var i = this._$aS.length - 1; i >= 0; --i)
            if (null != this._$aS[i] && this._$aS[i].getDrawDataID() == t) return i;
          return -1;
        }),
        (U.prototype.getDrawData = function (t) {
          if (t instanceof R) {
            if (null == this._$Bo) {
              this._$Bo = new Object();
              for (var i = this._$aS.length, e = 0; e < i; e++) {
                var r = this._$aS[e],
                  o = r.getDrawDataID();
                null != o && (this._$Bo[o] = r);
              }
            }
            return this._$Bo[id];
          }
          return t < this._$aS.length ? this._$aS[t] : null;
        }),
        (U.prototype.release = function () {
          this._$3S.clear(),
            this._$aS.clear(),
            this._$F2.clear(),
            null != this._$Bo && this._$Bo.clear(),
            this._$db.clear(),
            this._$8b.clear(),
            this._$Hr.clear();
        }),
        (U.prototype.init = function () {
          this._$co++, this._$F2.length > 0 && this.release();
          for (
            var t = this._$Ri.getModelImpl(), i = t._$Xr(), e = i.length, r = new Array(), n = new Array(), s = 0;
            s < e;
            ++s
          ) {
            var _ = i[s];
            this._$F2.push(_), this._$Hr.push(_.init(this));
            for (var a = _.getBaseData(), h = a.length, $ = 0; $ < h; ++$) r.push(a[$]);
            for ($ = 0; $ < h; ++$) {
              var l = a[$].init(this);
              l._$l2(s), n.push(l);
            }
            var u = _.getDrawData(),
              p = u.length;
            for ($ = 0; $ < p; ++$) {
              var c = u[$],
                f = c.init(this);
              (f._$IP = s), this._$aS.push(c), this._$8b.push(f);
            }
          }
          for (var g = r.length, y = yt._$2o(); ; ) {
            var d = !1;
            for (s = 0; s < g; ++s) {
              var m = r[s];
              if (null != m) {
                var T = m.getTargetBaseDataID();
                (null == T || T == y || this.getBaseDataIndex(T) >= 0) &&
                  (this._$3S.push(m), this._$db.push(n[s]), (r[s] = null), (d = !0));
              }
            }
            if (!d) break;
          }
          var P = t._$E2();
          if (null != P) {
            var S = P._$1s();
            if (null != S) {
              var v = S.length;
              for (s = 0; s < v; ++s) {
                var L = S[s];
                null != L && this._$02(L.getParamID(), L.getDefaultValue(), L.getMinValue(), L.getMaxValue());
              }
            }
          }
          (this.clipManager = new o(this.dp_webgl)),
            this.clipManager.init(this, this._$aS, this._$8b),
            (this._$QT = !0);
        }),
        (U.prototype.update = function () {
          U._$e && _.start("_$zL");
          for (var t = this._$_2.length, i = 0; i < t; i++)
            this._$_2[i] != this._$vr[i] && ((this._$Js[i] = U._$ZS), (this._$vr[i] = this._$_2[i]));
          var e = this._$3S.length,
            r = this._$aS.length,
            o = W._$or(),
            n = W._$Pr() - o + 1;
          (null == this._$Ws || this._$Ws.length < n) &&
            ((this._$Ws = new Int16Array(n)), (this._$Vs = new Int16Array(n)));
          for (i = 0; i < n; i++) (this._$Ws[i] = U._$V2), (this._$Vs[i] = U._$V2);
          (null == this._$Er || this._$Er.length < r) && (this._$Er = new Int16Array(r));
          for (i = 0; i < r; i++) this._$Er[i] = U._$W0;
          U._$e && _.dump("_$zL"), U._$e && _.start("_$UL");
          for (var s = null, a = 0; a < e; ++a) {
            var h = this._$3S[a],
              $ = this._$db[a];
            try {
              h._$Nr(this, $), h._$2b(this, $);
            } catch (t) {
              null == s && (s = t);
            }
          }
          null != s && U._$_0 && _._$Rb(s), U._$e && _.dump("_$UL"), U._$e && _.start("_$DL");
          for (var l = null, u = 0; u < r; ++u) {
            var p = this._$aS[u],
              c = this._$8b[u];
            try {
              if ((p._$Nr(this, c), c._$u2())) continue;
              p._$2b(this, c);
              var f,
                g = Math.floor(p._$zS(this, c) - o);
              try {
                f = this._$Vs[g];
              } catch (t) {
                g = Math.floor(p._$zS(this, c) - o);
                continue;
              }
              f == U._$V2 ? (this._$Ws[g] = u) : (this._$Er[f] = u), (this._$Vs[g] = u);
            } catch (t) {
              null == l && ((l = t), _t._$sT(_t._$H7));
            }
          }
          null != l && U._$_0 && _._$Rb(l), U._$e && _.dump("_$DL"), U._$e && _.start("_$eL");
          for (i = this._$Js.length - 1; i >= 0; i--) this._$Js[i] = U._$jr;
          return (this._$QT = !1), U._$e && _.dump("_$eL"), !1;
        }),
        (U.prototype.preDraw = function (t) {
          null != this.clipManager && (t._$ZT(), this.clipManager.setupClip(this, t));
        }),
        (U.prototype.draw = function (t) {
          if (null != this._$Ws) {
            var i = this._$Ws.length;
            t._$ZT();
            for (var e = 0; e < i; ++e) {
              var r = this._$Ws[e];
              if (r != U._$V2)
                for (;;) {
                  var o = this._$aS[r],
                    n = this._$8b[r];
                  if (n._$yo()) {
                    var s = n._$IP,
                      a = this._$Hr[s];
                    (n._$VS = a.getPartsOpacity()), o.draw(t, this, n);
                  }
                  var h = this._$Er[r];
                  if (h <= r || h == U._$W0) break;
                  r = h;
                }
            }
          } else _._$li("call _$Ri.update() before _$Ri.draw() ");
        }),
        (U.prototype.getParamIndex = function (t) {
          for (var i = this._$pb.length - 1; i >= 0; --i) if (this._$pb[i] == t) return i;
          return this._$02(t, 0, U._$tr, U._$lr);
        }),
        (U.prototype._$BS = function (t) {
          return this.getBaseDataIndex(t);
        }),
        (U.prototype.getBaseDataIndex = function (t) {
          for (var i = this._$3S.length - 1; i >= 0; --i)
            if (null != this._$3S[i] && this._$3S[i].getBaseDataID() == t) return i;
          return -1;
        }),
        (U.prototype._$UT = function (t, i) {
          var e = new Float32Array(i);
          return I._$jT(t, 0, e, 0, t.length), e;
        }),
        (U.prototype._$02 = function (t, i, e, r) {
          if (this._$qo >= this._$pb.length) {
            var o = this._$pb.length,
              n = new Array(2 * o);
            I._$jT(this._$pb, 0, n, 0, o),
              (this._$pb = n),
              (this._$_2 = this._$UT(this._$_2, 2 * o)),
              (this._$vr = this._$UT(this._$vr, 2 * o)),
              (this._$Rr = this._$UT(this._$Rr, 2 * o)),
              (this._$Or = this._$UT(this._$Or, 2 * o));
            var s = new Array();
            I._$jT(this._$Js, 0, s, 0, o), (this._$Js = s);
          }
          return (
            (this._$pb[this._$qo] = t),
            (this._$_2[this._$qo] = i),
            (this._$vr[this._$qo] = i),
            (this._$Rr[this._$qo] = e),
            (this._$Or[this._$qo] = r),
            (this._$Js[this._$qo] = U._$ZS),
            this._$qo++
          );
        }),
        (U.prototype._$Zo = function (t, i) {
          this._$3S[t] = i;
        }),
        (U.prototype.setParamFloat = function (t, i) {
          i < this._$Rr[t] && (i = this._$Rr[t]), i > this._$Or[t] && (i = this._$Or[t]), (this._$_2[t] = i);
        }),
        (U.prototype.loadParam = function () {
          var t = this._$_2.length;
          t > this._$fs.length && (t = this._$fs.length), I._$jT(this._$fs, 0, this._$_2, 0, t);
        }),
        (U.prototype.saveParam = function () {
          var t = this._$_2.length;
          t > this._$fs.length && (this._$fs = new Float32Array(t)), I._$jT(this._$_2, 0, this._$fs, 0, t);
        }),
        (U.prototype._$v2 = function () {
          return this._$co;
        }),
        (U.prototype._$WS = function () {
          return this._$QT;
        }),
        (U.prototype._$Xb = function (t) {
          return this._$Js[t] == U._$ZS;
        }),
        (U.prototype._$vs = function () {
          return this._$Es;
        }),
        (U.prototype._$Tr = function () {
          return this._$ZP;
        }),
        (U.prototype.getBaseData = function (t) {
          return this._$3S[t];
        }),
        (U.prototype.getParamFloat = function (t) {
          return this._$_2[t];
        }),
        (U.prototype.getParamMax = function (t) {
          return this._$Or[t];
        }),
        (U.prototype.getParamMin = function (t) {
          return this._$Rr[t];
        }),
        (U.prototype.setPartsOpacity = function (t, i) {
          this._$Hr[t].setPartsOpacity(i);
        }),
        (U.prototype.getPartsOpacity = function (t) {
          return this._$Hr[t].getPartsOpacity();
        }),
        (U.prototype.getPartsDataIndex = function (t) {
          for (var i = this._$F2.length - 1; i >= 0; --i)
            if (null != this._$F2[i] && this._$F2[i]._$p2() == t) return i;
          return -1;
        }),
        (U.prototype._$q2 = function (t) {
          return this._$db[t];
        }),
        (U.prototype._$C2 = function (t) {
          return this._$8b[t];
        }),
        (U.prototype._$Bb = function (t) {
          return this._$Hr[t];
        }),
        (U.prototype._$5s = function (t, i) {
          for (var e = this._$Ws.length, r = t, o = 0; o < e; ++o) {
            var n = this._$Ws[o];
            if (n != U._$V2)
              for (;;) {
                var s = this._$8b[n];
                s._$yo() && (s._$GT()._$B2(this, s, r), (r += i));
                var _ = this._$Er[n];
                if (_ <= n || _ == U._$W0) break;
                n = _;
              }
          }
        }),
        (U.prototype.setDrawParam = function (t) {
          this.dp_webgl = t;
        }),
        (U.prototype.getDrawParam = function () {
          return this.dp_webgl;
        }),
        (Y._$0T = function (t) {
          return Y._$0T(new _$5(t));
        }),
        (Y._$0T = function (t) {
          if (!t.exists()) throw new _$ls(t._$3b());
          for (
            var i, e = t.length(), r = new Int8Array(e), o = new _$Xs(new _$kb(t), 8192), n = 0;
            (i = o.read(r, n, e - n)) > 0;

          )
            n += i;
          return r;
        }),
        (Y._$C = function (t) {
          var i = null,
            e = null;
          try {
            (i = t instanceof Array ? t : new _$Xs(t, 8192)), (e = new _$js());
            for (var r, o = new Int8Array(1e3); (r = i.read(o)) > 0; ) e.write(o, 0, r);
            return e._$TS();
          } finally {
            null != t && t.close(), null != e && (e.flush(), e.close());
          }
        }),
        (k.prototype._$T2 = function () {
          return I.getUserTimeMSec() + Math._$10() * (2 * this._$Br - 1);
        }),
        (k.prototype._$uo = function (t) {
          this._$Br = t;
        }),
        (k.prototype._$QS = function (t, i, e) {
          (this._$Dr = t), (this._$Cb = i), (this._$mr = e);
        }),
        (k.prototype._$7T = function (t) {
          var i,
            e = I.getUserTimeMSec(),
            r = 0;
          switch (this._$_L) {
            case STATE_CLOSING:
              (r = (e - this._$bb) / this._$Dr) >= 1 && ((r = 1), (this._$_L = V.STATE_CLOSED), (this._$bb = e)),
                (i = 1 - r);
              break;
            case STATE_CLOSED:
              (r = (e - this._$bb) / this._$Cb) >= 1 && ((this._$_L = V.STATE_OPENING), (this._$bb = e)), (i = 0);
              break;
            case STATE_OPENING:
              (r = (e - this._$bb) / this._$mr) >= 1 &&
                ((r = 1), (this._$_L = V.STATE_INTERVAL), (this._$12 = this._$T2())),
                (i = r);
              break;
            case STATE_INTERVAL:
              this._$12 < e && ((this._$_L = V.STATE_CLOSING), (this._$bb = e)), (i = 1);
              break;
            case STATE_FIRST:
            default:
              (this._$_L = V.STATE_INTERVAL), (this._$12 = this._$T2()), (i = 1);
          }
          this._$jo || (i = -i), t.setParamFloat(this._$iL, i), t.setParamFloat(this._$0L, i);
        });
      var V = function () {};
      function X() {
        e ||
          (M.prototype.constructor.call(this),
          (this._$sb = new Int32Array(X._$As)),
          (this._$U2 = new Array()),
          (this.transform = null),
          (this.gl = null),
          null == X._$NT && ((X._$NT = X._$9r(256)), (X._$vS = X._$9r(256)), (X._$no = X._$vb(256))));
      }
      function z() {
        e || (A.prototype.constructor.call(this), (this._$GS = null), (this._$Y0 = null));
      }
      function H(t) {
        st.prototype.constructor.call(this, t), (this._$8r = A._$ur), (this._$Yr = null), (this._$Wr = null);
      }
      function W() {
        e ||
          (L.prototype.constructor.call(this),
          (this._$gP = null),
          (this._$dr = null),
          (this._$GS = null),
          (this._$qb = null),
          (this._$Lb = null),
          (this._$mS = null));
      }
      function j() {
        e || ((this._$NL = null), (this._$3S = null), (this._$aS = null), j._$42++);
      }
      function q() {
        e || (r.prototype.constructor.call(this), (this._$zo = new X()));
      }
      function J() {
        e ||
          (s.prototype.constructor.call(this),
          (this.motions = new Array()),
          (this._$o2 = null),
          (this._$7r = J._$Co++),
          (this._$D0 = 30),
          (this._$yT = 0),
          (this._$E = !1),
          (this.loopFadeIn = !0),
          (this._$rr = -1),
          (this._$eP = 0));
      }
      function Q(t, i) {
        return String.fromCharCode(t.getUint8(i));
      }
      function C() {
        (this._$P = new Float32Array(100)), (this.size = 0);
      }
      function N() {
        (this._$4P = null), (this._$I0 = null), (this._$RP = null);
      }
      function Z() {
        e ||
          (A.prototype.constructor.call(this), (this._$o = 0), (this._$A = 0), (this._$GS = null), (this._$Eo = null));
      }
      function K(t) {
        st.prototype.constructor.call(this, t), (this._$8r = A._$ur), (this._$Cr = null), (this._$hr = null);
      }
      function tt() {
        e ||
          ((this.visible = !0),
          (this._$g0 = !1),
          (this._$NL = null),
          (this._$3S = null),
          (this._$aS = null),
          tt._$42++);
      }
      function it(t) {
        (this._$VS = null), (this._$e0 = null), (this._$e0 = t);
      }
      function et(t) {
        e || (this.id = t);
      }
      function rt() {
        e || (this._$4S = null);
      }
      function ot(t, i) {
        (this.canvas = t),
          (this.context = i),
          (this.viewport = new Array(0, 0, t.width, t.height)),
          (this._$6r = 1),
          (this._$xP = 0),
          (this._$3r = 1),
          (this._$uP = 0),
          (this._$Qo = -1),
          (this.cacheImages = {});
      }
      function nt() {
        e || ((this._$TT = null), (this._$LT = null), (this._$FS = null), (this._$wL = null));
      }
      function st(t) {
        e ||
          ((this._$e0 = null),
          (this._$IP = null),
          (this._$JS = !1),
          (this._$AT = !0),
          (this._$e0 = t),
          (this.totalScale = 1),
          (this._$7s = 1),
          (this.totalOpacity = 1));
      }
      function _t() {}
      function at() {}
      function ht(t) {
        e || (this._$ib = t);
      }
      function $t() {
        e ||
          (W.prototype.constructor.call(this),
          (this._$LP = -1),
          (this._$d0 = 0),
          (this._$Yo = 0),
          (this._$JP = null),
          (this._$5P = null),
          (this._$BP = null),
          (this._$Eo = null),
          (this._$Qi = null),
          (this._$6s = $t._$ms),
          (this.culling = !0),
          (this.gl_cacheImage = null),
          (this.instanceNo = $t._$42++));
      }
      function lt(t) {
        Lt.prototype.constructor.call(this, t), (this._$8r = W._$ur), (this._$Cr = null), (this._$hr = null);
      }
      function ut() {
        e || ((this.x = null), (this.y = null));
      }
      function pt(t) {
        e ||
          (r.prototype.constructor.call(this),
          (this.drawParamWebGL = new dt(t)),
          this.drawParamWebGL.setGL(_t.getGL(t)));
      }
      function ct() {
        e || ((this.motions = null), (this._$eb = !1), (this.motions = new Array()));
      }
      function ft() {
        (this._$w0 = null),
          (this._$AT = !0),
          (this._$9L = !1),
          (this._$z2 = -1),
          (this._$bs = -1),
          (this._$Do = -1),
          (this._$sr = null),
          (this._$sr = ft._$Gs++);
      }
      function gt() {
        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
      function yt(t) {
        e || et.prototype.constructor.call(this, t);
      }
      function dt(t) {
        e ||
          (M.prototype.constructor.call(this),
          (this.textures = new Array()),
          (this.transform = null),
          (this.gl = null),
          (this.glno = t),
          (this.firstDraw = !0),
          (this.anisotropyExt = null),
          (this.maxAnisotropy = 0),
          (this._$As = 32),
          (this._$Gr = !1),
          (this._$NT = null),
          (this._$vS = null),
          (this._$no = null),
          (this.vertShader = null),
          (this.fragShader = null),
          (this.vertShaderOff = null),
          (this.fragShaderOff = null));
      }
      function mt(t, i, e) {
        return (
          null == i && (i = t.createBuffer()),
          t.bindBuffer(t.ARRAY_BUFFER, i),
          t.bufferData(t.ARRAY_BUFFER, e, t.DYNAMIC_DRAW),
          i
        );
      }
      function Tt(t, i, e) {
        return (
          null == i && (i = t.createBuffer()),
          t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i),
          t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.DYNAMIC_DRAW),
          i
        );
      }
      function Pt(t) {
        e ||
          ((this._$P = new Int8Array(8)),
          (this._$R0 = new DataView(this._$P.buffer)),
          (this._$3i = new Int8Array(1e3)),
          (this._$hL = 0),
          (this._$v0 = 0),
          (this._$S2 = 0),
          (this._$Ko = new Array()),
          (this._$T = t),
          (this._$F = 0));
      }
      (V.STATE_FIRST = "STATE_FIRST"),
        (V.STATE_INTERVAL = "STATE_INTERVAL"),
        (V.STATE_CLOSING = "STATE_CLOSING"),
        (V.STATE_CLOSED = "STATE_CLOSED"),
        (V.STATE_OPENING = "STATE_OPENING"),
        (X.prototype = new M()),
        (X._$As = 32),
        (X._$Gr = !1),
        (X._$NT = null),
        (X._$vS = null),
        (X._$no = null),
        (X._$9r = function (t) {
          return new Float32Array(t);
        }),
        (X._$vb = function (t) {
          return new Int16Array(t);
        }),
        (X._$cr = function (t, i) {
          return (
            null == t || t._$yL() < i.length
              ? ((t = X._$9r(2 * i.length)).put(i), t._$oT(0))
              : (t.clear(), t.put(i), t._$oT(0)),
            t
          );
        }),
        (X._$mb = function (t, i) {
          return (
            null == t || t._$yL() < i.length
              ? ((t = X._$vb(2 * i.length)).put(i), t._$oT(0))
              : (t.clear(), t.put(i), t._$oT(0)),
            t
          );
        }),
        (X._$Hs = function () {
          return X._$Gr;
        }),
        (X._$as = function (t) {
          X._$Gr = t;
        }),
        (X.prototype.setGL = function (t) {
          this.gl = t;
        }),
        (X.prototype.setTransform = function (t) {
          this.transform = t;
        }),
        (X.prototype._$ZT = function () {}),
        (X.prototype._$Uo = function (t, i, e, r, o, n, s, _) {
          if (!(n < 0.01)) {
            var a = this._$U2[t],
              h = n > 0.9 ? _t.EXPAND_W : 0;
            this.gl.drawElements(a, e, r, o, n, h, this.transform, _);
          }
        }),
        (X.prototype._$Rs = function () {
          throw new Error("_$Rs");
        }),
        (X.prototype._$Ds = function (t) {
          throw new Error("_$Ds");
        }),
        (X.prototype._$K2 = function () {
          for (var t = 0; t < this._$sb.length; t++) {
            0 != this._$sb[t] && (this.gl._$Sr(1, this._$sb, t), (this._$sb[t] = 0));
          }
        }),
        (X.prototype.setTexture = function (t, i) {
          this._$sb.length < t + 1 && this._$nS(t), (this._$sb[t] = i);
        }),
        (X.prototype.setTexture = function (t, i) {
          this._$sb.length < t + 1 && this._$nS(t), (this._$U2[t] = i);
        }),
        (X.prototype._$nS = function (t) {
          var i = Math.max(2 * this._$sb.length, t + 1 + 10),
            e = new Int32Array(i);
          I._$jT(this._$sb, 0, e, 0, this._$sb.length), (this._$sb = e);
          var r = new Array();
          I._$jT(this._$U2, 0, r, 0, this._$U2.length), (this._$U2 = r);
        }),
        (z.prototype = new A()),
        (z._$Xo = new Float32Array(2)),
        (z._$io = new Float32Array(2)),
        (z._$0o = new Float32Array(2)),
        (z._$Lo = new Float32Array(2)),
        (z._$To = new Float32Array(2)),
        (z._$Po = new Float32Array(2)),
        (z._$gT = new Array()),
        (z.prototype._$zP = function () {
          (this._$GS = new D()), this._$GS._$zP(), (this._$Y0 = new Array());
        }),
        (z.prototype.getType = function () {
          return A._$c2;
        }),
        (z.prototype._$F0 = function (t) {
          A.prototype._$F0.call(this, t),
            (this._$GS = t._$nP()),
            (this._$Y0 = t._$nP()),
            A.prototype.readV2_opacity.call(this, t);
        }),
        (z.prototype.init = function (t) {
          var i = new H(this);
          return (i._$Yr = new d()), this._$32() && (i._$Wr = new d()), i;
        }),
        (z.prototype._$Nr = function (t, i) {
          this != i._$GT();
          var e = i;
          if (this._$GS._$Ur(t)) {
            var r = z._$gT;
            r[0] = !1;
            var o = this._$GS._$Q2(t, r);
            i._$Ib(r[0]), this.interpolateOpacity(t, this._$GS, i, r);
            var n = t._$vs(),
              s = t._$Tr();
            if ((this._$GS._$zr(n, s, o), o <= 0)) {
              var _ = this._$Y0[n[0]];
              e._$Yr.init(_);
            } else if (1 == o) {
              _ = this._$Y0[n[0]];
              var a = this._$Y0[n[1]],
                h = s[0];
              (e._$Yr._$fL = _._$fL + (a._$fL - _._$fL) * h),
                (e._$Yr._$gL = _._$gL + (a._$gL - _._$gL) * h),
                (e._$Yr._$B0 = _._$B0 + (a._$B0 - _._$B0) * h),
                (e._$Yr._$z0 = _._$z0 + (a._$z0 - _._$z0) * h),
                (e._$Yr._$qT = _._$qT + (a._$qT - _._$qT) * h);
            } else if (2 == o) {
              (_ = this._$Y0[n[0]]), (a = this._$Y0[n[1]]);
              var $ = this._$Y0[n[2]],
                l = this._$Y0[n[3]],
                u = ((h = s[0]), s[1]),
                p = _._$fL + (a._$fL - _._$fL) * h,
                c = $._$fL + (l._$fL - $._$fL) * h;
              (e._$Yr._$fL = p + (c - p) * u),
                (p = _._$gL + (a._$gL - _._$gL) * h),
                (c = $._$gL + (l._$gL - $._$gL) * h),
                (e._$Yr._$gL = p + (c - p) * u),
                (p = _._$B0 + (a._$B0 - _._$B0) * h),
                (c = $._$B0 + (l._$B0 - $._$B0) * h),
                (e._$Yr._$B0 = p + (c - p) * u),
                (p = _._$z0 + (a._$z0 - _._$z0) * h),
                (c = $._$z0 + (l._$z0 - $._$z0) * h),
                (e._$Yr._$z0 = p + (c - p) * u),
                (p = _._$qT + (a._$qT - _._$qT) * h),
                (c = $._$qT + (l._$qT - $._$qT) * h),
                (e._$Yr._$qT = p + (c - p) * u);
            } else if (3 == o) {
              var f = this._$Y0[n[0]],
                g = this._$Y0[n[1]],
                y = this._$Y0[n[2]],
                d = this._$Y0[n[3]],
                m = this._$Y0[n[4]],
                T = this._$Y0[n[5]],
                P = this._$Y0[n[6]],
                S = this._$Y0[n[7]],
                v = ((h = s[0]), (u = s[1]), s[2]),
                L =
                  ((p = f._$fL + (g._$fL - f._$fL) * h),
                  (c = y._$fL + (d._$fL - y._$fL) * h),
                  m._$fL + (T._$fL - m._$fL) * h),
                M = P._$fL + (S._$fL - P._$fL) * h;
              (e._$Yr._$fL = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)),
                (p = f._$gL + (g._$gL - f._$gL) * h),
                (c = y._$gL + (d._$gL - y._$gL) * h),
                (L = m._$gL + (T._$gL - m._$gL) * h),
                (M = P._$gL + (S._$gL - P._$gL) * h),
                (e._$Yr._$gL = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)),
                (p = f._$B0 + (g._$B0 - f._$B0) * h),
                (c = y._$B0 + (d._$B0 - y._$B0) * h),
                (L = m._$B0 + (T._$B0 - m._$B0) * h),
                (M = P._$B0 + (S._$B0 - P._$B0) * h),
                (e._$Yr._$B0 = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)),
                (p = f._$z0 + (g._$z0 - f._$z0) * h),
                (c = y._$z0 + (d._$z0 - y._$z0) * h),
                (L = m._$z0 + (T._$z0 - m._$z0) * h),
                (M = P._$z0 + (S._$z0 - P._$z0) * h),
                (e._$Yr._$z0 = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)),
                (p = f._$qT + (g._$qT - f._$qT) * h),
                (c = y._$qT + (d._$qT - y._$qT) * h),
                (L = m._$qT + (T._$qT - m._$qT) * h),
                (M = P._$qT + (S._$qT - P._$qT) * h),
                (e._$Yr._$qT = (1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u));
            } else if (4 == o) {
              var E = this._$Y0[n[0]],
                A = this._$Y0[n[1]],
                I = this._$Y0[n[2]],
                x = this._$Y0[n[3]],
                w = this._$Y0[n[4]],
                D = this._$Y0[n[5]],
                O = this._$Y0[n[6]],
                R = this._$Y0[n[7]],
                b = this._$Y0[n[8]],
                F = this._$Y0[n[9]],
                C = this._$Y0[n[10]],
                N = this._$Y0[n[11]],
                B = this._$Y0[n[12]],
                G = this._$Y0[n[13]],
                U = this._$Y0[n[14]],
                Y = this._$Y0[n[15]],
                k = ((h = s[0]), (u = s[1]), (v = s[2]), s[3]),
                V =
                  ((p = E._$fL + (A._$fL - E._$fL) * h),
                  (c = I._$fL + (x._$fL - I._$fL) * h),
                  (L = w._$fL + (D._$fL - w._$fL) * h),
                  (M = O._$fL + (R._$fL - O._$fL) * h),
                  b._$fL + (F._$fL - b._$fL) * h),
                X = C._$fL + (N._$fL - C._$fL) * h,
                H = B._$fL + (G._$fL - B._$fL) * h,
                W = U._$fL + (Y._$fL - U._$fL) * h;
              (e._$Yr._$fL =
                (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) +
                k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u))),
                (p = E._$gL + (A._$gL - E._$gL) * h),
                (c = I._$gL + (x._$gL - I._$gL) * h),
                (L = w._$gL + (D._$gL - w._$gL) * h),
                (M = O._$gL + (R._$gL - O._$gL) * h),
                (V = b._$gL + (F._$gL - b._$gL) * h),
                (X = C._$gL + (N._$gL - C._$gL) * h),
                (H = B._$gL + (G._$gL - B._$gL) * h),
                (W = U._$gL + (Y._$gL - U._$gL) * h),
                (e._$Yr._$gL =
                  (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) +
                  k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u))),
                (p = E._$B0 + (A._$B0 - E._$B0) * h),
                (c = I._$B0 + (x._$B0 - I._$B0) * h),
                (L = w._$B0 + (D._$B0 - w._$B0) * h),
                (M = O._$B0 + (R._$B0 - O._$B0) * h),
                (V = b._$B0 + (F._$B0 - b._$B0) * h),
                (X = C._$B0 + (N._$B0 - C._$B0) * h),
                (H = B._$B0 + (G._$B0 - B._$B0) * h),
                (W = U._$B0 + (Y._$B0 - U._$B0) * h),
                (e._$Yr._$B0 =
                  (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) +
                  k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u))),
                (p = E._$z0 + (A._$z0 - E._$z0) * h),
                (c = I._$z0 + (x._$z0 - I._$z0) * h),
                (L = w._$z0 + (D._$z0 - w._$z0) * h),
                (M = O._$z0 + (R._$z0 - O._$z0) * h),
                (V = b._$z0 + (F._$z0 - b._$z0) * h),
                (X = C._$z0 + (N._$z0 - C._$z0) * h),
                (H = B._$z0 + (G._$z0 - B._$z0) * h),
                (W = U._$z0 + (Y._$z0 - U._$z0) * h),
                (e._$Yr._$z0 =
                  (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) +
                  k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u))),
                (p = E._$qT + (A._$qT - E._$qT) * h),
                (c = I._$qT + (x._$qT - I._$qT) * h),
                (L = w._$qT + (D._$qT - w._$qT) * h),
                (M = O._$qT + (R._$qT - O._$qT) * h),
                (V = b._$qT + (F._$qT - b._$qT) * h),
                (X = C._$qT + (N._$qT - C._$qT) * h),
                (H = B._$qT + (G._$qT - B._$qT) * h),
                (W = U._$qT + (Y._$qT - U._$qT) * h),
                (e._$Yr._$qT =
                  (1 - k) * ((1 - v) * (p + (c - p) * u) + v * (L + (M - L) * u)) +
                  k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)));
            } else {
              for (var j = 0 | Math.pow(2, o), q = new Float32Array(j), J = 0; J < j; J++) {
                for (var Q = J, Z = 1, K = 0; K < o; K++) (Z *= Q % 2 == 0 ? 1 - s[K] : s[K]), (Q /= 2);
                q[J] = Z;
              }
              for (var tt = new Array(), it = 0; it < j; it++) tt[it] = this._$Y0[n[it]];
              var et = 0,
                rt = 0,
                ot = 0,
                nt = 0,
                st = 0;
              for (it = 0; it < j; it++)
                (et += q[it] * tt[it]._$fL),
                  (rt += q[it] * tt[it]._$gL),
                  (ot += q[it] * tt[it]._$B0),
                  (nt += q[it] * tt[it]._$z0),
                  (st += q[it] * tt[it]._$qT);
              (e._$Yr._$fL = et), (e._$Yr._$gL = rt), (e._$Yr._$B0 = ot), (e._$Yr._$z0 = nt), (e._$Yr._$qT = st);
            }
            _ = this._$Y0[n[0]];
            (e._$Yr.reflectX = _.reflectX), (e._$Yr.reflectY = _.reflectY);
          }
        }),
        (z.prototype._$2b = function (t, i) {
          this != i._$GT();
          var e = i;
          if ((e._$hS(!0), this._$32())) {
            var r = this.getTargetBaseDataID();
            if ((e._$8r == A._$ur && (e._$8r = t.getBaseDataIndex(r)), e._$8r < 0))
              _t._$so && _._$li("_$L _$0P _$G :: %s", r), e._$hS(!1);
            else {
              var o = t.getBaseData(e._$8r);
              if (null != o) {
                var n = t._$q2(e._$8r),
                  s = z._$Xo;
                (s[0] = e._$Yr._$fL), (s[1] = e._$Yr._$gL);
                var a = z._$io;
                (a[0] = 0), (a[1] = -0.1), n._$GT().getType() == A._$c2 ? (a[1] = -10) : (a[1] = -0.1);
                var h = z._$0o;
                this._$Jr(t, o, n, s, a, h);
                var $ = vt._$92(a, h);
                o._$nb(t, n, s, s, 1, 0, 2),
                  (e._$Wr._$fL = s[0]),
                  (e._$Wr._$gL = s[1]),
                  (e._$Wr._$B0 = e._$Yr._$B0),
                  (e._$Wr._$z0 = e._$Yr._$z0),
                  (e._$Wr._$qT = e._$Yr._$qT - $ * vt._$NS);
                var l = n.getTotalScale();
                e.setTotalScale_notForClient(l * e._$Wr._$B0);
                var u = n.getTotalOpacity();
                e.setTotalOpacity(u * e.getInterpolatedOpacity()),
                  (e._$Wr.reflectX = e._$Yr.reflectX),
                  (e._$Wr.reflectY = e._$Yr.reflectY),
                  e._$hS(n._$yo());
              } else e._$hS(!1);
            }
          } else e.setTotalScale_notForClient(e._$Yr._$B0), e.setTotalOpacity(e.getInterpolatedOpacity());
        }),
        (z.prototype._$nb = function (t, i, e, r, o, n, s) {
          this != i._$GT();
          for (
            var _,
              a,
              h = i,
              $ = null != h._$Wr ? h._$Wr : h._$Yr,
              l = Math.sin(vt._$bS * $._$qT),
              u = Math.cos(vt._$bS * $._$qT),
              p = h.getTotalScale(),
              c = $.reflectX ? -1 : 1,
              f = $.reflectY ? -1 : 1,
              g = u * p * c,
              y = -l * p * f,
              d = l * p * c,
              m = u * p * f,
              T = $._$fL,
              P = $._$gL,
              S = o * s,
              v = n;
            v < S;
            v += s
          )
            (_ = e[v]), (a = e[v + 1]), (r[v] = g * _ + y * a + T), (r[v + 1] = d * _ + m * a + P);
        }),
        (z.prototype._$Jr = function (t, i, e, r, o, n) {
          i != e._$GT();
          var s = z._$Lo;
          (z._$Lo[0] = r[0]), (z._$Lo[1] = r[1]), i._$nb(t, e, s, s, 1, 0, 2);
          for (var _ = z._$To, a = z._$Po, h = 1, $ = 0; $ < 10; $++) {
            if (
              ((a[0] = r[0] + h * o[0]),
              (a[1] = r[1] + h * o[1]),
              i._$nb(t, e, a, _, 1, 0, 2),
              (_[0] -= s[0]),
              (_[1] -= s[1]),
              0 != _[0] || 0 != _[1])
            )
              return (n[0] = _[0]), void (n[1] = _[1]);
            if (
              ((a[0] = r[0] - h * o[0]),
              (a[1] = r[1] - h * o[1]),
              i._$nb(t, e, a, _, 1, 0, 2),
              (_[0] -= s[0]),
              (_[1] -= s[1]),
              0 != _[0] || 0 != _[1])
            )
              return (_[0] = -_[0]), (_[0] = -_[0]), (n[0] = _[0]), void (n[1] = _[1]);
            h *= 0.1;
          }
          _t._$so;
        }),
        (H.prototype = new st()),
        (W.prototype = new L()),
        (W._$ur = -2),
        (W._$ES = 500),
        (W._$wb = 2),
        (W._$8S = 3),
        (W._$os = 4),
        (W._$52 = W._$ES),
        (W._$R2 = W._$ES),
        (W._$Sb = function (t) {
          for (var i = t.length - 1; i >= 0; --i) {
            var e = t[i];
            e < W._$52 ? (W._$52 = e) : e > W._$R2 && (W._$R2 = e);
          }
        }),
        (W._$or = function () {
          return W._$52;
        }),
        (W._$Pr = function () {
          return W._$R2;
        }),
        (W.prototype._$F0 = function (t) {
          (this._$gP = t._$nP()),
            (this._$dr = t._$nP()),
            (this._$GS = t._$nP()),
            (this._$qb = t._$6L()),
            (this._$Lb = t._$cS()),
            (this._$mS = t._$Tb()),
            t.getFormatVersion() >= G._$T7
              ? ((this.clipID = t._$nP()), (this.clipIDList = this.convertClipIDForV2_11(this.clipID)))
              : (this.clipIDList = null),
            W._$Sb(this._$Lb);
        }),
        (W.prototype.getClipIDList = function () {
          return this.clipIDList;
        }),
        (W.prototype._$Nr = function (t, i) {
          if (((i._$IS[0] = !1), (i._$Us = S._$Z2(t, this._$GS, i._$IS, this._$Lb)), _t._$Zs));
          else if (i._$IS[0]) return;
          i._$7s = S._$br(t, this._$GS, i._$IS, this._$mS);
        }),
        (W.prototype._$2b = function (t) {}),
        (W.prototype.getDrawDataID = function () {
          return this._$gP;
        }),
        (W.prototype._$j2 = function (t) {
          this._$gP = t;
        }),
        (W.prototype.getOpacity = function (t, i) {
          return i._$7s;
        }),
        (W.prototype._$zS = function (t, i) {
          return i._$Us;
        }),
        (W.prototype.getTargetBaseDataID = function () {
          return this._$dr;
        }),
        (W.prototype._$gs = function (t) {
          this._$dr = t;
        }),
        (W.prototype._$32 = function () {
          return null != this._$dr && this._$dr != yt._$2o();
        }),
        (W.prototype.getType = function () {}),
        (j._$42 = 0),
        (j.prototype._$1b = function () {
          return this._$3S;
        }),
        (j.prototype.getDrawDataList = function () {
          return this._$aS;
        }),
        (j.prototype._$F0 = function (t) {
          (this._$NL = t._$nP()), (this._$aS = t._$nP()), (this._$3S = t._$nP());
        }),
        (j.prototype._$kr = function (t) {
          t._$Zo(this._$3S), t._$xo(this._$aS), (this._$3S = null), (this._$aS = null);
        }),
        (q.prototype = new r()),
        (q.loadModel = function (t) {
          var i = new q();
          return r._$62(i, t), i;
        }),
        (q.loadModel = function (t) {
          var i = new q();
          return r._$62(i, t), i;
        }),
        (q._$to = function () {
          return new q();
        }),
        (q._$er = function (t) {
          var i = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
          if (0 == i.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + i._$PL());
          for (
            var e = [
                "../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1",
              ],
              r = q.loadModel(i._$3b()),
              o = 0;
            o < e.length;
            o++
          ) {
            var n = new _$5(e[o]);
            if (0 == n.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n._$PL());
            r.setTexture(o, _$nL._$_o(t, n._$3b()));
          }
          return r;
        }),
        (q.prototype.setGL = function (t) {
          this._$zo.setGL(t);
        }),
        (q.prototype.setTransform = function (t) {
          this._$zo.setTransform(t);
        }),
        (q.prototype.draw = function () {
          this._$5S.draw(this._$zo);
        }),
        (q.prototype._$K2 = function () {
          this._$zo._$K2();
        }),
        (q.prototype.setTexture = function (t, i) {
          null == this._$zo && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, i);
        }),
        (q.prototype.setTexture = function (t, i) {
          null == this._$zo && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, i);
        }),
        (q.prototype._$Rs = function () {
          return this._$zo._$Rs();
        }),
        (q.prototype._$Ds = function (t) {
          this._$zo._$Ds(t);
        }),
        (q.prototype.getDrawParam = function () {
          return this._$zo;
        }),
        (J.prototype = new s()),
        (J._$cs = "VISIBLE:"),
        (J._$ar = "LAYOUT:"),
        (J.MTN_PREFIX_FADEIN = "FADEIN:"),
        (J.MTN_PREFIX_FADEOUT = "FADEOUT:"),
        (J._$Co = 0),
        (J._$1T = 1),
        (J.loadMotion = function (t) {
          var i = Y._$C(t);
          return J.loadMotion(i);
        }),
        (J.loadMotion = function (t) {
          t instanceof ArrayBuffer && (t = new DataView(t));
          var i = new J(),
            e = [0],
            r = t.byteLength;
          i._$yT = 0;
          for (var o = 0; o < r; ++o) {
            var n = Q(t, o),
              s = n.charCodeAt(0);
            if ("\n" != n && "\r" != n)
              if ("#" != n)
                if ("$" != n) {
                  if ((97 <= s && s <= 122) || (65 <= s && s <= 90) || "_" == n) {
                    for (l = o, u = -1; o < r && "\r" != (n = Q(t, o)) && "\n" != n; ++o)
                      if ("=" == n) {
                        u = o;
                        break;
                      }
                    if (u >= 0) {
                      var _ = new N();
                      w.startsWith(t, l, J._$cs)
                        ? ((_._$RP = N._$hs), (_._$4P = w.createString(t, l, u - l)))
                        : w.startsWith(t, l, J._$ar)
                        ? ((_._$4P = w.createString(t, l + 7, u - l - 7)),
                          w.startsWith(t, l + 7, "ANCHOR_X")
                            ? (_._$RP = N._$xs)
                            : w.startsWith(t, l + 7, "ANCHOR_Y")
                            ? (_._$RP = N._$us)
                            : w.startsWith(t, l + 7, "SCALE_X")
                            ? (_._$RP = N._$qs)
                            : w.startsWith(t, l + 7, "SCALE_Y")
                            ? (_._$RP = N._$Ys)
                            : w.startsWith(t, l + 7, "X")
                            ? (_._$RP = N._$ws)
                            : w.startsWith(t, l + 7, "Y") && (_._$RP = N._$Ns))
                        : ((_._$RP = N._$Fr), (_._$4P = w.createString(t, l, u - l))),
                        i.motions.push(_);
                      var a = 0,
                        h = [];
                      for (o = u + 1; o < r && "\r" != (n = Q(t, o)) && "\n" != n; ++o)
                        if ("," != n && " " != n && "\t" != n) {
                          c = w._$LS(t, r, o, e);
                          if (e[0] > 0) {
                            h.push(c), a++;
                            var $ = e[0];
                            if ($ < o) {
                              break;
                            }
                            o = $ - 1;
                          }
                        }
                      (_._$I0 = new Float32Array(h)), a > i._$yT && (i._$yT = a);
                    }
                  }
                } else {
                  for (var l = o, u = -1; o < r && "\r" != (n = Q(t, o)) && "\n" != n; ++o)
                    if ("=" == n) {
                      u = o;
                      break;
                    }
                  var p = !1;
                  if (u >= 0)
                    for (
                      u == l + 4 && "f" == Q(t, l + 1) && "p" == Q(t, l + 2) && "s" == Q(t, l + 3) && (p = !0),
                        o = u + 1;
                      o < r && "\r" != (n = Q(t, o)) && "\n" != n;
                      ++o
                    )
                      if ("," != n && " " != n && "\t" != n) {
                        var c = w._$LS(t, r, o, e);
                        e[0] > 0 && p && 5 < c && c < 121 && (i._$D0 = c), (o = e[0]);
                      }
                  for (; o < r && "\n" != Q(t, o) && "\r" != Q(t, o); ++o);
                }
              else for (; o < r && "\n" != Q(t, o) && "\r" != Q(t, o); ++o);
          }
          return (i._$rr = ((1e3 * i._$yT) / i._$D0) | 0), i;
        }),
        (J.prototype.getDurationMSec = function () {
          return this._$E ? -1 : this._$rr;
        }),
        (J.prototype.getLoopDurationMSec = function () {
          return this._$rr;
        }),
        (J.prototype.dump = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t];

            for (var e = 0; e < i._$I0.length && e < 10; e++) {}
          }
        }),
        (J.prototype.updateParamExe = function (t, i, e, r) {
          for (var o = ((i - r._$z2) * this._$D0) / 1e3, n = 0 | o, s = o - n, _ = 0; _ < this.motions.length; _++) {
            var a = this.motions[_],
              h = a._$I0.length,
              $ = a._$4P;
            if (a._$RP == N._$hs) {
              var l = a._$I0[n >= h ? h - 1 : n];
              t.setParamFloat($, l);
            } else if (N._$ws <= a._$RP && a._$RP <= N._$Ys);
            else {
              var u = t.getParamIndex($),
                p = t.getModelContext(),
                c = 0.4 * (p.getParamMax(u) - p.getParamMin(u)),
                f = p.getParamFloat(u),
                g = a._$I0[n >= h ? h - 1 : n],
                y = a._$I0[n + 1 >= h ? h - 1 : n + 1],
                d = f + (((g < y && y - g > c) || (g > y && g - y > c) ? g : g + (y - g) * s) - f) * e;
              t.setParamFloat($, d);
            }
          }
          n >= this._$yT && (this._$E ? ((r._$z2 = i), this.loopFadeIn && (r._$bs = i)) : (r._$9L = !0)),
            (this._$eP = e);
        }),
        (J.prototype._$r0 = function () {
          return this._$E;
        }),
        (J.prototype._$aL = function (t) {
          this._$E = t;
        }),
        (J.prototype._$S0 = function () {
          return this._$D0;
        }),
        (J.prototype._$U0 = function (t) {
          this._$D0 = t;
        }),
        (J.prototype.isLoopFadeIn = function () {
          return this.loopFadeIn;
        }),
        (J.prototype.setLoopFadeIn = function (t) {
          this.loopFadeIn = t;
        }),
        (C.prototype.clear = function () {
          this.size = 0;
        }),
        (C.prototype.add = function (t) {
          if (this._$P.length <= this.size) {
            var i = new Float32Array(2 * this.size);
            I._$jT(this._$P, 0, i, 0, this.size), (this._$P = i);
          }
          this._$P[this.size++] = t;
        }),
        (C.prototype._$BL = function () {
          var t = new Float32Array(this.size);
          return I._$jT(this._$P, 0, t, 0, this.size), t;
        }),
        (N._$Fr = 0),
        (N._$hs = 1),
        (N._$ws = 100),
        (N._$Ns = 101),
        (N._$xs = 102),
        (N._$us = 103),
        (N._$qs = 104),
        (N._$Ys = 105),
        (Z.prototype = new A()),
        (Z._$gT = new Array()),
        (Z.prototype._$zP = function () {
          (this._$GS = new D()), this._$GS._$zP();
        }),
        (Z.prototype._$F0 = function (t) {
          A.prototype._$F0.call(this, t),
            (this._$A = t._$6L()),
            (this._$o = t._$6L()),
            (this._$GS = t._$nP()),
            (this._$Eo = t._$nP()),
            A.prototype.readV2_opacity.call(this, t);
        }),
        (Z.prototype.init = function (t) {
          var i = new K(this),
            e = (this._$o + 1) * (this._$A + 1);
          return (
            null != i._$Cr && (i._$Cr = null),
            (i._$Cr = new Float32Array(2 * e)),
            null != i._$hr && (i._$hr = null),
            this._$32() ? (i._$hr = new Float32Array(2 * e)) : (i._$hr = null),
            i
          );
        }),
        (Z.prototype._$Nr = function (t, i) {
          var e = i;
          if (this._$GS._$Ur(t)) {
            var r = this._$VT(),
              o = Z._$gT;
            (o[0] = !1),
              S._$Vr(t, this._$GS, o, r, this._$Eo, e._$Cr, 0, 2),
              i._$Ib(o[0]),
              this.interpolateOpacity(t, this._$GS, i, o);
          }
        }),
        (Z.prototype._$2b = function (t, i) {
          var e = i;
          if ((e._$hS(!0), this._$32())) {
            var r = this.getTargetBaseDataID();
            if ((e._$8r == A._$ur && (e._$8r = t.getBaseDataIndex(r)), e._$8r < 0))
              _t._$so && _._$li("_$L _$0P _$G :: %s", r), e._$hS(!1);
            else {
              var o = t.getBaseData(e._$8r),
                n = t._$q2(e._$8r);
              if (null != o && n._$yo()) {
                var s = n.getTotalScale();
                e.setTotalScale_notForClient(s);
                var a = n.getTotalOpacity();
                e.setTotalOpacity(a * e.getInterpolatedOpacity()),
                  o._$nb(t, n, e._$Cr, e._$hr, this._$VT(), 0, 2),
                  e._$hS(!0);
              } else e._$hS(!1);
            }
          } else e.setTotalOpacity(e.getInterpolatedOpacity());
        }),
        (Z.prototype._$nb = function (t, i, e, r, o, n, s) {
          var _ = i,
            a = null != _._$hr ? _._$hr : _._$Cr;
          Z.transformPoints_sdk2(e, r, o, n, s, a, this._$o, this._$A);
        }),
        (Z.transformPoints_sdk2 = function (i, e, r, o, n, s, _, a) {
          for (var h, $, l, u = r * n, p = 0, c = 0, f = 0, g = 0, y = 0, d = 0, m = !1, T = o; T < u; T += n) {
            var P, S, v, L;
            if (((v = i[T]), (S = (L = i[T + 1]) * a), (P = v * _) < 0 || S < 0 || _ <= P || a <= S)) {
              var M = _ + 1;
              if (!m) {
                (m = !0),
                  (p = 0.25 * (s[2 * (0 + 0 * M)] + s[2 * (_ + 0 * M)] + s[2 * (0 + a * M)] + s[2 * (_ + a * M)])),
                  (c =
                    0.25 *
                    (s[2 * (0 + 0 * M) + 1] +
                      s[2 * (_ + 0 * M) + 1] +
                      s[2 * (0 + a * M) + 1] +
                      s[2 * (_ + a * M) + 1]));
                var E = s[2 * (_ + a * M)] - s[2 * (0 + 0 * M)],
                  A = s[2 * (_ + a * M) + 1] - s[2 * (0 + 0 * M) + 1],
                  I = s[2 * (_ + 0 * M)] - s[2 * (0 + a * M)],
                  x = s[2 * (_ + 0 * M) + 1] - s[2 * (0 + a * M) + 1];
                (p -= 0.5 * ((f = 0.5 * (E + I)) + (y = 0.5 * (E - I)))),
                  (c -= 0.5 * ((g = 0.5 * (A + x)) + (d = 0.5 * (A - x))));
              }
              if (-2 < v && v < 3 && -2 < L && L < 3)
                if (v <= 0)
                  if (L <= 0) {
                    var w = s[2 * (0 + 0 * M)],
                      D = s[2 * (0 + 0 * M) + 1],
                      O = p - 2 * f,
                      R = c - 2 * g,
                      b = p - 2 * y,
                      F = c - 2 * d,
                      C = p - 2 * f - 2 * y,
                      N = c - 2 * g - 2 * d;
                    (B = 0.5 * (v - -2)) + (G = 0.5 * (L - -2)) <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  } else if (L >= 1) {
                    (b = s[2 * (0 + a * M)]),
                      (F = s[2 * (0 + a * M) + 1]),
                      (C = p - 2 * f + 1 * y),
                      (N = c - 2 * g + 1 * d),
                      (w = p + 3 * y),
                      (D = c + 3 * d),
                      (O = p - 2 * f + 3 * y),
                      (R = c - 2 * g + 3 * d);
                    (B = 0.5 * (v - -2)) + (G = 0.5 * (L - 1)) <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  } else {
                    (k = 0 | S) == a && (k = a - 1);
                    var B = 0.5 * (v - -2),
                      G = S - k,
                      U = k / a,
                      Y = (k + 1) / a;
                    (b = s[2 * (0 + k * M)]),
                      (F = s[2 * (0 + k * M) + 1]),
                      (w = s[2 * (0 + (k + 1) * M)]),
                      (D = s[2 * (0 + (k + 1) * M) + 1]),
                      (C = p - 2 * f + U * y),
                      (N = c - 2 * g + U * d),
                      (O = p - 2 * f + Y * y),
                      (R = c - 2 * g + Y * d);
                    B + G <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  }
                else if (1 <= v)
                  if (L <= 0) {
                    (O = s[2 * (_ + 0 * M)]),
                      (R = s[2 * (_ + 0 * M) + 1]),
                      (w = p + 3 * f),
                      (D = c + 3 * g),
                      (C = p + 1 * f - 2 * y),
                      (N = c + 1 * g - 2 * d),
                      (b = p + 3 * f - 2 * y),
                      (F = c + 3 * g - 2 * d);
                    (B = 0.5 * (v - 1)) + (G = 0.5 * (L - -2)) <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  } else if (L >= 1) {
                    (C = s[2 * (_ + a * M)]),
                      (N = s[2 * (_ + a * M) + 1]),
                      (b = p + 3 * f + 1 * y),
                      (F = c + 3 * g + 1 * d),
                      (O = p + 1 * f + 3 * y),
                      (R = c + 1 * g + 3 * d),
                      (w = p + 3 * f + 3 * y),
                      (D = c + 3 * g + 3 * d);
                    (B = 0.5 * (v - 1)) + (G = 0.5 * (L - 1)) <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  } else {
                    var k;
                    (k = 0 | S) == a && (k = a - 1);
                    (B = 0.5 * (v - 1)),
                      (G = S - k),
                      (U = k / a),
                      (Y = (k + 1) / a),
                      (C = s[2 * (_ + k * M)]),
                      (N = s[2 * (_ + k * M) + 1]),
                      (O = s[2 * (_ + (k + 1) * M)]),
                      (R = s[2 * (_ + (k + 1) * M) + 1]),
                      (b = p + 3 * f + U * y),
                      (F = c + 3 * g + U * d),
                      (w = p + 3 * f + Y * y),
                      (D = c + 3 * g + Y * d);
                    B + G <= 1
                      ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                      : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                        (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                  }
                else if (L <= 0) {
                  (z = 0 | P) == _ && (z = _ - 1);
                  (B = P - z), (G = 0.5 * (L - -2));
                  var V = z / _,
                    X = (z + 1) / _;
                  (O = s[2 * (z + 0 * M)]),
                    (R = s[2 * (z + 0 * M) + 1]),
                    (w = s[2 * (z + 1 + 0 * M)]),
                    (D = s[2 * (z + 1 + 0 * M) + 1]),
                    (C = p + V * f - 2 * y),
                    (N = c + V * g - 2 * d),
                    (b = p + X * f - 2 * y),
                    (F = c + X * g - 2 * d);
                  B + G <= 1
                    ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                    : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                      (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                } else if (L >= 1) {
                  var z;
                  (z = 0 | P) == _ && (z = _ - 1);
                  (B = P - z),
                    (G = 0.5 * (L - 1)),
                    (V = z / _),
                    (X = (z + 1) / _),
                    (C = s[2 * (z + a * M)]),
                    (N = s[2 * (z + a * M) + 1]),
                    (b = s[2 * (z + 1 + a * M)]),
                    (F = s[2 * (z + 1 + a * M) + 1]),
                    (O = p + V * f + 3 * y),
                    (R = c + V * g + 3 * d),
                    (w = p + X * f + 3 * y),
                    (D = c + X * g + 3 * d);
                  B + G <= 1
                    ? ((e[T] = C + (b - C) * B + (O - C) * G), (e[T + 1] = N + (F - N) * B + (R - N) * G))
                    : ((e[T] = w + (O - w) * (1 - B) + (b - w) * (1 - G)),
                      (e[T + 1] = D + (R - D) * (1 - B) + (F - D) * (1 - G)));
                } else t.err.printf("_$li calc : %.4f , %.4f          @@BDBoxGrid\n", v, L);
              else (e[T] = p + v * f + L * y), (e[T + 1] = c + v * g + L * d);
            } else
              (h = 2 * ((0 | P) + (0 | S) * (_ + 1))),
                ($ = P - (0 | P)) + (l = S - (0 | S)) < 1
                  ? ((e[T] = s[h] * (1 - $ - l) + s[h + 2] * $ + s[h + 2 * (_ + 1)] * l),
                    (e[T + 1] = s[h + 1] * (1 - $ - l) + s[h + 3] * $ + s[h + 2 * (_ + 1) + 1] * l))
                  : ((e[T] = s[h + 2 * (_ + 1) + 2] * ($ - 1 + l) + s[h + 2 * (_ + 1)] * (1 - $) + s[h + 2] * (1 - l)),
                    (e[T + 1] =
                      s[h + 2 * (_ + 1) + 3] * ($ - 1 + l) + s[h + 2 * (_ + 1) + 1] * (1 - $) + s[h + 3] * (1 - l)));
          }
        }),
        (Z.prototype.transformPoints_sdk1 = function (t, i, e, r, o, n, s) {
          for (
            var _,
              a,
              h,
              $,
              l,
              u,
              p,
              c = i,
              f = this._$o,
              g = this._$A,
              y = o * s,
              d = null != c._$hr ? c._$hr : c._$Cr,
              m = n;
            m < y;
            m += s
          )
            _t._$ts
              ? ((_ = e[m]),
                (a = e[m + 1]),
                _ < 0 ? (_ = 0) : _ > 1 && (_ = 1),
                a < 0 ? (a = 0) : a > 1 && (a = 1),
                ($ = 0 | (a *= g)),
                (h = 0 | (_ *= f)) > f - 1 && (h = f - 1),
                $ > g - 1 && ($ = g - 1),
                (u = _ - h),
                (p = a - $),
                (l = 2 * (h + $ * (f + 1))))
              : ((u = (_ = e[m] * f) - (0 | _)),
                (p = (a = e[m + 1] * g) - (0 | a)),
                (l = 2 * ((0 | _) + (0 | a) * (f + 1)))),
              u + p < 1
                ? ((r[m] = d[l] * (1 - u - p) + d[l + 2] * u + d[l + 2 * (f + 1)] * p),
                  (r[m + 1] = d[l + 1] * (1 - u - p) + d[l + 3] * u + d[l + 2 * (f + 1) + 1] * p))
                : ((r[m] = d[l + 2 * (f + 1) + 2] * (u - 1 + p) + d[l + 2 * (f + 1)] * (1 - u) + d[l + 2] * (1 - p)),
                  (r[m + 1] =
                    d[l + 2 * (f + 1) + 3] * (u - 1 + p) + d[l + 2 * (f + 1) + 1] * (1 - u) + d[l + 3] * (1 - p)));
        }),
        (Z.prototype._$VT = function () {
          return (this._$o + 1) * (this._$A + 1);
        }),
        (Z.prototype.getType = function () {
          return A._$_b;
        }),
        (K.prototype = new st()),
        (tt._$42 = 0),
        (tt.prototype._$zP = function () {
          (this._$3S = new Array()), (this._$aS = new Array());
        }),
        (tt.prototype._$F0 = function (t) {
          (this._$g0 = t._$8L()),
            (this.visible = t._$8L()),
            (this._$NL = t._$nP()),
            (this._$3S = t._$nP()),
            (this._$aS = t._$nP());
        }),
        (tt.prototype.init = function (t) {
          var i = new it(this);
          return i.setPartsOpacity(this.isVisible() ? 1 : 0), i;
        }),
        (tt.prototype._$6o = function (t) {
          if (null == this._$3S) throw new Error("_$3S _$6 _$Wo@_$6o");
          this._$3S.push(t);
        }),
        (tt.prototype._$3o = function (t) {
          if (null == this._$aS) throw new Error("_$aS _$6 _$Wo@_$3o");
          this._$aS.push(t);
        }),
        (tt.prototype._$Zo = function (t) {
          this._$3S = t;
        }),
        (tt.prototype._$xo = function (t) {
          this._$aS = t;
        }),
        (tt.prototype.isVisible = function () {
          return this.visible;
        }),
        (tt.prototype._$uL = function () {
          return this._$g0;
        }),
        (tt.prototype._$KP = function (t) {
          this.visible = t;
        }),
        (tt.prototype._$ET = function (t) {
          this._$g0 = t;
        }),
        (tt.prototype.getBaseData = function () {
          return this._$3S;
        }),
        (tt.prototype.getDrawData = function () {
          return this._$aS;
        }),
        (tt.prototype._$p2 = function () {
          return this._$NL;
        }),
        (tt.prototype._$ob = function (t) {
          this._$NL = t;
        }),
        (tt.prototype.getPartsID = function () {
          return this._$NL;
        }),
        (tt.prototype._$MP = function (t) {
          this._$NL = t;
        }),
        (it.prototype = new (function () {})()),
        (it.prototype.getPartsOpacity = function () {
          return this._$VS;
        }),
        (it.prototype.setPartsOpacity = function (t) {
          this._$VS = t;
        }),
        (et._$L7 = function () {
          $._$27(), yt._$27(), R._$27(), h._$27();
        }),
        (et.prototype.toString = function () {
          return this.id;
        }),
        (rt.prototype._$1s = function () {
          return this._$4S;
        }),
        (rt.prototype._$zP = function () {
          this._$4S = new Array();
        }),
        (rt.prototype._$F0 = function (t) {
          this._$4S = t._$nP();
        }),
        (rt.prototype._$Ks = function (t) {
          this._$4S.push(t);
        }),
        (ot.tr = new gt()),
        (ot._$50 = new gt()),
        (ot._$Ti = new Array(0, 0)),
        (ot._$Pi = new Array(0, 0)),
        (ot._$B = new Array(0, 0)),
        (ot.prototype._$lP = function (t, i, e, r) {
          this.viewport = new Array(t, i, e, r);
        }),
        (ot.prototype._$bL = function () {
          this.context.save();
          var t = this.viewport;
          null != t && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip());
        }),
        (ot.prototype._$ei = function () {
          this.context.restore();
        }),
        (ot.prototype.drawElements = function (t, i, e, r, o, n, s, a) {
          try {
            o != this._$Qo && ((this._$Qo = o), (this.context.globalAlpha = o));
            for (
              var h = i.length,
                $ = t.width,
                l = t.height,
                u = this.context,
                p = this._$xP,
                c = this._$uP,
                f = this._$6r,
                g = this._$3r,
                y = ot.tr,
                d = ot._$Ti,
                m = ot._$Pi,
                P = ot._$B,
                S = 0;
              S < h;
              S += 3
            ) {
              u.save();
              var v = i[S],
                L = i[S + 1],
                M = i[S + 2],
                E = p + f * e[2 * v],
                A = c + g * e[2 * v + 1],
                I = p + f * e[2 * L],
                x = c + g * e[2 * L + 1],
                w = p + f * e[2 * M],
                D = c + g * e[2 * M + 1];
              s &&
                (s._$PS(E, A, P),
                (E = P[0]),
                (A = P[1]),
                s._$PS(I, x, P),
                (I = P[0]),
                (x = P[1]),
                s._$PS(w, D, P),
                (w = P[0]),
                (D = P[1]));
              var O = $ * r[2 * v],
                R = l - l * r[2 * v + 1],
                b = $ * r[2 * L],
                F = l - l * r[2 * L + 1],
                C = $ * r[2 * M],
                N = l - l * r[2 * M + 1],
                B = Math.atan2(F - R, b - O),
                G = Math.atan2(x - A, I - E),
                U = I - E,
                Y = x - A,
                k = Math.sqrt(U * U + Y * Y),
                V = b - O,
                X = F - R,
                z = k / Math.sqrt(V * V + X * X);
              T._$ni(C, N, O, R, b - O, F - R, -(F - R), b - O, d),
                T._$ni(w, D, E, A, I - E, x - A, -(x - A), I - E, m);
              var H = (m[0] - d[0]) / d[1],
                W = Math.min(O, b, C),
                j = Math.max(O, b, C),
                q = Math.min(R, F, N),
                J = Math.max(R, F, N),
                Q = Math.floor(W),
                Z = Math.floor(q),
                K = Math.ceil(j),
                tt = Math.ceil(J);
              y.identity(),
                y.translate(E, A),
                y.rotate(G),
                y.scale(1, m[1] / d[1]),
                y.shear(H, 0),
                y.scale(z, z),
                y.rotate(-B),
                y.translate(-O, -R),
                y.setContext(u);
              if ((n || (n = 1.2), _t.IGNORE_EXPAND && (n = 0), _t.USE_CACHED_POLYGON_IMAGE)) {
                var it = a._$e0;
                if (((it.gl_cacheImage = it.gl_cacheImage || {}), !it.gl_cacheImage[S])) {
                  var et = ot.createCanvas(K - Q, tt - Z);
                  (_t.DEBUG_DATA.LDGL_CANVAS_MB = _t.DEBUG_DATA.LDGL_CANVAS_MB || 0),
                    (_t.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) * (tt - Z) * 4);
                  var rt = et.getContext("2d");
                  rt.translate(-Q, -Z),
                    ot.clip(rt, y, n, k, O, R, b, F, C, N, E, A, I, x, w, D),
                    rt.drawImage(t, 0, 0),
                    (it.gl_cacheImage[S] = { cacheCanvas: et, cacheContext: rt });
                }
                u.drawImage(it.gl_cacheImage[S].cacheCanvas, Q, Z);
              } else
                _t.IGNORE_CLIP || ot.clip(u, y, n, k, O, R, b, F, C, N, E, A, I, x, w, D),
                  _t.USE_ADJUST_TRANSLATION && ((W = 0), (j = $), (q = 0), (J = l)),
                  u.drawImage(t, W, q, j - W, J - q, W, q, j - W, J - q);
              u.restore();
            }
          } catch (t) {
            _._$Rb(t);
          }
        }),
        (ot.clip = function (t, i, e, r, o, n, s, _, a, h, $, l, u, p, c, f) {
          e > 0.02 ? ot.expandClip(t, i, e, r, $, l, u, p, c, f) : ot.clipWithTransform(t, null, o, n, s, _, a, h);
        }),
        (ot.expandClip = function (t, i, e, r, o, n, s, _, a, h) {
          var $ = s - o,
            l = _ - n,
            u = a - o,
            p = h - n,
            c = $ * p - l * u > 0 ? e : -e,
            f = -l,
            g = $,
            y = a - s,
            d = h - _,
            m = -d,
            T = y,
            P = Math.sqrt(y * y + d * d),
            S = -p,
            v = u,
            L = Math.sqrt(u * u + p * p),
            M = o - (c * f) / r,
            E = n - (c * g) / r,
            A = s - (c * f) / r,
            I = _ - (c * g) / r,
            x = s - (c * m) / P,
            w = _ - (c * T) / P,
            D = a - (c * m) / P,
            O = h - (c * T) / P,
            R = o + (c * S) / L,
            b = n + (c * v) / L,
            F = a + (c * S) / L,
            C = h + (c * v) / L,
            N = ot._$50;
          return null != i._$P2(N) && (ot.clipWithTransform(t, N, M, E, A, I, x, w, D, O, F, C, R, b), !0);
        }),
        (ot.clipWithTransform = function (t, i, e, r, o, n, s, a) {
          if (arguments.length < 7) _._$li("err : @LDGL.clip()");
          else if (arguments[1] instanceof gt) {
            var h = ot._$B,
              $ = i,
              l = arguments;
            if ((t.beginPath(), $)) {
              $._$PS(l[2], l[3], h), t.moveTo(h[0], h[1]);
              for (var u = 4; u < l.length; u += 2) $._$PS(l[u], l[u + 1], h), t.lineTo(h[0], h[1]);
            } else {
              t.moveTo(l[2], l[3]);
              for (u = 4; u < l.length; u += 2) t.lineTo(l[u], l[u + 1]);
            }
            t.clip();
          } else _._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");
        }),
        (ot.createCanvas = function (t, i) {
          var e = document.createElement("canvas");
          return e.setAttribute("width", t), e.setAttribute("height", i), e || _._$li("err : " + e), e;
        }),
        (ot.dumpValues = function () {
          for (var t = "", i = 0; i < arguments.length; i++) t += "[" + i + "]= " + arguments[i].toFixed(3) + " , ";
        }),
        (nt.prototype._$F0 = function (t) {
          (this._$TT = t._$_T()), (this._$LT = t._$_T()), (this._$FS = t._$_T()), (this._$wL = t._$nP());
        }),
        (nt.prototype.getMinValue = function () {
          return this._$TT;
        }),
        (nt.prototype.getMaxValue = function () {
          return this._$LT;
        }),
        (nt.prototype.getDefaultValue = function () {
          return this._$FS;
        }),
        (nt.prototype.getParamID = function () {
          return this._$wL;
        }),
        (st.prototype._$yo = function () {
          return this._$AT && !this._$JS;
        }),
        (st.prototype._$hS = function (t) {
          this._$AT = t;
        }),
        (st.prototype._$GT = function () {
          return this._$e0;
        }),
        (st.prototype._$l2 = function (t) {
          this._$IP = t;
        }),
        (st.prototype.getPartsIndex = function () {
          return this._$IP;
        }),
        (st.prototype._$x2 = function () {
          return this._$JS;
        }),
        (st.prototype._$Ib = function (t) {
          this._$JS = t;
        }),
        (st.prototype.getTotalScale = function () {
          return this.totalScale;
        }),
        (st.prototype.setTotalScale_notForClient = function (t) {
          this.totalScale = t;
        }),
        (st.prototype.getInterpolatedOpacity = function () {
          return this._$7s;
        }),
        (st.prototype.setInterpolatedOpacity = function (t) {
          this._$7s = t;
        }),
        (st.prototype.getTotalOpacity = function (t) {
          return this.totalOpacity;
        }),
        (st.prototype.setTotalOpacity = function (t) {
          this.totalOpacity = t;
        }),
        (_t._$2s = "2.1.00_1"),
        (_t._$Kr = 201001e3),
        (_t._$sP = !0),
        (_t._$so = !0),
        (_t._$cb = !1),
        (_t._$3T = !0),
        (_t._$Ts = !0),
        (_t._$fb = !0),
        (_t._$ts = !0),
        (_t.L2D_DEFORMER_EXTEND = !0),
        (_t._$Wb = !1),
        (_t._$yr = !1),
        (_t._$Zs = !1),
        (_t.L2D_NO_ERROR = 0),
        (_t._$i7 = 1e3),
        (_t._$9s = 1001),
        (_t._$es = 1100),
        (_t._$r7 = 2e3),
        (_t._$07 = 2001),
        (_t._$b7 = 2002),
        (_t._$H7 = 4e3),
        (_t.L2D_COLOR_BLEND_MODE_MULT = 0),
        (_t.L2D_COLOR_BLEND_MODE_ADD = 1),
        (_t.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2),
        (_t._$6b = !0),
        (_t._$cT = 0),
        (_t.clippingMaskBufferSize = 256),
        (_t.glContext = new Array()),
        (_t.frameBuffers = new Array()),
        (_t.fTexture = new Array()),
        (_t.IGNORE_CLIP = !1),
        (_t.IGNORE_EXPAND = !1),
        (_t.EXPAND_W = 2),
        (_t.USE_ADJUST_TRANSLATION = !0),
        (_t.USE_CANVAS_TRANSFORM = !0),
        (_t.USE_CACHED_POLYGON_IMAGE = !1),
        (_t.DEBUG_DATA = {}),
        (_t.PROFILE_IOS_SPEED = {
          PROFILE_NAME: "iOS Speed",
          USE_ADJUST_TRANSLATION: !0,
          USE_CACHED_POLYGON_IMAGE: !0,
          EXPAND_W: 4,
        }),
        (_t.PROFILE_IOS_QUALITY = {
          PROFILE_NAME: "iOS HiQ",
          USE_ADJUST_TRANSLATION: !0,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2,
        }),
        (_t.PROFILE_IOS_DEFAULT = _t.PROFILE_IOS_QUALITY),
        (_t.PROFILE_ANDROID = {
          PROFILE_NAME: "Android",
          USE_ADJUST_TRANSLATION: !1,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2,
        }),
        (_t.PROFILE_DESKTOP = {
          PROFILE_NAME: "Desktop",
          USE_ADJUST_TRANSLATION: !1,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2,
        }),
        (_t.initProfile = function () {
          Mt.isIOS()
            ? _t.setupProfile(_t.PROFILE_IOS_DEFAULT)
            : Mt.isAndroid()
            ? _t.setupProfile(_t.PROFILE_ANDROID)
            : _t.setupProfile(_t.PROFILE_DESKTOP);
        }),
        (_t.setupProfile = function (t, i) {
          if ("number" == typeof t)
            switch (t) {
              case 9901:
                t = _t.PROFILE_IOS_SPEED;
                break;
              case 9902:
                t = _t.PROFILE_IOS_QUALITY;
                break;
              case 9903:
                t = _t.PROFILE_IOS_DEFAULT;
                break;
              case 9904:
                t = _t.PROFILE_ANDROID;
                break;
              case 9905:
                t = _t.PROFILE_DESKTOP;
                break;
              default:
                alert("profile _$6 _$Ui : " + t);
            }
          for (var e in (arguments.length < 2 && (i = !0), i, t)) (_t[e] = t[e]), i;
        }),
        (_t.init = function () {
          if (_t._$6b) {
            _t._$6b = !1;
            !0, _t.initProfile();
          }
        }),
        (_t.getVersionStr = function () {
          return _t._$2s;
        }),
        (_t.getVersionNo = function () {
          return _t._$Kr;
        }),
        (_t._$sT = function (t) {
          _t._$cT = t;
        }),
        (_t.getError = function () {
          var t = _t._$cT;
          return (_t._$cT = 0), t;
        }),
        (_t.dispose = function () {
          (_t.glContext = []), (_t.frameBuffers = []), (_t.fTexture = []);
        }),
        (_t.setGL = function (t, i) {
          var e = i || 0;
          _t.glContext[e] = t;
        }),
        (_t.getGL = function (t) {
          return _t.glContext[t];
        }),
        (_t.setClippingMaskBufferSize = function (t) {
          _t.clippingMaskBufferSize = t;
        }),
        (_t.getClippingMaskBufferSize = function () {
          return _t.clippingMaskBufferSize;
        }),
        (_t.deleteBuffer = function (t) {
          _t.getGL(t).deleteFramebuffer(_t.frameBuffers[t].framebuffer),
            delete _t.frameBuffers[t],
            delete _t.glContext[t];
        }),
        (at._$r2 = function (t) {
          return t < 0 ? 0 : t > 1 ? 1 : 0.5 - 0.5 * Math.cos(t * vt.PI_F);
        }),
        (ht._$fr = -1),
        (ht.prototype.toString = function () {
          return this._$ib;
        }),
        ($t.prototype = new W()),
        ($t._$42 = 0),
        ($t._$Os = 30),
        ($t._$ms = 0),
        ($t._$ns = 1),
        ($t._$_s = 2),
        ($t._$gT = new Array()),
        ($t.prototype._$_S = function (t) {
          this._$LP = t;
        }),
        ($t.prototype.getTextureNo = function () {
          return this._$LP;
        }),
        ($t.prototype._$ZL = function () {
          return this._$Qi;
        }),
        ($t.prototype._$H2 = function () {
          return this._$JP;
        }),
        ($t.prototype.getNumPoints = function () {
          return this._$d0;
        }),
        ($t.prototype.getType = function () {
          return W._$wb;
        }),
        ($t.prototype._$B2 = function (t, i, e) {
          var r = i,
            o = null != r._$hr ? r._$hr : r._$Cr;
          switch (B._$do) {
            default:
            case B._$Ms:
              throw new Error("_$L _$ro ");
            case B._$Qs:
              for (var n = this._$d0 - 1; n >= 0; --n) {
                o[n * B._$No + 4] = e;
              }
          }
        }),
        ($t.prototype._$zP = function () {
          (this._$GS = new D()), this._$GS._$zP();
        }),
        ($t.prototype._$F0 = function (t) {
          W.prototype._$F0.call(this, t), (this._$LP = t._$6L()), (this._$d0 = t._$6L()), (this._$Yo = t._$6L());
          var i = t._$nP();
          this._$BP = new Int16Array(3 * this._$Yo);
          for (var e = 3 * this._$Yo - 1; e >= 0; --e) this._$BP[e] = i[e];
          if (((this._$Eo = t._$nP()), (this._$Qi = t._$nP()), t.getFormatVersion() >= G._$s7)) {
            if (((this._$JP = t._$6L()), 0 != this._$JP)) {
              if (0 != (1 & this._$JP)) {
                var r = t._$6L();
                null == this._$5P && (this._$5P = new Object()), (this._$5P._$Hb = parseInt(r));
              }
              0 != (this._$JP & $t._$Os) ? (this._$6s = (this._$JP & $t._$Os) >> 1) : (this._$6s = $t._$ms),
                0 != (32 & this._$JP) && (this.culling = !1);
            }
          } else this._$JP = 0;
        }),
        ($t.prototype.init = function (t) {
          var i = new lt(this),
            e = this._$d0 * B._$No,
            r = this._$32();
          switch (
            (null != i._$Cr && (i._$Cr = null),
            (i._$Cr = new Float32Array(e)),
            null != i._$hr && (i._$hr = null),
            (i._$hr = r ? new Float32Array(e) : null),
            B._$do)
          ) {
            default:
            case B._$Ms:
              if (B._$Ls)
                for (var o = this._$d0 - 1; o >= 0; --o) {
                  var n = o << 1;
                  this._$Qi[n + 1] = 1 - this._$Qi[n + 1];
                }
              break;
            case B._$Qs:
              for (o = this._$d0 - 1; o >= 0; --o) {
                n = o << 1;
                var s = o * B._$No,
                  _ = this._$Qi[n],
                  a = this._$Qi[n + 1];
                (i._$Cr[s] = _),
                  (i._$Cr[s + 1] = a),
                  (i._$Cr[s + 4] = 0),
                  r && ((i._$hr[s] = _), (i._$hr[s + 1] = a), (i._$hr[s + 4] = 0));
              }
          }
          return i;
        }),
        ($t.prototype._$Nr = function (t, i) {
          var e = i;
          if ((this != e._$GT(), this._$GS._$Ur(t) && (W.prototype._$Nr.call(this, t, e), !e._$IS[0]))) {
            var r = $t._$gT;
            (r[0] = !1), S._$Vr(t, this._$GS, r, this._$d0, this._$Eo, e._$Cr, B._$i2, B._$No);
          }
        }),
        ($t.prototype._$2b = function (t, i) {
          try {
            this != i._$GT();
            var e = !1;
            i._$IS[0] && (e = !0);
            var r = i;
            if (!e && (W.prototype._$2b.call(this, t), this._$32())) {
              var o = this.getTargetBaseDataID();
              if ((r._$8r == W._$ur && (r._$8r = t.getBaseDataIndex(o)), r._$8r < 0))
                _t._$so && _._$li("_$L _$0P _$G :: %s", o);
              else {
                var n = t.getBaseData(r._$8r),
                  s = t._$q2(r._$8r);
                null == n || s._$x2()
                  ? (r._$AT = !1)
                  : (n._$nb(t, s, r._$Cr, r._$hr, this._$d0, B._$i2, B._$No), (r._$AT = !0)),
                  (r.baseOpacity = s.getTotalOpacity());
              }
            }
          } catch (t) {
            throw t;
          }
        }),
        ($t.prototype.draw = function (t, i, e) {
          if ((this != e._$GT(), !e._$IS[0])) {
            var r = e,
              o = this._$LP;
            o < 0 && (o = 1);
            var n = this.getOpacity(i, r) * e._$VS * e.baseOpacity,
              s = null != r._$hr ? r._$hr : r._$Cr;
            t.setClipBufPre_clipContextForDraw(e.clipBufPre_clipContext),
              t._$WP(this.culling),
              t._$Uo(o, 3 * this._$Yo, this._$BP, s, this._$Qi, n, this._$6s, r);
          }
        }),
        ($t.prototype.dump = function () {
          for (var t = 0; t < this._$BP.length; t++);
          for (t = 0; t < this._$Eo.length; t++) {
            for (var i = this._$Eo[t], e = 0; e < i.length; e++);
          }
        }),
        ($t.prototype._$72 = function (t) {
          return null == this._$5P ? null : this._$5P[t];
        }),
        ($t.prototype.getIndexArray = function () {
          return this._$BP;
        }),
        (lt.prototype = new Lt()),
        (lt.prototype.getTransformedPoints = function () {
          return null != this._$hr ? this._$hr : this._$Cr;
        }),
        (ut.prototype._$HT = function (t) {
          (this.x = t.x), (this.y = t.y);
        }),
        (ut.prototype._$HT = function (t, i) {
          (this.x = t), (this.y = i);
        }),
        (pt.prototype = new r()),
        (pt.loadModel = function (t) {
          var i = new pt();
          return r._$62(i, t), i;
        }),
        (pt.loadModel = function (t, i) {
          var e = new pt(i || 0);
          return r._$62(e, t), e;
        }),
        (pt._$to = function () {
          return new pt();
        }),
        (pt._$er = function (t) {
          var i = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
          if (0 == i.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + i._$PL());
          for (
            var e = [
                "../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1",
                "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1",
              ],
              r = pt.loadModel(i._$3b()),
              o = 0;
            o < e.length;
            o++
          ) {
            var n = new _$5(e[o]);
            if (0 == n.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n._$PL());
            r.setTexture(o, _$nL._$_o(t, n._$3b()));
          }
          return r;
        }),
        (pt.prototype.setGL = function (t) {
          _t.setGL(t);
        }),
        (pt.prototype.setTransform = function (t) {
          this.drawParamWebGL.setTransform(t);
        }),
        (pt.prototype.update = function () {
          this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL);
        }),
        (pt.prototype.draw = function () {
          this._$5S.draw(this.drawParamWebGL);
        }),
        (pt.prototype._$K2 = function () {
          this.drawParamWebGL._$K2();
        }),
        (pt.prototype.setTexture = function (t, i) {
          null == this.drawParamWebGL && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
            this.drawParamWebGL.setTexture(t, i);
        }),
        (pt.prototype.setTexture = function (t, i) {
          null == this.drawParamWebGL && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
            this.drawParamWebGL.setTexture(t, i);
        }),
        (pt.prototype._$Rs = function () {
          return this.drawParamWebGL._$Rs();
        }),
        (pt.prototype._$Ds = function (t) {
          this.drawParamWebGL._$Ds(t);
        }),
        (pt.prototype.getDrawParam = function () {
          return this.drawParamWebGL;
        }),
        (pt.prototype.setMatrix = function (t) {
          this.drawParamWebGL.setMatrix(t);
        }),
        (pt.prototype.setPremultipliedAlpha = function (t) {
          this.drawParamWebGL.setPremultipliedAlpha(t);
        }),
        (pt.prototype.isPremultipliedAlpha = function () {
          return this.drawParamWebGL.isPremultipliedAlpha();
        }),
        (pt.prototype.setAnisotropy = function (t) {
          this.drawParamWebGL.setAnisotropy(t);
        }),
        (pt.prototype.getAnisotropy = function () {
          return this.drawParamWebGL.getAnisotropy();
        }),
        (ct.prototype._$tb = function () {
          return this.motions;
        }),
        (ct.prototype.startMotion = function (t, i) {
          for (var e = null, r = this.motions.length, o = 0; o < r; ++o)
            null != (e = this.motions[o]) &&
              (e._$qS(e._$w0.getFadeOut()),
              this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", r, e._$sr));
          if (null == t) return -1;
          ((e = new ft())._$w0 = t), this.motions.push(e);
          var n = e._$sr;
          return this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", r, n), n;
        }),
        (ct.prototype.updateParam = function (t) {
          try {
            for (var i = !1, e = 0; e < this.motions.length; e++) {
              var r = this.motions[e];
              if (null != r) {
                var o = r._$w0;
                null != o
                  ? (o.updateParam(t, r),
                    (i = !0),
                    r.isFinished() &&
                      (this._$eb &&
                        _._$Ji(
                          "MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n",
                          this.motions.length - 1,
                          r._$sr
                        ),
                      this.motions.splice(e, 1),
                      e--))
                  : ((this.motions = this.motions.splice(e, 1)), e--);
              } else this.motions.splice(e, 1), e--;
            }
            return i;
          } catch (t) {
            return _._$li(t), !0;
          }
        }),
        (ct.prototype.isFinished = function (t) {
          if (arguments.length >= 1) {
            for (var i = 0; i < this.motions.length; i++) {
              if (null != (e = this.motions[i]) && e._$sr == t && !e.isFinished()) return !1;
            }
            return !0;
          }
          for (i = 0; i < this.motions.length; i++) {
            var e;
            if (null != (e = this.motions[i]))
              if (null != e._$w0) {
                if (!e.isFinished()) return !1;
              } else this.motions.splice(i, 1), i--;
            else this.motions.splice(i, 1), i--;
          }
          return !0;
        }),
        (ct.prototype.stopAllMotions = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t];
            if (null != i) {
              i._$w0;
              this.motions.splice(t, 1), t--;
            } else this.motions.splice(t, 1), t--;
          }
        }),
        (ct.prototype._$Zr = function (t) {
          this._$eb = t;
        }),
        (ct.prototype._$e = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t]._$w0;
          }
        }),
        (ft._$Gs = 0),
        (ft.prototype.isFinished = function () {
          return this._$9L;
        }),
        (ft.prototype._$qS = function (t) {
          var i = I.getUserTimeMSec() + t;
          (this._$Do < 0 || i < this._$Do) && (this._$Do = i);
        }),
        (ft.prototype._$Bs = function () {
          return this._$sr;
        }),
        (gt.prototype.setContext = function (t) {
          var i = this.m;
          t.transform(i[0], i[1], i[3], i[4], i[6], i[7]);
        }),
        (gt.prototype.toString = function () {
          for (var t = "LDTransform { ", i = 0; i < 9; i++) t += this.m[i].toFixed(2) + " ,";
          return (t += " }");
        }),
        (gt.prototype.identity = function () {
          var t = this.m;
          (t[0] = t[4] = t[8] = 1), (t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0);
        }),
        (gt.prototype._$PS = function (t, i, e) {
          null == e && (e = new Array(0, 0));
          var r = this.m;
          return (e[0] = r[0] * t + r[3] * i + r[6]), (e[1] = r[1] * t + r[4] * i + r[7]), e;
        }),
        (gt.prototype._$P2 = function (t) {
          t || (t = new gt());
          var i = this.m,
            e = i[0],
            r = i[1],
            o = i[2],
            n = i[3],
            s = i[4],
            _ = i[5],
            a = i[6],
            h = i[7],
            $ = i[8],
            l = e * s * $ + r * _ * a + o * n * h - e * _ * h - o * s * a - r * n * $;
          if (0 == l) return null;
          var u = 1 / l;
          return (
            (t.m[0] = u * (s * $ - h * _)),
            (t.m[1] = u * (h * o - r * $)),
            (t.m[2] = u * (r * _ - s * o)),
            (t.m[3] = u * (a * _ - n * $)),
            (t.m[4] = u * (e * $ - a * o)),
            (t.m[5] = u * (n * o - e * _)),
            (t.m[6] = u * (n * h - a * s)),
            (t.m[7] = u * (a * r - e * h)),
            (t.m[8] = u * (e * s - n * r)),
            t
          );
        }),
        (gt.prototype.transform = function (t, i, e) {
          null == e && (e = new Array(0, 0));
          var r = this.m;
          return (e[0] = r[0] * t + r[3] * i + r[6]), (e[1] = r[1] * t + r[4] * i + r[7]), e;
        }),
        (gt.prototype.translate = function (t, i) {
          var e = this.m;
          (e[6] = e[0] * t + e[3] * i + e[6]), (e[7] = e[1] * t + e[4] * i + e[7]), (e[8] = e[2] * t + e[5] * i + e[8]);
        }),
        (gt.prototype.scale = function (t, i) {
          var e = this.m;
          (e[0] *= t), (e[1] *= t), (e[2] *= t), (e[3] *= i), (e[4] *= i), (e[5] *= i);
        }),
        (gt.prototype.shear = function (t, i) {
          var e = this.m,
            r = e[0] + e[3] * i,
            o = e[1] + e[4] * i,
            n = e[2] + e[5] * i;
          (e[3] = e[0] * t + e[3]),
            (e[4] = e[1] * t + e[4]),
            (e[5] = e[2] * t + e[5]),
            (e[0] = r),
            (e[1] = o),
            (e[2] = n);
        }),
        (gt.prototype.rotate = function (t) {
          var i = this.m,
            e = Math.cos(t),
            r = Math.sin(t),
            o = i[0] * e + i[3] * r,
            n = i[1] * e + i[4] * r,
            s = i[2] * e + i[5] * r;
          (i[3] = -i[0] * r + i[3] * e),
            (i[4] = -i[1] * r + i[4] * e),
            (i[5] = -i[2] * r + i[5] * e),
            (i[0] = o),
            (i[1] = n),
            (i[2] = s);
        }),
        (gt.prototype.concatenate = function (t) {
          var i = this.m,
            e = t.m,
            r = i[0] * e[0] + i[3] * e[1] + i[6] * e[2],
            o = i[1] * e[0] + i[4] * e[1] + i[7] * e[2],
            n = i[2] * e[0] + i[5] * e[1] + i[8] * e[2],
            s = i[0] * e[3] + i[3] * e[4] + i[6] * e[5],
            _ = i[1] * e[3] + i[4] * e[4] + i[7] * e[5],
            a = i[2] * e[3] + i[5] * e[4] + i[8] * e[5],
            h = i[0] * e[6] + i[3] * e[7] + i[6] * e[8],
            $ = i[1] * e[6] + i[4] * e[7] + i[7] * e[8],
            l = i[2] * e[6] + i[5] * e[7] + i[8] * e[8];
          (m[0] = r), (m[1] = o), (m[2] = n), (m[3] = s), (m[4] = _), (m[5] = a), (m[6] = h), (m[7] = $), (m[8] = l);
        }),
        (yt.prototype = new et()),
        (yt._$eT = null),
        (yt._$tP = new Object()),
        (yt._$2o = function () {
          return null == yt._$eT && (yt._$eT = yt.getID("DST_BASE")), yt._$eT;
        }),
        (yt._$27 = function () {
          yt._$tP.clear(), (yt._$eT = null);
        }),
        (yt.getID = function (t) {
          var i = yt._$tP[t];
          return null == i && ((i = new yt(t)), (yt._$tP[t] = i)), i;
        }),
        (yt.prototype._$3s = function () {
          return new yt();
        }),
        (dt.prototype = new M()),
        (dt._$9r = function (t) {
          return new Float32Array(t);
        }),
        (dt._$vb = function (t) {
          return new Int16Array(t);
        }),
        (dt._$cr = function (t, i) {
          return (
            null == t || t._$yL() < i.length
              ? ((t = dt._$9r(2 * i.length)).put(i), t._$oT(0))
              : (t.clear(), t.put(i), t._$oT(0)),
            t
          );
        }),
        (dt._$mb = function (t, i) {
          return (
            null == t || t._$yL() < i.length
              ? ((t = dt._$vb(2 * i.length)).put(i), t._$oT(0))
              : (t.clear(), t.put(i), t._$oT(0)),
            t
          );
        }),
        (dt._$Hs = function () {
          return this._$Gr;
        }),
        (dt._$as = function (t) {
          this._$Gr = t;
        }),
        (dt.prototype.getGL = function () {
          return this.gl;
        }),
        (dt.prototype.setGL = function (t) {
          this.gl = t;
        }),
        (dt.prototype.setTransform = function (t) {
          this.transform = t;
        }),
        (dt.prototype._$ZT = function () {
          var t = this.gl;
          this.firstDraw &&
            (this.initShader(),
            (this.firstDraw = !1),
            (this.anisotropyExt =
              t.getExtension("EXT_texture_filter_anisotropic") ||
              t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
              t.getExtension("MOZ_EXT_texture_filter_anisotropic")),
            this.anisotropyExt &&
              (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))),
            t.disable(t.SCISSOR_TEST),
            t.disable(t.STENCIL_TEST),
            t.disable(t.DEPTH_TEST),
            t.frontFace(t.CW),
            t.enable(t.BLEND),
            t.colorMask(1, 1, 1, 1),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
        }),
        (dt.prototype._$Uo = function (t, i, e, r, o, n, s, _) {
          if (!(n < 0.01 && null == this.clipBufPre_clipContextMask)) {
            n > 0.9 && _t.EXPAND_W;
            var a = this.gl;
            if (null == this.gl) throw new Error("gl is null");
            var h,
              $,
              l,
              u,
              p = 1 * this._$C0 * n,
              c = 1 * this._$tT * n,
              f = 1 * this._$WL * n,
              g = this._$lT * n;
            if (null != this.clipBufPre_clipContextMask) {
              a.frontFace(a.CCW),
                a.useProgram(this.shaderProgram),
                (this._$vS = mt(a, this._$vS, r)),
                (this._$no = Tt(a, this._$no, e)),
                a.enableVertexAttribArray(this.a_position_Loc),
                a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0),
                (this._$NT = mt(a, this._$NT, o)),
                a.activeTexture(a.TEXTURE1),
                a.bindTexture(a.TEXTURE_2D, this.textures[t]),
                a.uniform1i(this.s_texture0_Loc, 1),
                a.enableVertexAttribArray(this.a_texCoord_Loc),
                a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0),
                a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask);
              var y = this.getClipBufPre_clipContextMask().layoutChannelNo,
                d = this.getChannelFlagAsColor(y);
              a.uniform4f(this.u_channelFlag, d.r, d.g, d.b, d.a);
              var m = this.getClipBufPre_clipContextMask().layoutBounds;
              a.uniform4f(this.u_baseColor_Loc, 2 * m.x - 1, 2 * m.y - 1, 2 * m._$EL() - 1, 2 * m._$5T() - 1),
                a.uniform1i(this.u_maskFlag_Loc, !0);
            } else if (null != this.getClipBufPre_clipContextDraw()) {
              a.useProgram(this.shaderProgramOff),
                (this._$vS = mt(a, this._$vS, r)),
                (this._$no = Tt(a, this._$no, e)),
                a.enableVertexAttribArray(this.a_position_Loc_Off),
                a.vertexAttribPointer(this.a_position_Loc_Off, 2, a.FLOAT, !1, 0, 0),
                (this._$NT = mt(a, this._$NT, o)),
                a.activeTexture(a.TEXTURE1),
                a.bindTexture(a.TEXTURE_2D, this.textures[t]),
                a.uniform1i(this.s_texture0_Loc_Off, 1),
                a.enableVertexAttribArray(this.a_texCoord_Loc_Off),
                a.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, a.FLOAT, !1, 0, 0),
                a.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw),
                a.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4),
                a.activeTexture(a.TEXTURE2),
                a.bindTexture(a.TEXTURE_2D, _t.fTexture[this.glno]),
                a.uniform1i(this.s_texture1_Loc_Off, 2);
              (y = this.getClipBufPre_clipContextDraw().layoutChannelNo), (d = this.getChannelFlagAsColor(y));
              a.uniform4f(this.u_channelFlag_Loc_Off, d.r, d.g, d.b, d.a),
                a.uniform4f(this.u_baseColor_Loc_Off, p, c, f, g);
            } else
              a.useProgram(this.shaderProgram),
                (this._$vS = mt(a, this._$vS, r)),
                (this._$no = Tt(a, this._$no, e)),
                a.enableVertexAttribArray(this.a_position_Loc),
                a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0),
                (this._$NT = mt(a, this._$NT, o)),
                a.activeTexture(a.TEXTURE1),
                a.bindTexture(a.TEXTURE_2D, this.textures[t]),
                a.uniform1i(this.s_texture0_Loc, 1),
                a.enableVertexAttribArray(this.a_texCoord_Loc),
                a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0),
                a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4),
                a.uniform4f(this.u_baseColor_Loc, p, c, f, g),
                a.uniform1i(this.u_maskFlag_Loc, !1);
            if (
              (this.culling ? this.gl.enable(a.CULL_FACE) : this.gl.disable(a.CULL_FACE),
              this.gl.enable(a.BLEND),
              null != this.clipBufPre_clipContextMask)
            )
              (h = a.ONE), ($ = a.ONE_MINUS_SRC_ALPHA), (l = a.ONE), (u = a.ONE_MINUS_SRC_ALPHA);
            else
              switch (s) {
                case $t._$ms:
                  (h = a.ONE), ($ = a.ONE_MINUS_SRC_ALPHA), (l = a.ONE), (u = a.ONE_MINUS_SRC_ALPHA);
                  break;
                case $t._$ns:
                  (h = a.ONE), ($ = a.ONE), (l = a.ZERO), (u = a.ONE);
                  break;
                case $t._$_s:
                  (h = a.DST_COLOR), ($ = a.ONE_MINUS_SRC_ALPHA), (l = a.ZERO), (u = a.ONE);
              }
            a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
              a.blendFuncSeparate(h, $, l, u),
              this.anisotropyExt &&
                a.texParameteri(a.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
            var T = e.length;
            a.drawElements(a.TRIANGLES, T, a.UNSIGNED_SHORT, 0), a.bindTexture(a.TEXTURE_2D, null);
          }
        }),
        (dt.prototype._$Rs = function () {
          throw new Error("_$Rs");
        }),
        (dt.prototype._$Ds = function (t) {
          throw new Error("_$Ds");
        }),
        (dt.prototype._$K2 = function () {
          for (var t = 0; t < this.textures.length; t++) {
            0 != this.textures[t] && (this.gl._$K2(1, this.textures, t), (this.textures[t] = null));
          }
        }),
        (dt.prototype.setTexture = function (t, i) {
          this.textures[t] = i;
        }),
        (dt.prototype.initShader = function () {
          var t = this.gl;
          this.loadShaders2(),
            (this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position")),
            (this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, "a_texCoord")),
            (this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, "u_mvpMatrix")),
            (this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0")),
            (this.u_channelFlag = t.getUniformLocation(this.shaderProgram, "u_channelFlag")),
            (this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, "u_baseColor")),
            (this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag")),
            (this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_position")),
            (this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_texCoord")),
            (this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix")),
            (this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix")),
            (this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture0")),
            (this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture1")),
            (this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag")),
            (this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor"));
        }),
        (dt.prototype.disposeShader = function () {
          var t = this.gl;
          this.shaderProgram && (t.deleteProgram(this.shaderProgram), (this.shaderProgram = null)),
            this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), (this.shaderProgramOff = null));
        }),
        (dt.prototype.compileShader = function (t, i) {
          var e = this.gl,
            r = i,
            o = e.createShader(t);
          if (null == o) return _._$Ji("_$L0 to create shader"), null;
          if ((e.shaderSource(o, r), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS))) {
            var n = e.getShaderInfoLog(o);
            return _._$Ji("_$L0 to compile shader : " + n), e.deleteShader(o), null;
          }
          return o;
        }),
        (dt.prototype.loadShaders2 = function () {
          var t = this.gl;
          if (((this.shaderProgram = t.createProgram()), !this.shaderProgram)) return !1;
          if (((this.shaderProgramOff = t.createProgram()), !this.shaderProgramOff)) return !1;
          if (
            ((this.vertShader = this.compileShader(
              t.VERTEX_SHADER,
              "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"
            )),
            !this.vertShader)
          )
            return _._$Ji("Vertex shader compile _$li!"), !1;
          if (
            ((this.vertShaderOff = this.compileShader(
              t.VERTEX_SHADER,
              "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"
            )),
            !this.vertShaderOff)
          )
            return _._$Ji("OffVertex shader compile _$li!"), !1;
          if (
            ((this.fragShader = this.compileShader(
              t.FRAGMENT_SHADER,
              "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"
            )),
            !this.fragShader)
          )
            return _._$Ji("Fragment shader compile _$li!"), !1;
          if (
            ((this.fragShaderOff = this.compileShader(
              t.FRAGMENT_SHADER,
              "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"
            )),
            !this.fragShaderOff)
          )
            return _._$Ji("OffFragment shader compile _$li!"), !1;
          if (
            (t.attachShader(this.shaderProgram, this.vertShader),
            t.attachShader(this.shaderProgram, this.fragShader),
            t.attachShader(this.shaderProgramOff, this.vertShaderOff),
            t.attachShader(this.shaderProgramOff, this.fragShaderOff),
            t.linkProgram(this.shaderProgram),
            t.linkProgram(this.shaderProgramOff),
            !t.getProgramParameter(this.shaderProgram, t.LINK_STATUS))
          ) {
            var i = t.getProgramInfoLog(this.shaderProgram);
            return (
              _._$Ji("_$L0 to link program: " + i),
              this.vertShader && (t.deleteShader(this.vertShader), (this.vertShader = 0)),
              this.fragShader && (t.deleteShader(this.fragShader), (this.fragShader = 0)),
              this.shaderProgram && (t.deleteProgram(this.shaderProgram), (this.shaderProgram = 0)),
              this.vertShaderOff && (t.deleteShader(this.vertShaderOff), (this.vertShaderOff = 0)),
              this.fragShaderOff && (t.deleteShader(this.fragShaderOff), (this.fragShaderOff = 0)),
              this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), (this.shaderProgramOff = 0)),
              !1
            );
          }
          return !0;
        }),
        (dt.prototype.createFramebuffer = function () {
          var t = this.gl,
            i = _t.clippingMaskBufferSize,
            e = t.createFramebuffer();
          t.bindFramebuffer(t.FRAMEBUFFER, e);
          var r = t.createRenderbuffer();
          t.bindRenderbuffer(t.RENDERBUFFER, r),
            t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i, i),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r);
          var o = t.createTexture();
          return (
            t.bindTexture(t.TEXTURE_2D, o),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, i, i, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, o, 0),
            t.bindTexture(t.TEXTURE_2D, null),
            t.bindRenderbuffer(t.RENDERBUFFER, null),
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            (_t.fTexture[this.glno] = o),
            { framebuffer: e, renderbuffer: r, texture: _t.fTexture[this.glno] }
          );
        }),
        (Pt.prototype._$fP = function () {
          var t,
            i,
            e,
            r = this._$ST();
          if (0 == (128 & r)) return 255 & r;
          if (0 == (128 & (t = this._$ST()))) return ((127 & r) << 7) | (127 & t);
          if (0 == (128 & (i = this._$ST()))) return ((127 & r) << 14) | ((127 & t) << 7) | (255 & i);
          if (0 == (128 & (e = this._$ST())))
            return ((127 & r) << 21) | ((127 & t) << 14) | ((127 & i) << 7) | (255 & e);
          throw new ht("_$L _$0P  _");
        }),
        (Pt.prototype.getFormatVersion = function () {
          return this._$S2;
        }),
        (Pt.prototype._$gr = function (t) {
          this._$S2 = t;
        }),
        (Pt.prototype._$3L = function () {
          return this._$fP();
        }),
        (Pt.prototype._$mP = function () {
          return this._$zT(), (this._$F += 8), this._$T.getFloat64(this._$F - 8);
        }),
        (Pt.prototype._$_T = function () {
          return this._$zT(), (this._$F += 4), this._$T.getFloat32(this._$F - 4);
        }),
        (Pt.prototype._$6L = function () {
          return this._$zT(), (this._$F += 4), this._$T.getInt32(this._$F - 4);
        }),
        (Pt.prototype._$ST = function () {
          return this._$zT(), this._$T.getInt8(this._$F++);
        }),
        (Pt.prototype._$9T = function () {
          return this._$zT(), (this._$F += 2), this._$T.getInt16(this._$F - 2);
        }),
        (Pt.prototype._$2T = function () {
          throw (this._$zT(), (this._$F += 8), new ht("_$L _$q read long"));
        }),
        (Pt.prototype._$po = function () {
          return this._$zT(), 0 != this._$T.getInt8(this._$F++);
        });
      var St = !0;
      function vt() {}
      function Lt(t) {
        e ||
          ((this._$e0 = null),
          (this._$IP = null),
          (this._$Us = null),
          (this._$7s = null),
          (this._$IS = [!1]),
          (this._$VS = null),
          (this._$AT = !0),
          (this.baseOpacity = 1),
          (this.clipBufPre_clipContext = null),
          (this._$e0 = t));
      }
      function Mt() {}
      (Pt.prototype._$bT = function () {
        this._$zT();
        var t = this._$3L(),
          i = null;
        if (St)
          try {
            var e = new ArrayBuffer(2 * t);
            i = new Uint16Array(e);
            for (var r = 0; r < t; ++r) i[r] = this._$T.getUint8(this._$F++);
            return String.fromCharCode.apply(null, i);
          } catch (t) {
            St = !1;
          }
        try {
          var o = new Array();
          if (null == i) for (r = 0; r < t; ++r) o[r] = this._$T.getUint8(this._$F++);
          else for (r = 0; r < t; ++r) o[r] = i[r];
          return String.fromCharCode.apply(null, o);
        } catch (t) {}
      }),
        (Pt.prototype._$cS = function () {
          this._$zT();
          for (var t = this._$3L(), i = new Int32Array(t), e = 0; e < t; e++)
            (i[e] = this._$T.getInt32(this._$F)), (this._$F += 4);
          return i;
        }),
        (Pt.prototype._$Tb = function () {
          this._$zT();
          for (var t = this._$3L(), i = new Float32Array(t), e = 0; e < t; e++)
            (i[e] = this._$T.getFloat32(this._$F)), (this._$F += 4);
          return i;
        }),
        (Pt.prototype._$5b = function () {
          this._$zT();
          for (var t = this._$3L(), i = new Float64Array(t), e = 0; e < t; e++)
            (i[e] = this._$T.getFloat64(this._$F)), (this._$F += 8);
          return i;
        }),
        (Pt.prototype._$nP = function () {
          return this._$Jb(-1);
        }),
        (Pt.prototype._$Jb = function (t) {
          if ((this._$zT(), t < 0 && (t = this._$3L()), t == G._$7P)) {
            var i = this._$6L();
            if (0 <= i && i < this._$Ko.length) return this._$Ko[i];
            throw new ht("_$sL _$4i @_$m0");
          }
          var e = this._$4b(t);
          return this._$Ko.push(e), e;
        }),
        (Pt.prototype._$4b = function (t) {
          if (0 == t) return null;
          if (50 == t) {
            var i = this._$bT();
            return (n = R.getID(i));
          }
          if (51 == t) {
            i = this._$bT();
            return (n = yt.getID(i));
          }
          if (134 == t) {
            i = this._$bT();
            return (n = h.getID(i));
          }
          if (60 == t) {
            i = this._$bT();
            return (n = $.getID(i));
          }
          if (t >= 48) {
            var r = G._$9o(t);
            return null != r ? (r._$F0(this), r) : null;
          }
          switch (t) {
            case 1:
              return this._$bT();
            case 10:
              return new (function () {
                e || (this.color = null);
              })(this._$6L(), !0);
            case 11:
              return new P(this._$mP(), this._$mP(), this._$mP(), this._$mP());
            case 12:
              return new P(this._$_T(), this._$_T(), this._$_T(), this._$_T());
            case 13:
              return new v(this._$mP(), this._$mP());
            case 14:
              return new v(this._$_T(), this._$_T());
            case 15:
              for (var o = this._$3L(), n = new Array(o), s = 0; s < o; s++) n[s] = this._$nP();
              return n;
            case 17:
              return (n = new b(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP()));
            case 21:
              return new a(this._$6L(), this._$6L(), this._$6L(), this._$6L());
            case 22:
              return new ut(this._$6L(), this._$6L());
            case 23:
              throw new Error("_$L _$ro ");
            case 16:
            case 25:
              return this._$cS();
            case 26:
              return this._$5b();
            case 27:
              return this._$Tb();
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 18:
            case 19:
            case 20:
            case 24:
            case 28:
              throw new ht("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t);
            default:
              throw new ht("_$6 _$q : _$nP() NO _$i : " + t);
          }
        }),
        (Pt.prototype._$8L = function () {
          return (
            0 == this._$hL ? (this._$v0 = this._$ST()) : 8 == this._$hL && ((this._$v0 = this._$ST()), (this._$hL = 0)),
            1 == ((this._$v0 >> (7 - this._$hL++)) & 1)
          );
        }),
        (Pt.prototype._$zT = function () {
          0 != this._$hL && (this._$hL = 0);
        }),
        (vt._$2S = Math.PI / 180),
        (vt._$bS = Math.PI / 180),
        (vt._$wS = 180 / Math.PI),
        (vt._$NS = 180 / Math.PI),
        (vt.PI_F = Math.PI),
        (vt._$kT = [
          0, 0.012368, 0.024734, 0.037097, 0.049454, 0.061803, 0.074143, 0.086471, 0.098786, 0.111087, 0.12337,
          0.135634, 0.147877, 0.160098, 0.172295, 0.184465, 0.196606, 0.208718, 0.220798, 0.232844, 0.244854, 0.256827,
          0.268761, 0.280654, 0.292503, 0.304308, 0.316066, 0.327776, 0.339436, 0.351044, 0.362598, 0.374097, 0.385538,
          0.396921, 0.408243, 0.419502, 0.430697, 0.441826, 0.452888, 0.463881, 0.474802, 0.485651, 0.496425, 0.507124,
          0.517745, 0.528287, 0.538748, 0.549126, 0.559421, 0.56963, 0.579752, 0.589785, 0.599728, 0.609579, 0.619337,
          0.629, 0.638567, 0.648036, 0.657406, 0.666676, 0.675843, 0.684908, 0.693867, 0.70272, 0.711466, 0.720103,
          0.72863, 0.737045, 0.745348, 0.753536, 0.76161, 0.769566, 0.777405, 0.785125, 0.792725, 0.800204, 0.807561,
          0.814793, 0.821901, 0.828884, 0.835739, 0.842467, 0.849066, 0.855535, 0.861873, 0.868079, 0.874153, 0.880093,
          0.885898, 0.891567, 0.897101, 0.902497, 0.907754, 0.912873, 0.917853, 0.922692, 0.92739, 0.931946, 0.936359,
          0.940629, 0.944755, 0.948737, 0.952574, 0.956265, 0.959809, 0.963207, 0.966457, 0.96956, 0.972514, 0.97532,
          0.977976, 0.980482, 0.982839, 0.985045, 0.987101, 0.989006, 0.990759, 0.992361, 0.993811, 0.995109, 0.996254,
          0.997248, 0.998088, 0.998776, 0.999312, 0.999694, 0.999924, 1,
        ]),
        (vt._$92 = function (t, i) {
          var e = Math.atan2(t[1], t[0]),
            r = Math.atan2(i[1], i[0]);
          return vt._$tS(e, r);
        }),
        (vt._$tS = function (t, i) {
          for (var e = t - i; e < -Math.PI; ) e += 2 * Math.PI;
          for (; e > Math.PI; ) e -= 2 * Math.PI;
          return e;
        }),
        (vt._$9 = function (t) {
          return Math.sin(t);
        }),
        (vt.fcos = function (t) {
          return Math.cos(t);
        }),
        (Lt.prototype._$u2 = function () {
          return this._$IS[0];
        }),
        (Lt.prototype._$yo = function () {
          return this._$AT && !this._$IS[0];
        }),
        (Lt.prototype._$GT = function () {
          return this._$e0;
        }),
        (Mt._$W2 = 0),
        (Mt.SYSTEM_INFO = null),
        (Mt.USER_AGENT = navigator.userAgent),
        (Mt.isIPhone = function () {
          return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone;
        }),
        (Mt.isIOS = function () {
          return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad;
        }),
        (Mt.isAndroid = function () {
          return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isAndroid;
        }),
        (Mt.getOSVersion = function () {
          return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO.version;
        }),
        (Mt.getOS = function () {
          return (
            Mt.SYSTEM_INFO || Mt.setup(),
            Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad
              ? "iOS"
              : Mt.SYSTEM_INFO._isAndroid
              ? "Android"
              : "_$Q0 OS"
          );
        }),
        (Mt.setup = function () {
          var t,
            i = Mt.USER_AGENT;
          function e(t, i) {
            for (var e = t.substring(i).split(/[ _,;\.]/), r = 0, o = 0; o <= 2 && !isNaN(e[o]); o++) {
              var n = parseInt(e[o]);
              if (n < 0 || n > 999) {
                _._$li("err : " + n + " @UtHtml5.setup()"), (r = 0);
                break;
              }
              r += n * Math.pow(1e3, 2 - o);
            }
            return r;
          }
          var r = (Mt.SYSTEM_INFO = { userAgent: i });
          if ((t = i.indexOf("iPhone OS ")) >= 0)
            (r.os = "iPhone"), (r._isIPhone = !0), (r.version = e(i, t + "iPhone OS ".length));
          else if ((t = i.indexOf("iPad")) >= 0) {
            if ((t = i.indexOf("CPU OS")) < 0) return void _._$li(" err : " + i + " @UtHtml5.setup()");
            (r.os = "iPad"), (r._isIPad = !0), (r.version = e(i, t + "CPU OS ".length));
          } else
            (t = i.indexOf("Android")) >= 0
              ? ((r.os = "Android"), (r._isAndroid = !0), (r.version = e(i, t + "Android ".length)))
              : ((r.os = "-"), (r.version = -1));
        }),
        _t.init();
      e = !1;
      (i.UtSystem = I),
        (i.UtDebug = _),
        (i.LDTransform = gt),
        (i.LDGL = ot),
        (i.Live2D = _t),
        (i.Live2DModelWebGL = pt),
        (i.Live2DModelJS = q),
        (i.Live2DMotion = J),
        (i.MotionQueueManager = ct),
        (i.PhysicsHair = u),
        (i.AMotion = s),
        (i.PartsDataID = h),
        (i.DrawDataID = R),
        (i.BaseDataID = yt),
        (i.ParamID = $);
    }).call(i, e(140));
  },
  135: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.L2DBaseModel =
        i.L2DExpressionMotion =
        i.L2DExpressionParam =
        i.L2DEyeBlink =
        i.EYE_STATE =
        i.L2DMatrix44 =
        i.L2DModelMatrix =
        i.L2DMotionManager =
        i.L2DPhysics =
        i.L2DPartsParam =
        i.L2DPose =
        i.L2DViewMatrix =
        i.Live2DFramework =
        i.L2DTargetPoint =
          void 0);
    var r = e(134);
    function o() {
      (this.live2DModel = null),
        (this.modelMatrix = null),
        (this.eyeBlink = null),
        (this.physics = null),
        (this.pose = null),
        (this.debugMode = !1),
        (this.initialized = !1),
        (this.updating = !1),
        (this.alpha = 1),
        (this.accAlpha = 0),
        (this.lipSync = !1),
        (this.lipSyncValue = 0),
        (this.accelX = 0),
        (this.accelY = 0),
        (this.accelZ = 0),
        (this.dragX = 0),
        (this.dragY = 0),
        (this.startTimeMSec = null),
        (this.mainMotionManager = new u()),
        (this.expressionManager = new u()),
        (this.motions = {}),
        (this.expressions = {}),
        (this.isTexLoaded = !1);
    }
    var n = 0;
    function s() {
      r.AMotion.prototype.constructor.call(this), (this.paramList = new Array());
    }
    function _() {
      (this.id = ""), (this.type = -1), (this.value = null);
    }
    function a() {
      (this.nextBlinkTime = null),
        (this.stateStartTime = null),
        (this.blinkIntervalMsec = null),
        (this.eyeState = h.STATE_FIRST),
        (this.blinkIntervalMsec = 4e3),
        (this.closingMotionMsec = 100),
        (this.closedMotionMsec = 50),
        (this.openingMotionMsec = 150),
        (this.closeIfZero = !0),
        (this.eyeID_L = "PARAM_EYE_L_OPEN"),
        (this.eyeID_R = "PARAM_EYE_R_OPEN");
    }
    (o.prototype.getModelMatrix = function () {
      return this.modelMatrix;
    }),
      (o.prototype.setAlpha = function (t) {
        t > 0.999 && (t = 1), t < 0.001 && (t = 0), (this.alpha = t);
      }),
      (o.prototype.getAlpha = function () {
        return this.alpha;
      }),
      (o.prototype.isInitialized = function () {
        return this.initialized;
      }),
      (o.prototype.setInitialized = function (t) {
        this.initialized = t;
      }),
      (o.prototype.isUpdating = function () {
        return this.updating;
      }),
      (o.prototype.setUpdating = function (t) {
        this.updating = t;
      }),
      (o.prototype.getLive2DModel = function () {
        return this.live2DModel;
      }),
      (o.prototype.setLipSync = function (t) {
        this.lipSync = t;
      }),
      (o.prototype.setLipSyncValue = function (t) {
        this.lipSyncValue = t;
      }),
      (o.prototype.setAccel = function (t, i, e) {
        (this.accelX = t), (this.accelY = i), (this.accelZ = e);
      }),
      (o.prototype.setDrag = function (t, i) {
        (this.dragX = t), (this.dragY = i);
      }),
      (o.prototype.getMainMotionManager = function () {
        return this.mainMotionManager;
      }),
      (o.prototype.getExpressionManager = function () {
        return this.expressionManager;
      }),
      (o.prototype.loadModelData = function (t, i) {
        var e = d.getPlatformManager();
        this.debugMode && e.log("Load model : " + t);
        var o = this;
        e.loadLive2DModel(t, function (t) {
          (o.live2DModel = t),
            o.live2DModel.saveParam(),
            0 == r.Live2D.getError()
              ? ((o.modelMatrix = new l(o.live2DModel.getCanvasWidth(), o.live2DModel.getCanvasHeight())),
                o.modelMatrix.setWidth(2),
                o.modelMatrix.setCenterPosition(0, 0),
                i(o.live2DModel))
              : console.error("Error : Failed to loadModelData().");
        });
      }),
      (o.prototype.loadTexture = function (t, i, e) {
        n++;
        var r = d.getPlatformManager();
        this.debugMode && r.log("Load Texture : " + i);
        var o = this;
        r.loadTexture(this.live2DModel, t, i, function () {
          0 == --n && (o.isTexLoaded = !0), "function" == typeof e && e();
        });
      }),
      (o.prototype.loadMotion = function (t, i, e) {
        var o = d.getPlatformManager();
        this.debugMode && o.log("Load Motion : " + i);
        var n = null,
          s = this;
        o.loadBytes(i, function (i) {
          (n = r.Live2DMotion.loadMotion(i)), null != t && (s.motions[t] = n), e(n);
        });
      }),
      (o.prototype.loadExpression = function (t, i, e) {
        var r = d.getPlatformManager();
        this.debugMode && r.log("Load Expression : " + i);
        var o = this;
        r.loadBytes(i, function (i) {
          null != t && (o.expressions[t] = s.loadJson(i)), "function" == typeof e && e();
        });
      }),
      (o.prototype.loadPose = function (t, i) {
        var e = d.getPlatformManager();
        this.debugMode && e.log("Load Pose : " + t);
        var r = this;
        try {
          e.loadBytes(t, function (t) {
            (r.pose = c.load(t)), "function" == typeof i && i();
          });
        } catch (t) {
          console.warn(t);
        }
      }),
      (o.prototype.loadPhysics = function (t) {
        var i = d.getPlatformManager();
        this.debugMode && i.log("Load Physics : " + t);
        var e = this;
        try {
          i.loadBytes(t, function (t) {
            e.physics = p.load(t);
          });
        } catch (t) {
          console.warn(t);
        }
      }),
      (o.prototype.hitTestSimple = function (t, i, e) {
        if (null === this.live2DModel) return !1;
        var r = this.live2DModel.getDrawDataIndex(t);
        if (r < 0) return !1;
        for (
          var o = this.live2DModel.getTransformedPoints(r),
            n = this.live2DModel.getCanvasWidth(),
            s = 0,
            _ = this.live2DModel.getCanvasHeight(),
            a = 0,
            h = 0;
          h < o.length;
          h += 2
        ) {
          var $ = o[h],
            l = o[h + 1];
          $ < n && (n = $), $ > s && (s = $), l < _ && (_ = l), l > a && (a = l);
        }
        var u = this.modelMatrix.invertTransformX(i),
          p = this.modelMatrix.invertTransformY(e);
        return n <= u && u <= s && _ <= p && p <= a;
      }),
      (s.prototype = new r.AMotion()),
      (s.EXPRESSION_DEFAULT = "DEFAULT"),
      (s.TYPE_SET = 0),
      (s.TYPE_ADD = 1),
      (s.TYPE_MULT = 2),
      (s.loadJson = function (t) {
        var i = new s(),
          e = d.getPlatformManager().jsonParseFromBytes(t);
        if (
          (i.setFadeIn(parseInt(e.fade_in) > 0 ? parseInt(e.fade_in) : 1e3),
          i.setFadeOut(parseInt(e.fade_out) > 0 ? parseInt(e.fade_out) : 1e3),
          null == e.params)
        )
          return i;
        var r = e.params,
          o = r.length;
        i.paramList = [];
        for (var n = 0; n < o; n++) {
          var a = r[n],
            h = a.id.toString(),
            $ = parseFloat(a.val),
            l = s.TYPE_ADD,
            u = null != a.calc ? a.calc.toString() : "add";
          if (
            (l = "add" === u ? s.TYPE_ADD : "mult" === u ? s.TYPE_MULT : "set" === u ? s.TYPE_SET : s.TYPE_ADD) ==
            s.TYPE_ADD
          )
            $ -= p = null == a.def ? 0 : parseFloat(a.def);
          else if (l == s.TYPE_MULT) {
            var p;
            0 == (p = null == a.def ? 1 : parseFloat(a.def)) && (p = 1), ($ /= p);
          }
          var c = new _();
          (c.id = h), (c.type = l), (c.value = $), i.paramList.push(c);
        }
        return i;
      }),
      (s.prototype.updateParamExe = function (t, i, e, r) {
        for (var o = this.paramList.length - 1; o >= 0; --o) {
          var n = this.paramList[o];
          n.type == s.TYPE_ADD
            ? t.addToParamFloat(n.id, n.value, e)
            : n.type == s.TYPE_MULT
            ? t.multParamFloat(n.id, n.value, e)
            : n.type == s.TYPE_SET && t.setParamFloat(n.id, n.value, e);
        }
      }),
      (a.prototype.calcNextBlink = function () {
        return r.UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1);
      }),
      (a.prototype.setInterval = function (t) {
        this.blinkIntervalMsec = t;
      }),
      (a.prototype.setEyeMotion = function (t, i, e) {
        (this.closingMotionMsec = t), (this.closedMotionMsec = i), (this.openingMotionMsec = e);
      }),
      (a.prototype.updateParam = function (t) {
        var i,
          e = r.UtSystem.getUserTimeMSec(),
          o = 0;
        switch (this.eyeState) {
          case h.STATE_CLOSING:
            (o = (e - this.stateStartTime) / this.closingMotionMsec) >= 1 &&
              ((o = 1), (this.eyeState = h.STATE_CLOSED), (this.stateStartTime = e)),
              (i = 1 - o);
            break;
          case h.STATE_CLOSED:
            (o = (e - this.stateStartTime) / this.closedMotionMsec) >= 1 &&
              ((this.eyeState = h.STATE_OPENING), (this.stateStartTime = e)),
              (i = 0);
            break;
          case h.STATE_OPENING:
            (o = (e - this.stateStartTime) / this.openingMotionMsec) >= 1 &&
              ((o = 1), (this.eyeState = h.STATE_INTERVAL), (this.nextBlinkTime = this.calcNextBlink())),
              (i = o);
            break;
          case h.STATE_INTERVAL:
            this.nextBlinkTime < e && ((this.eyeState = h.STATE_CLOSING), (this.stateStartTime = e)), (i = 1);
            break;
          case h.STATE_FIRST:
          default:
            (this.eyeState = h.STATE_INTERVAL), (this.nextBlinkTime = this.calcNextBlink()), (i = 1);
        }
        this.closeIfZero || (i = -i), t.setParamFloat(this.eyeID_L, i), t.setParamFloat(this.eyeID_R, i);
      });
    var h = function () {};
    function $() {
      (this.tr = new Float32Array(16)), this.identity();
    }
    function l(t, i) {
      $.prototype.constructor.call(this), (this.width = t), (this.height = i);
    }
    function u() {
      r.MotionQueueManager.prototype.constructor.call(this),
        (this.currentPriority = null),
        (this.reservePriority = null),
        (this.super = r.MotionQueueManager.prototype);
    }
    function p() {
      (this.physicsList = new Array()), (this.startTimeMSec = r.UtSystem.getUserTimeMSec());
    }
    function c() {
      (this.lastTime = 0), (this.lastModel = null), (this.partsGroups = new Array());
    }
    function f(t) {
      (this.paramIndex = -1), (this.partsIndex = -1), (this.link = null), (this.id = t);
    }
    function g() {
      (this.EPSILON = 0.01),
        (this.faceTargetX = 0),
        (this.faceTargetY = 0),
        (this.faceX = 0),
        (this.faceY = 0),
        (this.faceVX = 0),
        (this.faceVY = 0),
        (this.lastTimeSec = 0);
    }
    function y() {
      $.prototype.constructor.call(this),
        (this.screenLeft = null),
        (this.screenRight = null),
        (this.screenTop = null),
        (this.screenBottom = null),
        (this.maxLeft = null),
        (this.maxRight = null),
        (this.maxTop = null),
        (this.maxBottom = null);
    }
    function d() {}
    (h.STATE_FIRST = "STATE_FIRST"),
      (h.STATE_INTERVAL = "STATE_INTERVAL"),
      (h.STATE_CLOSING = "STATE_CLOSING"),
      (h.STATE_CLOSED = "STATE_CLOSED"),
      (h.STATE_OPENING = "STATE_OPENING"),
      ($.mul = function (t, i, e) {
        var r,
          o,
          n,
          s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (r = 0; r < 4; r++)
          for (o = 0; o < 4; o++) for (n = 0; n < 4; n++) s[r + 4 * o] += t[r + 4 * n] * i[n + 4 * o];
        for (r = 0; r < 16; r++) e[r] = s[r];
      }),
      ($.prototype.identity = function () {
        for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0;
      }),
      ($.prototype.getArray = function () {
        return this.tr;
      }),
      ($.prototype.getCopyMatrix = function () {
        return new Float32Array(this.tr);
      }),
      ($.prototype.setMatrix = function (t) {
        if (null != this.tr && this.tr.length == this.tr.length) for (var i = 0; i < 16; i++) this.tr[i] = t[i];
      }),
      ($.prototype.getScaleX = function () {
        return this.tr[0];
      }),
      ($.prototype.getScaleY = function () {
        return this.tr[5];
      }),
      ($.prototype.transformX = function (t) {
        return this.tr[0] * t + this.tr[12];
      }),
      ($.prototype.transformY = function (t) {
        return this.tr[5] * t + this.tr[13];
      }),
      ($.prototype.invertTransformX = function (t) {
        return (t - this.tr[12]) / this.tr[0];
      }),
      ($.prototype.invertTransformY = function (t) {
        return (t - this.tr[13]) / this.tr[5];
      }),
      ($.prototype.multTranslate = function (t, i) {
        var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1];
        $.mul(e, this.tr, this.tr);
      }),
      ($.prototype.translate = function (t, i) {
        (this.tr[12] = t), (this.tr[13] = i);
      }),
      ($.prototype.translateX = function (t) {
        this.tr[12] = t;
      }),
      ($.prototype.translateY = function (t) {
        this.tr[13] = t;
      }),
      ($.prototype.multScale = function (t, i) {
        var e = [t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        $.mul(e, this.tr, this.tr);
      }),
      ($.prototype.scale = function (t, i) {
        (this.tr[0] = t), (this.tr[5] = i);
      }),
      (l.prototype = new $()),
      (l.prototype.setPosition = function (t, i) {
        this.translate(t, i);
      }),
      (l.prototype.setCenterPosition = function (t, i) {
        var e = this.width * this.getScaleX(),
          r = this.height * this.getScaleY();
        this.translate(t - e / 2, i - r / 2);
      }),
      (l.prototype.top = function (t) {
        this.setY(t);
      }),
      (l.prototype.bottom = function (t) {
        var i = this.height * this.getScaleY();
        this.translateY(t - i);
      }),
      (l.prototype.left = function (t) {
        this.setX(t);
      }),
      (l.prototype.right = function (t) {
        var i = this.width * this.getScaleX();
        this.translateX(t - i);
      }),
      (l.prototype.centerX = function (t) {
        var i = this.width * this.getScaleX();
        this.translateX(t - i / 2);
      }),
      (l.prototype.centerY = function (t) {
        var i = this.height * this.getScaleY();
        this.translateY(t - i / 2);
      }),
      (l.prototype.setX = function (t) {
        this.translateX(t);
      }),
      (l.prototype.setY = function (t) {
        this.translateY(t);
      }),
      (l.prototype.setHeight = function (t) {
        var i = t / this.height,
          e = -i;
        this.scale(i, e);
      }),
      (l.prototype.setWidth = function (t) {
        var i = t / this.width,
          e = -i;
        this.scale(i, e);
      }),
      (u.prototype = new r.MotionQueueManager()),
      (u.prototype.getCurrentPriority = function () {
        return this.currentPriority;
      }),
      (u.prototype.getReservePriority = function () {
        return this.reservePriority;
      }),
      (u.prototype.reserveMotion = function (t) {
        return !(this.reservePriority >= t) && !(this.currentPriority >= t) && ((this.reservePriority = t), !0);
      }),
      (u.prototype.setReservePriority = function (t) {
        this.reservePriority = t;
      }),
      (u.prototype.updateParam = function (t) {
        var i = r.MotionQueueManager.prototype.updateParam.call(this, t);
        return this.isFinished() && (this.currentPriority = 0), i;
      }),
      (u.prototype.startMotionPrio = function (t, i) {
        return (
          i == this.reservePriority && (this.reservePriority = 0), (this.currentPriority = i), this.startMotion(t, !1)
        );
      }),
      (p.load = function (t) {
        for (
          var i = new p(), e = d.getPlatformManager().jsonParseFromBytes(t).physics_hair, o = e.length, n = 0;
          n < o;
          n++
        ) {
          var s = e[n],
            _ = new r.PhysicsHair(),
            a = s.setup,
            h = parseFloat(a.length),
            $ = parseFloat(a.regist),
            l = parseFloat(a.mass);
          _.setup(h, $, l);
          for (var u = s.src, c = u.length, f = 0; f < c; f++) {
            var g = u[f],
              y = g.id,
              m = r.PhysicsHair.Src.SRC_TO_X;
            "x" === (L = g.ptype)
              ? (m = r.PhysicsHair.Src.SRC_TO_X)
              : "y" === L
              ? (m = r.PhysicsHair.Src.SRC_TO_Y)
              : "angle" === L
              ? (m = r.PhysicsHair.Src.SRC_TO_G_ANGLE)
              : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
            var T = parseFloat(g.scale),
              P = parseFloat(g.weight);
            _.addSrcParam(m, y, T, P);
          }
          var S = s.targets,
            v = S.length;
          for (f = 0; f < v; f++) {
            var L,
              M = S[f];
            (y = M.id), (m = r.PhysicsHair.Target.TARGET_FROM_ANGLE);
            "angle" === (L = M.ptype)
              ? (m = r.PhysicsHair.Target.TARGET_FROM_ANGLE)
              : "angle_v" === L
              ? (m = r.PhysicsHair.Target.TARGET_FROM_ANGLE_V)
              : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
            (T = parseFloat(M.scale)), (P = parseFloat(M.weight));
            _.addTargetParam(m, y, T, P);
          }
          i.physicsList.push(_);
        }
        return i;
      }),
      (p.prototype.updateParam = function (t) {
        for (var i = r.UtSystem.getUserTimeMSec() - this.startTimeMSec, e = 0; e < this.physicsList.length; e++)
          this.physicsList[e].update(t, i);
      }),
      (c.load = function (t) {
        for (
          var i = new c(), e = d.getPlatformManager().jsonParseFromBytes(t).parts_visible, r = e.length, o = 0;
          o < r;
          o++
        ) {
          for (var n = e[o].group, s = n.length, _ = new Array(), a = 0; a < s; a++) {
            var h = n[a],
              $ = new f(h.id);
            if (((_[a] = $), null != h.link)) {
              var l = h.link,
                u = l.length;
              $.link = new Array();
              for (var p = 0; p < u; p++) {
                var g = new f(l[p]);
                $.link.push(g);
              }
            }
          }
          i.partsGroups.push(_);
        }
        return i;
      }),
      (c.prototype.updateParam = function (t) {
        if (null != t) {
          t != this.lastModel && this.initParam(t), (this.lastModel = t);
          var i = r.UtSystem.getUserTimeMSec(),
            e = 0 == this.lastTime ? 0 : (i - this.lastTime) / 1e3;
          (this.lastTime = i), e < 0 && (e = 0);
          for (var o = 0; o < this.partsGroups.length; o++)
            this.normalizePartsOpacityGroup(t, this.partsGroups[o], e),
              this.copyOpacityOtherParts(t, this.partsGroups[o]);
        }
      }),
      (c.prototype.initParam = function (t) {
        if (null != t)
          for (var i = 0; i < this.partsGroups.length; i++)
            for (var e = this.partsGroups[i], r = 0; r < e.length; r++) {
              e[r].initIndex(t);
              var o = e[r].partsIndex,
                n = e[r].paramIndex;
              if (!(o < 0)) {
                var s = 0 != t.getParamFloat(n);
                if ((t.setPartsOpacity(o, s ? 1 : 0), t.setParamFloat(n, s ? 1 : 0), null != e[r].link))
                  for (var _ = 0; _ < e[r].link.length; _++) e[r].link[_].initIndex(t);
              }
            }
      }),
      (c.prototype.normalizePartsOpacityGroup = function (t, i, e) {
        for (var r = -1, o = 1, n = 0; n < i.length; n++) {
          var s = i[n].partsIndex,
            _ = i[n].paramIndex;
          if (!(s < 0) && 0 != t.getParamFloat(_)) {
            if (r >= 0) break;
            (r = n), (o = t.getPartsOpacity(s)), (o += e / 0.5) > 1 && (o = 1);
          }
        }
        r < 0 && ((r = 0), (o = 1));
        for (n = 0; n < i.length; n++) {
          if (!((s = i[n].partsIndex) < 0))
            if (r == n) t.setPartsOpacity(s, o);
            else {
              var a,
                h = t.getPartsOpacity(s);
              (1 - (a = o < 0.5 ? (-0.5 * o) / 0.5 + 1 : (0.5 * (1 - o)) / 0.5)) * (1 - o) > 0.15 &&
                (a = 1 - 0.15 / (1 - o)),
                h > a && (h = a),
                t.setPartsOpacity(s, h);
            }
        }
      }),
      (c.prototype.copyOpacityOtherParts = function (t, i) {
        for (var e = 0; e < i.length; e++) {
          var r = i[e];
          if (null != r.link && !(r.partsIndex < 0))
            for (var o = t.getPartsOpacity(r.partsIndex), n = 0; n < r.link.length; n++) {
              var s = r.link[n];
              s.partsIndex < 0 || t.setPartsOpacity(s.partsIndex, o);
            }
        }
      }),
      (f.prototype.initIndex = function (t) {
        (this.paramIndex = t.getParamIndex("VISIBLE:" + this.id)),
          (this.partsIndex = t.getPartsDataIndex(r.PartsDataID.getID(this.id))),
          t.setParamFloat(this.paramIndex, 1);
      }),
      (g.FRAME_RATE = 60),
      (g.prototype.setPoint = function (t, i) {
        (this.faceTargetX = t), (this.faceTargetY = i);
      }),
      (g.prototype.getX = function () {
        return this.faceX;
      }),
      (g.prototype.getY = function () {
        return this.faceY;
      }),
      (g.prototype.update = function () {
        var t = 40 / 7.5 / g.FRAME_RATE;
        if (0 != this.lastTimeSec) {
          var i = r.UtSystem.getUserTimeMSec(),
            e = ((i - this.lastTimeSec) * g.FRAME_RATE) / 1e3;
          this.lastTimeSec = i;
          var o = (e * t) / (0.15 * g.FRAME_RATE),
            n = this.faceTargetX - this.faceX,
            s = this.faceTargetY - this.faceY;
          if (!(Math.abs(n) <= this.EPSILON && Math.abs(s) <= this.EPSILON)) {
            var _ = Math.sqrt(n * n + s * s),
              a = (t * s) / _,
              h = (t * n) / _ - this.faceVX,
              $ = a - this.faceVY,
              l = Math.sqrt(h * h + $ * $);
            (l < -o || l > o) && ((h *= o / l), ($ *= o / l), (l = o)), (this.faceVX += h), (this.faceVY += $);
            var u = 0.5 * (Math.sqrt(o * o + 16 * o * _ - 8 * o * _) - o),
              p = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
            p > u && ((this.faceVX *= u / p), (this.faceVY *= u / p)),
              (this.faceX += this.faceVX),
              (this.faceY += this.faceVY);
          }
        } else this.lastTimeSec = r.UtSystem.getUserTimeMSec();
      }),
      (y.prototype = new $()),
      (y.prototype.adjustTranslate = function (t, i) {
        this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft &&
          (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]),
          this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight &&
            (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]),
          this.tr[5] * this.maxTop + (this.tr[13] + i) < this.screenTop &&
            (i = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]),
          this.tr[5] * this.maxBottom + (this.tr[13] + i) > this.screenBottom &&
            (i = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
        var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1];
        $.mul(e, this.tr, this.tr);
      }),
      (y.prototype.adjustScale = function (t, i, e) {
        this.tr[0];
        var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1],
          o = [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -i, 0, 1];
        $.mul(n, this.tr, this.tr), $.mul(o, this.tr, this.tr), $.mul(r, this.tr, this.tr);
      }),
      (y.prototype.setScreenRect = function (t, i, e, r) {
        (this.screenLeft = t), (this.screenRight = i), (this.screenTop = r), (this.screenBottom = e);
      }),
      (y.prototype.setMaxScreenRect = function (t, i, e, r) {
        (this.maxLeft = t), (this.maxRight = i), (this.maxTop = r), (this.maxBottom = e);
      }),
      (y.prototype.getScreenLeft = function () {
        return this.screenLeft;
      }),
      (y.prototype.getScreenRight = function () {
        return this.screenRight;
      }),
      (y.prototype.getScreenBottom = function () {
        return this.screenBottom;
      }),
      (y.prototype.getScreenTop = function () {
        return this.screenTop;
      }),
      (y.prototype.getMaxLeft = function () {
        return this.maxLeft;
      }),
      (y.prototype.getMaxRight = function () {
        return this.maxRight;
      }),
      (y.prototype.getMaxBottom = function () {
        return this.maxBottom;
      }),
      (y.prototype.getMaxTop = function () {
        return this.maxTop;
      }),
      (d.platformManager = null),
      (d.getPlatformManager = function () {
        return d.platformManager;
      }),
      (d.setPlatformManager = function (t) {
        d.platformManager = t;
      }),
      (i.L2DTargetPoint = g),
      (i.Live2DFramework = d),
      (i.L2DViewMatrix = y),
      (i.L2DPose = c),
      (i.L2DPartsParam = f),
      (i.L2DPhysics = p),
      (i.L2DMotionManager = u),
      (i.L2DModelMatrix = l),
      (i.L2DMatrix44 = $),
      (i.EYE_STATE = h),
      (i.L2DEyeBlink = a),
      (i.L2DExpressionParam = _),
      (i.L2DExpressionMotion = s),
      (i.L2DBaseModel = o);
  },
  136: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    i.cDefine = {
      VIEW_LOGICAL_LEFT: -1,
      VIEW_LOGICAL_RIGHT: 1,
      VIEW_LOGICAL_MAX_LEFT: -2,
      VIEW_LOGICAL_MAX_RIGHT: 2,
      VIEW_LOGICAL_MAX_BOTTOM: -2,
      VIEW_LOGICAL_MAX_TOP: 2,
      PRIORITY_NONE: 0,
      PRIORITY_IDLE: 1,
      PRIORITY_NORMAL: 2,
      PRIORITY_FORCE: 3,
      MOTION_GROUP_IDLE: "idle",
      MOTION_GROUP_TAP_BODY: "tap_body",
      MOTION_GROUP_FLICK_HEAD: "flick_head",
      MOTION_GROUP_PINCH_IN: "pinch_in",
      MOTION_GROUP_PINCH_OUT: "pinch_out",
      MOTION_GROUP_SHAKE: "shake",
      HIT_AREA_HEAD: "head",
      HIT_AREA_BODY: "body",
    };
  },
  137: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.currCanvas = i.currWebGL = i.createElement = void 0);
    var r,
      o = e(52),
      n = e(139),
      s = (r = n) && r.__esModule ? r : { default: r };
    var _ = void 0,
      a = void 0;
    (i.createElement = function () {
      var t = document.getElementById(o.config.name.div);
      null !== t && document.body.removeChild(t);
      var e = document.createElement("div");
      (e.id = o.config.name.div), (e.innerHTML = s.default);
      var r = document.createElement("canvas");
      r.setAttribute("id", o.config.name.canvas),
        r.setAttribute("width", o.config.display.width * o.config.display.superSample),
        r.setAttribute("height", o.config.display.height * o.config.display.superSample),
        r.style.setProperty("position", "fixed"),
        r.style.setProperty("width", o.config.display.width),
        r.style.setProperty("height", o.config.display.height),
        r.style.setProperty("opacity", o.config.react.opacityDefault),
        r.style.setProperty(o.config.display.position, o.config.display.hOffset + "px"),
        r.style.setProperty("bottom", o.config.display.vOffset + "px"),
        r.style.setProperty("z-index", 99999),
        r.style.setProperty("pointer-events", "none"),
        o.config.dev.border && r.style.setProperty("border", "dashed 1px #CCC"),
        e.appendChild(r),
        document.body.appendChild(e),
        (i.currCanvas = a = document.getElementById(o.config.name.canvas)),
        (function () {
          for (
            var t = ["webgl2", "webgl", "experimental-webgl2", "experimental-webgl", "webkit-3d", "moz-webgl"], e = 0;
            e < t.length;
            e++
          )
            try {
              var r = a.getContext(t[e], {
                alpha: !0,
                antialias: !0,
                premultipliedAlpha: !0,
                failIfMajorPerformanceCaveat: !1,
              });
              r && (i.currWebGL = _ = r);
            } catch (t) {}
          _ ||
            (console.error("Live2D widgets: Failed to create WebGL context."),
            window.WebGLRenderingContext ||
              console.error(
                "Your browser may not support WebGL, check https://get.webgl.org/ for futher information."
              ));
        })();
    }),
      (i.currWebGL = _),
      (i.currCanvas = a);
  },
  138: function (t, i, e) {
    "use strict";
    function r() {}
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.MatrixStack = r),
      (r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      (r.depth = 0),
      (r.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      (r.tmp = new Array(16)),
      (r.reset = function () {
        this.depth = 0;
      }),
      (r.loadIdentity = function () {
        for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0;
      }),
      (r.push = function () {
        var t = 16 * (this.depth + 1);
        this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16);
        for (var i = 0; i < 16; i++) this.matrixStack[t + i] = this.currentMatrix[i];
        this.depth++;
      }),
      (r.pop = function () {
        this.depth--, this.depth < 0 && (myError("Invalid matrix stack."), (this.depth = 0));
        for (var t = 16 * this.depth, i = 0; i < 16; i++) this.currentMatrix[i] = this.matrixStack[t + i];
      }),
      (r.getMatrix = function () {
        return this.currentMatrix;
      }),
      (r.multMatrix = function (t) {
        var i, e, r;
        for (i = 0; i < 16; i++) this.tmp[i] = 0;
        for (i = 0; i < 4; i++)
          for (e = 0; e < 4; e++)
            for (r = 0; r < 4; r++) this.tmp[i + 4 * e] += this.currentMatrix[i + 4 * r] * t[r + 4 * e];
        for (i = 0; i < 16; i++) this.currentMatrix[i] = this.tmp[i];
      });
  },
  139: function (t, i) {
    t.exports = "";
  },
  140: function (t, i) {
    t.exports = {
      import: function () {
        throw new Error("System.import cannot be used indirectly");
      },
    };
  },
  141: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.cManager = void 0);
    var r = e(135),
      o = e(142),
      n = e(143),
      s = e(136);
    function _() {
      (this.models = []),
        (this.count = -1),
        (this.reloadFlg = !1),
        r.Live2DFramework.setPlatformManager(new o.PlatformManager());
    }
    (_.prototype.createModel = function () {
      var t = new n.cModel();
      return this.models.push(t), t;
    }),
      (_.prototype.changeModel = function (t, i) {
        this.reloadFlg &&
          ((this.reloadFlg = !1), this.releaseModel(0, t), this.createModel(), this.models[0].load(t, i));
      }),
      (_.prototype.getModel = function (t) {
        return t >= this.models.length ? null : this.models[t];
      }),
      (_.prototype.releaseModel = function (t, i) {
        this.models.length <= t || (this.models[t].release(i), delete this.models[t], this.models.splice(t, 1));
      }),
      (_.prototype.numModels = function () {
        return this.models.length;
      }),
      (_.prototype.setDrag = function (t, i) {
        for (var e = 0; e < this.models.length; e++) this.models[e].setDrag(t, i);
      }),
      (_.prototype.tapEvent = function (t, i) {
        s.cDefine.DEBUG_LOG;
        for (var e = 0; e < this.models.length; e++)
          this.models[e].hitTest(s.cDefine.HIT_AREA_HEAD, t, i)
            ? (s.cDefine.DEBUG_LOG, this.models[e].setRandomExpression())
            : this.models[e].hitTest(s.cDefine.HIT_AREA_BODY, t, i) &&
              (s.cDefine.DEBUG_LOG,
              this.models[e].startRandomMotion(s.cDefine.MOTION_GROUP_TAP_BODY, s.cDefine.PRIORITY_NORMAL));
        return !0;
      }),
      (i.cManager = _);
  },
  142: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.PlatformManager = n);
    var r = e(137),
      o = e(134);
    function n() {}
    (n.prototype.loadBytes = function (t, i) {
      var e = new XMLHttpRequest();
      e.open("GET", t, !0),
        (e.responseType = "arraybuffer"),
        (e.onload = function () {
          switch (e.status) {
            case 200:
              i(e.response);
              break;
            default:
              console.error("Failed to load (" + e.status + ") : " + t);
          }
        }),
        e.send(null);
    }),
      (n.prototype.loadString = function (t) {
        this.loadBytes(t, function (t) {
          return t;
        });
      }),
      (n.prototype.loadLive2DModel = function (t, i) {
        var e = null;
        this.loadBytes(t, function (t) {
          (e = o.Live2DModelWebGL.loadModel(t)), i(e);
        });
      }),
      (n.prototype.loadTexture = function (t, i, e, o) {
        var n = new Image();
        (n.crossOrigin = "Anonymous"),
          (n.src = e),
          (n.onload = onload),
          (n.onerror = onerror),
          (n.onload = function () {
            var e = r.currWebGL,
              s = e.createTexture();
            if (!s) return console.error("Failed to generate gl texture name."), -1;
            t.isPremultipliedAlpha() || e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1),
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, 1),
              e.activeTexture(e.TEXTURE0),
              e.bindTexture(e.TEXTURE_2D, s),
              e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST),
              e.generateMipmap(e.TEXTURE_2D),
              t.setTexture(i, s),
              (s = null),
              "function" == typeof o && o();
          }),
          (n.onerror = function () {
            console.error("Failed to load image : " + e);
          });
      }),
      (n.prototype.jsonParseFromBytes = function (t) {
        var i,
          e = new Uint8Array(t, 0, 3);
        return (
          (i =
            239 == e[0] && 187 == e[1] && 191 == e[2]
              ? String.fromCharCode.apply(null, new Uint8Array(t, 3))
              : String.fromCharCode.apply(null, new Uint8Array(t))),
          JSON.parse(i)
        );
      }),
      (n.prototype.log = function (t) {});
  },
  143: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.cModel = a);
    var r = e(135),
      o = e(144),
      n = e(138),
      s = e(136),
      _ = e(134);
    function a() {
      r.L2DBaseModel.prototype.constructor.call(this),
        (this.modelHomeDir = ""),
        (this.modelSetting = null),
        (this.tmpMatrix = []);
    }
    (a.prototype = new r.L2DBaseModel()),
      (a.prototype.load = function (t, i, e) {
        this.setUpdating(!0),
          this.setInitialized(!1),
          (this.modelHomeDir = i.substring(0, i.lastIndexOf("/") + 1)),
          (this.modelSetting = new o.ModelSettingJson());
        var n = this;
        this.modelSetting.loadModelSetting(i, function () {
          var t = n.modelHomeDir + n.modelSetting.getModelFile();
          n.loadModelData(t, function (t) {
            for (var i = 0; i < n.modelSetting.getTextureNum(); i++) {
              if (/^https?:\/\/|^\/\//i.test(n.modelSetting.getTextureFile(i)))
                var o = n.modelSetting.getTextureFile(i);
              else o = n.modelHomeDir + n.modelSetting.getTextureFile(i);
              n.loadTexture(i, o, function () {
                if (n.isTexLoaded) {
                  if (n.modelSetting.getExpressionNum() > 0) {
                    n.expressions = {};
                    for (var t = 0; t < n.modelSetting.getExpressionNum(); t++) {
                      var i = n.modelSetting.getExpressionName(t),
                        o = n.modelHomeDir + n.modelSetting.getExpressionFile(t);
                      n.loadExpression(i, o);
                    }
                  } else (n.expressionManager = null), (n.expressions = {});
                  if (
                    (null == n.eyeBlink && (n.eyeBlink = new r.L2DEyeBlink()),
                    null != n.modelSetting.getPhysicsFile()
                      ? n.loadPhysics(n.modelHomeDir + n.modelSetting.getPhysicsFile())
                      : (n.physics = null),
                    null != n.modelSetting.getPoseFile()
                      ? n.loadPose(n.modelHomeDir + n.modelSetting.getPoseFile(), function () {
                          n.pose.updateParam(n.live2DModel);
                        })
                      : (n.pose = null),
                    null != n.modelSetting.getLayout())
                  ) {
                    var _ = n.modelSetting.getLayout();
                    null != _.width && n.modelMatrix.setWidth(_.width),
                      null != _.height && n.modelMatrix.setHeight(_.height),
                      null != _.x && n.modelMatrix.setX(_.x),
                      null != _.y && n.modelMatrix.setY(_.y),
                      null != _.center_x && n.modelMatrix.centerX(_.center_x),
                      null != _.center_y && n.modelMatrix.centerY(_.center_y),
                      null != _.top && n.modelMatrix.top(_.top),
                      null != _.bottom && n.modelMatrix.bottom(_.bottom),
                      null != _.left && n.modelMatrix.left(_.left),
                      null != _.right && n.modelMatrix.right(_.right);
                  }
                  for (t = 0; t < n.modelSetting.getInitParamNum(); t++)
                    n.live2DModel.setParamFloat(n.modelSetting.getInitParamID(t), n.modelSetting.getInitParamValue(t));
                  for (t = 0; t < n.modelSetting.getInitPartsVisibleNum(); t++)
                    n.live2DModel.setPartsOpacity(
                      n.modelSetting.getInitPartsVisibleID(t),
                      n.modelSetting.getInitPartsVisibleValue(t)
                    );
                  n.live2DModel.saveParam(),
                    n.preloadMotionGroup(s.cDefine.MOTION_GROUP_IDLE),
                    n.mainMotionManager.stopAllMotions(),
                    n.setUpdating(!1),
                    n.setInitialized(!0),
                    "function" == typeof e && e();
                }
              });
            }
          });
        });
      }),
      (a.prototype.release = function (t) {
        var i = r.Live2DFramework.getPlatformManager();
        t.deleteTexture(i.texture);
      }),
      (a.prototype.preloadMotionGroup = function (t) {
        for (var i = this, e = 0; e < this.modelSetting.getMotionNum(t); e++) {
          var r = this.modelSetting.getMotionFile(t, e);
          this.loadMotion(r, this.modelHomeDir + r, function (r) {
            r.setFadeIn(i.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(i.modelSetting.getMotionFadeOut(t, e));
          });
        }
      }),
      (a.prototype.update = function () {
        if (null != this.live2DModel) {
          var t = 2 * ((_.UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3) * Math.PI;
          this.mainMotionManager.isFinished() &&
            this.startRandomMotion(s.cDefine.MOTION_GROUP_IDLE, s.cDefine.PRIORITY_IDLE),
            this.live2DModel.loadParam(),
            this.mainMotionManager.updateParam(this.live2DModel) ||
              (null != this.eyeBlink && this.eyeBlink.updateParam(this.live2DModel)),
            this.live2DModel.saveParam(),
            null == this.expressionManager ||
              null == this.expressions ||
              this.expressionManager.isFinished() ||
              this.expressionManager.updateParam(this.live2DModel),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1),
            this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1),
            this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1),
            this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(t / 6.5345)), 0.5),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(t / 3.5345)), 0.5),
            this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(t / 5.5345)), 0.5),
            this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(t / 15.5345)), 0.5),
            this.live2DModel.setParamFloat("PARAM_BREATH", Number(0.5 + 0.5 * Math.sin(t / 3.2345)), 1),
            null != this.physics && this.physics.updateParam(this.live2DModel),
            null == this.lipSync && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue),
            null != this.pose && this.pose.updateParam(this.live2DModel),
            this.live2DModel.update();
        } else s.cDefine.DEBUG_LOG && console.error("Failed to update.");
      }),
      (a.prototype.setRandomExpression = function () {
        var t = [];
        for (var i in this.expressions) t.push(i);
        var e = parseInt(Math.random() * t.length);
        this.setExpression(t[e]);
      }),
      (a.prototype.startRandomMotion = function (t, i) {
        var e = this.modelSetting.getMotionNum(t),
          r = parseInt(Math.random() * e);
        this.startMotion(t, r, i);
      }),
      (a.prototype.startMotion = function (t, i, e) {
        var r = this.modelSetting.getMotionFile(t, i);
        if (null != r && "" != r) {
          if (e == s.cDefine.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(e);
          else if (!this.mainMotionManager.reserveMotion(e)) return void s.cDefine.DEBUG_LOG;
          var o,
            n = this;
          null == this.motions[t]
            ? this.loadMotion(null, this.modelHomeDir + r, function (r) {
                (o = r), n.setFadeInFadeOut(t, i, e, o);
              })
            : ((o = this.motions[t]), n.setFadeInFadeOut(t, i, e, o));
        } else s.cDefine.DEBUG_LOG && console.error("Failed to motion.");
      }),
      (a.prototype.setFadeInFadeOut = function (t, i, e, r) {
        var o = this.modelSetting.getMotionFile(t, i);
        if (
          (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, i)),
          r.setFadeOut(this.modelSetting.getMotionFadeOut(t, i)),
          s.cDefine.DEBUG_LOG,
          null == this.modelSetting.getMotionSound(t, i))
        )
          this.mainMotionManager.startMotionPrio(r, e);
        else {
          var n = this.modelSetting.getMotionSound(t, i),
            _ = document.createElement("audio");
          (_.src = this.modelHomeDir + n), s.cDefine.DEBUG_LOG, _.play(), this.mainMotionManager.startMotionPrio(r, e);
        }
      }),
      (a.prototype.setExpression = function (t) {
        var i = this.expressions[t];
        s.cDefine.DEBUG_LOG, this.expressionManager.startMotion(i, !1);
      }),
      (a.prototype.draw = function (t) {
        n.MatrixStack.push(),
          n.MatrixStack.multMatrix(this.modelMatrix.getArray()),
          (this.tmpMatrix = n.MatrixStack.getMatrix()),
          this.live2DModel.setMatrix(this.tmpMatrix),
          this.live2DModel.draw(),
          n.MatrixStack.pop();
      }),
      (a.prototype.hitTest = function (t, i, e) {
        for (var r = this.modelSetting.getHitAreaNum(), o = 0; o < r; o++)
          if (t == this.modelSetting.getHitAreaName(o)) {
            var n = this.modelSetting.getHitAreaID(o);
            return this.hitTestSimple(n, i, e);
          }
        return !1;
      });
  },
  144: function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }), (i.ModelSettingJson = o);
    var r = e(135);
    function o() {
      (this.NAME = "name"),
        (this.ID = "id"),
        (this.MODEL = "model"),
        (this.TEXTURES = "textures"),
        (this.HIT_AREAS = "hit_areas"),
        (this.PHYSICS = "physics"),
        (this.POSE = "pose"),
        (this.EXPRESSIONS = "expressions"),
        (this.MOTION_GROUPS = "motions"),
        (this.SOUND = "sound"),
        (this.FADE_IN = "fade_in"),
        (this.FADE_OUT = "fade_out"),
        (this.LAYOUT = "layout"),
        (this.INIT_PARAM = "init_param"),
        (this.INIT_PARTS_VISIBLE = "init_parts_visible"),
        (this.VALUE = "val"),
        (this.FILE = "file"),
        (this.json = {});
    }
    (o.prototype.loadModelSetting = function (t, i) {
      var e = this;
      r.Live2DFramework.getPlatformManager().loadBytes(t, function (t) {
        var r = String.fromCharCode.apply(null, new Uint8Array(t));
        (e.json = JSON.parse(r)), i();
      });
    }),
      (o.prototype.getTextureFile = function (t) {
        return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t]
          ? null
          : this.json[this.TEXTURES][t];
      }),
      (o.prototype.getModelFile = function () {
        return this.json[this.MODEL];
      }),
      (o.prototype.getTextureNum = function () {
        return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length;
      }),
      (o.prototype.getHitAreaNum = function () {
        return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length;
      }),
      (o.prototype.getHitAreaID = function (t) {
        return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t]
          ? null
          : this.json[this.HIT_AREAS][t][this.ID];
      }),
      (o.prototype.getHitAreaName = function (t) {
        return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t]
          ? null
          : this.json[this.HIT_AREAS][t][this.NAME];
      }),
      (o.prototype.getPhysicsFile = function () {
        return this.json[this.PHYSICS];
      }),
      (o.prototype.getPoseFile = function () {
        return this.json[this.POSE];
      }),
      (o.prototype.getExpressionNum = function () {
        return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length;
      }),
      (o.prototype.getExpressionFile = function (t) {
        return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.FILE];
      }),
      (o.prototype.getExpressionName = function (t) {
        return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.NAME];
      }),
      (o.prototype.getLayout = function () {
        return this.json[this.LAYOUT];
      }),
      (o.prototype.getInitParamNum = function () {
        return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length;
      }),
      (o.prototype.getMotionNum = function (t) {
        return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t]
          ? 0
          : this.json[this.MOTION_GROUPS][t].length;
      }),
      (o.prototype.getMotionFile = function (t, i) {
        return null == this.json[this.MOTION_GROUPS] ||
          null == this.json[this.MOTION_GROUPS][t] ||
          null == this.json[this.MOTION_GROUPS][t][i]
          ? null
          : this.json[this.MOTION_GROUPS][t][i][this.FILE];
      }),
      (o.prototype.getMotionSound = function (t, i) {
        return null == this.json[this.MOTION_GROUPS] ||
          null == this.json[this.MOTION_GROUPS][t] ||
          null == this.json[this.MOTION_GROUPS][t][i] ||
          null == this.json[this.MOTION_GROUPS][t][i][this.SOUND]
          ? null
          : this.json[this.MOTION_GROUPS][t][i][this.SOUND];
      }),
      (o.prototype.getMotionFadeIn = function (t, i) {
        return null == this.json[this.MOTION_GROUPS] ||
          null == this.json[this.MOTION_GROUPS][t] ||
          null == this.json[this.MOTION_GROUPS][t][i] ||
          null == this.json[this.MOTION_GROUPS][t][i][this.FADE_IN]
          ? 1e3
          : this.json[this.MOTION_GROUPS][t][i][this.FADE_IN];
      }),
      (o.prototype.getMotionFadeOut = function (t, i) {
        return null == this.json[this.MOTION_GROUPS] ||
          null == this.json[this.MOTION_GROUPS][t] ||
          null == this.json[this.MOTION_GROUPS][t][i] ||
          null == this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT]
          ? 1e3
          : this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT];
      }),
      (o.prototype.getInitParamID = function (t) {
        return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t]
          ? null
          : this.json[this.INIT_PARAM][t][this.ID];
      }),
      (o.prototype.getInitParamValue = function (t) {
        return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t]
          ? NaN
          : this.json[this.INIT_PARAM][t][this.VALUE];
      }),
      (o.prototype.getInitPartsVisibleNum = function () {
        return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
      }),
      (o.prototype.getInitPartsVisibleID = function (t) {
        return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t]
          ? null
          : this.json[this.INIT_PARTS_VISIBLE][t][this.ID];
      }),
      (o.prototype.getInitPartsVisibleValue = function (t) {
        return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t]
          ? NaN
          : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE];
      });
  },
});

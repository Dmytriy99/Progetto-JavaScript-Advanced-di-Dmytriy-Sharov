(() => {
  "use strict";
  var e = {
      147: (e, n, t) => {
        t.d(n, { Z: () => d });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          c = t(667),
          s = t.n(c),
          u = new URL(t(844), t.b),
          p = i()(o()),
          l = s()(u);
        p.push([
          e.id,
          `body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-image: url(${l});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.image {\n  height: 40vh;\n  width: 80%;\n  object-fit: fill;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\np {\n  text-align: center;\n}\n\ninput {\n  margin-top: 50px;\n  width: 380px;\n  height: 60px;\n  font-size: 30px;\n  text-align: center;\n  border-radius: 10px;\n}\n\np {\n  background-color: lightgrey;\n  border-radius: 10px;\n}\n\n.textScore,\n.score {\n  background-color: lightgrey;\n  width: 200px;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.category {\n  width: 300px;\n}\n\n.summary {\n  width: 90%;\n}\n\nbutton {\n  width: 100px;\n  height: 35px;\n  margin-top: 20px;\n  background-color: lightblue;\n  font-weight: bolder;\n  border-radius: 8px;\n}\n`,
          "",
        ]);
        const d = p;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var p = [].concat(e[u]);
                (r && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  t &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = t))
                      : (p[2] = t)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              p = a[u] || 0,
              l = "".concat(u, " ").concat(p);
            a[u] = p + 1;
            var d = t(l),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) n[d].references++, n[d].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: l, updater: h, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var p = t(a[u]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      844: (e, n, t) => {
        e.exports = t.p + "../src/IMG/city.png";
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        u = t(216),
        p = t.n(u),
        l = t(589),
        d = t.n(l),
        f = t(147),
        h = {};
      (h.styleTagTransform = d()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = p()),
        n()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals;
      const g = document.querySelector(".image"),
        m = document.querySelector(".summary"),
        v = document.querySelector(".category"),
        b = document.querySelector("input"),
        y = document.querySelector(".score"),
        x = document.querySelector(".textScore"),
        w = document.querySelector("button");
      let T,
        S = function () {
          (v.innerHTML = ""),
            (g.style.backgroundImage = ""),
            (x.innerHTML = ""),
            (y.innerHTML = "");
        },
        M = function (e) {
          return (e = (e = e.toLowerCase()).trim()).replaceAll(" ", "-");
        };
      const k = async function () {
          const e = await fetch(
              `https://api.teleport.org/api/urban_areas/slug:${T}/scores/`
            ),
            n = await e.json(),
            t = await fetch(
              `https://api.teleport.org/api/urban_areas/slug:${T}/images/`
            ),
            r = await t.json();
          404 != e.status
            ? ((m.innerHTML = `<h2><p>${n.summary}</p><h2>`),
              (v.innerHTML = ""),
              (x.innerHTML = "CITY SCORE"),
              (y.innerHTML = n.teleport_city_score.toFixed(2)),
              n.categories.forEach((e) => {
                v.insertAdjacentHTML(
                  "afterbegin",
                  `<h3>${e.name}<br> ${e.score_out_of_10.toFixed(1)}<br><h3>`
                );
              }),
              (g.style.backgroundImage = `url(${r.photos[0].image.web})`),
              (b.value = ""))
            : (L(
                "<h1>City not found. Check if there's a typo. <br> Remember that you have to use cities names in english. <br> If none of these problems are yours, maybe that city is not in our database.<h1>"
              ),
              S());
        },
        L = (e) => ((m.innerHTML = `<p>${e}</p>`), e),
        C = () => {
          b.value || (L("<h1>YOU MUST WRITE A CITY<h1>"), S());
        };
      b.addEventListener("keydown", function (e) {
        "Enter" === e.key && ((T = M(b.value)), k(), C());
      }),
        w.addEventListener("click", function () {
          (T = M(b.value)), k(), C();
        });
    })();
})();

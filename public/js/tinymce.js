/* Ephox TinyMCE Cloud
 *
 * Copyright 2010-2018 Ephox Corporation. All rights reserved.
 *
 * Version: 4.8.5-114
 */
// 4.8.5 (2018-10-30)
!function () {
    "use strict";
    var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        }, H = function (n, r) {
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, arguments))
            }
        }, j = function (e) {
            return function () {
                return e
            }
        }, q = function (e) {
            return e
        }, b = function (i) {
            for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
            for (var a = new Array(arguments.length - 1), n = 1; n < arguments.length; n++) a[n - 1] = arguments[n];
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                var o = a.concat(n);
                return i.apply(null, o)
            }
        }, y = j(!1), C = j(!0), x = y, w = C, N = function () {
            return E
        }, E = (r = {
            fold: function (e, t) {
                return e()
            }, is: x, isSome: x, isNone: w, getOr: n = function (e) {
                return e
            }, getOrThunk: t = function (e) {
                return e()
            }, getOrDie: function (e) {
                throw new Error(e || "error: getOrDie called on none.")
            }, getOrNull: function () {
                return null
            }, getOrUndefined: function () {
                return undefined
            }, or: n, orThunk: t, map: N, ap: N, each: function () {
            }, bind: N, flatten: N, exists: x, forall: w, filter: N, equals: e = function (e) {
                return e.isNone()
            }, equals_: e, toArray: function () {
                return []
            }, toString: j("none()")
        }, Object.freeze && Object.freeze(r), r), S = function (n) {
            var e = function () {
                return n
            }, t = function () {
                return o
            }, r = function (e) {
                return e(n)
            }, o = {
                fold: function (e, t) {
                    return t(n)
                },
                is: function (e) {
                    return n === e
                },
                isSome: w,
                isNone: x,
                getOr: e,
                getOrThunk: e,
                getOrDie: e,
                getOrNull: e,
                getOrUndefined: e,
                or: t,
                orThunk: t,
                map: function (e) {
                    return S(e(n))
                },
                ap: function (e) {
                    return e.fold(N, function (e) {
                        return S(e(n))
                    })
                },
                each: function (e) {
                    e(n)
                },
                bind: r,
                flatten: e,
                exists: r,
                forall: r,
                filter: function (e) {
                    return e(n) ? o : E
                },
                equals: function (e) {
                    return e.is(n)
                },
                equals_: function (e, t) {
                    return e.fold(x, function (e) {
                        return t(n, e)
                    })
                },
                toArray: function () {
                    return [n]
                },
                toString: function () {
                    return "some(" + n + ")"
                }
            };
            return o
        }, A = {
            some: S, none: N, from: function (e) {
                return null === e || e === undefined ? E : S(e)
            }
        }, k = function (t) {
            return function (e) {
                return function (e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t && Array.prototype.isPrototypeOf(e) ? "array" : "object" === t && String.prototype.isPrototypeOf(e) ? "string" : t
                }(e) === t
            }
        }, T = k("string"), _ = k("object"), R = k("array"), D = k("null"), B = k("boolean"), O = k("function"),
        P = k("number"), L = (o = Array.prototype.indexOf) === undefined ? function (e, t) {
            return K(e, t)
        } : function (e, t) {
            return o.call(e, t)
        }, I = function (e, t) {
            return -1 < L(e, t)
        }, $ = function (e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e)
            }
            return r
        }, M = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e)
        }, W = function (e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? n : r).push(a)
            }
            return {pass: n, fail: r}
        }, F = function (e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i)
            }
            return n
        }, z = function (e, t, n) {
            return M(e, function (e) {
                n = t(n, e)
            }), n
        }, U = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return A.some(o)
            }
            return A.none()
        }, V = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n, e)) return A.some(n);
            return A.none()
        }, K = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n) if (e[n] === t) return n;
            return -1
        }, X = Array.prototype.push, Y = function (e, t) {
            return function (e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!Array.prototype.isPrototypeOf(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    X.apply(t, e[n])
                }
                return t
            }($(e, t))
        }, G = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n) if (!0 !== t(e[n], n, e)) return !1;
            return !0
        }, J = Array.prototype.slice, Q = function (e, t) {
            return F(e, function (e) {
                return !I(t, e)
            })
        }, Z = function (e) {
            return 0 === e.length ? A.none() : A.some(e[0])
        }, ee = function (e) {
            return 0 === e.length ? A.none() : A.some(e[e.length - 1])
        }, te = O(Array.from) ? Array.from : function (e) {
            return J.call(e)
        }, ne = "undefined" != typeof window ? window : Function("return this;")(), re = function (e, t) {
            return function (e, t) {
                for (var n = t !== undefined && null !== t ? t : ne, r = 0; r < e.length && n !== undefined && null !== n; ++r) n = n[e[r]];
                return n
            }(e.split("."), t)
        }, oe = {
            getOrDie: function (e, t) {
                var n = re(e, t);
                if (n === undefined || null === n) throw e + " not available on this browser";
                return n
            }
        }, ie = function () {
            return oe.getOrDie("URL")
        }, ae = {
            createObjectURL: function (e) {
                return ie().createObjectURL(e)
            }, revokeObjectURL: function (e) {
                ie().revokeObjectURL(e)
            }
        }, ue = navigator, se = ue.userAgent, ce = function (e) {
            return "matchMedia" in window && matchMedia(e).matches
        };
    d = /Android/.test(se), a = (a = !(i = /WebKit/.test(se)) && /MSIE/gi.test(se) && /Explorer/gi.test(ue.appName)) && /MSIE (\w+)\./.exec(se)[1], u = -1 !== se.indexOf("Trident/") && (-1 !== se.indexOf("rv:") || -1 !== ue.appName.indexOf("Netscape")) && 11, s = -1 !== se.indexOf("Edge/") && !a && !u && 12, a = a || u || s, c = !i && !u && /Gecko/.test(se), l = -1 !== se.indexOf("Mac"), f = /(iPad|iPhone)/.test(se), m = "FormData" in window && "FileReader" in window && "URL" in window && !!ae.createObjectURL, g = ce("only screen and (max-device-width: 480px)") && (d || f), p = ce("only screen and (min-width: 800px)") && (d || f), h = -1 !== se.indexOf("Windows Phone"), s && (i = !1);
    var le, fe = {
        opera: !1,
        webkit: i,
        ie: a,
        gecko: c,
        mac: l,
        iOS: f,
        android: d,
        contentEditable: !f || m || 534 <= parseInt(se.match(/AppleWebKit\/(\d*)/)[1], 10),
        transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        caretAfter: 8 !== a,
        range: window.getSelection && "Range" in window,
        documentMode: a && !s ? document.documentMode || 7 : 10,
        fileApi: m,
        ceFalse: !1 === a || 8 < a,
        cacheSuffix: null,
        container: null,
        overrideViewPort: null,
        experimentalShadowDom: !1,
        canHaveCSP: !1 === a || 11 < a,
        desktop: !g && !p,
        windowsPhone: h
    }, de = window.Promise ? window.Promise : function () {
        function r(e, t) {
            return function () {
                e.apply(t, arguments)
            }
        }

        var e = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, i = function (e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = null, this._value = null, this._deferreds = [], l(e, r(o, this), r(u, this))
        }, t = i.immediateFn || "function" == typeof setImmediate && setImmediate || function (e) {
            setTimeout(e, 1)
        };

        function a(r) {
            var o = this;
            null !== this._state ? t(function () {
                var e = o._state ? r.onFulfilled : r.onRejected;
                if (null !== e) {
                    var t;
                    try {
                        t = e(o._value)
                    } catch (n) {
                        return void r.reject(n)
                    }
                    r.resolve(t)
                } else (o._state ? r.resolve : r.reject)(o._value)
            }) : this._deferreds.push(r)
        }

        function o(e) {
            try {
                if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var t = e.then;
                    if ("function" == typeof t) return void l(r(t, e), r(o, this), r(u, this))
                }
                this._state = !0, this._value = e, s.call(this)
            } catch (n) {
                u.call(this, n)
            }
        }

        function u(e) {
            this._state = !1, this._value = e, s.call(this)
        }

        function s() {
            for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
            this._deferreds = null
        }

        function c(e, t, n, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
        }

        function l(e, t, n) {
            var r = !1;
            try {
                e(function (e) {
                    r || (r = !0, t(e))
                }, function (e) {
                    r || (r = !0, n(e))
                })
            } catch (o) {
                if (r) return;
                r = !0, n(o)
            }
        }

        return i.prototype["catch"] = function (e) {
            return this.then(null, e)
        }, i.prototype.then = function (n, r) {
            var o = this;
            return new i(function (e, t) {
                a.call(o, new c(n, r, e, t))
            })
        }, i.all = function () {
            var s = Array.prototype.slice.call(1 === arguments.length && e(arguments[0]) ? arguments[0] : arguments);
            return new i(function (o, i) {
                if (0 === s.length) return o([]);
                var a = s.length;

                function u(t, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n) return void n.call(e, function (e) {
                                u(t, e)
                            }, i)
                        }
                        s[t] = e, 0 == --a && o(s)
                    } catch (r) {
                        i(r)
                    }
                }

                for (var e = 0; e < s.length; e++) u(e, s[e])
            })
        }, i.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
                e(t)
            })
        }, i.reject = function (n) {
            return new i(function (e, t) {
                t(n)
            })
        }, i.race = function (o) {
            return new i(function (e, t) {
                for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
            })
        }, i
    }(), me = function (e, t) {
        return "number" != typeof t && (t = 0), setTimeout(e, t)
    }, ge = function (e, t) {
        return "number" != typeof t && (t = 1), setInterval(e, t)
    }, pe = function (t, n) {
        var r, e;
        return (e = function () {
            var e = arguments;
            clearTimeout(r), r = me(function () {
                t.apply(this, e)
            }, n)
        }).stop = function () {
            clearTimeout(r)
        }, e
    }, he = {
        requestAnimationFrame: function (e, t) {
            le ? le.then(e) : le = new de(function (e) {
                t || (t = document.body), function (e, t) {
                    var n, r = window.requestAnimationFrame, o = ["ms", "moz", "webkit"];
                    for (n = 0; n < o.length && !r; n++) r = window[o[n] + "RequestAnimationFrame"];
                    r || (r = function (e) {
                        window.setTimeout(e, 0)
                    }), r(e, t)
                }(e, t)
            }).then(e)
        }, setTimeout: me, setInterval: ge, setEditorTimeout: function (e, t, n) {
            return me(function () {
                e.removed || t()
            }, n)
        }, setEditorInterval: function (e, t, n) {
            var r;
            return r = ge(function () {
                e.removed ? clearInterval(r) : t()
            }, n)
        }, debounce: pe, throttle: pe, clearInterval: function (e) {
            return clearInterval(e)
        }, clearTimeout: function (e) {
            return clearTimeout(e)
        }
    }, ve = /^(?:mouse|contextmenu)|click/, be = {
        keyLocation: 1,
        layerX: 1,
        layerY: 1,
        returnValue: 1,
        webkitMovementX: 1,
        webkitMovementY: 1,
        keyIdentifier: 1
    }, ye = function () {
        return !1
    }, Ce = function () {
        return !0
    }, xe = function (e, t, n, r) {
        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }, we = function (e, t, n, r) {
        e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
    }, Ne = function (e, t) {
        var n, r, o = t || {};
        for (n in e) be[n] || (o[n] = e[n]);
        if (o.target || (o.target = o.srcElement || document), fe.experimentalShadowDom && (o.target = function (e, t) {
                if (e.composedPath) {
                    var n = e.composedPath();
                    if (n && 0 < n.length) return n[0]
                }
                return t
            }(e, o.target)), e && ve.test(e.type) && e.pageX === undefined && e.clientX !== undefined) {
            var i = o.target.ownerDocument || document, a = i.documentElement, u = i.body;
            o.pageX = e.clientX + (a && a.scrollLeft || u && u.scrollLeft || 0) - (a && a.clientLeft || u && u.clientLeft || 0), o.pageY = e.clientY + (a && a.scrollTop || u && u.scrollTop || 0) - (a && a.clientTop || u && u.clientTop || 0)
        }
        return o.preventDefault = function () {
            o.isDefaultPrevented = Ce, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, o.stopPropagation = function () {
            o.isPropagationStopped = Ce, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
        }, !(o.stopImmediatePropagation = function () {
            o.isImmediatePropagationStopped = Ce, o.stopPropagation()
        }) == ((r = o).isDefaultPrevented === Ce || r.isDefaultPrevented === ye) && (o.isDefaultPrevented = ye, o.isPropagationStopped = ye, o.isImmediatePropagationStopped = ye), "undefined" == typeof o.metaKey && (o.metaKey = !1), o
    }, Ee = function (e, t, n) {
        var r = e.document, o = {type: "ready"};
        if (n.domLoaded) t(o); else {
            var i = function () {
                return "complete" === r.readyState || "interactive" === r.readyState && r.body
            }, a = function () {
                n.domLoaded || (n.domLoaded = !0, t(o))
            }, u = function () {
                i() && (we(r, "readystatechange", u), a())
            }, s = function () {
                try {
                    r.documentElement.doScroll("left")
                } catch (e) {
                    return void he.setTimeout(s)
                }
                a()
            };
            !r.addEventListener || fe.ie && fe.ie < 11 ? (xe(r, "readystatechange", u), r.documentElement.doScroll && e.self === e.top && s()) : i() ? a() : xe(e, "DOMContentLoaded", a), xe(e, "load", a)
        }
    }, Se = function () {
        var m, g, p, h, v, b = this, y = {};
        g = "mce-data-" + (+new Date).toString(32), h = "onmouseenter" in document.documentElement, p = "onfocusin" in document.documentElement, v = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, m = 1, b.domLoaded = !1, b.events = y;
        var C = function (e, t) {
            var n, r, o, i, a = y[t];
            if (n = a && a[e.type]) for (r = 0, o = n.length; r < o; r++) if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
        };
        b.bind = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f = window, d = function (e) {
                C(Ne(e || f.event), o)
            };
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                for (e[g] ? o = e[g] : (o = m++, e[g] = o, y[o] = {}), r = r || e, a = (t = t.split(" ")).length; a--;) c = d, s = l = !1, "DOMContentLoaded" === (u = t[a]) && (u = "ready"), b.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, Ne({type: u})) : (h || (s = v[u]) && (c = function (e) {
                    var t, n;
                    if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n); else for (; n && n !== t;) n = n.parentNode;
                    n || ((e = Ne(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, C(e, o))
                }), p || "focusin" !== u && "focusout" !== u || (l = !0, s = "focusin" === u ? "focus" : "blur", c = function (e) {
                    (e = Ne(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", C(e, o)
                }), (i = y[o][u]) ? "ready" === u && b.domLoaded ? n({type: u}) : i.push({
                    func: n,
                    scope: r
                }) : (y[o][u] = i = [{
                    func: n,
                    scope: r
                }], i.fakeName = s, i.capture = l, i.nativeHandler = c, "ready" === u ? Ee(e, c, b) : xe(e, s || u, c, l)));
                return e = i = 0, n
            }
        }, b.unbind = function (e, t, n) {
            var r, o, i, a, u, s;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
            if (r = e[g]) {
                if (s = y[r], t) {
                    for (i = (t = t.split(" ")).length; i--;) if (o = s[u = t[i]]) {
                        if (n) for (a = o.length; a--;) if (o[a].func === n) {
                            var c = o.nativeHandler, l = o.fakeName, f = o.capture;
                            (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = c, o.fakeName = l, o.capture = f, s[u] = o
                        }
                        n && 0 !== o.length || (delete s[u], we(e, o.fakeName || u, o.nativeHandler, o.capture))
                    }
                } else {
                    for (u in s) o = s[u], we(e, o.fakeName || u, o.nativeHandler, o.capture);
                    s = {}
                }
                for (u in s) return b;
                delete y[r];
                try {
                    delete e[g]
                } catch (d) {
                    e[g] = null
                }
            }
            return b
        }, b.fire = function (e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
            for ((n = Ne(null, n)).type = t, n.target = e; (r = e[g]) && C(n, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !n.isPropagationStopped();) ;
            return b
        }, b.clean = function (e) {
            var t, n, r = b.unbind;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
            if (e[g] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (r(e), t = (n = e.getElementsByTagName("*")).length; t--;) (e = n[t])[g] && r(e);
            return b
        }, b.destroy = function () {
            y = {}
        }, b.cancel = function (e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }
    };
    Se.Event = new Se, Se.Event.bind(window, "ready", function () {
    });
    var ke, Te, Ae, _e, Re, De, Be, Oe, Pe, Le, Ie, Me, Fe, ze, Ue, Ve, He, je, qe = "sizzle" + -new Date,
        $e = window.document, We = 0, Ke = 0, Xe = kt(), Ye = kt(), Ge = kt(), Je = function (e, t) {
            return e === t && (Ie = !0), 0
        }, Qe = typeof undefined, Ze = {}.hasOwnProperty, et = [], tt = et.pop, nt = et.push, rt = et.push, ot = et.slice,
        it = et.indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1
        }, at = "[\\x20\\t\\r\\n\\f]", ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = "\\[" + at + "*(" + ut + ")(?:" + at + "*([*^$|!~]?=)" + at + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ut + "))|)" + at + "*\\]",
        ct = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
        lt = new RegExp("^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$", "g"),
        ft = new RegExp("^" + at + "*," + at + "*"), dt = new RegExp("^" + at + "*([>+~]|" + at + ")" + at + "*"),
        mt = new RegExp("=" + at + "*([^\\]'\"]*?)" + at + "*\\]", "g"), gt = new RegExp(ct),
        pt = new RegExp("^" + ut + "$"), ht = {
            ID: new RegExp("^#(" + ut + ")"),
            CLASS: new RegExp("^\\.(" + ut + ")"),
            TAG: new RegExp("^(" + ut + "|[*])"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + ct),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + at + "*(even|odd|(([+-]|)(\\d*)n|)" + at + "*(?:([+-]|)" + at + "*(\\d+)|))" + at + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + at + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + at + "*((?:-\\d)?\\d*)" + at + "*\\)|)(?=[^-]|$)", "i")
        }, vt = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/,
        Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /[+~]/, wt = /'|\\/g,
        Nt = new RegExp("\\\\([\\da-f]{1,6}" + at + "?|(" + at + ")|.)", "ig"), Et = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        rt.apply(et = ot.call($e.childNodes), $e.childNodes), et[$e.childNodes.length].nodeType
    } catch (Hw) {
        rt = {
            apply: et.length ? function (e, t) {
                nt.apply(e, ot.call(t))
            } : function (e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                e.length = n - 1
            }
        }
    }
    var St = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : $e) !== Fe && Me(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || Fe).nodeType) && 9 !== u) return [];
        if (Ue && !r) {
            if (o = Ct.exec(e)) if (a = o[1]) {
                if (9 === u) {
                    if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                    if (i.id === a) return n.push(i), n
                } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && je(t, i) && i.id === a) return n.push(i), n
            } else {
                if (o[2]) return rt.apply(n, t.getElementsByTagName(e)), n;
                if ((a = o[3]) && Te.getElementsByClassName) return rt.apply(n, t.getElementsByClassName(a)), n
            }
            if (Te.qsa && (!Ve || !Ve.test(e))) {
                if (f = l = qe, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = De(e), (l = t.getAttribute("id")) ? f = l.replace(wt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Pt(c[s]);
                    d = xt.test(e) && Bt(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return rt.apply(n, d.querySelectorAll(m)), n
                } catch (g) {
                } finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return Oe(e.replace(lt, "$1"), t, n, r)
    };

    function kt() {
        var r = [];
        return function e(t, n) {
            return r.push(t + " ") > Ae.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
    }

    function Tt(e) {
        return e[qe] = !0, e
    }

    function At(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
        return e ? 1 : -1
    }

    function _t(t) {
        return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function Rt(n) {
        return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function Dt(a) {
        return Tt(function (i) {
            return i = +i, Tt(function (e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function Bt(e) {
        return e && typeof e.getElementsByTagName !== Qe && e
    }

    for (ke in Te = St.support = {}, Re = St.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
    }, Me = St.setDocument = function (e) {
        var t, s = e ? e.ownerDocument || e : $e, n = s.defaultView;
        return s !== Fe && 9 === s.nodeType && s.documentElement ? (ze = (Fe = s).documentElement, Ue = !Re(s), n && n !== function (e) {
            try {
                return e.top
            } catch (t) {
            }
            return null
        }(n) && (n.addEventListener ? n.addEventListener("unload", function () {
            Me()
        }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
            Me()
        })), Te.attributes = !0, Te.getElementsByTagName = !0, Te.getElementsByClassName = yt.test(s.getElementsByClassName), Te.getById = !0, Ae.find.ID = function (e, t) {
            if (typeof t.getElementById !== Qe && Ue) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        }, Ae.filter.ID = function (e) {
            var t = e.replace(Nt, Et);
            return function (e) {
                return e.getAttribute("id") === t
            }
        }, Ae.find.TAG = Te.getElementsByTagName ? function (e, t) {
            if (typeof t.getElementsByTagName !== Qe) return t.getElementsByTagName(e)
        } : function (e, t) {
            var n, r = [], o = 0, i = t.getElementsByTagName(e);
            if ("*" === e) {
                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                return r
            }
            return i
        }, Ae.find.CLASS = Te.getElementsByClassName && function (e, t) {
            if (Ue) return t.getElementsByClassName(e)
        }, He = [], Ve = [], Te.disconnectedMatch = !0, Ve = Ve.length && new RegExp(Ve.join("|")), He = He.length && new RegExp(He.join("|")), t = yt.test(ze.compareDocumentPosition), je = t || yt.test(ze.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }, Je = t ? function (e, t) {
            if (e === t) return Ie = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Te.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === $e && je($e, e) ? -1 : t === s || t.ownerDocument === $e && je($e, t) ? 1 : Le ? it.call(Le, e) - it.call(Le, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
            if (e === t) return Ie = !0, 0;
            var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], u = [t];
            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Le ? it.call(Le, e) - it.call(Le, t) : 0;
            if (o === i) return At(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? At(a[r], u[r]) : a[r] === $e ? -1 : u[r] === $e ? 1 : 0
        }, s) : Fe
    }, St.matches = function (e, t) {
        return St(e, null, null, t)
    }, St.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== Fe && Me(e), t = t.replace(mt, "='$1']"), Te.matchesSelector && Ue && (!He || !He.test(t)) && (!Ve || !Ve.test(t))) try {
            var n = (void 0).call(e, t);
            if (n || Te.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (Hw) {
        }
        return 0 < St(t, Fe, null, [e]).length
    }, St.contains = function (e, t) {
        return (e.ownerDocument || e) !== Fe && Me(e), je(e, t)
    }, St.attr = function (e, t) {
        (e.ownerDocument || e) !== Fe && Me(e);
        var n = Ae.attrHandle[t.toLowerCase()],
            r = n && Ze.call(Ae.attrHandle, t.toLowerCase()) ? n(e, t, !Ue) : undefined;
        return r !== undefined ? r : Te.attributes || !Ue ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, St.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, St.uniqueSort = function (e) {
        var t, n = [], r = 0, o = 0;
        if (Ie = !Te.detectDuplicates, Le = !Te.sortStable && e.slice(0), e.sort(Je), Ie) {
            for (; t = e[o++];) t === e[o] && (r = n.push(o));
            for (; r--;) e.splice(n[r], 1)
        }
        return Le = null, e
    }, _e = St.getText = function (e) {
        var t, n = "", r = 0, o = e.nodeType;
        if (o) {
            if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += _e(e)
            } else if (3 === o || 4 === o) return e.nodeValue
        } else for (; t = e[r++];) n += _e(t);
        return n
    }, (Ae = St.selectors = {
        cacheLength: 50,
        createPseudo: Tt,
        match: ht,
        attrHandle: {},
        find: {},
        relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
        },
        preFilter: {
            ATTR: function (e) {
                return e[1] = e[1].replace(Nt, Et), e[3] = (e[3] || e[4] || e[5] || "").replace(Nt, Et), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || St.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && St.error(e[0]), e
            }, PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && gt.test(n) && (t = De(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function (e) {
                var t = e.replace(Nt, Et).toLowerCase();
                return "*" === e ? function () {
                    return !0
                } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                }
            }, CLASS: function (e) {
                var t = Xe[e + " "];
                return t || (t = new RegExp("(^|" + at + ")" + e + "(" + at + "|$)")) && Xe(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Qe && e.getAttribute("class") || "")
                })
            }, ATTR: function (n, r, o) {
                return function (e) {
                    var t = St.attr(e, n);
                    return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                }
            }, CHILD: function (m, e, t, g, p) {
                var h = "nth" !== m.slice(0, 3), v = "last" !== m.slice(-4), b = "of-type" === e;
                return 1 === g && 0 === p ? function (e) {
                    return !!e.parentNode
                } : function (e, t, n) {
                    var r, o, i, a, u, s, c = h !== v ? "nextSibling" : "previousSibling", l = e.parentNode,
                        f = b && e.nodeName.toLowerCase(), d = !n && !b;
                    if (l) {
                        if (h) {
                            for (; c;) {
                                for (i = e; i = i[c];) if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                s = c = "only" === m && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [v ? l.firstChild : l.lastChild], v && d) {
                            for (u = (r = (o = l[qe] || (l[qe] = {}))[m] || [])[0] === We && r[1], a = r[0] === We && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();) if (1 === i.nodeType && ++a && i === e) {
                                o[m] = [We, u, a];
                                break
                            }
                        } else if (d && (r = (e[qe] || (e[qe] = {}))[m]) && r[0] === We) a = r[1]; else for (; (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[qe] || (i[qe] = {}))[m] = [We, a]), i !== e));) ;
                        return (a -= p) === g || a % g == 0 && 0 <= a / g
                    }
                }
            }, PSEUDO: function (e, i) {
                var t, a = Ae.pseudos[e] || Ae.setFilters[e.toLowerCase()] || St.error("unsupported pseudo: " + e);
                return a[qe] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Ae.setFilters.hasOwnProperty(e.toLowerCase()) ? Tt(function (e, t) {
                    for (var n, r = a(e, i), o = r.length; o--;) e[n = it.call(e, r[o])] = !(t[n] = r[o])
                }) : function (e) {
                    return a(e, 0, t)
                }) : a
            }
        },
        pseudos: {
            not: Tt(function (e) {
                var r = [], o = [], u = Be(e.replace(lt, "$1"));
                return u[qe] ? Tt(function (e, t, n, r) {
                    for (var o, i = u(e, null, r, []), a = e.length; a--;) (o = i[a]) && (e[a] = !(t[a] = o))
                }) : function (e, t, n) {
                    return r[0] = e, u(r, null, n, o), !o.pop()
                }
            }), has: Tt(function (t) {
                return function (e) {
                    return 0 < St(t, e).length
                }
            }), contains: Tt(function (t) {
                return t = t.replace(Nt, Et), function (e) {
                    return -1 < (e.textContent || e.innerText || _e(e)).indexOf(t)
                }
            }), lang: Tt(function (n) {
                return pt.test(n || "") || St.error("unsupported lang: " + n), n = n.replace(Nt, Et).toLowerCase(), function (e) {
                    var t;
                    do {
                        if (t = Ue ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                }
            }), target: function (e) {
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id
            }, root: function (e) {
                return e === ze
            }, focus: function (e) {
                return e === Fe.activeElement && (!Fe.hasFocus || Fe.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
                return !1 === e.disabled
            }, disabled: function (e) {
                return !0 === e.disabled
            }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0
            }, parent: function (e) {
                return !Ae.pseudos.empty(e)
            }, header: function (e) {
                return bt.test(e.nodeName)
            }, input: function (e) {
                return vt.test(e.nodeName)
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            }, first: Dt(function () {
                return [0]
            }), last: Dt(function (e, t) {
                return [t - 1]
            }), eq: Dt(function (e, t, n) {
                return [n < 0 ? n + t : n]
            }), even: Dt(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
            }), odd: Dt(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
            }), lt: Dt(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                return e
            }), gt: Dt(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
            })
        }
    }).pseudos.nth = Ae.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) Ae.pseudos[ke] = _t(ke);
    for (ke in{submit: !0, reset: !0}) Ae.pseudos[ke] = Rt(ke);

    function Ot() {
    }

    function Pt(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function Lt(a, e, t) {
        var u = e.dir, s = t && "parentNode" === u, c = Ke++;
        return e.first ? function (e, t, n) {
            for (; e = e[u];) if (1 === e.nodeType || s) return a(e, t, n)
        } : function (e, t, n) {
            var r, o, i = [We, c];
            if (n) {
                for (; e = e[u];) if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else for (; e = e[u];) if (1 === e.nodeType || s) {
                if ((r = (o = e[qe] || (e[qe] = {}))[u]) && r[0] === We && r[1] === c) return i[2] = r[2];
                if ((o[u] = i)[2] = a(e, t, n)) return !0
            }
        }
    }

    function It(o) {
        return 1 < o.length ? function (e, t, n) {
            for (var r = o.length; r--;) if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function Mt(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) (i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function Ft(m, g, p, h, v, e) {
        return h && !h[qe] && (h = Ft(h)), v && !v[qe] && (v = Ft(v, e)), Tt(function (e, t, n, r) {
            var o, i, a, u = [], s = [], c = t.length, l = e || function (e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) St(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []), f = !m || !e && g ? l : Mt(l, u, m, n, r),
                d = p ? v || (e ? m : c || h) ? [] : t : f;
            if (p && p(f, d, n, r), h) for (o = Mt(d, s), h(o, [], n, r), i = o.length; i--;) (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;) (a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;) (a = d[i]) && -1 < (o = v ? it.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = Mt(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : rt.apply(t, d)
        })
    }

    function zt(e) {
        for (var r, t, n, o = e.length, i = Ae.relative[e[0].type], a = i || Ae.relative[" "], u = i ? 1 : 0, s = Lt(function (e) {
            return e === r
        }, a, !0), c = Lt(function (e) {
            return -1 < it.call(r, e)
        }, a, !0), l = [function (e, t, n) {
            return !i && (n || t !== Pe) || ((r = t).nodeType ? s(e, t, n) : c(e, t, n))
        }]; u < o; u++) if (t = Ae.relative[e[u].type]) l = [Lt(It(l), t)]; else {
            if ((t = Ae.filter[e[u].type].apply(null, e[u].matches))[qe]) {
                for (n = ++u; n < o && !Ae.relative[e[n].type]; n++) ;
                return Ft(1 < u && It(l), 1 < u && Pt(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(lt, "$1"), t, u < n && zt(e.slice(u, n)), n < o && zt(e = e.slice(n)), n < o && Pt(e))
            }
            l.push(t)
        }
        return It(l)
    }

    Ot.prototype = Ae.filters = Ae.pseudos, Ae.setFilters = new Ot, De = St.tokenize = function (e, t) {
        var n, r, o, i, a, u, s, c = Ye[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = Ae.preFilter; a;) {
            for (i in n && !(r = ft.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = dt.exec(a)) && (n = r.shift(), o.push({
                value: n,
                type: r[0].replace(lt, " ")
            }), a = a.slice(n.length)), Ae.filter) !(r = ht[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length));
            if (!n) break
        }
        return t ? a.length : a ? St.error(e) : Ye(e, u).slice(0)
    }, Be = St.compile = function (e, t) {
        var n, h, v, b, y, r, o = [], i = [], a = Ge[e + " "];
        if (!a) {
            for (t || (t = De(e)), n = t.length; n--;) (a = zt(t[n]))[qe] ? o.push(a) : i.push(a);
            (a = Ge(e, (h = i, b = 0 < (v = o).length, y = 0 < h.length, r = function (e, t, n, r, o) {
                var i, a, u, s = 0, c = "0", l = e && [], f = [], d = Pe, m = e || y && Ae.find.TAG("*", o),
                    g = We += null == d ? 1 : Math.random() || .1, p = m.length;
                for (o && (Pe = t !== Fe && t); c !== p && null != (i = m[c]); c++) {
                    if (y && i) {
                        for (a = 0; u = h[a++];) if (u(i, t, n)) {
                            r.push(i);
                            break
                        }
                        o && (We = g)
                    }
                    b && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, b && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s) for (; c--;) l[c] || f[c] || (f[c] = tt.call(r));
                        f = Mt(f)
                    }
                    rt.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && St.uniqueSort(r)
                }
                return o && (We = g, Pe = d), l
            }, b ? Tt(r) : r))).selector = e
        }
        return a
    }, Oe = St.select = function (e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e, l = !r && De(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Te.getById && 9 === t.nodeType && Ue && Ae.relative[i[1].type]) {
                if (!(t = (Ae.find.ID(a.matches[0].replace(Nt, Et), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = ht.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Ae.relative[u = a.type]);) if ((s = Ae.find[u]) && (r = s(a.matches[0].replace(Nt, Et), xt.test(i[0].type) && Bt(t.parentNode) || t))) {
                if (i.splice(o, 1), !(e = r.length && Pt(i))) return rt.apply(n, r), n;
                break
            }
        }
        return (c || Be(e, l))(r, t, !Ue, n, xt.test(e) && Bt(t.parentNode) || t), n
    }, Te.sortStable = qe.split("").sort(Je).join("") === qe, Te.detectDuplicates = !!Ie, Me(), Te.sortDetached = !0;
    var Ut = Array.isArray, Vt = function (e, t, n) {
            var r, o;
            if (!e) return 0;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++) if (!1 === t.call(n, e[r], r, e)) return 0
            } else for (r in e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
            return 1
        }, Ht = function (e, t, n) {
            var r, o;
            for (r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
            return -1
        }, jt = {
            isArray: Ut, toArray: function (e) {
                var t, n, r = e;
                if (!Ut(e)) for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r
            }, each: Vt, map: function (n, r) {
                var o = [];
                return Vt(n, function (e, t) {
                    o.push(r(e, t, n))
                }), o
            }, filter: function (n, r) {
                var o = [];
                return Vt(n, function (e, t) {
                    r && !r(e, t, n) || o.push(e)
                }), o
            }, indexOf: function (e, t) {
                var n, r;
                if (e) for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            }, reduce: function (e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o);
                return n
            }, findIndex: Ht, find: function (e, t, n) {
                var r = Ht(e, t, n);
                return -1 !== r ? e[r] : undefined
            }, last: function (e) {
                return e[e.length - 1]
            }
        }, qt = /^\s*|\s*$/g, $t = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(qt, "")
        }, Wt = function (e, t) {
            return t ? !("array" !== t || !jt.isArray(e)) || typeof e === t : e !== undefined
        }, Kt = function (e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), jt.each(e, function (e, t) {
                if (!1 === n.call(o, e, t, r)) return !1;
                Kt(e, n, r, o)
            }))
        }, Xt = {
            trim: $t, isArray: jt.isArray, is: Wt, toArray: jt.toArray, makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            }, each: jt.each, map: jt.map, grep: jt.filter, inArray: jt.indexOf, hasOwn: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, extend: function (e, t) {
                for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                var u, s = arguments;
                for (n = 1, r = s.length; n < r; n++) for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
                return e
            }, create: function (e, t, n) {
                var r, o, i, a, u, s = this, c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) {
                    if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function () {
                    }, c = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = c ? function () {
                        return r[a].apply(this, arguments)
                    } : function () {
                        return this.parent = r[a], u.apply(this, arguments)
                    }, o[i].prototype[i] = o[i], s.each(r, function (e, t) {
                        o[i].prototype[t] = r[t]
                    }), s.each(t, function (e, t) {
                        r[t] ? o[i].prototype[t] = function () {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== i && (o[i].prototype[t] = e)
                    })), s.each(t["static"], function (e, t) {
                        o[i][t] = e
                    })
                }
            }, walk: Kt, createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            }, resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++) ;
                return t
            }, explode: function (e, t) {
                return !e || Wt(e, "array") ? e : jt.map(e.split(t || ","), $t)
            }, _addCacheSuffix: function (e) {
                var t = fe.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        }, Yt = document, Gt = Array.prototype.push, Jt = Array.prototype.slice,
        Qt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Zt = Se.Event, en = Xt.makeMap("children,contents,next,prev"),
        tn = function (e) {
            return void 0 !== e
        }, nn = function (e) {
            return "string" == typeof e
        }, rn = function (e, t) {
            var n, r, o;
            for (o = (t = t || Yt).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r);
            return n
        }, on = function (e, t, n, r) {
            var o;
            if (nn(t)) t = rn(t, yn(e[0])); else if (t.length && !t.nodeType) {
                if (t = gn.makeArray(t), r) for (o = t.length - 1; 0 <= o; o--) on(e, t[o], n, r); else for (o = 0; o < t.length; o++) on(e, t[o], n, r);
                return e
            }
            if (t.nodeType) for (o = e.length; o--;) n.call(e[o], t);
            return e
        }, an = function (e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }, un = function (e, t, n) {
            var r, o;
            return t = gn(t)[0], e.each(function () {
                var e = this;
                n && r === e.parentNode || (r = e.parentNode, o = t.cloneNode(!1), e.parentNode.insertBefore(o, e)), o.appendChild(e)
            }), e
        }, sn = Xt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        cn = Xt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        ln = {"for": "htmlFor", "class": "className", readonly: "readOnly"}, fn = {"float": "cssFloat"}, dn = {},
        mn = {}, gn = function (e, t) {
            return new gn.fn.init(e, t)
        }, pn = /^\s*|\s*$/g, hn = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(pn, "")
        }, vn = function (e, t) {
            var n, r, o, i;
            if (e) if ((n = e.length) === undefined) {
                for (r in e) if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
            } else for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++) ;
            return e
        }, bn = function (e, n) {
            var r = [];
            return vn(e, function (e, t) {
                n(t, e) && r.push(t)
            }), r
        }, yn = function (e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Yt
        };
    gn.fn = gn.prototype = {
        constructor: gn, selector: "", context: null, length: 0, init: function (e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t; else {
                if (t) return gn(e).attr(t);
                o.context = t = document
            }
            if (nn(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Qt.exec(e))) return gn(t).find(e);
                if (n[1]) for (r = rn(e, yn(t)).firstChild; r;) Gt.call(o, r), r = r.nextSibling; else {
                    if (!(r = yn(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        }, toArray: function () {
            return Xt.toArray(this)
        }, add: function (e, t) {
            var n, r, o = this;
            if (nn(e)) return o.add(gn(e));
            if (!1 !== t) for (n = gn.unique(o.toArray().concat(gn.makeArray(e))), o.length = n.length, r = 0; r < n.length; r++) o[r] = n[r]; else Gt.apply(o, gn.makeArray(e));
            return o
        }, attr: function (t, n) {
            var e, r = this;
            if ("object" == typeof t) vn(t, function (e, t) {
                r.attr(e, t)
            }); else {
                if (!tn(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = dn[t]) && e.get) return e.get(r[0], t);
                        if (cn[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function () {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = dn[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        }, removeAttr: function (e) {
            return this.attr(e, null)
        }, prop: function (e, t) {
            var n = this;
            if ("object" == typeof(e = ln[e] || e)) vn(e, function (e, t) {
                n.prop(e, t)
            }); else {
                if (!tn(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        }, css: function (n, r) {
            var e, o, i = this, t = function (e) {
                return e.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase()
                })
            }, a = function (e) {
                return e.replace(/[A-Z]/g, function (e) {
                    return "-" + e
                })
            };
            if ("object" == typeof n) vn(n, function (e, t) {
                i.css(e, t)
            }); else if (tn(r)) n = t(n), "number" != typeof r || sn[n] || (r = r.toString() + "px"), i.each(function () {
                var e = this.style;
                if ((o = mn[n]) && o.set) o.set(this, r); else {
                    try {
                        this.style[fn[n] || n] = r
                    } catch (t) {
                    }
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            }); else {
                if (e = i[0], (o = mn[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        }, remove: function () {
            for (var e, t = this.length; t--;) e = this[t], Zt.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        }, empty: function () {
            for (var e, t = this.length; t--;) for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        }, html: function (e) {
            var t, n = this;
            if (tn(e)) {
                t = n.length;
                try {
                    for (; t--;) n[t].innerHTML = e
                } catch (r) {
                    gn(n[t]).empty().append(e)
                }
                return n
            }
            return n[0] ? n[0].innerHTML : ""
        }, text: function (e) {
            var t, n = this;
            if (tn(e)) {
                for (t = n.length; t--;) "innerText" in n[t] ? n[t].innerText = e : n[0].textContent = e;
                return n
            }
            return n[0] ? n[0].innerText || n[0].textContent : ""
        }, append: function () {
            return on(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return on(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        }, before: function () {
            return this[0] && this[0].parentNode ? on(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        }, after: function () {
            return this[0] && this[0].parentNode ? on(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        }, appendTo: function (e) {
            return gn(e).append(this), this
        }, prependTo: function (e) {
            return gn(e).prepend(this), this
        }, replaceWith: function (e) {
            return this.before(e).remove()
        }, wrap: function (e) {
            return un(this, e)
        }, wrapAll: function (e) {
            return un(this, e, !0)
        }, wrapInner: function (e) {
            return this.each(function () {
                gn(this).contents().wrapAll(e)
            }), this
        }, unwrap: function () {
            return this.parent().each(function () {
                gn(this).replaceWith(this.childNodes)
            })
        }, clone: function () {
            var e = [];
            return this.each(function () {
                e.push(this.cloneNode(!0))
            }), gn(e)
        }, addClass: function (e) {
            return this.toggleClass(e, !0)
        }, removeClass: function (e) {
            return this.toggleClass(e, !1)
        }, toggleClass: function (o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? vn(o.split(" "), function () {
                e.toggleClass(this, i)
            }) : e.each(function (e, t) {
                var n, r;
                (r = an(t, o)) !== i && (n = t.className, r ? t.className = hn((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        }, hasClass: function (e) {
            return an(this[0], e)
        }, each: function (e) {
            return vn(this, e)
        }, on: function (e, t) {
            return this.each(function () {
                Zt.bind(this, e, t)
            })
        }, off: function (e, t) {
            return this.each(function () {
                Zt.unbind(this, e, t)
            })
        }, trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? Zt.fire(this, e.type, e) : Zt.fire(this, e)
            })
        }, show: function () {
            return this.css("display", "")
        }, hide: function () {
            return this.css("display", "none")
        }, slice: function () {
            return new gn(Jt.apply(this, arguments))
        }, eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, find: function (e) {
            var t, n, r = [];
            for (t = 0, n = this.length; t < n; t++) gn.find(e, this[t], r);
            return gn(r)
        }, filter: function (n) {
            return gn("function" == typeof n ? bn(this.toArray(), function (e, t) {
                return n(t, e)
            }) : gn.filter(n, this.toArray()))
        }, closest: function (n) {
            var r = [];
            return n instanceof gn && (n = n[0]), this.each(function (e, t) {
                for (; t;) {
                    if ("string" == typeof n && gn(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), gn(r)
        }, offset: function (e) {
            var t, n, r, o, i = 0, a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        }, push: Gt, sort: [].sort, splice: [].splice
    }, Xt.extend(gn, {
        extend: Xt.extend,
        makeArray: function (e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : Xt.toArray(e);
            var t
        },
        inArray: function (e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;) if (t[n] === e) return n;
            return -1
        },
        isArray: Xt.isArray,
        each: vn,
        trim: hn,
        grep: bn,
        find: St,
        expr: St.selectors,
        unique: St.uniqueSort,
        text: St.getText,
        contains: St.contains,
        filter: function (e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? gn.find.matchesSelector(t[0], e) ? [t[0]] : [] : gn.find.matches(e, t)
        }
    });
    var Cn = function (e, t, n) {
        var r = [], o = e[t];
        for ("string" != typeof n && n instanceof gn && (n = n[0]); o && 9 !== o.nodeType;) {
            if (n !== undefined) {
                if (o === n) break;
                if ("string" == typeof n && gn(o).is(n)) break
            }
            1 === o.nodeType && r.push(o), o = o[t]
        }
        return r
    }, xn = function (e, t, n, r) {
        var o = [];
        for (r instanceof gn && (r = r[0]); e; e = e[t]) if (!n || e.nodeType === n) {
            if (r !== undefined) {
                if (e === r) break;
                if ("string" == typeof r && gn(e).is(r)) break
            }
            o.push(e)
        }
        return o
    }, wn = function (e, t, n) {
        for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
        return null
    };
    vn({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Cn(e, "parentNode")
        }, next: function (e) {
            return wn(e, "nextSibling", 1)
        }, prev: function (e) {
            return wn(e, "previousSibling", 1)
        }, children: function (e) {
            return xn(e.firstChild, "nextSibling", 1)
        }, contents: function (e) {
            return Xt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function (e, r) {
        gn.fn[e] = function (t) {
            var n = [];
            return this.each(function () {
                var e = r.call(n, this, t, n);
                e && (gn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (en[e] || (n = gn.unique(n)), 0 === e.indexOf("parents") && (n = n.reverse())), n = gn(n), t ? n.filter(t) : n
        }
    }), vn({
        parentsUntil: function (e, t) {
            return Cn(e, "parentNode", t)
        }, nextUntil: function (e, t) {
            return xn(e, "nextSibling", 1, t).slice(1)
        }, prevUntil: function (e, t) {
            return xn(e, "previousSibling", 1, t).slice(1)
        }
    }, function (r, o) {
        gn.fn[r] = function (t, e) {
            var n = [];
            return this.each(function () {
                var e = o.call(n, this, t, n);
                e && (gn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = gn.unique(n), 0 !== r.indexOf("parents") && "prevUntil" !== r || (n = n.reverse())), n = gn(n), e ? n.filter(e) : n
        }
    }), gn.fn.is = function (e) {
        return !!e && 0 < this.filter(e).length
    }, gn.fn.init.prototype = gn.fn, gn.overrideDefaults = function (n) {
        var r, o = function (e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t || (t = r.context), new o.fn.init(e, t)
        };
        return gn.extend(o, this), o
    };
    var Nn = function (n, r, e) {
        vn(e, function (e, t) {
            n[e] = n[e] || {}, n[e][r] = t
        })
    };
    fe.ie && fe.ie < 8 && (Nn(dn, "get", {
        maxlength: function (e) {
            var t = e.maxLength;
            return 2147483647 === t ? undefined : t
        }, size: function (e) {
            var t = e.size;
            return 20 === t ? undefined : t
        }, "class": function (e) {
            return e.className
        }, style: function (e) {
            var t = e.style.cssText;
            return 0 === t.length ? undefined : t
        }
    }), Nn(dn, "set", {
        "class": function (e, t) {
            e.className = t
        }, style: function (e, t) {
            e.style.cssText = t
        }
    })), fe.ie && fe.ie < 9 && (fn["float"] = "styleFloat", Nn(mn, "set", {
        opacity: function (e, t) {
            var n = e.style;
            null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
        }
    })), gn.attrHooks = dn, gn.cssHooks = mn;
    var En, Sn, kn, Tn = function (e, t) {
            var n = function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {major: 0, minor: 0};
            var r = function (e) {
                return Number(t.replace(n, "$" + e))
            };
            return _n(r(1), r(2))
        }, An = function () {
            return _n(0, 0)
        }, _n = function (e, t) {
            return {major: e, minor: t}
        }, Rn = {
            nu: _n, detect: function (e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? An() : Tn(e, n)
            }, unknown: An
        }, Dn = "Firefox", Bn = function (e, t) {
            return function () {
                return t === e
            }
        }, On = function (e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isEdge: Bn("Edge", t),
                isChrome: Bn("Chrome", t),
                isIE: Bn("IE", t),
                isOpera: Bn("Opera", t),
                isFirefox: Bn(Dn, t),
                isSafari: Bn("Safari", t)
            }
        }, Pn = {
            unknown: function () {
                return On({current: undefined, version: Rn.unknown()})
            },
            nu: On,
            edge: j("Edge"),
            chrome: j("Chrome"),
            ie: j("IE"),
            opera: j("Opera"),
            firefox: j(Dn),
            safari: j("Safari")
        }, Ln = "Windows", In = "Android", Mn = "Solaris", Fn = "FreeBSD", zn = function (e, t) {
            return function () {
                return t === e
            }
        }, Un = function (e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isWindows: zn(Ln, t),
                isiOS: zn("iOS", t),
                isAndroid: zn(In, t),
                isOSX: zn("OSX", t),
                isLinux: zn("Linux", t),
                isSolaris: zn(Mn, t),
                isFreeBSD: zn(Fn, t)
            }
        }, Vn = {
            unknown: function () {
                return Un({current: undefined, version: Rn.unknown()})
            },
            nu: Un,
            windows: j(Ln),
            ios: j("iOS"),
            android: j(In),
            linux: j("Linux"),
            osx: j("OSX"),
            solaris: j(Mn),
            freebsd: j(Fn)
        }, Hn = function (e, t) {
            var n = String(t).toLowerCase();
            return U(e, function (e) {
                return e.search(n)
            })
        }, jn = function (e, n) {
            return Hn(e, n).map(function (e) {
                var t = Rn.detect(e.versionRegexes, n);
                return {current: e.name, version: t}
            })
        }, qn = function (e, n) {
            return Hn(e, n).map(function (e) {
                var t = Rn.detect(e.versionRegexes, n);
                return {current: e.name, version: t}
            })
        }, $n = function (e, t) {
            return -1 !== e.indexOf(t)
        }, Wn = function (e) {
            return e.replace(/^\s+|\s+$/g, "")
        }, Kn = function (e) {
            return e.replace(/\s+$/g, "")
        }, Xn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Yn = function (t) {
            return function (e) {
                return $n(e, t)
            }
        }, Gn = [{
            name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: function (e) {
                return $n(e, "edge/") && $n(e, "chrome") && $n(e, "safari") && $n(e, "applewebkit")
            }
        }, {
            name: "Chrome", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Xn], search: function (e) {
                return $n(e, "chrome") && !$n(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function (e) {
                return $n(e, "msie") || $n(e, "trident")
            }
        }, {name: "Opera", versionRegexes: [Xn, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Yn("opera")}, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Yn("firefox")
        }, {
            name: "Safari", versionRegexes: [Xn, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: function (e) {
                return ($n(e, "safari") || $n(e, "mobile/")) && $n(e, "applewebkit")
            }
        }], Jn = [{
            name: "Windows",
            search: Yn("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function (e) {
                return $n(e, "iphone") || $n(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {name: "Android", search: Yn("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]}, {
            name: "OSX",
            search: Yn("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {name: "Linux", search: Yn("linux"), versionRegexes: []}, {
            name: "Solaris",
            search: Yn("sunos"),
            versionRegexes: []
        }, {name: "FreeBSD", search: Yn("freebsd"), versionRegexes: []}], Qn = {browsers: j(Gn), oses: j(Jn)},
        Zn = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = Qn.browsers(), m = Qn.oses(), g = jn(d, e).fold(Pn.unknown, Pn.nu),
                p = qn(m, e).fold(Vn.unknown, Vn.nu);
            return {
                browser: g,
                os: p,
                deviceType: (n = g, r = e, o = (t = p).isiOS() && !0 === /ipad/i.test(r), i = t.isiOS() && !o, a = t.isAndroid() && 3 === t.version.major, u = t.isAndroid() && 4 === t.version.major, s = o || a || u && !0 === /mobile/i.test(r), c = t.isiOS() || t.isAndroid(), l = c && !s, f = n.isSafari() && t.isiOS() && !1 === /safari/i.test(r), {
                    isiPad: j(o),
                    isiPhone: j(i),
                    isTablet: j(s),
                    isPhone: j(l),
                    isTouch: j(c),
                    isAndroid: t.isAndroid,
                    isiOS: t.isiOS,
                    isWebView: j(f)
                })
            }
        }, er = {
            detect: (En = function () {
                var e = navigator.userAgent;
                return Zn(e)
            }, kn = !1, function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return kn || (kn = !0, Sn = En.apply(null, e)), Sn
            })
        }, tr = function (e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {dom: j(e)}
        }, nr = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), "HTML must have a single root node";
                return tr(n.childNodes[0])
            }, fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return tr(n)
            }, fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return tr(n)
            }, fromDom: tr, fromPoint: function (e, t, n) {
                var r = e.dom();
                return A.from(r.elementFromPoint(t, n)).map(tr)
            }
        }, rr = (Node.ATTRIBUTE_NODE, Node.CDATA_SECTION_NODE, Node.COMMENT_NODE, Node.DOCUMENT_NODE),
        or = (Node.DOCUMENT_TYPE_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.ELEMENT_NODE), ir = Node.TEXT_NODE,
        ar = (Node.PROCESSING_INSTRUCTION_NODE, Node.ENTITY_REFERENCE_NODE, Node.ENTITY_NODE, Node.NOTATION_NODE, function (e) {
            return e.dom().nodeName.toLowerCase()
        }), ur = function (t) {
            return function (e) {
                return e.dom().nodeType === t
            }
        }, sr = ur(or), cr = ur(ir), lr = Object.keys, fr = Object.hasOwnProperty, dr = function (e, t) {
            for (var n = lr(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e)
            }
        }, mr = function (r, o) {
            var i = {};
            return dr(r, function (e, t) {
                var n = o(e, t, r);
                i[n.k] = n.v
            }), i
        }, gr = function (e, t, n) {
            if (!(T(n) || B(n) || P(n))) throw console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        }, pr = function (e, t, n) {
            gr(e.dom(), t, n)
        }, hr = function (e, t) {
            var n = e.dom();
            dr(t, function (e, t) {
                gr(n, t, e)
            })
        }, vr = function (e, t) {
            var n = e.dom().getAttribute(t);
            return null === n ? undefined : n
        }, br = function (e, t) {
            e.dom().removeAttribute(t)
        }, yr = function (e) {
            return e.style !== undefined
        }, Cr = function (e, t) {
            var n = e.dom();
            dr(t, function (e, t) {
                !function (e, t, n) {
                    if (!T(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
                    yr(e) && e.style.setProperty(t, n)
                }(n, t, e)
            })
        }, xr = function (e, t) {
            var n, r, o = e.dom(), i = window.getComputedStyle(o).getPropertyValue(t),
                a = "" !== i || (r = cr(n = e) ? n.dom().parentNode : n.dom()) !== undefined && null !== r && r.ownerDocument.body.contains(r) ? i : wr(o, t);
            return null === a ? undefined : a
        }, wr = function (e, t) {
            return yr(e) ? e.style.getPropertyValue(t) : ""
        }, Nr = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function () {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments");
                var r = {};
                return M(t, function (e, t) {
                    r[e] = j(n[t])
                }), r
            }
        }, Er = function (e, t) {
            for (var n = [], r = function (e) {
                return n.push(e), t(e)
            }, o = t(e); (o = o.bind(r)).isSome();) ;
            return n
        }, Sr = function () {
            return oe.getOrDie("Node")
        }, kr = function (e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n)
        }, Tr = function (e, t) {
            return kr(e, t, Sr().DOCUMENT_POSITION_CONTAINED_BY)
        }, Ar = or, _r = rr, Rr = function (e, t) {
            var n = e.dom();
            if (n.nodeType !== Ar) return !1;
            if (n.matches !== undefined) return n.matches(t);
            if (n.msMatchesSelector !== undefined) return n.msMatchesSelector(t);
            if (n.webkitMatchesSelector !== undefined) return n.webkitMatchesSelector(t);
            if (n.mozMatchesSelector !== undefined) return n.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors")
        }, Dr = function (e) {
            return e.nodeType !== Ar && e.nodeType !== _r || 0 === e.childElementCount
        }, Br = function (e, t) {
            return e.dom() === t.dom()
        }, Or = er.detect().browser.isIE() ? function (e, t) {
            return Tr(e.dom(), t.dom())
        } : function (e, t) {
            var n = e.dom(), r = t.dom();
            return n !== r && n.contains(r)
        }, Pr = function (e) {
            return nr.fromDom(e.dom().ownerDocument)
        }, Lr = function (e) {
            var t = e.dom();
            return A.from(t.parentNode).map(nr.fromDom)
        }, Ir = function (e) {
            var t = e.dom();
            return A.from(t.previousSibling).map(nr.fromDom)
        }, Mr = function (e) {
            var t = e.dom();
            return A.from(t.nextSibling).map(nr.fromDom)
        }, Fr = function (e) {
            return t = Er(e, Ir), (n = J.call(t, 0)).reverse(), n;
            var t, n
        }, zr = function (e) {
            var t = e.dom();
            return $(t.childNodes, nr.fromDom)
        }, Ur = function (e, t) {
            var n = e.dom().childNodes;
            return A.from(n[t]).map(nr.fromDom)
        }, Vr = function (e) {
            return Ur(e, e.dom().childNodes.length - 1)
        }, Hr = (Nr("element", "offset"), er.detect().browser), jr = function (e) {
            return U(e, sr)
        }, qr = function (e) {
            return Hr.isFirefox() && "table" === ar(e) ? jr(zr(e)).filter(function (e) {
                return "caption" === ar(e)
            }).bind(function (o) {
                return jr((e = o, Er(e, Mr))).map(function (e) {
                    var t = e.dom().offsetTop, n = o.dom().offsetTop, r = o.dom().offsetHeight;
                    return t <= n ? -r : 0
                });
                var e
            }).getOr(0) : 0
        }, $r = {
            getPos: function (e, t, n) {
                var r, o, i = 0, a = 0, u = e.ownerDocument;
                if (n = n || e, t) {
                    if (n === e && t.getBoundingClientRect && "static" === xr(nr.fromDom(e), "position")) return {
                        x: i = (o = t.getBoundingClientRect()).left + (u.documentElement.scrollLeft || e.scrollLeft) - u.documentElement.clientLeft,
                        y: a = o.top + (u.documentElement.scrollTop || e.scrollTop) - u.documentElement.clientTop
                    };
                    for (r = t; r && r !== n && r.nodeType;) i += r.offsetLeft || 0, a += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r !== n && r.nodeType;) i -= r.scrollLeft || 0, a -= r.scrollTop || 0, r = r.parentNode;
                    a += qr(nr.fromDom(t))
                }
                return {x: i, y: a}
            }
        }, Wr = function (e) {
            var n = A.none(), t = [], r = function (e) {
                o() ? a(e) : t.push(e)
            }, o = function () {
                return n.isSome()
            }, i = function (e) {
                M(e, a)
            }, a = function (t) {
                n.each(function (e) {
                    setTimeout(function () {
                        t(e)
                    }, 0)
                })
            };
            return e(function (e) {
                n = A.some(e), i(t), t = []
            }), {
                get: r, map: function (n) {
                    return Wr(function (t) {
                        r(function (e) {
                            t(n(e))
                        })
                    })
                }, isReady: o
            }
        }, Kr = {
            nu: Wr, pure: function (t) {
                return Wr(function (e) {
                    e(t)
                })
            }
        }, Xr = function (t) {
            var e = function (e) {
                var r;
                t((r = e, function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this;
                    setTimeout(function () {
                        r.apply(n, e)
                    }, 0)
                }))
            }, n = function () {
                return Kr.nu(e)
            };
            return {
                map: function (r) {
                    return Xr(function (n) {
                        e(function (e) {
                            var t = r(e);
                            n(t)
                        })
                    })
                }, bind: function (n) {
                    return Xr(function (t) {
                        e(function (e) {
                            n(e).get(t)
                        })
                    })
                }, anonBind: function (n) {
                    return Xr(function (t) {
                        e(function (e) {
                            n.get(t)
                        })
                    })
                }, toLazy: n, toCached: function () {
                    var t = null;
                    return Xr(function (e) {
                        null === t && (t = n()), t.get(e)
                    })
                }, get: e
            }
        }, Yr = {
            nu: Xr, pure: function (t) {
                return Xr(function (e) {
                    e(t)
                })
            }
        }, Gr = function (a, e) {
            return e(function (r) {
                var o = [], i = 0;
                0 === a.length ? r([]) : M(a, function (e, t) {
                    var n;
                    e.get((n = t, function (e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        }, Jr = function (e) {
            return Gr(e, Yr.nu)
        }, Qr = function (n) {
            return {
                is: function (e) {
                    return n === e
                }, isValue: C, isError: y, getOr: j(n), getOrThunk: j(n), getOrDie: j(n), or: function (e) {
                    return Qr(n)
                }, orThunk: function (e) {
                    return Qr(n)
                }, fold: function (e, t) {
                    return t(n)
                }, map: function (e) {
                    return Qr(e(n))
                }, each: function (e) {
                    e(n)
                }, bind: function (e) {
                    return e(n)
                }, exists: function (e) {
                    return e(n)
                }, forall: function (e) {
                    return e(n)
                }, toOption: function () {
                    return A.some(n)
                }
            }
        }, Zr = function (n) {
            return {
                is: y, isValue: y, isError: C, getOr: q, getOrThunk: function (e) {
                    return e()
                }, getOrDie: function () {
                    return e = String(n), function () {
                        throw new Error(e)
                    }();
                    var e
                }, or: function (e) {
                    return e
                }, orThunk: function (e) {
                    return e()
                }, fold: function (e, t) {
                    return e(n)
                }, map: function (e) {
                    return Zr(n)
                }, each: v, bind: function (e) {
                    return Zr(n)
                }, exists: y, forall: C, toOption: A.none
            }
        }, eo = {value: Qr, error: Zr};

    function to(e, u) {
        var t = e, n = function (e, t, n, r) {
            var o, i;
            if (e) {
                if (!r && e[t]) return e[t];
                if (e !== u) {
                    if (o = e[n]) return o;
                    for (i = e.parentNode; i && i !== u; i = i.parentNode) if (o = i[n]) return o
                }
            }
        };
        this.current = function () {
            return t
        }, this.next = function (e) {
            return t = n(t, "firstChild", "nextSibling", e)
        }, this.prev = function (e) {
            return t = n(t, "lastChild", "previousSibling", e)
        }, this.prev2 = function (e) {
            return t = function (e, t, n, r) {
                var o, i, a;
                if (e) {
                    if (o = e[n], u && o === u) return;
                    if (o) {
                        if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                        return o
                    }
                    if ((i = e.parentNode) && i !== u) return i
                }
            }(t, "lastChild", "previousSibling", e)
        }
    }

    var no, ro, oo, io = function (t) {
            var n;
            return function (e) {
                return (n = n || function (e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        n[String(i)] = t(i, r)
                    }
                    return n
                }(t, j(!0))).hasOwnProperty(ar(e))
            }
        }, ao = io(["h1", "h2", "h3", "h4", "h5", "h6"]),
        uo = io(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        so = function (e) {
            return sr(e) && !uo(e)
        }, co = function (e) {
            return sr(e) && "br" === ar(e)
        },
        lo = io(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        fo = io(["ul", "ol", "dl"]), mo = io(["li", "dd", "dt"]),
        go = io(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        po = io(["thead", "tbody", "tfoot"]), ho = io(["td", "th"]), vo = io(["pre", "script", "textarea", "style"]),
        bo = function (t) {
            return function (e) {
                return !!e && e.nodeType === t
            }
        }, yo = bo(1), Co = function (e) {
            var r = e.toLowerCase().split(" ");
            return function (e) {
                var t, n;
                if (e && e.nodeType) for (n = e.nodeName.toLowerCase(), t = 0; t < r.length; t++) if (n === r[t]) return !0;
                return !1
            }
        }, xo = function (t) {
            return function (e) {
                if (yo(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        }, wo = bo(3), No = bo(8), Eo = bo(9), So = Co("br"), ko = xo("true"), To = xo("false"), Ao = {
            isText: wo,
            isElement: yo,
            isComment: No,
            isDocument: Eo,
            isBr: So,
            isContentEditableTrue: ko,
            isContentEditableFalse: To,
            matchNodeNames: Co,
            hasPropValue: function (t, n) {
                return function (e) {
                    return yo(e) && e[t] === n
                }
            },
            hasAttribute: function (t, e) {
                return function (e) {
                    return yo(e) && e.hasAttribute(t)
                }
            },
            hasAttributeValue: function (t, n) {
                return function (e) {
                    return yo(e) && e.getAttribute(t) === n
                }
            },
            matchStyleValues: function (r, e) {
                var o = e.toLowerCase().split(" ");
                return function (e) {
                    var t;
                    if (yo(e)) for (t = 0; t < o.length; t++) {
                        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                        if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                    }
                    return !1
                }
            },
            isBogus: function (e) {
                return yo(e) && e.hasAttribute("data-mce-bogus")
            },
            isBogusAll: function (e) {
                return yo(e) && "all" === e.getAttribute("data-mce-bogus")
            },
            isTable: function (e) {
                return yo(e) && "TABLE" === e.tagName
            }
        }, _o = function (e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }, Ro = function (e, t) {
            var n, r = t.childNodes;
            if (!Ao.isElement(t) || !_o(t)) {
                for (n = r.length - 1; 0 <= n; n--) Ro(e, r[n]);
                if (!1 === Ao.isDocument(t)) {
                    if (Ao.isText(t) && 0 < t.nodeValue.length) {
                        var o = Xt.trim(t.nodeValue).length;
                        if (e.isBlock(t.parentNode) || 0 < o) return;
                        if (0 === o && (a = (i = t).previousSibling && "SPAN" === i.previousSibling.nodeName, u = i.nextSibling && "SPAN" === i.nextSibling.nodeName, a && u)) return
                    } else if (Ao.isElement(t) && (1 === (r = t.childNodes).length && _o(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || go(nr.fromDom(t)))) return;
                    e.remove(t)
                }
                var i, a, u;
                return t
            }
        }, Do = {trimNode: Ro}, Bo = Xt.makeMap,
        Oo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Po = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Lo = /[<>&\"\']/g,
        Io = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, Mo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
    ro = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"}, oo = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    };
    var Fo = function (e, t) {
        var n, r, o, i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), ro[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
            return i
        }
    };
    no = Fo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
    var zo = function (e, t) {
            return e.replace(t ? Oo : Po, function (e) {
                return ro[e] || e
            })
        }, Uo = function (e, t) {
            return e.replace(t ? Oo : Po, function (e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ro[e] || "&#" + e.charCodeAt(0) + ";"
            })
        }, Vo = function (e, t, n) {
            return n = n || no, e.replace(t ? Oo : Po, function (e) {
                return ro[e] || n[e] || e
            })
        }, Ho = {
            encodeRaw: zo, encodeAllRaw: function (e) {
                return ("" + e).replace(Lo, function (e) {
                    return ro[e] || e
                })
            }, encodeNumeric: Uo, encodeNamed: Vo, getEncodeFunc: function (e, t) {
                var n = Fo(t) || no, r = Bo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function (e, t) {
                    return e.replace(t ? Oo : Po, function (e) {
                        return ro[e] !== undefined ? ro[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function (e, t) {
                    return Vo(e, t, n)
                } : Vo : r.numeric ? Uo : zo
            }, decode: function (e) {
                return e.replace(Io, function (e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : Mo[t] || String.fromCharCode(t) : oo[e] || no[e] || (n = e, (r = nr.fromTag("div").dom()).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        }, jo = {}, qo = {}, $o = Xt.makeMap, Wo = Xt.each, Ko = Xt.extend, Xo = Xt.explode, Yo = Xt.inArray,
        Go = function (e, t) {
            return (e = Xt.trim(e)) ? e.split(t || " ") : []
        }, Jo = function (e) {
            var u, t, n, r, o, i, s = {}, a = function (e, t, n) {
                var r, o, i, a = function (e, t) {
                    var n, r, o = {};
                    for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                    return o
                };
                for (t = t || "", "string" == typeof(n = n || []) && (n = Go(n)), r = (e = Go(e)).length; r--;) i = {
                    attributes: a(o = Go([u, t].join(" "))),
                    attributesOrder: o,
                    children: a(n, qo)
                }, s[e[r]] = i
            }, c = function (e, t) {
                var n, r, o, i;
                for (n = (e = Go(e)).length, t = Go(t); n--;) for (r = s[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o])
            };
            return jo[e] ? jo[e] : (u = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), Wo(Go(i), function (e) {
                a(e, "", n)
            }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), Wo(Go(o), function (e) {
                a(e, "", r)
            })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside main header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (c("script", "language xml:space"), c("style", "xml:space"), c("object", "declare classid code codebase codetype archive standby align border hspace vspace"), c("embed", "align name hspace vspace"), c("param", "valuetype type"), c("a", "charset name rev shape coords"), c("br", "clear"), c("applet", "codebase archive code object alt name width height align hspace vspace"), c("img", "name longdesc align border hspace vspace"), c("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), c("font basefont", "size color face"), c("input", "usemap align"), c("select", "onchange"), c("textarea"), c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), c("ul", "type compact"), c("li", "type"), c("ol dl menu dir", "compact"), c("pre", "width xml:space"), c("hr", "align noshade size width"), c("isindex", "prompt"), c("table", "summary width frame rules cellspacing cellpadding align bgcolor"), c("col", "width align char charoff valign"), c("colgroup", "width align char charoff valign"), c("thead", "align char charoff valign"), c("tr", "align char charoff valign bgcolor"), c("th", "axis align char charoff valign nowrap bgcolor width height"), c("form", "accept"), c("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), c("tfoot", "align char charoff valign"), c("tbody", "align char charoff valign"), c("area", "nohref"), c("body", "background bgcolor text link vlink alink")), "html4" !== e && (c("input button select textarea", "autofocus"), c("input textarea", "placeholder"), c("a", "download"), c("link script img", "crossorigin"), c("iframe", "sandbox seamless allowfullscreen")), Wo(Go("a form meter progress dfn"), function (e) {
                s[e] && delete s[e].children[e]
            }), delete s.caption.children.table, delete s.script, jo[e] = s)
        }, Qo = function (e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {"*": e}), Wo(e, function (e, t) {
                r[t] = r[t.toUpperCase()] = "map" === n ? $o(e, /[, ]/) : Xo(e, /[, ]/)
            })), r
        };

    function Zo(i) {
        var e, t, n, r, o, a, u, s, c, l, f, d, m, N = {}, g = {}, E = [], p = {}, h = {}, v = function (e, t, n) {
            var r = i[e];
            return r ? r = $o(r, /[, ]/, $o(r.toUpperCase(), /[, ]/)) : (r = jo[e]) || (r = $o(t, " ", $o(t.toUpperCase(), " ")), r = Ko(r, n), jo[e] = r), r
        };
        n = Jo((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), e = Qo(i.valid_styles), t = Qo(i.invalid_styles, "map"), s = Qo(i.valid_classes, "map"), r = v("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = v("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), a = v("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), u = v("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), l = v("non_empty_elements", "td th iframe video audio object script pre code", a), f = v("move_caret_before_on_enter_elements", "table", l), d = v("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), c = v("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), m = v("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), Wo((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function (e) {
            h[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });
        var S = function (e) {
            return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
        }, b = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y,
                C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                x = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/, w = /[*?+]/;
            if (e) for (e = Go(e, ","), N["@"] && (h = N["@"].attributes, v = N["@"].attributesOrder), t = 0, n = e.length; t < n; t++) if (i = C.exec(e[t])) {
                if (g = i[1], c = i[2], p = i[3], s = i[5], a = {
                        attributes: d = {},
                        attributesOrder: m = []
                    }, "#" === g && (a.paddEmpty = !0), "-" === g && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h) {
                    for (b in h) d[b] = h[b];
                    m.push.apply(m, v)
                }
                if (s) for (r = 0, o = (s = Go(s, "|")).length; r < o; r++) if (i = x.exec(s[r])) {
                    if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), g = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                        delete d[l], m.splice(Yo(m, l), 1);
                        continue
                    }
                    g && ("=" === g && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                        name: l,
                        value: y
                    }), u.defaultValue = y), ":" === g && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                        name: l,
                        value: y
                    }), u.forcedValue = y), "<" === g && (u.validValues = $o(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = S(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                }
                h || "@" !== c || (h = d, v = m), p && (a.outputName = c, N[p] = a), w.test(c) ? (a.pattern = S(c), E.push(a)) : N[c] = a
            }
        }, y = function (e) {
            N = {}, E = [], b(e), Wo(n, function (e, t) {
                g[t] = e.children
            })
        }, C = function (e) {
            var a = /^(~)?(.+)$/;
            e && (jo.text_block_elements = jo.block_elements = null, Wo(Go(e, ","), function (e) {
                var t = a.exec(e), n = "~" === t[1], r = n ? "span" : "div", o = t[2];
                if (g[o] = g[r], p[o] = r, n || (c[o.toUpperCase()] = {}, c[o] = {}), !N[o]) {
                    var i = N[r];
                    delete(i = Ko({}, i)).removeEmptyAttrs, delete i.removeEmpty, N[o] = i
                }
                Wo(g, function (e, t) {
                    e[r] && (g[t] = e = Ko({}, g[t]), e[o] = e[r])
                })
            }))
        }, x = function (e) {
            var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
            jo[i.schema] = null, e && Wo(Go(e, ","), function (e) {
                var t, n, r = o.exec(e);
                r && (n = r[1], t = n ? g[r[2]] : g[r[2]] = {"#comment": {}}, t = g[r[2]], Wo(Go(r[3], "|"), function (e) {
                    "-" === n ? delete t[e] : t[e] = {}
                }))
            })
        }, w = function (e) {
            var t, n = N[e];
            if (n) return n;
            for (t = E.length; t--;) if ((n = E[t]).pattern.test(e)) return n
        };
        return i.valid_elements ? y(i.valid_elements) : (Wo(n, function (e, t) {
            N[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, g[t] = e.children
        }), "html5" !== i.schema && Wo(Go("strong/b em/i"), function (e) {
            e = Go(e, "/"), N[e[1]].outputName = e[0]
        }), Wo(Go("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (e) {
            N[e] && (N[e].removeEmpty = !0)
        }), Wo(Go("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
            N[e].paddEmpty = !0
        }), Wo(Go("span"), function (e) {
            N[e].removeEmptyAttrs = !0
        })), C(i.custom_elements), x(i.valid_children), b(i.extended_valid_elements), x("+ol[ul|ol],+ul[ul|ol]"), Wo({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, function (e, t) {
            N[t] && (N[t].parentsRequired = Go(e))
        }), i.invalid_elements && Wo(Xo(i.invalid_elements), function (e) {
            N[e] && delete N[e]
        }), w("span") || b("span[!data-mce-type|*]"), {
            children: g, elements: N, getValidStyles: function () {
                return e
            }, getValidClasses: function () {
                return s
            }, getBlockElements: function () {
                return c
            }, getInvalidStyles: function () {
                return t
            }, getShortEndedElements: function () {
                return a
            }, getTextBlockElements: function () {
                return d
            }, getTextInlineElements: function () {
                return m
            }, getBoolAttrs: function () {
                return u
            }, getElementRule: w, getSelfClosingElements: function () {
                return o
            }, getNonEmptyElements: function () {
                return l
            }, getMoveCaretBeforeOnEnterElements: function () {
                return f
            }, getWhiteSpaceElements: function () {
                return r
            }, getSpecialElements: function () {
                return h
            }, isValidChild: function (e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            }, isValid: function (e, t) {
                var n, r, o = w(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns) for (r = n.length; r--;) if (n[r].pattern.test(e)) return !0
                }
                return !1
            }, getCustomElements: function () {
                return p
            }, addValidElements: b, setValidElements: y, addCustomElements: C, addValidChildren: x
        }
    }

    var ei = function (e, t, n, r) {
        var o = function (e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
        };
        return "#" + o(t) + o(n) + o(r)
    };

    function ti(y, e) {
        var C, t, c, l, x = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            N = /\s*([^:]+):\s*([^;]+);?/g, E = /\s+$/, S = {}, k = "\ufeff";
        for (y = y || {}, e && (c = e.getValidStyles(), l = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + k).split(" "), C = 0; C < t.length; C++) S[t[C]] = k + C, S[k + C] = t[C];
        return {
            toHex: function (e) {
                return e.replace(x, ei)
            }, parse: function (e) {
                var t, n, r, o, i, a, u, s, c = {}, l = y.url_converter, f = y.url_converter_scope || this,
                    d = function (e, t, n) {
                        var r, o, i, a;
                        if ((r = c[e + "-top" + t]) && (o = c[e + "-right" + t]) && (i = c[e + "-bottom" + t]) && (a = c[e + "-left" + t])) {
                            var u = [r, o, i, a];
                            for (C = u.length - 1; C-- && u[C] === u[C + 1];) ;
                            -1 < C && n || (c[e + t] = -1 === C ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                        }
                    }, m = function (e) {
                        var t, n = c[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--;) if (n[t] !== n[0]) return !1;
                            return c[e] = n[0], !0
                        }
                    }, g = function (e) {
                        return o = !0, S[e]
                    }, p = function (e, t) {
                        return o && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                            return S[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }, h = function (e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    }, v = function (e) {
                        return e.replace(/\\[0-9a-f]+/gi, h)
                    }, b = function (e, t, n, r, o, i) {
                        if (o = o || i) return "'" + (o = p(o)).replace(/\'/g, "\\'") + "'";
                        if (t = p(t || n || r), !y.allow_script_urls) {
                            var a = t.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(a)) return "";
                            if (!y.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                        }
                        return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                    };
                if (e) {
                    for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                        return e.replace(/[;:]/g, g)
                    }); t = N.exec(e);) if (N.lastIndex = t.index + t[0].length, n = t[1].replace(E, "").toLowerCase(), r = t[2].replace(E, ""), n && r) {
                        if (n = v(n), r = v(r), -1 !== n.indexOf(k) || -1 !== n.indexOf('"')) continue;
                        if (!y.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                        "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(x, ei)).replace(w, b), c[n] = o ? p(r, !0) : r
                    }
                    d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                }
                return c
            }, serialize: function (i, e) {
                var t, n, r, o, a, u = "", s = function (e) {
                    var t, n, r, o;
                    if (t = c[e]) for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + o + ";")
                };
                if (e && c) s("*"), s(e); else for (t in i) !(n = i[t]) || l && (r = t, o = e, a = void 0, (a = l["*"]) && a[r] || (a = l[o]) && a[r]) || (u += (0 < u.length ? " " : "") + t + ": " + n + ";");
                return u
            }
        }
    }

    var ni, ri = Xt.each, oi = Xt.grep, ii = fe.ie, ai = /^([a-z0-9],?)+$/i, ui = /^[ \t\r\n]*$/,
        si = function (n, r, o) {
            var e = {}, i = r.keep_values, t = {
                set: function (e, t, n) {
                    r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                }, get: function (e, t) {
                    return e.attr("data-mce-" + t) || e.attr(t)
                }
            };
            return e = {
                style: {
                    set: function (e, t) {
                        null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t)
                    }, get: function (e) {
                        var t = e.attr("data-mce-style") || e.attr("style");
                        return t = n.serialize(n.parse(t), e[0].nodeName)
                    }
                }
            }, i && (e.href = e.src = t), e
        }, ci = function (e, t) {
            var n = t.attr("style"), r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r)
        }, li = function (e, t) {
            var n, r, o = 0;
            if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        };

    function fi(a, u) {
        var s, c = this;
        void 0 === u && (u = {});
        var r = {}, i = window, o = {}, t = 0, e = function (m, g) {
                void 0 === g && (g = {});
                var p, h = 0, v = {};
                p = g.maxLoadTime || 5e3;
                var b = function (e) {
                    m.getElementsByTagName("head")[0].appendChild(e)
                }, n = function (e, t, n) {
                    var o, r, i, a, u = function () {
                        for (var e = a.passed, t = e.length; t--;) e[t]();
                        a.status = 2, a.passed = [], a.failed = []
                    }, s = function () {
                        for (var e = a.failed, t = e.length; t--;) e[t]();
                        a.status = 3, a.passed = [], a.failed = []
                    }, c = function (e, t) {
                        e() || ((new Date).getTime() - i < p ? he.setTimeout(t) : s())
                    }, l = function () {
                        c(function () {
                            for (var e, t, n = m.styleSheets, r = n.length; r--;) if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === o.id) return u(), !0
                        }, l)
                    }, f = function () {
                        c(function () {
                            try {
                                var e = r.sheet.cssRules;
                                return u(), !!e
                            } catch (t) {
                            }
                        }, f)
                    };
                    if (e = Xt._addCacheSuffix(e), v[e] ? a = v[e] : (a = {
                            passed: [],
                            failed: []
                        }, v[e] = a), t && a.passed.push(t), n && a.failed.push(n), 1 !== a.status) if (2 !== a.status) if (3 !== a.status) {
                        if (a.status = 1, (o = m.createElement("link")).rel = "stylesheet", o.type = "text/css", o.id = "u" + h++, o.async = !1, o.defer = !1, i = (new Date).getTime(), g.contentCssCors && (o.crossOrigin = "anonymous"), "onload" in o && !((d = navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(d[1], 10) < 536)) o.onload = l, o.onerror = s; else {
                            if (0 < navigator.userAgent.indexOf("Firefox")) return (r = m.createElement("style")).textContent = '@import "' + e + '"', f(), void b(r);
                            l()
                        }
                        var d;
                        b(o), o.href = e
                    } else s(); else u()
                }, t = function (t) {
                    return Yr.nu(function (e) {
                        n(t, H(e, j(eo.value(t))), H(e, j(eo.error(t))))
                    })
                }, o = function (e) {
                    return e.fold(q, q)
                };
                return {
                    load: n, loadAll: function (e, n, r) {
                        Jr($(e, t)).get(function (e) {
                            var t = W(e, function (e) {
                                return e.isValue()
                            });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o))
                        })
                    }
                }
            }(a, {contentCssCors: u.contentCssCors}), l = [], f = u.schema ? u.schema : Zo({}),
            d = ti({url_converter: u.url_converter, url_converter_scope: u.url_converter_scope}, u.schema),
            m = u.ownEvents ? new Se(u.proxy) : Se.Event, n = f.getBlockElements(),
            g = gn.overrideDefaults(function () {
                return {context: a, element: V.getRoot()}
            }), p = function (e) {
                if (e && a && "string" == typeof e) {
                    var t = a.getElementById(e);
                    return t && t.id !== e ? a.getElementsByName(e)[1] : t
                }
                return e
            }, h = function (e) {
                return "string" == typeof e && (e = p(e)), g(e)
            }, v = function (e, t, n) {
                var r, o, i = h(e);
                return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
            }, b = function (e) {
                var t = p(e);
                return t ? t.attributes : []
            }, y = function (e, t, n) {
                var r, o;
                "" === n && (n = null);
                var i = h(e);
                r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({
                    attrElm: i,
                    attrName: t,
                    attrValue: n
                }))
            }, C = function () {
                return u.root_element || a.body
            }, x = function (e, t) {
                return $r.getPos(a.body, p(e), t)
            }, w = function (e, t, n) {
                var r = h(e);
                return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase()
                })) && (t = fe.ie && fe.ie < 12 ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
            }, N = function (e) {
                var t, n;
                return e = p(e), t = w(e, "width"), n = w(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            }, E = function (e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (ai.test(t)) {
                        var r = t.toLowerCase().split(/,/), o = e.nodeName.toLowerCase();
                        for (n = r.length - 1; 0 <= n; n--) if (r[n] === o) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < St(t, i[0].ownerDocument || i[0], null, i).length
            }, S = function (e, t, n, r) {
                var o, i = [], a = p(e);
                for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), Xt.is(t, "string") && (t = "*" === (o = t) ? function (e) {
                    return 1 === e.nodeType
                } : function (e) {
                    return E(e, o)
                }); a && a !== n && a.nodeType && 9 !== a.nodeType;) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            }, k = function (e, t, n) {
                var r = t;
                if (e) for ("string" == typeof t && (r = function (e) {
                    return E(e, t)
                }), e = e[n]; e; e = e[n]) if ("function" == typeof r && r(e)) return e;
                return null
            }, T = function (e, n, r) {
                var o, t = "string" == typeof e ? p(e) : e;
                if (!t) return !1;
                if (Xt.isArray(t) && (t.length || 0 === t.length)) return o = [], ri(t, function (e, t) {
                    e && ("string" == typeof e && (e = p(e)), o.push(n.call(r, e, t)))
                }), o;
                var i = r || c;
                return n.call(i, t)
            }, A = function (e, t) {
                h(e).each(function (e, n) {
                    ri(t, function (e, t) {
                        y(n, t, e)
                    })
                })
            }, _ = function (e, r) {
                var t = h(e);
                ii ? t.each(function (e, t) {
                    if (!1 !== t.canHaveHTML) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        try {
                            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                        } catch (n) {
                            gn("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                        }
                        return r
                    }
                }) : t.html(r)
            }, R = function (e, n, r, o, i) {
                return T(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return A(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && _(t, o)), i ? t : e.appendChild(t)
                })
            }, D = function (e, t, n) {
                return R(a.createElement(e), e, t, n, !0)
            }, B = Ho.decode, O = Ho.encodeAllRaw, P = function (e, t) {
                var n = h(e);
                return t ? n.each(function () {
                    for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
            }, L = function (e, t, n) {
                h(e).toggleClass(t, n).each(function () {
                    "" === this.className && gn(this).attr("class", null)
                })
            }, I = function (t, e, n) {
                return T(e, function (e) {
                    return Xt.is(e, "array") && (t = t.cloneNode(!0)), n && ri(oi(e.childNodes), function (e) {
                        t.appendChild(e)
                    }), e.parentNode.replaceChild(t, e)
                })
            }, M = function () {
                return a.createRange()
            }, F = function (e, t, n, r) {
                if (Xt.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = F(e[o], t, n, r);
                    return e
                }
                return !u.collect || e !== a && e !== i || l.push([e, t, n, r]), m.bind(e, t, n, r || V)
            }, z = function (e, t, n) {
                var r;
                if (Xt.isArray(e)) {
                    for (r = e.length; r--;) e[r] = z(e[r], t, n);
                    return e
                }
                if (l && (e === a || e === i)) for (r = l.length; r--;) {
                    var o = l[r];
                    e !== o[0] || t && t !== o[1] || n && n !== o[2] || m.unbind(o[0], o[1], o[2])
                }
                return m.unbind(e, t, n)
            }, U = function (e) {
                if (e && Ao.isElement(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                }
                return null
            }, V = {
                doc: a,
                settings: u,
                win: i,
                files: o,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: e,
                boundEvents: l,
                styles: d,
                schema: f,
                events: m,
                isBlock: function (e) {
                    if ("string" == typeof e) return !!n[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !n[e.nodeName])
                    }
                    return !1
                },
                $: g,
                $$: h,
                root: null,
                clone: function (t, e) {
                    if (!ii || 1 !== t.nodeType || e) return t.cloneNode(e);
                    if (!e) {
                        var n = a.createElement(t.nodeName);
                        return ri(b(t), function (e) {
                            y(n, e.nodeName, v(t, e.nodeName))
                        }), n
                    }
                    return null
                },
                getRoot: C,
                getViewPort: function (e) {
                    var t = e || i, n = t.document, r = n.documentElement;
                    return {
                        x: t.pageXOffset || r.scrollLeft,
                        y: t.pageYOffset || r.scrollTop,
                        w: t.innerWidth || r.clientWidth,
                        h: t.innerHeight || r.clientHeight
                    }
                },
                getRect: function (e) {
                    var t, n;
                    return e = p(e), t = x(e), n = N(e), {x: t.x, y: t.y, w: n.w, h: n.h}
                },
                getSize: N,
                getParent: function (e, t, n) {
                    var r = S(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: S,
                get: p,
                getNext: function (e, t) {
                    return k(e, t, "nextSibling")
                },
                getPrev: function (e, t) {
                    return k(e, t, "previousSibling")
                },
                select: function (e, t) {
                    return St(e, p(t) || u.root_element || a, [])
                },
                is: E,
                add: R,
                create: D,
                createHTML: function (e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function (e) {
                    var t, n = a.createElement("div"), r = a.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r
                },
                remove: P,
                setStyle: function (e, t, n) {
                    var r = h(e).css(t, n);
                    u.update_styles && ci(d, r)
                },
                getStyle: w,
                setStyles: function (e, t) {
                    var n = h(e).css(t);
                    u.update_styles && ci(d, n)
                },
                removeAllAttribs: function (e) {
                    return T(e, function (e) {
                        var t, n = e.attributes;
                        for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t))
                    })
                },
                setAttrib: y,
                setAttribs: A,
                getAttrib: v,
                getPos: x,
                parseStyle: function (e) {
                    return d.parse(e)
                },
                serializeStyle: function (e, t) {
                    return d.serialize(e, t)
                },
                addStyle: function (e) {
                    var t, n;
                    if (V !== fi.DOM && a === document) {
                        if (r[e]) return;
                        r[e] = !0
                    }
                    (n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function (e) {
                    var n;
                    V === fi.DOM || a !== document ? (e || (e = ""), n = a.getElementsByTagName("head")[0], ri(e.split(","), function (e) {
                        var t;
                        e = Xt._addCacheSuffix(e), o[e] || (o[e] = !0, t = D("link", {
                            rel: "stylesheet",
                            href: e
                        }), n.appendChild(t))
                    })) : fi.DOM.loadCSS(e)
                },
                addClass: function (e, t) {
                    h(e).addClass(t)
                },
                removeClass: function (e, t) {
                    L(e, t, !1)
                },
                hasClass: function (e, t) {
                    return h(e).hasClass(t)
                },
                toggleClass: L,
                show: function (e) {
                    h(e).show()
                },
                hide: function (e) {
                    h(e).hide()
                },
                isHidden: function (e) {
                    return "none" === h(e).css("display")
                },
                uniqueId: function (e) {
                    return (e || "mce_") + t++
                },
                setHTML: _,
                getOuterHTML: function (e) {
                    var t = "string" == typeof e ? p(e) : e;
                    return Ao.isElement(t) ? t.outerHTML : gn("<div></div>").append(gn(t).clone()).html()
                },
                setOuterHTML: function (e, t) {
                    h(e).each(function () {
                        try {
                            if ("outerHTML" in this) return void(this.outerHTML = t)
                        } catch (e) {
                        }
                        P(gn(this).html(t), !0)
                    })
                },
                decode: B,
                encode: O,
                insertAfter: function (e, t) {
                    var r = p(t);
                    return T(e, function (e) {
                        var t, n;
                        return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: I,
                rename: function (t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = D(e), ri(b(t), function (e) {
                        y(n, e.nodeName, v(t, e.nodeName))
                    }), I(n, t, !0)), n || t
                },
                findCommonAncestor: function (e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function (e) {
                    return d.toHex(Xt.trim(e))
                },
                run: T,
                getAttribs: b,
                isEmpty: function (e, t) {
                    var n, r, o, i, a, u, s = 0;
                    if (e = e.firstChild) {
                        a = new to(e, e.parentNode), t = t || (f ? f.getNonEmptyElements() : null), i = f ? f.getWhiteSpaceElements() : {};
                        do {
                            if (o = e.nodeType, Ao.isElement(e)) {
                                var c = e.getAttribute("data-mce-bogus");
                                if (c) {
                                    e = a.next("all" === c);
                                    continue
                                }
                                if (u = e.nodeName.toLowerCase(), t && t[u]) {
                                    if ("br" === u) {
                                        s++, e = a.next();
                                        continue
                                    }
                                    return !1
                                }
                                for (n = (r = b(e)).length; n--;) if ("name" === (u = r[n].nodeName) || "data-mce-bookmark" === u) return !1
                            }
                            if (8 === o) return !1;
                            if (3 === o && !ui.test(e.nodeValue)) return !1;
                            if (3 === o && e.parentNode && i[e.parentNode.nodeName] && ui.test(e.nodeValue)) return !1;
                            e = a.next()
                        } while (e)
                    }
                    return s <= 1
                },
                createRng: M,
                nodeIndex: li,
                split: function (e, t, n) {
                    var r, o, i, a = M();
                    if (e && t) return a.setStart(e.parentNode, li(e)), a.setEnd(t.parentNode, li(t)), r = a.extractContents(), (a = M()).setStart(t.parentNode, li(t) + 1), a.setEnd(e.parentNode, li(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Do.trimNode(V, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Do.trimNode(V, o), e), P(e), n || t
                },
                bind: F,
                unbind: z,
                fire: function (e, t, n) {
                    return m.fire(e, t, n)
                },
                getContentEditable: U,
                getContentEditableParent: function (e) {
                    for (var t = C(), n = null; e && e !== t && null === (n = U(e)); e = e.parentNode) ;
                    return n
                },
                destroy: function () {
                    if (l) for (var e = l.length; e--;) {
                        var t = l[e];
                        m.unbind(t[0], t[1], t[2])
                    }
                    St.setDocument && St.setDocument()
                },
                isChildOf: function (e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function (e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            };
        return s = si(d, u, function () {
            return V
        }), V
    }

    (ni = fi || (fi = {})).DOM = ni(document), ni.nodeIndex = li;
    var di = fi, mi = di.DOM, gi = Xt.each, pi = Xt.grep, hi = function (e) {
        return "function" == typeof e
    }, vi = function () {
        var l = {}, o = [], i = {}, a = [], f = 0;
        this.isDone = function (e) {
            return 2 === l[e]
        }, this.markDone = function (e) {
            l[e] = 2
        }, this.add = this.load = function (e, t, n, r) {
            l[e] === undefined && (o.push(e), l[e] = 0), t && (i[e] || (i[e] = []), i[e].push({
                success: t,
                failure: r,
                scope: n || this
            }))
        }, this.remove = function (e) {
            delete l[e], delete i[e]
        }, this.loadQueue = function (e, t, n) {
            this.loadScripts(o, e, t, n)
        }, this.loadScripts = function (n, e, t, r) {
            var u, s = [], c = function (t, e) {
                gi(i[e], function (e) {
                    hi(e[t]) && e[t].call(e.scope)
                }), i[e] = undefined
            };
            a.push({success: e, failure: r, scope: t || this}), (u = function () {
                var e = pi(n);
                if (n.length = 0, gi(e, function (e) {
                        var t, n, r, o, i, a;
                        2 !== l[e] ? 3 !== l[e] ? 1 !== l[e] && (l[e] = 1, f++, t = e, n = function () {
                            l[e] = 2, f--, c("success", e), u()
                        }, r = function () {
                            l[e] = 3, f--, s.push(e), c("failure", e), u()
                        }, i = (a = mi).uniqueId(), (o = document.createElement("script")).id = i, o.type = "text/javascript", o.src = Xt._addCacheSuffix(t), o.onload = function () {
                            a.remove(i), o && (o.onreadystatechange = o.onload = o = null), n()
                        }, o.onerror = function () {
                            hi(r) ? r() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + t)
                        }, (document.getElementsByTagName("head")[0] || document.body).appendChild(o)) : c("failure", e) : c("success", e)
                    }), !f) {
                    var t = a.slice(0);
                    a.length = 0, gi(t, function (e) {
                        0 === s.length ? hi(e.success) && e.success.call(e.scope) : hi(e.failure) && e.failure.call(e.scope, s)
                    })
                }
            })()
        }
    };
    vi.ScriptLoader = new vi;
    var bi, yi = Xt.each;

    function Ci() {
        var r = this, o = [], a = {}, u = {}, i = [], s = function (e) {
            var t;
            return u[e] && (t = u[e].dependencies), t || []
        }, c = function (e, t) {
            return "object" == typeof t ? t : "string" == typeof e ? {
                prefix: "",
                resource: t,
                suffix: ""
            } : {prefix: e.prefix, resource: t, suffix: e.suffix}
        }, l = function (e, n, t, r) {
            var o = s(e);
            yi(o, function (e) {
                var t = c(n, e);
                f(t.resource, t, undefined, undefined)
            }), t && (r ? t.call(r) : t.call(vi))
        }, f = function (e, t, n, r, o) {
            if (!a[e]) {
                var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = Ci.baseURL + "/" + i), a[e] = i.substring(0, i.lastIndexOf("/")), u[e] ? l(e, t, n, r) : vi.ScriptLoader.add(i, function () {
                    return l(e, t, n, r)
                }, r, o)
            }
        };
        return {
            items: o, urls: a, lookup: u, _listeners: i, get: function (e) {
                return u[e] ? u[e].instance : undefined
            }, dependencies: s, requireLangPack: function (e, t) {
                var n = Ci.language;
                if (n && !1 !== Ci.languageLoad) {
                    if (t) if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2); else if (-1 === t.indexOf("," + n + ",")) return;
                    vi.ScriptLoader.add(a[e] + "/langs/" + n + ".js")
                }
            }, add: function (t, e, n) {
                o.push(e), u[t] = {instance: e, dependencies: n};
                var r = W(i, function (e) {
                    return e.name === t
                });
                return i = r.fail, yi(r.pass, function (e) {
                    e.callback()
                }), e
            }, remove: function (e) {
                delete a[e], delete u[e]
            }, createUrl: c, addComponents: function (e, t) {
                var n = r.urls[e];
                yi(t, function (e) {
                    vi.ScriptLoader.add(n + "/" + e)
                })
            }, load: f, waitFor: function (e, t) {
                u.hasOwnProperty(e) ? t() : i.push({name: e, callback: t})
            }
        }
    }

    (bi = Ci || (Ci = {})).PluginManager = bi(), bi.ThemeManager = bi();
    var xi = function (t, n) {
        Lr(t).each(function (e) {
            e.dom().insertBefore(n.dom(), t.dom())
        })
    }, wi = function (e, t) {
        Mr(e).fold(function () {
            Lr(e).each(function (e) {
                Ni(e, t)
            })
        }, function (e) {
            xi(e, t)
        })
    }, Ni = function (e, t) {
        e.dom().appendChild(t.dom())
    }, Ei = function (t, e) {
        M(e, function (e) {
            Ni(t, e)
        })
    }, Si = function (e) {
        e.dom().textContent = "", M(zr(e), function (e) {
            ki(e)
        })
    }, ki = function (e) {
        var t = e.dom();
        null !== t.parentNode && t.parentNode.removeChild(t)
    }, Ti = function (e) {
        var t, n = zr(e);
        0 < n.length && (t = e, M(n, function (e) {
            xi(t, e)
        })), ki(e)
    }, Ai = function (n, r) {
        var o = null;
        return {
            cancel: function () {
                null !== o && (clearTimeout(o), o = null)
            }, throttle: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                null === o && (o = setTimeout(function () {
                    n.apply(null, e), o = null
                }, r))
            }
        }
    }, _i = function (e) {
        var t = e, n = function () {
            return t
        };
        return {
            get: n, set: function (e) {
                t = e
            }, clone: function () {
                return _i(n())
            }
        }
    }, Ri = function (e, t) {
        var n = vr(e, t);
        return n === undefined || "" === n ? [] : n.split(" ")
    }, Di = function (e) {
        return e.dom().classList !== undefined
    }, Bi = function (e, t) {
        return o = t, i = Ri(n = e, r = "class").concat([o]), pr(n, r, i.join(" ")), !0;
        var n, r, o, i
    }, Oi = function (e, t) {
        return o = t, 0 < (i = F(Ri(n = e, r = "class"), function (e) {
            return e !== o
        })).length ? pr(n, r, i.join(" ")) : br(n, r), !1;
        var n, r, o, i
    }, Pi = function (e, t) {
        Di(e) ? e.dom().classList.add(t) : Bi(e, t)
    }, Li = function (e) {
        0 === (Di(e) ? e.dom().classList : Ri(e, "class")).length && br(e, "class")
    }, Ii = function (e, t) {
        return Di(e) && e.dom().classList.contains(t)
    }, Mi = function (e, t) {
        return n = t, o = (r = e) === undefined ? document : r.dom(), Dr(o) ? [] : $(o.querySelectorAll(n), nr.fromDom);
        var n, r, o
    };

    function Fi(e, t, n, r, o) {
        return e(n, r) ? A.some(n) : O(o) && o(n) ? A.none() : t(n, r, o)
    }

    var zi, Ui = function (e, t, n) {
            for (var r = e.dom(), o = O(n) ? n : j(!1); r.parentNode;) {
                r = r.parentNode;
                var i = nr.fromDom(r);
                if (t(i)) return A.some(i);
                if (o(i)) break
            }
            return A.none()
        }, Vi = function (e, t, n) {
            return Fi(function (e) {
                return t(e)
            }, Ui, e, t, n)
        }, Hi = function (e, t, n) {
            return Ui(e, function (e) {
                return Rr(e, t)
            }, n)
        }, ji = function (e, t) {
            return n = t, o = (r = e) === undefined ? document : r.dom(), Dr(o) ? A.none() : A.from(o.querySelector(n)).map(nr.fromDom);
            var n, r, o
        }, qi = function (e, t, n) {
            return Fi(Rr, Hi, e, t, n)
        }, $i = j("mce-annotation"), Wi = j("data-mce-annotation"), Ki = j("data-mce-annotation-uid"),
        Xi = function (r, e) {
            var t = r.selection.getRng(), n = nr.fromDom(t.startContainer), o = nr.fromDom(r.getBody()),
                i = e.fold(function () {
                    return "." + $i()
                }, function (e) {
                    return "[" + Wi() + '="' + e + '"]'
                }), a = Ur(n, t.startOffset).getOr(n), u = qi(a, i, function (e) {
                    return Br(e, o)
                }), s = function (e, t) {
                    return n = t, (r = e.dom()) && r.hasAttribute && r.hasAttribute(n) ? A.some(vr(e, t)) : A.none();
                    var n, r
                };
            return u.bind(function (e) {
                return s(e, "" + Ki()).bind(function (n) {
                    return s(e, "" + Wi()).map(function (e) {
                        var t = Yi(r, n);
                        return {uid: n, name: e, elements: t}
                    })
                })
            })
        }, Yi = function (e, t) {
            var n = nr.fromDom(e.getBody());
            return Mi(n, "[" + Ki() + '="' + t + '"]')
        }, Gi = function (i, e) {
            var n, r, o, a = _i({}), c = function (e, t) {
                u(e, function (e) {
                    return t(e), e
                })
            }, u = function (e, t) {
                var n = a.get(), r = t(n.hasOwnProperty(e) ? n[e] : {listeners: [], previous: _i(A.none())});
                n[e] = r, a.set(n)
            }, t = (n = function () {
                var e, t, n, r = a.get(), o = (e = lr(r), (n = J.call(e, 0)).sort(t), n);
                M(o, function (e) {
                    u(e, function (u) {
                        var s = u.previous.get();
                        return Xi(i, A.some(e)).fold(function () {
                            var t;
                            s.isSome() && (c(t = e, function (e) {
                                M(e.listeners, function (e) {
                                    return e(!1, t)
                                })
                            }), u.previous.set(A.none()))
                        }, function (e) {
                            var t, n, r, o = e.uid, i = e.name, a = e.elements;
                            s.is(o) || (n = o, r = a, c(t = i, function (e) {
                                M(e.listeners, function (e) {
                                    return e(!0, t, {
                                        uid: n, nodes: $(r, function (e) {
                                            return e.dom()
                                        })
                                    })
                                })
                            }), u.previous.set(A.some(o)))
                        }), {previous: u.previous, listeners: u.listeners}
                    })
                })
            }, r = 30, o = null, {
                cancel: function () {
                    null !== o && (clearTimeout(o), o = null)
                }, throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null !== o && clearTimeout(o), o = setTimeout(function () {
                        n.apply(null, e), o = null
                    }, r)
                }
            });
            return i.on("remove", function () {
                t.cancel()
            }), i.on("nodeChange", function () {
                t.throttle()
            }), {
                addListener: function (e, t) {
                    u(e, function (e) {
                        return {previous: e.previous, listeners: e.listeners.concat([t])}
                    })
                }
            }
        }, Ji = function (e, n) {
            e.on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    M(e, function (t) {
                        var e;
                        (e = t, A.from(e.attributes.map[Wi()]).bind(n.lookup)).each(function (e) {
                            !1 === e.persistent && t.unwrap()
                        })
                    })
                })
            })
        }, Qi = 0, Zi = function (e, t) {
            return nr.fromDom(e.dom().cloneNode(t))
        }, ea = function (e) {
            return Zi(e, !1)
        }, ta = function (e) {
            return Zi(e, !0)
        }, na = function (e, t) {
            var n, r, o = Pr(e).dom(), i = nr.fromDom(o.createDocumentFragment()),
                a = (n = t, (r = (o || document).createElement("div")).innerHTML = n, zr(nr.fromDom(r)));
            Ei(i, a), Si(e), Ni(e, i)
        }, ra = [].slice, oa = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = ra.call(arguments);
            return r.length - 1 >= e.length ? e.apply(this, r.slice(1)) : function () {
                var e = r.concat([].slice.call(arguments));
                return oa.apply(this, e)
            }
        }, ia = {
            constant: function (e) {
                return function () {
                    return e
                }
            }, negate: function (t) {
                return function (e) {
                    return !t(e)
                }
            }, and: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = ra.call(arguments);
                return function (e) {
                    for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                    return !0
                }
            }, or: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = ra.call(arguments);
                return function (e) {
                    for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                    return !1
                }
            }, curry: oa, compose: function (t, n) {
                return function (e) {
                    return t(n(e))
                }
            }, noop: function () {
            }
        }, aa = "\ufeff", ua = function (e) {
            return e === aa
        }, sa = aa, ca = function (e) {
            return e.replace(new RegExp(aa, "g"), "")
        }, la = Ao.isElement, fa = Ao.isText, da = function (e) {
            return fa(e) && (e = e.parentNode), la(e) && e.hasAttribute("data-mce-caret")
        }, ma = function (e) {
            return fa(e) && ua(e.data)
        }, ga = function (e) {
            return da(e) || ma(e)
        }, pa = function (e) {
            return e.firstChild !== e.lastChild || !Ao.isBr(e.firstChild)
        }, ha = function (e) {
            var t = e.container();
            return e && Ao.isText(t) && t.data.charAt(e.offset()) === sa
        }, va = function (e) {
            var t = e.container();
            return e && Ao.isText(t) && t.data.charAt(e.offset() - 1) === sa
        }, ba = function (e, t, n) {
            var r, o, i;
            return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(((i = document.createElement("br")).setAttribute("data-mce-bogus", "1"), i)), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r
        }, ya = function (e) {
            return fa(e) && e.data[0] === sa
        }, Ca = function (e) {
            return fa(e) && e.data[e.data.length - 1] === sa
        }, xa = function (e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], Ao.isBogus(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        }, wa = Ao.isContentEditableTrue, Na = Ao.isContentEditableFalse, Ea = Ao.isBr, Sa = Ao.isText,
        ka = Ao.matchNodeNames("script style textarea"),
        Ta = Ao.matchNodeNames("img input textarea hr iframe video audio object"), Aa = Ao.matchNodeNames("table"),
        _a = ga, Ra = function (e) {
            return !_a(e) && (Sa(e) ? !ka(e.parentNode) : Ta(e) || Ea(e) || Aa(e) || Da(e))
        }, Da = function (e) {
            return !1 === (t = e, Ao.isElement(t) && "true" === t.getAttribute("unselectable")) && Na(e);
            var t
        }, Ba = function (e) {
            return Ta(e) || !!Da(t = e) && !0 !== jt.reduce(t.getElementsByTagName("*"), function (e, t) {
                return e || wa(t)
            }, !1);
            var t
        }, Oa = function (e, t) {
            return Ra(e) && function (e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Da(e)) return !1;
                    if (wa(e)) return !0
                }
                return !0
            }(e, t)
        }, Pa = Math.round, La = function (e) {
            return e ? {
                left: Pa(e.left),
                top: Pa(e.top),
                bottom: Pa(e.bottom),
                right: Pa(e.right),
                width: Pa(e.width),
                height: Pa(e.height)
            } : {left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0}
        }, Ia = function (e, t) {
            return e = La(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        }, Ma = function (e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        }, Fa = function (e, t) {
            return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && Ma(t.top - e.bottom, e, t)
        }, za = function (e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && Ma(t.bottom - e.top, e, t)
        }, Ua = function (e) {
            var t = e.startContainer, n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        }, Va = function (e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        Ha = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        ja = function (e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && Ha.test(e)
        }, qa = function (e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return A.none();
                n.push(o.getOrDie())
            }
            return A.some(t.apply(null, n))
        }, $a = Ao.isElement, Wa = Ra, Ka = Ao.matchStyleValues("display", "block table"),
        Xa = Ao.matchStyleValues("float", "left right"), Ya = ia.and($a, Wa, ia.negate(Xa)),
        Ga = ia.negate(Ao.matchStyleValues("white-space", "pre pre-line pre-wrap")), Ja = Ao.isText, Qa = Ao.isBr,
        Za = di.nodeIndex, eu = Va, tu = function (e) {
            return "createRange" in e ? e.createRange() : di.DOM.createRng()
        }, nu = function (e) {
            return e && /[\r\n\t ]/.test(e)
        }, ru = function (e) {
            return !!e.setStart && !!e.setEnd
        }, ou = function (e) {
            var t, n = e.startContainer, r = e.startOffset;
            return !!(nu(e.toString()) && Ga(n.parentNode) && Ao.isText(n) && (t = n.data, nu(t[r - 1]) || nu(t[r + 1])))
        }, iu = function (e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        }, au = function (e) {
            var t, n, r, o, i, a, u, s;
            return t = 0 < (n = e.getClientRects()).length ? La(n[0]) : La(e.getBoundingClientRect()), !ru(e) && Qa(e) && iu(t) ? (i = (r = e).ownerDocument, a = tu(i), u = i.createTextNode("\xa0"), (s = r.parentNode).insertBefore(u, r), a.setStart(u, 0), a.setEnd(u, 1), o = La(a.getBoundingClientRect()), s.removeChild(u), o) : iu(t) && ru(e) ? function (e) {
                var t = e.startContainer, n = e.endContainer, r = e.startOffset, o = e.endOffset;
                if (t === n && Ao.isText(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), au(i)
                }
                return null
            }(e) : t
        }, uu = function (e, t) {
            var n = Ia(e, t);
            return n.width = 1, n.right = n.left + 1, n
        }, su = function (e) {
            var t, n, r = [], o = function (e) {
                var t, n;
                0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
            }, i = function (e, t) {
                var n = tu(e.ownerDocument);
                if (t < e.data.length) {
                    if (ja(e.data[t])) return r;
                    if (ja(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !ou(n))) return o(uu(au(n), !1)), r
                }
                0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), ou(n) || o(uu(au(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), ou(n) || o(uu(au(n), !0)))
            };
            if (Ja(e.container())) return i(e.container(), e.offset()), r;
            if ($a(e.container())) if (e.isAtEnd()) n = eu(e.container(), e.offset()), Ja(n) && i(n, n.data.length), Ya(n) && !Qa(n) && o(uu(au(n), !1)); else {
                if (n = eu(e.container(), e.offset()), Ja(n) && i(n, 0), Ya(n) && e.isAtEnd()) return o(uu(au(n), !1)), r;
                t = eu(e.container(), e.offset() - 1), Ya(t) && !Qa(t) && (Ka(t) || Ka(n) || !Ya(n)) && o(uu(au(t), !1)), Ya(n) && o(uu(au(n), !0))
            }
            return r
        };

    function cu(t, n, e) {
        var r = function () {
            return e || (e = su(cu(t, n))), e
        };
        return {
            container: ia.constant(t), offset: ia.constant(n), toRange: function () {
                var e;
                return (e = tu(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e
            }, getClientRects: r, isVisible: function () {
                return 0 < r().length
            }, isAtStart: function () {
                return Ja(t), 0 === n
            }, isAtEnd: function () {
                return Ja(t) ? n >= t.data.length : n >= t.childNodes.length
            }, isEqual: function (e) {
                return e && t === e.container() && n === e.offset()
            }, getNode: function (e) {
                return eu(t, e ? n - 1 : n)
            }
        }
    }

    (zi = cu || (cu = {})).fromRangeStart = function (e) {
        return zi(e.startContainer, e.startOffset)
    }, zi.fromRangeEnd = function (e) {
        return zi(e.endContainer, e.endOffset)
    }, zi.after = function (e) {
        return zi(e.parentNode, Za(e) + 1)
    }, zi.before = function (e) {
        return zi(e.parentNode, Za(e))
    }, zi.isAbove = function (e, t) {
        return qa([Z(t.getClientRects()), ee(e.getClientRects())], Fa).getOr(!1)
    }, zi.isBelow = function (e, t) {
        return qa([ee(t.getClientRects()), Z(e.getClientRects())], za).getOr(!1)
    }, zi.isAtStart = function (e) {
        return !!e && e.isAtStart()
    }, zi.isAtEnd = function (e) {
        return !!e && e.isAtEnd()
    }, zi.isTextPosition = function (e) {
        return !!e && Ao.isText(e.container())
    }, zi.isElementPosition = function (e) {
        return !1 === zi.isTextPosition(e)
    };
    var lu, fu, du = cu, mu = Ao.isText, gu = Ao.isBogus, pu = di.nodeIndex, hu = function (e) {
        var t = e.parentNode;
        return gu(t) ? hu(t) : t
    }, vu = function (e) {
        return e ? jt.reduce(e.childNodes, function (e, t) {
            return gu(t) && "BR" !== t.nodeName ? e = e.concat(vu(t)) : e.push(t), e
        }, []) : []
    }, bu = function (t) {
        return function (e) {
            return t === e
        }
    }, yu = function (e) {
        var t, r, n, o;
        return (mu(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = vu(hu(t = e)), n = jt.findIndex(r, bu(t), t), r = r.slice(0, n + 1), o = jt.reduce(r, function (e, t, n) {
            return mu(t) && mu(r[n - 1]) && e++, e
        }, 0), r = jt.filter(r, Ao.matchNodeNames(t.nodeName)), (n = jt.findIndex(r, bu(t), t)) - o) + "]"
    }, Cu = function (e, t) {
        var n, r, o, i, a, u = [];
        return n = t.container(), r = t.offset(), mu(n) ? o = function (e, t) {
            for (; (e = e.previousSibling) && mu(e);) t += e.data.length;
            return t
        }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(yu(n)), a = function (e, t, n) {
            var r = [];
            for (t = t.parentNode; !(t === e || n && n(t)); t = t.parentNode) r.push(t);
            return r
        }(e, n), a = jt.filter(a, ia.negate(Ao.isBogus)), (u = u.concat(jt.map(a, function (e) {
            return yu(e)
        }))).reverse().join("/") + "," + o
    }, xu = function (e, t) {
        var n, r, o;
        return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = jt.reduce(t, function (e, t) {
            return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), n = e, r = t[1], o = parseInt(t[2], 10), i = vu(n), i = jt.filter(i, function (e, t) {
                return !mu(e) || !mu(i[t - 1])
            }), (i = jt.filter(i, Ao.matchNodeNames(r)))[o]) : null;
            var n, r, o, i
        }, e)) ? mu(r) ? function (e, t) {
            for (var n, r = e, o = 0; mu(r);) {
                if (n = r.data.length, o <= t && t <= o + n) {
                    e = r, t -= o;
                    break
                }
                if (!mu(r.nextSibling)) {
                    e = r, t = n;
                    break
                }
                o += n, r = r.nextSibling
            }
            return mu(e) && t > e.data.length && (t = e.data.length), du(e, t)
        }(r, parseInt(o, 10)) : (o = "after" === o ? pu(r) + 1 : pu(r), du(r.parentNode, o)) : null) : null
    }, wu = Ao.isContentEditableFalse, Nu = function (e, t, n, r, o) {
        var i, a = r[o ? "startContainer" : "endContainer"], u = r[o ? "startOffset" : "endOffset"], s = [], c = 0,
            l = e.getRoot();
        for (Ao.isText(a) ? s.push(n ? function (e, t, n) {
            var r, o;
            for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && Ao.isText(r); r = r.previousSibling) o += e(r.data).length;
            return o
        }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
        return s
    }, Eu = function (e) {
        Ao.isText(e) && 0 === e.data.length && e.parentNode.removeChild(e)
    }, Su = function (e, t, n) {
        var r = 0;
        return Xt.each(e.select(t), function (e) {
            if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
        }), r
    }, ku = function (e, t) {
        var n, r, o, i = t ? "start" : "end";
        n = e[i + "Container"], r = e[i + "Offset"], Ao.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r))
    }, Tu = function (e) {
        return ku(e, !0), ku(e, !1), e
    }, Au = function (e, t) {
        var n;
        if (Ao.isElement(e) && (e = Va(e, t), wu(e))) return e;
        if (ga(e)) {
            if (Ao.isText(e) && da(e) && (e = e.parentNode), n = e.previousSibling, wu(n)) return n;
            if (n = e.nextSibling, wu(n)) return n
        }
    }, _u = function (e, t, n) {
        var r = n.getNode(), o = r ? r.nodeName : null, i = n.getRng();
        if (wu(r) || "IMG" === o) return {name: o, index: Su(n.dom, o, r)};
        var a, u, s, c, l, f, d, m = Au((a = i).startContainer, a.startOffset) || Au(a.endContainer, a.endOffset);
        return m ? {
            name: o = m.tagName,
            index: Su(n.dom, o, m)
        } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = Nu(f, u, c, l, !0), s.isCollapsed() || (d.end = Nu(f, u, c, l, !1)), d)
    }, Ru = function (e, t, n) {
        var r = {"data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px"};
        return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
    }, Du = function (e, t) {
        var n = e.dom, r = e.getRng(), o = n.uniqueId(), i = e.isCollapsed(), a = e.getNode(), u = a.nodeName;
        if ("IMG" === u) return {name: u, index: Su(n, u, a)};
        var s = Tu(r.cloneRange());
        if (!i) {
            s.collapse(!1);
            var c = Ru(n, o + "_end", t);
            s.insertNode(c), Eu(c.nextSibling)
        }
        (r = Tu(r)).collapse(!0);
        var l = Ru(n, o + "_start", t);
        return r.insertNode(l), Eu(l.previousSibling), Eu(l.nextSibling), e.moveToBookmark({id: o, keep: 1}), {id: o}
    }, Bu = {
        getBookmark: function (e, t, n) {
            return 2 === t ? _u(ca, n, e) : 3 === t ? (o = (r = e).getRng(), {
                start: Cu(r.dom.getRoot(), du.fromRangeStart(o)),
                end: Cu(r.dom.getRoot(), du.fromRangeEnd(o))
            }) : t ? {rng: e.getRng()} : Du(e, !1);
            var r, o
        }, getUndoBookmark: b(_u, q, !0), getPersistentBookmark: Du
    }, Ou = "_mce_caret", Pu = function (e) {
        return Ao.isElement(e) && e.id === Ou
    }, Lu = function (e, t) {
        for (; t && t !== e;) {
            if (t.id === Ou) return t;
            t = t.parentNode
        }
        return null
    }, Iu = Ao.isElement, Mu = Ao.isText, Fu = function (e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }, zu = function (e, t) {
        0 === t.length ? Fu(e) : e.nodeValue = t
    }, Uu = function (e) {
        var t = ca(e);
        return {count: e.length - t.length, text: t}
    }, Vu = function (e, t) {
        return qu(e), t
    }, Hu = function (e, t) {
        var n, r, o, i = t.container(),
            a = (n = te(i.childNodes), r = e, o = L(n, r), -1 === o ? A.none() : A.some(o)).map(function (e) {
                return e < t.offset() ? du(i, t.offset() - 1) : t
            }).getOr(t);
        return qu(e), a
    }, ju = function (e, t) {
        return Mu(e) && t.container() === e ? (r = t, o = Uu((n = e).data.substr(0, r.offset())), i = Uu(n.data.substr(r.offset())), 0 < (a = o.text + i.text).length ? (zu(n, a), du(n, r.offset() - o.count)) : r) : Vu(e, t);
        var n, r, o, i, a
    }, qu = function (e) {
        if (Iu(e) && ga(e) && (pa(e) ? e.removeAttribute("data-mce-caret") : Fu(e)), Mu(e)) {
            var t = ca(function (e) {
                try {
                    return e.nodeValue
                } catch (t) {
                    return ""
                }
            }(e));
            zu(e, t)
        }
    }, $u = {
        removeAndReposition: function (e, t) {
            return du.isTextPosition(t) ? ju(e, t) : (n = e, (r = t).container() === n.parentNode ? Hu(n, r) : Vu(n, r));
            var n, r
        }, remove: qu
    }, Wu = Ao.isContentEditableTrue, Ku = Ao.isContentEditableFalse, Xu = function (e, t, n, r, o) {
        return t._selectionOverrides.showCaret(e, n, r, o)
    }, Yu = function (e, t) {
        var n, r;
        return e.fire("BeforeObjectSelected", {target: t}).isDefaultPrevented() ? null : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r)
    }, Gu = function (e, t, n) {
        var r = Fc(1, e.getBody(), t), o = du.fromRangeStart(r), i = o.getNode();
        if (Ku(i)) return Xu(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (Ku(a)) return Xu(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function (e) {
            return Ku(e) || Wu(e)
        });
        return Ku(u) ? Xu(1, e, u, !1, n) : null
    }, Ju = function (e, t, n) {
        if (!t || !t.collapsed) return t;
        var r = Gu(e, t, n);
        return r || t
    };
    (fu = lu || (lu = {}))[fu.Backwards = -1] = "Backwards", fu[fu.Forwards = 1] = "Forwards";
    var Qu, Zu, es = Ao.isContentEditableFalse, ts = Ao.isText, ns = Ao.isElement, rs = Ao.isBr, os = Ra, is = Ba,
        as = Oa, us = function (e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        }, ss = function (e, t) {
            if (Tc(e)) {
                if (os(t.previousSibling) && !ts(t.previousSibling)) return du.before(t);
                if (ts(t)) return du(t, 0)
            }
            if (Ac(e)) {
                if (os(t.nextSibling) && !ts(t.nextSibling)) return du.after(t);
                if (ts(t)) return du(t, t.data.length)
            }
            return Ac(e) ? rs(t) ? du.before(t) : du.after(t) : du.before(t)
        }, cs = function (e, t, n) {
            var r, o, i, a, u;
            if (!ns(n) || !t) return null;
            if (t.isEqual(du.after(n)) && n.lastChild) {
                if (u = du.after(n.lastChild), Ac(e) && os(n.lastChild) && ns(n.lastChild)) return rs(n.lastChild) ? du.before(n.lastChild) : u
            } else u = t;
            var s, c, l, f = u.container(), d = u.offset();
            if (ts(f)) {
                if (Ac(e) && 0 < d) return du(f, --d);
                if (Tc(e) && d < f.length) return du(f, ++d);
                r = f
            } else {
                if (Ac(e) && 0 < d && (o = us(f, d - 1), os(o))) return !is(o) && (i = Rc(o, e, as, o)) ? ts(i) ? du(i, i.data.length) : du.after(i) : ts(o) ? du(o, o.data.length) : du.before(o);
                if (Tc(e) && d < f.childNodes.length && (o = us(f, d), os(o))) return rs(o) && n.lastChild === o ? null : (s = o, c = n, Ao.isBr(s) && !Ba(s.nextSibling) && (l = cs(lu.Forwards, du.after(s), c)) && !Bc(du.before(s), du.before(l), c) ? cs(e, du.after(o), n) : !is(o) && (i = Rc(o, e, as, o)) ? ts(i) ? du(i, 0) : du.before(i) : ts(o) ? du(o, 0) : du.after(o));
                r = o || u.getNode()
            }
            return (Tc(e) && u.isAtEnd() || Ac(e) && u.isAtStart()) && (r = Rc(r, e, ia.constant(!0), n, !0), as(r, n)) ? ss(e, r) : (o = Rc(r, e, as, n), !(a = jt.last(jt.filter(function (e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(f, n), es))) || o && a.contains(o) ? o ? ss(e, o) : null : u = Tc(e) ? du.after(a) : du.before(a))
        }, ls = function (t) {
            return {
                next: function (e) {
                    return cs(lu.Forwards, e, t)
                }, prev: function (e) {
                    return cs(lu.Backwards, e, t)
                }
            }
        };
    (Zu = Qu || (Qu = {}))[Zu.Br = 0] = "Br", Zu[Zu.Block = 1] = "Block", Zu[Zu.Wrap = 2] = "Wrap", Zu[Zu.Eol = 3] = "Eol";
    var fs, ds, ms, gs, ps, hs = function (e, t) {
            return e === lu.Backwards ? t.reverse() : t
        }, vs = function (e, t, n, r) {
            for (var o, i, a, u, s, c, l = ls(n), f = r, d = []; f && (s = l, c = f, o = t === lu.Forwards ? s.next(c) : s.prev(c));) {
                if (Ao.isBr(o.getNode(!1))) return t === lu.Forwards ? {
                    positions: hs(t, d).concat([o]),
                    breakType: Qu.Br,
                    breakAt: A.some(o)
                } : {positions: hs(t, d), breakType: Qu.Br, breakAt: A.some(o)};
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = (i = t, a = f, u = o, Ao.isBr(u.getNode(i === lu.Forwards)) ? Qu.Br : !1 === Bc(a, u) ? Qu.Block : Qu.Wrap);
                        return {positions: hs(t, d), breakType: m, breakAt: A.some(o)}
                    }
                    d.push(o), f = o
                } else f = o
            }
            return {positions: hs(t, d), breakType: Qu.Eol, breakAt: A.none()}
        }, bs = function (n, r, o, e) {
            return r(o, e).breakAt.map(function (e) {
                var t = r(o, e).positions;
                return n === lu.Backwards ? t.concat(e) : [e].concat(t)
            }).getOr([])
        }, ys = function (e, i) {
            return z(e, function (e, o) {
                return e.fold(function () {
                    return A.some(o)
                }, function (r) {
                    return qa([Z(r.getClientRects()), Z(o.getClientRects())], function (e, t) {
                        var n = Math.abs(i - e.left);
                        return Math.abs(i - t.left) <= n ? o : r
                    }).or(e)
                })
            }, A.none())
        }, Cs = function (t, e) {
            return Z(e.getClientRects()).bind(function (e) {
                return ys(t, e.left)
            })
        }, xs = b(vs, cu.isAbove, -1), ws = b(vs, cu.isBelow, 1), Ns = b(bs, -1, xs), Es = b(bs, 1, ws),
        Ss = function (e, t, n, r, o) {
            var i, a, u, s, c = Mi(nr.fromDom(n), "td,th,caption").map(function (e) {
                return e.dom()
            }), l = F((i = e, Y(c, function (e) {
                var t, n, r = (t = La(e.getBoundingClientRect()), n = -1, {
                    left: t.left - n,
                    top: t.top - n,
                    right: t.right + 2 * n,
                    bottom: t.bottom + 2 * n,
                    width: t.width + n,
                    height: t.height + n
                });
                return [{x: r.left, y: i(r), cell: e}, {x: r.right, y: i(r), cell: e}]
            })), function (e) {
                return t(e, o)
            });
            return (a = l, u = r, s = o, z(a, function (e, r) {
                return e.fold(function () {
                    return A.some(r)
                }, function (e) {
                    var t = Math.sqrt(Math.abs(e.x - u) + Math.abs(e.y - s)),
                        n = Math.sqrt(Math.abs(r.x - u) + Math.abs(r.y - s));
                    return A.some(n < t ? r : e)
                })
            }, A.none())).map(function (e) {
                return e.cell
            })
        }, ks = b(Ss, function (e) {
            return e.bottom
        }, function (e, t) {
            return e.y < t
        }), Ts = b(Ss, function (e) {
            return e.top
        }, function (e, t) {
            return e.y > t
        }), As = function (t, n) {
            return Z(n.getClientRects()).bind(function (e) {
                return ks(t, e.left, e.top)
            }).bind(function (e) {
                return Cs((t = e, Zc.lastPositionIn(t).map(function (e) {
                    return xs(t, e).positions.concat(e)
                }).getOr([])), n);
                var t
            })
        }, _s = function (t, n) {
            return ee(n.getClientRects()).bind(function (e) {
                return Ts(t, e.left, e.top)
            }).bind(function (e) {
                return Cs((t = e, Zc.firstPositionIn(t).map(function (e) {
                    return [e].concat(ws(t, e).positions)
                }).getOr([])), n);
                var t
            })
        }, Rs = function (e) {
            for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
            return {x: t, y: n}
        }, Ds = function (e, t, n) {
            var r, o, i, a, u, s = e.dom, c = s.getRoot(), l = 0;
            if (u = {elm: t, alignToTop: n}, e.fire("scrollIntoView", u), !u.isDefaultPrevented() && Ao.isElement(t)) {
                if (!1 === n && (l = t.offsetHeight), "BODY" !== c.nodeName) {
                    var f = e.selection.getScrollContainer();
                    if (f) return r = Rs(t).y - Rs(f).y + l, a = f.clientHeight, void((r < (i = f.scrollTop) || i + a < r + 25) && (f.scrollTop = r < i ? r : r - a + 25))
                }
                o = s.getViewPort(e.getWin()), r = s.getPos(t).y + l, i = o.y, a = o.h, (r < o.y || i + a < r + 25) && e.getWin().scrollTo(0, r < i ? r : r - a + 25)
            }
        }, Bs = function (d, e) {
            Z(cu.fromRangeStart(e).getClientRects()).each(function (e) {
                var t, n, r, o, i, a, u, s, c, l = function (e) {
                    if (e.inline) return e.getBody().getBoundingClientRect();
                    var t = e.getWin();
                    return {
                        left: 0,
                        right: t.innerWidth,
                        top: 0,
                        bottom: t.innerHeight,
                        width: t.innerWidth,
                        height: t.innerHeight
                    }
                }(d), f = {
                    x: (i = t = l, a = n = e, a.left > i.left && a.right < i.right ? 0 : a.left < i.left ? a.left - i.left : a.right - i.right),
                    y: (r = t, o = n, o.top > r.top && o.bottom < r.bottom ? 0 : o.top < r.top ? o.top - r.top : o.bottom - r.bottom)
                };
                s = 0 !== f.x ? 0 < f.x ? f.x + 4 : f.x - 4 : 0, c = 0 !== f.y ? 0 < f.y ? f.y + 4 : f.y - 4 : 0, (u = d).inline ? (u.getBody().scrollLeft += s, u.getBody().scrollTop += c) : u.getWin().scrollBy(s, c)
            })
        }, Os = function (e, t, n) {
            var r = e.getParam(t, n);
            if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n
            }
            return r
        }, Ps = function (e) {
            return e.getParam("iframe_attrs", {})
        }, Ls = function (e) {
            return e.getParam("doctype", "<!DOCTYPE html>")
        }, Is = function (e) {
            return e.getParam("document_base_url", "")
        }, Ms = function (e) {
            return Os(e, "body_id", "tinymce")
        }, Fs = function (e) {
            return Os(e, "body_class", "")
        }, zs = function (e) {
            return e.getParam("content_security_policy", "")
        }, Us = function (e) {
            return e.getParam("br_in_pre", !0)
        }, Vs = function (e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : t
        }, Hs = function (e) {
            return e.getParam("forced_root_block_attrs", {})
        }, js = function (e) {
            return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
        }, qs = function (e) {
            return e.getParam("no_newline_selector", "")
        }, $s = function (e) {
            return e.getParam("keep_styles", !0)
        }, Ws = function (e) {
            return e.getParam("end_container_on_empty_block", !1)
        }, Ks = function (e) {
            return Xt.explode(e.getParam("font_size_style_values", ""))
        }, Xs = function (e) {
            return Xt.explode(e.getParam("font_size_classes", ""))
        }, Ys = function (e) {
            return e.getParam("images_dataimg_filter", j(!0), "function")
        }, Gs = function (e) {
            return e.getParam("automatic_uploads", !0, "boolean")
        }, Js = function (e) {
            return e.getParam("images_reuse_filename", !1, "boolean")
        }, Qs = function (e) {
            return e.getParam("images_replace_blob_uris", !0, "boolean")
        }, Zs = function (e) {
            return e.getParam("images_upload_url", "", "string")
        }, ec = function (e) {
            return e.getParam("images_upload_base_path", "", "string")
        }, tc = function (e) {
            return e.getParam("images_upload_credentials", !1, "boolean")
        }, nc = function (e) {
            return e.getParam("images_upload_handler", null, "function")
        }, rc = function (e) {
            return e.getParam("content_css_cors", !1, "boolean")
        }, oc = er.detect().browser, ic = function () {
            return oc.isIE() || oc.isEdge() || oc.isFirefox()
        }, ac = function (e, t) {
            e.selection.setRng(t), Bs(e, t)
        }, uc = function (e, t, n) {
            var r, o, i, a, u = e(t, n);
            return (a = u).breakType === Qu.Wrap && 0 === a.positions.length || !Ao.isBr(n.getNode()) && (i = u).breakType === Qu.Br && 1 === i.positions.length ? (r = e, o = t, !u.breakAt.map(function (e) {
                return r(o, e).breakAt.isSome()
            }).getOr(!1)) : u.breakAt.isNone()
        }, sc = ia.curry(uc, xs), cc = ia.curry(uc, ws), lc = function (e, t, n, r) {
            var o, i, a, u, s = e.selection.getRng(), c = t ? 1 : -1;
            if (ic() && (o = t, i = s, a = n, u = du.fromRangeStart(i), Zc.positionIn(!o, a).map(function (e) {
                    return e.isEqual(u)
                }).getOr(!1))) {
                var l = Xu(c, e, n, !t, !0);
                return ac(e, l), !0
            }
            return !1
        }, fc = function (e, t) {
            var n = t.getNode(e);
            return Ao.isElement(n) && "TABLE" === n.nodeName ? A.some(n) : A.none()
        }, dc = function (u, s, c) {
            var e = fc(!!s, c), t = !1 === s;
            e.fold(function () {
                return ac(u, c.toRange())
            }, function (a) {
                return Zc.positionIn(t, u.getBody()).filter(function (e) {
                    return e.isEqual(c)
                }).fold(function () {
                    return ac(u, c.toRange())
                }, function (e) {
                    return n = s, o = a, t = c, void((i = Vs(r = u)) ? r.undoManager.transact(function () {
                        var e = nr.fromTag(i);
                        hr(e, Hs(r)), Ni(e, nr.fromTag("br")), n ? wi(nr.fromDom(o), e) : xi(nr.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), ac(r, t)
                    }) : ac(r, t.toRange()));
                    var n, r, o, t, i
                })
            })
        }, mc = function (e, t, n, r) {
            var o, i, a, u, s, c, l = e.selection.getRng(), f = du.fromRangeStart(l), d = e.getBody();
            if (!t && sc(r, f)) {
                var m = (u = d, As(s = n, c = f).orThunk(function () {
                    return Z(c.getClientRects()).bind(function (e) {
                        return ys(Ns(u, du.before(s)), e.left)
                    })
                }).getOr(du.before(s)));
                return dc(e, t, m), !0
            }
            return !(!t || !cc(r, f)) && (o = d, m = _s(i = n, a = f).orThunk(function () {
                return Z(a.getClientRects()).bind(function (e) {
                    return ys(Es(o, du.after(i)), e.left)
                })
            }).getOr(du.after(i)), dc(e, t, m), !0)
        }, gc = function (t, n) {
            return function () {
                return A.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function (e) {
                    return A.from(t.dom.getParent(e, "table")).map(function (e) {
                        return lc(t, n, e)
                    })
                }).getOr(!1)
            }
        }, pc = function (n, r) {
            return function () {
                return A.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function (t) {
                    return A.from(n.dom.getParent(t, "table")).map(function (e) {
                        return mc(n, r, e, t)
                    })
                }).getOr(!1)
            }
        }, hc = Ao.isContentEditableFalse, vc = function (e, t, n) {
            var r, o, i, a, u, s = Ia(t.getBoundingClientRect(), n);
            return "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, i = e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, i = e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s
        }, bc = function (a, u, e) {
            var t, s, c = _i(A.none()), l = function () {
                !function (e) {
                    var t, n, r, o, i;
                    for (t = gn("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, Ca(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, ya(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1))
                }(a), s && ($u.remove(s), s = null), c.get().each(function (e) {
                    gn(e.caret).remove(), c.set(A.none())
                }), clearInterval(t)
            }, f = function () {
                t = he.setInterval(function () {
                    e() ? gn("div.mce-visual-caret", a).toggleClass("mce-visual-caret-hidden") : gn("div.mce-visual-caret", a).addClass("mce-visual-caret-hidden")
                }, 500)
            };
            return {
                show: function (t, e) {
                    var n, r, o;
                    if (l(), o = e, Ao.isElement(o) && /^(TD|TH)$/i.test(o.tagName)) return null;
                    if (!u(e)) return s = function (e, t) {
                        var n, r, o;
                        if (r = e.ownerDocument.createTextNode(sa), o = e.parentNode, t) {
                            if (n = e.previousSibling, fa(n)) {
                                if (ga(n)) return n;
                                if (Ca(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, fa(n)) {
                                if (ga(n)) return n;
                                if (ya(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), hc(s.nextSibling) ? (r.setStart(s, 0), r.setEnd(s, 0)) : (r.setStart(s, 1), r.setEnd(s, 1)), r;
                    s = ba("p", e, t), n = vc(a, e, t), gn(s).css("top", n.top);
                    var i = gn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];
                    return c.set(A.some({caret: i, element: e, before: t})), c.get().each(function (e) {
                        t && gn(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(s, 0), r.setEnd(s, 0), r
                }, hide: l, getCss: function () {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                }, reposition: function () {
                    c.get().each(function (e) {
                        var t = vc(a, e.element, e.before);
                        gn(e.caret).css(t)
                    })
                }, destroy: function () {
                    return he.clearInterval(t)
                }
            }
        }, yc = function (e) {
            return hc(e) || Ao.isTable(e) && ic()
        }, Cc = Ao.isContentEditableFalse,
        xc = Ao.matchStyleValues("display", "block table table-cell table-caption list-item"), wc = ga, Nc = da,
        Ec = ia.curry, Sc = Ao.isElement, kc = Ra, Tc = function (e) {
            return 0 < e
        }, Ac = function (e) {
            return e < 0
        }, _c = function (e, t) {
            for (var n; n = e(t);) if (!Nc(n)) return n;
            return null
        }, Rc = function (e, t, n, r, o) {
            var i = new to(e, r);
            if (Ac(t)) {
                if ((Cc(e) || Nc(e)) && n(e = _c(i.prev, !0))) return e;
                for (; e = _c(i.prev, o);) if (n(e)) return e
            }
            if (Tc(t)) {
                if ((Cc(e) || Nc(e)) && n(e = _c(i.next, !0))) return e;
                for (; e = _c(i.next, o);) if (n(e)) return e
            }
            return null
        }, Dc = function (e, t) {
            for (; e && e !== t;) {
                if (xc(e)) return e;
                e = e.parentNode
            }
            return null
        }, Bc = function (e, t, n) {
            return Dc(e.container(), n) === Dc(t.container(), n)
        }, Oc = function (e, t) {
            var n, r;
            return t ? (n = t.container(), r = t.offset(), Sc(n) ? n.childNodes[r + e] : null) : null
        }, Pc = function (e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        }, Lc = function (e, t, n) {
            var r, o, i, a;
            for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[o], wc(r) && (r = r[o]), Cc(r)) {
                    if (a = n, Dc(r, i = t) === Dc(a, i)) return r;
                    break
                }
                if (kc(r)) break;
                n = n.parentNode
            }
            return null
        }, Ic = Ec(Pc, !0), Mc = Ec(Pc, !1), Fc = function (e, t, n) {
            var r, o, i, a, u = Ec(Lc, !0, t), s = Ec(Lc, !1, t);
            if (o = n.startContainer, i = n.startOffset, da(o)) {
                if (Sc(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, yc(r))) return Ic(r);
                if ("after" === a && (r = o.previousSibling, yc(r))) return Mc(r)
            }
            if (!n.collapsed) return n;
            if (Ao.isText(o)) {
                if (wc(o)) {
                    if (1 === e) {
                        if (r = s(o)) return Ic(r);
                        if (r = u(o)) return Mc(r)
                    }
                    if (-1 === e) {
                        if (r = u(o)) return Mc(r);
                        if (r = s(o)) return Ic(r)
                    }
                    return n
                }
                if (Ca(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? Ic(r) : n;
                if (ya(o) && i <= 1) return -1 === e && (r = u(o)) ? Mc(r) : n;
                if (i === o.data.length) return (r = s(o)) ? Ic(r) : n;
                if (0 === i) return (r = u(o)) ? Mc(r) : n
            }
            return n
        }, zc = function (e, t) {
            var n = Oc(e, t);
            return Cc(n) && !Ao.isBogusAll(n)
        }, Uc = function (e, t) {
            return Ao.isTable(Oc(e, t))
        }, Vc = function (e, t) {
            return A.from(Oc(e ? 0 : -1, t)).filter(Cc)
        }, Hc = function (e, t, n) {
            var r = Fc(e, t, n);
            return -1 === e ? cu.fromRangeStart(r) : cu.fromRangeEnd(r)
        }, jc = Ec(zc, 0), qc = Ec(zc, -1), $c = Ec(Uc, 0), Wc = Ec(Uc, -1), Kc = function (e) {
            return du.isTextPosition(e) ? 0 === e.offset() : Ra(e.getNode())
        }, Xc = function (e) {
            if (du.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length
            }
            return Ra(e.getNode(!0))
        }, Yc = function (e, t) {
            return !du.isTextPosition(e) && !du.isTextPosition(t) && e.getNode() === t.getNode(!0)
        }, Gc = function (e, t, n) {
            return e ? !Yc(t, n) && (r = t, !(!du.isTextPosition(r) && Ao.isBr(r.getNode()))) && Xc(t) && Kc(n) : !Yc(n, t) && Kc(t) && Xc(n);
            var r
        }, Jc = function (e, t, n) {
            var r = ls(t);
            return A.from(e ? r.next(n) : r.prev(n))
        }, Qc = function (e, t) {
            var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
            return Ao.isText(u) ? A.some(du(u, e ? 0 : u.data.length)) : u ? Ra(u) ? A.some(e ? du.before(u) : (a = u, Ao.isBr(a) ? du.before(a) : du.after(a))) : (r = t, o = u, i = (n = e) ? du.before(o) : du.after(o), Jc(n, r, i)) : A.none()
        }, Zc = {
            fromPosition: Jc, nextPosition: b(Jc, !0), prevPosition: b(Jc, !1), navigate: function (t, n, r) {
                return Jc(t, n, r).bind(function (e) {
                    return Bc(r, e, n) && Gc(t, r, e) ? Jc(t, n, e) : A.some(e)
                })
            }, positionIn: Qc, firstPositionIn: b(Qc, !0), lastPositionIn: b(Qc, !1)
        }, el = function (e, t) {
            return !e.isBlock(t) || t.innerHTML || fe.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
        }, tl = function (e, t) {
            return Zc.lastPositionIn(e).fold(function () {
                return !1
            }, function (e) {
                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
            })
        }, nl = function (e, t, n) {
            return !(!1 !== t.hasChildNodes() || !Lu(e, t) || (o = n, i = (r = t).ownerDocument.createTextNode(sa), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 0));
            var r, o, i
        }, rl = function (e, t, n, r) {
            var o, i, a, u, s = n[t ? "start" : "end"], c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (u = i.childNodes, nl(c, i, r)) return !0;
                    if (s[o] > u.length - 1) return !!nl(c, i, r) || tl(i, r);
                    i = u[s[o]]
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
            }
            return !0
        }, ol = function (e) {
            return Ao.isText(e) && 0 < e.data.length
        }, il = function (e, t, n) {
            var r, o, i, a, u, s, c = e.get(n.id + "_" + t), l = n.keep;
            if (c) {
                if (r = c.parentNode, "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : ol(c.nextSibling) ? (r = c.nextSibling, o = 0) : ol(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c) + 1) : o = e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : ol(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c)) : o = e.nodeIndex(c), u = r, s = o, !l) {
                    for (a = c.previousSibling, i = c.nextSibling, Xt.each(Xt.grep(c.childNodes), function (e) {
                        Ao.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                    }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && Ao.isText(a) && !fe.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
                }
                return A.some(du(u, s))
            }
            return A.none()
        }, al = function (e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b = e.dom;
            if (t) {
                if (v = t, Xt.isArray(v.start)) return p = t, h = (g = b).createRng(), rl(g, !0, p, h) && rl(g, !1, p, h) ? A.some(h) : A.none();
                if ("string" == typeof t.start) return A.some((f = t, d = (l = b).createRng(), m = xu(l.getRoot(), f.start), d.setStart(m.container(), m.offset()), m = xu(l.getRoot(), f.end), d.setEnd(m.container(), m.offset()), d));
                if (t.hasOwnProperty("id")) return s = il(o = b, "start", i = t), c = il(o, "end", i), qa([s, (a = c, u = s, a.isSome() ? a : u)], function (e, t) {
                    var n = o.createRng();
                    return n.setStart(el(o, e.container()), e.offset()), n.setEnd(el(o, t.container()), t.offset()), n
                });
                if (t.hasOwnProperty("name")) return n = b, r = t, A.from(n.select(r.name)[r.index]).map(function (e) {
                    var t = n.createRng();
                    return t.selectNode(e), t
                });
                if (t.hasOwnProperty("rng")) return A.some(t.rng)
            }
            return A.none()
        }, ul = function (e, t, n) {
            return Bu.getBookmark(e, t, n)
        }, sl = function (t, e) {
            al(t, e).each(function (e) {
                t.setRng(e)
            })
        }, cl = function (e) {
            return Ao.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }, ll = function (e) {
            return e && /^(IMG)$/.test(e.nodeName)
        }, fl = function (e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
        }, dl = function (e, t, n) {
            return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
        }, ml = {
            isInlineBlock: ll, moveStart: function (e, t, n) {
                var r, o, i, a = n.startOffset, u = n.startContainer;
                if ((n.startContainer !== n.endContainer || !ll(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType) for (a < (i = u.childNodes).length ? r = new to(u = i[a], e.getParent(u, e.isBlock)) : (r = new to(u = i[i.length - 1], e.getParent(u, e.isBlock))).next(!0), o = r.current(); o; o = r.next()) if (3 === o.nodeType && !fl(o)) return n.setStart(o, 0), void t.setRng(n)
            }, getNonWhiteSpaceSibling: function (e, t, n) {
                if (e) for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t]) if (1 === e.nodeType || !fl(e)) return e
            }, isTextBlock: function (e, t) {
                return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
            }, isValid: function (e, t, n) {
                return e.schema.isValidChild(t, n)
            }, isWhiteSpaceNode: fl, replaceVars: function (e, n) {
                return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function (e, t) {
                    return n[t] || e
                })), e
            }, isEq: function (e, t) {
                return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()
            }, normalizeStyleValue: dl, getStyle: function (e, t, n) {
                return dl(e, e.getStyle(t, n), n)
            }, getTextDecoration: function (t, e) {
                var n;
                return t.getParent(e, function (e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n
                }), n
            }, getParents: function (e, t, n) {
                return e.getParents(t, n, e.getRoot())
            }
        }, gl = cl, pl = ml.getParents, hl = ml.isWhiteSpaceNode, vl = ml.isTextBlock, bl = function (e, t) {
            for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();) (e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
            return {node: e, offset: t}
        }, yl = function (e, t) {
            for (var n = t; n;) {
                if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        }, Cl = function (e, t, n, r) {
            var o, i, a = n.nodeValue;
            return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 !== (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) && !t && (o < r || !e) && o <= a.length && o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o
        }, xl = function (e, t, n, r, o, i) {
            var a, u, s, c;
            if (3 === n.nodeType) {
                if (-1 !== (s = Cl(o, i, n, r))) return {container: n, offset: s};
                c = n
            }
            for (a = new to(n, e.getParent(n, e.isBlock) || t); u = a[o ? "prev" : "next"]();) if (3 !== u.nodeType || gl(u.parentNode)) {
                if (e.isBlock(u) || ml.isEq(u, "BR")) break
            } else if (-1 !== (s = Cl(o, i, c = u))) return {container: u, offset: s};
            if (c) return {container: c, offset: r = o ? 0 : c.length}
        }, wl = function (e, t, n, r, o) {
            var i, a, u, s;
            for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = pl(e, r), a = 0; a < i.length; a++) for (u = 0; u < t.length; u++) if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
            return r
        }, Nl = function (t, e, n, r) {
            var o, i = t.dom, a = i.getRoot();
            if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(3 === n.nodeType ? n.parentNode : n, function (e) {
                    return e !== a && vl(t, e)
                }, u)
            }
            if (o && e[0].wrapper && (o = pl(i, o, "ul,ol").reverse()[0] || o), !o) for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !ml.isEq(o, "br"));) ;
            return o || n
        }, El = function (e, t, n, r, o, i, a) {
            var u, s, c, l, f, d;
            if (u = s = a ? n : o, l = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !hl(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
            for (; ;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l]) if (!gl(c) && !hl(c) && ("BR" !== (d = c).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
                if (s === f || s.parentNode === f) {
                    u = s;
                    break
                }
                s = s.parentNode
            }
            return u
        }, Sl = function (e, t, n, r) {
            var o, i = t.startContainer, a = t.startOffset, u = t.endContainer, s = t.endOffset, c = e.dom;
            return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = Va(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = Va(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = yl(c, i), u = yl(c, u), (gl(i.parentNode) || gl(i)) && (i = gl(i) ? i : i.parentNode, 3 === (i = t.collapsed ? i.previousSibling || i : i.nextSibling || i).nodeType && (a = t.collapsed ? i.length : 0)), (gl(u.parentNode) || gl(u)) && (u = gl(u) ? u : u.parentNode, 3 === (u = t.collapsed ? u.nextSibling || u : u.previousSibling || u).nodeType && (s = t.collapsed ? 0 : u.length)), t.collapsed && ((o = xl(c, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = xl(c, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), n[0].inline && (u = r ? u : function (e, t) {
                var n = bl(e, t);
                if (n.node) {
                    for (; n.node && 0 === n.offset && n.node.previousSibling;) n = bl(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1)
                }
                return e
            }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = El(c, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = El(c, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = wl(c, n, t, i, "previousSibling"), u = wl(c, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = Nl(e, n, i, "previousSibling"), u = Nl(e, n, u, "nextSibling"), n[0].block && (c.isBlock(i) || (i = El(c, n, i, a, u, s, !0)), c.isBlock(u) || (u = El(c, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = c.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = c.nodeIndex(u) + 1, u = u.parentNode), {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
            }
        }, kl = Xt.each, Tl = function (e, t, o) {
            var n, r, i, a, u, s, c, l = t.startContainer, f = t.startOffset, d = t.endContainer, m = t.endOffset;
            if (0 < (c = e.select("td[data-mce-selected],th[data-mce-selected]")).length) kl(c, function (e) {
                o([e])
            }); else {
                var g, p, h, v = function (e) {
                    var t;
                    return 3 === (t = e[0]).nodeType && t === l && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === m && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                }, b = function (e, t, n) {
                    for (var r = []; e && e !== n; e = e[t]) r.push(e);
                    return r
                }, y = function (e, t) {
                    do {
                        if (e.parentNode === t) return e;
                        e = e.parentNode
                    } while (e)
                }, C = function (e, t, n) {
                    var r = n ? "nextSibling" : "previousSibling";
                    for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = b(a === e ? a : a[r], r)).length && (n || s.reverse(), o(v(s)))
                };
                if (1 === l.nodeType && l.hasChildNodes() && (l = l.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (p = m, h = (g = d).childNodes, --p > h.length - 1 ? p = h.length - 1 : p < 0 && (p = 0), d = h[p] || g), l === d) return o(v([l]));
                for (n = e.findCommonAncestor(l, d), a = l; a; a = a.parentNode) {
                    if (a === d) return C(l, n, !0);
                    if (a === n) break
                }
                for (a = d; a; a = a.parentNode) {
                    if (a === l) return C(d, n);
                    if (a === n) break
                }
                r = y(l, n) || l, i = y(d, n) || d, C(l, r, !0), (s = b(r === l ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(v(s)), C(d, i)
            }
        }, Al = (fs = cr, ds = "text", ms = function (e) {
            return fs(e) ? A.from(e.dom().nodeValue) : A.none()
        }, gs = er.detect().browser, {
            get: function (e) {
                if (!fs(e)) throw new Error("Can only get " + ds + " value of a " + ds + " node");
                return ps(e).getOr("")
            }, getOption: ps = gs.isIE() && 10 === gs.version.major ? function (e) {
                try {
                    return ms(e)
                } catch (Hw) {
                    return A.none()
                }
            } : ms, set: function (e, t) {
                if (!fs(e)) throw new Error("Can only set raw " + ds + " value of a " + ds + " node");
                e.dom().nodeValue = t
            }
        }), _l = function (e) {
            return Al.get(e)
        }, Rl = function (r, o, i, a) {
            return Lr(o).fold(function () {
                return "skipping"
            }, function (e) {
                return "br" === a || cr(n = o) && "\ufeff" === _l(n) ? "valid" : sr(t = o) && Ii(t, $i()) ? "existing" : Pu(o) ? "caret" : ml.isValid(r, i, a) && ml.isValid(r, ar(e), i) ? "valid" : "invalid-child";
                var t, n
            })
        }, Dl = undefined && undefined.__rest || function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
            }
            return n
        }, Bl = function (e, t, n, r) {
            var o, i, a = t.uid,
                u = void 0 === a ? (o = "mce-annotation", i = (new Date).getTime(), o + "_" + Math.floor(1e9 * Math.random()) + ++Qi + String(i)) : a,
                s = Dl(t, ["uid"]), c = nr.fromTag("span", e);
            Pi(c, $i()), pr(c, "" + Ki(), u), pr(c, "" + Wi(), n);
            var l, f = r(u, s), d = f.attributes, m = void 0 === d ? {} : d, g = f.classes, p = void 0 === g ? [] : g;
            return hr(c, m), l = c, M(p, function (e) {
                Pi(l, e)
            }), c
        }, Ol = function (i, e, t, n, r) {
            var a = [], u = Bl(i.getDoc(), r, t, n), s = _i(A.none()), c = function () {
                s.set(A.none())
            }, l = function (e) {
                M(e, o)
            }, o = function (e) {
                var t, n;
                switch (Rl(i, e, "span", ar(e))) {
                    case"invalid-child":
                        c();
                        var r = zr(e);
                        l(r), c();
                        break;
                    case"valid":
                        var o = s.get().getOrThunk(function () {
                            var e = ea(u);
                            return a.push(e), s.set(A.some(e)), e
                        });
                        xi(t = e, n = o), Ni(n, t)
                }
            };
            return Tl(i.dom, e, function (e) {
                var t;
                c(), t = $(e, nr.fromDom), l(t)
            }), a
        }, Pl = function (s, c, l, f) {
            s.undoManager.transact(function () {
                var e, t, n, r, o = s.selection.getRng();
                if (o.collapsed && (r = Sl(e = s, t = o, [{inline: !0}], 3 === (n = t).startContainer.nodeType && n.startContainer.nodeValue.length >= n.startOffset && "\xa0" === n.startContainer.nodeValue[n.startOffset]), t.setStart(r.startContainer, r.startOffset), t.setEnd(r.endContainer, r.endOffset), e.selection.setRng(t)), s.selection.getRng().collapsed) {
                    var i = Bl(s.getDoc(), f, c, l.decorate);
                    na(i, "\xa0"), s.selection.getRng().insertNode(i.dom()), s.selection.select(i.dom())
                } else {
                    var a = Bu.getPersistentBookmark(s.selection, !1), u = s.selection.getRng();
                    Ol(s, u, c, l.decorate, f), s.selection.moveToBookmark(a)
                }
            })
        };

    function Ll(s) {
        var n, r = (n = {}, {
            register: function (e, t) {
                n[e] = {name: e, settings: t}
            }, lookup: function (e) {
                return n.hasOwnProperty(e) ? A.from(n[e]).map(function (e) {
                    return e.settings
                }) : A.none()
            }
        });
        Ji(s, r);
        var o = Gi(s);
        return {
            register: function (e, t) {
                r.register(e, t)
            }, annotate: function (t, n) {
                r.lookup(t).each(function (e) {
                    Pl(s, t, e, n)
                })
            }, annotationChanged: function (e, t) {
                o.addListener(e, t)
            }, remove: function (e) {
                Xi(s, A.some(e)).each(function (e) {
                    var t = e.elements;
                    M(t, Ti)
                })
            }, getAll: function (e) {
                var t, n, r, o, i, a,
                    u = (t = s, n = e, r = nr.fromDom(t.getBody()), o = Mi(r, "[" + Wi() + '="' + n + '"]'), i = {}, M(o, function (e) {
                        var t = vr(e, Ki()), n = i.hasOwnProperty(t) ? i[t] : [];
                        i[t] = n.concat([e])
                    }), i);
                return a = function (e) {
                    return $(e, function (e) {
                        return e.dom()
                    })
                }, mr(u, function (e, t, n) {
                    return {k: t, v: a(e, t, n)}
                })
            }
        }
    }

    var Il = function (e) {
        return Xt.grep(e.childNodes, function (e) {
            return "LI" === e.nodeName
        })
    }, Ml = function (e) {
        return e && e.firstChild && e.firstChild === e.lastChild && ("\xa0" === (t = e.firstChild).data || Ao.isBr(t));
        var t
    }, Fl = function (e) {
        return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Ml(t)) ? e.slice(0, -1) : e;
        var t
    }, zl = function (e, t) {
        var n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null
    }, Ul = function (e, t) {
        var n = du.after(e), r = ls(t).prev(n);
        return r ? r.toRange() : null
    }, Vl = function (t, e, n) {
        var r, o, i, a, u = t.parentNode;
        return Xt.each(e, function (e) {
            u.insertBefore(e, t)
        }), r = t, o = n, i = du.before(r), (a = ls(o).next(i)) ? a.toRange() : null
    }, Hl = function (e, t) {
        var n, r, o, i, a, u, s = t.firstChild, c = t.lastChild;
        return s && "meta" === s.name && (s = s.next), c && "mce_marker" === c.attr("id") && (c = c.prev), r = c, u = (n = e).getNonEmptyElements(), r && (r.isEmpty(u) || (o = r, n.getBlockElements()[o.name] && (a = o).firstChild && a.firstChild === a.lastChild && ("br" === (i = o.firstChild).name || "\xa0" === i.value))) && (c = c.prev), !(!s || s !== c || "ul" !== s.name && "ol" !== s.name)
    }, jl = function (e, o, i, t) {
        var n, r, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, x, w,
            N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
            E = zl(o, i.startContainer), S = Fl(Il(N.firstChild)), k = o.getRoot(), T = function (e) {
                var t = du.fromRangeStart(i), n = ls(o.getRoot()), r = 1 === e ? n.prev(t) : n.next(t);
                return !r || zl(o, r.getNode()) !== E
            };
        return T(1) ? Vl(E, S, k) : T(2) ? (f = E, d = S, m = k, o.insertAfter(d.reverse(), f), Ul(d[0], m)) : (p = S, h = k, v = g = E, y = (b = i).cloneRange(), C = b.cloneRange(), y.setStartBefore(v), C.setEndAfter(v), x = [y.cloneContents(), C.cloneContents()], (w = g.parentNode).insertBefore(x[0], g), Xt.each(p, function (e) {
            w.insertBefore(e, g)
        }), w.insertBefore(x[1], g), w.removeChild(g), Ul(p[p.length - 1], h))
    }, ql = function (e, t) {
        return !!zl(e, t)
    }, $l = Xt.each, Wl = function (o) {
        this.compare = function (e, t) {
            if (e.nodeName !== t.nodeName) return !1;
            var n = function (n) {
                var r = {};
                return $l(o.getAttribs(n), function (e) {
                    var t = e.nodeName.toLowerCase();
                    0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                }), r
            }, r = function (e, t) {
                var n, r;
                for (r in e) if (e.hasOwnProperty(r)) {
                    if (void 0 === (n = t[r])) return !1;
                    if (e[r] !== n) return !1;
                    delete t[r]
                }
                for (r in t) if (t.hasOwnProperty(r)) return !1;
                return !0
            };
            return !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || cl(e) || cl(t))
        }
    }, Kl = function (e) {
        var t = Mi(e, "br"), n = F(function (e) {
            for (var t = [], n = e.dom(); n;) t.push(nr.fromDom(n)), n = n.lastChild;
            return t
        }(e).slice(-1), co);
        t.length === n.length && M(n, ki)
    }, Xl = function (e) {
        Si(e), Ni(e, nr.fromHtml('<br data-mce-bogus="1">'))
    }, Yl = function (n) {
        Vr(n).each(function (t) {
            Ir(t).each(function (e) {
                uo(n) && co(t) && uo(e) && ki(t)
            })
        })
    }, Gl = Xt.makeMap;

    function Jl(e) {
        var u, s, c, l, f, d = [];
        return u = (e = e || {}).indent, s = Gl(e.indent_before || ""), c = Gl(e.indent_after || ""), l = Ho.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, {
            start: function (e, t, n) {
                var r, o, i, a;
                if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t) for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', l(i.value, !0), '"');
                d[d.length] = !n || f ? ">" : " />", n && u && c[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n")
            }, end: function (e) {
                var t;
                d.push("</", e, ">"), u && c[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n")
            }, text: function (e, t) {
                0 < e.length && (d[d.length] = t ? e : l(e))
            }, cdata: function (e) {
                d.push("<![CDATA[", e, "]]>")
            }, comment: function (e) {
                d.push("\x3c!--", e, "--\x3e")
            }, pi: function (e, t) {
                t ? d.push("<?", e, " ", l(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n")
            }, doctype: function (e) {
                d.push("<!DOCTYPE", e, ">", u ? "\n" : "")
            }, reset: function () {
                d.length = 0
            }, getContent: function () {
                return d.join("").replace(/\n$/, "")
            }
        }
    }

    function Ql(t, g) {
        void 0 === g && (g = Zo());
        var p = Jl(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function (e) {
                var f, d;
                d = t.validate, f = {
                    3: function (e) {
                        p.text(e.value, e.raw)
                    }, 8: function (e) {
                        p.comment(e.value)
                    }, 7: function (e) {
                        p.pi(e.name, e.value)
                    }, 10: function (e) {
                        p.doctype(e.value)
                    }, 4: function (e) {
                        p.cdata(e.value)
                    }, 11: function (e) {
                        if (e = e.firstChild) for (; m(e), e = e.next;) ;
                    }
                }, p.reset();
                var m = function (e) {
                    var t, n, r, o, i, a, u, s, c, l = f[e.type];
                    if (l) l(e); else {
                        if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, c = g.getElementRule(e.name))) {
                            for (u = 0, s = c.attributesOrder.length; u < s; u++) (o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            for (u = 0, s = r.length; u < s; u++) (o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            r = a
                        }
                        if (p.start(e.name, r, n), !n) {
                            if (e = e.firstChild) for (; m(e), e = e.next;) ;
                            p.end(t)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? f[11](e) : m(e), p.getContent()
            }
        }
    }

    var Zl = function (a) {
            var u = du.fromRangeStart(a), s = du.fromRangeEnd(a), c = a.commonAncestorContainer;
            return Zc.fromPosition(!1, c, s).map(function (e) {
                return !Bc(u, s, c) && Bc(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        }, ef = function (e) {
            return e.collapsed ? e : Zl(e)
        }, tf = Ao.matchNodeNames("td th"), nf = function (e, t) {
            var n, r, o = e.selection.getRng(), i = o.startContainer, a = o.startOffset;
            o.collapsed && (n = i, r = a, Ao.isText(n) && "\xa0" === n.nodeValue[r - 1]) && Ao.isText(i) && (i.insertData(a - 1, " "), i.deleteData(a, 1), o.setStart(i, a), o.setEnd(i, a), e.selection.setRng(o)), e.selection.setContent(t)
        }, rf = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, g = e.selection, p = e.dom;
            if (/^ | $/.test(t) && (t = function (e, t) {
                    var n, r;
                    n = e.startContainer, r = e.startOffset;
                    var o = function (e) {
                        return n[e] && 3 === n[e].nodeType
                    };
                    return 3 === n.nodeType && (0 < r ? t = t.replace(/^&nbsp;/, " ") : o("previousSibling") || (t = t.replace(/^ /, "&nbsp;")), r < n.length ? t = t.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), t
                }(g.getRng(), t)), r = e.parser, m = n.merge, o = Ql({validate: e.settings.validate}, e.schema), d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = {
                    content: t,
                    format: "html",
                    selection: !0,
                    paste: n.paste
                }, (s = e.fire("BeforeSetContent", s)).isDefaultPrevented()) e.fire("SetContent", {
                content: s.content,
                format: "html",
                selection: !0,
                paste: n.paste
            }); else {
                -1 === (t = s.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, d);
                var h, v, b, y, C, x, w = (l = g.getRng()).startContainer || (l.parentElement ? l.parentElement() : null),
                    N = e.getBody();
                w === N && g.isCollapsed() && p.isBlock(N.firstChild) && (h = e, (v = N.firstChild) && !h.schema.getShortEndedElements()[v.nodeName]) && p.isEmpty(N.firstChild) && ((l = p.createRng()).setStart(N.firstChild, 0), l.setEnd(N.firstChild, 0), g.setRng(l)), g.isCollapsed() || (e.selection.setRng(ef(e.selection.getRng())), e.getDoc().execCommand("Delete", !1, null), b = e.selection.getRng(), y = t, C = b.startContainer, x = b.startOffset, 3 === C.nodeType && b.collapsed && ("\xa0" === C.data[x] ? (C.deleteData(x, 1), /[\u00a0| ]$/.test(y) || (y += " ")) : "\xa0" === C.data[x - 1] && (C.deleteData(x - 1, 1), /[\u00a0| ]$/.test(y) || (y = " " + y))), t = y);
                var E, S, k, T = {context: (i = g.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0};
                if (u = r.parse(t, T), !0 === n.paste && Hl(e.schema, u) && ql(p, i)) return l = jl(o, p, e.selection.getRng(), u), e.selection.setRng(l), void e.fire("SetContent", s);
                if (function (e) {
                        for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                    }(u), "mce_marker" === (f = u.lastChild).attr("id")) for (f = (c = f).prev; f; f = f.walk(!0)) if (3 === f.type || !p.isBlock(f.name)) {
                    e.schema.isValidChild(f.parent.name, "span") && f.parent.insert(c, f, "br" === f.name);
                    break
                }
                if (e._selectionOverrides.showBlockCaretContainer(i), T.invalid) {
                    for (nf(e, d), i = g.getNode(), a = e.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                    t = i === a ? a.innerHTML : p.getOuterHTML(i), t = o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                        return o.serialize(u)
                    }))), i === a ? p.setHTML(a, t) : p.setOuterHTML(i, t)
                } else !function (e, t, n) {
                    if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n); else {
                        var r = n.firstChild, o = n.lastChild;
                        !r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : nf(e, t)
                    }
                }(e, t = o.serialize(u), i);
                !function (e, t) {
                    var n = e.schema.getTextInlineElements(), r = e.dom;
                    if (t) {
                        var o = e.getBody(), i = new Wl(r);
                        Xt.each(r.select("*[data-mce-fragment]"), function (e) {
                            for (var t = e.parentNode; t && t !== o; t = t.parentNode) n[e.nodeName.toLowerCase()] && i.compare(t, e) && r.remove(e, !0)
                        })
                    }
                }(e, m), function (n, e) {
                    var t, r, o, i, a, u = n.dom, s = n.selection;
                    if (e) {
                        if (n.selection.scrollIntoView(e), t = function (e) {
                                for (var t = n.getBody(); e && e !== t; e = e.parentNode) if ("false" === n.dom.getContentEditable(e)) return e;
                                return null
                            }(e)) return u.remove(e), s.select(t);
                        var c = u.createRng();
                        (i = e.previousSibling) && 3 === i.nodeType ? (c.setStart(i, i.nodeValue.length), fe.ie || (a = e.nextSibling) && 3 === a.nodeType && (i.appendData(a.data), a.parentNode.removeChild(a))) : (c.setStartBefore(e), c.setEndBefore(e)), r = u.getParent(e, u.isBlock), u.remove(e), r && u.isEmpty(r) && (n.$(r).empty(), c.setStart(r, 0), c.setEnd(r, 0), tf(r) || r.getAttribute("data-mce-fragment") || !(o = function (e) {
                            var t = du.fromRangeStart(e);
                            if (t = ls(n.getBody()).next(t)) return t.toRange()
                        }(c)) ? u.add(r, u.create("br", {"data-mce-bogus": "1"})) : (c = o, u.remove(r))), s.setRng(c)
                    }
                }(e, p.get("mce_marker")), E = e.getBody(), Xt.each(E.getElementsByTagName("*"), function (e) {
                    e.removeAttribute("data-mce-fragment")
                }), S = e.dom, k = e.selection.getStart(), A.from(S.getParent(k, "td,th")).map(nr.fromDom).each(Yl), e.fire("SetContent", s), e.addVisual()
            }
        }, of = function (e, t) {
            var n, r, o = "string" != typeof(n = t) ? (r = Xt.extend({
                paste: n.paste,
                data: {paste: n.paste}
            }, n), {content: n.content, details: r}) : {content: n, details: {}};
            rf(e, o.content, o.details)
        }, af = Nr("sections", "settings"), uf = er.detect().deviceType.isTouch(), sf = ["lists", "autolink", "autosave"],
        cf = {theme: "mobile"}, lf = function (e) {
            var t = R(e) ? e.join(" ") : e, n = $(T(t) ? t.split(" ") : [], Wn);
            return F(n, function (e) {
                return 0 < e.length
            })
        }, ff = function (n, e) {
            var r, o, i, t = (r = function (e, t) {
                return I(n, t)
            }, o = {}, i = {}, dr(e, function (e, t) {
                (r(e, t) ? o : i)[t] = e
            }), {t: o, f: i});
            return af(t.t, t.f)
        }, df = function (e, t) {
            return e.sections().hasOwnProperty(t)
        }, mf = function (e, t, n, r) {
            var o, i = lf(n.forced_plugins), a = lf(r.plugins), u = e && df(t, "mobile") ? F(a, b(I, sf)) : a,
                s = (o = u, [].concat(lf(i)).concat(lf(o)));
            return Xt.extend(r, {plugins: s.join(" ")})
        }, gf = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = ff(["mobile"], r),
                p = Xt.extend(t, n, g.settings(), (f = e, m = (d = g).settings().inline, f && df(d, "mobile") && !m ? (u = "mobile", s = cf, c = g.sections(), l = c.hasOwnProperty(u) ? c[u] : {}, Xt.extend({}, s, l)) : {}), {
                    validate: !0,
                    content_editable: g.settings().inline,
                    external_plugins: (o = n, i = g.settings(), a = i.external_plugins ? i.external_plugins : {}, o && o.external_plugins ? Xt.extend({}, o.external_plugins, a) : a)
                });
            return mf(e, g, n, p)
        }, pf = function (e, t, n) {
            return A.from(t.settings[n]).filter(e)
        }, hf = b(pf, T), vf = function (e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof(i = u) ? M(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function (e) {
                var t = e.split("=");
                1 < t.length ? a[Xt.trim(t[0])] = Xt.trim(t[1]) : a[Xt.trim(t[0])] = Xt.trim(t)
            }) : a = i, a) : "string" === r ? pf(T, e, t).getOr(n) : "number" === r ? pf(P, e, t).getOr(n) : "boolean" === r ? pf(B, e, t).getOr(n) : "object" === r ? pf(_, e, t).getOr(n) : "array" === r ? pf(R, e, t).getOr(n) : "string[]" === r ? pf((o = T, function (e) {
                return R(e) && G(e, o)
            }), e, t).getOr(n) : "function" === r ? pf(O, e, t).getOr(n) : u
        }, bf = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/, yf = function (e, t) {
            var n = t.container(), r = t.offset();
            return e ? ma(n) ? Ao.isText(n.nextSibling) ? du(n.nextSibling, 0) : du.after(n) : ha(t) ? du(n, r + 1) : t : ma(n) ? Ao.isText(n.previousSibling) ? du(n.previousSibling, n.previousSibling.data.length) : du.before(n) : va(t) ? du(n, r - 1) : t
        }, Cf = {
            isInlineTarget: function (e, t) {
                var n = hf(e, "inline_boundaries_selector").getOr("a[href],code");
                return Rr(nr.fromDom(t), n)
            },
            findRootInline: function (e, t, n) {
                var r, o, i, a = (r = e, o = t, i = n, F(di.DOM.getParents(i.container(), "*", o), r));
                return A.from(a[a.length - 1])
            },
            isRtl: function (e) {
                return "rtl" === di.DOM.getStyle(e, "direction", !0) || (t = e.textContent, bf.test(t));
                var t
            },
            isAtZwsp: function (e) {
                return ha(e) || va(e)
            },
            normalizePosition: yf,
            normalizeForwards: b(yf, !0),
            normalizeBackwards: b(yf, !1),
            hasSameParentBlock: function (e, t, n) {
                var r = Dc(t, e), o = Dc(n, e);
                return r && r === o
            }
        }, xf = function (e, t) {
            return Or(e, t) ? Vi(t, function (e) {
                return lo(e) || mo(e)
            }, (n = e, function (e) {
                return Br(n, nr.fromDom(e.dom().parentNode))
            })) : A.none();
            var n
        }, wf = function (e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        }, Nf = function (i, a, u) {
            return qa([Zc.firstPositionIn(u), Zc.lastPositionIn(u)], function (e, t) {
                var n = Cf.normalizePosition(!0, e), r = Cf.normalizePosition(!1, t), o = Cf.normalizePosition(!1, a);
                return i ? Zc.nextPosition(u, o).map(function (e) {
                    return e.isEqual(r) && a.isEqual(n)
                }).getOr(!1) : Zc.prevPosition(u, o).map(function (e) {
                    return e.isEqual(n) && a.isEqual(r)
                }).getOr(!1)
            }).getOr(!0)
        }, Ef = function (e, t) {
            var n, r, o, i = nr.fromDom(e), a = nr.fromDom(t);
            return n = a, r = "pre,code", o = b(Br, i), Hi(n, r, o).isSome()
        }, Sf = function (e, t) {
            return Ra(t) && !1 === (r = e, o = t, Ao.isText(o) && /^[ \t\r\n]*$/.test(o.data) && !1 === Ef(r, o)) || (n = t, Ao.isElement(n) && "A" === n.nodeName && n.hasAttribute("name")) || kf(t);
            var n, r, o
        }, kf = Ao.hasAttribute("data-mce-bookmark"), Tf = Ao.hasAttribute("data-mce-bogus"),
        Af = Ao.hasAttributeValue("data-mce-bogus", "all"), _f = function (e) {
            return function (e) {
                var t, n, r = 0;
                if (Sf(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new to(n, e);
                do {
                    if (Af(n)) n = t.next(!0); else if (Tf(n)) n = t.next(); else if (Ao.isBr(n)) r++, n = t.next(); else {
                        if (Sf(e, n)) return !1;
                        n = t.next()
                    }
                } while (n);
                return r <= 1
            }(e.dom())
        }, Rf = Nr("block", "position"), Df = Nr("from", "to"), Bf = function (e, t) {
            var n = nr.fromDom(e), r = nr.fromDom(t.container());
            return xf(n, r).map(function (e) {
                return Rf(e, t)
            })
        }, Of = function (o, i, e) {
            var t = Bf(o, du.fromRangeStart(e)), n = t.bind(function (e) {
                return Zc.fromPosition(i, o, e.position()).bind(function (e) {
                    return Bf(o, e).map(function (e) {
                        return t = o, n = i, r = e, Ao.isBr(r.position().getNode()) && !1 === _f(r.block()) ? Zc.positionIn(!1, r.block().dom()).bind(function (e) {
                            return e.isEqual(r.position()) ? Zc.fromPosition(n, t, e).bind(function (e) {
                                return Bf(t, e)
                            }) : A.some(r)
                        }).getOr(r) : r;
                        var t, n, r
                    })
                })
            });
            return qa([t, n], Df).filter(function (e) {
                return !1 === Br((r = e).from().block(), r.to().block()) && Lr((n = e).from().block()).bind(function (t) {
                    return Lr(n.to().block()).filter(function (e) {
                        return Br(t, e)
                    })
                }).isSome() && (t = e, !1 === Ao.isContentEditableFalse(t.from().block()) && !1 === Ao.isContentEditableFalse(t.to().block()));
                var t, n, r
            })
        }, Pf = function (e, t, n) {
            return n.collapsed ? Of(e, t, n) : A.none()
        }, Lf = function (e, t, n) {
            return Or(t, e) ? function (e, t) {
                for (var n = O(t) ? t : j(!1), r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode, a = nr.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            }(e, function (e) {
                return n(e) || Br(e, t)
            }).slice(0, -1) : []
        }, If = function (e, t) {
            return Lf(e, t, j(!1))
        }, Mf = If, Ff = function (e, t) {
            return [e].concat(If(e, t))
        }, zf = function (e) {
            var t, n = (t = zr(e), V(t, uo).fold(function () {
                return t
            }, function (e) {
                return t.slice(0, e)
            }));
            return M(n, ki), n
        }, Uf = function (e, t) {
            var n = Ff(t, e);
            return U(n.reverse(), _f).each(ki)
        }, Vf = function (e, t, n, r) {
            if (_f(n)) return Xl(n), Zc.firstPositionIn(n.dom());
            0 === F(Fr(r), function (e) {
                return !_f(e)
            }).length && _f(t) && xi(r, nr.fromTag("br"));
            var o = Zc.prevPosition(n.dom(), du.before(r.dom()));
            return M(zf(t), function (e) {
                xi(r, e)
            }), Uf(e, t), o
        }, Hf = function (e, t, n) {
            if (_f(n)) return ki(n), _f(t) && Xl(t), Zc.firstPositionIn(t.dom());
            var r = Zc.lastPositionIn(n.dom());
            return M(zf(t), function (e) {
                Ni(n, e)
            }), Uf(e, t), r
        }, jf = function (e, t) {
            return Or(t, e) ? (n = Ff(e, t), A.from(n[n.length - 1])) : A.none();
            var n
        }, qf = function (e, t) {
            Zc.positionIn(e, t.dom()).map(function (e) {
                return e.getNode()
            }).map(nr.fromDom).filter(co).each(ki)
        }, $f = function (e, t, n) {
            return qf(!0, t), qf(!1, n), jf(t, n).fold(b(Hf, e, t, n), b(Vf, e, t, n))
        }, Wf = function (e, t, n, r) {
            return t ? $f(e, r, n) : $f(e, n, r)
        }, Kf = function (t, n) {
            var e, r = nr.fromDom(t.getBody());
            return (e = Pf(r.dom(), n, t.selection.getRng()).bind(function (e) {
                return Wf(r, n, e.from().block(), e.to().block())
            })).each(function (e) {
                t.selection.setRng(e.toRange())
            }), e.isSome()
        }, Xf = function (e, t) {
            var n = nr.fromDom(t), r = b(Br, e);
            return Ui(n, ho, r).isSome()
        }, Yf = function (e, t) {
            var n, r, o = Zc.prevPosition(e.dom(), du.fromRangeStart(t)).isNone(),
                i = Zc.nextPosition(e.dom(), du.fromRangeEnd(t)).isNone();
            return !(Xf(n = e, (r = t).startContainer) || Xf(n, r.endContainer)) && o && i
        }, Gf = function (e) {
            var n, r, o, t, i = nr.fromDom(e.getBody()), a = e.selection.getRng();
            return Yf(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), qa([xf(n, nr.fromDom(o.startContainer)), xf(n, nr.fromDom(o.endContainer))], function (e, t) {
                return !1 === Br(e, t) && (o.deleteContents(), Wf(n, !0, e, t).each(function (e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        }, Jf = function (e, t) {
            return !e.selection.isCollapsed() && Gf(e)
        }, Qf = function (a) {
            if (!R(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [], n = {};
            return M(a, function (e, r) {
                var t = lr(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0], i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!R(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function () {
                    var e = arguments.length;
                    if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                    for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                    return {
                        fold: function () {
                            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                            return arguments[r].apply(null, n)
                        }, match: function (e) {
                            var t = lr(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!G(u, function (e) {
                                    return I(t, e)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        }, log: function (e) {
                            console.log(e, {constructors: u, constructor: o, params: n})
                        }
                    }
                }
            }), n
        }, Zf = Qf([{remove: ["element"]}, {moveToElement: ["element"]}, {moveToPosition: ["position"]}]),
        ed = function (e, t, n, r) {
            var o = r.getNode(!1 === t);
            return xf(nr.fromDom(e), nr.fromDom(n.getNode())).map(function (e) {
                return _f(e) ? Zf.remove(e.dom()) : Zf.moveToElement(o)
            }).orThunk(function () {
                return A.some(Zf.moveToElement(o))
            })
        }, td = function (u, s, c) {
            return Zc.fromPosition(s, u, c).bind(function (e) {
                return a = e.getNode(), ho(nr.fromDom(a)) || mo(nr.fromDom(a)) ? A.none() : (t = u, o = e, i = function (e) {
                    return so(nr.fromDom(e)) && !Bc(r, o, t)
                }, Vc(!(n = s), r = c).fold(function () {
                    return Vc(n, o).fold(j(!1), i)
                }, i) ? A.none() : s && Ao.isContentEditableFalse(e.getNode()) ? ed(u, s, c, e) : !1 === s && Ao.isContentEditableFalse(e.getNode(!0)) ? ed(u, s, c, e) : s && qc(c) ? A.some(Zf.moveToPosition(e)) : !1 === s && jc(c) ? A.some(Zf.moveToPosition(e)) : A.none());
                var t, n, r, o, i, a
            })
        }, nd = function (r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", Ao.isElement(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), t && Ao.isContentEditableFalse(n.nextSibling) ? A.some(Zf.moveToElement(n.nextSibling)) : !1 === t && Ao.isContentEditableFalse(n.previousSibling) ? A.some(Zf.moveToElement(n.previousSibling)) : A.none()).fold(function () {
                return td(r, e, o)
            }, A.some) : td(r, e, o).bind(function (e) {
                return t = r, n = o, e.fold(function (e) {
                    return A.some(Zf.remove(e))
                }, function (e) {
                    return A.some(Zf.moveToElement(e))
                }, function (e) {
                    return Bc(n, e, t) ? A.none() : A.some(Zf.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        }, rd = function (e, t, n) {
            if (0 !== n) {
                var r, o, i, a = e.data.slice(t, t + n), u = t + n >= e.data.length, s = 0 === t;
                e.replaceData(t, n, (o = s, i = u, z((r = a).split(""), function (e, t) {
                    return -1 !== " \f\n\r\t\x0B".indexOf(t) || "\xa0" === t ? e.previousCharIsSpace || "" === e.str && o || e.str.length === r.length - 1 && i ? {
                        previousCharIsSpace: !1,
                        str: e.str + "\xa0"
                    } : {previousCharIsSpace: !0, str: e.str + " "} : {previousCharIsSpace: !1, str: e.str + t}
                }, {previousCharIsSpace: !1, str: ""}).str))
            }
        }, od = function (e, t) {
            var n, r = e.data.slice(t), o = r.length - (n = r, n.replace(/^\s+/g, "")).length;
            return rd(e, t, o)
        }, id = function (e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === du.isTextPosition(n) && o === r.parentNode && i > du.before(r).offset() ? du(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        }, ad = function (e) {
            return Ra(e.previousSibling) ? A.some((t = e.previousSibling, Ao.isText(t) ? du(t, t.data.length) : du.after(t))) : e.previousSibling ? Zc.lastPositionIn(e.previousSibling) : A.none();
            var t
        }, ud = function (e) {
            return Ra(e.nextSibling) ? A.some((t = e.nextSibling, Ao.isText(t) ? du(t, 0) : du.before(t))) : e.nextSibling ? Zc.firstPositionIn(e.nextSibling) : A.none();
            var t
        }, sd = function (r, o) {
            return ad(o).orThunk(function () {
                return ud(o)
            }).orThunk(function () {
                return e = r, t = o, n = du.before(t.previousSibling ? t.previousSibling : t.parentNode), Zc.prevPosition(e, n).fold(function () {
                    return Zc.nextPosition(e, du.after(t))
                }, A.some);
                var e, t, n
            })
        }, cd = function (n, r) {
            return ud(r).orThunk(function () {
                return ad(r)
            }).orThunk(function () {
                return e = n, t = r, Zc.nextPosition(e, du.after(t)).fold(function () {
                    return Zc.prevPosition(e, du.before(t))
                }, A.some);
                var e, t
            })
        }, ld = function (e, t, n) {
            return (r = e, o = t, i = n, r ? cd(o, i) : sd(o, i)).map(b(id, n));
            var r, o, i
        }, fd = function (t, n, e) {
            e.fold(function () {
                t.focus()
            }, function (e) {
                t.selection.setRng(e.toRange(), n)
            })
        }, dd = function (e, t) {
            return t && e.schema.getBlockElements().hasOwnProperty(ar(t))
        }, md = function (e) {
            if (_f(e)) {
                var t = nr.fromHtml('<br data-mce-bogus="1">');
                return Si(e), Ni(e, t), A.some(du.before(t.dom()))
            }
            return A.none()
        }, gd = function (e, t, l) {
            var n = Ir(e).filter(function (e) {
                return Ao.isText(e.dom())
            }), r = Mr(e).filter(function (e) {
                return Ao.isText(e.dom())
            });
            return ki(e), qa([n, r, t], function (e, t, n) {
                var r, o, i, a, u = e.dom(), s = t.dom(), c = u.data.length;
                return o = s, i = l, a = Kn((r = u).data).length, r.appendData(o.data), ki(nr.fromDom(o)), i && od(r, a), n.container() === s ? du(u, c) : n
            }).orThunk(function () {
                return l && (n.each(function (e) {
                    return t = e.dom(), n = e.dom().length, r = t.data.slice(0, n), o = r.length - Kn(r).length, rd(t, n - o, o);
                    var t, n, r, o
                }), r.each(function (e) {
                    return od(e.dom(), 0)
                })), t
            })
        }, pd = function (e, t) {
            return n = e.schema.getTextInlineElements(), r = ar(t), fr.call(n, r);
            var n, r
        }, hd = function (t, n, e, r) {
            void 0 === r && (r = !0);
            var o, i = ld(n, t.getBody(), e.dom()), a = Ui(e, b(dd, t), (o = t.getBody(), function (e) {
                return e.dom() === o
            })), u = gd(e, i, pd(t, e));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : a.bind(md).fold(function () {
                r && fd(t, n, u)
            }, function (e) {
                r && fd(t, n, A.some(e))
            })
        }, vd = function (a, u) {
            var e, t, n, r, o;
            return (e = a.getBody(), t = u, n = a.selection.getRng(), r = Fc(t ? 1 : -1, e, n), o = du.fromRangeStart(r), !1 === t && qc(o) ? A.some(Zf.remove(o.getNode(!0))) : t && jc(o) ? A.some(Zf.remove(o.getNode())) : nd(e, t, o)).map(function (e) {
                return e.fold((o = a, i = u, function (e) {
                    return o._selectionOverrides.hideFakeCaret(), hd(o, i, nr.fromDom(e)), !0
                }), (n = a, r = u, function (e) {
                    var t = r ? du.before(e) : du.after(e);
                    return n.selection.setRng(t.toRange()), !0
                }), (t = a, function (e) {
                    return t.selection.setRng(e.toRange()), !0
                }));
                var t, n, r, o, i
            }).getOr(!1)
        }, bd = function (e, t) {
            var n, r = e.selection.getNode();
            return !!Ao.isContentEditableFalse(r) && (n = nr.fromDom(e.getBody()), M(Mi(n, ".mce-offscreen-selection"), ki), hd(e, t, nr.fromDom(e.selection.getNode())), wf(e), !0)
        }, yd = function (e, t) {
            return e.selection.isCollapsed() ? vd(e, t) : bd(e, t)
        }, Cd = function (e) {
            var t, n = function (e, t) {
                for (; t && t !== e;) {
                    if (Ao.isContentEditableTrue(t) || Ao.isContentEditableFalse(t)) return t;
                    t = t.parentNode
                }
                return null
            }(e.getBody(), e.selection.getNode());
            return Ao.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", {"data-mce-bogus": "1"}), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng(du.before(t).toRange())), !0
        }, xd = Ao.isText, wd = function (e) {
            return xd(e) && e.data[0] === sa
        }, Nd = function (e) {
            return xd(e) && e.data[e.data.length - 1] === sa
        }, Ed = function (e) {
            return e.ownerDocument.createTextNode(sa)
        }, Sd = function (e, t) {
            return e ? function (e) {
                if (xd(e.previousSibling)) return Nd(e.previousSibling) || e.previousSibling.appendData(sa), e.previousSibling;
                if (xd(e)) return wd(e) || e.insertData(0, sa), e;
                var t = Ed(e);
                return e.parentNode.insertBefore(t, e), t
            }(t) : function (e) {
                if (xd(e.nextSibling)) return wd(e.nextSibling) || e.nextSibling.insertData(0, sa), e.nextSibling;
                if (xd(e)) return Nd(e) || e.appendData(sa), e;
                var t = Ed(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            }(t)
        }, kd = b(Sd, !0), Td = b(Sd, !1), Ad = function (e, t) {
            return Ao.isText(e.container()) ? Sd(t, e.container()) : Sd(t, e.getNode())
        }, _d = function (e, t) {
            var n = t.get();
            return n && e.container() === n && ma(n)
        }, Rd = function (n, e) {
            return e.fold(function (e) {
                $u.remove(n.get());
                var t = kd(e);
                return n.set(t), A.some(du(t, t.length - 1))
            }, function (e) {
                return Zc.firstPositionIn(e).map(function (e) {
                    if (_d(e, n)) return du(n.get(), 1);
                    $u.remove(n.get());
                    var t = Ad(e, !0);
                    return n.set(t), du(t, 1)
                })
            }, function (e) {
                return Zc.lastPositionIn(e).map(function (e) {
                    if (_d(e, n)) return du(n.get(), n.get().length - 1);
                    $u.remove(n.get());
                    var t = Ad(e, !1);
                    return n.set(t), du(t, t.length - 1)
                })
            }, function (e) {
                $u.remove(n.get());
                var t = Td(e);
                return n.set(t), A.some(du(t, 1))
            })
        }, Dd = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return A.none()
        }, Bd = Qf([{before: ["element"]}, {start: ["element"]}, {end: ["element"]}, {after: ["element"]}]),
        Od = function (e, t) {
            var n = Dc(t, e);
            return n || e
        }, Pd = function (e, t, n) {
            var r = Cf.normalizeForwards(n), o = Od(t, r.container());
            return Cf.findRootInline(e, o, r).fold(function () {
                return Zc.nextPosition(o, r).bind(b(Cf.findRootInline, e, o)).map(function (e) {
                    return Bd.before(e)
                })
            }, A.none)
        }, Ld = function (e, t) {
            return null === Lu(e, t)
        }, Id = function (e, t, n) {
            return Cf.findRootInline(e, t, n).filter(b(Ld, t))
        }, Md = function (e, t, n) {
            var r = Cf.normalizeBackwards(n);
            return Id(e, t, r).bind(function (e) {
                return Zc.prevPosition(e, r).isNone() ? A.some(Bd.start(e)) : A.none()
            })
        }, Fd = function (e, t, n) {
            var r = Cf.normalizeForwards(n);
            return Id(e, t, r).bind(function (e) {
                return Zc.nextPosition(e, r).isNone() ? A.some(Bd.end(e)) : A.none()
            })
        }, zd = function (e, t, n) {
            var r = Cf.normalizeBackwards(n), o = Od(t, r.container());
            return Cf.findRootInline(e, o, r).fold(function () {
                return Zc.prevPosition(o, r).bind(b(Cf.findRootInline, e, o)).map(function (e) {
                    return Bd.after(e)
                })
            }, A.none)
        }, Ud = function (e) {
            return !1 === Cf.isRtl(Hd(e))
        }, Vd = function (e, t, n) {
            return Dd([Pd, Md, Fd, zd], [e, t, n]).filter(Ud)
        }, Hd = function (e) {
            return e.fold(q, q, q, q)
        }, jd = function (e) {
            return e.fold(j("before"), j("start"), j("end"), j("after"))
        }, qd = function (e) {
            return e.fold(Bd.before, Bd.before, Bd.after, Bd.after)
        }, $d = function (n, e, r, t, o, i) {
            return qa([Cf.findRootInline(e, r, t), Cf.findRootInline(e, r, o)], function (e, t) {
                return e !== t && Cf.hasSameParentBlock(r, e, t) ? Bd.after(n ? e : t) : i
            }).getOr(i)
        }, Wd = function (e, r) {
            return e.fold(j(!0), function (e) {
                return n = r, !(jd(t = e) === jd(n) && Hd(t) === Hd(n));
                var t, n
            })
        }, Kd = function (e, t) {
            return e ? t.fold(H(A.some, Bd.start), A.none, H(A.some, Bd.after), A.none) : t.fold(A.none, H(A.some, Bd.before), A.none, H(A.some, Bd.end))
        }, Xd = function (a, u, s, c) {
            var e = Cf.normalizePosition(a, c), l = Vd(u, s, e);
            return Vd(u, s, e).bind(b(Kd, a)).orThunk(function () {
                return t = a, n = u, r = s, o = l, e = c, i = Cf.normalizePosition(t, e), Zc.fromPosition(t, r, i).map(b(Cf.normalizePosition, t)).fold(function () {
                    return o.map(qd)
                }, function (e) {
                    return Vd(n, r, e).map(b($d, t, n, r, i, e)).filter(b(Wd, o))
                }).filter(Ud);
                var t, n, r, o, e, i
            })
        }, Yd = Vd, Gd = Xd, Jd = (b(Xd, !1), b(Xd, !0), qd), Qd = function (e) {
            return e.fold(Bd.start, Bd.start, Bd.end, Bd.end)
        }, Zd = function (e) {
            return O(e.selection.getSel().modify)
        }, em = function (e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(du(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        }, tm = function (e, t) {
            var n = t.selection.getRng(), r = e ? du.fromRangeEnd(n) : du.fromRangeStart(n);
            return !!Zd(t) && (e && ha(r) ? em(!0, t.selection, r) : !(e || !va(r)) && em(!1, t.selection, r))
        }, nm = function (e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        }, rm = function (e) {
            return !1 !== e.settings.inline_boundaries
        }, om = function (e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        }, im = function (t, e, n) {
            return Rd(e, n).map(function (e) {
                return nm(t, e), n
            })
        }, am = function (e, t, n) {
            return function () {
                return !!rm(t) && tm(e, t)
            }
        }, um = {
            move: function (a, u, s) {
                return function () {
                    return !!rm(a) && (t = a, n = u, e = s, r = t.getBody(), o = du.fromRangeStart(t.selection.getRng()), i = b(Cf.isInlineTarget, t), Gd(e, i, r, o).bind(function (e) {
                        return im(t, n, e)
                    })).isSome();
                    var t, n, e, r, o, i
                }
            }, moveNextWord: b(am, !0), movePrevWord: b(am, !1), setupSelectedState: function (a) {
                var u = _i(null), s = b(Cf.isInlineTarget, a);
                return a.on("NodeChange", function (e) {
                    var t, n, r, o, i;
                    rm(a) && (t = s, n = a.dom, r = e.parents, o = F(n.select('*[data-mce-selected="inline-boundary"]'), t), i = F(r, t), M(Q(o, i), b(om, !1)), M(Q(i, o), b(om, !0)), function (e, t) {
                        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                            var n = du.fromRangeStart(e.selection.getRng());
                            du.isTextPosition(n) && !1 === Cf.isAtZwsp(n) && (nm(e, $u.removeAndReposition(t.get(), n)), t.set(null))
                        }
                    }(a, u), function (n, r, o, e) {
                        if (r.selection.isCollapsed()) {
                            var t = F(e, n);
                            M(t, function (e) {
                                var t = du.fromRangeStart(r.selection.getRng());
                                Yd(n, r.getBody(), t).bind(function (e) {
                                    return im(r, o, e)
                                })
                            })
                        }
                    }(s, a, u, e.parents))
                }), u
            }, setCaretPosition: nm
        }, sm = function (t, n) {
            return function (e) {
                return Rd(n, e).map(function (e) {
                    return um.setCaretPosition(t, e), !0
                }).getOr(!1)
            }
        }, cm = function (r, o, i, a) {
            var u = r.getBody(), s = b(Cf.isInlineTarget, r);
            r.undoManager.ignore(function () {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), Yd(s, u, du.fromRangeStart(r.selection.getRng())).map(Qd).map(sm(r, o))
            }), r.nodeChanged()
        }, lm = function (n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), Dc(t, e) || e), u = b(Cf.isInlineTarget, n), s = Yd(u, a, o);
            return s.bind(function (e) {
                return i ? e.fold(j(A.some(Qd(e))), A.none, j(A.some(Jd(e))), A.none) : e.fold(A.none, j(A.some(Jd(e))), A.none, j(A.some(Qd(e))))
            }).map(sm(n, r)).getOrThunk(function () {
                var t = Zc.navigate(i, a, o), e = t.bind(function (e) {
                    return Yd(u, a, e)
                });
                return s.isSome() && e.isSome() ? Cf.findRootInline(u, a, o).map(function (e) {
                    return o = e, !!qa([Zc.firstPositionIn(o), Zc.lastPositionIn(o)], function (e, t) {
                        var n = Cf.normalizePosition(!0, e), r = Cf.normalizePosition(!1, t);
                        return Zc.nextPosition(o, n).map(function (e) {
                            return e.isEqual(r)
                        }).getOr(!0)
                    }).getOr(!0) && (hd(n, i, nr.fromDom(e)), !0);
                    var o
                }).getOr(!1) : e.bind(function (e) {
                    return t.map(function (e) {
                        return i ? cm(n, r, o, e) : cm(n, r, e, o), !0
                    })
                }).getOr(!1)
            })
        }, fm = function (e, t, n) {
            if (e.selection.isCollapsed() && !1 !== e.settings.inline_boundaries) {
                var r = du.fromRangeStart(e.selection.getRng());
                return lm(e, t, n, r)
            }
            return !1
        }, dm = Nr("start", "end"), mm = Nr("rng", "table", "cells"),
        gm = Qf([{removeTable: ["element"]}, {emptyCells: ["cells"]}]), pm = function (e, t) {
            return qi(nr.fromDom(e), "td,th", t)
        }, hm = function (e, t) {
            return Hi(e, "table", t)
        }, vm = function (e) {
            return !1 === Br(e.start(), e.end())
        }, bm = function (e, n) {
            return hm(e.start(), n).bind(function (t) {
                return hm(e.end(), n).bind(function (e) {
                    return Br(t, e) ? A.some(t) : A.none()
                })
            })
        }, ym = function (e) {
            return Mi(e, "td,th")
        }, Cm = function (r, e) {
            var t = pm(e.startContainer, r), n = pm(e.endContainer, r);
            return e.collapsed ? A.none() : qa([t, n], dm).fold(function () {
                return t.fold(function () {
                    return n.bind(function (t) {
                        return hm(t, r).bind(function (e) {
                            return Z(ym(e)).map(function (e) {
                                return dm(e, t)
                            })
                        })
                    })
                }, function (t) {
                    return hm(t, r).bind(function (e) {
                        return ee(ym(e)).map(function (e) {
                            return dm(t, e)
                        })
                    })
                })
            }, function (e) {
                return xm(r, e) ? A.none() : (n = r, hm((t = e).start(), n).bind(function (e) {
                    return ee(ym(e)).map(function (e) {
                        return dm(t.start(), e)
                    })
                }));
                var t, n
            })
        }, xm = function (e, t) {
            return bm(t, e).isSome()
        }, wm = function (e, t) {
            var n, r, o, i, a = b(Br, e);
            return (n = t, r = a, o = pm(n.startContainer, r), i = pm(n.endContainer, r), qa([o, i], dm).filter(vm).filter(function (e) {
                return xm(r, e)
            }).orThunk(function () {
                return Cm(r, n)
            })).bind(function (e) {
                return bm(t = e, a).map(function (e) {
                    return mm(t, e, ym(e))
                });
                var t
            })
        }, Nm = function (e, t) {
            return V(e, function (e) {
                return Br(e, t)
            })
        }, Em = function (n) {
            return (r = n, qa([Nm(r.cells(), r.rng().start()), Nm(r.cells(), r.rng().end())], function (e, t) {
                return r.cells().slice(e, t + 1)
            })).map(function (e) {
                var t = n.cells();
                return e.length === t.length ? gm.removeTable(n.table()) : gm.emptyCells(e)
            });
            var r
        }, Sm = function (e, t) {
            return wm(e, t).bind(Em)
        }, km = function (e) {
            var t = [];
            if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        }, Tm = km, Am = function (e) {
            return Y(e, function (e) {
                var t = Ua(e);
                return t ? [nr.fromDom(t)] : []
            })
        }, _m = function (e) {
            return 1 < km(e).length
        }, Rm = function (e) {
            return F(Am(e), ho)
        }, Dm = function (e) {
            return Mi(e, "td[data-mce-selected],th[data-mce-selected]")
        }, Bm = function (e, t) {
            var n = Dm(t), r = Rm(e);
            return 0 < n.length ? n : r
        }, Om = Bm, Pm = function (e) {
            return Bm(Tm(e.selection.getSel()), nr.fromDom(e.getBody()))
        }, Lm = function (e, t) {
            return M(t, Xl), e.selection.setCursorLocation(t[0].dom(), 0), !0
        }, Im = function (e, t) {
            return hd(e, !1, t), !0
        }, Mm = function (n, e, r, t) {
            return zm(e, t).fold(function () {
                return t = n, Sm(e, r).map(function (e) {
                    return e.fold(b(Im, t), b(Lm, t))
                });
                var t
            }, function (e) {
                return Um(n, e)
            }).getOr(!1)
        }, Fm = function (e, t) {
            return U(Ff(t, e), ho)
        }, zm = function (e, t) {
            return U(Ff(t, e), function (e) {
                return "caption" === ar(e)
            })
        }, Um = function (e, t) {
            return Xl(t), e.selection.setCursorLocation(t.dom(), 0), A.some(!0)
        }, Vm = function (u, s, c, l, f) {
            return Zc.navigate(c, u.getBody(), f).bind(function (e) {
                return r = l, o = c, i = f, a = e, Zc.firstPositionIn(r.dom()).bind(function (t) {
                    return Zc.lastPositionIn(r.dom()).map(function (e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? Um(u, l) : (t = l, n = e, zm(s, nr.fromDom(n.getNode())).map(function (e) {
                    return !1 === Br(e, t)
                }));
                var t, n, r, o, i, a
            }).or(A.some(!0))
        }, Hm = function (a, u, s, e) {
            var c = du.fromRangeStart(a.selection.getRng());
            return Fm(s, e).bind(function (e) {
                return _f(e) ? Um(a, e) : (t = a, n = s, r = u, o = e, i = c, Zc.navigate(r, t.getBody(), i).bind(function (e) {
                    return Fm(n, nr.fromDom(e.getNode())).map(function (e) {
                        return !1 === Br(e, o)
                    })
                }));
                var t, n, r, o, i
            })
        }, jm = function (a, u, e) {
            var s = nr.fromDom(a.getBody());
            return zm(s, e).fold(function () {
                return Hm(a, u, s, e)
            }, function (e) {
                return t = a, n = u, r = s, o = e, i = du.fromRangeStart(t.selection.getRng()), _f(o) ? Um(t, o) : Vm(t, r, n, o, i);
                var t, n, r, o, i
            }).getOr(!1)
        }, qm = function (e, t) {
            var n, r, o, i, a, u = nr.fromDom(e.selection.getStart(!0)), s = Pm(e);
            return e.selection.isCollapsed() && 0 === s.length ? jm(e, t, u) : (n = e, r = u, o = nr.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Pm(n)).length ? Lm(n, a) : Mm(n, o, i, r))
        }, $m = function (e, t) {
            e.getDoc().execCommand(t, !1, null)
        }, Wm = function (e) {
            yd(e, !1) || fm(e, !1) || Kf(e, !1) || qm(e) || Jf(e, !1) || ($m(e, "Delete"), wf(e))
        }, Km = function (e) {
            yd(e, !0) || fm(e, !0) || Kf(e, !0) || qm(e) || Jf(e, !0) || $m(e, "ForwardDelete")
        }, Xm = function (o, t, e) {
            var n = function (e) {
                return t = o, n = e.dom(), r = wr(n, t), A.from(r).filter(function (e) {
                    return 0 < e.length
                });
                var t, n, r
            };
            return Vi(nr.fromDom(e), function (e) {
                return n(e).isSome()
            }, function (e) {
                return Br(nr.fromDom(t), e)
            }).bind(n)
        }, Ym = function (o) {
            return function (r, e) {
                return A.from(e).map(nr.fromDom).filter(sr).bind(function (e) {
                    return Xm(o, r, e.dom()).or((t = o, n = e.dom(), A.from(di.DOM.getStyle(n, t, !0))));
                    var t, n
                }).getOr("")
            }
        }, Gm = {
            getFontSize: Ym("font-size"), getFontFamily: H(function (e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
            }, Ym("font-family")), toPt: function (e, t) {
                return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, r = t || 0, o = Math.pow(10, r), Math.round(n * o) / o + "pt") : e;
                var n, r, o
            }
        }, Jm = function (e) {
            return Zc.firstPositionIn(e.getBody()).map(function (e) {
                var t = e.container();
                return Ao.isText(t) ? t.parentNode : t
            })
        }, Qm = function (o) {
            return A.from(o.selection.getRng()).bind(function (e) {
                var t, n, r = o.getBody();
                return n = r, (t = e).startContainer === n && 0 === t.startOffset ? A.none() : A.from(o.selection.getStart(!0))
            })
        }, Zm = function (e, t) {
            if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = Ks(e), o = Xs(e);
                    return o ? o[n - 1] || t : r[n - 1] || t
                }
                return t
            }
            return t
        }, eg = function (e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        }, tg = function (e, t, n) {
            return null !== function (e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(e, t, n)
        }, ng = function (e, t, n) {
            return tg(e, t, function (e) {
                return e.nodeName === n
            })
        }, rg = function (e) {
            return e && "TABLE" === e.nodeName
        }, og = function (e, t, n) {
            for (var r = new to(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();) if (Ao.isBr(t)) return !0
        }, ig = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f = e.getRoot(), d = e.schema.getNonEmptyElements();
            if (u = e.getParent(o.parentNode, e.isBlock) || f, r && Ao.isBr(o) && t && e.isEmpty(u)) return A.some(cu(o.parentNode, e.nodeIndex(o)));
            for (i = new to(o, u); s = i[r ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(s) || (l = f, ga(c = s) && !1 === tg(c, l, Pu))) return A.none();
                if (Ao.isText(s) && 0 < s.nodeValue.length) return !1 === ng(s, f, "A") ? A.some(cu(s, r ? s.nodeValue.length : 0)) : A.none();
                if (e.isBlock(s) || d[s.nodeName.toLowerCase()]) return A.none();
                a = s
            }
            return n && a ? A.some(cu(a, 0)) : A.none()
        }, ag = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = e.getRoot(), p = !1;
            if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], l = Ao.isElement(o) && i === o.childNodes.length, s = e.schema.getNonEmptyElements(), c = n, ga(o)) return A.none();
            if (Ao.isElement(o) && i > o.childNodes.length - 1 && (c = !1), Ao.isDocument(o) && (o = g, i = 0), o === g) {
                if (c && (u = o.childNodes[0 < i ? i - 1 : 0])) {
                    if (ga(u)) return A.none();
                    if (s[u.nodeName] || rg(u)) return A.none()
                }
                if (o.hasChildNodes()) {
                    if (i = Math.min(!c && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = Ao.isText(o) && l ? o.data.length : 0, !t && o === g.lastChild && rg(o)) return A.none();
                    if (function (e, t) {
                            for (; t && t !== e;) {
                                if (Ao.isContentEditableFalse(t)) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }(g, o) || ga(o)) return A.none();
                    if (o.hasChildNodes() && !1 === rg(o)) {
                        a = new to(u = o, g);
                        do {
                            if (Ao.isContentEditableFalse(u) || ga(u)) {
                                p = !1;
                                break
                            }
                            if (Ao.isText(u) && 0 < u.nodeValue.length) {
                                i = c ? 0 : u.nodeValue.length, o = u, p = !0;
                                break
                            }
                            if (s[u.nodeName.toLowerCase()] && (!(f = u) || !/^(TD|TH|CAPTION)$/.test(f.nodeName))) {
                                i = e.nodeIndex(u), o = u.parentNode, c || i++, p = !0;
                                break
                            }
                        } while (u = c ? a.next() : a.prev())
                    }
                }
            }
            return t && (Ao.isText(o) && 0 === i && ig(e, l, t, !0, o).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }), Ao.isElement(o) && ((u = o.childNodes[i]) || (u = o.childNodes[i - 1]), !u || !Ao.isBr(u) || (m = "A", (d = u).previousSibling && d.previousSibling.nodeName === m) || og(e, u, !1) || og(e, u, !0) || ig(e, l, t, !0, u).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }))), c && !t && Ao.isText(o) && i === o.nodeValue.length && ig(e, l, t, !1, o).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }), p ? A.some(cu(o, i)) : A.none()
        }, ug = function (e, t) {
            var n = t.collapsed, r = t.cloneRange(), o = cu.fromRangeStart(t);
            return ag(e, n, !0, r).each(function (e) {
                n && cu.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || ag(e, n, !1, r).each(function (e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), eg(t, r) ? A.none() : A.some(r)
        }, sg = function (e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r)
        }, cg = function (e, t, n, r) {
            var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o)
        }, lg = function (e, t) {
            var n, r, o = e.selection, i = e.dom, a = o.getRng();
            ug(i, a).each(function (e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
            });
            var u = a.startOffset, s = a.startContainer;
            if (1 === s.nodeType && s.hasChildNodes()) {
                var c = u > s.childNodes.length - 1;
                s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = c && 3 === s.nodeType ? s.nodeValue.length : 0
            }
            var l = i.getParent(s, i.isBlock), f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "", m = t && t.ctrlKey;
            "LI" !== d || m || (l = f), s && 3 === s.nodeType && u >= s.nodeValue.length && (function (e, t, n) {
                for (var r, o = new to(t, n), i = e.getNonEmptyElements(); r = o.next();) if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
            }(e.schema, s, l) || (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0)), n = i.create("br"), a.insertNode(n), sg(i, o, n), cg(i, o, n, r), e.undoManager.add()
        }, fg = function (e, t) {
            var n = nr.fromTag("br");
            xi(nr.fromDom(t), n), e.undoManager.add()
        }, dg = function (e, t) {
            mg(e.getBody(), t) || wi(nr.fromDom(t), nr.fromTag("br"));
            var n = nr.fromTag("br");
            wi(nr.fromDom(t), n), sg(e.dom, e.selection, n.dom()), cg(e.dom, e.selection, n.dom(), !1), e.undoManager.add()
        }, mg = function (e, t) {
            return n = du.after(t), !!Ao.isBr(n.getNode()) || Zc.nextPosition(e, du.after(t)).map(function (e) {
                return Ao.isBr(e.getNode())
            }).getOr(!1);
            var n
        }, gg = function (e) {
            return e && "A" === e.nodeName && "href" in e
        }, pg = function (e) {
            return e.fold(j(!1), gg, gg, j(!1))
        }, hg = function (e, t) {
            t.fold(v, b(fg, e), b(dg, e), v)
        }, vg = function (e, t) {
            var n, r, o,
                i = (n = e, r = b(Cf.isInlineTarget, n), o = du.fromRangeStart(n.selection.getRng()), Yd(r, n.getBody(), o).filter(pg));
            i.isSome() ? i.each(b(hg, e)) : lg(e, t)
        },
        bg = (Qf([{before: ["element"]}, {on: ["element", "offset"]}, {after: ["element"]}]), Qf([{domRange: ["rng"]}, {relative: ["startSitu", "finishSitu"]}, {exact: ["start", "soffset", "finish", "foffset"]}]), Nr("start", "soffset", "finish", "foffset")),
        yg = er.detect().browser, Cg = function (e, t) {
            var n = cr(t) ? _l(t).length : zr(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        }, xg = function (e) {
            return bg(e.start(), Cg(e.soffset(), e.start()), e.finish(), Cg(e.foffset(), e.finish()))
        }, wg = function (e, t) {
            return Or(e, t) || Br(e, t)
        }, Ng = function (t) {
            return function (e) {
                return wg(t, e.start()) && wg(t, e.finish())
            }
        }, Eg = function (e) {
            return !0 === e.inline || yg.isIE()
        }, Sg = function (e) {
            return bg(nr.fromDom(e.startContainer), e.startOffset, nr.fromDom(e.endContainer), e.endOffset)
        }, kg = function (e) {
            var t = e.getSelection();
            return (t && 0 !== t.rangeCount ? A.from(t.getRangeAt(0)) : A.none()).map(Sg)
        }, Tg = function (e) {
            var t, n = (t = e.dom().ownerDocument.defaultView, nr.fromDom(t));
            return kg(n.dom()).filter(Ng(e))
        }, Ag = function (e, t) {
            return A.from(t).filter(Ng(e)).map(xg)
        }, _g = function (e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), A.some(t)
            } catch (n) {
                return A.none()
            }
        }, Rg = function (e) {
            return (e.bookmark ? e.bookmark : A.none()).bind(b(Ag, nr.fromDom(e.getBody()))).bind(_g)
        }, Dg = function (e) {
            var t = Eg(e) ? Tg(nr.fromDom(e.getBody())) : A.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        }, Bg = function (t) {
            Rg(t).each(function (e) {
                t.selection.setRng(e)
            })
        }, Og = Rg, Pg = function (e, t) {
            var n = e.settings, r = e.dom, o = e.selection, i = e.formatter, a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10), s = e.getParam("indent_use_margin", !1);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || (n.forced_root_block || r.getParent(o.getNode(), r.isBlock) || i.apply("div"), M(o.getSelectedBlocks(), function (e) {
                return function (e, t, n, r, o, i) {
                    if ("false" !== e.getContentEditable(i) && "LI" !== i.nodeName) {
                        var a = n ? "margin" : "padding";
                        if (a = "TABLE" === i.nodeName ? "margin" : a, a += "rtl" === e.getStyle(i, "direction", !0) ? "Right" : "Left", "outdent" === t) {
                            var u = Math.max(0, parseInt(i.style[a] || 0, 10) - r);
                            e.setStyle(i, a, u ? u + o : "")
                        } else u = parseInt(i.style[a] || 0, 10) + r + o, e.setStyle(i, a, u)
                    }
                }(r, t, s, u, a, e)
            }))
        }, Lg = Xt.each, Ig = Xt.extend, Mg = Xt.map, Fg = Xt.inArray;

    function zg(s) {
        var o, i, a, t, c = {state: {}, exec: {}, value: {}}, n = s.settings;
        s.on("PreInit", function () {
            o = s.dom, i = s.selection, n = s.settings, a = s.formatter
        });
        var r = function (e) {
            var t;
            if (!s.quirks.isHidden() && !s.removed) {
                if (e = e.toLowerCase(), t = c.state[e]) return t(e);
                try {
                    return s.getDoc().queryCommandState(e)
                } catch (n) {
                }
                return !1
            }
        }, e = function (e, n) {
            n = n || "exec", Lg(e, function (t, e) {
                Lg(e.toLowerCase().split(","), function (e) {
                    c[n][e] = t
                })
            })
        }, u = function (e, t, n) {
            e = e.toLowerCase(), c.value[e] = function () {
                return t.call(n || s)
            }
        };
        Ig(this, {
            execCommand: function (t, n, r, e) {
                var o, i, a = !1;
                if (!s.removed) {
                    if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? Bg(s) : s.focus(), (e = s.fire("BeforeExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        })).isDefaultPrevented()) return !1;
                    if (i = t.toLowerCase(), o = c.exec[i]) return o(i, n, r), s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    if (Lg(s.plugins, function (e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return s.fire("ExecCommand", {
                                command: t,
                                ui: n,
                                value: r
                            }), !(a = !0)
                        }), a) return a;
                    if (s.theme && s.theme.execCommand && s.theme.execCommand(t, n, r)) return s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    try {
                        a = s.getDoc().execCommand(t, n, r)
                    } catch (u) {
                    }
                    return !!a && (s.fire("ExecCommand", {command: t, ui: n, value: r}), !0)
                }
            }, queryCommandState: r, queryCommandValue: function (e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.value[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandValue(e)
                    } catch (n) {
                    }
                }
            }, queryCommandSupported: function (e) {
                if (e = e.toLowerCase(), c.exec[e]) return !0;
                try {
                    return s.getDoc().queryCommandSupported(e)
                } catch (t) {
                }
                return !1
            }, addCommands: e, addCommand: function (e, o, i) {
                e = e.toLowerCase(), c.exec[e] = function (e, t, n, r) {
                    return o.call(i || s, t, n, r)
                }
            }, addQueryStateHandler: function (e, t, n) {
                e = e.toLowerCase(), c.state[e] = function () {
                    return t.call(n || s)
                }
            }, addQueryValueHandler: u, hasCustomCommand: function (e) {
                return e = e.toLowerCase(), !!c.exec[e]
            }
        });
        var l = function (e, t, n) {
            return t === undefined && (t = !1), n === undefined && (n = null), s.getDoc().execCommand(e, t, n)
        }, f = function (e) {
            return a.match(e)
        }, d = function (e, t) {
            a.toggle(e, t ? {value: t} : undefined), s.nodeChanged()
        }, m = function (e) {
            t = i.getBookmark(e)
        }, g = function () {
            i.moveToBookmark(t)
        };
        e({
            "mceResetDesignMode,mceBeginUndoLevel": function () {
            }, "mceEndUndoLevel,mceAddUndoLevel": function () {
                s.undoManager.add()
            }, "Cut,Copy,Paste": function (e) {
                var t, n = s.getDoc();
                try {
                    l(e)
                } catch (o) {
                    t = !0
                }
                if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) {
                    var r = s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                    fe.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), s.notificationManager.open({
                        text: r,
                        type: "error"
                    })
                }
            }, unlink: function () {
                if (i.isCollapsed()) {
                    var e = s.dom.getParent(s.selection.getStart(), "a");
                    e && s.dom.remove(e, !0)
                } else a.remove("link")
            }, "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                var t = e.substring(7);
                "full" === t && (t = "justify"), Lg("left,center,right,justify".split(","), function (e) {
                    t !== e && a.remove("align" + e)
                }), "none" !== t && d("align" + t)
            }, "InsertUnorderedList,InsertOrderedList": function (e) {
                var t, n;
                l(e), (t = o.getParent(i.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (m(), o.split(n, t), g()))
            }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                d(e)
            }, "ForeColor,HiliteColor": function (e, t, n) {
                d(e, n)
            }, FontName: function (e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontname", {value: Zm(r, o)}), r.nodeChanged()
            }, FontSize: function (e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontsize", {value: Zm(r, o)}), r.nodeChanged()
            }, RemoveFormat: function (e) {
                a.remove(e)
            }, mceBlockQuote: function () {
                d("blockquote")
            }, FormatBlock: function (e, t, n) {
                return d(n || "p")
            }, mceCleanup: function () {
                var e = i.getBookmark();
                s.setContent(s.getContent()), i.moveToBookmark(e)
            }, mceRemoveNode: function (e, t, n) {
                var r = n || i.getNode();
                r !== s.getBody() && (m(), s.dom.remove(r, !0), g())
            }, mceSelectNodeDepth: function (e, t, n) {
                var r = 0;
                o.getParent(i.getNode(), function (e) {
                    if (1 === e.nodeType && r++ === n) return i.select(e), !1
                }, s.getBody())
            }, mceSelectNode: function (e, t, n) {
                i.select(n)
            }, mceInsertContent: function (e, t, n) {
                of(s, n)
            }, mceInsertRawHTML: function (e, t, n) {
                i.setContent("tiny_mce_marker");
                var r = s.getContent();
                s.setContent(r.replace(/tiny_mce_marker/g, function () {
                    return n
                }))
            }, mceToggleFormat: function (e, t, n) {
                d(n)
            }, mceSetContent: function (e, t, n) {
                s.setContent(n)
            }, "Indent,Outdent": function (e) {
                Pg(s, e)
            }, mceRepaint: function () {
            }, InsertHorizontalRule: function () {
                s.execCommand("mceInsertContent", !1, "<hr />")
            }, mceToggleVisualAid: function () {
                s.hasVisual = !s.hasVisual, s.addVisual()
            }, mceReplaceContent: function (e, t, n) {
                s.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.getContent({format: "text"})))
            }, mceInsertLink: function (e, t, n) {
                var r;
                "string" == typeof n && (n = {href: n}), r = o.getParent(i.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || a.remove("link"), n.href && a.apply("link", n, r)
            }, selectAll: function () {
                var e = o.getParent(i.getStart(), Ao.isContentEditableTrue);
                if (e) {
                    var t = o.createRng();
                    t.selectNodeContents(e), i.setRng(t)
                }
            }, "delete": function () {
                Wm(s)
            }, forwardDelete: function () {
                Km(s)
            }, mceNewDocument: function () {
                s.setContent("")
            }, InsertLineBreak: function (e, t, n) {
                return vg(s, n), !0
            }
        });
        var p = function (n) {
            return function () {
                var e = i.isCollapsed() ? [o.getParent(i.getNode(), o.isBlock)] : i.getSelectedBlocks(),
                    t = Mg(e, function (e) {
                        return !!a.matchNode(e, n)
                    });
                return -1 !== Fg(t, !0)
            }
        };
        e({
            JustifyLeft: p("alignleft"),
            JustifyCenter: p("aligncenter"),
            JustifyRight: p("alignright"),
            JustifyFull: p("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                return f(e)
            },
            mceBlockQuote: function () {
                return f("blockquote")
            },
            Outdent: function () {
                var e;
                if (n.inline_styles) {
                    if ((e = o.getParent(i.getStart(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0;
                    if ((e = o.getParent(i.getEnd(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0
                }
                return r("InsertUnorderedList") || r("InsertOrderedList") || !n.inline_styles && !!o.getParent(i.getNode(), "BLOCKQUOTE")
            },
            "InsertUnorderedList,InsertOrderedList": function (e) {
                var t = o.getParent(i.getNode(), "ul,ol");
                return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
            }
        }, "state"), e({
            Undo: function () {
                s.undoManager.undo()
            }, Redo: function () {
                s.undoManager.redo()
            }
        }), u("FontName", function () {
            return Qm(t = s).fold(function () {
                return Jm(t).map(function (e) {
                    return Gm.getFontFamily(t.getBody(), e)
                }).getOr("")
            }, function (e) {
                return Gm.getFontFamily(t.getBody(), e)
            });
            var t
        }, this), u("FontSize", function () {
            return Qm(t = s).fold(function () {
                return Jm(t).map(function (e) {
                    return Gm.getFontSize(t.getBody(), e)
                }).getOr("")
            }, function (e) {
                return Gm.getFontSize(t.getBody(), e)
            });
            var t
        }, this)
    }

    var Ug = Xt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
        Vg = function (a) {
            var u, s, c = this, l = {}, f = function () {
                return !1
            }, d = function () {
                return !0
            };
            u = (a = a || {}).scope || c, s = a.toggleEvent || f;
            var r = function (e, t, n, r) {
                var o, i, a;
                if (!1 === t && (t = f), t) for (t = {func: t}, r && Xt.extend(t, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = l[e]) || (o = l[e] = [], s(e, !0)), n ? o.unshift(t) : o.push(t);
                return c
            }, m = function (e, t) {
                var n, r, o, i, a;
                if (e) for (n = (i = e.toLowerCase().split(" ")).length; n--;) {
                    if (e = i[n], r = l[e], !e) {
                        for (o in l) s(o, !1), delete l[o];
                        return c
                    }
                    if (r) {
                        if (t) for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), l[e] = r); else r.length = 0;
                        r.length || (s(e, !1), delete l[e])
                    }
                } else {
                    for (e in l) s(e, !1);
                    l = {}
                }
                return c
            };
            c.fire = function (e, t) {
                var n, r, o, i;
                if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = u), t.preventDefault || (t.preventDefault = function () {
                        t.isDefaultPrevented = d
                    }, t.stopPropagation = function () {
                        t.isPropagationStopped = d
                    }, t.stopImmediatePropagation = function () {
                        t.isImmediatePropagationStopped = d
                    }, t.isDefaultPrevented = f, t.isPropagationStopped = f, t.isImmediatePropagationStopped = f), a.beforeFire && a.beforeFire(t), n = l[e]) for (r = 0, o = n.length; r < o; r++) {
                    if ((i = n[r]).once && m(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t;
                    if (!1 === i.func.call(u, t)) return t.preventDefault(), t
                }
                return t
            }, c.on = r, c.off = m, c.once = function (e, t, n) {
                return r(e, t, n, {once: !0})
            }, c.has = function (e) {
                return e = e.toLowerCase(), !(!l[e] || 0 === l[e].length)
            }
        };
    Vg.isNative = function (e) {
        return !!Ug[e.toLowerCase()]
    };
    var Hg, jg = function (n) {
            return n._eventDispatcher || (n._eventDispatcher = new Vg({
                scope: n, toggleEvent: function (e, t) {
                    Vg.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
                }
            })), n._eventDispatcher
        }, qg = {
            fire: function (e, t, n) {
                if (this.removed && "remove" !== e) return t;
                if (t = jg(this).fire(e, t, n), !1 !== n && this.parent) for (var r = this.parent(); r && !t.isPropagationStopped();) r.fire(e, t, !1), r = r.parent();
                return t
            }, on: function (e, t, n) {
                return jg(this).on(e, t, n)
            }, off: function (e, t) {
                return jg(this).off(e, t)
            }, once: function (e, t) {
                return jg(this).once(e, t)
            }, hasEventListeners: function (e) {
                return jg(this).has(e)
            }
        }, $g = function (e, t) {
            return e.fire("PreProcess", t)
        }, Wg = function (e, t) {
            return e.fire("PostProcess", t)
        }, Kg = function (e) {
            return e.fire("remove")
        }, Xg = function (e, t) {
            return e.fire("SwitchMode", {mode: t})
        }, Yg = function (e, t, n, r) {
            e.fire("ObjectResizeStart", {target: t, width: n, height: r})
        }, Gg = function (e, t, n, r) {
            e.fire("ObjectResized", {target: t, width: n, height: r})
        }, Jg = function (e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (r) {
            }
        }, Qg = function (e, t, n) {
            var r, o;
            Ii(e, t) && !1 === n ? (o = t, Di(r = e) ? r.dom().classList.remove(o) : Oi(r, o), Li(r)) : n && Pi(e, t)
        }, Zg = function (e, t) {
            Qg(nr.fromDom(e.getBody()), "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e.readonly = !0, e.getBody().contentEditable = "false") : (e.readonly = !1, e.getBody().contentEditable = "true", Jg(e, "StyleWithCSS", !1), Jg(e, "enableInlineTableEditing", !1), Jg(e, "enableObjectResizing", !1), e.focus(), e.nodeChanged())
        }, ep = function (e) {
            return e.readonly ? "readonly" : "design"
        }, tp = di.DOM, np = function (e, t) {
            return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = tp.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
        }, rp = function (e, t, n) {
            var r;
            (r = e).hidden || r.readonly ? !0 === e.readonly && n.preventDefault() : e.fire(t, n)
        }, op = function (i, a) {
            var e, t;
            if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed) if (e = np(i, a), i.settings.event_root) {
                if (Hg || (Hg = {}, i.editorManager.on("removeEditor", function () {
                        var e;
                        if (!i.editorManager.activeEditor && Hg) {
                            for (e in Hg) i.dom.unbind(np(i, e));
                            Hg = null
                        }
                    })), Hg[a]) return;
                t = function (e) {
                    for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                        var o = n[r].getBody();
                        (o === t || tp.isChildOf(t, o)) && rp(n[r], a, e)
                    }
                }, Hg[a] = t, tp.bind(e, a, t)
            } else t = function (e) {
                rp(i, a, e)
            }, tp.bind(e, a, t), i.delegates[a] = t
        }, ip = {
            bindPendingEventDelegates: function () {
                var t = this;
                Xt.each(t._pendingNativeEvents, function (e) {
                    op(t, e)
                })
            }, toggleNativeEvent: function (e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? op(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(np(n, e), e, n.delegates[e]), delete n.delegates[e]))
            }, unbindAllNativeEvents: function () {
                var e, t = this, n = t.getBody(), r = t.dom;
                if (t.delegates) {
                    for (e in t.delegates) t.dom.unbind(np(t, e), e, t.delegates[e]);
                    delete t.delegates
                }
                !t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer()))
            }
        }, ap = ip = Xt.extend({}, qg, ip), up = Xt.each, sp = Xt.explode, cp = {f9: 120, f10: 121, f11: 122},
        lp = Xt.makeMap("alt,ctrl,shift,meta,access");

    function fp(i) {
        var a = {}, r = [], u = function (e) {
            var t, n, r = {};
            for (n in up(sp(e, "+"), function (e) {
                e in lp ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = cp[e] || e.toUpperCase().charCodeAt(0))
            }), t = [r.keyCode], lp) r[n] ? t.push(n) : r[n] = !1;
            return r.id = t.join(","), r.access && (r.alt = !0, fe.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (fe.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r
        }, s = function (e, t, n, r) {
            var o;
            return (o = Xt.map(sp(e, ">"), u))[o.length - 1] = Xt.extend(o[o.length - 1], {
                func: n,
                scope: r || i
            }), Xt.extend(o[0], {desc: i.translate(t), subpatterns: o.slice(1)})
        }, o = function (e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
        }, c = function (e) {
            return e.func ? e.func.call(e.scope) : null
        };
        i.on("keyup keypress keydown", function (t) {
            var e, n;
            ((n = t).altKey || n.ctrlKey || n.metaKey || "keydown" === (e = t).type && 112 <= e.keyCode && e.keyCode <= 123) && !t.isDefaultPrevented() && (up(a, function (e) {
                if (o(t, e)) return r = e.subpatterns.slice(0), "keydown" === t.type && c(e), !0
            }), o(t, r[0]) && (1 === r.length && "keydown" === t.type && c(r[0]), r.shift()))
        }), this.add = function (e, n, r, o) {
            var t;
            return "string" == typeof(t = r) ? r = function () {
                i.execCommand(t, !1, null)
            } : Xt.isArray(t) && (r = function () {
                i.execCommand(t[0], t[1], t[2])
            }), up(sp(Xt.trim(e.toLowerCase())), function (e) {
                var t = s(e, n, r, o);
                a[t.id] = t
            }), !0
        }, this.remove = function (e) {
            var t = s(e);
            return !!a[t.id] && (delete a[t.id], !0)
        }
    }

    var dp = function (e) {
            var t = Pr(e).dom();
            return e.dom() === t.activeElement
        }, mp = function (t) {
            return (e = Pr(t), n = e !== undefined ? e.dom() : document, A.from(n.activeElement).map(nr.fromDom)).filter(function (e) {
                return t.dom().contains(e.dom())
            });
            var e, n
        }, gp = function (t, e) {
            return (n = e, n.collapsed ? A.from(Va(n.startContainer, n.startOffset)).map(nr.fromDom) : A.none()).bind(function (e) {
                return po(e) ? A.some(e) : !1 === Or(t, e) ? A.some(t) : A.none()
            });
            var n
        }, pp = function (t, e) {
            gp(nr.fromDom(t.getBody()), e).bind(function (e) {
                return Zc.firstPositionIn(e.dom())
            }).fold(function () {
                t.selection.normalize()
            }, function (e) {
                return t.selection.setRng(e.toRange())
            })
        }, hp = function (e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        }, vp = function (e) {
            var t, n = e.getBody();
            return n && (t = nr.fromDom(n), dp(t) || mp(t).isSome())
        }, bp = function (e) {
            return e.inline ? vp(e) : (t = e).iframeElement && dp(nr.fromDom(t.iframeElement));
            var t
        }, yp = function (e) {
            return e.editorManager.setActive(e)
        }, Cp = function (e, t) {
            e.removed || (t ? yp(e) : function (t) {
                var e = t.selection, n = t.settings.content_editable, r = t.getBody(), o = e.getRng();
                t.quirks.refreshContentEditable();
                var i, a, u = (i = t, a = e.getNode(), i.dom.getParent(a, function (e) {
                    return "true" === i.dom.getContentEditable(e)
                }));
                if (t.$.contains(r, u)) return hp(u), pp(t, o), yp(t);
                t.bookmark !== undefined && !1 === bp(t) && Og(t).each(function (e) {
                    t.selection.setRng(e), o = e
                }), n || (fe.opera || hp(r), t.getWin().focus()), (fe.gecko || n) && (hp(r), pp(t, o)), yp(t)
            }(e))
        }, xp = bp, wp = function (e, t) {
            return t.dom()[e]
        }, Np = function (e, t) {
            return parseInt(xr(t, e), 10)
        }, Ep = b(wp, "clientWidth"), Sp = b(wp, "clientHeight"), kp = b(Np, "margin-top"), Tp = b(Np, "margin-left"),
        Ap = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m, g = nr.fromDom(e.getBody()),
                p = e.inline ? g : (r = g, nr.fromDom(r.dom().ownerDocument.documentElement)),
                h = (o = e.inline, a = t, u = n, s = (i = p).dom().getBoundingClientRect(), {
                    x: a - (o ? s.left + i.dom().clientLeft + Tp(i) : 0),
                    y: u - (o ? s.top + i.dom().clientTop + kp(i) : 0)
                });
            return l = h.x, f = h.y, d = Ep(c = p), m = Sp(c), 0 <= l && 0 <= f && l <= d && f <= m
        }, _p = function (e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return (t = n, A.from(t).map(nr.fromDom)).map(function (e) {
                return Or(Pr(e), e)
            }).getOr(!1)
        };

    function Rp(n) {
        var t, o = [], i = function () {
            var e, t = n.theme;
            return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                open: e = function () {
                    throw new Error("Theme did not provide a NotificationManager implementation.")
                }, close: e, reposition: e, getArgs: e
            }
        }, a = function () {
            0 < o.length && i().reposition(o)
        }, u = function (t) {
            V(o, function (e) {
                return e === t
            }).each(function (e) {
                o.splice(e, 1)
            })
        }, r = function (r) {
            if (!n.removed && _p(n)) return U(o, function (e) {
                return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                var t, n
            }).getOrThunk(function () {
                n.editorManager.setActive(n);
                var e, t = i().open(r, function () {
                    u(t), a()
                });
                return e = t, o.push(e), a(), t
            })
        };
        return (t = n).on("SkinLoaded", function () {
            var e = t.settings.service_message;
            e && r({text: e, type: "warning", timeout: 0, icon: ""})
        }), t.on("ResizeEditor ResizeWindow", function () {
            he.requestAnimationFrame(a)
        }), t.on("remove", function () {
            M(o.slice(), function (e) {
                i().close(e)
            })
        }), {
            open: r, close: function () {
                A.from(o[0]).each(function (e) {
                    i().close(e), u(e), a()
                })
            }, getNotifications: function () {
                return o
            }
        }
    }

    function Dp(r) {
        var o = [], i = function () {
            var e, t = r.theme;
            return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                open: e = function () {
                    throw new Error("Theme did not provide a WindowManager implementation.")
                }, alert: e, confirm: e, close: e, getParams: e, setParams: e
            }
        }, a = function (e, t) {
            return function () {
                return t ? t.apply(e, arguments) : undefined
            }
        }, u = function (e) {
            var t;
            o.push(e), t = e, r.fire("OpenWindow", {win: t})
        }, s = function (n) {
            V(o, function (e) {
                return e === n
            }).each(function (e) {
                var t;
                o.splice(e, 1), t = n, r.fire("CloseWindow", {win: t}), 0 === o.length && r.focus()
            })
        }, e = function () {
            return A.from(o[o.length - 1])
        };
        return r.on("remove", function () {
            M(o.slice(0), function (e) {
                i().close(e)
            })
        }), {
            windows: o, open: function (e, t) {
                r.editorManager.setActive(r), Dg(r);
                var n = i().open(e, t, s);
                return u(n), n
            }, alert: function (e, t, n) {
                var r = i().alert(e, a(n || this, t), s);
                u(r)
            }, confirm: function (e, t, n) {
                var r = i().confirm(e, a(n || this, t), s);
                u(r)
            }, close: function () {
                e().each(function (e) {
                    i().close(e), s(e)
                })
            }, getParams: function () {
                return e().map(i().getParams).getOr(null)
            }, setParams: function (t) {
                e().each(function (e) {
                    i().setParams(e, t)
                })
            }, getWindows: function () {
                return o
            }
        }
    }

    var Bp = Ci.PluginManager, Op = function (e, t) {
        var n = function (e, t) {
            for (var n in Bp.urls) if (Bp.urls[n] + "/plugin" + t + ".js" === e) return n;
            return null
        }(t, e.suffix);
        return n ? "Failed to load plugin: " + n + " from url " + t : "Failed to load plugin url: " + t
    }, Pp = function (e, t) {
        e.notificationManager.open({type: "error", text: t})
    }, Lp = function (e, t) {
        e._skinLoaded ? Pp(e, t) : e.on("SkinLoaded", function () {
            Pp(e, t)
        })
    }, Ip = function (e, t) {
        Lp(e, Op(e, t))
    }, Mp = function (e, t) {
        Lp(e, "Failed to upload image: " + t)
    }, Fp = Lp, zp = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = window.console;
        r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments))
    }, Up = Ci.PluginManager, Vp = Ci.ThemeManager;

    function Hp() {
        return new (oe.getOrDie("XMLHttpRequest"))
    }

    function jp(u, s) {
        var r = {}, n = function (e, r, o, t) {
            var i, n;
            (i = Hp()).open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function (e) {
                t(e.loaded / e.total * 100)
            }, i.onerror = function () {
                o("Image upload failed due to a XHR Transport error. Code: " + i.status)
            }, i.onload = function () {
                var e, t, n;
                i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
            }, (n = new FormData).append("file", e.blob(), e.filename()), i.send(n)
        }, c = function (e, t) {
            return {url: t, blobInfo: e, status: !0}
        }, l = function (e, t) {
            return {url: "", blobInfo: e, status: !1, error: t}
        }, f = function (e, t) {
            Xt.each(r[e], function (e) {
                e(t)
            }), delete r[e]
        }, o = function (e, n) {
            return e = Xt.grep(e, function (e) {
                return !u.isUploaded(e.blobUri())
            }), de.all(Xt.map(e, function (e) {
                return u.isPending(e.blobUri()) ? (t = e.blobUri(), new de(function (e) {
                    r[t] = r[t] || [], r[t].push(e)
                })) : (o = e, i = s.handler, a = n, u.markPending(o.blobUri()), new de(function (t) {
                    var n;
                    try {
                        var r = function () {
                            n && n.close()
                        };
                        i(o, function (e) {
                            r(), u.markUploaded(o.blobUri(), e), f(o.blobUri(), c(o, e)), t(c(o, e))
                        }, function (e) {
                            r(), u.removeFailed(o.blobUri()), f(o.blobUri(), l(o, e)), t(l(o, e))
                        }, function (e) {
                            e < 0 || 100 < e || (n || (n = a()), n.progressBar.value(e))
                        })
                    } catch (e) {
                        t(l(o, e.message))
                    }
                }));
                var o, i, a, t
            }))
        };
        return !1 === O(s.handler) && (s.handler = n), {
            upload: function (e, t) {
                return s.url || s.handler !== n ? o(e, t) : new de(function (e) {
                    e([])
                })
            }
        }
    }

    var qp = function (e) {
        return oe.getOrDie("atob")(e)
    }, $p = function (e) {
        var t, n, r = decodeURIComponent(e).split(",");
        return (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]), {type: t, data: r[1]}
    }, Wp = function (a) {
        return new de(function (e) {
            var t, n, r, o, i = $p(a);
            try {
                t = qp(i.data)
            } catch (Hw) {
                return void e(new Blob([]))
            }
            for (o = t.length, n = new (oe.getOrDie("Uint8Array"))(o), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
            e(new Blob([n], {type: i.type}))
        })
    }, Kp = function (e) {
        return 0 === e.indexOf("blob:") ? (i = e, new de(function (e, t) {
            var n = function () {
                t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
            };
            try {
                var r = Hp();
                r.open("GET", i, !0), r.responseType = "blob", r.onload = function () {
                    200 === this.status ? e(this.response) : n()
                }, r.onerror = n, r.send()
            } catch (o) {
                n()
            }
        })) : 0 === e.indexOf("data:") ? Wp(e) : null;
        var i
    }, Xp = function (n) {
        return new de(function (e) {
            var t = new (oe.getOrDie("FileReader"));
            t.onloadend = function () {
                e(t.result)
            }, t.readAsDataURL(n)
        })
    }, Yp = $p, Gp = 0, Jp = function (e) {
        return (e || "blobid") + Gp++
    }, Qp = function (n, r, o, t) {
        var i, a;
        0 !== r.src.indexOf("blob:") ? (i = Yp(r.src).data, (a = n.findFirst(function (e) {
            return e.base64() === i
        })) ? o({image: r, blobInfo: a}) : Kp(r.src).then(function (e) {
            a = n.create(Jp(), e, i), n.add(a), o({image: r, blobInfo: a})
        }, function (e) {
            t(e)
        })) : (a = n.getByUri(r.src)) ? o({image: r, blobInfo: a}) : Kp(r.src).then(function (t) {
            Xp(t).then(function (e) {
                i = Yp(e).data, a = n.create(Jp(), t, i), n.add(a), o({image: r, blobInfo: a})
            })
        }, function (e) {
            t(e)
        })
    }, Zp = function (e) {
        return e ? e.getElementsByTagName("img") : []
    }, eh = 0, th = {
        uuid: function (e) {
            return e + eh++ + (t = function () {
                return Math.round(4294967295 * Math.random()).toString(36)
            }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
            var t
        }
    };

    function nh(u) {
        var n, o, i, t, e, a, r, s, c, l, f = (n = [], o = ia.constant, i = function (e) {
            var t, n, r;
            if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
            return t = e.id || th.uuid("blobid"), n = e.name || t, {
                id: o(t),
                name: o(n),
                filename: o(n + "." + (r = e.blob.type, {
                    "image/jpeg": "jpg",
                    "image/jpg": "jpg",
                    "image/gif": "gif",
                    "image/png": "png"
                }[r.toLowerCase()] || "dat")),
                blob: o(e.blob),
                base64: o(e.base64),
                blobUri: o(e.blobUri || ae.createObjectURL(e.blob)),
                uri: o(e.uri)
            }
        }, {
            create: function (e, t, n, r) {
                if (T(e)) return i({id: e, name: r, blob: t, base64: n});
                if (_(e)) return i(e);
                throw new Error("Unknown input type")
            }, add: function (e) {
                t(e.id()) || n.push(e)
            }, get: t = function (t) {
                return e(function (e) {
                    return e.id() === t
                })
            }, getByUri: function (t) {
                return e(function (e) {
                    return e.blobUri() === t
                })
            }, findFirst: e = function (e) {
                return jt.filter(n, e)[0]
            }, removeByUri: function (t) {
                n = jt.filter(n, function (e) {
                    return e.blobUri() !== t || (ae.revokeObjectURL(e.blobUri()), !1)
                })
            }, destroy: function () {
                jt.each(n, function (e) {
                    ae.revokeObjectURL(e.blobUri())
                }), n = []
            }
        }), d = (s = {}, c = function (e, t) {
            return {status: e, resultUri: t}
        }, {
            hasBlobUri: l = function (e) {
                return e in s
            }, getResultUri: function (e) {
                var t = s[e];
                return t ? t.resultUri : null
            }, isPending: function (e) {
                return !!l(e) && 1 === s[e].status
            }, isUploaded: function (e) {
                return !!l(e) && 2 === s[e].status
            }, markPending: function (e) {
                s[e] = c(1, null)
            }, markUploaded: function (e, t) {
                s[e] = c(2, t)
            }, removeFailed: function (e) {
                delete s[e]
            }, destroy: function () {
                s = {}
            }
        }), m = [], g = function (t) {
            return function (e) {
                return u.selection ? t(e) : []
            }
        }, p = function (e, t, n) {
            for (var r = 0; -1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;) ;
            return e
        }, h = function (e, t, n) {
            return e = p(e, 'src="' + t + '"', 'src="' + n + '"'), e = p(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
        }, v = function (t, n) {
            M(u.undoManager.data, function (e) {
                "fragmented" === e.type ? e.fragments = $(e.fragments, function (e) {
                    return h(e, t, n)
                }) : e.content = h(e.content, t, n)
            })
        }, b = function () {
            return u.notificationManager.open({
                text: u.translate("Image uploading..."),
                type: "info",
                timeout: -1,
                progressBar: !0
            })
        }, y = function (e, t) {
            f.removeByUri(e.src), v(e.src, t), u.$(e).attr({
                src: Js(u) ? t + "?" + (new Date).getTime() : t,
                "data-mce-src": u.convertURL(t, "src")
            })
        }, C = function (n) {
            return a || (a = jp(d, {
                url: Zs(u),
                basePath: ec(u),
                credentials: tc(u),
                handler: nc(u)
            })), N().then(g(function (r) {
                var e;
                return e = $(r, function (e) {
                    return e.blobInfo
                }), a.upload(e, b).then(g(function (e) {
                    var t = $(e, function (e, t) {
                        var n = r[t].image;
                        return e.status && Qs(u) ? y(n, e.url) : e.error && Mp(u, e.error), {
                            element: n,
                            status: e.status
                        }
                    });
                    return n && n(t), t
                }))
            }))
        }, x = function (e) {
            if (Gs(u)) return C(e)
        }, w = function (t) {
            return !1 !== G(m, function (e) {
                return e(t)
            }) && (0 !== t.getAttribute("src").indexOf("data:") || Ys(u)(t))
        }, N = function () {
            var o, i, a;
            return r || (o = d, i = f, a = {}, r = {
                findAll: function (e, n) {
                    var t;
                    n || (n = ia.constant(!0)), t = jt.filter(Zp(e), function (e) {
                        var t = e.src;
                        return !!fe.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === fe.transparentSrc) && (0 === t.indexOf("blob:") ? !o.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                    });
                    var r = jt.map(t, function (n) {
                        if (a[n.src]) return new de(function (t) {
                            a[n.src].then(function (e) {
                                if ("string" == typeof e) return e;
                                t({image: n, blobInfo: e.blobInfo})
                            })
                        });
                        var e = new de(function (e, t) {
                            Qp(i, n, e, t)
                        }).then(function (e) {
                            return delete a[e.image.src], e
                        })["catch"](function (e) {
                            return delete a[n.src], e
                        });
                        return a[n.src] = e
                    });
                    return de.all(r)
                }
            }), r.findAll(u.getBody(), w).then(g(function (e) {
                return e = F(e, function (e) {
                    return "string" != typeof e || (Fp(u, e), !1)
                }), M(e, function (e) {
                    v(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                }), e
            }))
        }, E = function (e) {
            return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                var t = d.getResultUri(n);
                if (t) return 'src="' + t + '"';
                var r = f.getByUri(n);
                return r || (r = z(u.editorManager.get(), function (e, t) {
                    return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                }, null)), r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
            })
        };
        return u.on("setContent", function () {
            Gs(u) ? x() : N()
        }), u.on("RawSaveContent", function (e) {
            e.content = E(e.content)
        }), u.on("getContent", function (e) {
            e.source_view || "raw" === e.format || (e.content = E(e.content))
        }), u.on("PostRender", function () {
            u.parser.addNodeFilter("img", function (e) {
                M(e, function (e) {
                    var t = e.attr("src");
                    if (!f.getByUri(t)) {
                        var n = d.getResultUri(t);
                        n && e.attr("src", n)
                    }
                })
            })
        }), {
            blobCache: f, addFilter: function (e) {
                m.push(e)
            }, uploadImages: C, uploadImagesAuto: x, scanForImages: N, destroy: function () {
                f.destroy(), d.destroy(), r = a = null
            }
        }
    }

    var rh = function (e, t) {
        return e.hasOwnProperty(t.nodeName)
    }, oh = function (t, e, n) {
        return r = Mf(nr.fromDom(n), nr.fromDom(e)), V(r, function (e) {
            return rh(t, e.dom())
        }).isSome();
        var r
    }, ih = function (e, t) {
        if (Ao.isText(t)) {
            if (0 === t.nodeValue.length) return !0;
            if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || rh(e, t.nextSibling))) return !0
        }
        return !1
    }, ah = function (e) {
        var t, n, r, o, i, a, u, s, c, l, f, d = e.settings, m = e.dom, g = e.selection, p = e.schema,
            h = p.getBlockElements(), v = g.getStart(), b = e.getBody();
        if (f = d.forced_root_block, v && Ao.isElement(v) && f && (l = b.nodeName.toLowerCase(), p.isValidChild(l, f.toLowerCase()) && !oh(h, b, v))) {
            for (n = (t = g.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, c = xp(e), v = b.firstChild; v;) if (y = h, C = v, Ao.isText(C) || Ao.isElement(C) && !rh(y, C) && !cl(C)) {
                if (ih(h, v)) {
                    v = (u = v).nextSibling, m.remove(u);
                    continue
                }
                a || (a = m.create(f, e.settings.forced_root_block_attrs), v.parentNode.insertBefore(a, v), s = !0), v = (u = v).nextSibling, a.appendChild(u)
            } else a = null, v = v.nextSibling;
            var y, C;
            s && c && (t.setStart(n, r), t.setEnd(o, i), g.setRng(t), e.nodeChanged())
        }
    }, uh = function (e) {
        e.settings.forced_root_block && e.on("NodeChange", b(ah, e))
    }, sh = function (t) {
        return (e = t, Ur(e, 0)).fold(j([t]), function (e) {
            return [t].concat(sh(e))
        });
        var e
    }, ch = function (t) {
        return Vr(t).fold(j([t]), function (e) {
            return "br" === ar(e) ? Ir(e).map(function (e) {
                return [t].concat(ch(e))
            }).getOr([]) : [t].concat(ch(e))
        })
    }, lh = function (o, e) {
        return qa([(i = e, a = i.startContainer, u = i.startOffset, Ao.isText(a) ? 0 === u ? A.some(nr.fromDom(a)) : A.none() : A.from(a.childNodes[u]).map(nr.fromDom)), (t = e, n = t.endContainer, r = t.endOffset, Ao.isText(n) ? r === n.data.length ? A.some(nr.fromDom(n)) : A.none() : A.from(n.childNodes[r - 1]).map(nr.fromDom))], function (e, t) {
            var n = U(sh(o), b(Br, e)), r = U(ch(o), b(Br, t));
            return n.isSome() && r.isSome()
        }).getOr(!1);
        var t, n, r, i, a, u
    }, fh = function (e, t, n, r) {
        var o = n, i = new to(n, o), a = e.schema.getNonEmptyElements();
        do {
            if (3 === n.nodeType && 0 !== Xt.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
            if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
            if (fe.ie && fe.ie < 11 && e.isBlock(n) && e.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
        } while (n = r ? i.next() : i.prev());
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
    }, dh = function (e) {
        var t = e.selection.getSel();
        return t && 0 < t.rangeCount
    };

    function mh(i) {
        var r, o = [];
        "onselectionchange" in i.getDoc() || i.on("NodeChange Click MouseUp KeyUp Focus", function (e) {
            var t, n;
            n = {
                startContainer: (t = i.selection.getRng()).startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            }, "nodechange" !== e.type && eg(n, r) || i.fire("SelectionChange"), r = n
        }), i.on("contextmenu", function () {
            i.fire("SelectionChange")
        }), i.on("SelectionChange", function () {
            var e = i.selection.getStart(!0);
            !e || !fe.range && i.selection.isCollapsed() || dh(i) && !function (e) {
                var t, n;
                if ((n = i.$(e).parentsUntil(i.getBody()).add(e)).length === o.length) {
                    for (t = n.length; 0 <= t && n[t] === o[t]; t--) ;
                    if (-1 === t) return o = n, !0
                }
                return o = n, !1
            }(e) && i.dom.isChildOf(e, i.getBody()) && i.nodeChanged({selectionChange: !0})
        }), i.on("MouseUp", function (e) {
            !e.isDefaultPrevented() && dh(i) && ("IMG" === i.selection.getNode().nodeName ? he.setEditorTimeout(i, function () {
                i.nodeChanged()
            }) : i.nodeChanged())
        }), this.nodeChanged = function (e) {
            var t, n, r, o = i.selection;
            i.initialized && o && !i.settings.disable_nodechange && !i.readonly && (r = i.getBody(), (t = o.getStart(!0) || r).ownerDocument === i.getDoc() && i.dom.isChildOf(t, r) || (t = r), n = [], i.dom.getParent(t, function (e) {
                if (e === r) return !0;
                n.push(e)
            }), (e = e || {}).element = t, e.parents = n, i.fire("NodeChange", e))
        }
    }

    var gh, ph, hh = function (e) {
        var t, n, r, o;
        return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }
    }, vh = function (e, t) {
        return n = (u = e).inline ? hh(u.getBody()) : {
            left: 0,
            top: 0
        }, a = (i = e).getBody(), r = i.inline ? {left: a.scrollLeft, top: a.scrollTop} : {
            left: 0,
            top: 0
        }, {
            pageX: (o = function (e, t) {
                if (t.target.ownerDocument !== e.getDoc()) {
                    var n = hh(e.getContentAreaContainer()),
                        r = (i = (o = e).getBody(), a = o.getDoc().documentElement, u = {
                            left: i.scrollLeft,
                            top: i.scrollTop
                        }, s = {left: i.scrollLeft || a.scrollLeft, top: i.scrollTop || a.scrollTop}, o.inline ? u : s);
                    return {left: t.pageX - n.left + r.left, top: t.pageY - n.top + r.top}
                }
                var o, i, a, u, s;
                return {left: t.pageX, top: t.pageY}
            }(e, t)).left - n.left + r.left, pageY: o.top - n.top + r.top
        };
        var n, r, o, i, a, u
    }, bh = Ao.isContentEditableFalse, yh = Ao.isContentEditableTrue, Ch = function (e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }, xh = function (u, s) {
        return function (e) {
            if (0 === e.button) {
                var t = jt.find(s.dom.getParents(e.target), ia.or(bh, yh));
                if (i = s.getBody(), bh(a = t) && a !== i) {
                    var n = s.dom.getPos(t), r = s.getBody(), o = s.getDoc().documentElement;
                    u.element = t, u.screenX = e.screenX, u.screenY = e.screenY, u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2, u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2, u.relX = e.pageX - n.x, u.relY = e.pageY - n.y, u.width = t.offsetWidth, u.height = t.offsetHeight, u.ghost = function (e, t, n, r) {
                        var o = t.cloneNode(!0);
                        e.dom.setStyles(o, {width: n, height: r}), e.dom.setAttrib(o, "data-mce-selected", null);
                        var i = e.dom.create("div", {
                            "class": "mce-drag-container",
                            "data-mce-bogus": "all",
                            unselectable: "on",
                            contenteditable: "false"
                        });
                        return e.dom.setStyles(i, {
                            position: "absolute",
                            opacity: .5,
                            overflow: "hidden",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            width: n,
                            height: r
                        }), e.dom.setStyles(o, {margin: 0, boxSizing: "border-box"}), i.appendChild(o), i
                    }(s, t, u.width, u.height)
                }
            }
            var i, a
        }
    }, wh = function (l, f) {
        return function (e) {
            if (l.dragging && (s = (i = f).selection, c = s.getSel().getRangeAt(0).startContainer, a = 3 === c.nodeType ? c.parentNode : c, u = l.element, a !== u && !i.dom.isChildOf(a, u) && !bh(a))) {
                var t = (r = l.element, (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"), o),
                    n = f.fire("drop", {targetClone: t, clientX: e.clientX, clientY: e.clientY});
                n.isDefaultPrevented() || (t = n.targetClone, f.undoManager.transact(function () {
                    Ch(l.element), f.insertContent(f.dom.getOuterHTML(t)), f._selectionOverrides.hideFakeCaret()
                }))
            }
            var r, o, i, a, u, s, c;
            Nh(l)
        }
    }, Nh = function (e) {
        e.dragging = !1, e.element = null, Ch(e.ghost)
    }, Eh = function (e) {
        var t, n, r, o, i, a, p, h, v, u, s, c = {};
        t = di.DOM, a = document, n = xh(c, e), p = c, h = e, v = he.throttle(function (e, t) {
            h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
        }, 0), r = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d,
                m = Math.max(Math.abs(e.screenX - p.screenX), Math.abs(e.screenY - p.screenY));
            if (p.element && !p.dragging && 10 < m) {
                if (h.fire("dragstart", {target: p.element}).isDefaultPrevented()) return;
                p.dragging = !0, h.focus()
            }
            if (p.dragging) {
                var g = (f = p, {pageX: (d = vh(h, e)).pageX - f.relX, pageY: d.pageY + 5});
                c = p.ghost, l = h.getBody(), c.parentNode !== l && l.appendChild(c), t = p.ghost, n = g, r = p.width, o = p.height, i = p.maxX, a = p.maxY, s = u = 0, t.style.left = n.pageX + "px", t.style.top = n.pageY + "px", n.pageX + r > i && (u = n.pageX + r - i), n.pageY + o > a && (s = n.pageY + o - a), t.style.width = r - u + "px", t.style.height = o - s + "px", v(e.clientX, e.clientY)
            }
        }, o = wh(c, e), u = c, i = function () {
            u.dragging && s.fire("dragend"), Nh(u)
        }, (s = e).on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function () {
            t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i)
        })
    }, Sh = function (e) {
        var n;
        Eh(e), (n = e).on("drop", function (e) {
            var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
            (bh(t) || bh(n.dom.getContentEditableParent(t))) && e.preventDefault()
        })
    }, kh = function (e) {
        return jt.reduce(e, function (e, t) {
            return e.concat(function (t) {
                var e = function (e) {
                    return jt.map(e, function (e) {
                        return (e = La(e)).node = t, e
                    })
                };
                if (Ao.isElement(t)) return e(t.getClientRects());
                if (Ao.isText(t)) {
                    var n = t.ownerDocument.createRange();
                    return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
                }
            }(t))
        }, [])
    };
    (ph = gh || (gh = {}))[ph.Up = -1] = "Up", ph[ph.Down = 1] = "Down";
    var Th = function (o, i, a, e, u, t) {
        var n, s, c = 0, l = [], r = function (e) {
            var t, n, r;
            for (r = kh([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++) if (n = r[t], !a(n, s)) {
                if (0 < l.length && i(n, jt.last(l)) && c++, n.line = c, u(n)) return !0;
                l.push(n)
            }
        };
        return (s = jt.last(t.getClientRects())) && (r(n = t.getNode()), function (e, t, n, r) {
            for (; r = Rc(r, e, Oa, t);) if (n(r)) return
        }(o, e, r, n)), l
    }, Ah = b(Th, gh.Up, Fa, za), _h = b(Th, gh.Down, za, Fa), Rh = function (n) {
        return function (e) {
            return t = n, e.line > t;
            var t
        }
    }, Dh = function (n) {
        return function (e) {
            return t = n, e.line === t;
            var t
        }
    }, Bh = Ao.isContentEditableFalse, Oh = Rc, Ph = function (e, t) {
        return Math.abs(e.left - t)
    }, Lh = function (e, t) {
        return Math.abs(e.right - t)
    }, Ih = function (e, t) {
        return e >= t.left && e <= t.right
    }, Mh = function (e, o) {
        return jt.reduce(e, function (e, t) {
            var n, r;
            return n = Math.min(Ph(e, o), Lh(e, o)), r = Math.min(Ph(t, o), Lh(t, o)), Ih(o, t) ? t : Ih(o, e) ? e : r === n && Bh(t.node) ? t : r < n ? t : e
        })
    }, Fh = function (e, t, n, r) {
        for (; r = Oh(r, e, Oa, t);) if (n(r)) return
    }, zh = function (e, t, n) {
        var r, o, i, a, u, s, c, l, f = kh((o = e, jt.filter(jt.toArray(o.getElementsByTagName("*")), yc))),
            d = jt.filter(f, function (e) {
                return n >= e.top && n <= e.bottom
            });
        return (r = Mh(d, t)) && (r = Mh((u = e, l = function (t, e) {
            var n;
            return n = jt.filter(kh([e]), function (e) {
                return !t(e, s)
            }), c = c.concat(n), 0 === n.length
        }, (c = []).push(s = r), Fh(gh.Up, u, b(l, Fa), s.node), Fh(gh.Down, u, b(l, za), s.node), c), t)) && yc(r.node) ? (a = t, {
            node: (i = r).node,
            before: Ph(i, a) < Lh(i, a)
        }) : null
    }, Uh = function (i, a, e) {
        return !e.collapsed && z(e.getClientRects(), function (e, t) {
            return e || (o = a, (r = i) >= (n = t).left && r <= n.right && o >= n.top && o <= n.bottom);
            var n, r, o
        }, !1)
    }, Vh = function (t) {
        var e = Ai(function () {
            if (!t.removed && t.selection.getRng().collapsed) {
                var e = Ju(t, t.selection.getRng(), !1);
                t.selection.setRng(e)
            }
        }, 0);
        t.on("focus", function () {
            e.throttle()
        }), t.on("blur", function () {
            e.cancel()
        })
    }, Hh = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        ENTER: 13,
        LEFT: 37,
        RIGHT: 39,
        SPACEBAR: 32,
        TAB: 9,
        UP: 38,
        modifierPressed: function (e) {
            return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
        },
        metaKeyPressed: function (e) {
            return fe.mac ? e.metaKey : e.ctrlKey && !e.altKey
        }
    }, jh = Ao.isContentEditableTrue, qh = Ao.isContentEditableFalse, $h = qc, Wh = jc, Kh = function (e, t) {
        for (var n = e.getBody(); t && t !== n;) {
            if (jh(t) || qh(t)) return t;
            t = t.parentNode
        }
        return null
    }, Xh = function (g) {
        var p, e, t, a = g.getBody(), o = bc(g.getBody(), function (e) {
            return g.dom.isBlock(e)
        }, function () {
            return xp(g)
        }), h = "sel-" + g.dom.uniqueId(), u = function (e) {
            e && g.selection.setRng(e)
        }, s = function () {
            return g.selection.getRng()
        }, v = function (e, t, n, r) {
            return void 0 === r && (r = !0), g.fire("ShowCaret", {
                target: t,
                direction: e,
                before: n
            }).isDefaultPrevented() ? null : (r && g.selection.scrollIntoView(t, -1 === e), o.show(n, t))
        }, b = function (e, t) {
            return t = Fc(e, a, t), -1 === e ? du.fromRangeStart(t) : du.fromRangeEnd(t)
        }, n = function (e) {
            return ga(e) || ya(e) || Ca(e)
        }, y = function (e) {
            return n(e.startContainer) || n(e.endContainer)
        }, c = function (e, t) {
            var n, r, o, i, a, u, s, c, l, f, d = g.$, m = g.dom;
            if (!e) return null;
            if (e.collapsed) {
                if (!y(e)) if (!1 === t) {
                    if (c = b(-1, e), yc(c.getNode(!0))) return v(-1, c.getNode(!0), !1, !1);
                    if (yc(c.getNode())) return v(-1, c.getNode(), !c.isAtEnd(), !1)
                } else {
                    if (c = b(1, e), yc(c.getNode())) return v(1, c.getNode(), !c.isAtEnd(), !1);
                    if (yc(c.getNode(!0))) return v(1, c.getNode(!0), !1, !1)
                }
                return null
            }
            return i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && qh(i.parentNode) && (i = i.parentNode, a = m.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType ? null : (u === a + 1 && (n = i.childNodes[a]), qh(n) ? (l = f = n.cloneNode(!0), (s = g.fire("ObjectSelected", {
                target: n,
                targetClone: l
            })).isDefaultPrevented() ? null : (r = ji(nr.fromDom(g.getBody()), "#" + h).fold(function () {
                return d([])
            }, function (e) {
                return d([e.dom()])
            }), l = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", h)).appendTo(g.getBody()), e = g.dom.createRng(), l === f && fe.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(l)) : (r.empty().append("\xa0").append(l).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({top: m.getPos(n, g.getBody()).y}), r[0].focus(), (o = g.selection.getSel()).removeAllRanges(), o.addRange(e), M(Mi(nr.fromDom(g.getBody()), "*[data-mce-selected]"), function (e) {
                br(e, "data-mce-selected")
            }), n.setAttribute("data-mce-selected", "1"), p = n, C(), e)) : null)
        }, l = function () {
            p && (p.removeAttribute("data-mce-selected"), ji(nr.fromDom(g.getBody()), "#" + h).each(ki), p = null), ji(nr.fromDom(g.getBody()), "#" + h).each(ki), p = null
        }, C = function () {
            o.hide()
        };
        return fe.ceFalse && (function () {
            g.on("mouseup", function (e) {
                var t = s();
                t.collapsed && Ap(g, e.clientX, e.clientY) && u(Gu(g, t, !1))
            }), g.on("click", function (e) {
                var t;
                (t = Kh(g, e.target)) && (qh(t) && (e.preventDefault(), g.focus()), jh(t) && g.dom.isChildOf(t, g.selection.getNode()) && l())
            }), g.on("blur NewBlock", function () {
                l()
            }), g.on("ResizeWindow FullscreenStateChanged", function () {
                return o.reposition()
            });
            var n, r, i = function (e, t) {
                var n, r, o = g.dom.getParent(e, g.dom.isBlock), i = g.dom.getParent(t, g.dom.isBlock);
                return !(!o || !g.dom.isChildOf(o, i) || !1 !== qh(Kh(g, o))) || o && (n = o, r = i, !(g.dom.getParent(n, g.dom.isBlock) === g.dom.getParent(r, g.dom.isBlock))) && function (e) {
                    var t = ls(e);
                    if (!e.firstChild) return !1;
                    var n = du.before(e.firstChild), r = t.next(n);
                    return r && !Wh(r) && !$h(r)
                }(o)
            };
            r = !1, (n = g).on("touchstart", function () {
                r = !1
            }), n.on("touchmove", function () {
                r = !0
            }), n.on("touchend", function (e) {
                var t = Kh(n, e.target);
                qh(t) && (r || (e.preventDefault(), c(Yu(n, t))))
            }), g.on("mousedown", function (e) {
                var t, n = e.target;
                if ((n === a || "HTML" === n.nodeName || g.dom.isChildOf(n, a)) && !1 !== Ap(g, e.clientX, e.clientY)) if (t = Kh(g, n)) qh(t) ? (e.preventDefault(), c(Yu(g, t))) : (l(), jh(t) && e.shiftKey || Uh(e.clientX, e.clientY, g.selection.getRng()) || (C(), g.selection.placeCaretAt(e.clientX, e.clientY))); else if (!1 === yc(n)) {
                    l(), C();
                    var r = zh(a, e.clientX, e.clientY);
                    if (r && !i(e.target, r.node)) {
                        e.preventDefault();
                        var o = v(1, r.node, r.before, !1);
                        g.getBody().focus(), u(o)
                    }
                }
            }), g.on("keypress", function (e) {
                Hh.modifierPressed(e) || (e.keyCode, qh(g.selection.getNode()) && e.preventDefault())
            }), g.on("getSelectionRange", function (e) {
                var t = e.range;
                if (p) {
                    if (!p.parentNode) return void(p = null);
                    (t = t.cloneRange()).selectNode(p), e.range = t
                }
            }), g.on("setSelectionRange", function (e) {
                var t;
                (t = c(e.range, e.forward)) && (e.range = t)
            }), g.on("AfterSetSelectionRange", function (e) {
                var t, n = e.range;
                y(n) || "mcepastebin" === n.startContainer.parentNode.id || C(), t = n.startContainer.parentNode, g.dom.hasClass(t, "mce-offscreen-selection") || l()
            }), g.on("copy", function (e) {
                var t, n = e.clipboardData;
                if (!e.isDefaultPrevented() && e.clipboardData && !fe.ie) {
                    var r = (t = g.dom.get(h)) ? t.getElementsByTagName("*")[0] : t;
                    r && (e.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText))
                }
            }), Sh(g), Vh(g)
        }(), e = g.contentStyles, t = ".mce-content-body", e.push(o.getCss()), e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")), {
            showCaret: v,
            showBlockCaretContainer: function (e) {
                e.hasAttribute("data-mce-caret") && (xa(e), u(s()), g.selection.scrollIntoView(e[0]))
            },
            hideFakeCaret: C,
            destroy: function () {
                o.destroy(), p = null
            }
        }
    }, Yh = function (e, t, n) {
        var r, o, i, a, u = 1;
        for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) {
            if (r = i.lastIndex, "/" === o[1]) u--; else if (!o[1]) {
                if (o[2] in a) continue;
                u++
            }
            if (0 === u) break
        }
        return r
    };

    function Gh(F, z) {
        void 0 === z && (z = Zo());
        var e = function () {
        };
        !1 !== (F = F || {}).fix_self_closing && (F.fix_self_closing = !0);
        var U = F.comment ? F.comment : e, V = F.cdata ? F.cdata : e, H = F.text ? F.text : e,
            j = F.start ? F.start : e, q = F.end ? F.end : e, $ = F.pi ? F.pi : e, W = F.doctype ? F.doctype : e;
        return {
            parse: function (e) {
                var t, n, r, d, o, i, a, m, u, s, g, c, p, l, f, h, v, b, y, C, x, w, N, E, S, k, T, A, _, R = 0,
                    D = [], B = 0, O = Ho.decode,
                    P = Xt.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    L = /((java|vb)script|mhtml):/i, I = function (e) {
                        var t, n;
                        for (t = D.length; t-- && D[t].name !== e;) ;
                        if (0 <= t) {
                            for (n = D.length - 1; t <= n; n--) (e = D[n]).valid && q(e.name);
                            D.length = t
                        }
                    }, M = function (e, t, n, r, o) {
                        var i, a, u, s, c;
                        if (n = (t = t.toLowerCase()) in g ? t : O(n || r || o || ""), p && !m && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) {
                            if (!(i = b[t]) && y) {
                                for (a = y.length; a-- && !(i = y[a]).pattern.test(t);) ;
                                -1 === a && (i = null)
                            }
                            if (!i) return;
                            if (i.validValues && !(n in i.validValues)) return
                        }
                        if (P[t] && !F.allow_script_urls) {
                            var l = n.replace(/[\s\u0000-\u001F]+/g, "");
                            try {
                                l = decodeURIComponent(l)
                            } catch (f) {
                                l = unescape(l)
                            }
                            if (L.test(l)) return;
                            if (c = l, !(s = F).allow_html_data_urls && (/^data:image\//i.test(c) ? !1 === s.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(c) : /^data:/i.test(c))) return
                        }
                        m && (t in P || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({name: t, value: n}))
                    };
                for (S = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), k = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, s = z.getShortEndedElements(), E = F.self_closing_elements || z.getSelfClosingElements(), g = z.getBoolAttrs(), p = F.validate, u = F.remove_internals, _ = F.fix_self_closing, T = z.getSpecialElements(), N = e + ">"; t = S.exec(N);) {
                    if (R < t.index && H(O(e.substr(R, t.index - R))), n = t[6]) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), I(n); else if (n = t[7]) {
                        if (t.index + t[0].length > e.length) {
                            H(O(e.substr(t.index))), R = t.index + t[0].length;
                            continue
                        }
                        if (":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), c = n in s, _ && E[n] && 0 < D.length && D[D.length - 1].name === n && I(n), !p || (l = z.getElementRule(n))) {
                            if (f = !0, p && (b = l.attributes, y = l.attributePatterns), (v = t[8]) ? ((m = -1 !== v.indexOf("data-mce-type")) && u && (f = !1), (d = []).map = {}, v.replace(k, M)) : (d = []).map = {}, p && !m) {
                                if (C = l.attributesRequired, x = l.attributesDefault, w = l.attributesForced, l.removeEmptyAttrs && !d.length && (f = !1), w) for (o = w.length; o--;) a = (h = w[o]).name, "{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                    name: a,
                                    value: A
                                });
                                if (x) for (o = x.length; o--;) (a = (h = x[o]).name) in d.map || ("{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                    name: a,
                                    value: A
                                }));
                                if (C) {
                                    for (o = C.length; o-- && !(C[o] in d.map);) ;
                                    -1 === o && (f = !1)
                                }
                                if (h = d.map["data-mce-bogus"]) {
                                    if ("all" === h) {
                                        R = Yh(z, e, S.lastIndex), S.lastIndex = R;
                                        continue
                                    }
                                    f = !1
                                }
                            }
                            f && j(n, d, c)
                        } else f = !1;
                        if (r = T[n]) {
                            r.lastIndex = R = t.index + t[0].length, (t = r.exec(e)) ? (f && (i = e.substr(R, t.index - R)), R = t.index + t[0].length) : (i = e.substr(R), R = e.length), f && (0 < i.length && H(i, !0), q(n)), S.lastIndex = R;
                            continue
                        }
                        c || (v && v.indexOf("/") === v.length - 1 ? f && q(n) : D.push({name: n, valid: f}))
                    } else (n = t[1]) ? (">" === n.charAt(0) && (n = " " + n), F.allow_conditional_comments || "[if" !== n.substr(0, 3).toLowerCase() || (n = " " + n), U(n)) : (n = t[2]) ? V(n.replace(/<!--|-->/g, "")) : (n = t[3]) ? W(n) : (n = t[4]) && $(n, t[5]);
                    R = t.index + t[0].length
                }
                for (R < e.length && H(O(e.substr(R))), o = D.length - 1; 0 <= o; o--) (n = D[o]).valid && q(n.name)
            }
        }
    }

    (Gh || (Gh = {})).findEndTag = Yh;
    var Jh = Gh, Qh = function (e, t) {
        var n, r, o, i, a, u, s, c, l = t, f = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g, d = e.schema;
        for (u = e.getTempAttrs(), s = l, c = new RegExp(["\\s?(" + u.join("|") + ')="[^"]+"'].join("|"), "gi"), l = s.replace(c, ""), a = d.getShortEndedElements(); i = f.exec(l);) r = f.lastIndex, o = i[0].length, n = a[i[1]] ? r : Jh.findEndTag(d, l, r), l = l.substring(0, r - o) + l.substring(n), f.lastIndex = r - o;
        return ca(l)
    }, Zh = {trimExternal: Qh, trimInternal: Qh}, ev = 0, tv = 2, nv = 1, rv = function (g, p) {
        var e = g.length + p.length + 2, h = new Array(e), v = new Array(e), c = function (e, t, n, r, o) {
            var i = l(e, t, n, r);
            if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n) for (var a = e, u = n; a < t || u < r;) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u); else {
                c(e, i.start, n, i.start - i.diag, o);
                for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                c(i.end, t, i.end - i.diag, r, o)
            }
        }, b = function (e, t, n, r) {
            for (var o = e; o - t < r && o < n && g[o] === p[o - t];) ++o;
            return {start: e, end: o, diag: t}
        }, l = function (e, t, n, r) {
            var o = t - e, i = r - n;
            if (0 === o || 0 === i) return null;
            var a, u, s, c, l, f = o - i, d = i + o, m = (d % 2 == 0 ? d : d + 1) / 2;
            for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                for (u = -a; u <= a; u += 2) {
                    for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l];) h[s] = ++c, ++l;
                    if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r)
                }
                for (u = f - a; u <= f + a; u += 2) {
                    for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l];) v[s] = c--, l--;
                    if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r)
                }
            }
        }, t = [];
        return c(0, g.length, 0, p.length, t), t
    }, ov = function (e) {
        return Ao.isElement(e) ? e.outerHTML : Ao.isText(e) ? Ho.encodeRaw(e.data, !1) : Ao.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : ""
    }, iv = function (e, t, n) {
        var r = function (e) {
            var t, n, r;
            for (r = document.createElement("div"), t = document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
            return t
        }(t);
        if (e.hasChildNodes() && n < e.childNodes.length) {
            var o = e.childNodes[n];
            o.parentNode.insertBefore(r, o)
        } else e.appendChild(r)
    }, av = function (e) {
        return jt.filter(jt.map(e.childNodes, ov), function (e) {
            return 0 < e.length
        })
    }, uv = function (e, t) {
        var n, r, o, i = jt.map(t.childNodes, ov);
        return n = rv(i, e), r = t, o = 0, jt.each(n, function (e) {
            e[0] === ev ? o++ : e[0] === nv ? (iv(r, e[1], o), o++) : e[0] === tv && function (e, t) {
                if (e.hasChildNodes() && t < e.childNodes.length) {
                    var n = e.childNodes[t];
                    n.parentNode.removeChild(n)
                }
            }(r, o)
        }), t
    }, sv = _i(A.none()), cv = function (e) {
        return {type: "fragmented", fragments: e, content: "", bookmark: null, beforeBookmark: null}
    }, lv = function (e) {
        return {type: "complete", fragments: null, content: e, bookmark: null, beforeBookmark: null}
    }, fv = function (e) {
        return "fragmented" === e.type ? e.fragments.join("") : e.content
    }, dv = function (e) {
        var t = nr.fromTag("body", sv.get().getOrThunk(function () {
            var e = document.implementation.createHTMLDocument("undo");
            return sv.set(A.some(e)), e
        }));
        return na(t, fv(e)), M(Mi(t, "*[data-mce-bogus]"), Ti), t.dom().innerHTML
    }, mv = function (n) {
        var e, t, r;
        return e = av(n.getBody()), -1 !== (t = (r = Y(e, function (e) {
            var t = Zh.trimInternal(n.serializer, e);
            return 0 < t.length ? [t] : []
        })).join("")).indexOf("</iframe>") ? cv(r) : lv(t)
    }, gv = function (e, t, n) {
        "fragmented" === t.type ? uv(t.fragments, e.getBody()) : e.setContent(t.content, {format: "raw"}), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
    }, pv = function (e, t) {
        return !(!e || !t) && (r = t, fv(e) === fv(r) || (n = t, dv(e) === dv(n)));
        var n, r
    };

    function hv(u) {
        var s, r, o = this, c = 0, l = [], t = 0, f = function () {
            return 0 === t
        }, i = function (e) {
            f() && (o.typing = e)
        }, d = function (e) {
            u.setDirty(e)
        }, a = function (e) {
            i(!1), o.add({}, e)
        }, n = function () {
            o.typing && (i(!1), o.add())
        };
        return u.on("init", function () {
            o.add()
        }), u.on("BeforeExecCommand", function (e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (n(), o.beforeChange())
        }), u.on("ExecCommand", function (e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && a(e)
        }), u.on("ObjectResizeStart Cut", function () {
            o.beforeChange()
        }), u.on("SaveContent ObjectResized blur", a), u.on("DragEnd", a), u.on("KeyUp", function (e) {
            var t = e.keyCode;
            e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), u.nodeChanged()), 46 !== t && 8 !== t || u.nodeChanged(), r && o.typing && !1 === pv(mv(u), l[0]) && (!1 === u.isDirty() && (d(!0), u.fire("change", {
                level: l[0],
                lastLevel: null
            })), u.fire("TypingUndo"), r = !1, u.nodeChanged()))
        }), u.on("KeyDown", function (e) {
            var t = e.keyCode;
            if (!e.isDefaultPrevented()) if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) o.typing && a(e); else {
                var n = e.ctrlKey && !e.altKey || e.metaKey;
                !(t < 16 || 20 < t) || 224 === t || 91 === t || o.typing || n || (o.beforeChange(), i(!0), o.add({}, e), r = !0)
            }
        }), u.on("MouseDown", function (e) {
            o.typing && a(e)
        }), u.on("input", function (e) {
            var t;
            e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data) && a(e)
        }), u.addShortcut("meta+z", "", "Undo"), u.addShortcut("meta+y,meta+shift+z", "", "Redo"), u.on("AddUndo Undo Redo ClearUndos", function (e) {
            e.isDefaultPrevented() || u.nodeChanged()
        }), o = {
            data: l, typing: !1, beforeChange: function () {
                f() && (s = Bu.getUndoBookmark(u.selection))
            }, add: function (e, t) {
                var n, r, o, i = u.settings;
                if (o = mv(u), e = e || {}, e = Xt.extend(e, o), !1 === f() || u.removed) return null;
                if (r = l[c], u.fire("BeforeAddUndo", {
                        level: e,
                        lastLevel: r,
                        originalEvent: t
                    }).isDefaultPrevented()) return null;
                if (r && pv(r, e)) return null;
                if (l[c] && (l[c].beforeBookmark = s), i.custom_undo_redo_levels && l.length > i.custom_undo_redo_levels) {
                    for (n = 0; n < l.length - 1; n++) l[n] = l[n + 1];
                    l.length--, c = l.length
                }
                e.bookmark = Bu.getUndoBookmark(u.selection), c < l.length - 1 && (l.length = c + 1), l.push(e), c = l.length - 1;
                var a = {level: e, lastLevel: r, originalEvent: t};
                return u.fire("AddUndo", a), 0 < c && (d(!0), u.fire("change", a)), e
            }, undo: function () {
                var e;
                return o.typing && (o.add(), o.typing = !1, i(!1)), 0 < c && (e = l[--c], gv(u, e, !0), d(!0), u.fire("undo", {level: e})), e
            }, redo: function () {
                var e;
                return c < l.length - 1 && (e = l[++c], gv(u, e, !1), d(!0), u.fire("redo", {level: e})), e
            }, clear: function () {
                l = [], c = 0, o.typing = !1, o.data = l, u.fire("ClearUndos")
            }, hasUndo: function () {
                return 0 < c || o.typing && l[0] && !pv(mv(u), l[0])
            }, hasRedo: function () {
                return c < l.length - 1 && !o.typing
            }, transact: function (e) {
                return n(), o.beforeChange(), o.ignore(e), o.add()
            }, ignore: function (e) {
                try {
                    t++, e()
                } finally {
                    t--
                }
            }, extra: function (e, t) {
                var n, r;
                o.transact(e) && (r = l[c].bookmark, n = l[c - 1], gv(u, n, !0), o.transact(t) && (l[c - 1].beforeBookmark = r))
            }
        }
    }

    var vv, bv, yv = ml.isEq, Cv = function (e, t, n) {
        var r = e.formatter.get(n);
        if (r) for (var o = 0; o < r.length; o++) if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
        return !1
    }, xv = function (t, e, n, r) {
        var o = t.dom.getRoot();
        return e !== o && (e = t.dom.getParent(e, function (e) {
            return !!Cv(t, e, n) || e.parentNode === o || !!Ev(t, e, n, r, !0)
        }), Ev(t, e, n, r))
    }, wv = function (e, t, n) {
        return !!yv(t, n.inline) || !!yv(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
    }, Nv = function (e, t, n, r, o, i) {
        var a, u, s, c = n[r];
        if (n.onmatch) return n.onmatch(t, n, r);
        if (c) if ("undefined" == typeof c.length) {
            for (a in c) if (c.hasOwnProperty(a)) {
                if (u = "attributes" === r ? e.getAttrib(t, a) : ml.getStyle(e, t, a), o && !u && !n.exact) return;
                if ((!o || n.exact) && !yv(u, ml.normalizeStyleValue(e, ml.replaceVars(c[a], i), a))) return
            }
        } else for (s = 0; s < c.length; s++) if ("attributes" === r ? e.getAttrib(t, c[s]) : ml.getStyle(e, t, c[s])) return n;
        return n
    }, Ev = function (e, t, n, r, o) {
        var i, a, u, s, c = e.formatter.get(n), l = e.dom;
        if (c && t) for (a = 0; a < c.length; a++) if (i = c[a], wv(e.dom, t, i) && Nv(l, t, i, "attributes", o, r) && Nv(l, t, i, "styles", o, r)) {
            if (s = i.classes) for (u = 0; u < s.length; u++) if (!e.dom.hasClass(t, s[u])) return;
            return i
        }
    }, Sv = {
        matchNode: Ev, matchName: wv, match: function (e, t, n, r) {
            var o;
            return r ? xv(e, r, t, n) : (r = e.selection.getNode(), !!xv(e, r, t, n) || !((o = e.selection.getStart()) === r || !xv(e, o, t, n)))
        }, matchAll: function (r, o, i) {
            var e, a = [], u = {};
            return e = r.selection.getStart(), r.dom.getParent(e, function (e) {
                var t, n;
                for (t = 0; t < o.length; t++) n = o[t], !u[n] && Ev(r, e, n, i) && (u[n] = !0, a.push(n))
            }, r.dom.getRoot()), a
        }, canApply: function (e, t) {
            var n, r, o, i, a, u = e.formatter.get(t), s = e.dom;
            if (u) for (n = e.selection.getStart(), r = ml.getParents(s, n), i = u.length - 1; 0 <= i; i--) {
                if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                for (o = r.length - 1; 0 <= o; o--) if (s.is(r[o], a)) return !0
            }
            return !1
        }, matchesUnInheritedFormatSelector: Cv
    }, kv = function (e, t) {
        return e.splitText(t)
    }, Tv = function (e) {
        var t = e.startContainer, n = e.startOffset, r = e.endContainer, o = e.endOffset;
        return t === r && Ao.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = kv(t, n)).previousSibling, n < o ? (t = r = kv(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Ao.isText(t) && 0 < n && n < t.nodeValue.length && (t = kv(t, n), n = 0), Ao.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = kv(r, o).previousSibling).nodeValue.length)), {
            startContainer: t,
            startOffset: n,
            endContainer: r,
            endOffset: o
        }
    }, Av = sa, _v = "_mce_caret", Rv = function (e) {
        return 0 < function (e) {
            for (var t = []; e;) {
                if (3 === e.nodeType && e.nodeValue !== Av || 1 < e.childNodes.length) return [];
                1 === e.nodeType && t.push(e), e = e.firstChild
            }
            return t
        }(e).length
    }, Dv = function (e) {
        var t;
        if (e) for (e = (t = new to(e, e)).current(); e; e = t.next()) if (3 === e.nodeType) return e;
        return null
    }, Bv = function (e) {
        var t = nr.fromTag("span");
        return hr(t, {id: _v, "data-mce-bogus": "1", "data-mce-type": "format-caret"}), e && Ni(t, nr.fromText(Av)), t
    }, Ov = function (e, t, n) {
        void 0 === n && (n = !0);
        var r, o = e.dom, i = e.selection;
        if (Rv(t)) hd(e, !1, nr.fromDom(t), n); else {
            var a = i.getRng(), u = o.getParent(t, o.isBlock),
                s = ((r = Dv(t)) && r.nodeValue.charAt(0) === Av && r.deleteData(0, 1), r);
            a.startContainer === s && 0 < a.startOffset && a.setStart(s, a.startOffset - 1), a.endContainer === s && 0 < a.endOffset && a.setEnd(s, a.endOffset - 1), o.remove(t, !0), u && o.isEmpty(u) && Xl(nr.fromDom(u)), i.setRng(a)
        }
    }, Pv = function (e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom, o = e.selection;
        if (t) Ov(e, t, n); else if (!(t = Lu(e.getBody(), o.getStart()))) for (; t = r.get(_v);) Ov(e, t, !1)
    }, Lv = function (e, t, n) {
        var r = e.dom, o = r.getParent(n, ia.curry(ml.isTextBlock, e));
        o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (Kl(nr.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n))
    }, Iv = function (e, t) {
        return e.appendChild(t), t
    }, Mv = function (e, t) {
        var n, r, o = (n = function (e, t) {
            return Iv(e, t.cloneNode(!1))
        }, r = t, function (e, t) {
            for (var n = e.length - 1; 0 <= n; n--) t(e[n], n, e)
        }(e, function (e) {
            r = n(r, e)
        }), r);
        return Iv(o, o.ownerDocument.createTextNode(Av))
    }, Fv = function (i) {
        i.on("mouseup keydown", function (e) {
            var t, n, r, o;
            t = i, n = e.keyCode, r = t.selection, o = t.getBody(), Pv(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== Av || Pv(t, Lu(o, r.getStart())), 37 !== n && 39 !== n || Pv(t, Lu(o, r.getStart()))
        })
    }, zv = function (e, t) {
        return e.schema.getTextInlineElements().hasOwnProperty(ar(t)) && !Pu(t.dom()) && !Ao.isBogus(t.dom())
    }, Uv = {}, Vv = jt.filter, Hv = jt.each;
    bv = function (e) {
        var t, n, r = e.selection.getRng();
        t = Ao.matchNodeNames("pre"), r.collapsed || (n = e.selection.getSelectedBlocks(), Hv(Vv(Vv(n, t), function (e) {
            return t(e.previousSibling) && -1 !== jt.indexOf(n, e.previousSibling)
        }), function (e) {
            var t, n;
            t = e.previousSibling, gn(n = e).remove(), gn(t).append("<br><br>").append(n.childNodes)
        }))
    }, Uv[vv = "pre"] || (Uv[vv] = []), Uv[vv].push(bv);
    var jv = function (e, t) {
        Hv(Uv[e], function (e) {
            e(t)
        })
    }, qv = /^(src|href|style)$/, $v = Xt.each, Wv = ml.isEq, Kv = function (e) {
        return /^(TH|TD)$/.test(e.nodeName)
    }, Xv = function (e, t, n) {
        var r, o, i;
        return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], Ao.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), Ao.isText(r) && n && o >= r.nodeValue.length && (r = new to(r, e.getBody()).next() || r), Ao.isText(r) && !n && 0 === o && (r = new to(r, e.getBody()).prev() || r), r
    }, Yv = function (e, t, n, r) {
        var o = e.create(n, r);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o
    }, Gv = function (e, t, n, r) {
        return !(t = ml.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
    }, Jv = function (e, n, r, o, i) {
        var t, a, u, s, c, l, f, d, m, g, p, h, v, b, y = e.dom;
        if (c = y, !(Wv(l = o, (f = n).inline) || Wv(l, f.block) || (f.selector ? Ao.isElement(l) && c.is(l, f.selector) : void 0) || (s = o, n.links && "A" === s.tagName))) return !1;
        if ("all" !== n.remove) for ($v(n.styles, function (e, t) {
            e = ml.normalizeStyleValue(y, ml.replaceVars(e, r), t), "number" == typeof t && (t = e, i = 0), (n.remove_similar || !i || Wv(ml.getStyle(y, i, t), e)) && y.setStyle(o, t, ""), u = 1
        }), u && "" === y.getAttrib(o, "style") && (o.removeAttribute("style"), o.removeAttribute("data-mce-style")), $v(n.attributes, function (e, t) {
            var n;
            if (e = ml.replaceVars(e, r), "number" == typeof t && (t = e, i = 0), !i || Wv(y.getAttrib(i, t), e)) {
                if ("class" === t && (e = y.getAttrib(o, t)) && (n = "", $v(e.split(/\s+/), function (e) {
                        /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                    }), n)) return void y.setAttrib(o, t, n);
                "class" === t && o.removeAttribute("className"), qv.test(t) && o.removeAttribute("data-mce-" + t), o.removeAttribute(t)
            }
        }), $v(n.classes, function (e) {
            e = ml.replaceVars(e, r), i && !y.hasClass(i, e) || y.removeClass(o, e)
        }), a = y.getAttribs(o), t = 0; t < a.length; t++) {
            var C = a[t].nodeName;
            if (0 !== C.indexOf("_") && 0 !== C.indexOf("data-")) return !1
        }
        return "none" !== n.remove ? (d = e, g = n, h = (m = o).parentNode, v = d.dom, b = d.settings.forced_root_block, g.block && (b ? h === v.getRoot() && (g.list_block && Wv(m, g.list_block) || $v(Xt.grep(m.childNodes), function (e) {
            ml.isValid(d, b, e.nodeName.toLowerCase()) ? p ? p.appendChild(e) : (p = Yv(v, e, b), v.setAttribs(p, d.settings.forced_root_block_attrs)) : p = 0
        })) : v.isBlock(m) && !v.isBlock(h) && (Gv(v, m, !1) || Gv(v, m.firstChild, !0, 1) || m.insertBefore(v.create("br"), m.firstChild), Gv(v, m, !0) || Gv(v, m.lastChild, !1, 1) || m.appendChild(v.create("br")))), g.selector && g.inline && !Wv(g.inline, m) || v.remove(m, 1), !0) : void 0
    }, Qv = Jv, Zv = function (s, c, l, e, f) {
        var t, n, d = s.formatter.get(c), m = d[0], a = !0, u = s.dom, r = s.selection, i = function (e) {
            var n, t, r, o, i, a,
                u = (n = s, t = e, r = c, o = l, i = f, $v(ml.getParents(n.dom, t.parentNode).reverse(), function (e) {
                    var t;
                    a || "_start" === e.id || "_end" === e.id || (t = Sv.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e)
                }), a);
            return function (e, t, n, r, o, i, a, u) {
                var s, c, l, f, d, m, g = e.dom;
                if (n) {
                    for (m = n.parentNode, s = r.parentNode; s && s !== m; s = s.parentNode) {
                        for (c = g.clone(s, !1), d = 0; d < t.length; d++) if (Jv(e, t[d], u, c, c)) {
                            c = 0;
                            break
                        }
                        c && (l && c.appendChild(l), f || (f = c), l = c)
                    }
                    !i || a.mixed && g.isBlock(n) || (r = g.split(n, r)), l && (o.parentNode.insertBefore(l, o), f.appendChild(o))
                }
                return r
            }(s, d, u, e, e, !0, m, l)
        }, g = function (e) {
            var t, n, r, o, i;
            if (Ao.isElement(e) && u.getContentEditable(e) && (o = a, a = "true" === u.getContentEditable(e), i = !0), t = Xt.grep(e.childNodes), a && !i) for (n = 0, r = d.length; n < r && !Jv(s, d[n], l, e, e); n++) ;
            if (m.deep && t.length) {
                for (n = 0, r = t.length; n < r; n++) g(t[n]);
                i && (a = o)
            }
        }, p = function (e) {
            var t, n = u.get(e ? "_start" : "_end"), r = n[e ? "firstChild" : "lastChild"];
            return cl(t = r) && Ao.isElement(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), Ao.isText(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), u.remove(n, !0), r
        }, o = function (e) {
            var t, n, r = e.commonAncestorContainer;
            if (e = Sl(s, e, d, !0), m.split) {
                if (e = Tv(e), (t = Xv(s, e, !0)) !== (n = Xv(s, e))) {
                    if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && Kv(n) && n.firstChild && (n = n.firstChild || n), u.isChildOf(t, n) && t !== n && !u.isBlock(n) && !Kv(t) && !Kv(n)) {
                        var o = function (e, t, n, r, o) {
                            var i = (r ? "next" : "previous") + "Sibling", a = e.create(n, o);
                            t.parentNode.insertBefore(a, t);
                            for (var u = [t], s = t; s = s[i];) u.push(s);
                            return u.forEach(function (e) {
                                return a.appendChild(e)
                            }), a
                        }(u, t, "span", !0, {id: "_start", "data-mce-type": "bookmark"});
                        return i(o), void(t = p(!0))
                    }
                    t = Yv(u, t, "span", {id: "_start", "data-mce-type": "bookmark"}), n = Yv(u, n, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    }), i(t), i(n), t = p(!0), n = p()
                } else t = n = i(t);
                e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = u.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = u.nodeIndex(n) + 1
            }
            Tl(u, e, function (e) {
                $v(e, function (e) {
                    g(e), Ao.isElement(e) && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === ml.getTextDecoration(u, e.parentNode) && Jv(s, {
                        deep: !1,
                        exact: !0,
                        inline: "span",
                        styles: {textDecoration: "underline"}
                    }, null, e)
                })
            })
        };
        if (e) e.nodeType ? ((n = u.createRng()).setStartBefore(e), n.setEndAfter(e), o(n)) : o(e); else if ("false" !== u.getContentEditable(r.getNode())) r.isCollapsed() && m.inline && !u.select("td[data-mce-selected],th[data-mce-selected]").length ? function (e, t, n, r) {
            var o, i, a, u, s, c, l, f = e.dom, d = e.selection, m = [], g = d.getRng();
            for (o = g.startContainer, i = g.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) {
                if (Sv.matchNode(e, s, t, n, r)) {
                    c = s;
                    break
                }
                s.nextSibling && (u = !0), m.push(s), s = s.parentNode
            }
            if (c) if (u) {
                a = d.getBookmark(), g.collapse(!0);
                var p = Sl(e, g, e.formatter.get(t), !0);
                p = Tv(p), e.formatter.remove(t, n, p), d.moveToBookmark(a)
            } else {
                l = Lu(e.getBody(), c);
                var h = Bv(!1).dom(), v = Mv(m, h);
                Lv(e, h, l || c), Ov(e, l, !1), d.setCursorLocation(v, 1), f.isEmpty(c) && f.remove(c)
            }
        }(s, c, l, f) : (t = Bu.getPersistentBookmark(s.selection, !0), o(r.getRng()), r.moveToBookmark(t), m.inline && Sv.match(s, c, l, r.getStart()) && ml.moveStart(u, r, r.getRng()), s.nodeChanged()); else {
            e = r.getNode();
            for (var h = 0, v = d.length; h < v && (!d[h].ceFalseOverride || !Jv(s, d[h], l, e, e)); h++) ;
        }
    }, eb = Xt.each, tb = function (e) {
        return e && 1 === e.nodeType && !cl(e) && !Pu(e) && !Ao.isBogus(e)
    }, nb = function (e, t) {
        var n;
        for (n = e; n; n = n[t]) {
            if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
            if (1 === n.nodeType && !cl(n)) return n
        }
        return e
    }, rb = function (e, t, n) {
        var r, o, i = new Wl(e);
        if (t && n && (t = nb(t, "previousSibling"), n = nb(n, "nextSibling"), i.compare(t, n))) {
            for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
            return e.remove(n), Xt.each(Xt.grep(n.childNodes), function (e) {
                t.appendChild(e)
            }), t
        }
        return n
    }, ob = function (e, t, n) {
        eb(e.childNodes, function (e) {
            tb(e) && (t(e) && n(e), e.hasChildNodes() && ob(e, t, n))
        })
    }, ib = function (n, e) {
        return b(function (e, t) {
            return !(!t || !ml.getStyle(n, t, e))
        }, e)
    }, ab = function (r, e, t) {
        return b(function (e, t, n) {
            r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), ub(r, n)
        }, e, t)
    }, ub = function (e, t) {
        "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
    }, sb = function (e, t) {
        var n;
        1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = ml.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null))
    }, cb = function (n, e, r, o) {
        eb(e, function (t) {
            eb(n.dom.select(t.inline, o), function (e) {
                tb(e) && Qv(n, t, r, e, t.exact ? e : null)
            }), function (r, e, t) {
                if (e.clear_child_styles) {
                    var n = e.links ? "*:not(a)" : "*";
                    eb(r.select(n, t), function (n) {
                        tb(n) && eb(e.styles, function (e, t) {
                            r.setStyle(n, t, "")
                        })
                    })
                }
            }(n.dom, t, o)
        })
    }, lb = function (e, t, n, r) {
        (t.styles.color || t.styles.textDecoration) && (Xt.walk(r, b(sb, e), "childNodes"), sb(e, r))
    }, fb = function (e, t, n, r) {
        t.styles && t.styles.backgroundColor && ob(r, ib(e, "fontSize"), ab(e, "backgroundColor", ml.replaceVars(t.styles.backgroundColor, n)))
    }, db = function (e, t, n, r) {
        "sub" !== t.inline && "sup" !== t.inline || (ob(r, ib(e, "fontSize"), ab(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0))
    }, mb = function (e, t, n, r) {
        r && !1 !== t.merge_siblings && (r = rb(e, ml.getNonWhiteSpaceSibling(r), r), r = rb(e, r, ml.getNonWhiteSpaceSibling(r, !0)))
    }, gb = function (t, n, r, o, i) {
        Sv.matchNode(t, i.parentNode, r, o) && Qv(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function (e) {
            if (Sv.matchNode(t, e, r, o)) return Qv(t, n, o, i), !0
        })
    }, pb = Xt.each, hb = function (g, p, h, r) {
        var e, t, v = g.formatter.get(p), b = v[0], o = !r && g.selection.isCollapsed(), i = g.dom, n = g.selection,
            y = function (n, e) {
                if (e = e || b, n) {
                    if (e.onformat && e.onformat(n, e, h, r), pb(e.styles, function (e, t) {
                            i.setStyle(n, t, ml.replaceVars(e, h))
                        }), e.styles) {
                        var t = i.getAttrib(n, "style");
                        t && n.setAttribute("data-mce-style", t)
                    }
                    pb(e.attributes, function (e, t) {
                        i.setAttrib(n, t, ml.replaceVars(e, h))
                    }), pb(e.classes, function (e) {
                        e = ml.replaceVars(e, h), i.hasClass(n, e) || i.addClass(n, e)
                    })
                }
            }, C = function (e, t) {
                var n = !1;
                return !!b.selector && (pb(e, function (e) {
                    if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !Pu(t) ? (y(t, e), !(n = !0)) : void 0
                }), n)
            }, a = function (s, e, t, c) {
                var l, f, d = [], m = !0;
                l = b.inline || b.block, f = s.create(l), y(f), Tl(s, e, function (e) {
                    var a, u = function (e) {
                        var t, n, r, o;
                        if (o = m, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = m, m = "true" === s.getContentEditable(e), r = !0), ml.isEq(t, "br")) return a = 0, void(b.block && s.remove(e));
                        if (b.wrapper && Sv.matchNode(g, e, p, h)) a = 0; else {
                            if (m && !r && b.block && !b.wrapper && ml.isTextBlock(g, t) && ml.isValid(g, n, l)) return e = s.rename(e, l), y(e), d.push(e), void(a = 0);
                            if (b.selector) {
                                var i = C(v, e);
                                if (!b.inline || i) return void(a = 0)
                            }
                            !m || r || !ml.isValid(g, l, t) || !ml.isValid(g, n, l) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || Pu(e) || b.inline && s.isBlock(e) ? (a = 0, pb(Xt.grep(e.childNodes), u), r && (m = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e))
                        }
                    };
                    pb(e, u)
                }), !0 === b.links && pb(d, function (e) {
                    var t = function (e) {
                        "A" === e.nodeName && y(e, b), pb(Xt.grep(e.childNodes), t)
                    };
                    t(e)
                }), pb(d, function (e) {
                    var t, n, r, o, i, a = function (e) {
                        var n = !1;
                        return pb(e.childNodes, function (e) {
                            if ((t = e) && 1 === t.nodeType && !cl(t) && !Pu(t) && !Ao.isBogus(t)) return n = e, !1;
                            var t
                        }), n
                    };
                    n = 0, pb(e.childNodes, function (e) {
                        ml.isWhiteSpaceNode(e) || cl(e) || n++
                    }), t = n, !(1 < d.length) && s.isBlock(e) || 0 !== t ? (b.inline || b.wrapper) && (b.exact || 1 !== t || ((o = a(r = e)) && !cl(o) && Sv.matchName(s, o, b) && (i = s.clone(o, !1), y(i), s.replace(i, r, !0), s.remove(o, 1)), e = i || r), cb(g, v, h, e), gb(g, b, p, h, e), fb(s, b, h, e), db(s, b, h, e), mb(s, b, h, e)) : s.remove(e, 1)
                })
            };
        if ("false" !== i.getContentEditable(n.getNode())) {
            if (b) {
                if (r) r.nodeType ? C(v, r) || ((t = i.createRng()).setStartBefore(r), t.setEndAfter(r), a(i, Sl(g, t, v), 0, !0)) : a(i, r, 0, !0); else if (o && b.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) !function (e, t, n) {
                    var r, o, i, a, u, s, c = e.selection;
                    a = (r = c.getRng(!0)).startOffset, s = r.startContainer.nodeValue, (o = Lu(e.getBody(), c.getStart())) && (i = Dv(o));
                    var l, f, d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    s && 0 < a && a < s.length && d.test(s.charAt(a)) && d.test(s.charAt(a - 1)) ? (u = c.getBookmark(), r.collapse(!0), r = Sl(e, r, e.formatter.get(t)), r = Tv(r), e.formatter.apply(t, n, r), c.moveToBookmark(u)) : (o && i.nodeValue === Av || (l = e.getDoc(), f = Bv(!0).dom(), i = (o = l.importNode(f, !0)).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), c.setCursorLocation(i, a))
                }(g, p, h); else {
                    var u = g.selection.getNode();
                    g.settings.forced_root_block || !v[0].defaultBlock || i.getParent(u, i.isBlock) || hb(g, v[0].defaultBlock), g.selection.setRng(ef(g.selection.getRng())), e = Bu.getPersistentBookmark(g.selection, !0), a(i, Sl(g, n.getRng(), v)), b.styles && lb(i, b, h, u), n.moveToBookmark(e), ml.moveStart(i, n, n.getRng()), g.nodeChanged()
                }
                jv(p, g)
            }
        } else {
            r = n.getNode();
            for (var s = 0, c = v.length; s < c; s++) if (v[s].ceFalseOverride && i.is(r, v[s].selector)) return void y(r, v[s])
        }
    }, vb = {applyFormat: hb}, bb = Xt.each, yb = function (e, t, n, r, o) {
        var i, a, u, s, c, l, f, d;
        null === t.get() && (a = e, u = {}, (i = t).set({}), a.on("NodeChange", function (n) {
            var r = ml.getParents(a.dom, n.element), o = {};
            r = Xt.grep(r, function (e) {
                return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
            }), bb(i.get(), function (e, n) {
                bb(r, function (t) {
                    return a.formatter.matchNode(t, n, {}, e.similar) ? (u[n] || (bb(e, function (e) {
                        e(!0, {node: t, format: n, parents: r})
                    }), u[n] = e), o[n] = e, !1) : !Sv.matchesUnInheritedFormatSelector(a, t, n) && void 0
                })
            }), bb(u, function (e, t) {
                o[t] || (delete u[t], bb(e, function (e) {
                    e(!1, {node: n.element, format: t, parents: r})
                }))
            })
        })), c = n, l = r, f = o, d = (s = t).get(), bb(c.split(","), function (e) {
            d[e] || (d[e] = [], d[e].similar = f), d[e].push(l)
        }), s.set(d)
    }, Cb = {
        get: function (r) {
            var t = {
                valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                alignleft: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "left"},
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                }, {selector: "img,table", collapsed: !1, styles: {"float": "left"}, preview: "font-family font-size"}],
                aligncenter: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "center"},
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "img",
                    collapsed: !1,
                    styles: {display: "block", marginLeft: "auto", marginRight: "auto"},
                    preview: !1
                }, {
                    selector: "table",
                    collapsed: !1,
                    styles: {marginLeft: "auto", marginRight: "auto"},
                    preview: "font-family font-size"
                }],
                alignright: [{
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                }, {
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "right"},
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                }, {
                    selector: "img,table",
                    collapsed: !1,
                    styles: {"float": "right"},
                    preview: "font-family font-size"
                }],
                alignjustify: [{
                    selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: {textAlign: "justify"},
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                }],
                bold: [{inline: "strong", remove: "all"}, {inline: "span", styles: {fontWeight: "bold"}}, {
                    inline: "b",
                    remove: "all"
                }],
                italic: [{inline: "em", remove: "all"}, {inline: "span", styles: {fontStyle: "italic"}}, {
                    inline: "i",
                    remove: "all"
                }],
                underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                    inline: "u",
                    remove: "all"
                }],
                strikethrough: [{inline: "span", styles: {textDecoration: "line-through"}, exact: !0}, {
                    inline: "strike",
                    remove: "all"
                }],
                forecolor: {
                    inline: "span",
                    styles: {color: "%value"},
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                hilitecolor: {
                    inline: "span",
                    styles: {backgroundColor: "%value"},
                    links: !0,
                    remove_similar: !0,
                    clear_child_styles: !0
                },
                fontname: {inline: "span", toggle: !1, styles: {fontFamily: "%value"}, clear_child_styles: !0},
                fontsize: {inline: "span", toggle: !1, styles: {fontSize: "%value"}, clear_child_styles: !0},
                fontsize_class: {inline: "span", attributes: {"class": "%value"}},
                blockquote: {block: "blockquote", wrapper: 1, remove: "all"},
                subscript: {inline: "sub"},
                superscript: {inline: "sup"},
                code: {inline: "code"},
                link: {
                    inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function () {
                        return !0
                    }, onformat: function (n, e, t) {
                        Xt.each(t, function (e, t) {
                            r.setAttrib(n, t, e)
                        })
                    }
                },
                removeformat: [{
                    selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                }, {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
            };
            return Xt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                t[e] = {block: e, remove: "all"}
            }), t
        }
    }, xb = Xt.each, wb = di.DOM, Nb = function (e, t) {
        var n, o, r, m = t && t.schema || Zo({}), g = function (e) {
            var t, n, r;
            return o = "string" == typeof e ? {
                name: e,
                classes: [],
                attrs: {}
            } : e, t = wb.create(o.name), n = t, (r = o).classes.length && wb.addClass(n, r.classes.join(" ")), wb.setAttribs(n, r.attrs), t
        }, p = function (n, e, t) {
            var r, o, i, a, u, s, c, l, f = 0 < e.length && e[0], d = f && f.name;
            if (u = d, s = "string" != typeof(a = n) ? a.nodeName.toLowerCase() : a, c = m.getElementRule(s), i = !(!(l = c && c.parentsRequired) || !l.length) && (u && -1 !== Xt.inArray(l, u) ? u : l[0])) d === i ? (o = e[0], e = e.slice(1)) : o = i; else if (f) o = e[0], e = e.slice(1); else if (!t) return n;
            return o && (r = g(o)).appendChild(n), t && (r || (r = wb.create("div")).appendChild(n), Xt.each(t, function (e) {
                var t = g(e);
                r.insertBefore(t, n)
            })), p(r, e, o && o.siblings)
        };
        return e && e.length ? (o = e[0], n = g(o), (r = wb.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : ""
    }, Eb = function (e) {
        var t, a = {classes: [], attrs: {}};
        return "*" !== (e = a.selector = Xt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
            switch (t) {
                case"#":
                    a.attrs.id = n;
                    break;
                case".":
                    a.classes.push(n);
                    break;
                case":":
                    -1 !== Xt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
            }
            if ("[" === r) {
                var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                i && (a.attrs[i[1]] = i[2])
            }
            return ""
        })), a.name = t || "div", a
    }, Sb = function (e) {
        return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Xt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
            var t = Xt.map(e.split(/(?:~\+|~|\+)/), Eb), n = t.pop();
            return t.length && (n.siblings = t), n
        }).reverse()) : []
    }, kb = function (n, e) {
        var t, r, o, i, a, u, s = "";
        if (!1 === (u = n.settings.preview_styles)) return "";
        "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
        var c = function (e) {
            return e.replace(/%(\w+)/g, "")
        };
        if ("string" == typeof e) {
            if (!(e = n.formatter.get(e))) return;
            e = e[0]
        }
        return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", (i = Sb(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, r = Nb(i, n)) : r = Nb([t], n), o = wb.select(t, r)[0] || r.firstChild, xb(e.styles, function (e, t) {
            (e = c(e)) && wb.setStyle(o, t, e)
        }), xb(e.attributes, function (e, t) {
            (e = c(e)) && wb.setAttrib(o, t, e)
        }), xb(e.classes, function (e) {
            e = c(e), wb.hasClass(o, e) || wb.addClass(o, e)
        }), n.fire("PreviewFormats"), wb.setStyles(r, {
            position: "absolute",
            left: -65535
        }), n.getBody().appendChild(r), a = wb.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, xb(u.split(" "), function (e) {
            var t = wb.getStyle(o, e, !0);
            if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = wb.getStyle(n.getBody(), e, !0), "#ffffff" === wb.toHex(t).toLowerCase()) || "color" === e && "#000000" === wb.toHex(t).toLowerCase())) {
                if ("font-size" === e && /em|%$/.test(t)) {
                    if (0 === a) return;
                    t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px"
                }
                "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";"
            }
        }), n.fire("AfterPreviewFormats"), wb.remove(r), s)
    }, Tb = function (e, t, n, r, o) {
        var i = t.get(n);
        !Sv.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? vb.applyFormat(e, n, r, o) : Zv(e, n, r, o)
    }, Ab = function (e) {
        e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
        for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
        e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
    };

    function _b(e) {
        var t, n, r, o = (t = e, n = {}, (r = function (e, t) {
            e && ("string" != typeof e ? Xt.each(e, function (e, t) {
                r(t, e)
            }) : (t = t.length ? t : [t], Xt.each(t, function (e) {
                "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
            }), n[e] = t))
        })(Cb.get(t.dom)), r(t.settings.formats), {
            get: function (e) {
                return e ? n[e] : n
            }, register: r, unregister: function (e) {
                return e && n[e] && delete n[e], n
            }
        }), i = _i(null);
        return Ab(e), Fv(e), {
            get: o.get,
            register: o.register,
            unregister: o.unregister,
            apply: b(vb.applyFormat, e),
            remove: b(Zv, e),
            toggle: b(Tb, e, o),
            match: b(Sv.match, e),
            matchAll: b(Sv.matchAll, e),
            matchNode: b(Sv.matchNode, e),
            canApply: b(Sv.canApply, e),
            formatChanged: b(yb, e, i),
            getCssText: b(kb, e)
        }
    }

    var Rb, Db = Object.prototype.hasOwnProperty, Bb = (Rb = function (e, t) {
            return t
        }, function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) Db.call(o, i) && (n[i] = Rb(n[i], o[i]))
            }
            return n
        }), Ob = {
            register: function (t, s, c) {
                t.addAttributeFilter("data-mce-tabindex", function (e, t) {
                    for (var n, r = e.length; r--;) (n = e[r]).attr("tabindex", n.attributes.map["data-mce-tabindex"]), n.attr(t, null)
                }), t.addAttributeFilter("src,href,style", function (e, t) {
                    for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;) (r = (n = e[o]).attributes.map[i]) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attributes.map[t], "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
                }), t.addAttributeFilter("class", function (e) {
                    for (var t, n, r = e.length; r--;) (n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
                }), t.addAttributeFilter("data-mce-type", function (e, t, n) {
                    for (var r, o = e.length; o--;) "bookmark" !== (r = e[o]).attributes.map["data-mce-type"] || n.cleanup || r.remove()
                }), t.addNodeFilter("noscript", function (e) {
                    for (var t, n = e.length; n--;) (t = e[n].firstChild) && (t.value = Ho.decode(t.value))
                }), t.addNodeFilter("script,style", function (e, t) {
                    for (var n, r, o, i = e.length, a = function (e) {
                        return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                    }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
                }), t.addNodeFilter("#comment", function (e) {
                    for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
                }), t.addNodeFilter("xml:namespace,input", function (e, t) {
                    for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || "type" in n.attributes.map || n.attr("type", "text"))
                }), t.addAttributeFilter("data-mce-type", function (e) {
                    M(e, function (e) {
                        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                    })
                }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function (e, t) {
                    for (var n = e.length; n--;) e[n].attr(t, null)
                })
            }, trimTrailingBr: function (e) {
                var t, n, r = function (e) {
                    return e && "br" === e.name
                };
                r(t = e.lastChild) && r(n = t.prev) && (t.remove(), n.remove())
            }
        }, Pb = {
            process: function (e, t, n) {
                return f = n, (l = e) && l.hasEventListeners("PreProcess") && !f.no_events ? (o = t, i = n, c = (r = e).dom, o = o.cloneNode(!0), (a = document.implementation).createHTMLDocument && (u = a.createHTMLDocument(""), Xt.each("BODY" === o.nodeName ? o.childNodes : [o], function (e) {
                    u.body.appendChild(u.importNode(e, !0))
                }), o = "BODY" !== o.nodeName ? u.body.firstChild : u.body, s = c.doc, c.doc = u), $g(r, Bb(i, {node: o})), s && (c.doc = s), o) : t;
                var r, o, i, a, u, s, c, l, f
            }
        }, Lb = function (e, a, u) {
            e.addNodeFilter("font", function (e) {
                M(e, function (e) {
                    var t, n = a.parse(e.attr("style")), r = e.attr("color"), o = e.attr("face"), i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, M(["color", "face", "size"], function (e) {
                        t.attr(e, null)
                    })
                })
            })
        }, Ib = function (e, t) {
            var n, r = ti();
            t.convert_fonts_to_spans && Lb(e, r, Xt.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function (e) {
                M(e, function (e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        }, Mb = {
            register: function (e, t) {
                t.inline_styles && Ib(e, t)
            }
        }, Fb = /^[ \t\r\n]*$/,
        zb = {"#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11},
        Ub = function (e, t, n) {
            var r, o, i = n ? "lastChild" : "firstChild", a = n ? "prev" : "next";
            if (e[i]) return e[i];
            if (e !== t) {
                if (r = e[a]) return r;
                for (o = e.parent; o && o !== t; o = o.parent) if (r = o[a]) return r
            }
        }, Vb = function () {
            function a(e, t) {
                this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
            }

            return a.create = function (e, t) {
                var n, r;
                if (n = new a(e, zb[e] || 1), t) for (r in t) n.attr(r, t[r]);
                return n
            }, a.prototype.replace = function (e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this
            }, a.prototype.attr = function (e, t) {
                var n, r;
                if ("string" != typeof e) {
                    for (r in e) this.attr(r, e[r]);
                    return this
                }
                if (n = this.attributes) {
                    if (t !== undefined) {
                        if (null === t) {
                            if (e in n.map) for (delete n.map[e], r = n.length; r--;) if (n[r].name === e) return n = n.splice(r, 1), this;
                            return this
                        }
                        if (e in n.map) {
                            for (r = n.length; r--;) if (n[r].name === e) {
                                n[r].value = t;
                                break
                            }
                        } else n.push({name: e, value: t});
                        return n.map[e] = t, this
                    }
                    return n.map[e]
                }
            }, a.prototype.clone = function () {
                var e, t, n, r, o, i = new a(this.name, this.type);
                if (n = this.attributes) {
                    for ((o = []).map = {}, e = 0, t = n.length; e < t; e++) "id" !== (r = n[e]).name && (o[o.length] = {
                        name: r.name,
                        value: r.value
                    }, o.map[r.name] = r.value);
                    i.attributes = o
                }
                return i.value = this.value, i.shortEnded = this.shortEnded, i
            }, a.prototype.wrap = function (e) {
                return this.parent.insert(e, this), e.append(this), this
            }, a.prototype.unwrap = function () {
                var e, t;
                for (e = this.firstChild; e;) t = e.next, this.insert(e, this, !0), e = t;
                this.remove()
            }, a.prototype.remove = function () {
                var e = this.parent, t = this.next, n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
            }, a.prototype.append = function (e) {
                var t;
                return e.parent && e.remove(), (t = this.lastChild) ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
            }, a.prototype.insert = function (e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
            }, a.prototype.getAll = function (e) {
                var t, n = [];
                for (t = this.firstChild; t; t = Ub(t, this)) t.name === e && n.push(t);
                return n
            }, a.prototype.empty = function () {
                var e, t, n;
                if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = Ub(n, this)) e.push(n);
                    for (t = e.length; t--;) (n = e[t]).parent = n.firstChild = n.lastChild = n.next = n.prev = null
                }
                return this.firstChild = this.lastChild = null, this
            }, a.prototype.isEmpty = function (e, t, n) {
                var r, o, i = this.firstChild;
                if (t = t || {}, i) do {
                    if (1 === i.type) {
                        if (i.attributes.map["data-mce-bogus"]) continue;
                        if (e[i.name]) return !1;
                        for (r = i.attributes.length; r--;) if ("name" === (o = i.attributes[r].name) || 0 === o.indexOf("data-mce-bookmark")) return !1
                    }
                    if (8 === i.type) return !1;
                    if (3 === i.type && !Fb.test(i.value)) return !1;
                    if (3 === i.type && i.parent && t[i.parent.name] && Fb.test(i.value)) return !1;
                    if (n && n(i)) return !1
                } while (i = Ub(i, this));
                return !0
            }, a.prototype.walk = function (e) {
                return Ub(this, null, e)
            }, a
        }(), Hb = function (e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Vb("br", 1)).shortEnded = !0 : r.empty().append(new Vb("#text", 3)).value = "\xa0"
        }, jb = function (e) {
            return qb(e, "#text") && "\xa0" === e.firstChild.value
        }, qb = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        }, $b = function (r, e, t, n) {
            return n.isEmpty(e, t, function (e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        }, Wb = function (e, t) {
            return e && (t[e.name] || "br" === e.name)
        }, Kb = function (e, p) {
            var h = e.schema;
            p.remove_trailing_brs && e.addNodeFilter("br", function (e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length, d = Xt.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(), g = h.getNonEmptyElements();
                for (d.body = 1, r = 0; r < f; r++) if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                    for (u = o.prev; u;) {
                        if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                            if ("br" !== s) break;
                            if ("br" === s) {
                                o = null;
                                break
                            }
                        }
                        u = u.prev
                    }
                    o && (o.remove(), $b(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Hb(p, n, d, i)))
                } else {
                    for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                    a === i && !0 !== p.padd_empty_with_br && ((l = new Vb("#text", 3)).value = "\xa0", o.replace(l))
                }
            }), e.addAttributeFilter("href", function (e) {
                var t, n, r, o = e.length;
                if (!p.allow_unsafe_link_target) for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), r = n ? Xt.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function (e) {
                    return 0 < e.length
                }).concat(["noopener"]).sort().join(" ")))
            }), p.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
                for (var t, n, r, o, i = e.length; i--;) if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;) ;
            }), p.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
                for (var t, n, r = e.length; r--;) if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name) if (t.prev && "li" === t.prev.name) t.prev.append(t); else {
                    var o = new Vb("li", 1);
                    o.attr("style", "list-style-type: none"), t.wrap(o)
                }
            }), p.validate && h.getValidClasses() && e.addAttributeFilter("class", function (e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            })
        }, Xb = Xt.makeMap, Yb = Xt.each, Gb = Xt.explode, Jb = Xt.extend;

    function Qb(k, T) {
        void 0 === T && (T = Zo());
        var A = {}, _ = [], R = {}, D = {};
        (k = k || {}).validate = !("validate" in k) || k.validate, k.root_name = k.root_name || "body";
        var B = function (e) {
            var t, n, r;
            n in A && ((r = R[n]) ? r.push(e) : R[n] = [e]), t = _.length;
            for (; t--;) (n = _[t].name) in e.attributes.map && ((r = D[n]) ? r.push(e) : D[n] = [e]);
            return e
        }, e = {
            schema: T, addAttributeFilter: function (e, n) {
                Yb(Gb(e), function (e) {
                    var t;
                    for (t = 0; t < _.length; t++) if (_[t].name === e) return void _[t].callbacks.push(n);
                    _.push({name: e, callbacks: [n]})
                })
            }, getAttributeFilters: function () {
                return [].concat(_)
            }, addNodeFilter: function (e, n) {
                Yb(Gb(e), function (e) {
                    var t = A[e];
                    t || (A[e] = t = []), t.push(n)
                })
            }, getNodeFilters: function () {
                var e = [];
                for (var t in A) A.hasOwnProperty(t) && e.push({name: t, callbacks: A[t]});
                return e
            }, filterNode: B, parse: function (e, a) {
                var t, n, r, o, i, u, s, c, l, f, d, m = [];
                a = a || {}, R = {}, D = {}, l = Jb(Xb("script,style,head,html,body,title,meta,param"), T.getBlockElements());
                var g = T.getNonEmptyElements(), p = T.children, h = k.validate,
                    v = "forced_root_block" in a ? a.forced_root_block : k.forced_root_block,
                    b = T.getWhiteSpaceElements(), y = /^[ \t\r\n]+/, C = /[ \t\r\n]+$/, x = /[ \t\r\n]+/g,
                    w = /^[ \t\r\n]+$/;
                f = b.hasOwnProperty(a.context) || b.hasOwnProperty(k.root_name);
                var N = function (e, t) {
                    var n, r = new Vb(e, t);
                    return e in A && ((n = R[e]) ? n.push(r) : R[e] = [r]), r
                }, E = function (e) {
                    var t, n, r, o, i = T.getBlockElements();
                    for (t = e.prev; t && 3 === t.type;) {
                        if (0 < (r = t.value.replace(C, "")).length) return void(t.value = r);
                        if (n = t.next) {
                            if (3 === n.type && n.value.length) {
                                t = t.prev;
                                continue
                            }
                            if (!i[n.name] && "script" !== n.name && "style" !== n.name) {
                                t = t.prev;
                                continue
                            }
                        }
                        o = t.prev, t.remove(), t = o
                    }
                };
                t = Jh({
                    validate: h,
                    allow_script_urls: k.allow_script_urls,
                    allow_conditional_comments: k.allow_conditional_comments,
                    self_closing_elements: function (e) {
                        var t, n = {};
                        for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                        return n
                    }(T.getSelfClosingElements()),
                    cdata: function (e) {
                        d.append(N("#cdata", 4)).value = e
                    },
                    text: function (e, t) {
                        var n;
                        f || (e = e.replace(x, " "), Wb(d.lastChild, l) && (e = e.replace(y, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, d.append(n).value = e)
                    },
                    comment: function (e) {
                        d.append(N("#comment", 8)).value = e
                    },
                    pi: function (e, t) {
                        d.append(N(e, 7)).value = t, E(d)
                    },
                    doctype: function (e) {
                        d.append(N("#doctype", 10)).value = e, E(d)
                    },
                    start: function (e, t, n) {
                        var r, o, i, a, u;
                        if (i = h ? T.getElementRule(e) : {}) {
                            for ((r = N(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = p[d.name]) && p[r.name] && !u[r.name] && m.push(r), o = _.length; o--;) (a = _[o].name) in t.map && ((s = D[a]) ? s.push(r) : D[a] = [r]);
                            l[e] && E(r), n || (d = r), !f && b[e] && (f = !0)
                        }
                    },
                    end: function (e) {
                        var t, n, r, o, i;
                        if (n = h ? T.getElementRule(e) : {}) {
                            if (l[e] && !f) {
                                if ((t = d.firstChild) && 3 === t.type) if (0 < (r = t.value.replace(y, "")).length) t.value = r, t = t.next; else for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o;
                                if ((t = d.lastChild) && 3 === t.type) if (0 < (r = t.value.replace(C, "")).length) t.value = r, t = t.prev; else for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o
                            }
                            if (f && b[e] && (f = !1), n.removeEmpty && $b(T, g, b, d) && !d.attributes.map.name && !d.attr("id")) return i = d.parent, l[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                            n.paddEmpty && (jb(d) || $b(T, g, b, d)) && Hb(k, a, l, d), d = d.parent
                        }
                    }
                }, T);
                var S = d = new Vb(a.context || k.root_name, 11);
                if (t.parse(e), h && m.length && (a.context ? a.invalid = !0 : function (e) {
                        var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h;
                        for (d = Xb("tr,td,th,tbody,thead,tfoot,table"), l = T.getNonEmptyElements(), f = T.getWhiteSpaceElements(), m = T.getTextBlockElements(), g = T.getSpecialElements(), t = 0; t < e.length; t++) if ((n = e[t]).parent && !n.fixed) if (m[n.name] && "li" === n.parent.name) {
                            for (p = n.next; p && m[p.name];) p.name = "li", p.fixed = !0, n.parent.insert(p, n.parent), p = p.next;
                            n.unwrap(n)
                        } else {
                            for (o = [n], r = n.parent; r && !T.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r);
                            if (r && 1 < o.length) {
                                for (o.reverse(), i = a = B(o[0].clone()), c = 0; c < o.length - 1; c++) {
                                    for (T.isValidChild(a.name, o[c].name) ? (u = B(o[c].clone()), a.append(u)) : u = a, s = o[c].firstChild; s && s !== o[c + 1];) h = s.next, u.append(s), s = h;
                                    a = u
                                }
                                $b(T, l, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], ($b(T, l, f, r) || qb(r, "br")) && r.empty().remove()
                            } else if (n.parent) {
                                if ("li" === n.name) {
                                    if ((p = n.prev) && ("ul" === p.name || "ul" === p.name)) {
                                        p.append(n);
                                        continue
                                    }
                                    if ((p = n.next) && ("ul" === p.name || "ul" === p.name)) {
                                        p.insert(n, p.firstChild, !0);
                                        continue
                                    }
                                    n.wrap(B(new Vb("ul", 1)));
                                    continue
                                }
                                T.isValidChild(n.parent.name, "div") && T.isValidChild("div", n.name) ? n.wrap(B(new Vb("div", 1))) : g[n.name] ? n.empty().remove() : n.unwrap()
                            }
                        }
                    }(m)), v && ("body" === S.name || a.isRootContent) && function () {
                        var e, t, n = S.firstChild, r = function (e) {
                            e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(y, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                        };
                        if (T.isValidChild(S.name, v.toLowerCase())) {
                            for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !l[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(k.forced_root_block_attrs), S.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                            r(t)
                        }
                    }(), !a.invalid) {
                    for (c in R) {
                        for (s = A[c], i = (n = R[c]).length; i--;) n[i].parent || n.splice(i, 1);
                        for (r = 0, o = s.length; r < o; r++) s[r](n, c, a)
                    }
                    for (r = 0, o = _.length; r < o; r++) if ((s = _[r]).name in D) {
                        for (i = (n = D[s.name]).length; i--;) n[i].parent || n.splice(i, 1);
                        for (i = 0, u = s.callbacks.length; i < u; i++) s.callbacks[i](n, s.name, a)
                    }
                }
                return S
            }
        };
        return Kb(e, k), Mb.register(e, k), e
    }

    var Zb = function (e, t, n) {
        -1 === Xt.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
            for (var n = e.length; n--;) e[n].attr(t, null)
        }), t.push(n))
    }, ey = function (e, t, n) {
        var r = ca(n.getInner ? t.innerHTML : e.getOuterHTML(t));
        return n.selection || vo(nr.fromDom(t)) ? r : Xt.trim(r)
    }, ty = function (e, t, n) {
        var r = n.selection ? Bb({forced_root_block: !1}, n) : n, o = e.parse(t, r);
        return Ob.trimTrailingBr(o), o
    }, ny = function (e, t, n, r, o) {
        var i, a, u, s, c = (i = r, Ql(t, n).serialize(i));
        return a = e, s = c, !(u = o).no_events && a ? Wg(a, Bb(u, {content: s})).content : s
    };

    function ry(e, t) {
        var a, u, s, c, l, n,
            r = (a = e, n = ["data-mce-selected"], s = (u = t) && u.dom ? u.dom : di.DOM, c = u && u.schema ? u.schema : Zo(a), a.entity_encoding = a.entity_encoding || "named", a.remove_trailing_brs = !("remove_trailing_brs" in a) || a.remove_trailing_brs, l = Qb(a, c), Ob.register(l, a, s), {
                schema: c,
                addNodeFilter: l.addNodeFilter,
                addAttributeFilter: l.addAttributeFilter,
                serialize: function (e, t) {
                    var n = Bb({format: "html"}, t || {}), r = Pb.process(u, e, n), o = ey(s, r, n), i = ty(l, o, n);
                    return "tree" === n.format ? i : ny(u, a, c, i, n)
                },
                addRules: function (e) {
                    c.addValidElements(e)
                },
                setRules: function (e) {
                    c.setValidElements(e)
                },
                addTempAttr: b(Zb, l, n),
                getTempAttrs: function () {
                    return n
                }
            });
        return {
            schema: r.schema,
            addNodeFilter: r.addNodeFilter,
            addAttributeFilter: r.addAttributeFilter,
            serialize: r.serialize,
            addRules: r.addRules,
            setRules: r.setRules,
            addTempAttr: r.addTempAttr,
            getTempAttrs: r.getTempAttrs
        }
    }

    function oy(e) {
        return {getBookmark: b(ul, e), moveToBookmark: b(sl, e)}
    }

    (oy || (oy = {})).isBookmarkNode = cl;
    var iy = oy, ay = Ao.isContentEditableFalse, uy = Ao.isContentEditableTrue, sy = function (r, a) {
        var u, s, c, l, f, d, m, g, p, h, v, b, i, y, C, x, w, N = a.dom, E = Xt.each, S = a.getDoc(), k = document,
            T = Math.abs, A = Math.round, _ = a.getBody();
        l = {nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1]};
        var e = ".mce-content-body";
        a.contentStyles.push(e + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + e + " .mce-resizehandle:hover {background: #000}" + e + " img[data-mce-selected]," + e + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + e + " .mce-clonedresizable {position: absolute;" + (fe.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + e + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");
        var R = function (e) {
            return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image"))
        }, n = function (e) {
            var t, n, r = e.target;
            t = e, n = a.selection.getRng(), !R(t.target) || Uh(t.clientX, t.clientY, n) || e.isDefaultPrevented() || (e.preventDefault(), a.selection.select(r))
        }, D = function (e) {
            return a.dom.is(e, "figure.image") ? e.querySelector("img") : e
        }, B = function (e) {
            var t = a.settings.object_resizing;
            return !1 !== t && !fe.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && e !== a.getBody() && Rr(nr.fromDom(e), t))
        }, O = function (e) {
            var t, n, r, o;
            t = e.screenX - d, n = e.screenY - m, y = t * f[2] + h, C = n * f[3] + v, y = y < 5 ? 5 : y, C = C < 5 ? 5 : C, (R(u) && !1 !== a.settings.resize_img_proportional ? !Hh.modifierPressed(e) : Hh.modifierPressed(e) || R(u) && f[2] * f[3] != 0) && (T(t) > T(n) ? (C = A(y * b), y = A(C / b)) : (y = A(C / b), C = A(y * b))), N.setStyles(D(s), {
                width: y,
                height: C
            }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, N.setStyles(c, {
                left: r,
                top: o,
                display: "block"
            }), c.innerHTML = y + " &times; " + C, f[2] < 0 && s.clientWidth <= y && N.setStyle(s, "left", g + (h - y)), f[3] < 0 && s.clientHeight <= C && N.setStyle(s, "top", p + (v - C)), (t = _.scrollWidth - x) + (n = _.scrollHeight - w) != 0 && N.setStyles(c, {
                left: r - t,
                top: o - n
            }), i || (Yg(a, u, h, v), i = !0)
        }, P = function () {
            i = !1;
            var e = function (e, t) {
                t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? N.setStyle(D(u), e, t) : N.setAttrib(D(u), e, t))
            };
            e("width", y), e("height", C), N.unbind(S, "mousemove", O), N.unbind(S, "mouseup", P), k !== S && (N.unbind(k, "mousemove", O), N.unbind(k, "mouseup", P)), N.remove(s), N.remove(c), o(u), Gg(a, u, y, C), N.setAttrib(u, "style", N.getAttrib(u, "style")), a.nodeChanged()
        }, o = function (e) {
            var t, r, o, n, i;
            L(), F(), t = N.getPos(e, _), g = t.x, p = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, y = C = 0), n = a.fire("ObjectSelected", {target: e}), B(e) && !n.isDefaultPrevented() ? E(l, function (n, e) {
                var t;
                (t = N.get("mceResizeHandle" + e)) && N.remove(t), t = N.add(_, "div", {
                    id: "mceResizeHandle" + e,
                    "data-mce-bogus": "all",
                    "class": "mce-resizehandle",
                    unselectable: !0,
                    style: "cursor:" + e + "-resize; margin:0; padding:0"
                }), 11 === fe.ie && (t.contentEditable = !1), N.bind(t, "mousedown", function (e) {
                    var t;
                    e.stopImmediatePropagation(), e.preventDefault(), d = (t = e).screenX, m = t.screenY, h = D(u).clientWidth, v = D(u).clientHeight, b = v / h, (f = n).startPos = {
                        x: r * n[0] + g,
                        y: o * n[1] + p
                    }, x = _.scrollWidth, w = _.scrollHeight, s = u.cloneNode(!0), N.addClass(s, "mce-clonedresizable"), N.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, N.setStyles(s, {
                        left: g,
                        top: p,
                        margin: 0
                    }), s.removeAttribute("data-mce-selected"), _.appendChild(s), N.bind(S, "mousemove", O), N.bind(S, "mouseup", P), k !== S && (N.bind(k, "mousemove", O), N.bind(k, "mouseup", P)), c = N.add(_, "div", {
                        "class": "mce-resize-helper",
                        "data-mce-bogus": "all"
                    }, h + " &times; " + v)
                }), n.elm = t, N.setStyles(t, {
                    left: r * n[0] + g - t.offsetWidth / 2,
                    top: o * n[1] + p - t.offsetHeight / 2
                })
            }) : L(), u.setAttribute("data-mce-selected", "1")
        }, L = function () {
            var e, t;
            for (e in F(), u && u.removeAttribute("data-mce-selected"), l) (t = N.get("mceResizeHandle" + e)) && (N.unbind(t), N.remove(t))
        }, I = function (e) {
            var t, n = function (e, t) {
                if (e) do {
                    if (e === t) return !0
                } while (e = e.parentNode)
            };
            i || a.removed || (E(N.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                e.removeAttribute("data-mce-selected")
            }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = N.$(t).closest("table,img,figure.image,hr")[0], _) && (z(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? o(t) : L())
        }, M = function (e) {
            return ay(function (e, t) {
                for (; t && t !== e;) {
                    if (uy(t) || ay(t)) return t;
                    t = t.parentNode
                }
                return null
            }(a.getBody(), e))
        }, F = function () {
            for (var e in l) {
                var t = l[e];
                t.elm && (N.unbind(t.elm), delete t.elm)
            }
        }, z = function () {
            try {
                a.getDoc().execCommand("enableObjectResizing", !1, !1)
            } catch (e) {
            }
        };
        return a.on("init", function () {
            z(), fe.ie && 11 <= fe.ie && (a.on("mousedown click", function (e) {
                var t = e.target, n = t.nodeName;
                i || !/^(TABLE|IMG|HR)$/.test(n) || M(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged())
            }), a.dom.bind(_, "mscontrolselect", function (e) {
                var t = function (e) {
                    he.setEditorTimeout(a, function () {
                        a.selection.select(e)
                    })
                };
                if (M(e.target)) return e.preventDefault(), void t(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
            }));
            var t = he.throttle(function (e) {
                a.composing || I(e)
            });
            a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function (e) {
                u && "TABLE" === u.nodeName && t(e)
            }), a.on("hide blur", L), a.on("contextmenu", n)
        }), a.on("remove", F), {
            isResizable: B,
            showResizeRect: o,
            hideResizeRect: L,
            updateResizeRect: I,
            destroy: function () {
                u = s = null
            }
        }
    }, cy = function (e) {
        return Ao.isContentEditableTrue(e) || Ao.isContentEditableFalse(e)
    }, ly = function (e, t, n) {
        var r, o, i, a, u, s = n;
        if (s.caretPositionFromPoint) (o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0)); else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t); else if (s.body.createTextRange) {
            r = s.body.createTextRange();
            try {
                r.moveToPoint(e, t), r.collapse(!0)
            } catch (c) {
                r = function (e, n, t) {
                    var r, o, i;
                    if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = Xt.toArray(o.getClientRects())).sort(function (e, t) {
                            return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                        })).length) {
                        n = (i[0].bottom + i[0].top) / 2;
                        try {
                            return o.moveToPoint(e, n), o.collapse(!0), o
                        } catch (a) {
                        }
                    }
                    return null
                }(e, t, n)
            }
            return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, Ao.isContentEditableFalse(function (e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(u, a, cy)) ? null : i
        }
        return r
    }, fy = function (n, e) {
        return $(e, function (e) {
            var t = n.fire("GetSelectionRange", {range: e});
            return t.range !== e ? t.range : e
        })
    }, dy = function (e, t) {
        var n = (t || document).createDocumentFragment();
        return M(e, function (e) {
            n.appendChild(e.dom())
        }), nr.fromDom(n)
    }, my = Nr("element", "width", "rows"), gy = Nr("element", "cells"), py = Nr("x", "y"), hy = function (e, t) {
        var n = parseInt(vr(e, t), 10);
        return isNaN(n) ? 1 : n
    }, vy = function (e) {
        return z(e, function (e, t) {
            return t.cells().length > e ? t.cells().length : e
        }, 0)
    }, by = function (e, t) {
        for (var n = e.rows(), r = 0; r < n.length; r++) for (var o = n[r].cells(), i = 0; i < o.length; i++) if (Br(o[i], t)) return A.some(py(i, r));
        return A.none()
    }, yy = function (e, t, n, r, o) {
        for (var i = [], a = e.rows(), u = n; u <= o; u++) {
            var s = a[u].cells(), c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
            i.push(gy(a[u].element(), c))
        }
        return i
    }, Cy = function (e) {
        var o = my(ea(e), 0, []);
        return M(Mi(e, "tr"), function (n, r) {
            M(Mi(n, "td,th"), function (e, t) {
                !function (e, t, n, r, o) {
                    for (var i = hy(o, "rowspan"), a = hy(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) {
                        u[s] || (u[s] = gy(ta(r), []));
                        for (var c = t; c < t + a; c++) u[s].cells()[c] = s === n && c === t ? o : ea(o)
                    }
                }(o, function (e, t, n) {
                    for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++;
                    var r, o, i;
                    return t
                }(o, t, r), r, n, e)
            })
        }), my(o.element(), vy(o.rows()), o.rows())
    }, xy = function (e) {
        return n = $((t = e).rows(), function (e) {
            var t = $(e.cells(), function (e) {
                var t = ta(e);
                return br(t, "colspan"), br(t, "rowspan"), t
            }), n = ea(e.element());
            return Ei(n, t), n
        }), r = ea(t.element()), o = nr.fromTag("tbody"), Ei(o, n), Ni(r, o), r;
        var t, n, r, o
    }, wy = function (l, e, t) {
        return by(l, e).bind(function (c) {
            return by(l, t).map(function (e) {
                return t = l, r = e, o = (n = c).x(), i = n.y(), a = r.x(), u = r.y(), s = i < u ? yy(t, o, i, a, u) : yy(t, o, u, a, i), my(t.element(), vy(s), s);
                var t, n, r, o, i, a, u, s
            })
        })
    }, Ny = function (n, t) {
        return U(n, function (e) {
            return "li" === ar(e) && lh(e, t)
        }).fold(j([]), function (e) {
            return (t = n, U(t, function (e) {
                return "ul" === ar(e) || "ol" === ar(e)
            })).map(function (e) {
                return [nr.fromTag("li"), nr.fromTag(ar(e))]
            }).getOr([]);
            var t
        })
    }, Ey = function (e, t) {
        var n, r = nr.fromDom(t.commonAncestorContainer), o = Ff(r, e), i = F(o, function (e) {
            return so(e) || ao(e)
        }), a = Ny(o, t), u = i.concat(a.length ? a : mo(n = r) ? Lr(n).filter(fo).fold(j([]), function (e) {
            return [n, e]
        }) : fo(n) ? [n] : []);
        return $(u, ea)
    }, Sy = function () {
        return dy([])
    }, ky = function (e, t) {
        return n = nr.fromDom(t.cloneContents()), r = Ey(e, t), o = z(r, function (e, t) {
            return Ni(t, e), t
        }, n), 0 < r.length ? dy([o]) : o;
        var n, r, o
    }, Ty = function (e, o) {
        return (t = e, n = o[0], Hi(n, "table", b(Br, t))).bind(function (e) {
            var t = o[0], n = o[o.length - 1], r = Cy(e);
            return wy(r, t, n).map(function (e) {
                return dy([xy(e)])
            })
        }).getOrThunk(Sy);
        var t, n
    }, Ay = function (e, t) {
        var n, r, o = Om(t, e);
        return 0 < o.length ? Ty(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? Sy() : ky(n, r[0]))
    }, _y = function (e, t) {
        var n, r = e.selection.getRng(), o = e.dom.create("body"), i = e.selection.getSel(), a = fy(e, Tm(i));
        if ((t = t || {}).get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content;
        if ("text" === t.format) return e.selection.isCollapsed() ? "" : ca(r.text || (i.toString ? i.toString() : ""));
        r.cloneContents ? (n = t.contextual ? Ay(nr.fromDom(e.getBody()), a).dom() : r.cloneContents()) && o.appendChild(n) : r.item !== undefined || r.htmlText !== undefined ? (o.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), o.removeChild(o.firstChild)) : o.innerHTML = r.toString(), t.getInner = !0;
        var u = e.selection.serializer.serialize(o, t);
        return "tree" === t.format ? u : (t.content = e.selection.isCollapsed() ? "" : u, e.fire("GetContent", t), t.content)
    }, Ry = function (e, t, n) {
        var r, o, i, a = e.selection.getRng(), u = e.getDoc();
        if ((n = n || {format: "html"}).set = !0, n.selection = !0, n.content = t, n.no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) {
            if (t = n.content, a.insertNode) {
                t += '<span id="__caret">_</span>', a.startContainer === u && a.endContainer === u ? u.body.innerHTML = t : (a.deleteContents(), 0 === u.body.childNodes.length ? u.body.innerHTML = t : a.createContextualFragment ? a.insertNode(a.createContextualFragment(t)) : (o = u.createDocumentFragment(), i = u.createElement("div"), o.appendChild(i), i.outerHTML = t, a.insertNode(o))), r = e.dom.get("__caret"), (a = u.createRange()).setStartBefore(r), a.setEndBefore(r), e.selection.setRng(a), e.dom.remove("__caret");
                try {
                    e.selection.setRng(a)
                } catch (s) {
                }
            } else a.item && (u.execCommand("Delete", !1, null), a = e.getRng()), /^\s+/.test(t) ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + t), e.dom.remove("__mce_tmp")) : a.pasteHTML(t);
            n.no_events || e.fire("SetContent", n)
        } else e.fire("SetContent", n)
    }, Dy = function (e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer, a = n ? t.startOffset : t.endOffset;
        return A.from(i).map(nr.fromDom).map(function (e) {
            return r && t.collapsed ? e : Ur(e, o(e, a)).getOr(e)
        }).bind(function (e) {
            return sr(e) ? A.some(e) : Lr(e)
        }).map(function (e) {
            return e.dom()
        }).getOr(e)
    }, By = function (e, t, n) {
        return Dy(e, t, !0, n, function (e, t) {
            return Math.min(e.dom().childNodes.length, t)
        })
    }, Oy = function (e, t, n) {
        return Dy(e, t, !1, n, function (e, t) {
            return 0 < t ? t - 1 : t
        })
    }, Py = function (e, t) {
        for (var n = e; e && Ao.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
        return e || n
    }, Ly = Xt.each, Iy = function (e) {
        return !!e.select
    }, My = function (e) {
        return !(!e || !e.ownerDocument) && Or(nr.fromDom(e.ownerDocument), nr.fromDom(e))
    }, Fy = function (u, s, e, c) {
        var n, t, l, f, a, r = function (e, t) {
            return Ry(c, e, t)
        }, o = function (e) {
            var t = m();
            t.collapse(!!e), i(t)
        }, d = function () {
            return s.getSelection ? s.getSelection() : s.document.selection
        }, m = function () {
            var e, t, n, r, o = function (e, t, n) {
                try {
                    return t.compareBoundaryPoints(e, n)
                } catch (r) {
                    return -1
                }
            };
            if (!s) return null;
            if (null == (r = s.document)) return null;
            if (c.bookmark !== undefined && !1 === xp(c)) {
                var i = Og(c);
                if (i.isSome()) return i.map(function (e) {
                    return fy(c, [e])[0]
                }).getOr(r.createRange())
            }
            try {
                (e = d()) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : r.createRange())
            } catch (a) {
            }
            return (t = fy(c, [t])[0]) || (t = r.createRange ? r.createRange() : r.body.createTextRange()), t.setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === o(t.START_TO_START, t, l) && 0 === o(t.END_TO_END, t, l) ? t = f : f = l = null), t
        }, i = function (e, t) {
            var n, r;
            if ((o = e) && (Iy(o) || My(o.startContainer) && My(o.endContainer))) {
                var o, i = Iy(e) ? e : null;
                if (i) {
                    f = null;
                    try {
                        i.select()
                    } catch (a) {
                    }
                } else {
                    if (n = d(), e = c.fire("SetSelectionRange", {range: e, forward: t}).range, n) {
                        f = e;
                        try {
                            n.removeAllRanges(), n.addRange(e)
                        } catch (a) {
                        }
                        !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), l = 0 < n.rangeCount ? n.getRangeAt(0) : null
                    }
                    e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || fe.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), c.fire("AfterSetSelectionRange", {
                        range: e,
                        forward: t
                    })
                }
            }
        }, g = function () {
            var e, t, n = d();
            return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
        }, p = {
            bookmarkManager: null,
            controlSelection: null,
            dom: u,
            win: s,
            serializer: e,
            editor: c,
            collapse: o,
            setCursorLocation: function (e, t) {
                var n = u.createRng();
                e ? (n.setStart(e, t), n.setEnd(e, t), i(n), o(!1)) : (fh(u, n, c.getBody(), !0), i(n))
            },
            getContent: function (e) {
                return _y(c, e)
            },
            setContent: r,
            getBookmark: function (e, t) {
                return n.getBookmark(e, t)
            },
            moveToBookmark: function (e) {
                return n.moveToBookmark(e)
            },
            select: function (e, t) {
                var r, n, o;
                return (r = u, n = e, o = t, A.from(n).map(function (e) {
                    var t = r.nodeIndex(e), n = r.createRng();
                    return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (fh(r, n, e, !0), fh(r, n, e, !1)), n
                })).each(i), e
            },
            isCollapsed: function () {
                var e = m(), t = d();
                return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
            },
            isForward: g,
            setNode: function (e) {
                return r(u.getOuterHTML(e)), e
            },
            getNode: function () {
                return e = c.getBody(), (t = m()) ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Py(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Py(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e;
                var e, t, n, r, o, i, a
            },
            getSel: d,
            setRng: i,
            getRng: m,
            getStart: function (e) {
                return By(c.getBody(), m(), e)
            },
            getEnd: function (e) {
                return Oy(c.getBody(), m(), e)
            },
            getSelectedBlocks: function (e, t) {
                return function (e, t, n, r) {
                    var o, i, a = [];
                    if (i = e.getRoot(), n = e.getParent(n || By(i, t, t.collapsed), e.isBlock), r = e.getParent(r || Oy(i, t, t.collapsed), e.isBlock), n && n !== i && a.push(n), n && r && n !== r) for (var u = new to(o = n, i); (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o);
                    return r && n !== r && r !== i && a.push(r), a
                }(u, m(), e, t)
            },
            normalize: function () {
                var e = m(), t = d();
                if (!_m(t) && dh(c)) {
                    var n = ug(u, e);
                    return n.each(function (e) {
                        i(e, g())
                    }), n.getOr(e)
                }
                return e
            },
            selectorChanged: function (e, t) {
                var i;
                return a || (a = {}, i = {}, c.on("NodeChange", function (e) {
                    var n = e.element, r = u.getParents(n, null, u.getRoot()), o = {};
                    Ly(a, function (e, n) {
                        Ly(r, function (t) {
                            if (u.is(t, n)) return i[n] || (Ly(e, function (e) {
                                e(!0, {node: t, selector: n, parents: r})
                            }), i[n] = e), o[n] = e, !1
                        })
                    }), Ly(i, function (e, t) {
                        o[t] || (delete i[t], Ly(e, function (e) {
                            e(!1, {node: n, selector: t, parents: r})
                        }))
                    })
                })), a[e] || (a[e] = []), a[e].push(t), p
            },
            getScrollContainer: function () {
                for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            },
            scrollIntoView: function (e, t) {
                return Ds(c, e, t)
            },
            placeCaretAt: function (e, t) {
                return i(ly(e, t, c.getDoc()))
            },
            getBoundingClientRect: function () {
                var e = m();
                return e.collapsed ? du.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
            },
            destroy: function () {
                s = l = f = null, t.destroy()
            }
        };
        return n = iy(p), t = sy(p, c), p.bookmarkManager = n, p.controlSelection = t, p
    }, zy = Ao.isContentEditableFalse, Uy = Ua, Vy = qc, Hy = jc, jy = function (e, t) {
        for (; t = e(t);) if (t.isVisible()) return t;
        return t
    }, qy = function (e, t, n, r) {
        var o, i, a, u, s, c, l = e === lu.Forwards, f = l ? Hy : Vy;
        return !r.collapsed && (o = Uy(r), zy(o)) ? Xu(e, t, o, e === lu.Backwards, !0) : (u = da(r.startContainer), f(i = Hc(e, t.getBody(), r)) ? Yu(t, i.getNode(!l)) : (i = n(i)) ? f(i) ? Xu(e, t, i.getNode(!l), l, !0) : f(a = n(i)) && (!(c = Bc(s = i, a)) && Ao.isBr(s.getNode()) || c) ? Xu(e, t, a.getNode(!l), l, !0) : u ? Ju(t, i.toRange(), !0) : null : u ? r : null)
    }, $y = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d;
        if (d = Uy(r), o = Hc(e, t.getBody(), r), i = n(t.getBody(), Rh(1), o), a = jt.filter(i, Dh(1)), s = jt.last(o.getClientRects()), (Hy(o) || $c(o)) && (d = o.getNode()), (Vy(o) || Wc(o)) && (d = o.getNode(!0)), !s) return null;
        if (c = s.left, (u = Mh(a, c)) && zy(u.node)) return l = Math.abs(c - u.left), f = Math.abs(c - u.right), Xu(e, t, u.node, l < f, !0);
        if (d) {
            var m = function (e, t, n, r) {
                var o, i, a, u, s, c, l = ls(t), f = [], d = 0, m = function (e) {
                    return jt.last(e.getClientRects())
                };
                1 === e ? (o = l.next, i = za, a = Fa, u = du.after(r)) : (o = l.prev, i = Fa, a = za, u = du.before(r)), c = m(u);
                do {
                    if (u.isVisible() && !a(s = m(u), c)) {
                        if (0 < f.length && i(s, jt.last(f)) && d++, (s = La(s)).position = u, s.line = d, n(s)) return f;
                        f.push(s)
                    }
                } while (u = o(u));
                return f
            }(e, t.getBody(), Rh(1), d);
            if (u = Mh(jt.filter(m, Dh(1)), c)) return Ju(t, u.position.toRange(), !0);
            if (u = jt.last(jt.filter(m, Dh(0)))) return Ju(t, u.position.toRange(), !0)
        }
    }, Wy = function (e, t, n) {
        var r, o, i, a, u = ls(e.getBody()), s = ia.curry(jy, u.next), c = ia.curry(jy, u.prev);
        if (n.collapsed && e.settings.forced_root_block) {
            if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
            (1 === t ? s(du.fromRangeStart(n)) : c(du.fromRangeStart(n))) || (a = (i = e).dom.create(i.settings.forced_root_block), (!fe.ie || 11 <= fe.ie) && (a.innerHTML = '<br data-mce-bogus="1">'), o = a, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())
        }
    }, Ky = function (l, f) {
        return function () {
            var e, t, n, r, o, i, a, u, s,
                c = (t = f, r = ls((e = l).getBody()), o = ia.curry(jy, r.next), i = ia.curry(jy, r.prev), a = t ? lu.Forwards : lu.Backwards, u = t ? o : i, s = e.selection.getRng(), (n = qy(a, e, u, s)) ? n : (n = Wy(e, a, s)) || null);
            return !!c && (l.selection.setRng(c), !0)
        }
    }, Xy = function (u, s) {
        return function () {
            var e, t, n, r, o, i,
                a = (r = (t = s) ? 1 : -1, o = t ? _h : Ah, i = (e = u).selection.getRng(), (n = $y(r, e, o, i)) ? n : (n = Wy(e, r, i)) || null);
            return !!a && (u.selection.setRng(a), !0)
        }
    }, Yy = function (e, r) {
        return Y($(e, function (e) {
            return Bb({shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: v}, e)
        }), function (e) {
            return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
            var t, n
        })
    }, Gy = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, r)
        }
    }, Jy = function (e, t) {
        return U(Yy(e, t), function (e) {
            return e.action()
        })
    }, Qy = function (i, a) {
        i.on("keydown", function (e) {
            var t, n, r, o;
            !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = er.detect().os, Jy([{
                keyCode: Hh.RIGHT,
                action: Ky(t, !0)
            }, {keyCode: Hh.LEFT, action: Ky(t, !1)}, {keyCode: Hh.UP, action: Xy(t, !1)}, {
                keyCode: Hh.DOWN,
                action: Xy(t, !0)
            }, {keyCode: Hh.RIGHT, action: gc(t, !0)}, {keyCode: Hh.LEFT, action: gc(t, !1)}, {
                keyCode: Hh.UP,
                action: pc(t, !1)
            }, {keyCode: Hh.DOWN, action: pc(t, !0)}, {keyCode: Hh.RIGHT, action: um.move(t, n, !0)}, {
                keyCode: Hh.LEFT,
                action: um.move(t, n, !1)
            }, {
                keyCode: Hh.RIGHT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: um.moveNextWord(t, n)
            }, {
                keyCode: Hh.LEFT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: um.movePrevWord(t, n)
            }], r).each(function (e) {
                r.preventDefault()
            }))
        })
    }, Zy = function (e) {
        return 1 === zr(e).length
    }, eC = function (e, t, n, r) {
        var o, i, a, u, s = b(zv, t), c = $(F(r, s), function (e) {
            return e.dom()
        });
        if (0 === c.length) hd(t, e, n); else {
            var l = (o = n.dom(), i = c, a = Bv(!1), u = Mv(i, a.dom()), xi(nr.fromDom(o), a), ki(nr.fromDom(o)), du(u, 0));
            t.selection.setRng(l.toRange())
        }
    }, tC = function (r, o) {
        var t, e = nr.fromDom(r.getBody()), n = nr.fromDom(r.selection.getStart()),
            i = F((t = Ff(n, e), V(t, uo).fold(j(t), function (e) {
                return t.slice(0, e)
            })), Zy);
        return ee(i).map(function (e) {
            var t, n = du.fromRangeStart(r.selection.getRng());
            return !(!Nf(o, n, e.dom()) || Pu((t = e).dom()) && Rv(t.dom()) || (eC(o, r, e, i), 0))
        }).getOr(!1)
    }, nC = function (e, t) {
        return !!e.selection.isCollapsed() && tC(e, t)
    }, rC = function (o, i) {
        o.on("keydown", function (e) {
            var t, n, r;
            !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Jy([{
                keyCode: Hh.BACKSPACE,
                action: Gy(yd, t, !1)
            }, {keyCode: Hh.DELETE, action: Gy(yd, t, !0)}, {
                keyCode: Hh.BACKSPACE,
                action: Gy(fm, t, n, !1)
            }, {keyCode: Hh.DELETE, action: Gy(fm, t, n, !0)}, {
                keyCode: Hh.BACKSPACE,
                action: Gy(qm, t, !1)
            }, {keyCode: Hh.DELETE, action: Gy(qm, t, !0)}, {
                keyCode: Hh.BACKSPACE,
                action: Gy(Jf, t, !1)
            }, {keyCode: Hh.DELETE, action: Gy(Jf, t, !0)}, {
                keyCode: Hh.BACKSPACE,
                action: Gy(Kf, t, !1)
            }, {keyCode: Hh.DELETE, action: Gy(Kf, t, !0)}, {
                keyCode: Hh.BACKSPACE,
                action: Gy(nC, t, !1)
            }, {keyCode: Hh.DELETE, action: Gy(nC, t, !0)}], r).each(function (e) {
                r.preventDefault()
            }))
        }), o.on("keyup", function (e) {
            var t, n;
            !1 === e.isDefaultPrevented() && (t = o, n = e, Jy([{
                keyCode: Hh.BACKSPACE,
                action: Gy(Cd, t)
            }, {keyCode: Hh.DELETE, action: Gy(Cd, t)}], n))
        })
    }, oC = function (e) {
        return A.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
    }, iC = function (e, t) {
        var n, r, o, i = t, a = e.dom, u = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
            if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                var s = function (e) {
                    for (; e;) {
                        if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                        e = e.nextSibling
                    }
                }(t.firstChild);
                s && /^(UL|OL|DL)$/.test(s.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
            }
            if (o = a.createRng(), t.normalize(), t.hasChildNodes()) {
                for (n = new to(t, t); r = n.current();) {
                    if (Ao.isText(r)) {
                        o.setStart(r, 0), o.setEnd(r, 0);
                        break
                    }
                    if (u[r.nodeName.toLowerCase()]) {
                        o.setStartBefore(r), o.setEndBefore(r);
                        break
                    }
                    i = r, r = n.next()
                }
                r || (o.setStart(i, 0), o.setEnd(i, 0))
            } else Ao.isBr(t) ? t.nextSibling && a.isBlock(t.nextSibling) ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)) : (o.setStart(t, 0), o.setEnd(t, 0));
            e.selection.setRng(o), a.remove(void 0), e.selection.scrollIntoView(t)
        }
    }, aC = function (e, t) {
        var n, r, o = e.getRoot();
        for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
        return n !== o ? r : o
    }, uC = oC, sC = function (e) {
        return oC(e).fold(j(""), function (e) {
            return e.nodeName.toUpperCase()
        })
    }, cC = function (e) {
        return oC(e).filter(function (e) {
            return mo(nr.fromDom(e))
        }).isSome()
    }, lC = function (e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t
    }, fC = function (e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName)
    }, dC = function (e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
    }, mC = function (e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !Ao.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"];
        return r === t
    }, gC = function (e, t, n, r, o) {
        var i = e.dom, a = e.selection.getRng();
        if (n !== e.getBody()) {
            var u;
            fC(u = n) && fC(u.parentNode) && (o = "LI");
            var s, c, l = o ? t(o) : i.create("BR");
            if (mC(n, r, !0) && mC(n, r, !1)) lC(n, "LI") ? i.insertAfter(l, dC(n)) : i.replace(l, n); else if (mC(n, r, !0)) lC(n, "LI") ? (i.insertAfter(l, dC(n)), l.appendChild(i.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n); else if (mC(n, r, !1)) i.insertAfter(l, dC(n)); else {
                n = dC(n);
                var f = a.cloneRange();
                f.setStartAfter(r), f.setEndAfter(n);
                var d = f.extractContents();
                "LI" === o && (c = "LI", (s = d).firstChild && s.firstChild.nodeName === c) ? (l = d.firstChild, i.insertAfter(d, n)) : (i.insertAfter(d, n), i.insertAfter(l, n))
            }
            i.remove(r), iC(e, l)
        }
    }, pC = function (e) {
        e.innerHTML = '<br data-mce-bogus="1">'
    }, hC = function (e, t) {
        return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
    }, vC = function (e, t) {
        return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
    }, bC = function (e, t, n) {
        return !1 === Ao.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === sa ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === sa ? t.data.length : n
    }, yC = function (e, t) {
        var n, r, o = e.getRoot();
        for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
        return n !== o ? r : o
    }, CC = function (e, t) {
        var n = Vs(e);
        n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, Hs(e))
    }, xC = function (a, e) {
        var t, u, s, i, c, n, r, o, l, f, d, m, g, p, h, v, b, y, C = a.dom, x = a.schema, w = x.getNonEmptyElements(),
            N = a.selection.getRng(), E = function (e) {
                var t, n, r, o = s, i = x.getTextInlineElements();
                if (e || "TABLE" === f || "HR" === f ? (t = C.create(e || m), CC(a, t)) : t = c.cloneNode(!1), r = t, !1 === $s(a)) C.setAttrib(t, "style", null), C.setAttrib(t, "class", null); else do {
                    if (i[o.nodeName]) {
                        if (Pu(o)) continue;
                        n = o.cloneNode(!1), C.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n)
                    }
                } while ((o = o.parentNode) && o !== u);
                return pC(r), t
            }, S = function (e) {
                var t, n, r, o;
                if (o = bC(e, s, i), Ao.isText(s) && (e ? 0 < o : o < s.nodeValue.length)) return !1;
                if (s.parentNode === c && g && !e) return !0;
                if (e && Ao.isElement(s) && s === c.firstChild) return !0;
                if (hC(s, "TABLE") || hC(s, "HR")) return g && !e || !g && e;
                for (t = new to(s, c), Ao.isText(s) && (e && 0 === o ? t.prev() : e || o !== s.nodeValue.length || t.next()); n = t.current();) {
                    if (Ao.isElement(n)) {
                        if (!n.getAttribute("data-mce-bogus") && (r = n.nodeName.toLowerCase(), w[r] && "br" !== r)) return !1
                    } else if (Ao.isText(n) && !/^[ \t\r\n]*$/.test(n.nodeValue)) return !1;
                    e ? t.prev() : t.next()
                }
                return !0
            }, k = function () {
                r = /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d ? E(m) : E(), Ws(a) && vC(C, l) && C.isEmpty(c) ? r = C.split(l, c) : C.insertAfter(r, c), iC(a, r)
            };
        ug(C, N).each(function (e) {
            N.setStart(e.startContainer, e.startOffset), N.setEnd(e.endContainer, e.endOffset)
        }), s = N.startContainer, i = N.startOffset, m = Vs(a), n = e.shiftKey, Ao.isElement(s) && s.hasChildNodes() && (g = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = g && Ao.isText(s) ? s.nodeValue.length : 0), (u = yC(C, s)) && ((m && !n || !m && n) && (s = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f, d = t || "P", m = e.dom, g = yC(m, r);
            if (!(a = m.getParent(r, m.isBlock)) || !vC(m, a)) {
                if (l = (a = a || g) === e.getBody() || (f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = m.create(d), CC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                for (s = r; s.parentNode !== a;) s = s.parentNode;
                for (; s && !m.isBlock(s);) s = (u = s).previousSibling;
                if (u && e.schema.isValidChild(l, d.toLowerCase())) {
                    for (i = m.create(d), CC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !m.isBlock(s);) c = s.nextSibling, i.appendChild(s), s = c;
                    n.setStart(r, o), n.setEnd(r, o)
                }
            }
            return r
        }(a, m, N, s, i)), c = C.getParent(s, C.isBlock), l = c ? C.getParent(c.parentNode, C.isBlock) : null, f = c ? c.nodeName.toUpperCase() : "", "LI" !== (d = l ? l.nodeName.toUpperCase() : "") || e.ctrlKey || (l = (c = l).parentNode, f = d), /^(LI|DT|DD)$/.test(f) && C.isEmpty(c) ? gC(a, E, l, c, m) : m && c === a.getBody() || (m = m || "P", da(c) ? (r = xa(c), C.isEmpty(c) && pC(c), iC(a, r)) : S() ? k() : S(!0) ? (r = c.parentNode.insertBefore(E(), c), iC(a, hC(c, "HR") ? r : c)) : ((t = (b = N, y = b.cloneRange(), y.setStart(b.startContainer, bC(!0, b.startContainer, b.startOffset)), y.setEnd(b.endContainer, bC(!1, b.endContainer, b.endOffset)), y).cloneRange()).setEndAfter(c), function (e) {
            for (; Ao.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;) ;
        }(o = t.extractContents()), r = o.firstChild, C.insertAfter(o, c), function (e, t, n) {
            var r, o = n, i = [];
            if (o) {
                for (; o = o.firstChild;) {
                    if (e.isBlock(o)) return;
                    Ao.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                }
                for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = o) && "A" === a.nodeName && 0 === Xt.trim(ca(a.innerText || a.textContent)).length && e.remove(o);
                var a
            }
        }(C, w, r), p = C, (h = c).normalize(), (v = h.lastChild) && !/^(left|right)$/gi.test(p.getStyle(v, "float", !0)) || p.add(h, "br"), C.isEmpty(c) && pC(c), r.normalize(), C.isEmpty(r) ? (C.remove(r), k()) : iC(a, r)), C.setAttrib(r, "id", ""), a.fire("NewBlock", {newBlock: r})))
    }, wC = function (e, t) {
        return uC(e).filter(function (e) {
            return 0 < t.length && Rr(nr.fromDom(e), t)
        }).isSome()
    }, NC = function (e) {
        return wC(e, js(e))
    }, EC = function (e) {
        return wC(e, qs(e))
    }, SC = Qf([{br: []}, {block: []}, {none: []}]), kC = function (e, t) {
        return EC(e)
    }, TC = function (n) {
        return function (e, t) {
            return "" === Vs(e) === n
        }
    }, AC = function (n) {
        return function (e, t) {
            return cC(e) === n
        }
    }, _C = function (n, r) {
        return function (e, t) {
            return sC(e) === n.toUpperCase() === r
        }
    }, RC = function (e) {
        return _C("pre", e)
    }, DC = function (n) {
        return function (e, t) {
            return Us(e) === n
        }
    }, BC = function (e, t) {
        return NC(e)
    }, OC = function (e, t) {
        return t
    }, PC = function (e) {
        var t = Vs(e), n = aC(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P")
    }, LC = function (e, t) {
        return function (n, r) {
            return z(e, function (e, t) {
                return e && t(n, r)
            }, !0) ? A.some(t) : A.none()
        }
    }, IC = function (e, t) {
        return Dd([LC([kC], SC.none()), LC([_C("summary", !0)], SC.br()), LC([RC(!0), DC(!1), OC], SC.br()), LC([RC(!0), DC(!1)], SC.block()), LC([RC(!0), DC(!0), OC], SC.block()), LC([RC(!0), DC(!0)], SC.br()), LC([AC(!0), OC], SC.br()), LC([AC(!0)], SC.block()), LC([TC(!0), OC, PC], SC.block()), LC([TC(!0)], SC.br()), LC([BC], SC.br()), LC([TC(!1), OC], SC.br()), LC([PC], SC.block())], [e, t.shiftKey]).getOr(SC.none())
    }, MC = function (e, t) {
        IC(e, t).fold(function () {
            vg(e, t)
        }, function () {
            xC(e, t)
        }, v)
    }, FC = function (o) {
        o.on("keydown", function (e) {
            var t, n, r;
            e.keyCode === Hh.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function () {
                !1 === t.selection.isCollapsed() && t.execCommand("Delete"), MC(t, n)
            })))
        })
    }, zC = function (e, t, n) {
        return u = t, !(!UC(n) || !Ao.isText(u.container()) || (r = e, i = (o = t).container(), a = o.offset(), i.insertData(a, "\xa0"), r.selection.setCursorLocation(i, a + 1), 0));
        var r, o, i, a, u
    }, UC = function (e) {
        return e.fold(j(!1), j(!0), j(!0), j(!1))
    }, VC = function (e) {
        return !!e.selection.isCollapsed() && (t = e, n = b(Cf.isInlineTarget, t), r = du.fromRangeStart(t.selection.getRng()), Yd(n, t.getBody(), r).map(b(zC, t, r)).getOr(!1));
        var t, n, r
    }, HC = function (r) {
        r.on("keydown", function (e) {
            var t, n;
            !1 === e.isDefaultPrevented() && (t = r, n = e, Jy([{
                keyCode: Hh.SPACEBAR,
                action: Gy(VC, t)
            }], n).each(function (e) {
                n.preventDefault()
            }))
        })
    }, jC = function (e, t) {
        var n;
        t.hasAttribute("data-mce-caret") && (xa(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
    }, qC = function (e, t) {
        var n, r = (n = e, ji(nr.fromDom(n.getBody()), "*[data-mce-caret]").fold(j(null), function (e) {
            return e.dom()
        }));
        if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void jC(e, r)) : void(pa(r) && (jC(e, r), e.undoManager.add()))
    }, $C = function (e) {
        e.on("keyup compositionstart", b(qC, e))
    }, WC = function (e) {
        var t = um.setupSelectedState(e);
        $C(e), Qy(e, t), rC(e, t), FC(e), HC(e)
    };

    function KC(u) {
        var s, n, r, o = Xt.each, c = Hh.BACKSPACE, l = Hh.DELETE, f = u.dom, d = u.selection, e = u.settings,
            t = u.parser, i = fe.gecko, a = fe.ie, m = fe.webkit, g = "data:text/mce-internal,", p = a ? "Text" : "URL",
            h = function (e, t) {
                try {
                    u.getDoc().execCommand(e, !1, t)
                } catch (n) {
                }
            }, v = function (e) {
                return e.isDefaultPrevented()
            }, b = function () {
                u.shortcuts.add("meta+a", null, "SelectAll")
            }, y = function () {
                u.on("keydown", function (e) {
                    if (!v(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            }, C = function () {
                u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function (e) {
                    var t;
                    if ("HTML" === e.target.nodeName) {
                        if (11 < fe.ie) return void u.getBody().focus();
                        t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged()
                    }
                }))
            };
        return u.on("keydown", function (e) {
            var t, n, r, o, i;
            if (!v(e) && e.keyCode === Hh.BACKSPACE && (n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n, t.collapsed && 0 === r)) {
                for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
            }
        }), s = function (e) {
            var t = f.create("body"), n = e.cloneContents();
            return t.appendChild(n), d.serializer.serialize(t, {format: "html"})
        }, u.on("keydown", function (e) {
            var t, n, r, o, i, a = e.keyCode;
            if (!v(e) && (a === l || a === c)) {
                if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
                if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged()
            }
        }), fe.windowsPhone || u.on("keyup focusin mouseup", function (e) {
            Hh.modifierPressed(e) || d.normalize()
        }, !0), m && (u.settings.content_editable || f.bind(u.getDoc(), "mousedown mouseup", function (e) {
            var t;
            if (e.target === u.getDoc().documentElement) if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
                if (ga(t.startContainer)) return;
                d.placeCaretAt(e.clientX, e.clientY)
            } else d.setRng(t)
        }), u.on("click", function (e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
        }), e.forced_root_block && u.on("init", function () {
            h("DefaultParagraphSeparator", e.forced_root_block)
        }), u.on("init", function () {
            u.dom.bind(u.getBody(), "submit", function (e) {
                e.preventDefault()
            })
        }), y(), t.addNodeFilter("br", function (e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), fe.iOS ? (u.inline || u.on("keydown", function () {
            document.activeElement === document.body && u.getWin().focus()
        }), C(), u.on("click", function (e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : b()), 11 <= fe.ie && (C(), y()), fe.ie && (b(), h("AutoUrlDetect", !1), u.on("dragstart", function (e) {
            var t, n, r;
            (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = g + escape(u.id) + "," + escape(n), t.dataTransfer.setData(p, r)))
        }), u.on("drop", function (e) {
            if (!v(e)) {
                var t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(g) ? (a = a.substr(g.length).split(","), {
                    id: unescape(a[0]),
                    html: unescape(a[1])
                }) : null;
                if (t && t.id !== u.id) {
                    e.preventDefault();
                    var n = ly(e.x, e.y, u.getDoc());
                    d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: o
                    }) : u.execCommand("mceInsertContent", !1, r)
                }
            }
            var r, o, i, a
        })), i && (u.on("keydown", function (e) {
            if (!v(e) && e.keyCode === c) {
                if (!u.getBody().getElementsByTagName("hr").length) return;
                if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                    var t = d.getNode(), n = t.previousSibling;
                    if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                }
            }
        }), Range.prototype.getClientRects || u.on("mousedown", function (e) {
            if (!v(e) && "HTML" === e.target.nodeName) {
                var t = u.getBody();
                t.blur(), he.setEditorTimeout(u, function () {
                    t.focus()
                })
            }
        }), n = function () {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function () {
                var t = d.getStart();
                t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function (e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }, r = function () {
            return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
        }, u.on("keypress", function (e) {
            var t;
            if (!v(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), f.bind(u.getDoc(), "cut", function (e) {
            var t;
            !v(e) && r() && (t = n(), he.setEditorTimeout(u, function () {
                t()
            }))
        }), e.readonly || u.on("BeforeExecCommand MouseDown", function () {
            h("StyleWithCSS", !1), h("enableInlineTableEditing", !1), e.object_resizing || h("enableObjectResizing", !1)
        }), u.on("SetContent ExecCommand", function (e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function (e) {
                var t = e.parentNode, n = f.getRoot();
                if (t.lastChild === e) {
                    for (; t && !f.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    f.add(t, "br", {"data-mce-bogus": 1})
                }
            })
        }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), fe.mac && u.on("keydown", function (e) {
            !Hh.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), y()), {
            refreshContentEditable: function () {
            }, isHidden: function () {
                var e;
                return !i || u.removed ? 0 : !(e = u.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount
            }
        }
    }

    var XC = function (e) {
            return Ao.isElement(e) && lo(nr.fromDom(e))
        }, YC = function (t) {
            t.on("click", function (e) {
                3 <= e.detail && function (e) {
                    var t = e.selection.getRng(), n = cu.fromRangeStart(t), r = cu.fromRangeEnd(t);
                    if (cu.isElementPosition(n)) {
                        var o = n.container();
                        XC(o) && Zc.firstPositionIn(o).each(function (e) {
                            return t.setStart(e.container(), e.offset())
                        })
                    }
                    cu.isElementPosition(r) && (o = n.container(), XC(o) && Zc.lastPositionIn(o).each(function (e) {
                        return t.setEnd(e.container(), e.offset())
                    })), e.selection.setRng(ef(t))
                }(t)
            })
        }, GC = function (e) {
            var t, n;
            (t = e).on("click", function (e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            }), (n = e).parser.addNodeFilter("details", function (e) {
                M(e, function (e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), n.serializer.addNodeFilter("details", function (e) {
                M(e, function (e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", T(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        }, JC = di.DOM, QC = function (e) {
            var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({initial: !0}), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && he.setEditorTimeout(t, function () {
                var e;
                (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus()
            }, 100)
        }, ZC = function (t, e) {
            var n, r, u, o, i, a, s, c, l, f = t.settings, d = t.getElement(), m = t.getDoc();
            f.inline || (t.getElement().style.visibility = t.orgVisibility), e || f.content_editable || (m.open(), m.write(t.iframeHTML), m.close()), f.content_editable && (t.on("remove", function () {
                var e = this.getBody();
                JC.removeClass(e, "mce-content-body"), JC.removeClass(e, "mce-edit-focus"), JC.setAttrib(e, "contentEditable", null)
            }), JC.addClass(d, "mce-content-body"), t.contentDocument = m = f.content_document || document, t.contentWindow = f.content_window || window, t.bodyElement = d, f.content_document = f.content_window = null, f.root_name = d.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = f.readonly, t.readonly || (t.inline && "static" === JC.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = nh(t), t.schema = Zo(f), t.dom = di(m, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: f.force_hex_style_colors,
                class_filter: f.class_filter,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: f.content_editable,
                schema: t.schema,
                contentCssCors: rc(t),
                onSetAttrib: function (e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = ((o = Qb((u = t).settings, u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
                for (var n, r, o, i = e.length, a = u.dom; i--;) if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attributes.map[o]) {
                    if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                    "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name))
                }
            }), o.addNodeFilter("script", function (e) {
                for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
            }), o.addNodeFilter("#cdata", function (e) {
                for (var t, n = e.length; n--;) (t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]"
            }), o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;) (t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new Vb("br", 1)).shortEnded = !0)
            }), o), t.serializer = ry(f, t), t.selection = Fy(t.dom, t.getWin(), t.serializer, t), t.annotator = Ll(t), t.formatter = _b(t), t.undoManager = hv(t), t._nodeChangeDispatcher = new mh(t), t._selectionOverrides = Xh(t), GC(t), YC(t), WC(t), uh(t), t.fire("PreInit"), f.browser_spellcheck || f.gecko_spellcheck || (m.body.spellcheck = !1, JC.setAttrib(n, "spellcheck", "false")), t.quirks = KC(t), t.fire("PostRender"), f.directionality && (n.dir = f.directionality), f.nowrap && (n.style.whiteSpace = "nowrap"), f.protect && t.on("BeforeSetContent", function (t) {
                Xt.each(f.protect, function (e) {
                    t.content = t.content.replace(e, function (e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                    })
                })
            }), t.on("SetContent", function () {
                t.addVisual(t.getBody())
            }), t.load({
                initial: !0,
                format: "html"
            }), t.startContent = t.getContent({format: "raw"}), t.on("compositionstart compositionend", function (e) {
                t.composing = "compositionstart" === e.type
            }), 0 < t.contentStyles.length && (r = "", Xt.each(t.contentStyles, function (e) {
                r += e + "\r\n"
            }), t.dom.addStyle(r)), (i = t, i.inline ? JC.styleSheetLoader : i.dom.styleSheetLoader).loadAll(t.contentCSS, function (e) {
                QC(t)
            }, function (e) {
                QC(t)
            }), f.content_style && (a = t, s = f.content_style, c = nr.fromDom(a.getDoc().head), l = nr.fromTag("style"), pr(l, "type", "text/css"), Ni(l, nr.fromText(s)), Ni(c, l))
        }, ex = di.DOM, tx = function (e, t) {
            var n, r, o, i, a, u, s,
                c = e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                l = (n = e.id, r = c, o = t.height, i = Ps(e), s = nr.fromTag("iframe"), hr(s, i), hr(s, {
                    id: n + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: r
                }), Cr(s, {
                    width: "100%",
                    height: (a = o, u = "number" == typeof a ? a + "px" : a, u || ""),
                    display: "block"
                }), s).dom();
            l.onload = function () {
                l.onload = null, e.fire("load")
            };
            var f, d, m, g, p = function (e, t) {
                if (document.domain !== window.location.hostname && fe.ie && fe.ie < 12) {
                    var n = th.uuid("mce");
                    e[n] = function () {
                        ZC(e)
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return ex.setAttrib(t, "src", r), !0
                }
                return !1
            }(e, l);
            return e.contentAreaContainer = t.iframeContainer, e.iframeElement = l, e.iframeHTML = (g = Ls(f = e) + "<html><head>", Is(f) !== f.documentBaseUrl && (g += '<base href="' + f.documentBaseURI.getURI() + '" />'), g += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', d = Ms(f), m = Fs(f), zs(f) && (g += '<meta http-equiv="Content-Security-Policy" content="' + zs(f) + '" />'), g += '</head><body id="' + d + '" class="mce-content-body ' + m + '" data-id="' + f.id + '"><br></body></html>'), ex.add(t.iframeContainer, l), p
        }, nx = function (e, t) {
            var n = tx(e, t);
            t.editorContainer && (ex.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = ex.isHidden(t.editorContainer)), e.getElement().style.display = "none", ex.setAttrib(e.id, "aria-hidden", "true"), n || ZC(e)
        }, rx = di.DOM, ox = function (t, n, e) {
            var r, o, i = Up.get(e);
            if (r = Up.urls[e] || t.documentBaseUrl.replace(/\/$/, ""), e = Xt.trim(e), i && -1 === Xt.inArray(n, e)) {
                if (Xt.each(Up.dependencies(e), function (e) {
                        ox(t, n, e)
                    }), t.plugins[e]) return;
                o = new i(t, r, t.$), (t.plugins[e] = o).init && (o.init(t, r), n.push(e))
            }
        }, ix = function (e) {
            return e.replace(/^\-/, "")
        }, ax = function (e) {
            return {editorContainer: e, iframeContainer: e}
        }, ux = function (e) {
            var t, n, r = e.getElement();
            return e.inline ? ax(null) : (t = r, n = rx.create("div"), rx.insertAfter(n, t), ax(n))
        }, sx = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings, m = e.getElement();
            return e.orgDisplay = m.style.display, T(d.theme) ? (l = (o = e).settings, f = o.getElement(), i = l.width || rx.getStyle(f, "width") || "100%", a = l.height || rx.getStyle(f, "height") || f.offsetHeight, u = l.min_height || 100, (s = /^[0-9\.]+(|px)$/i).test("" + i) && (i = Math.max(parseInt(i, 10), 100)), s.test("" + a) && (a = Math.max(parseInt(a, 10), u)), c = o.theme.renderUI({
                targetNode: f,
                width: i,
                height: a,
                deltaWidth: l.delta_width,
                deltaHeight: l.delta_height
            }), l.content_editable || (a = (c.iframeHeight || a) + ("number" == typeof a ? c.deltaHeight || 0 : "")) < u && (a = u), c.height = a, c) : O(d.theme) ? (r = (t = e).getElement(), (n = t.settings.theme(t, r)).editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || t.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || t.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : r.offsetHeight, n) : ux(e)
        }, cx = function (t) {
            var e, n, r, o, i, a, u = t.settings, s = t.getElement();
            return t.rtl = u.rtl_ui || t.editorManager.i18n.rtl, t.editorManager.i18n.setCode(u.language), u.aria_label = u.aria_label || rx.getAttrib(s, "aria-label", t.getLang("aria.rich_text_area")), t.fire("ScriptsLoaded"), o = (n = t).settings.theme, T(o) ? (n.settings.theme = ix(o), r = Vp.get(o), n.theme = new r(n, Vp.urls[o]), n.theme.init && n.theme.init(n, Vp.urls[o] || n.documentBaseUrl.replace(/\/$/, ""), n.$)) : n.theme = {}, i = t, a = [], Xt.each(i.settings.plugins.split(/[ ,]/), function (e) {
                ox(i, a, ix(e))
            }), e = sx(t), t.editorContainer = e.editorContainer ? e.editorContainer : null, u.content_css && Xt.each(Xt.explode(u.content_css), function (e) {
                t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
            }), u.content_editable ? ZC(t) : nx(t, e)
        }, lx = di.DOM, fx = function (e) {
            return "-" === e.charAt(0)
        }, dx = function (i, a) {
            var u = vi.ScriptLoader;
            !function (e, t, n, r) {
                var o = t.settings, i = o.theme;
                if (T(i)) {
                    if (!fx(i) && !Vp.urls.hasOwnProperty(i)) {
                        var a = o.theme_url;
                        a ? Vp.load(i, t.documentBaseURI.toAbsolute(a)) : Vp.load(i, "themes/" + i + "/theme" + n + ".js")
                    }
                    e.loadQueue(function () {
                        Vp.waitFor(i, r)
                    })
                } else r()
            }(u, i, a, function () {
                var e, t, n, r, o;
                e = u, (n = (t = i).settings).language && "en" !== n.language && !n.language_url && (n.language_url = t.editorManager.baseURL + "/langs/" + n.language + ".js"), n.language_url && !t.editorManager.i18n.data[n.language] && e.add(n.language_url), r = i.settings, o = a, Xt.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), Xt.each(r.external_plugins, function (e, t) {
                    Up.load(t, e), r.plugins += " " + t
                }), Xt.each(r.plugins.split(/[ ,]/), function (e) {
                    if ((e = Xt.trim(e)) && !Up.urls[e]) if (fx(e)) {
                        e = e.substr(1, e.length);
                        var t = Up.dependencies(e);
                        Xt.each(t, function (e) {
                            var t = {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"};
                            e = Up.createUrl(t, e), Up.load(e.resource, e)
                        })
                    } else Up.load(e, {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"})
                }), u.loadQueue(function () {
                    i.removed || cx(i)
                }, i, function (e) {
                    Ip(i, e[0]), i.removed || cx(i)
                })
            })
        }, mx = function (t) {
            var e = t.settings, n = t.id, r = function () {
                lx.unbind(window, "ready", r), t.render()
            };
            if (Se.Event.domLoaded) {
                if (t.getElement() && fe.contentEditable) {
                    e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || lx.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && (lx.insertAfter(lx.create("input", {
                        type: "hidden",
                        name: n
                    }), n), t.hasHiddenInput = !0), t.formEventDelegate = function (e) {
                        t.fire(e.type, e)
                    }, lx.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function () {
                        t.setContent(t.startContent, {format: "raw"})
                    }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function () {
                        return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o)
                    })), t.windowManager = Dp(t), t.notificationManager = Rp(t), "xml" === e.encoding && t.on("GetContent", function (e) {
                        e.save && (e.content = lx.encode(e.content))
                    }), e.add_form_submit_trigger && t.on("submit", function () {
                        t.initialized && t.save()
                    }), e.add_unload_trigger && (t._beforeUnload = function () {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), dx(t, t.suffix)
                }
            } else lx.bind(window, "ready", r)
        }, gx = function (e, t, n) {
            var r = e.sidebars ? e.sidebars : [];
            r.push({name: t, settings: n}), e.sidebars = r
        }, px = Xt.each, hx = Xt.trim,
        vx = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        bx = {ftp: 21, http: 80, https: 443, mailto: 25}, yx = function (r, e) {
            var t, n, o = this;
            if (r = hx(r), t = (e = o.settings = e || {}).base_uri, /^([\w\-]+):([^\/]{2})/i.test(r) || /^\s*#/.test(r)) o.source = r; else {
                var i = 0 === r.indexOf("//");
                0 !== r.indexOf("/") || i || (r = (t && t.protocol || "http") + "://mce_host" + r), /^[\w\-]*:?\/\//.test(r) || (n = e.base_uri ? e.base_uri.path : new yx(document.location.href).directory, "" == e.base_uri.protocol ? r = "//mce_host" + o.toAbsPath(n, r) : (r = /([^#?]*)([#?]?.*)/.exec(r), r = (t && t.protocol || "http") + "://mce_host" + o.toAbsPath(n, r[1]) + r[2])), r = r.replace(/@@/g, "(mce_at)"), r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r), px(vx, function (e, t) {
                    var n = r[t];
                    n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
                }), t && (o.protocol || (o.protocol = t.protocol), o.userInfo || (o.userInfo = t.userInfo), o.port || "mce_host" !== o.host || (o.port = t.port), o.host && "mce_host" !== o.host || (o.host = t.host), o.source = ""), i && (o.protocol = "")
            }
        };
    yx.prototype = {
        setPath: function (e) {
            e = /^(.*?)\/?(\w+)?$/.exec(e), this.path = e[0], this.directory = e[1], this.file = e[2], this.source = "", this.getURI()
        }, toRelative: function (e) {
            var t;
            if ("./" === e) return e;
            if ("mce_host" !== (e = new yx(e, {base_uri: this})).host && this.host !== e.host && e.host || this.port !== e.port || this.protocol !== e.protocol && "" !== e.protocol) return e.getURI();
            var n = this.getURI(), r = e.getURI();
            return n === r || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === r ? n : (t = this.toRelPath(this.path, e.path), e.query && (t += "?" + e.query), e.anchor && (t += "#" + e.anchor), t)
        }, toAbsolute: function (e, t) {
            return (e = new yx(e, {base_uri: this})).getURI(t && this.isSameOrigin(e))
        }, isSameOrigin: function (e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = bx[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }, toRelPath: function (e, t) {
            var n, r, o, i = 0, a = "";
            if (e = (e = e.substring(0, e.lastIndexOf("/"))).split("/"), n = t.split("/"), e.length >= n.length) for (r = 0, o = e.length; r < o; r++) if (r >= n.length || e[r] !== n[r]) {
                i = r + 1;
                break
            }
            if (e.length < n.length) for (r = 0, o = n.length; r < o; r++) if (r >= e.length || e[r] !== n[r]) {
                i = r + 1;
                break
            }
            if (1 === i) return t;
            for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
            for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r];
            return a
        }, toAbsPath: function (e, t) {
            var n, r, o, i = 0, a = [];
            for (r = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), px(e, function (e) {
                e && a.push(e)
            }), e = a, n = t.length - 1, a = []; 0 <= n; n--) 0 !== t[n].length && "." !== t[n] && (".." !== t[n] ? 0 < i ? i-- : a.push(t[n]) : i++);
            return 0 !== (o = (n = e.length - i) <= 0 ? a.reverse().join("/") : e.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o
        }, getURI: function (e) {
            var t, n = this;
            return n.source && !e || (t = "", e || (n.protocol ? t += n.protocol + "://" : t += "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
        }
    }, yx.parseDataUri = function (e) {
        var t, n;
        return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
            type: t,
            data: e[1]
        }
    }, yx.getDocumentBaseUrl = function (e) {
        var t;
        return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
    };
    var Cx = function (e, t, n) {
        var r, o, i, a, u;
        if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = Xt.trim(Zh.trimExternal(e.serializer, n.innerHTML)); else if ("text" === t.format) r = ca(n.innerText || n.textContent); else {
            if ("tree" === t.format) return e.serializer.serialize(n, t);
            i = (o = e).serializer.serialize(n, t), a = Vs(o), u = new RegExp("^(<" + a + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + a + ">[\r\n]*|<br \\/>[\r\n]*)$"), r = i.replace(u, "")
        }
        return "text" === t.format || vo(nr.fromDom(n)) ? t.content = r : t.content = Xt.trim(r), t.no_events || e.fire("GetContent", t), t.content
    }, xx = function (e, t) {
        t(e), e.firstChild && xx(e.firstChild, t), e.next && xx(e.next, t)
    }, wx = function (e, t, n) {
        var r = function (e, n, t) {
            var r = {}, o = {}, i = [];
            for (var a in t.firstChild && xx(t.firstChild, function (t) {
                M(e, function (e) {
                    e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {filter: e, nodes: [t]})
                }), M(n, function (e) {
                    "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                        filter: e,
                        nodes: [t]
                    })
                })
            }), r) r.hasOwnProperty(a) && i.push(r[a]);
            for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
            return i
        }(e, t, n);
        M(r, function (t) {
            M(t.filter.callbacks, function (e) {
                e(t.nodes, t.filter.name, {})
            })
        })
    }, Nx = function (e) {
        return e instanceof Vb
    }, Ex = function (e, t) {
        var r;
        e.dom.setHTML(e.getBody(), t), xp(r = e) && Zc.firstPositionIn(r.getBody()).each(function (e) {
            var t = e.getNode(), n = Ao.isTable(t) ? Zc.firstPositionIn(t).getOr(e) : e;
            r.selection.setRng(n.toRange())
        })
    }, Sx = function (u, s, c) {
        return void 0 === c && (c = {}), c.format = c.format ? c.format : "html", c.set = !0, c.content = Nx(s) ? "" : s, Nx(s) || c.no_events || (u.fire("BeforeSetContent", c), s = c.content), A.from(u.getBody()).fold(j(s), function (e) {
            return Nx(s) ? function (e, t, n, r) {
                wx(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                var o = Ql({validate: e.validate}, e.schema).serialize(n);
                return r.content = vo(nr.fromDom(t)) ? o : Xt.trim(o), Ex(e, r.content), r.no_events || e.fire("SetContent", r), n
            }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), (i = Vs(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, r = t.dom.createHTML(i, t.settings.forced_root_block_attrs, r)) : r || (r = '<br data-mce-bogus="1">'), Ex(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = Ql({validate: t.validate}, t.schema).serialize(t.parser.parse(r, {
                isRootContent: !0,
                insert: !0
            }))), o.content = vo(nr.fromDom(n)) ? r : Xt.trim(r), Ex(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
            var t, n, r, o, i, a
        })
    }, kx = di.DOM, Tx = function (e) {
        return A.from(e).each(function (e) {
            return e.destroy()
        })
    }, Ax = function (e) {
        if (!e.removed) {
            var t = e._selectionOverrides, n = e.editorUpload, r = e.getBody(), o = e.getElement();
            r && e.save({is_removing: !0}), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && kx.remove(o.nextSibling), !e.inline && r && (i = e, kx.setStyle(i.id, "display", i.orgDisplay)), Kg(e), e.editorManager.remove(e), kx.remove(e.getContainer()), Tx(t), Tx(n), e.destroy()
        }
        var i
    }, _x = function (e, t) {
        var n, r, o, i = e.selection, a = e.dom;
        e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Tx(i), Tx(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), kx.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
    }, Rx = di.DOM, Dx = Xt.extend, Bx = Xt.each, Ox = Xt.resolve, Px = fe.ie, Lx = function (e, t, n) {
        var r, o, i, a, u, s, c, l = this, f = l.documentBaseUrl = n.documentBaseURL, d = n.baseURI;
        r = l, o = e, i = f, a = n.defaultSettings, u = t, c = {
            id: o,
            theme: "modern",
            delta_width: 0,
            delta_height: 0,
            popup_css: "",
            plugins: "",
            document_base_url: i,
            add_form_submit_trigger: !0,
            submit_patch: !0,
            add_unload_trigger: !0,
            convert_urls: !0,
            relative_urls: !0,
            remove_script_host: !0,
            object_resizing: !0,
            doctype: "<!DOCTYPE html>",
            visual: !0,
            font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
            font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
            forced_root_block: "p",
            hidden_input: !0,
            render_ui: !0,
            indentation: "30px",
            inline_styles: !0,
            convert_fonts_to_spans: !0,
            indent: "simple",
            indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            entity_encoding: "named",
            url_converter: (s = r).convertURL,
            url_converter_scope: s,
            ie7_compat: !0
        }, t = gf(uf, c, a, u), l.settings = t, Ci.language = t.language || "en", Ci.languageLoad = t.language_load, Ci.baseURL = n.baseURL, l.id = e, l.setDirty(!1), l.plugins = {}, l.documentBaseURI = new yx(t.document_base_url, {base_uri: d}), l.baseURI = d, l.contentCSS = [], l.contentStyles = [], l.shortcuts = new fp(l), l.loadedCSS = {}, l.editorCommands = new zg(l), l.suffix = n.suffix, l.editorManager = n, l.inline = t.inline, l.buttons = {}, l.menuItems = {}, t.cache_suffix && (fe.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")), !1 === t.override_viewport && (fe.overrideViewPort = !1), n.fire("SetupEditor", {editor: l}), l.execCallback("setup", l), l.$ = gn.overrideDefaults(function () {
            return {context: l.inline ? l.getBody() : l.getDoc(), element: l.getBody()}
        })
    };
    Dx(Lx.prototype = {
        render: function () {
            mx(this)
        }, focus: function (e) {
            Cp(this, e)
        }, hasFocus: function () {
            return xp(this)
        }, execCallback: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? Ox(r) : 0, o = Ox(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, Array.prototype.slice.call(arguments, 1))
        }, translate: function (e) {
            if (e && Xt.is(e, "string")) {
                var n = this.settings.language || "en", r = this.editorManager.i18n;
                e = r.data[n + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function (e, t) {
                    return r.data[n + "." + t] || "{#" + t + "}"
                })
            }
            return this.editorManager.translate(e)
        }, getLang: function (e, t) {
            return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (t !== undefined ? t : "{#" + e + "}")
        }, getParam: function (e, t, n) {
            return vf(this, e, t, n)
        }, nodeChanged: function (e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }, addButton: function (e, t) {
            var n = this;
            t.cmd && (t.onclick = function () {
                n.execCommand(t.cmd)
            }), t.stateSelector && "undefined" == typeof t.active && (t.active = !1), t.text || t.icon || (t.icon = e), t.tooltip = t.tooltip || t.title, n.buttons[e] = t
        }, addSidebar: function (e, t) {
            return gx(this, e, t)
        }, addMenuItem: function (e, t) {
            var n = this;
            t.cmd && (t.onclick = function () {
                n.execCommand(t.cmd)
            }), n.menuItems[e] = t
        }, addContextToolbar: function (e, t) {
            var n, r = this;
            r.contextToolbars = r.contextToolbars || [], "string" == typeof e && (n = e, e = function (e) {
                return r.dom.is(e, n)
            }), r.contextToolbars.push({id: th.uuid("mcet"), predicate: e, items: t})
        }, addCommand: function (e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }, addQueryStateHandler: function (e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }, addQueryValueHandler: function (e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }, addShortcut: function (e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        }, execCommand: function (e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        }, queryCommandState: function (e) {
            return this.editorCommands.queryCommandState(e)
        }, queryCommandValue: function (e) {
            return this.editorCommands.queryCommandValue(e)
        }, queryCommandSupported: function (e) {
            return this.editorCommands.queryCommandSupported(e)
        }, show: function () {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = !0 : (Rx.show(this.getContainer()), Rx.hide(this.id)), this.load(), this.fire("show"))
        }, hide: function () {
            var e = this, t = e.getDoc();
            e.hidden || (Px && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Rx.hide(e.getContainer()), Rx.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        }, isHidden: function () {
            return !!this.hidden
        }, setProgressState: function (e, t) {
            this.fire("ProgressState", {state: e, time: t})
        }, load: function (e) {
            var t, n = this.getElement();
            return this.removed ? "" : n ? ((e = e || {}).load = !0, t = this.setContent(n.value !== undefined ? n.value : n.innerHTML, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t) : void 0
        }, save: function (e) {
            var t, n, r = this, o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, /TEXTAREA|INPUT/i.test(o.nodeName) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = Rx.getParent(r.id, "form")) && Bx(n.elements, function (e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        }, setContent: function (e, t) {
            return Sx(this, e, t)
        }, getContent: function (e) {
            return t = this, void 0 === (n = e) && (n = {}), A.from(t.getBody()).fold(j("tree" === n.format ? new Vb("body", 11) : ""), function (e) {
                return Cx(t, n, e)
            });
            var t, n
        }, insertContent: function (e, t) {
            t && (e = Dx({content: e}, t)), this.execCommand("mceInsertContent", !1, e)
        }, isDirty: function () {
            return !this.isNotDirty
        }, setDirty: function (e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        }, setMode: function (e) {
            var t, n;
            (n = e) !== ep(t = this) && (t.initialized ? Zg(t, "readonly" === n) : t.on("init", function () {
                Zg(t, "readonly" === n)
            }), Xg(t, n))
        }, getContainer: function () {
            return this.container || (this.container = Rx.get(this.editorContainer || this.id + "_parent")), this.container
        }, getContentAreaContainer: function () {
            return this.contentAreaContainer
        }, getElement: function () {
            return this.targetElm || (this.targetElm = Rx.get(this.id)), this.targetElm
        }, getWin: function () {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        }, getDoc: function () {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        }, getBody: function () {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        }, convertURL: function (e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        }, addVisual: function (e) {
            var n, r = this, o = r.settings, i = r.dom;
            e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), Bx(i.select("table,a", e), function (e) {
                var t;
                switch (e.nodeName) {
                    case"TABLE":
                        return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                    case"A":
                        return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)))
                }
            }), r.fire("VisualAid", {element: e, hasVisual: r.hasVisual})
        }, remove: function () {
            Ax(this)
        }, destroy: function (e) {
            _x(this, e)
        }, uploadImages: function (e) {
            return this.editorUpload.uploadImages(e)
        }, _scanForImages: function () {
            return this.editorUpload.scanForImages()
        }
    }, ap);
    var Ix, Mx, Fx, zx = {
            isEditorUIElement: function (e) {
                return -1 !== e.className.toString().indexOf("mce-")
            }
        }, Ux = function (n, e) {
            var t, r;
            er.detect().browser.isIE() ? (r = n).on("focusout", function () {
                Dg(r)
            }) : (t = e, n.on("mouseup touchend", function (e) {
                t.throttle()
            })), n.on("keyup nodechange", function (e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || Dg(n)
            })
        }, Vx = function (e) {
            var t, n, r, o = Ai(function () {
                Dg(e)
            }, 0);
            e.inline && (t = e, n = o, r = function () {
                n.throttle()
            }, di.DOM.bind(document, "mouseup", r), t.on("remove", function () {
                di.DOM.unbind(document, "mouseup", r)
            })), e.on("init", function () {
                Ux(e, o)
            }), e.on("remove", function () {
                o.cancel()
            })
        }, Hx = di.DOM, jx = function (e) {
            return zx.isEditorUIElement(e)
        }, qx = function (t, e) {
            var n = t ? t.settings.custom_ui_selector : "";
            return null !== Hx.getParent(e, function (e) {
                return jx(e) || !!n && t.dom.is(e, n)
            })
        }, $x = function (r, e) {
            var t = e.editor;
            Vx(t), t.on("focusin", function () {
                var e = r.focusedEditor;
                e !== this && (e && e.fire("blur", {focusedEditor: this}), r.setActive(this), (r.focusedEditor = this).fire("focus", {blurredEditor: e}), this.focus(!0))
            }), t.on("focusout", function () {
                var t = this;
                he.setEditorTimeout(t, function () {
                    var e = r.focusedEditor;
                    qx(t, function () {
                        try {
                            return document.activeElement
                        } catch (e) {
                            return document.body
                        }
                    }()) || e !== t || (t.fire("blur", {focusedEditor: null}), r.focusedEditor = null)
                })
            }), Ix || (Ix = function (e) {
                var t, n = r.activeEditor;
                t = e.target, n && t.ownerDocument === document && (t === document.body || qx(n, t) || r.focusedEditor !== n || (n.fire("blur", {focusedEditor: null}), r.focusedEditor = null))
            }, Hx.bind(document, "focusin", Ix))
        }, Wx = function (e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Hx.unbind(document, "focusin", Ix), Ix = null)
        }, Kx = function (e) {
            e.on("AddEditor", b($x, e)), e.on("RemoveEditor", b(Wx, e))
        }, Xx = {}, Yx = "en", Gx = {
            setCode: function (e) {
                e && (Yx = e, this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            }, getCode: function () {
                return Yx
            }, rtl: !1, add: function (e, t) {
                var n = Xx[e];
                for (var r in n || (Xx[e] = n = {}), t) n[r] = t[r];
                this.setCode(e)
            }, translate: function (e) {
                var t = Xx[Yx] || {}, n = function (e) {
                    return Xt.is(e, "function") ? Object.prototype.toString.call(e) : r(e) ? "" : "" + e
                }, r = function (e) {
                    return "" === e || null === e || Xt.is(e, "undefined")
                }, o = function (e) {
                    return e = n(e), Xt.hasOwn(t, e) ? n(t[e]) : e
                };
                if (r(e)) return "";
                if (Xt.is(e, "object") && Xt.hasOwn(e, "raw")) return n(e.raw);
                if (Xt.is(e, "array")) {
                    var i = e.slice(1);
                    e = o(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                        return Xt.hasOwn(i, t) ? n(i[t]) : e
                    })
                }
                return o(e).replace(/{context:\w+}$/, "")
            }, data: Xx
        }, Jx = di.DOM, Qx = Xt.explode, Zx = Xt.each, ew = Xt.extend, tw = 0, nw = !1, rw = [], ow = [],
        iw = function (t) {
            Zx(Fx.get(), function (e) {
                "scroll" === t.type ? e.fire("ScrollWindow", t) : e.fire("ResizeWindow", t)
            })
        }, aw = function (e) {
            e !== nw && (e ? gn(window).on("resize scroll", iw) : gn(window).off("resize scroll", iw), nw = e)
        }, uw = function (t) {
            var e = ow;
            delete rw[t.id];
            for (var n = 0; n < rw.length; n++) if (rw[n] === t) {
                rw.splice(n, 1);
                break
            }
            return ow = F(ow, function (e) {
                return t !== e
            }), Fx.activeEditor === t && (Fx.activeEditor = 0 < ow.length ? ow[0] : null), Fx.focusedEditor === t && (Fx.focusedEditor = null), e.length !== ow.length
        };
    ew(Fx = {
        defaultSettings: {},
        $: gn,
        majorVersion: "4",
        minorVersion: "8.5",
        releaseDate: "2018-10-30",
        editors: rw,
        i18n: Gx,
        activeEditor: null,
        settings: {},
        setup: function () {
            var e, t, n, r, o = "";
            if (t = yx.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), n = window.tinymce || window.tinyMCEPreInit) e = n.base || n.baseURL, o = n.suffix; else {
                for (var i = document.getElementsByTagName("script"), a = 0; a < i.length; a++) {
                    var u = (r = i[a].src).substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== u.indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }
                !e && document.currentScript && (-1 !== (r = document.currentScript.src).indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/")))
            }
            this.baseURL = new yx(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new yx(this.baseURL), this.suffix = o, Kx(this)
        },
        overrideDefaults: function (e) {
            var t, n;
            (t = e.base_url) && (this.baseURL = new yx(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new yx(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n);
            var r = (this.defaultSettings = e).plugin_base_urls;
            for (var o in r) Ci.PluginManager.urls[o] = r[o]
        },
        init: function (r) {
            var n, u, s = this;
            u = Xt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
            var c = function (e) {
                var t = e.id;
                return t || (t = (t = e.name) && !Jx.get(t) ? e.name : Jx.uniqueId(), e.setAttribute("id", t)), t
            }, l = function (e, t) {
                return t.constructor === RegExp ? t.test(e.className) : Jx.hasClass(e, t)
            }, f = function (e) {
                n = e
            }, e = function () {
                var o, i = 0, a = [], n = function (e, t, n) {
                    var r = new Lx(e, t, s);
                    a.push(r), r.on("init", function () {
                        ++i === o.length && f(a)
                    }), r.targetElm = r.targetElm || n, r.render()
                };
                Jx.unbind(window, "ready", e), function (e) {
                    var t = r[e];
                    t && t.apply(s, Array.prototype.slice.call(arguments, 2))
                }("onpageload"), o = gn.unique(function (t) {
                    var e, n = [];
                    if (fe.ie && fe.ie < 11) return zp("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                    if (t.types) return Zx(t.types, function (e) {
                        n = n.concat(Jx.select(e.selector))
                    }), n;
                    if (t.selector) return Jx.select(t.selector);
                    if (t.target) return [t.target];
                    switch (t.mode) {
                        case"exact":
                            0 < (e = t.elements || "").length && Zx(Qx(e), function (t) {
                                var e;
                                (e = Jx.get(t)) ? n.push(e) : Zx(document.forms, function (e) {
                                    Zx(e.elements, function (e) {
                                        e.name === t && (t = "mce_editor_" + tw++, Jx.setAttrib(e, "id", t), n.push(e))
                                    })
                                })
                            });
                            break;
                        case"textareas":
                        case"specific_textareas":
                            Zx(Jx.select("textarea"), function (e) {
                                t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                            })
                    }
                    return n
                }(r)), r.types ? Zx(r.types, function (t) {
                    Xt.each(o, function (e) {
                        return !Jx.is(e, t.selector) || (n(c(e), ew({}, r, t), e), !1)
                    })
                }) : (Xt.each(o, function (e) {
                    var t;
                    (t = s.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (uw(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                }), 0 === (o = Xt.grep(o, function (e) {
                    return !s.get(e.id)
                })).length ? f([]) : Zx(o, function (e) {
                    var t;
                    t = e, r.inline && t.tagName.toLowerCase() in u ? zp("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                }))
            };
            return s.settings = r, Jx.bind(window, "ready", e), new de(function (t) {
                n ? t(n) : f = function (e) {
                    t(e)
                }
            })
        },
        get: function (t) {
            return 0 === arguments.length ? ow.slice(0) : T(t) ? U(ow, function (e) {
                return e.id === t
            }).getOr(null) : P(t) && ow[t] ? ow[t] : null
        },
        add: function (e) {
            var t = this;
            return rw[e.id] === e || (null === t.get(e.id) && ("length" !== e.id && (rw[e.id] = e), rw.push(e), ow.push(e)), aw(!0), t.activeEditor = e, t.fire("AddEditor", {editor: e}), Mx || (Mx = function () {
                t.fire("BeforeUnload")
            }, Jx.bind(window, "beforeunload", Mx))), e
        },
        createEditor: function (e, t) {
            return this.add(new Lx(e, t, this))
        },
        remove: function (e) {
            var t, n, r = this;
            if (e) {
                if (!T(e)) return n = e, D(r.get(n.id)) ? null : (uw(n) && r.fire("RemoveEditor", {editor: n}), 0 === ow.length && Jx.unbind(window, "beforeunload", Mx), n.remove(), aw(0 < ow.length), n);
                Zx(Jx.select(e), function (e) {
                    (n = r.get(e.id)) && r.remove(n)
                })
            } else for (t = ow.length - 1; 0 <= t; t--) r.remove(ow[t])
        },
        execCommand: function (e, t, n) {
            var r = this.get(n);
            switch (e) {
                case"mceAddEditor":
                    return this.get(n) || new Lx(n, this.settings, this).render(), !0;
                case"mceRemoveEditor":
                    return r && r.remove(), !0;
                case"mceToggleEditor":
                    return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0
            }
            return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
        },
        triggerSave: function () {
            Zx(ow, function (e) {
                e.save()
            })
        },
        addI18n: function (e, t) {
            Gx.add(e, t)
        },
        translate: function (e) {
            return Gx.translate(e)
        },
        setActive: function (e) {
            var t = this.activeEditor;
            this.activeEditor !== e && (t && t.fire("deactivate", {relatedTarget: e}), e.fire("activate", {relatedTarget: t})), this.activeEditor = e
        }
    }, qg), Fx.setup();
    var sw, cw = Fx;

    function lw(n) {
        return {
            walk: function (e, t) {
                return Tl(n, e, t)
            }, split: Tv, normalize: function (t) {
                return ug(n, t).fold(j(!1), function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    }

    (sw = lw || (lw = {})).compareRanges = eg, sw.getCaretRangeFromPoint = ly, sw.getSelectedNode = Ua, sw.getNode = Va;
    var fw, dw, mw = lw, gw = Math.min, pw = Math.max, hw = Math.round, vw = function (e, t, n) {
        var r, o, i, a, u, s;
        return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += hw(s / 2)), "c" === n[1] && (r += hw(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= hw(a / 2)), "c" === n[4] && (r -= hw(i / 2)), bw(r, o, i, a)
    }, bw = function (e, t, n, r) {
        return {x: e, y: t, w: n, h: r}
    }, yw = {
        inflate: function (e, t, n) {
            return bw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
        }, relativePosition: vw, findBestRelativePosition: function (e, t, n, r) {
            var o, i;
            for (i = 0; i < r.length; i++) if ((o = vw(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
            return null
        }, intersect: function (e, t) {
            var n, r, o, i;
            return n = pw(e.x, t.x), r = pw(e.y, t.y), o = gw(e.x + e.w, t.x + t.w), i = gw(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : bw(n, r, o - n, i - r)
        }, clamp: function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d;
            return u = e.x, s = e.y, c = e.x + e.w, l = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = pw(0, t.x - u), o = pw(0, t.y - s), i = pw(0, c - f), a = pw(0, l - d), u += r, s += o, n && (c += r, l += o, u -= i, s -= a), bw(u, s, (c -= i) - u, (l -= a) - s)
        }, create: bw, fromClientRect: function (e) {
            return bw(e.left, e.top, e.width, e.height)
        }
    }, Cw = {}, xw = {
        add: function (e, t) {
            Cw[e.toLowerCase()] = t
        }, has: function (e) {
            return !!Cw[e.toLowerCase()]
        }, get: function (e) {
            var t = e.toLowerCase(), n = Cw.hasOwnProperty(t) ? Cw[t] : null;
            if (null === n) throw new Error("Could not find module for type: " + e);
            return n
        }, create: function (e, t) {
            var n;
            if ("string" == typeof e ? (t = t || {}).type = e : e = (t = e).type, e = e.toLowerCase(), !(n = Cw[e])) throw new Error("Could not find control by type: " + e);
            return (n = new n(t)).type = e, n
        }
    }, ww = Xt.each, Nw = Xt.extend, Ew = function () {
    };
    Ew.extend = fw = function (n) {
        var e, t, r, o = this.prototype, i = function () {
            var e, t, n;
            if (!dw && (this.init && this.init.apply(this, arguments), t = this.Mixins)) for (e = t.length; e--;) (n = t[e]).init && n.init.apply(this, arguments)
        }, a = function () {
            return this
        }, u = function (n, r) {
            return function () {
                var e, t = this._super;
                return this._super = o[n], e = r.apply(this, arguments), this._super = t, e
            }
        };
        for (t in dw = !0, e = new this, dw = !1, n.Mixins && (ww(n.Mixins, function (e) {
            for (var t in e) "init" !== t && (n[t] = e[t])
        }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && ww(n.Methods.split(","), function (e) {
            n[e] = a
        }), n.Properties && ww(n.Properties.split(","), function (e) {
            var t = "_" + e;
            n[e] = function (e) {
                return e !== undefined ? (this[t] = e, this) : this[t]
            }
        }), n.Statics && ww(n.Statics, function (e, t) {
            i[t] = e
        }), n.Defaults && o.Defaults && (n.Defaults = Nw({}, o.Defaults, n.Defaults)), n) "function" == typeof(r = n[t]) && o[t] ? e[t] = u(t, r) : e[t] = r;
        return i.prototype = e, (i.constructor = i).extend = fw, i
    };
    var Sw = Math.min, kw = Math.max, Tw = Math.round, Aw = function (e, n) {
        var r, o, t, i;
        if (n = n || '"', null === e) return "null";
        if ("string" == (t = typeof e)) return o = "\bb\tt\nn\ff\rr\"\"''\\\\", n + e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function (e, t) {
            return '"' === n && "'" === e ? e : (r = o.indexOf(t)) + 1 ? "\\" + o.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e)
        }) + n;
        if ("object" === t) {
            if (e.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(e)) {
                for (r = 0, o = "["; r < e.length; r++) o += (0 < r ? "," : "") + Aw(e[r], n);
                return o + "]"
            }
            for (i in o = "{", e) e.hasOwnProperty(i) && (o += "function" != typeof e[i] ? (1 < o.length ? "," + n : n) + i + n + ":" + Aw(e[i], n) : "");
            return o + "}"
        }
        return "" + e
    }, _w = {
        serialize: Aw, parse: function (e) {
            try {
                return JSON.parse(e)
            } catch (t) {
            }
        }
    }, Rw = {
        callbacks: {}, count: 0, send: function (t) {
            var n = this, r = di.DOM, o = t.count !== undefined ? t.count : n.count, i = "tinymce_jsonp_" + o;
            n.callbacks[o] = function (e) {
                r.remove(i), delete n.callbacks[o], t.callback(e)
            }, r.add(r.doc.body, "script", {id: i, src: t.url, type: "text/javascript"}), n.count++
        }
    }, Dw = {
        send: function (e) {
            var t, n = 0, r = function () {
                !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : setTimeout(r, 10)
            };
            if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", Dw.fire("beforeInitialize", {settings: e}), t = Hp()) {
                if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && Xt.each(e.requestheaders, function (e) {
                        t.setRequestHeader(e.key, e.value)
                    }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = Dw.fire("beforeSend", {
                        xhr: t,
                        settings: e
                    }).xhr).send(e.data), !e.async) return r();
                setTimeout(r, 10)
            }
        }
    };
    Xt.extend(Dw, qg);
    var Bw, Ow, Pw, Lw, Iw = Xt.extend, Mw = function (e) {
        this.settings = Iw({}, e), this.count = 0
    };
    Mw.sendRPC = function (e) {
        return (new Mw).send(e)
    }, Mw.prototype = {
        send: function (n) {
            var r = n.error, o = n.success;
            (n = Iw(this.settings, n)).success = function (e, t) {
                void 0 === (e = _w.parse(e)) && (e = {error: "JSON Parse error."}), e.error ? r.call(n.error_scope || n.scope, e.error, t) : o.call(n.success_scope || n.scope, e.result)
            }, n.error = function (e, t) {
                r && r.call(n.error_scope || n.scope, e, t)
            }, n.data = _w.serialize({
                id: n.id || "c" + this.count++,
                method: n.method,
                params: n.params
            }), n.content_type = "application/json", Dw.send(n)
        }
    };
    try {
        Bw = window.localStorage
    } catch (Hw) {
        Ow = {}, Pw = [], Lw = {
            getItem: function (e) {
                var t = Ow[e];
                return t || null
            }, setItem: function (e, t) {
                Pw.push(e), Ow[e] = String(t)
            }, key: function (e) {
                return Pw[e]
            }, removeItem: function (t) {
                Pw = Pw.filter(function (e) {
                    return e === t
                }), delete Ow[t]
            }, clear: function () {
                Pw = [], Ow = {}
            }, length: 0
        }, Object.defineProperty(Lw, "length", {
            get: function () {
                return Pw.length
            }, configurable: !1, enumerable: !1
        }), Bw = Lw
    }
    var Fw, zw = cw, Uw = {
        geom: {Rect: yw},
        util: {
            Promise: de,
            Delay: he,
            Tools: Xt,
            VK: Hh,
            URI: yx,
            Class: Ew,
            EventDispatcher: Vg,
            Observable: qg,
            I18n: Gx,
            XHR: Dw,
            JSON: _w,
            JSONRequest: Mw,
            JSONP: Rw,
            LocalStorage: Bw,
            Color: function (e) {
                var n = {}, u = 0, s = 0, c = 0, t = function (e) {
                    var t;
                    return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function (e, t, n) {
                        var r, o, i, a;
                        if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = kw(0, Sw(t, 1)), n = kw(0, Sw(n, 1)), 0 !== t) {
                            switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                case 0:
                                    u = o, s = i, c = 0;
                                    break;
                                case 1:
                                    u = i, s = o, c = 0;
                                    break;
                                case 2:
                                    u = 0, s = o, c = i;
                                    break;
                                case 3:
                                    u = 0, s = i, c = o;
                                    break;
                                case 4:
                                    u = i, s = 0, c = o;
                                    break;
                                case 5:
                                    u = o, s = 0, c = i;
                                    break;
                                default:
                                    u = s = c = 0
                            }
                            u = Tw(255 * (u + a)), s = Tw(255 * (s + a)), c = Tw(255 * (c + a))
                        } else u = s = c = Tw(255 * n)
                    }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                };
                return e && t(e), n.toRgb = function () {
                    return {r: u, g: s, b: c}
                }, n.toHsv = function () {
                    return e = u, t = s, n = c, o = 0, (i = Sw(e /= 255, Sw(t /= 255, n /= 255))) === (a = kw(e, kw(t, n))) ? {
                        h: 0,
                        s: 0,
                        v: 100 * (o = i)
                    } : (r = (a - i) / a, {
                        h: Tw(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                        s: Tw(100 * r),
                        v: Tw(100 * o)
                    });
                    var e, t, n, r, o, i, a
                }, n.toHex = function () {
                    var e = function (e) {
                        return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                    };
                    return "#" + e(u) + e(s) + e(c)
                }, n.parse = t, n
            }
        },
        dom: {
            EventUtils: Se,
            Sizzle: St,
            DomQuery: gn,
            TreeWalker: to,
            DOMUtils: di,
            ScriptLoader: vi,
            RangeUtils: mw,
            Serializer: ry,
            ControlSelection: sy,
            BookmarkManager: iy,
            Selection: Fy,
            Event: Se.Event
        },
        html: {
            Styles: ti,
            Entities: Ho,
            Node: Vb,
            Schema: Zo,
            SaxParser: Jh,
            DomParser: Qb,
            Writer: Jl,
            Serializer: Ql
        },
        ui: {Factory: xw},
        Env: fe,
        AddOnManager: Ci,
        Annotator: Ll,
        Formatter: _b,
        UndoManager: hv,
        EditorCommands: zg,
        WindowManager: Dp,
        NotificationManager: Rp,
        EditorObservable: ap,
        Shortcuts: fp,
        Editor: Lx,
        FocusManager: zx,
        EditorManager: cw,
        DOM: di.DOM,
        ScriptLoader: vi.ScriptLoader,
        PluginManager: Ci.PluginManager,
        ThemeManager: Ci.ThemeManager,
        trim: Xt.trim,
        isArray: Xt.isArray,
        is: Xt.is,
        toArray: Xt.toArray,
        makeMap: Xt.makeMap,
        each: Xt.each,
        map: Xt.map,
        grep: Xt.grep,
        inArray: Xt.inArray,
        extend: Xt.extend,
        create: Xt.create,
        walk: Xt.walk,
        createNS: Xt.createNS,
        resolve: Xt.resolve,
        explode: Xt.explode,
        _addCacheSuffix: Xt._addCacheSuffix,
        isOpera: fe.opera,
        isWebKit: fe.webkit,
        isIE: fe.ie,
        isGecko: fe.gecko,
        isMac: fe.mac
    }, Vw = zw = Xt.extend(zw, Uw);
    Fw = Vw, window.tinymce = Fw, window.tinyMCE = Fw, function (e) {
        if ("object" == typeof module) try {
            module.exports = e
        } catch (t) {
        }
    }(Vw)
}();
;
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.1.0-40
 */

!function () {
    (function () {
        "use strict";
        var a = function (a, b) {
            return {isRequired: a, applyPatch: b}
        }, b = function (a, b) {
            return function () {
                var c = Array.prototype.slice.call(arguments), d = b.apply(this, c),
                    e = "undefined" == typeof d ? c : d;
                return a.apply(this, e)
            }
        }, c = function (a, b) {
            return function () {
                var c = a.apply(this, arguments), d = b(c), e = "undefined" == typeof d ? c : d;
                return e
            }
        }, d = function (a, b) {
            if (a) for (var c = 0; c < b.length; c++) b[c].isRequired(a) && b[c].applyPatch(a);
            return a
        }, e = {nu: a, before: b, after: c, applyPatches: d}, f = 0, g = 1, h = -1, i = function (a) {
            return parseInt(a, 10)
        }, j = function (a) {
            return function () {
                return a
            }
        }, k = function (a, b, c) {
            return {major: j(a), minor: j(b), patch: j(c)}
        }, l = function (a) {
            var b = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(a);
            return b ? k(i(b[1]), i(b[2]), i(b[3])) : k(0, 0, 0)
        }, m = function (a, b) {
            var c = a - b;
            return 0 === c ? f : c > 0 ? g : h
        }, n = function (a, b) {
            var c = m(a.major(), b.major());
            if (c !== f) return c;
            var d = m(a.minor(), b.minor());
            if (d !== f) return d;
            var e = m(a.patch(), b.patch());
            return e !== f ? e : f
        }, o = {nu: k, parse: l, compare: n}, p = function (a) {
            var b = [a.majorVersion, a.minorVersion].join(".");
            return b.split(".").slice(0, 3).join(".")
        }, q = function (a) {
            return a ? o.parse(p(a)) : null
        }, r = function (a, b) {
            return o.compare(q(a), o.parse(b)) < 0
        }, s = {getVersion: q, isLessThan: r}, t = function (a, b) {
            b = b.split(".");
            for (var c = 0; c < b.length && (a = a[b[c]], a); c++) ;
            return a
        }, u = {resolve: t}, v = function (a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
        }, w = function (a) {
            return function (b) {
                return v(b) === a
            }
        }, x = {
            isString: w("string"),
            isObject: w("object"),
            isArray: w("array"),
            isNull: w("null"),
            isBoolean: w("boolean"),
            isUndefined: w("undefined"),
            isFunction: w("function"),
            isNumber: w("number")
        }, y = function (a) {
            var b = a.defaultSettings.forced_plugins;
            return b ? b : []
        }, z = function (a) {
            return x.isUndefined(a) || "" === a ? [] : x.isArray(a) ? a : a.split(" ")
        }, A = function (a) {
            return function (b) {
                var c = u.resolve(window, "tinymce.util.Tools"), d = z(b.plugins), e = y(a),
                    f = e.length > 0 ? d.concat(e) : d;
                return [c.extend({}, b, {plugins: f})]
            }
        }, B = function (a) {
            return s.isLessThan(a, "4.7.0")
        }, C = function (a) {
            a.EditorManager.init = e.before(a.EditorManager.init, A(a.EditorManager))
        }, D = {patch: e.nu(B, C)}, E = function () {
            return (new Date).getTime()
        }, F = function (a, b, c, d, e) {
            var f, g = E();
            f = setInterval(function () {
                a() && (clearInterval(f), b()), E() - g > e && (clearInterval(f), c())
            }, d)
        }, G = {waitFor: F}, H = function (a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : window.getComputedStyle(a, null)[b];
            return c ? c : ""
        }, I = function (a) {
            return function () {
                var b = H(a, "position").toLowerCase();
                return "absolute" === b || "fixed" === b
            }
        }, J = function () {
            var a = document.createElement("div");
            return a.style.display = "none", a.className = "mce-floatpanel", a
        }, K = function (a) {
            a.parentNode.removeChild(a)
        }, L = function (a, b) {
            var c = J();
            document.body.appendChild(c), G.waitFor(I(c), function () {
                K(c), a()
            }, function () {
                K(c), b()
            }, 10, 5e3)
        }, M = {waitForSkinLoaded: L}, N = function (a, b) {
            a.notificationManager ? a.notificationManager.open({
                text: b,
                type: "warning",
                timeout: 0,
                icon: ""
            }) : a.windowManager.alert(b)
        }, O = function (a) {
            a.EditorManager.on("AddEditor", function (a) {
                var b = a.editor, c = b.settings.service_message;
                c && M.waitForSkinLoaded(function () {
                    N(b, b.settings.service_message)
                }, function () {
                    alert(c)
                })
            })
        }, P = {error: N, register: O}, Q = function (a) {
            var b, c, d = u.resolve(window, "tinymce.util.URI");
            b = a.base_url, b && (this.baseURL = new d(this.documentBaseURL).toAbsolute(b.replace(/\/+$/, "")), this.baseURI = new d(this.baseURL)), c = a.suffix, a.suffix && (this.suffix = c), this.defaultSettings = a
        }, R = function (a) {
            var b = u.resolve(window, "tinymce.util.Tools");
            return [b.extend({}, this.defaultSettings, a)]
        }, S = function (a) {
            return "function" != typeof a.overrideDefaults
        }, T = function (a) {
            P.register(a), a.overrideDefaults = Q, a.EditorManager.init = e.before(a.EditorManager.init, R)
        }, U = {patch: e.nu(S, T)}, V = function (a) {
            return function (b) {
                var c = b.plugin_base_urls;
                for (var d in c) a.PluginManager.urls[d] = c[d]
            }
        }, W = function (a) {
            return s.isLessThan(a, "4.5.0")
        }, X = function (a) {
            a.overrideDefaults = e.before(a.overrideDefaults, V(a))
        }, Y = {patch: e.nu(W, X)}, Z = function (a) {
            e.applyPatches(a, [U.patch, Y.patch, D.patch])
        }, $ = window;
        Z($.tinymce);
        var _ = function () {
            return {applyPatches: Z}
        };
        return _
    })()
}();
;
(function (cloudSettings) {
        tinymce.overrideDefaults(cloudSettings);
    })({
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "forced_plugins": ["chiffer", "rain"],
    "suffix": ".min",
    "service_message": "This domain is not registered with TinyMCE Cloud. <a target=\"_blank\" href=\"https://apps.tiny.cloud/?add-to-cart=197933\">Start a free trial</a> to discover our premium cloud services and pro support.",
    "plugin_base_urls": {
        "advcode": "https://plugins.tinymce.com/advcode/stable",
        "a11ychecker": "https://plugins.tinymce.com/a11ychecker/stable",
        "mediaembed": "https://plugins.tinymce.com/mediaembed/stable",
        "powerpaste": "https://plugins.tinymce.com/powerpaste/stable",
        "linkchecker": "https://plugins.tinymce.com/linkchecker/stable",
        "rain": "https://plugins.tinymce.com/rain/stable",
        "chiffer": "https://plugins.tinymce.com/chiffer/stable",
        "tinymcespellchecker": "https://plugins.tinymce.com/tinymcespellchecker/stable",
        "tinydrive": "https://plugins.tinymce.com/tinydrive/stable",
        "tinycomments": "https://plugins.tinymce.com/tinycomments/stable"
    },
    "rain_rainmaker_service_url": "https://rainmaker.tinymce.com"
});
/* Ephox chiffer plugin
*
* Copyright 2010-2017 Ephox Corporation.  All rights reserved.
*
* Version: 1.3.0-46
*/

!function () {
    !function () {
        "use strict";

        function a(a) {
            var b = 0, c = ob;
            return c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]]
        }

        var b = function () {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b]
        }, c = function (a) {
            return function () {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                return a()
            }
        }, d = function (a, b) {
            return function () {
                for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
                return a(b.apply(null, arguments))
            }
        }, e = function (a) {
            return function () {
                return a
            }
        }, f = function (a) {
            return a
        }, g = function (a, b) {
            return a === b
        }, h = function (a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            for (var d = new Array(arguments.length - 1), e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
            return function () {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                for (var e = new Array(arguments.length), f = 0; f < e.length; f++) e[f] = arguments[f];
                var g = d.concat(e);
                return a.apply(null, g)
            }
        }, i = function (a) {
            return function () {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                return !a.apply(null, arguments)
            }
        }, j = function (a) {
            return function () {
                throw new Error(a)
            }
        }, k = function (a) {
            return a()
        }, l = function (a) {
            a()
        }, m = e(!1), n = e(!0), o = {
            noop: b,
            noarg: c,
            compose: d,
            constant: e,
            identity: f,
            tripleEquals: g,
            curry: h,
            not: i,
            die: j,
            apply: k,
            call: l,
            never: m,
            always: n
        }, p = o.never, q = o.always, r = function () {
            return s
        }, s = function () {
            var a = function (a) {
                return a.isNone()
            }, b = function (a) {
                return a()
            }, c = function (a) {
                return a
            }, d = function () {
            }, e = {
                fold: function (a, b) {
                    return a()
                },
                is: p,
                isSome: p,
                isNone: q,
                getOr: c,
                getOrThunk: b,
                getOrDie: function (a) {
                    throw new Error(a || "error: getOrDie called on none.")
                },
                or: c,
                orThunk: b,
                map: r,
                ap: r,
                each: d,
                bind: r,
                flatten: r,
                exists: p,
                forall: q,
                filter: r,
                equals: a,
                equals_: a,
                toArray: function () {
                    return []
                },
                toString: o.constant("none()")
            };
            return Object.freeze && Object.freeze(e), e
        }(), t = function (a) {
            var b = function () {
                return a
            }, c = function () {
                return f
            }, d = function (b) {
                return t(b(a))
            }, e = function (b) {
                return b(a)
            }, f = {
                fold: function (b, c) {
                    return c(a)
                },
                is: function (b) {
                    return a === b
                },
                isSome: q,
                isNone: p,
                getOr: b,
                getOrThunk: b,
                getOrDie: b,
                or: c,
                orThunk: c,
                map: d,
                ap: function (b) {
                    return b.fold(r, function (b) {
                        return t(b(a))
                    })
                },
                each: function (b) {
                    b(a)
                },
                bind: e,
                flatten: b,
                exists: e,
                forall: e,
                filter: function (b) {
                    return b(a) ? f : s
                },
                equals: function (b) {
                    return b.is(a)
                },
                equals_: function (b, c) {
                    return b.fold(p, function (b) {
                        return c(a, b)
                    })
                },
                toArray: function () {
                    return [a]
                },
                toString: function () {
                    return "some(" + a + ")"
                }
            };
            return f
        }, u = function (a) {
            return null === a || void 0 === a ? s : t(a)
        }, v = {some: t, none: r, from: u}, w = function (a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
        }, x = function (a) {
            return function (b) {
                return w(b) === a
            }
        }, y = {
            isString: x("string"),
            isObject: x("object"),
            isArray: x("array"),
            isNull: x("null"),
            isBoolean: x("boolean"),
            isUndefined: x("undefined"),
            isFunction: x("function"),
            isNumber: x("number")
        }, z = function () {
            var a = Array.prototype.indexOf, b = function (b, c) {
                return a.call(b, c)
            }, c = function (a, b) {
                return P(a, b)
            };
            return void 0 === a ? c : b
        }(), A = function (a, b) {
            var c = z(a, b);
            return -1 === c ? v.none() : v.some(c)
        }, B = function (a, b) {
            return z(a, b) > -1
        }, C = function (a, b) {
            return O(a, b).isSome()
        }, D = function (a, b) {
            for (var c = [], d = 0; d < a; d++) c.push(b(d));
            return c
        }, E = function (a, b) {
            for (var c = [], d = 0; d < a.length; d += b) {
                var e = a.slice(d, d + b);
                c.push(e)
            }
            return c
        }, F = function (a, b) {
            for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                var f = a[e];
                d[e] = b(f, e, a)
            }
            return d
        }, G = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                b(a[c], c, a)
            }
        }, H = function (a, b) {
            for (var c = a.length - 1; c >= 0; c--) {
                b(a[c], c, a)
            }
        }, I = function (a, b) {
            for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                var g = a[e];
                (b(g, e, a) ? c : d).push(g)
            }
            return {pass: c, fail: d}
        }, J = function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                b(f, d, a) && c.push(f)
            }
            return c
        }, K = function (a, b) {
            if (0 === a.length) return [];
            for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                var h = a[f], i = b(h);
                i !== c && (d.push(e), e = []), c = i, e.push(h)
            }
            return 0 !== e.length && d.push(e), d
        }, L = function (a, b, c) {
            return H(a, function (a) {
                c = b(c, a)
            }), c
        }, M = function (a, b, c) {
            return G(a, function (a) {
                c = b(c, a)
            }), c
        }, N = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (b(e, c, a)) return v.some(e)
            }
            return v.none()
        }, O = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                if (b(a[c], c, a)) return v.some(c)
            }
            return v.none()
        }, P = function (a, b) {
            for (var c = 0, d = a.length; c < d; ++c) if (a[c] === b) return c;
            return -1
        }, Q = Array.prototype.push, R = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                Q.apply(b, a[c])
            }
            return b
        }, S = function (a, b) {
            var c = F(a, b);
            return R(c)
        }, T = function (a, b) {
            for (var c = 0, d = a.length; c < d; ++c) {
                if (!0 !== b(a[c], c, a)) return !1
            }
            return !0
        }, U = function (a, b) {
            return a.length === b.length && T(a, function (a, c) {
                return a === b[c]
            })
        }, V = Array.prototype.slice, W = function (a) {
            var b = V.call(a, 0);
            return b.reverse(), b
        }, X = function (a, b) {
            return J(a, function (a) {
                return !B(b, a)
            })
        }, Y = function (a, b) {
            for (var c = {}, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                c[String(f)] = b(f, d)
            }
            return c
        }, Z = function (a) {
            return [a]
        }, $ = function (a, b) {
            var c = V.call(a, 0);
            return c.sort(b), c
        }, _ = function (a) {
            return 0 === a.length ? v.none() : v.some(a[0])
        }, aa = function (a) {
            return 0 === a.length ? v.none() : v.some(a[a.length - 1])
        }, ba = y.isFunction(Array.from) ? Array.from : function (a) {
            return V.call(a)
        }, ca = {
            map: F,
            each: G,
            eachr: H,
            partition: I,
            filter: J,
            groupBy: K,
            indexOf: A,
            foldr: L,
            foldl: M,
            find: N,
            findIndex: O,
            flatten: R,
            bind: S,
            forall: T,
            exists: C,
            contains: B,
            equal: U,
            reverse: W,
            chunk: E,
            difference: X,
            mapToObject: Y,
            pure: Z,
            sort: $,
            range: D,
            head: _,
            last: aa,
            from: ba
        }, da = function (a) {
            var b = v.none(), c = [], d = function (a) {
                return da(function (b) {
                    e(function (c) {
                        b(a(c))
                    })
                })
            }, e = function (a) {
                g() ? i(a) : c.push(a)
            }, f = function (a) {
                b = v.some(a), h(c), c = []
            }, g = function () {
                return b.isSome()
            }, h = function (a) {
                ca.each(a, i)
            }, i = function (a) {
                b.each(function (b) {
                    setTimeout(function () {
                        a(b)
                    }, 0)
                })
            };
            return a(f), {get: e, map: d, isReady: g}
        }, ea = function (a) {
            return da(function (b) {
                b(a)
            })
        }, fa = {nu: da, pure: ea}, ga = function (a) {
            return function () {
                var b = Array.prototype.slice.call(arguments), c = this;
                setTimeout(function () {
                    a.apply(c, b)
                }, 0)
            }
        }, ha = {bounce: ga}, ia = function (a) {
            var b = function (b) {
                a(ha.bounce(b))
            };
            return {
                map: function (a) {
                    return ia(function (c) {
                        b(function (b) {
                            var d = a(b);
                            c(d)
                        })
                    })
                }, bind: function (a) {
                    return ia(function (c) {
                        b(function (b) {
                            a(b).get(c)
                        })
                    })
                }, anonBind: function (a) {
                    return ia(function (c) {
                        b(function (b) {
                            a.get(c)
                        })
                    })
                }, toLazy: function () {
                    return fa.nu(b)
                }, get: b
            }
        }, ja = function (a) {
            return ia(function (b) {
                b(a)
            })
        }, ka = {nu: ia, pure: ja}, la = function () {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
            return function () {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                if (a.length !== b.length) throw new Error('Wrong number of arguments to struct. Expected "[' + a.length + ']", got ' + b.length + " arguments");
                var d = {};
                return ca.each(a, function (a, c) {
                    d[a] = o.constant(b[c])
                }), d
            }
        }, ma = function () {
            var a = Object.keys, b = function (a) {
                var b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            };
            return void 0 === a ? b : a
        }(), na = function (a, b) {
            for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                b(a[f], f, a)
            }
        }, oa = function (a, b) {
            return pa(a, function (a, c, d) {
                return {k: c, v: b(a, c, d)}
            })
        }, pa = function (a, b) {
            var c = {};
            return na(a, function (d, e) {
                var f = b(d, e, a);
                c[f.k] = f.v
            }), c
        }, qa = function (a, b) {
            var c = {}, d = {};
            return na(a, function (a, e) {
                (b(a, e) ? c : d)[e] = a
            }), {t: c, f: d}
        }, ra = function (a, b) {
            var c = [];
            return na(a, function (a, d) {
                c.push(b(a, d))
            }), c
        }, sa = function (a, b) {
            for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                var f = c[d], g = a[f];
                if (b(g, f, a)) return v.some(g)
            }
            return v.none()
        }, ta = function (a) {
            return ra(a, function (a) {
                return a
            })
        }, ua = function (a) {
            return ta(a).length
        }, va = {
            bifilter: qa,
            each: na,
            map: oa,
            mapToArray: ra,
            tupleMap: pa,
            find: sa,
            keys: ma,
            values: ta,
            size: ua
        }, wa = function (a) {
            return a.slice(0).sort()
        }, xa = function (a, b) {
            throw new Error("All required keys (" + wa(a).join(", ") + ") were not specified. Specified keys were: " + wa(b).join(", ") + ".")
        }, ya = function (a) {
            throw new Error("Unsupported keys for object: " + wa(a).join(", "))
        }, za = function (a, b) {
            if (!y.isArray(b)) throw new Error("The " + a + " fields must be an array. Was: " + b + ".");
            ca.each(b, function (b) {
                if (!y.isString(b)) throw new Error("The value " + b + " in the " + a + " fields was not a string.")
            })
        }, Aa = function (a, b) {
            throw new Error("All values need to be of type: " + b + ". Keys (" + wa(a).join(", ") + ") were not.")
        }, Ba = function (a) {
            var b = wa(a);
            ca.find(b, function (a, c) {
                return c < b.length - 1 && a === b[c + 1]
            }).each(function (a) {
                throw new Error("The field: " + a + " occurs more than once in the combined fields: [" + b.join(", ") + "].")
            })
        }, Ca = {
            sort: wa,
            reqMessage: xa,
            unsuppMessage: ya,
            validateStrArr: za,
            invalidTypeMessage: Aa,
            checkDupes: Ba
        }, Da = function (a, b) {
            var c = a.concat(b);
            if (0 === c.length) throw new Error("You must specify at least one required or optional field.");
            return Ca.validateStrArr("required", a), Ca.validateStrArr("optional", b), Ca.checkDupes(c), function (d) {
                var e = va.keys(d);
                ca.forall(a, function (a) {
                    return ca.contains(e, a)
                }) || Ca.reqMessage(a, e);
                var f = ca.filter(e, function (a) {
                    return !ca.contains(c, a)
                });
                f.length > 0 && Ca.unsuppMessage(f);
                var g = {};
                return ca.each(a, function (a) {
                    g[a] = o.constant(d[a])
                }), ca.each(b, function (a) {
                    g[a] = o.constant(Object.prototype.hasOwnProperty.call(d, a) ? v.some(d[a]) : v.none())
                }), g
            }
        }, Ea = {immutable: la, immutableBag: Da}, Fa = {}, Ga = {exports: Fa};
        !function (a, b, c, d) {
            !function (d) {
                if ("object" == typeof b && void 0 !== c) c.exports = d(); else if ("function" == typeof a && a.amd) a([], d); else {
                    var e;
                    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.EphoxContactWrapper = d()
                }
            }(function () {
                var a;
                return function a(b, c, e) {
                    function f(h, i) {
                        if (!c[h]) {
                            if (!b[h]) {
                                var j = "function" == typeof d && d;
                                if (!i && j) return j(h, !0);
                                if (g) return g(h, !0);
                                var k = new Error("Cannot find module '" + h + "'");
                                throw k.code = "MODULE_NOT_FOUND", k
                            }
                            var l = c[h] = {exports: {}};
                            b[h][0].call(l.exports, function (a) {
                                var c = b[h][1][a];
                                return f(c || a)
                            }, l, l.exports, a, b, c, e)
                        }
                        return c[h].exports
                    }

                    for (var g = "function" == typeof d && d, h = 0; h < e.length; h++) f(e[h]);
                    return f
                }({
                    1: [function (b, c, d) {
                        !function (b, d, e) {
                            "function" == typeof a && a.amd ? a(e) : void 0 !== c && c.exports ? c.exports = e() : d.exports ? d.exports = e() : d.Fingerprint2 = e()
                        }(0, this, function () {
                            var a = function (b) {
                                if (!(this instanceof a)) return new a(b);
                                var c = {
                                    swfContainerId: "fingerprintjs2",
                                    swfPath: "flash/compiled/FontList.swf",
                                    detectScreenOrientation: !0,
                                    sortPluginsFor: [/palemoon/i],
                                    userDefinedFonts: []
                                };
                                this.options = this.extend(b, c), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
                            };
                            return a.prototype = {
                                extend: function (a, b) {
                                    if (null == a) return b;
                                    for (var c in a) null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
                                    return b
                                }, get: function (a) {
                                    var b = [];
                                    b = this.userAgentKey(b), b = this.languageKey(b), b = this.colorDepthKey(b), b = this.pixelRatioKey(b), b = this.hardwareConcurrencyKey(b), b = this.screenResolutionKey(b), b = this.availableScreenResolutionKey(b), b = this.timezoneOffsetKey(b), b = this.sessionStorageKey(b), b = this.localStorageKey(b), b = this.indexedDbKey(b), b = this.addBehaviorKey(b), b = this.openDatabaseKey(b), b = this.cpuClassKey(b), b = this.platformKey(b), b = this.doNotTrackKey(b), b = this.pluginsKey(b), b = this.canvasKey(b), b = this.webglKey(b), b = this.adBlockKey(b), b = this.hasLiedLanguagesKey(b), b = this.hasLiedResolutionKey(b), b = this.hasLiedOsKey(b), b = this.hasLiedBrowserKey(b), b = this.touchSupportKey(b), b = this.customEntropyFunction(b);
                                    var c = this;
                                    this.fontsKey(b, function (b) {
                                        var d = [];
                                        c.each(b, function (a) {
                                            var b = a.value;
                                            void 0 !== a.value.join && (b = a.value.join(";")), d.push(b)
                                        });
                                        var e = c.x64hash128(d.join("~~~"), 31);
                                        return a(e, b)
                                    })
                                }, customEntropyFunction: function (a) {
                                    return "function" == typeof this.options.customFunction && a.push({
                                        key: "custom",
                                        value: this.options.customFunction()
                                    }), a
                                }, userAgentKey: function (a) {
                                    return this.options.excludeUserAgent || a.push({
                                        key: "user_agent",
                                        value: this.getUserAgent()
                                    }), a
                                }, getUserAgent: function () {
                                    return navigator.userAgent
                                }, languageKey: function (a) {
                                    return this.options.excludeLanguage || a.push({
                                        key: "language",
                                        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                                    }), a
                                }, colorDepthKey: function (a) {
                                    return this.options.excludeColorDepth || a.push({
                                        key: "color_depth",
                                        value: screen.colorDepth || -1
                                    }), a
                                }, pixelRatioKey: function (a) {
                                    return this.options.excludePixelRatio || a.push({
                                        key: "pixel_ratio",
                                        value: this.getPixelRatio()
                                    }), a
                                }, getPixelRatio: function () {
                                    return window.devicePixelRatio || ""
                                }, screenResolutionKey: function (a) {
                                    return this.options.excludeScreenResolution ? a : this.getScreenResolution(a)
                                }, getScreenResolution: function (a) {
                                    var b;
                                    return b = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== b && a.push({
                                        key: "resolution",
                                        value: b
                                    }), a
                                }, availableScreenResolutionKey: function (a) {
                                    return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a)
                                }, getAvailableScreenResolution: function (a) {
                                    var b;
                                    return screen.availWidth && screen.availHeight && (b = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== b && a.push({
                                        key: "available_resolution",
                                        value: b
                                    }), a
                                }, timezoneOffsetKey: function (a) {
                                    return this.options.excludeTimezoneOffset || a.push({
                                        key: "timezone_offset",
                                        value: (new Date).getTimezoneOffset()
                                    }), a
                                }, sessionStorageKey: function (a) {
                                    return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.push({
                                        key: "session_storage",
                                        value: 1
                                    }), a
                                }, localStorageKey: function (a) {
                                    return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.push({
                                        key: "local_storage",
                                        value: 1
                                    }), a
                                }, indexedDbKey: function (a) {
                                    return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.push({
                                        key: "indexed_db",
                                        value: 1
                                    }), a
                                }, addBehaviorKey: function (a) {
                                    return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && a.push({
                                        key: "add_behavior",
                                        value: 1
                                    }), a
                                }, openDatabaseKey: function (a) {
                                    return !this.options.excludeOpenDatabase && window.openDatabase && a.push({
                                        key: "open_database",
                                        value: 1
                                    }), a
                                }, cpuClassKey: function (a) {
                                    return this.options.excludeCpuClass || a.push({
                                        key: "cpu_class",
                                        value: this.getNavigatorCpuClass()
                                    }), a
                                }, platformKey: function (a) {
                                    return this.options.excludePlatform || a.push({
                                        key: "navigator_platform",
                                        value: this.getNavigatorPlatform()
                                    }), a
                                }, doNotTrackKey: function (a) {
                                    return this.options.excludeDoNotTrack || a.push({
                                        key: "do_not_track",
                                        value: this.getDoNotTrack()
                                    }), a
                                }, canvasKey: function (a) {
                                    return !this.options.excludeCanvas && this.isCanvasSupported() && a.push({
                                        key: "canvas",
                                        value: this.getCanvasFp()
                                    }), a
                                }, webglKey: function (a) {
                                    return this.options.excludeWebGL ? a : this.isWebGlSupported() ? (a.push({
                                        key: "webgl",
                                        value: this.getWebglFp()
                                    }), a) : a
                                }, adBlockKey: function (a) {
                                    return this.options.excludeAdBlock || a.push({
                                        key: "adblock",
                                        value: this.getAdBlock()
                                    }), a
                                }, hasLiedLanguagesKey: function (a) {
                                    return this.options.excludeHasLiedLanguages || a.push({
                                        key: "has_lied_languages",
                                        value: this.getHasLiedLanguages()
                                    }), a
                                }, hasLiedResolutionKey: function (a) {
                                    return this.options.excludeHasLiedResolution || a.push({
                                        key: "has_lied_resolution",
                                        value: this.getHasLiedResolution()
                                    }), a
                                }, hasLiedOsKey: function (a) {
                                    return this.options.excludeHasLiedOs || a.push({
                                        key: "has_lied_os",
                                        value: this.getHasLiedOs()
                                    }), a
                                }, hasLiedBrowserKey: function (a) {
                                    return this.options.excludeHasLiedBrowser || a.push({
                                        key: "has_lied_browser",
                                        value: this.getHasLiedBrowser()
                                    }), a
                                }, fontsKey: function (a, b) {
                                    return this.options.excludeJsFonts ? this.flashFontsKey(a, b) : this.jsFontsKey(a, b)
                                }, flashFontsKey: function (a, b) {
                                    return this.options.excludeFlashFonts ? b(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? b(a) : void this.loadSwfAndDetectFonts(function (c) {
                                        a.push({key: "swf_fonts", value: c.join(";")}), b(a)
                                    }) : b(a)
                                }, jsFontsKey: function (a, b) {
                                    var c = this;
                                    return setTimeout(function () {
                                        var d = ["monospace", "sans-serif", "serif"],
                                            e = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                                            f = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                                        c.options.extendedJsFonts && (e = e.concat(f)), e = e.concat(c.options.userDefinedFonts);
                                        var g = document.getElementsByTagName("body")[0],
                                            h = document.createElement("div"), i = document.createElement("div"),
                                            j = {}, k = {}, l = function () {
                                                var a = document.createElement("span");
                                                return a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "72px", a.style.lineHeight = "normal", a.innerHTML = "mmmmmmmmmmlli", a
                                            }, m = function (a, b) {
                                                var c = l();
                                                return c.style.fontFamily = "'" + a + "'," + b, c
                                            }, n = function () {
                                                for (var a = [], b = 0, c = d.length; b < c; b++) {
                                                    var e = l();
                                                    e.style.fontFamily = d[b], h.appendChild(e), a.push(e)
                                                }
                                                return a
                                            }();
                                        g.appendChild(h);
                                        for (var o = 0, p = d.length; o < p; o++) j[d[o]] = n[o].offsetWidth, k[d[o]] = n[o].offsetHeight;
                                        var q = function () {
                                            for (var a = {}, b = 0, c = e.length; b < c; b++) {
                                                for (var f = [], g = 0, h = d.length; g < h; g++) {
                                                    var j = m(e[b], d[g]);
                                                    i.appendChild(j), f.push(j)
                                                }
                                                a[e[b]] = f
                                            }
                                            return a
                                        }();
                                        g.appendChild(i);
                                        for (var r = [], s = 0, t = e.length; s < t; s++) (function (a) {
                                            for (var b = !1, c = 0; c < d.length; c++) if (b = a[c].offsetWidth !== j[d[c]] || a[c].offsetHeight !== k[d[c]]) return b;
                                            return b
                                        })(q[e[s]]) && r.push(e[s]);
                                        g.removeChild(i), g.removeChild(h), a.push({key: "js_fonts", value: r}), b(a)
                                    }, 1)
                                }, pluginsKey: function (a) {
                                    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || a.push({
                                        key: "ie_plugins",
                                        value: this.getIEPlugins()
                                    }) : a.push({key: "regular_plugins", value: this.getRegularPlugins()})), a
                                }, getRegularPlugins: function () {
                                    for (var a = [], b = 0, c = navigator.plugins.length; b < c; b++) a.push(navigator.plugins[b]);
                                    return this.pluginsShouldBeSorted() && (a = a.sort(function (a, b) {
                                        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                                    })), this.map(a, function (a) {
                                        var b = this.map(a, function (a) {
                                            return [a.type, a.suffixes].join("~")
                                        }).join(",");
                                        return [a.name, a.description, b].join("::")
                                    }, this)
                                }, getIEPlugins: function () {
                                    var a = [];
                                    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                                        var b = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                                        a = this.map(b, function (a) {
                                            try {
                                                return new ActiveXObject(a), a
                                            } catch (a) {
                                                return null
                                            }
                                        })
                                    }
                                    return navigator.plugins && (a = a.concat(this.getRegularPlugins())), a
                                }, pluginsShouldBeSorted: function () {
                                    for (var a = !1, b = 0, c = this.options.sortPluginsFor.length; b < c; b++) {
                                        var d = this.options.sortPluginsFor[b];
                                        if (navigator.userAgent.match(d)) {
                                            a = !0;
                                            break
                                        }
                                    }
                                    return a
                                }, touchSupportKey: function (a) {
                                    return this.options.excludeTouchSupport || a.push({
                                        key: "touch_support",
                                        value: this.getTouchSupport()
                                    }), a
                                }, hardwareConcurrencyKey: function (a) {
                                    return this.options.excludeHardwareConcurrency || a.push({
                                        key: "hardware_concurrency",
                                        value: this.getHardwareConcurrency()
                                    }), a
                                }, hasSessionStorage: function () {
                                    try {
                                        return !!window.sessionStorage
                                    } catch (a) {
                                        return !0
                                    }
                                }, hasLocalStorage: function () {
                                    try {
                                        return !!window.localStorage
                                    } catch (a) {
                                        return !0
                                    }
                                }, hasIndexedDB: function () {
                                    try {
                                        return !!window.indexedDB
                                    } catch (a) {
                                        return !0
                                    }
                                }, getHardwareConcurrency: function () {
                                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
                                }, getNavigatorCpuClass: function () {
                                    return navigator.cpuClass ? navigator.cpuClass : "unknown"
                                }, getNavigatorPlatform: function () {
                                    return navigator.platform ? navigator.platform : "unknown"
                                }, getDoNotTrack: function () {
                                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
                                }, getTouchSupport: function () {
                                    var a = 0, b = !1;
                                    void 0 !== navigator.maxTouchPoints ? a = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints);
                                    try {
                                        document.createEvent("TouchEvent"), b = !0
                                    } catch (a) {
                                    }
                                    return [a, b, "ontouchstart" in window]
                                }, getCanvasFp: function () {
                                    var a = [], b = document.createElement("canvas");
                                    b.width = 2e3, b.height = 200, b.style.display = "inline";
                                    var c = b.getContext("2d");
                                    return c.rect(0, 0, 10, 10), c.rect(2, 2, 6, 6), a.push("canvas winding:" + (!1 === c.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), c.textBaseline = "alphabetic", c.fillStyle = "#f60", c.fillRect(125, 1, 62, 20), c.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? c.font = "11pt Arial" : c.font = "11pt no-real-font-123", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), c.fillStyle = "rgba(102, 204, 0, 0.2)", c.font = "18pt Arial", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), c.globalCompositeOperation = "multiply", c.fillStyle = "rgb(255,0,255)", c.beginPath(), c.arc(50, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(0,255,255)", c.beginPath(), c.arc(100, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,255,0)", c.beginPath(), c.arc(75, 100, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,0,255)", c.arc(75, 75, 75, 0, 2 * Math.PI, !0), c.arc(75, 75, 25, 0, 2 * Math.PI, !0), c.fill("evenodd"), a.push("canvas fp:" + b.toDataURL()), a.join("~")
                                }, getWebglFp: function () {
                                    var a, b = function (b) {
                                        return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + b[0] + ", " + b[1] + "]"
                                    };
                                    if (!(a = this.getWebglCanvas())) return null;
                                    var c = [], d = a.createBuffer();
                                    a.bindBuffer(a.ARRAY_BUFFER, d);
                                    var e = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                                    a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW), d.itemSize = 3, d.numItems = 3;
                                    var f = a.createProgram(), g = a.createShader(a.VERTEX_SHADER);
                                    a.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), a.compileShader(g);
                                    var h = a.createShader(a.FRAGMENT_SHADER);
                                    a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), a.compileShader(h), a.attachShader(f, g), a.attachShader(f, h), a.linkProgram(f), a.useProgram(f), f.vertexPosAttrib = a.getAttribLocation(f, "attrVertex"), f.offsetUniform = a.getUniformLocation(f, "uniformOffset"), a.enableVertexAttribArray(f.vertexPosArray), a.vertexAttribPointer(f.vertexPosAttrib, d.itemSize, a.FLOAT, !1, 0, 0), a.uniform2f(f.offsetUniform, 1, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, d.numItems), null != a.canvas && c.push(a.canvas.toDataURL()), c.push("extensions:" + a.getSupportedExtensions().join(";")), c.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))), c.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))), c.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)), c.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")), c.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)), c.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)), c.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)), c.push("webgl max anisotropy:" + function (a) {
                                        var b,
                                            c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                        return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null
                                    }(a)), c.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), c.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)), c.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)), c.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)), c.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), c.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)), c.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)), c.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)), c.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), c.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)), c.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS))), c.push("webgl red bits:" + a.getParameter(a.RED_BITS)), c.push("webgl renderer:" + a.getParameter(a.RENDERER)), c.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)), c.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)), c.push("webgl vendor:" + a.getParameter(a.VENDOR)), c.push("webgl version:" + a.getParameter(a.VERSION));
                                    try {
                                        var i = a.getExtension("WEBGL_debug_renderer_info");
                                        i && (c.push("webgl unmasked vendor:" + a.getParameter(i.UNMASKED_VENDOR_WEBGL)), c.push("webgl unmasked renderer:" + a.getParameter(i.UNMASKED_RENDERER_WEBGL)))
                                    } catch (a) {
                                    }
                                    return a.getShaderPrecisionFormat ? (c.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), c.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax),
                                        c.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), c.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), c.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), c.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), c.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), c.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), c.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), c.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), c.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), c.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), c.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), c.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), c.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), c.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), c.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), c.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), c.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), c.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), c.join("~")) : c.join("~")
                                }, getAdBlock: function () {
                                    var a = document.createElement("div");
                                    a.innerHTML = "&nbsp;", a.className = "adsbox";
                                    var b = !1;
                                    try {
                                        document.body.appendChild(a), b = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(a)
                                    } catch (a) {
                                        b = !1
                                    }
                                    return b
                                }, getHasLiedLanguages: function () {
                                    if (void 0 !== navigator.languages) try {
                                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                                    } catch (a) {
                                        return !0
                                    }
                                    return !1
                                }, getHasLiedResolution: function () {
                                    return screen.width < screen.availWidth || screen.height < screen.availHeight
                                }, getHasLiedOs: function () {
                                    var a, b = navigator.userAgent.toLowerCase(), c = navigator.oscpu,
                                        d = navigator.platform.toLowerCase();
                                    a = b.indexOf("windows phone") >= 0 ? "Windows Phone" : b.indexOf("win") >= 0 ? "Windows" : b.indexOf("android") >= 0 ? "Android" : b.indexOf("linux") >= 0 ? "Linux" : b.indexOf("iphone") >= 0 || b.indexOf("ipad") >= 0 ? "iOS" : b.indexOf("mac") >= 0 ? "Mac" : "Other";
                                    if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0;
                                    if (void 0 !== c) {
                                        if (c = c.toLowerCase(), c.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0;
                                        if (c.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0;
                                        if (c.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0;
                                        if (0 === c.indexOf("win") && 0 === c.indexOf("linux") && c.indexOf("mac") >= 0 && "other" !== a) return !0
                                    }
                                    return d.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a || (d.indexOf("linux") >= 0 || d.indexOf("android") >= 0 || d.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a || (d.indexOf("mac") >= 0 || d.indexOf("ipad") >= 0 || d.indexOf("ipod") >= 0 || d.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a || 0 === d.indexOf("win") && 0 === d.indexOf("linux") && d.indexOf("mac") >= 0 && "other" !== a || void 0 === navigator.plugins && "Windows" !== a && "Windows Phone" !== a
                                }, getHasLiedBrowser: function () {
                                    var a, b = navigator.userAgent.toLowerCase(), c = navigator.productSub;
                                    if (("Chrome" === (a = b.indexOf("firefox") >= 0 ? "Firefox" : b.indexOf("opera") >= 0 || b.indexOf("opr") >= 0 ? "Opera" : b.indexOf("chrome") >= 0 ? "Chrome" : b.indexOf("safari") >= 0 ? "Safari" : b.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === a || "Opera" === a) && "20030107" !== c) return !0;
                                    var d = eval.toString().length;
                                    if (37 === d && "Safari" !== a && "Firefox" !== a && "Other" !== a) return !0;
                                    if (39 === d && "Internet Explorer" !== a && "Other" !== a) return !0;
                                    if (33 === d && "Chrome" !== a && "Opera" !== a && "Other" !== a) return !0;
                                    var e;
                                    try {
                                        throw"a"
                                    } catch (a) {
                                        try {
                                            a.toSource(), e = !0
                                        } catch (a) {
                                            e = !1
                                        }
                                    }
                                    return !(!e || "Firefox" === a || "Other" === a)
                                }, isCanvasSupported: function () {
                                    var a = document.createElement("canvas");
                                    return !(!a.getContext || !a.getContext("2d"))
                                }, isWebGlSupported: function () {
                                    if (!this.isCanvasSupported()) return !1;
                                    var a, b = document.createElement("canvas");
                                    try {
                                        a = b.getContext && (b.getContext("webgl") || b.getContext("experimental-webgl"))
                                    } catch (b) {
                                        a = !1
                                    }
                                    return !!window.WebGLRenderingContext && !!a
                                }, isIE: function () {
                                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                                }, hasSwfObjectLoaded: function () {
                                    return void 0 !== window.swfobject
                                }, hasMinFlashInstalled: function () {
                                    return swfobject.hasFlashPlayerVersion("9.0.0")
                                }, addFlashDivNode: function () {
                                    var a = document.createElement("div");
                                    a.setAttribute("id", this.options.swfContainerId), document.body.appendChild(a)
                                }, loadSwfAndDetectFonts: function (a) {
                                    var b = "___fp_swf_loaded";
                                    window[b] = function (b) {
                                        a(b)
                                    };
                                    var c = this.options.swfContainerId;
                                    this.addFlashDivNode();
                                    var d = {onReady: b}, e = {allowScriptAccess: "always", menu: "false"};
                                    swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, d, e, {})
                                }, getWebglCanvas: function () {
                                    var a = document.createElement("canvas"), b = null;
                                    try {
                                        b = a.getContext("webgl") || a.getContext("experimental-webgl")
                                    } catch (a) {
                                    }
                                    return b || (b = null), b
                                }, each: function (a, b, c) {
                                    if (null !== a) if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(b, c); else if (a.length === +a.length) {
                                        for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d, a) === {}) return
                                    } else for (var f in a) if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === {}) return
                                }, map: function (a, b, c) {
                                    var d = [];
                                    return null == a ? d : this.nativeMap && a.map === this.nativeMap ? a.map(b, c) : (this.each(a, function (a, e, f) {
                                        d[d.length] = b.call(c, a, e, f)
                                    }), d)
                                }, x64Add: function (a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] + b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] + b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] + b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] + b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                }, x64Multiply: function (a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] * b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] * b[3], c[1] += c[2] >>> 16, c[2] &= 65535, c[2] += a[3] * b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] * b[3], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[2] * b[2], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[3] * b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                }, x64Rotl: function (a, b) {
                                    return b %= 64, 32 === b ? [a[1], a[0]] : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32, [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
                                }, x64LeftShift: function (a, b) {
                                    return b %= 64, 0 === b ? a : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
                                }, x64Xor: function (a, b) {
                                    return [a[0] ^ b[0], a[1] ^ b[1]]
                                }, x64Fmix: function (a) {
                                    return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), a = this.x64Xor(a, [0, a[0] >>> 1])
                                }, x64hash128: function (a, b) {
                                    a = a || "", b = b || 0;
                                    for (var c = a.length % 16, d = a.length - c, e = [0, b], f = [0, b], g = [0, 0], h = [0, 0], i = [2277735313, 289559509], j = [1291169091, 658871167], k = 0; k < d; k += 16) g = [255 & a.charCodeAt(k + 4) | (255 & a.charCodeAt(k + 5)) << 8 | (255 & a.charCodeAt(k + 6)) << 16 | (255 & a.charCodeAt(k + 7)) << 24, 255 & a.charCodeAt(k) | (255 & a.charCodeAt(k + 1)) << 8 | (255 & a.charCodeAt(k + 2)) << 16 | (255 & a.charCodeAt(k + 3)) << 24], h = [255 & a.charCodeAt(k + 12) | (255 & a.charCodeAt(k + 13)) << 8 | (255 & a.charCodeAt(k + 14)) << 16 | (255 & a.charCodeAt(k + 15)) << 24, 255 & a.charCodeAt(k + 8) | (255 & a.charCodeAt(k + 9)) << 8 | (255 & a.charCodeAt(k + 10)) << 16 | (255 & a.charCodeAt(k + 11)) << 24], g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g), e = this.x64Rotl(e, 27), e = this.x64Add(e, f), e = this.x64Add(this.x64Multiply(e, [0, 5]), [0, 1390208809]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h), f = this.x64Rotl(f, 31), f = this.x64Add(f, e), f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 944331445]);
                                    switch (g = [0, 0], h = [0, 0], c) {
                                        case 15:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                                        case 14:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                                        case 13:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                                        case 12:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                                        case 11:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 10)], 16));
                                        case 10:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                                        case 9:
                                            h = this.x64Xor(h, [0, a.charCodeAt(k + 8)]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h);
                                        case 8:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                                        case 7:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                                        case 6:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                                        case 5:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                                        case 4:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                                        case 3:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                                        case 2:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                                        case 1:
                                            g = this.x64Xor(g, [0, a.charCodeAt(k)]), g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g)
                                    }
                                    return e = this.x64Xor(e, [0, a.length]), f = this.x64Xor(f, [0, a.length]), e = this.x64Add(e, f), f = this.x64Add(f, e), e = this.x64Fmix(e), f = this.x64Fmix(f), e = this.x64Add(e, f), f = this.x64Add(f, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
                                }
                            }, a.VERSION = "1.5.1", a
                        })
                    }, {}], 2: [function (a, b, c) {
                        var d = a("fingerprintjs2");
                        b.exports = {boltExport: d}
                    }, {fingerprintjs2: 1}]
                }, {}, [2])(2)
            })
        }(void 0, Fa, Ga, void 0);
        for (var Ha = Ga.exports.boltExport, Ia = Ea.immutable("hash", "components"), Ja = function () {
            return ka.nu(function (a) {
                document.body ? a(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    a(document.body)
                }, !1)
            })
        }, Ka = function () {
            return Ja().bind(function (a) {
                return ka.nu(function (a) {
                    (new Ha).get(function (b, c) {
                        a(Ia(b, c))
                    })
                })
            })
        }, La = fa.nu(function (a) {
            Ka().get(a)
        }), Ma = function () {
            return La
        }, Na = {getLazyFingerprint: Ma}, Oa = function (a, b) {
            return b + a
        }, Pa = function (a, b) {
            return a + b
        }, Qa = function (a, b) {
            return a.substring(b)
        }, Ra = function (a, b) {
            return a.substring(0, a.length - b)
        }, Sa = {addToStart: Oa, addToEnd: Pa, removeFromStart: Qa, removeFromEnd: Ra}, Ta = function (a, b) {
            return a.substr(0, b)
        }, Ua = function (a, b) {
            return a.substr(a.length - b, a.length)
        }, Va = function (a) {
            return "" === a ? v.none() : v.some(a.substr(0, 1))
        }, Wa = function (a) {
            return "" === a ? v.none() : v.some(a.substring(1))
        }, Xa = {first: Ta, last: Ua, head: Va, tail: Wa}, Ya = function (a, b, c) {
            return "" === b || !(a.length < b.length) && a.substr(c, c + b.length) === b
        }, Za = function (a, b) {
            var c = function (a) {
                var b = typeof a;
                return "string" === b || "number" === b
            };
            return a.replace(/\${([^{}]*)}/g, function (a, d) {
                var e = b[d];
                return c(e) ? e : a
            })
        }, $a = function (a, b) {
            return eb(a, b) ? Sa.removeFromStart(a, b.length) : a
        }, _a = function (a, b) {
            return fb(a, b) ? Sa.removeFromEnd(a, b.length) : a
        }, ab = function (a, b) {
            return eb(a, b) ? a : Sa.addToStart(a, b)
        }, bb = function (a, b) {
            return fb(a, b) ? a : Sa.addToEnd(a, b)
        }, cb = function (a, b) {
            return -1 !== a.indexOf(b)
        }, db = function (a) {
            return Xa.head(a).bind(function (b) {
                return Xa.tail(a).map(function (a) {
                    return b.toUpperCase() + a
                })
            }).getOr(a)
        }, eb = function (a, b) {
            return Ya(a, b, 0)
        }, fb = function (a, b) {
            return Ya(a, b, a.length - b.length)
        }, gb = function (a) {
            return a.replace(/^\s+|\s+$/g, "")
        }, hb = function (a) {
            return a.replace(/^\s+/g, "")
        }, ib = function (a) {
            return a.replace(/\s+$/g, "")
        }, jb = {
            supplant: Za,
            startsWith: eb,
            removeLeading: $a,
            removeTrailing: _a,
            ensureLeading: ab,
            ensureTrailing: bb,
            endsWith: fb,
            contains: cb,
            trim: gb,
            lTrim: hb,
            rTrim: ib,
            capitalize: db
        }, kb = {
            now: function () {
                return (new Date).getTime()
            }
        }, lb = function (a) {
            return v.from(a.api_key)
        }, mb = function (a) {
            return a.chiffer_snowplow_service_url
        }, nb = {
            getApiKey: lb,
            getServiceUrl: mb
        }, ob = [], pb = 0; pb < 256; ++pb) ob[pb] = (pb + 256).toString(16).substr(1);
        var qb = function () {
            for (var a, b = new Array(16), c = 0; c < 16; c++) 0 == (3 & c) && (a = 4294967296 * Math.random()), b[c] = a >>> ((3 & c) << 3) & 255;
            return b
        }, rb = function () {
            var b = qb();
            return b[6] = 15 & b[6] | 64, b[8] = 63 & b[8] | 128, a(b)
        }, sb = {v4: rb}, tb = function (a, b) {
            return {
                send: function (c, d, e) {
                    var f = jb.supplant("?aid=${aid}&tna=${tna}&p=${p}&dtm=${dtm}&stm=${stm}&tz=${tz}&e=${e}&se_ca=${se_ca}&eid=${eid}&fp=${fp}&tv=${tv}", {
                        aid: b,
                        tna: "tinymce_cloud",
                        p: "web",
                        dtm: d,
                        stm: kb.now(),
                        tz: "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                        e: "se",
                        eid: sb.v4(),
                        se_ca: c,
                        fp: e.hash(),
                        tv: "js-2.6.1"
                    });
                    return ka.nu(function (b) {
                        var c = document.createElement("img");
                        c.src = nb.getServiceUrl(a) + f, c.onload = function () {
                            b(!0)
                        }, c.onerror = function () {
                            b(!1)
                        }
                    })
                }
            }
        }, ub = function (a, b) {
            return {
                sendStat: function (c) {
                    return function () {
                        var d = kb.now();
                        a.get(function (a) {
                            b.send(c, d, a).get(function () {
                            })
                        })
                    }
                }
            }
        }, vb = function (a, b) {
            var c = Na.getLazyFingerprint(), d = tb(a, b);
            return ub(c, d)
        };
        return function () {
            var a = tinymce.defaultSettings, b = function (b) {
                var c = vb(a, b);
                return c.sendStat("script_load")(), function (a, b) {
                    a.once("init", c.sendStat("init")), a.once("focus", c.sendStat("focus"))
                }
            }, c = function () {
                return function () {
                }
            }, d = nb.getApiKey(a), e = d.fold(c, b);
            tinymce.PluginManager.add("chiffer", e)
        }
    }()()
}();
;
/* Ephox rain plugin
*
* Copyright 2010-2018 Ephox Corporation.  All rights reserved.
*
* Version: 1.0.0-44
*/
!function () {
    !function () {
        "use strict";
        var a = function () {
            }, b = function (a) {
                return function () {
                    return a()
                }
            }, c = function (a, b) {
                return function () {
                    return a(b.apply(null, arguments))
                }
            }, d = function (a) {
                return function () {
                    return a
                }
            }, e = function (a) {
                return a
            }, f = function (a, b) {
                return a === b
            }, g = function (a) {
                for (var b = new Array(arguments.length - 1), c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                return function () {
                    for (var c = new Array(arguments.length), d = 0; d < c.length; d++) c[d] = arguments[d];
                    var e = b.concat(c);
                    return a.apply(null, e)
                }
            }, h = function (a) {
                return function () {
                    return !a.apply(null, arguments)
                }
            }, i = function (a) {
                return function () {
                    throw new Error(a)
                }
            }, j = function (a) {
                return a()
            }, k = function (a) {
                a()
            }, l = d(!1), m = d(!0), n = {
                noop: a,
                noarg: b,
                compose: c,
                constant: d,
                identity: e,
                tripleEquals: f,
                curry: g,
                not: h,
                die: i,
                apply: j,
                call: k,
                never: l,
                always: m
            }, o = n.never, p = n.always, q = function () {
                return r
            }, r = function () {
                var a = function (a) {
                    return a.isNone()
                }, b = function (a) {
                    return a()
                }, c = function (a) {
                    return a
                }, d = function () {
                }, e = {
                    fold: function (a, b) {
                        return a()
                    },
                    is: o,
                    isSome: o,
                    isNone: p,
                    getOr: c,
                    getOrThunk: b,
                    getOrDie: function (a) {
                        throw new Error(a || "error: getOrDie called on none.")
                    },
                    or: c,
                    orThunk: b,
                    map: q,
                    ap: q,
                    each: d,
                    bind: q,
                    flatten: q,
                    exists: o,
                    forall: p,
                    filter: q,
                    equals: a,
                    equals_: a,
                    toArray: function () {
                        return []
                    },
                    toString: n.constant("none()")
                };
                return Object.freeze && Object.freeze(e), e
            }(), s = function (a) {
                var b = function () {
                    return a
                }, c = function () {
                    return f
                }, d = function (b) {
                    return s(b(a))
                }, e = function (b) {
                    return b(a)
                }, f = {
                    fold: function (b, c) {
                        return c(a)
                    },
                    is: function (b) {
                        return a === b
                    },
                    isSome: p,
                    isNone: o,
                    getOr: b,
                    getOrThunk: b,
                    getOrDie: b,
                    or: c,
                    orThunk: c,
                    map: d,
                    ap: function (b) {
                        return b.fold(q, function (b) {
                            return s(b(a))
                        })
                    },
                    each: function (b) {
                        b(a)
                    },
                    bind: e,
                    flatten: b,
                    exists: e,
                    forall: e,
                    filter: function (b) {
                        return b(a) ? f : r
                    },
                    equals: function (b) {
                        return b.is(a)
                    },
                    equals_: function (b, c) {
                        return b.fold(o, function (b) {
                            return c(a, b)
                        })
                    },
                    toArray: function () {
                        return [a]
                    },
                    toString: function () {
                        return "some(" + a + ")"
                    }
                };
                return f
            }, t = function (a) {
                return null === a || void 0 === a ? r : s(a)
            }, u = {some: s, none: q, from: t}, v = function () {
                var a = Array.prototype.indexOf, b = function (b, c) {
                    return a.call(b, c)
                }, c = function (a, b) {
                    return L(a, b)
                };
                return void 0 === a ? c : b
            }(), w = function (a, b) {
                var c = v(a, b);
                return -1 === c ? u.none() : u.some(c)
            }, x = function (a, b) {
                return v(a, b) > -1
            }, y = function (a, b) {
                return K(a, b).isSome()
            }, z = function (a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            }, A = function (a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            }, B = function (a, b) {
                for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                    var f = a[e];
                    d[e] = b(f, e, a)
                }
                return d
            }, C = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    b(a[c], c, a)
                }
            }, D = function (a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    b(a[c], c, a)
                }
            }, E = function (a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    (b(g, e, a) ? c : d).push(g)
                }
                return {pass: c, fail: d}
            }, F = function (a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            }, G = function (a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f], i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            }, H = function (a, b, c) {
                return D(a, function (a) {
                    c = b(c, a)
                }), c
            }, I = function (a, b, c) {
                return C(a, function (a) {
                    c = b(c, a)
                }), c
            }, J = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (b(e, c, a)) return u.some(e)
                }
                return u.none()
            }, K = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    if (b(a[c], c, a)) return u.some(c)
                }
                return u.none()
            }, L = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c) if (a[c] === b) return c;
                return -1
            }, M = Array.prototype.push, N = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; ++c) {
                    if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    M.apply(b, a[c])
                }
                return b
            }, O = function (a, b) {
                var c = B(a, b);
                return N(c)
            }, P = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    if (!0 !== b(a[c], c, a)) return !1
                }
                return !0
            }, Q = function (a, b) {
                return a.length === b.length && P(a, function (a, c) {
                    return a === b[c]
                })
            }, R = Array.prototype.slice, S = function (a) {
                var b = R.call(a, 0);
                return b.reverse(), b
            }, T = function (a, b) {
                return F(a, function (a) {
                    return !x(b, a)
                })
            }, U = function (a, b) {
                for (var c = {}, d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    c[String(f)] = b(f, d)
                }
                return c
            }, V = function (a) {
                return [a]
            }, W = function (a, b) {
                var c = R.call(a, 0);
                return c.sort(b), c
            }, X = function (a) {
                return 0 === a.length ? u.none() : u.some(a[0])
            }, Y = function (a) {
                return 0 === a.length ? u.none() : u.some(a[a.length - 1])
            }, Z = {
                map: B,
                each: C,
                eachr: D,
                partition: E,
                filter: F,
                groupBy: G,
                indexOf: w,
                foldr: H,
                foldl: I,
                find: J,
                findIndex: K,
                flatten: N,
                bind: O,
                forall: P,
                exists: y,
                contains: x,
                equal: Q,
                reverse: S,
                chunk: A,
                difference: T,
                mapToObject: U,
                pure: V,
                sort: W,
                range: z,
                head: X,
                last: Y
            }, $ = function (a) {
                return u.from(a.api_key)
            }, _ = function (a) {
                return u.from(a.rain_rainmaker_service_url).filter(function (a) {
                    return a.length > 0
                })
            }, aa = {getApiKey: $, getServiceUrl: _}, ba = tinymce.util, ca = ba.JSON, da = ba.URI, ea = ba.XHR,
            fa = function (a, b) {
                var c = -1 === a.indexOf("?") ? "?" : "&", d = c + "apiKey=" + encodeURIComponent(b);
                return "string" == typeof b ? a + d : a
            };
        return function () {
            var a = function (a, b) {
                aa.getApiKey(a.settings).bind(function (b) {
                    return aa.getServiceUrl(a.settings).map(function (a) {
                        return fa(a + "/1/messages", b)
                    })
                }).each(function (c) {
                    var d = {
                        url: new da(b).toAbsolute(c),
                        type: "get",
                        content_type: "application/json",
                        success: function (b) {
                            var c = ca.parse(b);
                            c && Z.each(c.messages, function (b) {
                                a.notificationManager.open({type: "info", text: b})
                            })
                        },
                        error: function () {
                        }
                    };
                    ea.send(d)
                })
            };
            return tinymce.PluginManager.add("rain", a), function () {
            }
        }
    }()()
}();
;
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('a11ychecker', 'The a11ychecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('advcode', 'The advcode enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('linkchecker', 'The linkchecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('mediaembed', 'The mediaembed enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('powerpaste', 'The powerpaste enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('tinycomments', 'The tinycomments enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('tinydrive', 'The tinydrive enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
        tinymce.PluginManager.add(pluginName, function (editor) {
            editor.on("skinLoaded", function () {
                editor.notificationManager.open({
                    text: message,
                    type: 'warning'
                });
            });
        });
    })('tinymcespellchecker', 'The tinymcespellchecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://apps.tiny.cloud/product-category/tiny-cloud-extensions/">Tiny</a> to upgrade your key.');
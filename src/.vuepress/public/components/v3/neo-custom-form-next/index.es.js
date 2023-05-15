import { Fragment as mt, isVNode as _r, Comment as a0, Text as rc, defineComponent as K, reactive as rr, getCurrentInstance as ac, onMounted as Dt, onUpdated as Ds, onUnmounted as $s, watch as it, inject as ye, computed as W, createVNode as h, provide as Ut, cloneVNode as Is, ref as Q, nextTick as Le, watchEffect as Mo, onBeforeUnmount as Ao, withDirectives as In, createTextVNode as Me, onBeforeUpdate as o0, Transition as i0, TransitionGroup as Qv, vShow as Ji, Teleport as s0, h as kt, toRaw as fd, createApp as l0, resolveComponent as Jv, openBlock as q, createBlock as Bt, unref as vr, withCtx as he, createElementVNode as pe, normalizeClass as Ni, createElementBlock as te, renderList as Un, createCommentVNode as ot, toDisplayString as we, normalizeStyle as u0, resolveDynamicComponent as c0, renderSlot as f0 } from "vue";
function Ye(t) {
  return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ye(t);
}
function d0(t, e) {
  if (Ye(t) !== "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Ye(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function h0(t) {
  var e = d0(t, "string");
  return Ye(e) === "symbol" ? e : String(e);
}
function S(t, e, n) {
  return e = h0(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function dd(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dd(Object(n), !0).forEach(function(r) {
      S(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dd(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function b() {
  return b = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, b.apply(this, arguments);
}
function hd(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function em(t, e, n) {
  return e && hd(t.prototype, e), n && hd(t, n), t;
}
function Vi() {
  return (Vi = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }).apply(this, arguments);
}
function tm(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
function nm(t, e) {
  if (t == null)
    return {};
  var n, r, a = {}, o = Object.keys(t);
  for (r = 0; r < o.length; r++)
    e.indexOf(n = o[r]) >= 0 || (a[n] = t[n]);
  return a;
}
function pd(t) {
  return ((e = t) != null && typeof e == "object" && Array.isArray(e) === !1) == 1 && Object.prototype.toString.call(t) === "[object Object]";
  var e;
}
var rm = Object.prototype, am = rm.toString, p0 = rm.hasOwnProperty, om = /^\s*function (\w+)/;
function vd(t) {
  var e, n = (e = t == null ? void 0 : t.type) !== null && e !== void 0 ? e : t;
  if (n) {
    var r = n.toString().match(om);
    return r ? r[1] : "";
  }
  return "";
}
var Fr = function(t) {
  var e, n;
  return pd(t) !== !1 && typeof (e = t.constructor) == "function" && pd(n = e.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, im = function(t) {
  return t;
}, _t = im;
if (process.env.NODE_ENV !== "production") {
  var v0 = typeof console < "u";
  _t = v0 ? function(t) {
    console.warn("[VueTypes warn]: " + t);
  } : im;
}
var _o = function(t, e) {
  return p0.call(t, e);
}, m0 = Number.isInteger || function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
}, _a = Array.isArray || function(t) {
  return am.call(t) === "[object Array]";
}, xa = function(t) {
  return am.call(t) === "[object Function]";
}, es = function(t) {
  return Fr(t) && _o(t, "_vueTypes_name");
}, sm = function(t) {
  return Fr(t) && (_o(t, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(e) {
    return _o(t, e);
  }));
};
function oc(t, e) {
  return Object.defineProperty(t.bind(e), "__original", { value: t });
}
function jr(t, e, n) {
  var r;
  n === void 0 && (n = !1);
  var a = !0, o = "";
  r = Fr(t) ? t : { type: t };
  var s = es(r) ? r._vueTypes_name + " - " : "";
  if (sm(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && e === void 0)
      return a;
    _a(r.type) ? (a = r.type.some(function(d) {
      return jr(d, e, !0) === !0;
    }), o = r.type.map(function(d) {
      return vd(d);
    }).join(" or ")) : a = (o = vd(r)) === "Array" ? _a(e) : o === "Object" ? Fr(e) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(d) {
      if (d == null)
        return "";
      var p = d.constructor.toString().match(om);
      return p ? p[1] : "";
    }(e) === o : e instanceof r.type;
  }
  if (!a) {
    var l = s + 'value "' + e + '" should be of type "' + o + '"';
    return n === !1 ? (_t(l), !1) : l;
  }
  if (_o(r, "validator") && xa(r.validator)) {
    var u = _t, c = [];
    if (_t = function(d) {
      c.push(d);
    }, a = r.validator(e), _t = u, !a) {
      var f = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, n === !1 ? (_t(f), a) : f;
    }
  }
  return a;
}
function Gt(t, e) {
  var n = Object.defineProperties(e, { _vueTypes_name: { value: t, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? xa(a) || jr(this, a, !0) === !0 ? (this.default = _a(a) ? function() {
      return [].concat(a);
    } : Fr(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (_t(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), r = n.validator;
  return xa(r) && (n.validator = oc(r, n)), n;
}
function Mn(t, e) {
  var n = Gt(t, e);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return xa(this.validator) && _t(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = oc(r, this), this;
  } });
}
function md(t, e, n) {
  var r, a, o = (r = e, a = {}, Object.getOwnPropertyNames(r).forEach(function(d) {
    a[d] = Object.getOwnPropertyDescriptor(r, d);
  }), Object.defineProperties({}, a));
  if (o._vueTypes_name = t, !Fr(n))
    return o;
  var s, l, u = n.validator, c = nm(n, ["validator"]);
  if (xa(u)) {
    var f = o.validator;
    f && (f = (l = (s = f).__original) !== null && l !== void 0 ? l : s), o.validator = oc(f ? function(d) {
      return f.call(this, d) && u.call(this, d);
    } : u, o);
  }
  return Object.assign(o, c);
}
function Ms(t) {
  return t.replace(/^(?!\s*$)/gm, "  ");
}
var g0 = function() {
  return Mn("any", {});
}, b0 = function() {
  return Mn("function", { type: Function });
}, y0 = function() {
  return Mn("boolean", { type: Boolean });
}, C0 = function() {
  return Mn("string", { type: String });
}, w0 = function() {
  return Mn("number", { type: Number });
}, O0 = function() {
  return Mn("array", { type: Array });
}, S0 = function() {
  return Mn("object", { type: Object });
}, _0 = function() {
  return Gt("integer", { type: Number, validator: function(t) {
    return m0(t);
  } });
}, x0 = function() {
  return Gt("symbol", { validator: function(t) {
    return typeof t == "symbol";
  } });
};
function P0(t, e) {
  if (e === void 0 && (e = "custom validation failed"), typeof t != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Gt(t.name || "<<anonymous function>>", { validator: function(n) {
    var r = t(n);
    return r || _t(this._vueTypes_name + " - " + e), r;
  } });
}
function T0(t) {
  if (!_a(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var e = 'oneOf - value should be one of "' + t.join('", "') + '".', n = t.reduce(function(r, a) {
    if (a != null) {
      var o = a.constructor;
      r.indexOf(o) === -1 && r.push(o);
    }
    return r;
  }, []);
  return Gt("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var a = t.indexOf(r) !== -1;
    return a || _t(e), a;
  } });
}
function E0(t) {
  if (!_a(t))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var e = !1, n = [], r = 0; r < t.length; r += 1) {
    var a = t[r];
    if (sm(a)) {
      if (es(a) && a._vueTypes_name === "oneOf") {
        n = n.concat(a.type);
        continue;
      }
      if (xa(a.validator) && (e = !0), a.type !== !0 && a.type) {
        n = n.concat(a.type);
        continue;
      }
    }
    n.push(a);
  }
  return n = n.filter(function(o, s) {
    return n.indexOf(o) === s;
  }), Gt("oneOfType", e ? { type: n, validator: function(o) {
    var s = [], l = t.some(function(u) {
      var c = jr(es(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, o, !0);
      return typeof c == "string" && s.push(c), c === !0;
    });
    return l || _t("oneOfType - provided value does not match any of the " + s.length + ` passed-in validators:
` + Ms(s.join(`
`))), l;
  } } : { type: n });
}
function k0(t) {
  return Gt("arrayOf", { type: Array, validator: function(e) {
    var n, r = e.every(function(a) {
      return (n = jr(t, a, !0)) === !0;
    });
    return r || _t(`arrayOf - value validation error:
` + Ms(n)), r;
  } });
}
function D0(t) {
  return Gt("instanceOf", { type: t });
}
function $0(t) {
  return Gt("objectOf", { type: Object, validator: function(e) {
    var n, r = Object.keys(e).every(function(a) {
      return (n = jr(t, e[a], !0)) === !0;
    });
    return r || _t(`objectOf - value validation error:
` + Ms(n)), r;
  } });
}
function I0(t) {
  var e = Object.keys(t), n = e.filter(function(a) {
    var o;
    return !!(!((o = t[a]) === null || o === void 0) && o.required);
  }), r = Gt("shape", { type: Object, validator: function(a) {
    var o = this;
    if (!Fr(a))
      return !1;
    var s = Object.keys(a);
    if (n.length > 0 && n.some(function(u) {
      return s.indexOf(u) === -1;
    })) {
      var l = n.filter(function(u) {
        return s.indexOf(u) === -1;
      });
      return _t(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return s.every(function(u) {
      if (e.indexOf(u) === -1)
        return o._vueTypes_isLoose === !0 || (_t('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + e.join('", "') + '".'), !1);
      var c = jr(t[u], a[u], !0);
      return typeof c == "string" && _t('shape - "' + u + `" property validation error:
 ` + Ms(c)), c === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var xn = function() {
  function t() {
  }
  return t.extend = function(e) {
    var n = this;
    if (_a(e))
      return e.forEach(function(d) {
        return n.extend(d);
      }), this;
    var r = e.name, a = e.validate, o = a !== void 0 && a, s = e.getter, l = s !== void 0 && s, u = nm(e, ["name", "validate", "getter"]);
    if (_o(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var c, f = u.type;
    return es(f) ? (delete u.type, Object.defineProperty(this, r, l ? { get: function() {
      return md(r, f, u);
    } } : { value: function() {
      var d, p = md(r, f, u);
      return p.validator && (p.validator = (d = p.validator).bind.apply(d, [p].concat([].slice.call(arguments)))), p;
    } })) : (c = l ? { get: function() {
      var d = Object.assign({}, u);
      return o ? Mn(r, d) : Gt(r, d);
    }, enumerable: !0 } : { value: function() {
      var d, p, m = Object.assign({}, u);
      return d = o ? Mn(r, m) : Gt(r, m), m.validator && (d.validator = (p = m.validator).bind.apply(p, [d].concat([].slice.call(arguments)))), d;
    }, enumerable: !0 }, Object.defineProperty(this, r, c));
  }, em(t, null, [{ key: "any", get: function() {
    return g0();
  } }, { key: "func", get: function() {
    return b0().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return y0().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return C0().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return w0().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return O0().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return S0().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return _0().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return x0();
  } }]), t;
}();
function lm(t) {
  var e;
  return t === void 0 && (t = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (e = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return tm(r, n), em(r, null, [{ key: "sensibleDefaults", get: function() {
      return Vi({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? Vi({}, a !== !0 ? a : t) : {};
    } }]), r;
  }(xn)).defaults = Vi({}, t), e;
}
xn.defaults = {}, xn.custom = P0, xn.oneOf = T0, xn.instanceOf = D0, xn.oneOfType = E0, xn.arrayOf = k0, xn.objectOf = $0, xn.shape = I0, xn.utils = { validate: function(t, e) {
  return jr(e, t, !0) === !0;
}, toType: function(t, e, n) {
  return n === void 0 && (n = !1), n ? Mn(t, e) : Gt(t, e);
} };
(function(t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  return tm(e, t), e;
})(lm());
var um = lm({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
um.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VNodeChild",
  getter: !0,
  type: null
}]);
function Qn(t) {
  return t.default = void 0, t;
}
const i = um;
var M0 = function(e) {
  return typeof e == "function";
}, A0 = Array.isArray, N0 = function(e) {
  return typeof e == "string";
}, V0 = function(e) {
  return e !== null && Ye(e) === "object";
}, R0 = /^on[^a-z]/, F0 = function(e) {
  return R0.test(e);
}, cm = function(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var a = n[r];
    return a || (n[r] = e(r));
  };
}, B0 = /-(\w)/g, As = cm(function(t) {
  return t.replace(B0, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}), j0 = /\B([A-Z])/g, L0 = cm(function(t) {
  return t.replace(j0, "-$1").toLowerCase();
}), H0 = Object.prototype.hasOwnProperty, gd = function(e, n) {
  return H0.call(e, n);
};
function fm(t, e, n, r) {
  var a = t[n];
  if (a != null) {
    var o = gd(a, "default");
    if (o && r === void 0) {
      var s = a.default;
      r = a.type !== Function && M0(s) ? s() : s;
    }
    a.type === Boolean && (!gd(e, n) && !o ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function ic(t) {
  return Object.keys(t).reduce(function(e, n) {
    return (n.substr(0, 5) === "data-" || n.substr(0, 5) === "aria-") && (e[n] = t[n]), e;
  }, {});
}
function Z() {
  for (var t = [], e = 0; e < arguments.length; e++) {
    var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
    if (n) {
      if (N0(n))
        t.push(n);
      else if (A0(n))
        for (var r = 0; r < n.length; r++) {
          var a = Z(n[r]);
          a && t.push(a);
        }
      else if (V0(n))
        for (var o in n)
          n[o] && t.push(o);
    }
  }
  return t.join(" ");
}
function Ma(t, e) {
  for (var n = Object.assign({}, t), r = 0; r < e.length; r += 1) {
    var a = e[r];
    delete n[a];
  }
  return n;
}
var dm = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var r = t(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, e.prototype.set = function(n, r) {
        var a = t(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, e.prototype.delete = function(n) {
        var r = this.__entries__, a = t(r, n);
        ~a && r.splice(a, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var s = o[a];
          n.call(r, s[1], s[0]);
        }
      }, e;
    }()
  );
}(), gu = typeof window < "u" && typeof document < "u" && window.document === document, ts = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), z0 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ts) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Y0 = 2;
function W0(t, e) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, t()), r && l();
  }
  function s() {
    z0(o);
  }
  function l() {
    var u = Date.now();
    if (n) {
      if (u - a < Y0)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, e);
    a = u;
  }
  return l;
}
var U0 = 20, G0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], K0 = typeof MutationObserver < "u", q0 = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = W0(this.refresh.bind(this), U0);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, r = n.indexOf(e);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !gu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), K0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !gu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, a = G0.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), hm = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(t, a, {
      value: e[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, Pa = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || ts;
}, pm = Ns(0, 0, 0, 0);
function ns(t) {
  return parseFloat(t) || 0;
}
function bd(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, a) {
    var o = t["border-" + a + "-width"];
    return r + ns(o);
  }, 0);
}
function X0(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, a = e; r < a.length; r++) {
    var o = a[r], s = t["padding-" + o];
    n[o] = ns(s);
  }
  return n;
}
function Z0(t) {
  var e = t.getBBox();
  return Ns(0, 0, e.width, e.height);
}
function Q0(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return pm;
  var r = Pa(t).getComputedStyle(t), a = X0(r), o = a.left + a.right, s = a.top + a.bottom, l = ns(r.width), u = ns(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== e && (l -= bd(r, "left", "right") + o), Math.round(u + s) !== n && (u -= bd(r, "top", "bottom") + s)), !e1(t)) {
    var c = Math.round(l + o) - e, f = Math.round(u + s) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(f) !== 1 && (u -= f);
  }
  return Ns(a.left, a.top, l, u);
}
var J0 = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Pa(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Pa(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function e1(t) {
  return t === Pa(t).document.documentElement;
}
function t1(t) {
  return gu ? J0(t) ? Z0(t) : Q0(t) : pm;
}
function n1(t) {
  var e = t.x, n = t.y, r = t.width, a = t.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return hm(s, {
    x: e,
    y: n,
    width: r,
    height: a,
    top: n,
    right: e + r,
    bottom: a + n,
    left: e
  }), s;
}
function Ns(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var r1 = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ns(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = t1(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), a1 = (
  /** @class */
  function() {
    function t(e, n) {
      var r = n1(n);
      hm(this, { target: e, contentRect: r });
    }
    return t;
  }()
), o1 = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new dm(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Pa(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new r1(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Pa(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new a1(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), vm = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new dm(), mm = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = q0.getInstance(), r = new o1(e, n, this);
      vm.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  mm.prototype[t] = function() {
    var e;
    return (e = vm.get(this))[t].apply(e, arguments);
  };
});
var i1 = function() {
  return typeof ts.ResizeObserver < "u" ? ts.ResizeObserver : mm;
}();
const sc = i1;
function gm(t) {
  if (Array.isArray(t))
    return t;
}
function s1(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, a, o, s, l = [], u = !0, c = !1;
    try {
      if (o = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n)
          return;
        u = !1;
      } else
        for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== e); u = !0)
          ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (c)
          throw a;
      }
    }
    return l;
  }
}
function bu(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Vs(t, e) {
  if (t) {
    if (typeof t == "string")
      return bu(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bu(t, e);
  }
}
function bm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ht(t, e) {
  return gm(t) || s1(t, e) || Vs(t, e) || bm();
}
function l1(t) {
  if (Array.isArray(t))
    return bu(t);
}
function ym(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function u1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Je(t) {
  return l1(t) || ym(t) || Vs(t) || u1();
}
var c1 = typeof global == "object" && global && global.Object === Object && global;
const Cm = c1;
var f1 = typeof self == "object" && self && self.Object === Object && self, d1 = Cm || f1 || Function("return this")();
const yn = d1;
var h1 = yn.Symbol;
const tn = h1;
var wm = Object.prototype, p1 = wm.hasOwnProperty, v1 = wm.toString, Ka = tn ? tn.toStringTag : void 0;
function m1(t) {
  var e = p1.call(t, Ka), n = t[Ka];
  try {
    t[Ka] = void 0;
    var r = !0;
  } catch {
  }
  var a = v1.call(t);
  return r && (e ? t[Ka] = n : delete t[Ka]), a;
}
var g1 = Object.prototype, b1 = g1.toString;
function y1(t) {
  return b1.call(t);
}
var C1 = "[object Null]", w1 = "[object Undefined]", yd = tn ? tn.toStringTag : void 0;
function Lr(t) {
  return t == null ? t === void 0 ? w1 : C1 : yd && yd in Object(t) ? m1(t) : y1(t);
}
function Om(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var O1 = Om(Object.getPrototypeOf, Object);
const lc = O1;
function Jn(t) {
  return t != null && typeof t == "object";
}
var S1 = "[object Object]", _1 = Function.prototype, x1 = Object.prototype, Sm = _1.toString, P1 = x1.hasOwnProperty, T1 = Sm.call(Object);
function Rs(t) {
  if (!Jn(t) || Lr(t) != S1)
    return !1;
  var e = lc(t);
  if (e === null)
    return !0;
  var n = P1.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && Sm.call(n) == T1;
}
var E1 = function(e) {
  return e != null && e !== "";
};
const uc = E1;
var _m = function(e) {
  for (var n = Object.keys(e), r = {}, a = {}, o = {}, s = 0, l = n.length; s < l; s++) {
    var u = n[s];
    F0(u) ? (r[u[2].toLowerCase() + u.slice(3)] = e[u], a[u] = e[u]) : o[u] = e[u];
  }
  return {
    onEvents: a,
    events: r,
    extraAttrs: o
  };
}, k1 = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = {}, a = /;(?![^(]*\))/g, o = /:(.+)/;
  return e.split(a).forEach(function(s) {
    if (s) {
      var l = s.split(o);
      if (l.length > 1) {
        var u = n ? As(l[0].trim()) : l[0].trim();
        r[u] = l[1].trim();
      }
    }
  }), r;
}, Se = function(e, n) {
  return n in me(e);
}, Nr = function t() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Array.isArray(e) ? e : [e], a = [];
  return r.forEach(function(o) {
    Array.isArray(o) ? a.push.apply(a, Je(t(o, n))) : o && o.type === mt ? a.push.apply(a, Je(t(o.children, n))) : o && _r(o) ? n && !cc(o) ? a.push(o) : n || a.push(o) : uc(o) && a.push(o);
  }), a;
}, et = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (_r(e))
    return e.type === mt ? n === "default" ? Nr(e.children) : [] : e.children && e.children[n] ? Nr(e.children[n](r)) : [];
  var a = e.$slots[n] && e.$slots[n](r);
  return Nr(a);
}, Yt = function(e) {
  for (var n, r = ((n = e == null ? void 0 : e.vnode) === null || n === void 0 ? void 0 : n.el) || e && (e.$el || e); r && !r.tagName; )
    r = r.nextSibling;
  return r;
}, me = function(e) {
  var n = {};
  if (e.$ && e.$.vnode) {
    var r = e.$.vnode.props || {};
    Object.keys(e.$props).forEach(function(l) {
      var u = e.$props[l], c = L0(l);
      (u !== void 0 || c in r) && (n[l] = u);
    });
  } else if (_r(e) && Ye(e.type) === "object") {
    var a = e.props || {}, o = {};
    Object.keys(a).forEach(function(l) {
      o[As(l)] = a[l];
    });
    var s = e.type.props || {};
    Object.keys(s).forEach(function(l) {
      var u = fm(s, o, l, o[l]);
      (u !== void 0 || l in o) && (n[l] = u);
    });
  }
  return n;
}, ce = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o = void 0;
  if (e.$) {
    var s = e[n];
    if (s !== void 0)
      return typeof s == "function" && a ? s(r) : s;
    o = e.$slots[n], o = a && o ? o(r) : o;
  } else if (_r(e)) {
    var l = e.props && e.props[n];
    if (l !== void 0 && e.props !== null)
      return typeof l == "function" && a ? l(r) : l;
    e.type === mt ? o = e.children : e.children && e.children[n] && (o = e.children[n], o = a && o ? o(r) : o);
  }
  return Array.isArray(o) && (o = Nr(o), o = o.length === 1 ? o[0] : o, o = o.length === 0 ? void 0 : o), o;
}, xm = function(e) {
  var n = e.$ ? e.$ : e, r = {}, a = n.props || {}, o = {};
  Object.keys(a).forEach(function(l) {
    o[As(l)] = a[l];
  });
  var s = Rs(n.type) ? n.type.props : {};
  return s && Object.keys(s).forEach(function(l) {
    var u = fm(s, o, l, o[l]);
    l in o && (r[l] = u);
  }), b(b({}, o), r);
};
function rs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return t.$ ? n = b(b({}, n), t.$attrs) : n = b(b({}, n), t.props), _m(n)[e ? "onEvents" : "events"];
}
function D1(t, e) {
  var n = (_r(t) ? t.props : t.$attrs) || {}, r = n.style || {};
  if (typeof r == "string")
    r = k1(r, e);
  else if (e && r) {
    var a = {};
    return Object.keys(r).forEach(function(o) {
      return a[As(o)] = r[o];
    }), a;
  }
  return r;
}
function cc(t) {
  return t && (t.type === a0 || t.type === mt && t.children.length === 0 || t.type === rc && t.children.trim() === "");
}
function $1(t) {
  return !t || t().every(cc);
}
function Aa() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = [];
  return t.forEach(function(n) {
    Array.isArray(n) ? e.push.apply(e, Je(n)) : n.type === mt ? e.push.apply(e, Je(n.children)) : e.push(n);
  }), e.filter(function(n) {
    return !cc(n);
  });
}
var Hr = function(e, n) {
  return Object.keys(n).forEach(function(r) {
    if (e[r])
      e[r].def && (e[r] = e[r].def(n[r]));
    else
      throw new Error("not have ".concat(r, " prop"));
  }), e;
};
function Cd() {
  var t = [].slice.call(arguments, 0), e = {};
  return t.forEach(function() {
    for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = 0, a = Object.entries(n); r < a.length; r++) {
      var o = ht(a[r], 2), s = o[0], l = o[1];
      e[s] = e[s] || {}, Rs(l) ? b(e[s], l) : e[s] = l;
    }
  }), e;
}
function vn(t) {
  return t && t.__v_isVNode && Ye(t.type) !== "symbol";
}
function la(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default", r, a;
  return (r = e[n]) !== null && r !== void 0 ? r : (a = t[n]) === null || a === void 0 ? void 0 : a.call(t);
}
const yu = Se, Fs = K({
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup: function(e, n) {
    var r = n.slots, a = rr({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    }), o = null, s = null, l = function() {
      s && (s.disconnect(), s = null);
    }, u = function(p) {
      var m = e.onResize, v = p[0].target, g = v.getBoundingClientRect(), C = g.width, y = g.height, O = v.offsetWidth, w = v.offsetHeight, _ = Math.floor(C), x = Math.floor(y);
      if (a.width !== _ || a.height !== x || a.offsetWidth !== O || a.offsetHeight !== w) {
        var P = {
          width: _,
          height: x,
          offsetWidth: O,
          offsetHeight: w
        };
        b(a, P), m && Promise.resolve().then(function() {
          m(b(b({}, P), {
            offsetWidth: O,
            offsetHeight: w
          }), v);
        });
      }
    }, c = ac(), f = function() {
      var p = e.disabled;
      if (p) {
        l();
        return;
      }
      var m = Yt(c), v = m !== o;
      v && (l(), o = m), !s && m && (s = new sc(u), s.observe(m));
    };
    return Dt(function() {
      f();
    }), Ds(function() {
      f();
    }), $s(function() {
      l();
    }), it(function() {
      return e.disabled;
    }, function() {
      f();
    }, {
      flush: "post"
    }), function() {
      var d;
      return (d = r.default) === null || d === void 0 ? void 0 : d.call(r)[0];
    };
  }
});
var ke = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return n;
}, Cn = function(e) {
  var n = e;
  return n.install = function(r) {
    r.component(n.displayName || n.name, e);
  }, e;
}, Pm = !1;
try {
  var wd = Object.defineProperty({}, "passive", {
    get: function() {
      Pm = !0;
    }
  });
  window.addEventListener("testPassive", null, wd), window.removeEventListener("testPassive", null, wd);
} catch {
}
const ct = Pm;
function oo(t, e, n, r) {
  if (t.addEventListener) {
    var a = r;
    a === void 0 && ct && (e === "touchstart" || e === "touchmove" || e === "wheel") && (a = {
      passive: !1
    }), t.addEventListener(e, n, a);
  }
  return {
    remove: function() {
      t.removeEventListener && t.removeEventListener(e, n);
    }
  };
}
const I1 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, Bs = {
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
var M1 = {
  placeholder: "Select time"
};
const fc = M1;
var A1 = {
  lang: b({
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"]
  }, Bs),
  timePickerLocale: b({}, fc)
};
const Cu = A1;
var Nt = "${label} is not a valid ${type}";
const Ta = {
  locale: "en",
  Pagination: I1,
  DatePicker: Cu,
  TimePicker: fc,
  Calendar: Cu,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Nt,
        method: Nt,
        array: Nt,
        object: Nt,
        number: Nt,
        date: Nt,
        boolean: Nt,
        integer: Nt,
        float: Nt,
        regexp: Nt,
        email: Nt,
        url: Nt,
        hex: Nt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
}, Na = K({
  name: "LocaleReceiver",
  props: {
    componentName: i.string,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function(e, n) {
    var r = n.slots, a = ye("localeData", {}), o = W(function() {
      var l = e.componentName, u = l === void 0 ? "global" : l, c = e.defaultLocale, f = c || Ta[u || "global"], d = a.antLocale, p = u && d ? d[u] : {};
      return b(b({}, typeof f == "function" ? f() : f), p || {});
    }), s = W(function() {
      var l = a.antLocale, u = l && l.locale;
      return l && l.exist && !u ? Ta.locale : u;
    });
    return function() {
      var l = e.children || r.default, u = a.antLocale;
      return l == null ? void 0 : l(o.value, s.value, u);
    };
  }
});
var Tm = function() {
  var e = ye("configProvider", He), n = e.getPrefixCls, r = n("empty-img-default");
  return h("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [h("g", {
    transform: "translate(24 31.67)"
  }, [h("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), h("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), h("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), h("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), h("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), h("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), h("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [h("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), h("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Tm.PRESENTED_IMAGE_DEFAULT = !0;
const N1 = Tm;
var Em = function() {
  var e = ye("configProvider", He), n = e.getPrefixCls, r = n("empty-img-simple");
  return h("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [h("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [h("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), h("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [h("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), h("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
Em.PRESENTED_IMAGE_SIMPLE = !0;
const V1 = Em;
var R1 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, km = h(N1, null, null), Dm = h(V1, null, null), Va = function(e, n) {
  var r = n.slots, a = r === void 0 ? {} : r, o = n.attrs, s, l = ye("configProvider", He), u = l.getPrefixCls, c = l.direction, f = b(b({}, e), o), d = f.prefixCls, p = f.image, m = p === void 0 ? km : p, v = f.description, g = v === void 0 ? ((s = a.description) === null || s === void 0 ? void 0 : s.call(a)) || void 0 : v, C = f.imageStyle, y = f.class, O = y === void 0 ? "" : y, w = R1(f, ["prefixCls", "image", "description", "imageStyle", "class"]);
  return h(Na, {
    componentName: "Empty",
    children: function(x) {
      var P, T = u("empty", d), M = typeof g < "u" ? g : x.description, $ = typeof M == "string" ? M : "empty", k = null;
      return typeof m == "string" ? k = h("img", {
        alt: $,
        src: m
      }, null) : k = m, h("div", H({
        class: Z(T, O, (P = {}, S(P, "".concat(T, "-normal"), m === Dm), S(P, "".concat(T, "-rtl"), c === "rtl"), P))
      }, w), [h("div", {
        class: "".concat(T, "-image"),
        style: C
      }, [k]), M && h("p", {
        class: "".concat(T, "-description")
      }, [M]), a.default && h("div", {
        class: "".concat(T, "-footer")
      }, [Aa(a.default())])]);
    }
  }, null);
};
Va.displayName = "AEmpty";
Va.PRESENTED_IMAGE_DEFAULT = km;
Va.PRESENTED_IMAGE_SIMPLE = Dm;
Va.inheritAttrs = !1;
Va.props = {
  prefixCls: i.string,
  image: i.any,
  description: i.any,
  imageStyle: i.object
};
const qa = Cn(Va);
var F1 = function(e) {
  var n = ye("configProvider", He), r = function(o) {
    var s = n.getPrefixCls, l = s("empty");
    switch (o) {
      case "Table":
      case "List":
        return h(qa, {
          image: qa.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return h(qa, {
          image: qa.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(l, "-small")
        }, null);
      default:
        return h(qa, null, null);
    }
  };
  return r(e.componentName);
};
function $m(t) {
  return h(F1, {
    componentName: t
  }, null);
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Im;
function R() {
  return Im.apply(null, arguments);
}
function B1(t) {
  Im = t;
}
function mn(t) {
  return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]";
}
function Vr(t) {
  return t != null && Object.prototype.toString.call(t) === "[object Object]";
}
function Ae(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function dc(t) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(t).length === 0;
  var e;
  for (e in t)
    if (Ae(t, e))
      return !1;
  return !0;
}
function Mt(t) {
  return t === void 0;
}
function er(t) {
  return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]";
}
function No(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function Mm(t, e) {
  var n = [], r, a = t.length;
  for (r = 0; r < a; ++r)
    n.push(e(t[r], r));
  return n;
}
function gr(t, e) {
  for (var n in e)
    Ae(e, n) && (t[n] = e[n]);
  return Ae(e, "toString") && (t.toString = e.toString), Ae(e, "valueOf") && (t.valueOf = e.valueOf), t;
}
function Vn(t, e, n, r) {
  return rg(t, e, n, r, !0).utc();
}
function j1() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function Oe(t) {
  return t._pf == null && (t._pf = j1()), t._pf;
}
var wu;
Array.prototype.some ? wu = Array.prototype.some : wu = function(t) {
  var e = Object(this), n = e.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in e && t.call(this, e[r], r, e))
      return !0;
  return !1;
};
function hc(t) {
  if (t._isValid == null) {
    var e = Oe(t), n = wu.call(e.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
    if (t._strict && (r = r && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(t))
      t._isValid = r;
    else
      return r;
  }
  return t._isValid;
}
function js(t) {
  var e = Vn(NaN);
  return t != null ? gr(Oe(e), t) : Oe(e).userInvalidated = !0, e;
}
var Od = R.momentProperties = [], bl = !1;
function pc(t, e) {
  var n, r, a, o = Od.length;
  if (Mt(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), Mt(e._i) || (t._i = e._i), Mt(e._f) || (t._f = e._f), Mt(e._l) || (t._l = e._l), Mt(e._strict) || (t._strict = e._strict), Mt(e._tzm) || (t._tzm = e._tzm), Mt(e._isUTC) || (t._isUTC = e._isUTC), Mt(e._offset) || (t._offset = e._offset), Mt(e._pf) || (t._pf = Oe(e)), Mt(e._locale) || (t._locale = e._locale), o > 0)
    for (n = 0; n < o; n++)
      r = Od[n], a = e[r], Mt(a) || (t[r] = a);
  return t;
}
function Vo(t) {
  pc(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), bl === !1 && (bl = !0, R.updateOffset(this), bl = !1);
}
function gn(t) {
  return t instanceof Vo || t != null && t._isAMomentObject != null;
}
function Am(t) {
  R.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t);
}
function rn(t, e) {
  var n = !0;
  return gr(function() {
    if (R.deprecationHandler != null && R.deprecationHandler(null, t), n) {
      var r = [], a, o, s, l = arguments.length;
      for (o = 0; o < l; o++) {
        if (a = "", typeof arguments[o] == "object") {
          a += `
[` + o + "] ";
          for (s in arguments[0])
            Ae(arguments[0], s) && (a += s + ": " + arguments[0][s] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[o];
        r.push(a);
      }
      Am(
        t + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return e.apply(this, arguments);
  }, e);
}
var Sd = {};
function Nm(t, e) {
  R.deprecationHandler != null && R.deprecationHandler(t, e), Sd[t] || (Am(e), Sd[t] = !0);
}
R.suppressDeprecationWarnings = !1;
R.deprecationHandler = null;
function Rn(t) {
  return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]";
}
function L1(t) {
  var e, n;
  for (n in t)
    Ae(t, n) && (e = t[n], Rn(e) ? this[n] = e : this["_" + n] = e);
  this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Ou(t, e) {
  var n = gr({}, t), r;
  for (r in e)
    Ae(e, r) && (Vr(t[r]) && Vr(e[r]) ? (n[r] = {}, gr(n[r], t[r]), gr(n[r], e[r])) : e[r] != null ? n[r] = e[r] : delete n[r]);
  for (r in t)
    Ae(t, r) && !Ae(e, r) && Vr(t[r]) && (n[r] = gr({}, n[r]));
  return n;
}
function vc(t) {
  t != null && this.set(t);
}
var Su;
Object.keys ? Su = Object.keys : Su = function(t) {
  var e, n = [];
  for (e in t)
    Ae(t, e) && n.push(e);
  return n;
};
var H1 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function z1(t, e, n) {
  var r = this._calendar[t] || this._calendar.sameElse;
  return Rn(r) ? r.call(e, n) : r;
}
function An(t, e, n) {
  var r = "" + Math.abs(t), a = e - r.length, o = t >= 0;
  return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var mc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ti = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, yl = {}, da = {};
function re(t, e, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), t && (da[t] = a), e && (da[e[0]] = function() {
    return An(a.apply(this, arguments), e[1], e[2]);
  }), n && (da[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      t
    );
  });
}
function Y1(t) {
  return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
}
function W1(t) {
  var e = t.match(mc), n, r;
  for (n = 0, r = e.length; n < r; n++)
    da[e[n]] ? e[n] = da[e[n]] : e[n] = Y1(e[n]);
  return function(a) {
    var o = "", s;
    for (s = 0; s < r; s++)
      o += Rn(e[s]) ? e[s].call(a, t) : e[s];
    return o;
  };
}
function Ri(t, e) {
  return t.isValid() ? (e = Vm(e, t.localeData()), yl[e] = yl[e] || W1(e), yl[e](t)) : t.localeData().invalidDate();
}
function Vm(t, e) {
  var n = 5;
  function r(a) {
    return e.longDateFormat(a) || a;
  }
  for (ti.lastIndex = 0; n >= 0 && ti.test(t); )
    t = t.replace(
      ti,
      r
    ), ti.lastIndex = 0, n -= 1;
  return t;
}
var U1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function G1(t) {
  var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
  return e || !n ? e : (this._longDateFormat[t] = n.match(mc).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[t]);
}
var K1 = "Invalid date";
function q1() {
  return this._invalidDate;
}
var X1 = "%d", Z1 = /\d{1,2}/;
function Q1(t) {
  return this._ordinal.replace("%d", t);
}
var J1 = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function eC(t, e, n, r) {
  var a = this._relativeTime[n];
  return Rn(a) ? a(t, e, n, r) : a.replace(/%d/i, t);
}
function tC(t, e) {
  var n = this._relativeTime[t > 0 ? "future" : "past"];
  return Rn(n) ? n(e) : n.replace(/%s/i, e);
}
var ho = {};
function Pt(t, e) {
  var n = t.toLowerCase();
  ho[n] = ho[n + "s"] = ho[e] = t;
}
function an(t) {
  return typeof t == "string" ? ho[t] || ho[t.toLowerCase()] : void 0;
}
function gc(t) {
  var e = {}, n, r;
  for (r in t)
    Ae(t, r) && (n = an(r), n && (e[n] = t[r]));
  return e;
}
var Rm = {};
function Tt(t, e) {
  Rm[t] = e;
}
function nC(t) {
  var e = [], n;
  for (n in t)
    Ae(t, n) && e.push({ unit: n, priority: Rm[n] });
  return e.sort(function(r, a) {
    return r.priority - a.priority;
  }), e;
}
function Ls(t) {
  return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
}
function Jt(t) {
  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function xe(t) {
  var e = +t, n = 0;
  return e !== 0 && isFinite(e) && (n = Jt(e)), n;
}
function Ra(t, e) {
  return function(n) {
    return n != null ? (Fm(this, t, n), R.updateOffset(this, e), this) : as(this, t);
  };
}
function as(t, e) {
  return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function Fm(t, e, n) {
  t.isValid() && !isNaN(n) && (e === "FullYear" && Ls(t.year()) && t.month() === 1 && t.date() === 29 ? (n = xe(n), t._d["set" + (t._isUTC ? "UTC" : "") + e](
    n,
    t.month(),
    Gs(n, t.month())
  )) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function rC(t) {
  return t = an(t), Rn(this[t]) ? this[t]() : this;
}
function aC(t, e) {
  if (typeof t == "object") {
    t = gc(t);
    var n = nC(t), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](t[n[r].unit]);
  } else if (t = an(t), Rn(this[t]))
    return this[t](e);
  return this;
}
var Bm = /\d/, Kt = /\d\d/, jm = /\d{3}/, bc = /\d{4}/, Hs = /[+-]?\d{6}/, Xe = /\d\d?/, Lm = /\d\d\d\d?/, Hm = /\d\d\d\d\d\d?/, zs = /\d{1,3}/, yc = /\d{1,4}/, Ys = /[+-]?\d{1,6}/, Fa = /\d+/, Ws = /[+-]?\d+/, oC = /Z|[+-]\d\d:?\d\d/gi, Us = /Z|[+-]\d\d(?::?\d\d)?/gi, iC = /[+-]?\d+(\.\d{1,3})?/, Ro = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, os;
os = {};
function ee(t, e, n) {
  os[t] = Rn(e) ? e : function(r, a) {
    return r && n ? n : e;
  };
}
function sC(t, e) {
  return Ae(os, t) ? os[t](e._strict, e._locale) : new RegExp(lC(t));
}
function lC(t) {
  return Lt(
    t.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(e, n, r, a, o) {
        return n || r || a || o;
      }
    )
  );
}
function Lt(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _u = {};
function We(t, e) {
  var n, r = e, a;
  for (typeof t == "string" && (t = [t]), er(e) && (r = function(o, s) {
    s[e] = xe(o);
  }), a = t.length, n = 0; n < a; n++)
    _u[t[n]] = r;
}
function Fo(t, e) {
  We(t, function(n, r, a, o) {
    a._w = a._w || {}, e(n, a._w, a, o);
  });
}
function uC(t, e, n) {
  e != null && Ae(_u, t) && _u[t](e, n._a, n, t);
}
var xt = 0, Gn = 1, En = 2, gt = 3, pn = 4, Kn = 5, Ar = 6, cC = 7, fC = 8;
function dC(t, e) {
  return (t % e + e) % e;
}
var ut;
Array.prototype.indexOf ? ut = Array.prototype.indexOf : ut = function(t) {
  var e;
  for (e = 0; e < this.length; ++e)
    if (this[e] === t)
      return e;
  return -1;
};
function Gs(t, e) {
  if (isNaN(t) || isNaN(e))
    return NaN;
  var n = dC(e, 12);
  return t += (e - n) / 12, n === 1 ? Ls(t) ? 29 : 28 : 31 - n % 7 % 2;
}
re("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
re("MMM", 0, 0, function(t) {
  return this.localeData().monthsShort(this, t);
});
re("MMMM", 0, 0, function(t) {
  return this.localeData().months(this, t);
});
Pt("month", "M");
Tt("month", 8);
ee("M", Xe);
ee("MM", Xe, Kt);
ee("MMM", function(t, e) {
  return e.monthsShortRegex(t);
});
ee("MMMM", function(t, e) {
  return e.monthsRegex(t);
});
We(["M", "MM"], function(t, e) {
  e[Gn] = xe(t) - 1;
});
We(["MMM", "MMMM"], function(t, e, n, r) {
  var a = n._locale.monthsParse(t, r, n._strict);
  a != null ? e[Gn] = a : Oe(n).invalidMonth = t;
});
var hC = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), zm = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ym = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, pC = Ro, vC = Ro;
function mC(t, e) {
  return t ? mn(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ym).test(e) ? "format" : "standalone"][t.month()] : mn(this._months) ? this._months : this._months.standalone;
}
function gC(t, e) {
  return t ? mn(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ym.test(e) ? "format" : "standalone"][t.month()] : mn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function bC(t, e, n) {
  var r, a, o, s = t.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      o = Vn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
  return n ? e === "MMM" ? (a = ut.call(this._shortMonthsParse, s), a !== -1 ? a : null) : (a = ut.call(this._longMonthsParse, s), a !== -1 ? a : null) : e === "MMM" ? (a = ut.call(this._shortMonthsParse, s), a !== -1 ? a : (a = ut.call(this._longMonthsParse, s), a !== -1 ? a : null)) : (a = ut.call(this._longMonthsParse, s), a !== -1 ? a : (a = ut.call(this._shortMonthsParse, s), a !== -1 ? a : null));
}
function yC(t, e, n) {
  var r, a, o;
  if (this._monthsParseExact)
    return bC.call(this, t, e, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = Vn([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && e === "MMMM" && this._longMonthsParse[r].test(t))
      return r;
    if (n && e === "MMM" && this._shortMonthsParse[r].test(t))
      return r;
    if (!n && this._monthsParse[r].test(t))
      return r;
  }
}
function Wm(t, e) {
  var n;
  if (!t.isValid())
    return t;
  if (typeof e == "string") {
    if (/^\d+$/.test(e))
      e = xe(e);
    else if (e = t.localeData().monthsParse(e), !er(e))
      return t;
  }
  return n = Math.min(t.date(), Gs(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t;
}
function Um(t) {
  return t != null ? (Wm(this, t), R.updateOffset(this, !0), this) : as(this, "Month");
}
function CC() {
  return Gs(this.year(), this.month());
}
function wC(t) {
  return this._monthsParseExact ? (Ae(this, "_monthsRegex") || Gm.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ae(this, "_monthsShortRegex") || (this._monthsShortRegex = pC), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function OC(t) {
  return this._monthsParseExact ? (Ae(this, "_monthsRegex") || Gm.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (Ae(this, "_monthsRegex") || (this._monthsRegex = vC), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}
function Gm() {
  function t(s, l) {
    return l.length - s.length;
  }
  var e = [], n = [], r = [], a, o;
  for (a = 0; a < 12; a++)
    o = Vn([2e3, a]), e.push(this.monthsShort(o, "")), n.push(this.months(o, "")), r.push(this.months(o, "")), r.push(this.monthsShort(o, ""));
  for (e.sort(t), n.sort(t), r.sort(t), a = 0; a < 12; a++)
    e[a] = Lt(e[a]), n[a] = Lt(n[a]);
  for (a = 0; a < 24; a++)
    r[a] = Lt(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + e.join("|") + ")",
    "i"
  );
}
re("Y", 0, 0, function() {
  var t = this.year();
  return t <= 9999 ? An(t, 4) : "+" + t;
});
re(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
re(0, ["YYYY", 4], 0, "year");
re(0, ["YYYYY", 5], 0, "year");
re(0, ["YYYYYY", 6, !0], 0, "year");
Pt("year", "y");
Tt("year", 1);
ee("Y", Ws);
ee("YY", Xe, Kt);
ee("YYYY", yc, bc);
ee("YYYYY", Ys, Hs);
ee("YYYYYY", Ys, Hs);
We(["YYYYY", "YYYYYY"], xt);
We("YYYY", function(t, e) {
  e[xt] = t.length === 2 ? R.parseTwoDigitYear(t) : xe(t);
});
We("YY", function(t, e) {
  e[xt] = R.parseTwoDigitYear(t);
});
We("Y", function(t, e) {
  e[xt] = parseInt(t, 10);
});
function po(t) {
  return Ls(t) ? 366 : 365;
}
R.parseTwoDigitYear = function(t) {
  return xe(t) + (xe(t) > 68 ? 1900 : 2e3);
};
var Km = Ra("FullYear", !0);
function SC() {
  return Ls(this.year());
}
function _C(t, e, n, r, a, o, s) {
  var l;
  return t < 100 && t >= 0 ? (l = new Date(t + 400, e, n, r, a, o, s), isFinite(l.getFullYear()) && l.setFullYear(t)) : l = new Date(t, e, n, r, a, o, s), l;
}
function xo(t) {
  var e, n;
  return t < 100 && t >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e;
}
function is(t, e, n) {
  var r = 7 + e - n, a = (7 + xo(t, 0, r).getUTCDay() - e) % 7;
  return -a + r - 1;
}
function qm(t, e, n, r, a) {
  var o = (7 + n - r) % 7, s = is(t, r, a), l = 1 + 7 * (e - 1) + o + s, u, c;
  return l <= 0 ? (u = t - 1, c = po(u) + l) : l > po(t) ? (u = t + 1, c = l - po(t)) : (u = t, c = l), {
    year: u,
    dayOfYear: c
  };
}
function Po(t, e, n) {
  var r = is(t.year(), e, n), a = Math.floor((t.dayOfYear() - r - 1) / 7) + 1, o, s;
  return a < 1 ? (s = t.year() - 1, o = a + qn(s, e, n)) : a > qn(t.year(), e, n) ? (o = a - qn(t.year(), e, n), s = t.year() + 1) : (s = t.year(), o = a), {
    week: o,
    year: s
  };
}
function qn(t, e, n) {
  var r = is(t, e, n), a = is(t + 1, e, n);
  return (po(t) - r + a) / 7;
}
re("w", ["ww", 2], "wo", "week");
re("W", ["WW", 2], "Wo", "isoWeek");
Pt("week", "w");
Pt("isoWeek", "W");
Tt("week", 5);
Tt("isoWeek", 5);
ee("w", Xe);
ee("ww", Xe, Kt);
ee("W", Xe);
ee("WW", Xe, Kt);
Fo(
  ["w", "ww", "W", "WW"],
  function(t, e, n, r) {
    e[r.substr(0, 1)] = xe(t);
  }
);
function xC(t) {
  return Po(t, this._week.dow, this._week.doy).week;
}
var PC = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function TC() {
  return this._week.dow;
}
function EC() {
  return this._week.doy;
}
function kC(t) {
  var e = this.localeData().week(this);
  return t == null ? e : this.add((t - e) * 7, "d");
}
function DC(t) {
  var e = Po(this, 1, 4).week;
  return t == null ? e : this.add((t - e) * 7, "d");
}
re("d", 0, "do", "day");
re("dd", 0, 0, function(t) {
  return this.localeData().weekdaysMin(this, t);
});
re("ddd", 0, 0, function(t) {
  return this.localeData().weekdaysShort(this, t);
});
re("dddd", 0, 0, function(t) {
  return this.localeData().weekdays(this, t);
});
re("e", 0, 0, "weekday");
re("E", 0, 0, "isoWeekday");
Pt("day", "d");
Pt("weekday", "e");
Pt("isoWeekday", "E");
Tt("day", 11);
Tt("weekday", 11);
Tt("isoWeekday", 11);
ee("d", Xe);
ee("e", Xe);
ee("E", Xe);
ee("dd", function(t, e) {
  return e.weekdaysMinRegex(t);
});
ee("ddd", function(t, e) {
  return e.weekdaysShortRegex(t);
});
ee("dddd", function(t, e) {
  return e.weekdaysRegex(t);
});
Fo(["dd", "ddd", "dddd"], function(t, e, n, r) {
  var a = n._locale.weekdaysParse(t, r, n._strict);
  a != null ? e.d = a : Oe(n).invalidWeekday = t;
});
Fo(["d", "e", "E"], function(t, e, n, r) {
  e[r] = xe(t);
});
function $C(t, e) {
  return typeof t != "string" ? t : isNaN(t) ? (t = e.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10);
}
function IC(t, e) {
  return typeof t == "string" ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}
function Cc(t, e) {
  return t.slice(e, 7).concat(t.slice(0, e));
}
var MC = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xm = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), AC = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), NC = Ro, VC = Ro, RC = Ro;
function FC(t, e) {
  var n = mn(this._weekdays) ? this._weekdays : this._weekdays[t && t !== !0 && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
  return t === !0 ? Cc(n, this._week.dow) : t ? n[t.day()] : n;
}
function BC(t) {
  return t === !0 ? Cc(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}
function jC(t) {
  return t === !0 ? Cc(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}
function LC(t, e, n) {
  var r, a, o, s = t.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      o = Vn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
  return n ? e === "dddd" ? (a = ut.call(this._weekdaysParse, s), a !== -1 ? a : null) : e === "ddd" ? (a = ut.call(this._shortWeekdaysParse, s), a !== -1 ? a : null) : (a = ut.call(this._minWeekdaysParse, s), a !== -1 ? a : null) : e === "dddd" ? (a = ut.call(this._weekdaysParse, s), a !== -1 || (a = ut.call(this._shortWeekdaysParse, s), a !== -1) ? a : (a = ut.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : e === "ddd" ? (a = ut.call(this._shortWeekdaysParse, s), a !== -1 || (a = ut.call(this._weekdaysParse, s), a !== -1) ? a : (a = ut.call(this._minWeekdaysParse, s), a !== -1 ? a : null)) : (a = ut.call(this._minWeekdaysParse, s), a !== -1 || (a = ut.call(this._weekdaysParse, s), a !== -1) ? a : (a = ut.call(this._shortWeekdaysParse, s), a !== -1 ? a : null));
}
function HC(t, e, n) {
  var r, a, o;
  if (this._weekdaysParseExact)
    return LC.call(this, t, e, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = Vn([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && e === "dddd" && this._fullWeekdaysParse[r].test(t))
      return r;
    if (n && e === "ddd" && this._shortWeekdaysParse[r].test(t))
      return r;
    if (n && e === "dd" && this._minWeekdaysParse[r].test(t))
      return r;
    if (!n && this._weekdaysParse[r].test(t))
      return r;
  }
}
function zC(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return t != null ? (t = $C(t, this.localeData()), this.add(t - e, "d")) : e;
}
function YC(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return t == null ? e : this.add(t - e, "d");
}
function WC(t) {
  if (!this.isValid())
    return t != null ? this : NaN;
  if (t != null) {
    var e = IC(t, this.localeData());
    return this.day(this.day() % 7 ? e : e - 7);
  } else
    return this.day() || 7;
}
function UC(t) {
  return this._weekdaysParseExact ? (Ae(this, "_weekdaysRegex") || wc.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ae(this, "_weekdaysRegex") || (this._weekdaysRegex = NC), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function GC(t) {
  return this._weekdaysParseExact ? (Ae(this, "_weekdaysRegex") || wc.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ae(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = VC), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function KC(t) {
  return this._weekdaysParseExact ? (Ae(this, "_weekdaysRegex") || wc.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ae(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = RC), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function wc() {
  function t(f, d) {
    return d.length - f.length;
  }
  var e = [], n = [], r = [], a = [], o, s, l, u, c;
  for (o = 0; o < 7; o++)
    s = Vn([2e3, 1]).day(o), l = Lt(this.weekdaysMin(s, "")), u = Lt(this.weekdaysShort(s, "")), c = Lt(this.weekdays(s, "")), e.push(l), n.push(u), r.push(c), a.push(l), a.push(u), a.push(c);
  e.sort(t), n.sort(t), r.sort(t), a.sort(t), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + e.join("|") + ")",
    "i"
  );
}
function Oc() {
  return this.hours() % 12 || 12;
}
function qC() {
  return this.hours() || 24;
}
re("H", ["HH", 2], 0, "hour");
re("h", ["hh", 2], 0, Oc);
re("k", ["kk", 2], 0, qC);
re("hmm", 0, 0, function() {
  return "" + Oc.apply(this) + An(this.minutes(), 2);
});
re("hmmss", 0, 0, function() {
  return "" + Oc.apply(this) + An(this.minutes(), 2) + An(this.seconds(), 2);
});
re("Hmm", 0, 0, function() {
  return "" + this.hours() + An(this.minutes(), 2);
});
re("Hmmss", 0, 0, function() {
  return "" + this.hours() + An(this.minutes(), 2) + An(this.seconds(), 2);
});
function Zm(t, e) {
  re(t, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      e
    );
  });
}
Zm("a", !0);
Zm("A", !1);
Pt("hour", "h");
Tt("hour", 13);
function Qm(t, e) {
  return e._meridiemParse;
}
ee("a", Qm);
ee("A", Qm);
ee("H", Xe);
ee("h", Xe);
ee("k", Xe);
ee("HH", Xe, Kt);
ee("hh", Xe, Kt);
ee("kk", Xe, Kt);
ee("hmm", Lm);
ee("hmmss", Hm);
ee("Hmm", Lm);
ee("Hmmss", Hm);
We(["H", "HH"], gt);
We(["k", "kk"], function(t, e, n) {
  var r = xe(t);
  e[gt] = r === 24 ? 0 : r;
});
We(["a", "A"], function(t, e, n) {
  n._isPm = n._locale.isPM(t), n._meridiem = t;
});
We(["h", "hh"], function(t, e, n) {
  e[gt] = xe(t), Oe(n).bigHour = !0;
});
We("hmm", function(t, e, n) {
  var r = t.length - 2;
  e[gt] = xe(t.substr(0, r)), e[pn] = xe(t.substr(r)), Oe(n).bigHour = !0;
});
We("hmmss", function(t, e, n) {
  var r = t.length - 4, a = t.length - 2;
  e[gt] = xe(t.substr(0, r)), e[pn] = xe(t.substr(r, 2)), e[Kn] = xe(t.substr(a)), Oe(n).bigHour = !0;
});
We("Hmm", function(t, e, n) {
  var r = t.length - 2;
  e[gt] = xe(t.substr(0, r)), e[pn] = xe(t.substr(r));
});
We("Hmmss", function(t, e, n) {
  var r = t.length - 4, a = t.length - 2;
  e[gt] = xe(t.substr(0, r)), e[pn] = xe(t.substr(r, 2)), e[Kn] = xe(t.substr(a));
});
function XC(t) {
  return (t + "").toLowerCase().charAt(0) === "p";
}
var ZC = /[ap]\.?m?\.?/i, QC = Ra("Hours", !0);
function JC(t, e, n) {
  return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Jm = {
  calendar: H1,
  longDateFormat: U1,
  invalidDate: K1,
  ordinal: X1,
  dayOfMonthOrdinalParse: Z1,
  relativeTime: J1,
  months: hC,
  monthsShort: zm,
  week: PC,
  weekdays: MC,
  weekdaysMin: AC,
  weekdaysShort: Xm,
  meridiemParse: ZC
}, Qe = {}, Xa = {}, To;
function ew(t, e) {
  var n, r = Math.min(t.length, e.length);
  for (n = 0; n < r; n += 1)
    if (t[n] !== e[n])
      return n;
  return r;
}
function _d(t) {
  return t && t.toLowerCase().replace("_", "-");
}
function tw(t) {
  for (var e = 0, n, r, a, o; e < t.length; ) {
    for (o = _d(t[e]).split("-"), n = o.length, r = _d(t[e + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = Ks(o.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && ew(o, r) >= n - 1)
        break;
      n--;
    }
    e++;
  }
  return To;
}
function nw(t) {
  return t.match("^[^/\\\\]*$") != null;
}
function Ks(t) {
  var e = null, n;
  if (Qe[t] === void 0 && typeof module < "u" && module && module.exports && nw(t))
    try {
      e = To._abbr, n = require, n("./locale/" + t), Or(e);
    } catch {
      Qe[t] = null;
    }
  return Qe[t];
}
function Or(t, e) {
  var n;
  return t && (Mt(e) ? n = ar(t) : n = Sc(t, e), n ? To = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + t + " not found. Did you forget to load it?"
  )), To._abbr;
}
function Sc(t, e) {
  if (e !== null) {
    var n, r = Jm;
    if (e.abbr = t, Qe[t] != null)
      Nm(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Qe[t]._config;
    else if (e.parentLocale != null)
      if (Qe[e.parentLocale] != null)
        r = Qe[e.parentLocale]._config;
      else if (n = Ks(e.parentLocale), n != null)
        r = n._config;
      else
        return Xa[e.parentLocale] || (Xa[e.parentLocale] = []), Xa[e.parentLocale].push({
          name: t,
          config: e
        }), null;
    return Qe[t] = new vc(Ou(r, e)), Xa[t] && Xa[t].forEach(function(a) {
      Sc(a.name, a.config);
    }), Or(t), Qe[t];
  } else
    return delete Qe[t], null;
}
function rw(t, e) {
  if (e != null) {
    var n, r, a = Jm;
    Qe[t] != null && Qe[t].parentLocale != null ? Qe[t].set(Ou(Qe[t]._config, e)) : (r = Ks(t), r != null && (a = r._config), e = Ou(a, e), r == null && (e.abbr = t), n = new vc(e), n.parentLocale = Qe[t], Qe[t] = n), Or(t);
  } else
    Qe[t] != null && (Qe[t].parentLocale != null ? (Qe[t] = Qe[t].parentLocale, t === Or() && Or(t)) : Qe[t] != null && delete Qe[t]);
  return Qe[t];
}
function ar(t) {
  var e;
  if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
    return To;
  if (!mn(t)) {
    if (e = Ks(t), e)
      return e;
    t = [t];
  }
  return tw(t);
}
function aw() {
  return Su(Qe);
}
function _c(t) {
  var e, n = t._a;
  return n && Oe(t).overflow === -2 && (e = n[Gn] < 0 || n[Gn] > 11 ? Gn : n[En] < 1 || n[En] > Gs(n[xt], n[Gn]) ? En : n[gt] < 0 || n[gt] > 24 || n[gt] === 24 && (n[pn] !== 0 || n[Kn] !== 0 || n[Ar] !== 0) ? gt : n[pn] < 0 || n[pn] > 59 ? pn : n[Kn] < 0 || n[Kn] > 59 ? Kn : n[Ar] < 0 || n[Ar] > 999 ? Ar : -1, Oe(t)._overflowDayOfYear && (e < xt || e > En) && (e = En), Oe(t)._overflowWeeks && e === -1 && (e = cC), Oe(t)._overflowWeekday && e === -1 && (e = fC), Oe(t).overflow = e), t;
}
var ow = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, iw = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sw = /Z|[+-]\d\d(?::?\d\d)?/, ni = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Cl = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], lw = /^\/?Date\((-?\d+)/i, uw = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, cw = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function eg(t) {
  var e, n, r = t._i, a = ow.exec(r) || iw.exec(r), o, s, l, u, c = ni.length, f = Cl.length;
  if (a) {
    for (Oe(t).iso = !0, e = 0, n = c; e < n; e++)
      if (ni[e][1].exec(a[1])) {
        s = ni[e][0], o = ni[e][2] !== !1;
        break;
      }
    if (s == null) {
      t._isValid = !1;
      return;
    }
    if (a[3]) {
      for (e = 0, n = f; e < n; e++)
        if (Cl[e][1].exec(a[3])) {
          l = (a[2] || " ") + Cl[e][0];
          break;
        }
      if (l == null) {
        t._isValid = !1;
        return;
      }
    }
    if (!o && l != null) {
      t._isValid = !1;
      return;
    }
    if (a[4])
      if (sw.exec(a[4]))
        u = "Z";
      else {
        t._isValid = !1;
        return;
      }
    t._f = s + (l || "") + (u || ""), Pc(t);
  } else
    t._isValid = !1;
}
function fw(t, e, n, r, a, o) {
  var s = [
    dw(t),
    zm.indexOf(e),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return o && s.push(parseInt(o, 10)), s;
}
function dw(t) {
  var e = parseInt(t, 10);
  return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
}
function hw(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function pw(t, e, n) {
  if (t) {
    var r = Xm.indexOf(t), a = new Date(
      e[0],
      e[1],
      e[2]
    ).getDay();
    if (r !== a)
      return Oe(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function vw(t, e, n) {
  if (t)
    return cw[t];
  if (e)
    return 0;
  var r = parseInt(n, 10), a = r % 100, o = (r - a) / 100;
  return o * 60 + a;
}
function tg(t) {
  var e = uw.exec(hw(t._i)), n;
  if (e) {
    if (n = fw(
      e[4],
      e[3],
      e[2],
      e[5],
      e[6],
      e[7]
    ), !pw(e[1], n, t))
      return;
    t._a = n, t._tzm = vw(e[8], e[9], e[10]), t._d = xo.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), Oe(t).rfc2822 = !0;
  } else
    t._isValid = !1;
}
function mw(t) {
  var e = lw.exec(t._i);
  if (e !== null) {
    t._d = new Date(+e[1]);
    return;
  }
  if (eg(t), t._isValid === !1)
    delete t._isValid;
  else
    return;
  if (tg(t), t._isValid === !1)
    delete t._isValid;
  else
    return;
  t._strict ? t._isValid = !1 : R.createFromInputFallback(t);
}
R.createFromInputFallback = rn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(t) {
    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
  }
);
function aa(t, e, n) {
  return t ?? e ?? n;
}
function gw(t) {
  var e = new Date(R.now());
  return t._useUTC ? [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate()
  ] : [e.getFullYear(), e.getMonth(), e.getDate()];
}
function xc(t) {
  var e, n, r = [], a, o, s;
  if (!t._d) {
    for (a = gw(t), t._w && t._a[En] == null && t._a[Gn] == null && bw(t), t._dayOfYear != null && (s = aa(t._a[xt], a[xt]), (t._dayOfYear > po(s) || t._dayOfYear === 0) && (Oe(t)._overflowDayOfYear = !0), n = xo(s, 0, t._dayOfYear), t._a[Gn] = n.getUTCMonth(), t._a[En] = n.getUTCDate()), e = 0; e < 3 && t._a[e] == null; ++e)
      t._a[e] = r[e] = a[e];
    for (; e < 7; e++)
      t._a[e] = r[e] = t._a[e] == null ? e === 2 ? 1 : 0 : t._a[e];
    t._a[gt] === 24 && t._a[pn] === 0 && t._a[Kn] === 0 && t._a[Ar] === 0 && (t._nextDay = !0, t._a[gt] = 0), t._d = (t._useUTC ? xo : _C).apply(
      null,
      r
    ), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[gt] = 24), t._w && typeof t._w.d < "u" && t._w.d !== o && (Oe(t).weekdayMismatch = !0);
  }
}
function bw(t) {
  var e, n, r, a, o, s, l, u, c;
  e = t._w, e.GG != null || e.W != null || e.E != null ? (o = 1, s = 4, n = aa(
    e.GG,
    t._a[xt],
    Po(qe(), 1, 4).year
  ), r = aa(e.W, 1), a = aa(e.E, 1), (a < 1 || a > 7) && (u = !0)) : (o = t._locale._week.dow, s = t._locale._week.doy, c = Po(qe(), o, s), n = aa(e.gg, t._a[xt], c.year), r = aa(e.w, c.week), e.d != null ? (a = e.d, (a < 0 || a > 6) && (u = !0)) : e.e != null ? (a = e.e + o, (e.e < 0 || e.e > 6) && (u = !0)) : a = o), r < 1 || r > qn(n, o, s) ? Oe(t)._overflowWeeks = !0 : u != null ? Oe(t)._overflowWeekday = !0 : (l = qm(n, r, a, o, s), t._a[xt] = l.year, t._dayOfYear = l.dayOfYear);
}
R.ISO_8601 = function() {
};
R.RFC_2822 = function() {
};
function Pc(t) {
  if (t._f === R.ISO_8601) {
    eg(t);
    return;
  }
  if (t._f === R.RFC_2822) {
    tg(t);
    return;
  }
  t._a = [], Oe(t).empty = !0;
  var e = "" + t._i, n, r, a, o, s, l = e.length, u = 0, c, f;
  for (a = Vm(t._f, t._locale).match(mc) || [], f = a.length, n = 0; n < f; n++)
    o = a[n], r = (e.match(sC(o, t)) || [])[0], r && (s = e.substr(0, e.indexOf(r)), s.length > 0 && Oe(t).unusedInput.push(s), e = e.slice(
      e.indexOf(r) + r.length
    ), u += r.length), da[o] ? (r ? Oe(t).empty = !1 : Oe(t).unusedTokens.push(o), uC(o, r, t)) : t._strict && !r && Oe(t).unusedTokens.push(o);
  Oe(t).charsLeftOver = l - u, e.length > 0 && Oe(t).unusedInput.push(e), t._a[gt] <= 12 && Oe(t).bigHour === !0 && t._a[gt] > 0 && (Oe(t).bigHour = void 0), Oe(t).parsedDateParts = t._a.slice(0), Oe(t).meridiem = t._meridiem, t._a[gt] = yw(
    t._locale,
    t._a[gt],
    t._meridiem
  ), c = Oe(t).era, c !== null && (t._a[xt] = t._locale.erasConvertYear(c, t._a[xt])), xc(t), _c(t);
}
function yw(t, e, n) {
  var r;
  return n == null ? e : t.meridiemHour != null ? t.meridiemHour(e, n) : (t.isPM != null && (r = t.isPM(n), r && e < 12 && (e += 12), !r && e === 12 && (e = 0)), e);
}
function Cw(t) {
  var e, n, r, a, o, s, l = !1, u = t._f.length;
  if (u === 0) {
    Oe(t).invalidFormat = !0, t._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    o = 0, s = !1, e = pc({}, t), t._useUTC != null && (e._useUTC = t._useUTC), e._f = t._f[a], Pc(e), hc(e) && (s = !0), o += Oe(e).charsLeftOver, o += Oe(e).unusedTokens.length * 10, Oe(e).score = o, l ? o < r && (r = o, n = e) : (r == null || o < r || s) && (r = o, n = e, s && (l = !0));
  gr(t, n || e);
}
function ww(t) {
  if (!t._d) {
    var e = gc(t._i), n = e.day === void 0 ? e.date : e.day;
    t._a = Mm(
      [e.year, e.month, n, e.hour, e.minute, e.second, e.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), xc(t);
  }
}
function Ow(t) {
  var e = new Vo(_c(ng(t)));
  return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e;
}
function ng(t) {
  var e = t._i, n = t._f;
  return t._locale = t._locale || ar(t._l), e === null || n === void 0 && e === "" ? js({ nullInput: !0 }) : (typeof e == "string" && (t._i = e = t._locale.preparse(e)), gn(e) ? new Vo(_c(e)) : (No(e) ? t._d = e : mn(n) ? Cw(t) : n ? Pc(t) : Sw(t), hc(t) || (t._d = null), t));
}
function Sw(t) {
  var e = t._i;
  Mt(e) ? t._d = new Date(R.now()) : No(e) ? t._d = new Date(e.valueOf()) : typeof e == "string" ? mw(t) : mn(e) ? (t._a = Mm(e.slice(0), function(n) {
    return parseInt(n, 10);
  }), xc(t)) : Vr(e) ? ww(t) : er(e) ? t._d = new Date(e) : R.createFromInputFallback(t);
}
function rg(t, e, n, r, a) {
  var o = {};
  return (e === !0 || e === !1) && (r = e, e = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Vr(t) && dc(t) || mn(t) && t.length === 0) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = t, o._f = e, o._strict = r, Ow(o);
}
function qe(t, e, n, r) {
  return rg(t, e, n, r, !1);
}
var _w = rn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var t = qe.apply(null, arguments);
    return this.isValid() && t.isValid() ? t < this ? this : t : js();
  }
), xw = rn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var t = qe.apply(null, arguments);
    return this.isValid() && t.isValid() ? t > this ? this : t : js();
  }
);
function ag(t, e) {
  var n, r;
  if (e.length === 1 && mn(e[0]) && (e = e[0]), !e.length)
    return qe();
  for (n = e[0], r = 1; r < e.length; ++r)
    (!e[r].isValid() || e[r][t](n)) && (n = e[r]);
  return n;
}
function Pw() {
  var t = [].slice.call(arguments, 0);
  return ag("isBefore", t);
}
function Tw() {
  var t = [].slice.call(arguments, 0);
  return ag("isAfter", t);
}
var Ew = function() {
  return Date.now ? Date.now() : +new Date();
}, Za = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function kw(t) {
  var e, n = !1, r, a = Za.length;
  for (e in t)
    if (Ae(t, e) && !(ut.call(Za, e) !== -1 && (t[e] == null || !isNaN(t[e]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (t[Za[r]]) {
      if (n)
        return !1;
      parseFloat(t[Za[r]]) !== xe(t[Za[r]]) && (n = !0);
    }
  return !0;
}
function Dw() {
  return this._isValid;
}
function $w() {
  return wn(NaN);
}
function qs(t) {
  var e = gc(t), n = e.year || 0, r = e.quarter || 0, a = e.month || 0, o = e.week || e.isoWeek || 0, s = e.day || 0, l = e.hour || 0, u = e.minute || 0, c = e.second || 0, f = e.millisecond || 0;
  this._isValid = kw(e), this._milliseconds = +f + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +s + o * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = ar(), this._bubble();
}
function Fi(t) {
  return t instanceof qs;
}
function xu(t) {
  return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
}
function Iw(t, e, n) {
  var r = Math.min(t.length, e.length), a = Math.abs(t.length - e.length), o = 0, s;
  for (s = 0; s < r; s++)
    (n && t[s] !== e[s] || !n && xe(t[s]) !== xe(e[s])) && o++;
  return o + a;
}
function og(t, e) {
  re(t, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + An(~~(n / 60), 2) + e + An(~~n % 60, 2);
  });
}
og("Z", ":");
og("ZZ", "");
ee("Z", Us);
ee("ZZ", Us);
We(["Z", "ZZ"], function(t, e, n) {
  n._useUTC = !0, n._tzm = Tc(Us, t);
});
var Mw = /([\+\-]|\d\d)/gi;
function Tc(t, e) {
  var n = (e || "").match(t), r, a, o;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(Mw) || ["-", 0, 0], o = +(a[1] * 60) + xe(a[2]), o === 0 ? 0 : a[0] === "+" ? o : -o);
}
function Ec(t, e) {
  var n, r;
  return e._isUTC ? (n = e.clone(), r = (gn(t) || No(t) ? t.valueOf() : qe(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), R.updateOffset(n, !1), n) : qe(t).local();
}
function Pu(t) {
  return -Math.round(t._d.getTimezoneOffset());
}
R.updateOffset = function() {
};
function Aw(t, e, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return t != null ? this : NaN;
  if (t != null) {
    if (typeof t == "string") {
      if (t = Tc(Us, t), t === null)
        return this;
    } else
      Math.abs(t) < 16 && !n && (t = t * 60);
    return !this._isUTC && e && (a = Pu(this)), this._offset = t, this._isUTC = !0, a != null && this.add(a, "m"), r !== t && (!e || this._changeInProgress ? lg(
      this,
      wn(t - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, R.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Pu(this);
}
function Nw(t, e) {
  return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}
function Vw(t) {
  return this.utcOffset(0, t);
}
function Rw(t) {
  return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Pu(this), "m")), this;
}
function Fw() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var t = Tc(oC, this._i);
    t != null ? this.utcOffset(t) : this.utcOffset(0, !0);
  }
  return this;
}
function Bw(t) {
  return this.isValid() ? (t = t ? qe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1;
}
function jw() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Lw() {
  if (!Mt(this._isDSTShifted))
    return this._isDSTShifted;
  var t = {}, e;
  return pc(t, this), t = ng(t), t._a ? (e = t._isUTC ? Vn(t._a) : qe(t._a), this._isDSTShifted = this.isValid() && Iw(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Hw() {
  return this.isValid() ? !this._isUTC : !1;
}
function zw() {
  return this.isValid() ? this._isUTC : !1;
}
function ig() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Yw = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ww = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function wn(t, e) {
  var n = t, r = null, a, o, s;
  return Fi(t) ? n = {
    ms: t._milliseconds,
    d: t._days,
    M: t._months
  } : er(t) || !isNaN(+t) ? (n = {}, e ? n[e] = +t : n.milliseconds = +t) : (r = Yw.exec(t)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: xe(r[En]) * a,
    h: xe(r[gt]) * a,
    m: xe(r[pn]) * a,
    s: xe(r[Kn]) * a,
    ms: xe(xu(r[Ar] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Ww.exec(t)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: Pr(r[2], a),
    M: Pr(r[3], a),
    w: Pr(r[4], a),
    d: Pr(r[5], a),
    h: Pr(r[6], a),
    m: Pr(r[7], a),
    s: Pr(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = Uw(
    qe(n.from),
    qe(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), o = new qs(n), Fi(t) && Ae(t, "_locale") && (o._locale = t._locale), Fi(t) && Ae(t, "_isValid") && (o._isValid = t._isValid), o;
}
wn.fn = qs.prototype;
wn.invalid = $w;
function Pr(t, e) {
  var n = t && parseFloat(t.replace(",", "."));
  return (isNaN(n) ? 0 : n) * e;
}
function xd(t, e) {
  var n = {};
  return n.months = e.month() - t.month() + (e.year() - t.year()) * 12, t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function Uw(t, e) {
  var n;
  return t.isValid() && e.isValid() ? (e = Ec(e, t), t.isBefore(e) ? n = xd(t, e) : (n = xd(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function sg(t, e) {
  return function(n, r) {
    var a, o;
    return r !== null && !isNaN(+r) && (Nm(
      e,
      "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = n, n = r, r = o), a = wn(n, r), lg(this, a, t), this;
  };
}
function lg(t, e, n, r) {
  var a = e._milliseconds, o = xu(e._days), s = xu(e._months);
  t.isValid() && (r = r ?? !0, s && Wm(t, as(t, "Month") + s * n), o && Fm(t, "Date", as(t, "Date") + o * n), a && t._d.setTime(t._d.valueOf() + a * n), r && R.updateOffset(t, o || s));
}
var Gw = sg(1, "add"), Kw = sg(-1, "subtract");
function ug(t) {
  return typeof t == "string" || t instanceof String;
}
function qw(t) {
  return gn(t) || No(t) || ug(t) || er(t) || Zw(t) || Xw(t) || t === null || t === void 0;
}
function Xw(t) {
  var e = Vr(t) && !dc(t), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, o, s = r.length;
  for (a = 0; a < s; a += 1)
    o = r[a], n = n || Ae(t, o);
  return e && n;
}
function Zw(t) {
  var e = mn(t), n = !1;
  return e && (n = t.filter(function(r) {
    return !er(r) && ug(t);
  }).length === 0), e && n;
}
function Qw(t) {
  var e = Vr(t) && !dc(t), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, o;
  for (a = 0; a < r.length; a += 1)
    o = r[a], n = n || Ae(t, o);
  return e && n;
}
function Jw(t, e) {
  var n = t.diff(e, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function eO(t, e) {
  arguments.length === 1 && (arguments[0] ? qw(arguments[0]) ? (t = arguments[0], e = void 0) : Qw(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
  var n = t || qe(), r = Ec(n, this).startOf("day"), a = R.calendarFormat(this, r) || "sameElse", o = e && (Rn(e[a]) ? e[a].call(this, n) : e[a]);
  return this.format(
    o || this.localeData().calendar(a, this, qe(n))
  );
}
function tO() {
  return new Vo(this);
}
function nO(t, e) {
  var n = gn(t) ? t : qe(t);
  return this.isValid() && n.isValid() ? (e = an(e) || "millisecond", e === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1;
}
function rO(t, e) {
  var n = gn(t) ? t : qe(t);
  return this.isValid() && n.isValid() ? (e = an(e) || "millisecond", e === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1;
}
function aO(t, e, n, r) {
  var a = gn(t) ? t : qe(t), o = gn(e) ? e : qe(e);
  return this.isValid() && a.isValid() && o.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1;
}
function oO(t, e) {
  var n = gn(t) ? t : qe(t), r;
  return this.isValid() && n.isValid() ? (e = an(e) || "millisecond", e === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf())) : !1;
}
function iO(t, e) {
  return this.isSame(t, e) || this.isAfter(t, e);
}
function sO(t, e) {
  return this.isSame(t, e) || this.isBefore(t, e);
}
function lO(t, e, n) {
  var r, a, o;
  if (!this.isValid())
    return NaN;
  if (r = Ec(t, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, e = an(e), e) {
    case "year":
      o = Bi(this, r) / 12;
      break;
    case "month":
      o = Bi(this, r);
      break;
    case "quarter":
      o = Bi(this, r) / 3;
      break;
    case "second":
      o = (this - r) / 1e3;
      break;
    case "minute":
      o = (this - r) / 6e4;
      break;
    case "hour":
      o = (this - r) / 36e5;
      break;
    case "day":
      o = (this - r - a) / 864e5;
      break;
    case "week":
      o = (this - r - a) / 6048e5;
      break;
    default:
      o = this - r;
  }
  return n ? o : Jt(o);
}
function Bi(t, e) {
  if (t.date() < e.date())
    return -Bi(e, t);
  var n = (e.year() - t.year()) * 12 + (e.month() - t.month()), r = t.clone().add(n, "months"), a, o;
  return e - r < 0 ? (a = t.clone().add(n - 1, "months"), o = (e - r) / (r - a)) : (a = t.clone().add(n + 1, "months"), o = (e - r) / (a - r)), -(n + o) || 0;
}
R.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
R.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function uO() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function cO(t) {
  if (!this.isValid())
    return null;
  var e = t !== !0, n = e ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Ri(
    n,
    e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Rn(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ri(n, "Z")) : Ri(
    n,
    e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function fO() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var t = "moment", e = "", n, r, a, o;
  return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", o = e + '[")]', this.format(n + r + a + o);
}
function dO(t) {
  t || (t = this.isUtc() ? R.defaultFormatUtc : R.defaultFormat);
  var e = Ri(this, t);
  return this.localeData().postformat(e);
}
function hO(t, e) {
  return this.isValid() && (gn(t) && t.isValid() || qe(t).isValid()) ? wn({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}
function pO(t) {
  return this.from(qe(), t);
}
function vO(t, e) {
  return this.isValid() && (gn(t) && t.isValid() || qe(t).isValid()) ? wn({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}
function mO(t) {
  return this.to(qe(), t);
}
function cg(t) {
  var e;
  return t === void 0 ? this._locale._abbr : (e = ar(t), e != null && (this._locale = e), this);
}
var fg = rn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(t) {
    return t === void 0 ? this.localeData() : this.locale(t);
  }
);
function dg() {
  return this._locale;
}
var ss = 1e3, ha = 60 * ss, ls = 60 * ha, hg = (365 * 400 + 97) * 24 * ls;
function pa(t, e) {
  return (t % e + e) % e;
}
function pg(t, e, n) {
  return t < 100 && t >= 0 ? new Date(t + 400, e, n) - hg : new Date(t, e, n).valueOf();
}
function vg(t, e, n) {
  return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - hg : Date.UTC(t, e, n);
}
function gO(t) {
  var e, n;
  if (t = an(t), t === void 0 || t === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? vg : pg, t) {
    case "year":
      e = n(this.year(), 0, 1);
      break;
    case "quarter":
      e = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      e = n(this.year(), this.month(), 1);
      break;
    case "week":
      e = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      e = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      e = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      e = this._d.valueOf(), e -= pa(
        e + (this._isUTC ? 0 : this.utcOffset() * ha),
        ls
      );
      break;
    case "minute":
      e = this._d.valueOf(), e -= pa(e, ha);
      break;
    case "second":
      e = this._d.valueOf(), e -= pa(e, ss);
      break;
  }
  return this._d.setTime(e), R.updateOffset(this, !0), this;
}
function bO(t) {
  var e, n;
  if (t = an(t), t === void 0 || t === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? vg : pg, t) {
    case "year":
      e = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      e = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      e = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      e = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      e = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      e = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      e = this._d.valueOf(), e += ls - pa(
        e + (this._isUTC ? 0 : this.utcOffset() * ha),
        ls
      ) - 1;
      break;
    case "minute":
      e = this._d.valueOf(), e += ha - pa(e, ha) - 1;
      break;
    case "second":
      e = this._d.valueOf(), e += ss - pa(e, ss) - 1;
      break;
  }
  return this._d.setTime(e), R.updateOffset(this, !0), this;
}
function yO() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function CO() {
  return Math.floor(this.valueOf() / 1e3);
}
function wO() {
  return new Date(this.valueOf());
}
function OO() {
  var t = this;
  return [
    t.year(),
    t.month(),
    t.date(),
    t.hour(),
    t.minute(),
    t.second(),
    t.millisecond()
  ];
}
function SO() {
  var t = this;
  return {
    years: t.year(),
    months: t.month(),
    date: t.date(),
    hours: t.hours(),
    minutes: t.minutes(),
    seconds: t.seconds(),
    milliseconds: t.milliseconds()
  };
}
function _O() {
  return this.isValid() ? this.toISOString() : null;
}
function xO() {
  return hc(this);
}
function PO() {
  return gr({}, Oe(this));
}
function TO() {
  return Oe(this).overflow;
}
function EO() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
re("N", 0, 0, "eraAbbr");
re("NN", 0, 0, "eraAbbr");
re("NNN", 0, 0, "eraAbbr");
re("NNNN", 0, 0, "eraName");
re("NNNNN", 0, 0, "eraNarrow");
re("y", ["y", 1], "yo", "eraYear");
re("y", ["yy", 2], 0, "eraYear");
re("y", ["yyy", 3], 0, "eraYear");
re("y", ["yyyy", 4], 0, "eraYear");
ee("N", kc);
ee("NN", kc);
ee("NNN", kc);
ee("NNNN", BO);
ee("NNNNN", jO);
We(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(t, e, n, r) {
    var a = n._locale.erasParse(t, r, n._strict);
    a ? Oe(n).era = a : Oe(n).invalidEra = t;
  }
);
ee("y", Fa);
ee("yy", Fa);
ee("yyy", Fa);
ee("yyyy", Fa);
ee("yo", LO);
We(["y", "yy", "yyy", "yyyy"], xt);
We(["yo"], function(t, e, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = t.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? e[xt] = n._locale.eraYearOrdinalParse(t, a) : e[xt] = parseInt(t, 10);
});
function kO(t, e) {
  var n, r, a, o = this._eras || ar("en")._eras;
  for (n = 0, r = o.length; n < r; ++n) {
    switch (typeof o[n].since) {
      case "string":
        a = R(o[n].since).startOf("day"), o[n].since = a.valueOf();
        break;
    }
    switch (typeof o[n].until) {
      case "undefined":
        o[n].until = 1 / 0;
        break;
      case "string":
        a = R(o[n].until).startOf("day").valueOf(), o[n].until = a.valueOf();
        break;
    }
  }
  return o;
}
function DO(t, e, n) {
  var r, a, o = this.eras(), s, l, u;
  for (t = t.toUpperCase(), r = 0, a = o.length; r < a; ++r)
    if (s = o[r].name.toUpperCase(), l = o[r].abbr.toUpperCase(), u = o[r].narrow.toUpperCase(), n)
      switch (e) {
        case "N":
        case "NN":
        case "NNN":
          if (l === t)
            return o[r];
          break;
        case "NNNN":
          if (s === t)
            return o[r];
          break;
        case "NNNNN":
          if (u === t)
            return o[r];
          break;
      }
    else if ([s, l, u].indexOf(t) >= 0)
      return o[r];
}
function $O(t, e) {
  var n = t.since <= t.until ? 1 : -1;
  return e === void 0 ? R(t.since).year() : R(t.since).year() + (e - t.offset) * n;
}
function IO() {
  var t, e, n, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since)
      return r[t].name;
  return "";
}
function MO() {
  var t, e, n, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since)
      return r[t].narrow;
  return "";
}
function AO() {
  var t, e, n, r = this.localeData().eras();
  for (t = 0, e = r.length; t < e; ++t)
    if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since)
      return r[t].abbr;
  return "";
}
function NO() {
  var t, e, n, r, a = this.localeData().eras();
  for (t = 0, e = a.length; t < e; ++t)
    if (n = a[t].since <= a[t].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[t].since <= r && r <= a[t].until || a[t].until <= r && r <= a[t].since)
      return (this.year() - R(a[t].since).year()) * n + a[t].offset;
  return this.year();
}
function VO(t) {
  return Ae(this, "_erasNameRegex") || Dc.call(this), t ? this._erasNameRegex : this._erasRegex;
}
function RO(t) {
  return Ae(this, "_erasAbbrRegex") || Dc.call(this), t ? this._erasAbbrRegex : this._erasRegex;
}
function FO(t) {
  return Ae(this, "_erasNarrowRegex") || Dc.call(this), t ? this._erasNarrowRegex : this._erasRegex;
}
function kc(t, e) {
  return e.erasAbbrRegex(t);
}
function BO(t, e) {
  return e.erasNameRegex(t);
}
function jO(t, e) {
  return e.erasNarrowRegex(t);
}
function LO(t, e) {
  return e._eraYearOrdinalRegex || Fa;
}
function Dc() {
  var t = [], e = [], n = [], r = [], a, o, s = this.eras();
  for (a = 0, o = s.length; a < o; ++a)
    e.push(Lt(s[a].name)), t.push(Lt(s[a].abbr)), n.push(Lt(s[a].narrow)), r.push(Lt(s[a].name)), r.push(Lt(s[a].abbr)), r.push(Lt(s[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
re(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
re(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Xs(t, e) {
  re(0, [t, t.length], 0, e);
}
Xs("gggg", "weekYear");
Xs("ggggg", "weekYear");
Xs("GGGG", "isoWeekYear");
Xs("GGGGG", "isoWeekYear");
Pt("weekYear", "gg");
Pt("isoWeekYear", "GG");
Tt("weekYear", 1);
Tt("isoWeekYear", 1);
ee("G", Ws);
ee("g", Ws);
ee("GG", Xe, Kt);
ee("gg", Xe, Kt);
ee("GGGG", yc, bc);
ee("gggg", yc, bc);
ee("GGGGG", Ys, Hs);
ee("ggggg", Ys, Hs);
Fo(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(t, e, n, r) {
    e[r.substr(0, 2)] = xe(t);
  }
);
Fo(["gg", "GG"], function(t, e, n, r) {
  e[r] = R.parseTwoDigitYear(t);
});
function HO(t) {
  return mg.call(
    this,
    t,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function zO(t) {
  return mg.call(
    this,
    t,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function YO() {
  return qn(this.year(), 1, 4);
}
function WO() {
  return qn(this.isoWeekYear(), 1, 4);
}
function UO() {
  var t = this.localeData()._week;
  return qn(this.year(), t.dow, t.doy);
}
function GO() {
  var t = this.localeData()._week;
  return qn(this.weekYear(), t.dow, t.doy);
}
function mg(t, e, n, r, a) {
  var o;
  return t == null ? Po(this, r, a).year : (o = qn(t, r, a), e > o && (e = o), KO.call(this, t, e, n, r, a));
}
function KO(t, e, n, r, a) {
  var o = qm(t, e, n, r, a), s = xo(o.year, 0, o.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
re("Q", 0, "Qo", "quarter");
Pt("quarter", "Q");
Tt("quarter", 7);
ee("Q", Bm);
We("Q", function(t, e) {
  e[Gn] = (xe(t) - 1) * 3;
});
function qO(t) {
  return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3);
}
re("D", ["DD", 2], "Do", "date");
Pt("date", "D");
Tt("date", 9);
ee("D", Xe);
ee("DD", Xe, Kt);
ee("Do", function(t, e) {
  return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
});
We(["D", "DD"], En);
We("Do", function(t, e) {
  e[En] = xe(t.match(Xe)[0]);
});
var gg = Ra("Date", !0);
re("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Pt("dayOfYear", "DDD");
Tt("dayOfYear", 4);
ee("DDD", zs);
ee("DDDD", jm);
We(["DDD", "DDDD"], function(t, e, n) {
  n._dayOfYear = xe(t);
});
function XO(t) {
  var e = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return t == null ? e : this.add(t - e, "d");
}
re("m", ["mm", 2], 0, "minute");
Pt("minute", "m");
Tt("minute", 14);
ee("m", Xe);
ee("mm", Xe, Kt);
We(["m", "mm"], pn);
var ZO = Ra("Minutes", !1);
re("s", ["ss", 2], 0, "second");
Pt("second", "s");
Tt("second", 15);
ee("s", Xe);
ee("ss", Xe, Kt);
We(["s", "ss"], Kn);
var QO = Ra("Seconds", !1);
re("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
re(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
re(0, ["SSS", 3], 0, "millisecond");
re(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
re(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
re(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
re(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
re(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
re(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Pt("millisecond", "ms");
Tt("millisecond", 16);
ee("S", zs, Bm);
ee("SS", zs, Kt);
ee("SSS", zs, jm);
var br, bg;
for (br = "SSSS"; br.length <= 9; br += "S")
  ee(br, Fa);
function JO(t, e) {
  e[Ar] = xe(("0." + t) * 1e3);
}
for (br = "S"; br.length <= 9; br += "S")
  We(br, JO);
bg = Ra("Milliseconds", !1);
re("z", 0, 0, "zoneAbbr");
re("zz", 0, 0, "zoneName");
function eS() {
  return this._isUTC ? "UTC" : "";
}
function tS() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var z = Vo.prototype;
z.add = Gw;
z.calendar = eO;
z.clone = tO;
z.diff = lO;
z.endOf = bO;
z.format = dO;
z.from = hO;
z.fromNow = pO;
z.to = vO;
z.toNow = mO;
z.get = rC;
z.invalidAt = TO;
z.isAfter = nO;
z.isBefore = rO;
z.isBetween = aO;
z.isSame = oO;
z.isSameOrAfter = iO;
z.isSameOrBefore = sO;
z.isValid = xO;
z.lang = fg;
z.locale = cg;
z.localeData = dg;
z.max = xw;
z.min = _w;
z.parsingFlags = PO;
z.set = aC;
z.startOf = gO;
z.subtract = Kw;
z.toArray = OO;
z.toObject = SO;
z.toDate = wO;
z.toISOString = cO;
z.inspect = fO;
typeof Symbol < "u" && Symbol.for != null && (z[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
z.toJSON = _O;
z.toString = uO;
z.unix = CO;
z.valueOf = yO;
z.creationData = EO;
z.eraName = IO;
z.eraNarrow = MO;
z.eraAbbr = AO;
z.eraYear = NO;
z.year = Km;
z.isLeapYear = SC;
z.weekYear = HO;
z.isoWeekYear = zO;
z.quarter = z.quarters = qO;
z.month = Um;
z.daysInMonth = CC;
z.week = z.weeks = kC;
z.isoWeek = z.isoWeeks = DC;
z.weeksInYear = UO;
z.weeksInWeekYear = GO;
z.isoWeeksInYear = YO;
z.isoWeeksInISOWeekYear = WO;
z.date = gg;
z.day = z.days = zC;
z.weekday = YC;
z.isoWeekday = WC;
z.dayOfYear = XO;
z.hour = z.hours = QC;
z.minute = z.minutes = ZO;
z.second = z.seconds = QO;
z.millisecond = z.milliseconds = bg;
z.utcOffset = Aw;
z.utc = Vw;
z.local = Rw;
z.parseZone = Fw;
z.hasAlignedHourOffset = Bw;
z.isDST = jw;
z.isLocal = Hw;
z.isUtcOffset = zw;
z.isUtc = ig;
z.isUTC = ig;
z.zoneAbbr = eS;
z.zoneName = tS;
z.dates = rn(
  "dates accessor is deprecated. Use date instead.",
  gg
);
z.months = rn(
  "months accessor is deprecated. Use month instead",
  Um
);
z.years = rn(
  "years accessor is deprecated. Use year instead",
  Km
);
z.zone = rn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Nw
);
z.isDSTShifted = rn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Lw
);
function nS(t) {
  return qe(t * 1e3);
}
function rS() {
  return qe.apply(null, arguments).parseZone();
}
function yg(t) {
  return t;
}
var Ne = vc.prototype;
Ne.calendar = z1;
Ne.longDateFormat = G1;
Ne.invalidDate = q1;
Ne.ordinal = Q1;
Ne.preparse = yg;
Ne.postformat = yg;
Ne.relativeTime = eC;
Ne.pastFuture = tC;
Ne.set = L1;
Ne.eras = kO;
Ne.erasParse = DO;
Ne.erasConvertYear = $O;
Ne.erasAbbrRegex = RO;
Ne.erasNameRegex = VO;
Ne.erasNarrowRegex = FO;
Ne.months = mC;
Ne.monthsShort = gC;
Ne.monthsParse = yC;
Ne.monthsRegex = OC;
Ne.monthsShortRegex = wC;
Ne.week = xC;
Ne.firstDayOfYear = EC;
Ne.firstDayOfWeek = TC;
Ne.weekdays = FC;
Ne.weekdaysMin = jC;
Ne.weekdaysShort = BC;
Ne.weekdaysParse = HC;
Ne.weekdaysRegex = UC;
Ne.weekdaysShortRegex = GC;
Ne.weekdaysMinRegex = KC;
Ne.isPM = XC;
Ne.meridiem = JC;
function us(t, e, n, r) {
  var a = ar(), o = Vn().set(r, e);
  return a[n](o, t);
}
function Cg(t, e, n) {
  if (er(t) && (e = t, t = void 0), t = t || "", e != null)
    return us(t, e, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = us(t, r, n, "month");
  return a;
}
function $c(t, e, n, r) {
  typeof t == "boolean" ? (er(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, er(e) && (n = e, e = void 0), e = e || "");
  var a = ar(), o = t ? a._week.dow : 0, s, l = [];
  if (n != null)
    return us(e, (n + o) % 7, r, "day");
  for (s = 0; s < 7; s++)
    l[s] = us(e, (s + o) % 7, r, "day");
  return l;
}
function aS(t, e) {
  return Cg(t, e, "months");
}
function oS(t, e) {
  return Cg(t, e, "monthsShort");
}
function iS(t, e, n) {
  return $c(t, e, n, "weekdays");
}
function sS(t, e, n) {
  return $c(t, e, n, "weekdaysShort");
}
function lS(t, e, n) {
  return $c(t, e, n, "weekdaysMin");
}
Or("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(t) {
    var e = t % 10, n = xe(t % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
    return t + n;
  }
});
R.lang = rn(
  "moment.lang is deprecated. Use moment.locale instead.",
  Or
);
R.langData = rn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ar
);
var jn = Math.abs;
function uS() {
  var t = this._data;
  return this._milliseconds = jn(this._milliseconds), this._days = jn(this._days), this._months = jn(this._months), t.milliseconds = jn(t.milliseconds), t.seconds = jn(t.seconds), t.minutes = jn(t.minutes), t.hours = jn(t.hours), t.months = jn(t.months), t.years = jn(t.years), this;
}
function wg(t, e, n, r) {
  var a = wn(e, n);
  return t._milliseconds += r * a._milliseconds, t._days += r * a._days, t._months += r * a._months, t._bubble();
}
function cS(t, e) {
  return wg(this, t, e, 1);
}
function fS(t, e) {
  return wg(this, t, e, -1);
}
function Pd(t) {
  return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function dS() {
  var t = this._milliseconds, e = this._days, n = this._months, r = this._data, a, o, s, l, u;
  return t >= 0 && e >= 0 && n >= 0 || t <= 0 && e <= 0 && n <= 0 || (t += Pd(Tu(n) + e) * 864e5, e = 0, n = 0), r.milliseconds = t % 1e3, a = Jt(t / 1e3), r.seconds = a % 60, o = Jt(a / 60), r.minutes = o % 60, s = Jt(o / 60), r.hours = s % 24, e += Jt(s / 24), u = Jt(Og(e)), n += u, e -= Pd(Tu(u)), l = Jt(n / 12), n %= 12, r.days = e, r.months = n, r.years = l, this;
}
function Og(t) {
  return t * 4800 / 146097;
}
function Tu(t) {
  return t * 146097 / 4800;
}
function hS(t) {
  if (!this.isValid())
    return NaN;
  var e, n, r = this._milliseconds;
  if (t = an(t), t === "month" || t === "quarter" || t === "year")
    switch (e = this._days + r / 864e5, n = this._months + Og(e), t) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (e = this._days + Math.round(Tu(this._months)), t) {
      case "week":
        return e / 7 + r / 6048e5;
      case "day":
        return e + r / 864e5;
      case "hour":
        return e * 24 + r / 36e5;
      case "minute":
        return e * 1440 + r / 6e4;
      case "second":
        return e * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(e * 864e5) + r;
      default:
        throw new Error("Unknown unit " + t);
    }
}
function pS() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + xe(this._months / 12) * 31536e6 : NaN;
}
function or(t) {
  return function() {
    return this.as(t);
  };
}
var vS = or("ms"), mS = or("s"), gS = or("m"), bS = or("h"), yS = or("d"), CS = or("w"), wS = or("M"), OS = or("Q"), SS = or("y");
function _S() {
  return wn(this);
}
function xS(t) {
  return t = an(t), this.isValid() ? this[t + "s"]() : NaN;
}
function zr(t) {
  return function() {
    return this.isValid() ? this._data[t] : NaN;
  };
}
var PS = zr("milliseconds"), TS = zr("seconds"), ES = zr("minutes"), kS = zr("hours"), DS = zr("days"), $S = zr("months"), IS = zr("years");
function MS() {
  return Jt(this.days() / 7);
}
var Wn = Math.round, ua = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function AS(t, e, n, r, a) {
  return a.relativeTime(e || 1, !!n, t, r);
}
function NS(t, e, n, r) {
  var a = wn(t).abs(), o = Wn(a.as("s")), s = Wn(a.as("m")), l = Wn(a.as("h")), u = Wn(a.as("d")), c = Wn(a.as("M")), f = Wn(a.as("w")), d = Wn(a.as("y")), p = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || s <= 1 && ["m"] || s < n.m && ["mm", s] || l <= 1 && ["h"] || l < n.h && ["hh", l] || u <= 1 && ["d"] || u < n.d && ["dd", u];
  return n.w != null && (p = p || f <= 1 && ["w"] || f < n.w && ["ww", f]), p = p || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d], p[2] = e, p[3] = +t > 0, p[4] = r, AS.apply(null, p);
}
function VS(t) {
  return t === void 0 ? Wn : typeof t == "function" ? (Wn = t, !0) : !1;
}
function RS(t, e) {
  return ua[t] === void 0 ? !1 : e === void 0 ? ua[t] : (ua[t] = e, t === "s" && (ua.ss = e - 1), !0);
}
function FS(t, e) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = ua, a, o;
  return typeof t == "object" && (e = t, t = !1), typeof t == "boolean" && (n = t), typeof e == "object" && (r = Object.assign({}, ua, e), e.s != null && e.ss == null && (r.ss = e.s - 1)), a = this.localeData(), o = NS(this, !n, r, a), n && (o = a.pastFuture(+this, o)), a.postformat(o);
}
var wl = Math.abs;
function Xr(t) {
  return (t > 0) - (t < 0) || +t;
}
function Zs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = wl(this._milliseconds) / 1e3, e = wl(this._days), n = wl(this._months), r, a, o, s, l = this.asSeconds(), u, c, f, d;
  return l ? (r = Jt(t / 60), a = Jt(r / 60), t %= 60, r %= 60, o = Jt(n / 12), n %= 12, s = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", c = Xr(this._months) !== Xr(l) ? "-" : "", f = Xr(this._days) !== Xr(l) ? "-" : "", d = Xr(this._milliseconds) !== Xr(l) ? "-" : "", u + "P" + (o ? c + o + "Y" : "") + (n ? c + n + "M" : "") + (e ? f + e + "D" : "") + (a || r || t ? "T" : "") + (a ? d + a + "H" : "") + (r ? d + r + "M" : "") + (t ? d + s + "S" : "")) : "P0D";
}
var De = qs.prototype;
De.isValid = Dw;
De.abs = uS;
De.add = cS;
De.subtract = fS;
De.as = hS;
De.asMilliseconds = vS;
De.asSeconds = mS;
De.asMinutes = gS;
De.asHours = bS;
De.asDays = yS;
De.asWeeks = CS;
De.asMonths = wS;
De.asQuarters = OS;
De.asYears = SS;
De.valueOf = pS;
De._bubble = dS;
De.clone = _S;
De.get = xS;
De.milliseconds = PS;
De.seconds = TS;
De.minutes = ES;
De.hours = kS;
De.days = DS;
De.weeks = MS;
De.months = $S;
De.years = IS;
De.humanize = FS;
De.toISOString = Zs;
De.toString = Zs;
De.toJSON = Zs;
De.locale = cg;
De.localeData = dg;
De.toIsoString = rn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Zs
);
De.lang = fg;
re("X", 0, 0, "unix");
re("x", 0, 0, "valueOf");
ee("x", Ws);
ee("X", iC);
We("X", function(t, e, n) {
  n._d = new Date(parseFloat(t) * 1e3);
});
We("x", function(t, e, n) {
  n._d = new Date(xe(t));
});
//! moment.js
R.version = "2.29.4";
B1(qe);
R.fn = z;
R.min = Pw;
R.max = Tw;
R.now = Ew;
R.utc = Vn;
R.unix = nS;
R.months = aS;
R.isDate = No;
R.locale = Or;
R.invalid = js;
R.duration = wn;
R.isMoment = gn;
R.weekdays = iS;
R.parseZone = rS;
R.localeData = ar;
R.isDuration = Fi;
R.monthsShort = oS;
R.weekdaysMin = lS;
R.defineLocale = Sc;
R.updateLocale = rw;
R.locales = aw;
R.weekdaysShort = sS;
R.normalizeUnits = an;
R.relativeTimeRounding = VS;
R.relativeTimeThreshold = RS;
R.calendarFormat = Jw;
R.prototype = z;
R.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function Wt(t) {
  return t.default || t;
}
var Ol = b({}, Ta.Modal);
function Td(t) {
  t ? Ol = b(b({}, Ol), t) : Ol = b({}, Ta.Modal);
}
var Ed = {};
function Ic(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function BS(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.warn("Note: ".concat(e));
}
function Sg(t, e, n) {
  !e && !Ed[n] && (t(!1, n), Ed[n] = !0);
}
function cn(t, e) {
  Sg(Ic, t, e);
}
function kd(t, e) {
  Sg(BS, t, e);
}
const bn = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  cn(t, "[antdv: ".concat(e, "] ").concat(n));
};
var Eu = "internalMark";
function jS(t) {
  t && t.locale ? Wt(R).locale(t.locale) : Wt(R).locale("en");
}
var ji = K({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: i.string
  },
  setup: function(e, n) {
    var r = n.slots;
    bn(e.ANT_MARK__ === Eu, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = rr({
      antLocale: b(b({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: Eu
    });
    return Ut("localeData", a), it(function() {
      return e.locale;
    }, function(o) {
      a.antLocale = b(b({}, o), {
        exist: !0
      }), jS(o), Td(o && o.Modal);
    }, {
      immediate: !0
    }), $s(function() {
      Td();
    }), function() {
      var o;
      return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
    };
  }
});
ji.install = function(t) {
  return t.component(ji.name, ji), t;
};
const LS = Cn(ji);
var HS = {
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: {
    type: Object
  },
  autoInsertSpaceInButton: i.looseBool,
  locale: {
    type: Object
  },
  pageHeader: {
    type: Object
  },
  componentSize: {
    type: String
  },
  direction: {
    type: String
  },
  space: {
    type: Object
  },
  virtual: i.looseBool,
  dropdownMatchSelectWidth: i.looseBool,
  form: {
    type: Object
  }
}, zS = K({
  name: "AConfigProvider",
  props: HS,
  setup: function(e, n) {
    var r = n.slots, a = function(f, d) {
      var p = e.prefixCls, m = p === void 0 ? "ant" : p;
      return d || (f ? "".concat(m, "-").concat(f) : m);
    }, o = function(f) {
      var d = e.renderEmpty || r.renderEmpty || $m;
      return d(f);
    }, s = function(f, d) {
      var p = e.prefixCls;
      if (d)
        return d;
      var m = p || a("");
      return f ? "".concat(m, "-").concat(f) : m;
    }, l = rr(b(b({}, e), {
      getPrefixCls: s,
      renderEmpty: o
    }));
    Object.keys(e).forEach(function(c) {
      it(function() {
        return e[c];
      }, function() {
        l[c] = e[c];
      });
    }), Ut("configProvider", l);
    var u = function(f) {
      var d;
      return h(LS, {
        locale: e.locale || f,
        ANT_MARK__: Eu
      }, {
        default: function() {
          return [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)];
        }
      });
    };
    return function() {
      return h(Na, {
        children: function(f, d, p) {
          return u(p);
        }
      }, null);
    };
  }
}), He = rr({
  getPrefixCls: function(e, n) {
    return n || (e ? "ant-".concat(e) : "ant");
  },
  renderEmpty: $m,
  direction: "ltr"
});
Cn(zS);
const Yr = function(t, e) {
  var n = ye("configProvider", He), r = W(function() {
    return n.getPrefixCls(t, e.prefixCls);
  }), a = W(function() {
    return n.direction;
  }), o = W(function() {
    return n.autoInsertSpaceInButton;
  }), s = W(function() {
    return n.renderEmpty;
  }), l = W(function() {
    return n.space;
  }), u = W(function() {
    return n.pageHeader;
  }), c = W(function() {
    return n.form;
  }), f = W(function() {
    return e.size || n.componentSize;
  }), d = W(function() {
    return e.getTargetContainer;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: f,
    getTargetContainer: d,
    space: l,
    pageHeader: u,
    form: c,
    autoInsertSpaceInButton: o,
    renderEmpty: s
  };
};
var YS = 0, va = {};
function yt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = YS++, r = e;
  function a() {
    r -= 1, r <= 0 ? (t(), delete va[n]) : va[n] = requestAnimationFrame(a);
  }
  return va[n] = requestAnimationFrame(a), n;
}
yt.cancel = function(e) {
  e !== void 0 && (cancelAnimationFrame(va[e]), delete va[e]);
};
yt.ids = va;
var Qs = function(e, n) {
  var r = n.slots, a, o = e.class, s = e.customizeIcon, l = e.customizeIconProps, u = e.onMousedown, c = e.onClick, f;
  return typeof s == "function" ? f = s(l) : f = s, h("span", {
    class: o,
    onMousedown: function(p) {
      p.preventDefault(), u && u(p);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: c,
    "aria-hidden": !0
  }, [f !== void 0 ? f : h("span", {
    class: o.split(/\s+/).map(function(d) {
      return "".concat(d, "-icon");
    })
  }, [(a = r.default) === null || a === void 0 ? void 0 : a.call(r)])]);
};
Qs.inheritAttrs = !1;
Qs.displayName = "TransBtn";
Qs.props = {
  class: i.string,
  customizeIcon: i.any,
  customizeIconProps: i.any,
  onMousedown: i.func,
  onClick: i.func
};
const cs = Qs;
var se = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(e) {
    var n = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || n >= se.F1 && n <= se.F12)
      return !1;
    switch (n) {
      case se.ALT:
      case se.CAPS_LOCK:
      case se.CONTEXT_MENU:
      case se.CTRL:
      case se.DOWN:
      case se.END:
      case se.ESC:
      case se.HOME:
      case se.INSERT:
      case se.LEFT:
      case se.MAC_FF_META:
      case se.META:
      case se.NUMLOCK:
      case se.NUM_CENTER:
      case se.PAGE_DOWN:
      case se.PAGE_UP:
      case se.PAUSE:
      case se.PRINT_SCREEN:
      case se.RIGHT:
      case se.SHIFT:
      case se.UP:
      case se.WIN_KEY:
      case se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(e) {
    if (e >= se.ZERO && e <= se.NINE || e >= se.NUM_ZERO && e <= se.NUM_MULTIPLY || e >= se.A && e <= se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0)
      return !0;
    switch (e) {
      case se.SPACE:
      case se.QUESTION_MARK:
      case se.NUM_PLUS:
      case se.NUM_MINUS:
      case se.NUM_PERIOD:
      case se.NUM_DIVISION:
      case se.SEMICOLON:
      case se.DASH:
      case se.EQUALS:
      case se.COMMA:
      case se.PERIOD:
      case se.SLASH:
      case se.APOSTROPHE:
      case se.SINGLE_QUOTE:
      case se.OPEN_SQUARE_BRACKET:
      case se.BACKSLASH:
      case se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
const oe = se;
var WS = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, US = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, Dd = "".concat(WS, " ").concat(US).split(/[\s\n]+/), GS = "aria-", KS = "data-";
function $d(t, e) {
  return t.indexOf(e) === 0;
}
function Mc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = b({}, e);
  var r = {};
  return Object.keys(t).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || $d(a, GS)) || n.data && $d(a, KS) || n.attr && (Dd.includes(a) || Dd.includes(a.toLowerCase()))) && (r[a] = t[a]);
  }), r;
}
function Ea() {
  var t = function e(n) {
    e.current = n;
  };
  return t;
}
var Js = function(e, n) {
  var r = e.height, a = e.offset, o = e.prefixCls, s = e.onInnerResize, l = n.slots, u, c = {}, f = {
    display: "flex",
    flexDirection: "column"
  };
  return a !== void 0 && (c = {
    height: "".concat(r, "px"),
    position: "relative",
    overflow: "hidden"
  }, f = b(b({}, f), {
    transform: "translateY(".concat(a, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), h("div", {
    style: c
  }, [h(Fs, {
    onResize: function(p) {
      var m = p.offsetHeight;
      m && s && s();
    }
  }, {
    default: function() {
      return [h("div", {
        style: f,
        class: Z(S({}, "".concat(o, "-holder-inner"), o))
      }, [(u = l.default) === null || u === void 0 ? void 0 : u.call(l)])];
    }
  })]);
};
Js.displayName = "Filter";
Js.inheritAttrs = !1;
Js.props = {
  prefixCls: String,
  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,
  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
const qS = Js;
var _g = function(e, n) {
  var r = e.setRef, a = n.slots, o, s = (o = a.default) === null || o === void 0 ? void 0 : o.call(a);
  return s && s.length ? Is(s[0], {
    ref: r
  }) : s;
};
_g.props = {
  setRef: {
    type: Function,
    default: function() {
    }
  }
};
const XS = _g;
var ZS = 20;
function Id(t) {
  return "touches" in t ? t.touches[0].pageY : t.pageY;
}
const QS = K({
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    scrollTop: i.number,
    scrollHeight: i.number,
    height: i.number,
    count: i.number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function() {
    return {
      moveRaf: null,
      scrollbarRef: Ea(),
      thumbRef: Ea(),
      visibleTimeout: null,
      state: rr({
        dragging: !1,
        pageY: null,
        startTop: null,
        visible: !1
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function() {
    this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart, ct ? {
      passive: !1
    } : !1), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown, ct ? {
      passive: !1
    } : !1);
  },
  beforeUnmount: function() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function() {
      var e = this;
      clearTimeout(this.visibleTimeout), this.state.visible = !0, this.visibleTimeout = setTimeout(function() {
        e.state.visible = !1;
      }, 2e3);
    },
    onScrollbarTouchStart: function(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function(e) {
      e.stopPropagation(), e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents: function() {
      window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp), this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, ct ? {
        passive: !1
      } : !1), this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function() {
      window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, ct ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, ct ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, ct ? {
        passive: !1
      } : !1), this.thumbRef.current.removeEventListener("touchend", this.onMouseUp), yt.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown: function(e) {
      var n = this.$props.onStartMove;
      b(this.state, {
        dragging: !0,
        pageY: Id(e),
        startTop: this.getTop()
      }), n(), this.patchEvents(), e.stopPropagation(), e.preventDefault();
    },
    onMouseMove: function(e) {
      var n = this.state, r = n.dragging, a = n.pageY, o = n.startTop, s = this.$props.onScroll;
      if (yt.cancel(this.moveRaf), r) {
        var l = Id(e) - a, u = o + l, c = this.getEnableScrollRange(), f = this.getEnableHeightRange(), d = f ? u / f : 0, p = Math.ceil(d * c);
        this.moveRaf = yt(function() {
          s(p);
        });
      }
    },
    onMouseUp: function() {
      var e = this.$props.onStopMove;
      this.state.dragging = !1, e(), this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight: function() {
      var e = this.$props, n = e.height, r = e.count, a = n / r * 10;
      return a = Math.max(a, ZS), a = Math.min(a, n / 2), Math.floor(a);
    },
    getEnableScrollRange: function() {
      var e = this.$props, n = e.scrollHeight, r = e.height;
      return n - r || 0;
    },
    getEnableHeightRange: function() {
      var e = this.$props.height, n = this.getSpinHeight();
      return e - n || 0;
    },
    getTop: function() {
      var e = this.$props.scrollTop, n = this.getEnableScrollRange(), r = this.getEnableHeightRange();
      if (e === 0 || n === 0)
        return 0;
      var a = e / n;
      return a * r;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll: function() {
      var e = this.$props, n = e.height, r = e.scrollHeight;
      return r > n;
    }
  },
  render: function() {
    var e = this.state, n = e.dragging, r = e.visible, a = this.$props.prefixCls, o = this.getSpinHeight() + "px", s = this.getTop() + "px", l = this.showScroll(), u = l && r;
    return h("div", {
      ref: this.scrollbarRef,
      class: Z("".concat(a, "-scrollbar"), S({}, "".concat(a, "-scrollbar-show"), l)),
      style: {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: u ? void 0 : "none"
      },
      onMousedown: this.onContainerMouseDown,
      onMousemove: this.delayHidden
    }, [h("div", {
      ref: this.thumbRef,
      class: Z("".concat(a, "-scrollbar-thumb"), S({}, "".concat(a, "-scrollbar-thumb-moving"), n)),
      style: {
        width: "100%",
        height: o,
        top: s,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      onMousedown: this.onMouseDown
    }, null)]);
  }
});
function JS(t, e, n) {
  var r = /* @__PURE__ */ new Map(), a = rr({}), o = 0;
  function s() {
    o += 1;
    var u = o;
    Promise.resolve().then(function() {
      u === o && r.forEach(function(c, f) {
        if (c && c.offsetParent) {
          var d = c.offsetHeight;
          a[f] !== d && (a[f] = c.offsetHeight);
        }
      });
    });
  }
  function l(u, c) {
    var f = t(u), d = r.get(f);
    c ? (r.set(f, c), s()) : r.delete(f), !d != !c && (c ? e == null || e(u) : n == null || n(u));
  }
  return [l, s, a];
}
function e_(t, e, n, r, a, o, s, l) {
  var u = null;
  return function(c) {
    if (c == null) {
      l();
      return;
    }
    yt.cancel(u);
    var f = e.value, d = r.itemHeight;
    if (typeof c == "number")
      s(c);
    else if (c && Ye(c) === "object") {
      var p, m = c.align;
      "index" in c ? p = c.index : p = f.findIndex(function(y) {
        return a(y) === c.key;
      });
      var v = c.offset, g = v === void 0 ? 0 : v, C = function y(O, w) {
        if (!(O < 0 || !t.value)) {
          var _ = t.value.clientHeight, x = !1, P = w;
          if (_) {
            for (var T = w || m, M = 0, $ = 0, k = 0, V = Math.min(f.length, p), I = 0; I <= V; I += 1) {
              var F = a(f[I]);
              $ = M;
              var B = n[F];
              k = $ + (B === void 0 ? d : B), M = k, I === p && B === void 0 && (x = !0);
            }
            var E = null;
            switch (T) {
              case "top":
                E = $ - g;
                break;
              case "bottom":
                E = k - _ + g;
                break;
              default: {
                var j = t.value.scrollTop, D = j + _;
                $ < j ? P = "top" : k > D && (P = "bottom");
              }
            }
            E !== null && E !== t.value.scrollTop && s(E);
          }
          u = yt(function() {
            x && o(), y(O - 1, P);
          });
        }
      };
      C(3);
    }
  };
}
var t_ = (typeof navigator > "u" ? "undefined" : Ye(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const n_ = t_, xg = function(t, e) {
  var n = !1, r = null;
  function a() {
    clearTimeout(r), n = !0, r = setTimeout(function() {
      n = !1;
    }, 50);
  }
  return function(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = (
      // Pass origin wheel when on the top
      o < 0 && t.value || o > 0 && e.value
    );
    return s && l ? (clearTimeout(r), n = !1) : (!l || n) && a(), !n && l;
  };
};
function r_(t, e, n, r) {
  var a = 0, o = null, s = null, l = !1, u = xg(e, n);
  function c(d) {
    if (t.value) {
      yt.cancel(o);
      var p = d.deltaY;
      a += p, s = p, !u(p) && (n_ || d.preventDefault(), o = yt(function() {
        var m = l ? 10 : 1;
        r(a * m), a = 0;
      }));
    }
  }
  function f(d) {
    t.value && (l = d.detail === s);
  }
  return [c, f];
}
var a_ = 14 / 15;
function o_(t, e, n) {
  var r = !1, a = 0, o = null, s = null, l = function() {
    o && (o.removeEventListener("touchmove", u, ct ? {
      passive: !1
    } : !1), o.removeEventListener("touchend", c));
  }, u = function(p) {
    if (r) {
      var m = Math.ceil(p.touches[0].pageY), v = a - m;
      a = m, n(v) && p.preventDefault(), clearInterval(s), s = setInterval(function() {
        v *= a_, (!n(v, !0) || Math.abs(v) <= 0.1) && clearInterval(s);
      }, 16);
    }
  }, c = function() {
    r = !1, l();
  }, f = function(p) {
    l(), p.touches.length === 1 && !r && (r = !0, a = Math.ceil(p.touches[0].pageY), o = p.target, o.addEventListener("touchmove", u, ct ? {
      passive: !1
    } : !1), o.addEventListener("touchend", c));
  };
  Dt(function() {
    it(t, function(d) {
      e.value.removeEventListener("touchstart", f, ct ? {
        passive: !1
      } : !1), l(), clearInterval(s), d && e.value.addEventListener("touchstart", f, ct ? {
        passive: !1
      } : !1);
    }, {
      immediate: !0
    });
  });
}
var i_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, s_ = [], l_ = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function u_(t, e, n, r, a, o) {
  var s = o.getKey;
  return t.slice(e, n + 1).map(function(l, u) {
    var c = e + u, f = a(l, c, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), d = s(l);
    return h(XS, {
      key: d,
      setRef: function(m) {
        return r(l, m);
      }
    }, {
      default: function() {
        return [f];
      }
    });
  });
}
var c_ = K({
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    data: i.array,
    height: i.number,
    itemHeight: i.number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: i.looseBool,
    itemKey: {
      type: [String, Number, Function],
      required: !0
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: i.looseBool,
    children: i.func,
    onScroll: i.func,
    onMousedown: i.func,
    onMouseenter: i.func
  },
  setup: function(e) {
    var n = W(function() {
      var D = e.height, N = e.itemHeight, U = e.virtual;
      return !!(U !== !1 && D && N);
    }), r = W(function() {
      var D = e.height, N = e.itemHeight, U = e.data;
      return n.value && U && N * U.length > D;
    }), a = rr({
      scrollTop: 0,
      scrollMoving: !1
    }), o = W(function() {
      return e.data || s_;
    }), s = Q(), l = Q(), u = Q(), c = function(N) {
      return typeof e.itemKey == "function" ? e.itemKey(N) : N == null ? void 0 : N[e.itemKey];
    }, f = {
      getKey: c
    };
    function d(D) {
      var N;
      typeof D == "function" ? N = D(a.scrollTop) : N = D;
      var U = w(N);
      s.value && (s.value.scrollTop = U), a.scrollTop = U;
    }
    var p = JS(c, null, null), m = ht(p, 3), v = m[0], g = m[1], C = m[2], y = Q({});
    it([r, n, function() {
      return a.scrollTop;
    }, o, C, function() {
      return e.height;
    }], function() {
      Le(function() {
        var D;
        if (!n.value) {
          y.value = {
            scrollHeight: void 0,
            start: 0,
            end: o.value.length - 1,
            offset: void 0
          };
          return;
        }
        if (!r.value) {
          y.value = {
            scrollHeight: ((D = l.value) === null || D === void 0 ? void 0 : D.offsetHeight) || 0,
            start: 0,
            end: o.value.length - 1,
            offset: void 0
          };
          return;
        }
        for (var N = 0, U, L, ne, ie = o.value.length, fe = o.value, $e = 0; $e < ie; $e += 1) {
          var ze = fe[$e], Te = c(ze), ge = C[Te], Re = N + (ge === void 0 ? e.itemHeight : ge);
          Re >= a.scrollTop && U === void 0 && (U = $e, L = N), Re > a.scrollTop + e.height && ne === void 0 && (ne = $e), N = Re;
        }
        U === void 0 && (U = 0, L = 0), ne === void 0 && (ne = ie - 1), ne = Math.min(ne + 1, ie), y.value = {
          scrollHeight: N,
          start: U,
          end: ne,
          offset: L
        };
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    var O = W(function() {
      return y.value.scrollHeight - e.height;
    });
    function w(D) {
      var N = D;
      return Number.isNaN(O.value) || (N = Math.min(N, O.value)), N = Math.max(N, 0), N;
    }
    var _ = W(function() {
      return a.scrollTop <= 0;
    }), x = W(function() {
      return a.scrollTop >= O.value;
    }), P = xg(_, x);
    function T(D) {
      var N = D;
      d(N);
    }
    function M(D) {
      var N, U = D.currentTarget.scrollTop;
      Math.abs(U - a.scrollTop) >= 1 && d(U), (N = e.onScroll) === null || N === void 0 || N.call(e, D);
    }
    var $ = r_(n, _, x, function(D) {
      d(function(N) {
        var U = N + D;
        return U;
      });
    }), k = ht($, 2), V = k[0], I = k[1];
    o_(n, s, function(D, N) {
      return P(D, N) ? !1 : (V({
        preventDefault: function() {
        },
        deltaY: D
      }), !0);
    });
    function F(D) {
      n.value && D.preventDefault();
    }
    var B = function() {
      s.value && (s.value.removeEventListener("wheel", V, ct ? {
        passive: !1
      } : !1), s.value.removeEventListener("DOMMouseScroll", I), s.value.removeEventListener("MozMousePixelScroll", F));
    };
    Mo(function() {
      Le(function() {
        s.value && (B(), s.value.addEventListener("wheel", V, ct ? {
          passive: !1
        } : !1), s.value.addEventListener("DOMMouseScroll", I), s.value.addEventListener("MozMousePixelScroll", F));
      });
    }), Ao(function() {
      B();
    });
    var E = e_(s, o, C, e, c, g, d, function() {
      var D;
      (D = u.value) === null || D === void 0 || D.delayHidden();
    }), j = W(function() {
      var D = null;
      return e.height && (D = b(S({}, e.fullHeight ? "height" : "maxHeight", e.height + "px"), l_), n.value && (D.overflowY = "hidden", a.scrollMoving && (D.pointerEvents = "none"))), D;
    });
    return {
      state: a,
      mergedData: o,
      componentStyle: j,
      scrollTo: E,
      onFallbackScroll: M,
      onScrollBar: T,
      componentRef: s,
      useVirtual: n,
      calRes: y,
      collectHeight: g,
      setInstance: v,
      sharedConfig: f,
      scrollBarRef: u,
      fillerInnerRef: l
    };
  },
  render: function() {
    var e = this, n = b(b({}, this.$props), this.$attrs), r = n.prefixCls, a = r === void 0 ? "rc-virtual-list" : r, o = n.height;
    n.itemHeight, n.fullHeight, n.data, n.itemKey, n.virtual;
    var s = n.component, l = s === void 0 ? "div" : s;
    n.onScroll;
    var u = n.children, c = n.style, f = n.class, d = i_(n, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]), p = Z(a, f), m = this.state.scrollTop, v = this.calRes, g = v.scrollHeight, C = v.offset, y = v.start, O = v.end, w = this.componentStyle, _ = this.onFallbackScroll, x = this.onScrollBar, P = this.useVirtual, T = this.collectHeight, M = this.sharedConfig, $ = this.setInstance, k = this.mergedData, V = u_(k, y, O, $, u, M);
    return h("div", H({
      style: b(b({}, c), {
        position: "relative"
      }),
      class: p
    }, d), [h(l, {
      class: "".concat(a, "-holder"),
      style: w,
      ref: "componentRef",
      onScroll: _
    }, {
      default: function() {
        return [h(qS, {
          prefixCls: a,
          height: g,
          offset: C,
          onInnerResize: T,
          ref: "fillerInnerRef"
        }, {
          default: function() {
            return [V];
          }
        })];
      }
    }), P && h(QS, {
      ref: "scrollBarRef",
      prefixCls: a,
      scrollTop: m,
      height: o,
      scrollHeight: g,
      count: k.length,
      onScroll: x,
      onStartMove: function() {
        e.state.scrollMoving = !0;
      },
      onStopMove: function() {
        e.state.scrollMoving = !1;
      }
    }, null)]);
  }
});
const f_ = c_;
function d_(t, e, n) {
  var r = Q(t());
  return it(e, function(a, o) {
    n ? n(a, o) && (r.value = t()) : r.value = t();
  }), r;
}
var h_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, p_ = {
  prefixCls: i.string,
  id: i.string,
  options: i.array,
  flattenOptions: i.array,
  height: i.number,
  itemHeight: i.number,
  values: i.any,
  multiple: i.looseBool,
  open: i.looseBool,
  defaultActiveFirstOption: i.looseBool,
  notFoundContent: i.any,
  menuItemSelectedIcon: i.any,
  childrenAsData: i.looseBool,
  searchValue: i.string,
  virtual: i.looseBool,
  onSelect: i.func,
  onToggleOpen: {
    type: Function
  },
  /** Tell Select that some value is now active to make accessibility work */
  onActiveValue: i.func,
  onScroll: i.func,
  /** Tell Select that mouse enter the popup to force re-render */
  onMouseenter: i.func
}, Pg = K({
  name: "OptionList",
  inheritAttrs: !1,
  slots: ["option"],
  setup: function(e) {
    var n = W(function() {
      return "".concat(e.prefixCls, "-item");
    }), r = d_(function() {
      return e.flattenOptions;
    }, [function() {
      return e.open;
    }, function() {
      return e.flattenOptions;
    }], function(p) {
      return p[0];
    }), a = Ea(), o = function(m) {
      m.preventDefault();
    }, s = function(m) {
      a.current && a.current.scrollTo({
        index: m
      });
    }, l = function(m) {
      for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, g = r.value.length, C = 0; C < g; C += 1) {
        var y = (m + C * v + g) % g, O = r.value[y], w = O.group, _ = O.data;
        if (!w && !_.disabled)
          return y;
      }
      return -1;
    }, u = rr({
      activeIndex: l(0)
    }), c = function(m) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      u.activeIndex = m;
      var g = {
        source: v ? "keyboard" : "mouse"
      }, C = r.value[m];
      if (!C) {
        e.onActiveValue(null, -1, g);
        return;
      }
      e.onActiveValue(C.data.value, m, g);
    };
    it([function() {
      return r.value.length;
    }, function() {
      return e.searchValue;
    }], function() {
      c(e.defaultActiveFirstOption !== !1 ? l(0) : -1);
    }, {
      immediate: !0
    }), it(function() {
      return e.open;
    }, function() {
      if (!e.multiple && e.open && e.values.size === 1) {
        var p = Array.from(e.values)[0], m = r.value.findIndex(function(v) {
          var g = v.data;
          return g.value === p;
        });
        c(m), Le(function() {
          s(m);
        });
      }
      e.open && Le(function() {
        var v;
        (v = a.current) === null || v === void 0 || v.scrollTo(void 0);
      });
    }, {
      immediate: !0,
      flush: "post"
    });
    var f = function(m) {
      m !== void 0 && e.onSelect(m, {
        selected: !e.values.has(m)
      }), e.multiple || e.onToggleOpen(!1);
    };
    function d(p) {
      var m = r.value[p];
      if (!m)
        return null;
      var v = m.data || {}, g = v.value, C = v.label, y = v.children, O = Mc(v, !0), w = e.childrenAsData ? y : C;
      return m ? h("div", H(H({
        "aria-label": typeof w == "string" ? w : void 0
      }, O), {}, {
        key: p,
        role: "option",
        id: "".concat(e.id, "_list_").concat(p),
        "aria-selected": e.values.has(g)
      }), [g]) : null;
    }
    return {
      memoFlattenOptions: r,
      renderItem: d,
      listRef: a,
      state: u,
      onListMouseDown: o,
      itemPrefixCls: n,
      setActive: c,
      onSelectValue: f,
      onKeydown: function(m) {
        var v = m.which;
        switch (v) {
          case oe.UP:
          case oe.DOWN: {
            var g = 0;
            if (v === oe.UP ? g = -1 : v === oe.DOWN && (g = 1), g !== 0) {
              var C = l(u.activeIndex + g, g);
              s(C), c(C, !0);
            }
            break;
          }
          case oe.ENTER: {
            var y = r.value[u.activeIndex];
            y && !y.data.disabled ? f(y.data.value) : f(void 0), e.open && m.preventDefault();
            break;
          }
          case oe.ESC:
            e.onToggleOpen(!1), e.open && m.stopPropagation();
        }
      },
      onKeyup: function() {
      },
      scrollTo: function(m) {
        s(m);
      }
    };
  },
  render: function() {
    var e = this.renderItem, n = this.listRef, r = this.onListMouseDown, a = this.itemPrefixCls, o = this.setActive, s = this.onSelectValue, l = this.memoFlattenOptions, u = this.$slots, c = this.$props, f = c.id, d = c.childrenAsData, p = c.values, m = c.height, v = c.itemHeight, g = c.menuItemSelectedIcon, C = c.notFoundContent, y = c.virtual, O = c.onScroll, w = c.onMouseenter, _ = u.option, x = this.state.activeIndex;
    return l.length === 0 ? h("div", {
      role: "listbox",
      id: "".concat(f, "_list"),
      class: "".concat(a, "-empty"),
      onMousedown: r
    }, [C]) : h(mt, null, [h("div", {
      role: "listbox",
      id: "".concat(f, "_list"),
      style: {
        height: 0,
        width: 0,
        overflow: "hidden"
      }
    }, [e(x - 1), e(x), e(x + 1)]), h(f_, {
      itemKey: "key",
      ref: n,
      data: l,
      height: m,
      itemHeight: v,
      fullHeight: !1,
      onMousedown: r,
      onScroll: O,
      virtual: y,
      onMouseenter: w,
      children: function(T, M) {
        var $, k = T.group, V = T.groupOption, I = T.data, F = I.label, B = I.key;
        if (k)
          return h("div", {
            class: Z(a, "".concat(a, "-group"))
          }, [_ ? _(I) : F !== void 0 ? F : B]);
        var E = I.disabled, j = I.value, D = I.title, N = I.children, U = I.style, L = I.class, ne = I.className, ie = h_(I, ["disabled", "value", "title", "children", "style", "class", "className"]), fe = p.has(j), $e = "".concat(a, "-option"), ze = Z(a, $e, L, ne, ($ = {}, S($, "".concat($e, "-grouped"), V), S($, "".concat($e, "-active"), x === M && !E), S($, "".concat($e, "-disabled"), E), S($, "".concat($e, "-selected"), fe), $)), Te = d ? N : F, ge = !g || typeof g == "function" || fe, Re = Te || j, tt = typeof Re == "string" || typeof Re == "number" ? Re.toString() : void 0;
        return D !== void 0 && (tt = D), h("div", H(H({}, ie), {}, {
          "aria-selected": fe,
          class: ze,
          title: tt,
          onMousemove: function(A) {
            ie.onMousemove && ie.onMousemove(A), !(x === M || E) && o(M);
          },
          onClick: function(A) {
            E || s(j), ie.onClick && ie.onClick(A);
          },
          style: U
        }), [h("div", {
          class: "".concat($e, "-content")
        }, [_ ? _(I) : Re]), vn(g) || fe, ge && h(cs, {
          class: "".concat(a, "-option-state"),
          customizeIcon: g,
          customizeIconProps: {
            isSelected: fe
          }
        }, {
          default: function() {
            return [fe ? "✓" : null];
          }
        })]);
      }
    }, null)]);
  }
});
Pg.props = p_;
const v_ = Pg;
var Ac = function() {
  return null;
};
Ac.isSelectOption = !0;
Ac.displayName = "ASelectOption";
const Tg = Ac;
var Nc = function() {
  return null;
};
Nc.isSelectOptGroup = !0;
Nc.displayName = "ASelectOptGroup";
const Eg = Nc;
var m_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function g_(t) {
  var e = t, n = e.key, r = e.children, a = e.props, o = a.value, s = a.disabled, l = m_(a, ["value", "disabled"]), u = r && r.default ? r.default() : void 0;
  return b({
    key: n,
    value: o !== void 0 ? o : n,
    children: u,
    disabled: s || s === ""
  }, l);
}
function Vc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Nr(t).map(function(r, a) {
    var o;
    if (!vn(r) || !r.type)
      return null;
    var s = r.type.isSelectOptGroup, l = r.key, u = r.children, c = r.props;
    if (e || !s)
      return g_(r);
    var f = u && u.default ? u.default() : void 0, d = (c == null ? void 0 : c.label) || ((o = u.label) === null || o === void 0 ? void 0 : o.call(u)) || l;
    return b(b({
      key: "__RC_SELECT_GRP__".concat(l === null ? a : String(l), "__")
    }, c), {
      label: d,
      options: Vc(f || [])
    });
  }).filter(function(r) {
    return r;
  });
  return n;
}
function b_(t) {
  return gm(t) || ym(t) || Vs(t) || bm();
}
function Rc(t) {
  return Array.isArray(t) ? t : t !== void 0 ? [t] : [];
}
function y_(t, e) {
  var n = e.labelInValue, r = e.combobox, a = /* @__PURE__ */ new Map();
  if (t === void 0 || t === "" && r)
    return [[], a];
  var o = Array.isArray(t) ? t : [t], s = o;
  return n && (s = o.filter(function(l) {
    return l !== null;
  }).map(function(l) {
    var u = l.key, c = l.value, f = c !== void 0 ? c : u;
    return a.set(f, l), f;
  })), [s, a];
}
function C_(t, e) {
  var n = e.optionLabelProp, r = e.labelInValue, a = e.prevValueMap, o = e.options, s = e.getLabeledValue, l = t;
  return r && (l = l.map(function(u) {
    return s(u, {
      options: o,
      prevValueMap: a,
      labelInValue: r,
      optionLabelProp: n
    });
  })), l;
}
function w_(t, e) {
  var n = Je(e), r;
  for (r = t.length - 1; r >= 0 && t[r].disabled; r -= 1)
    ;
  var a = null;
  return r !== -1 && (a = n[r], n.splice(r, 1)), {
    values: n,
    removedValue: a
  };
}
var O_ = typeof window < "u" && window.document && window.document.documentElement, S_ = process.env.NODE_ENV !== "test" && O_, Md = 0;
function __() {
  var t;
  return S_ ? (t = Md, Md += 1) : t = "TEST_OR_SSR", t;
}
function Ad(t, e) {
  var n = t.key, r;
  return "value" in t && (r = t.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(e));
}
function x_(t) {
  var e = [];
  function n(r, a) {
    r.forEach(function(o) {
      a || !("options" in o) ? e.push({
        key: Ad(o, e.length),
        groupOption: a,
        data: o
      }) : (e.push({
        key: Ad(o, e.length),
        group: !0,
        data: o
      }), n(o.options, !0));
    });
  }
  return n(t, !1), e;
}
function kg(t) {
  var e = b({}, t);
  return "props" in e || Object.defineProperty(e, "props", {
    get: function() {
      return Ic(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), e;
    }
  }), e;
}
function Fc(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.prevValueOptions, a = r === void 0 ? [] : r, o = /* @__PURE__ */ new Map();
  return e.forEach(function(s) {
    if (!s.group) {
      var l = s.data;
      o.set(l.value, l);
    }
  }), t.map(function(s) {
    var l = o.get(s);
    return l || (l = b({}, a.find(function(u) {
      return u._INTERNAL_OPTION_VALUE_ === s;
    }))), kg(l);
  });
}
var P_ = function(e, n) {
  var r = n.options, a = n.prevValueMap, o = n.labelInValue, s = n.optionLabelProp, l = Fc([e], r)[0], u = {
    value: e
  }, c = o ? a.get(e) : void 0;
  return c && Ye(c) === "object" && "label" in c ? (u.label = c.label, l && typeof c.label == "string" && typeof l[s] == "string" && c.label.trim() !== l[s].trim() && Ic(!1, "`label` of `value` is not same as `label` in Select options.")) : l && s in l ? Array.isArray(l[s]) ? u.label = _r(l[s][0]) ? Is(l[s][0]) : l[s] : u.label = l[s] : (u.label = e, u.isCacheable = !0), u.key = u.value, u;
};
function Nd(t) {
  return Rc(t).map(function(e) {
    var n, r;
    return _r(e) ? ((n = e == null ? void 0 : e.el) === null || n === void 0 ? void 0 : n.innerText) || ((r = e == null ? void 0 : e.el) === null || r === void 0 ? void 0 : r.wholeText) : e;
  }).join("");
}
function T_(t) {
  return function(e, n) {
    var r = e.toLowerCase();
    if ("options" in n)
      return Nd(n.label).toLowerCase().includes(r);
    var a = n[t], o = Nd(a).toLowerCase();
    return o.includes(r);
  };
}
function E_(t, e, n) {
  var r = n.optionFilterProp, a = n.filterOption, o = [], s;
  return a === !1 ? Je(e) : (typeof a == "function" ? s = a : s = T_(r), e.forEach(function(l) {
    if ("options" in l) {
      var u = s(t, l);
      if (u)
        o.push(l);
      else {
        var c = l.options.filter(function(f) {
          return s(t, f);
        });
        c.length && o.push(b(b({}, l), {
          options: c
        }));
      }
      return;
    }
    s(t, kg(l)) && o.push(l);
  }), o);
}
function k_(t, e) {
  if (!e || !e.length)
    return null;
  var n = !1;
  function r(o, s) {
    var l = b_(s), u = l[0], c = l.slice(1);
    if (!u)
      return [o];
    var f = o.split(u);
    return n = n || f.length > 1, f.reduce(function(d, p) {
      return [].concat(Je(d), Je(r(p, c)));
    }, []).filter(function(d) {
      return d;
    });
  }
  var a = r(t, e);
  return n ? a : null;
}
function D_(t, e) {
  var n = Fc([t], e)[0];
  return n.disabled;
}
function $_(t, e, n, r) {
  var a = Rc(e).slice().sort(), o = Je(t), s = /* @__PURE__ */ new Set();
  return t.forEach(function(l) {
    l.options ? l.options.forEach(function(u) {
      s.add(u.value);
    }) : s.add(l.value);
  }), a.forEach(function(l) {
    var u = r ? l.value : l;
    if (!s.has(u)) {
      var c;
      o.push(r ? (c = {}, S(c, n, l.label), S(c, "value", u), c) : {
        value: u
      });
    }
  }), o;
}
function je(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = t;
  if (Array.isArray(t) && (a = Aa(t)[0]), !a)
    return null;
  var o = Is(a, e, r);
  return o.props = n ? b(b({}, o.props), e) : o.props, bn(Ye(o.props.class) !== "object", "class must be string"), o;
}
function I_(t) {
  t.target.composing = !0;
}
function Vd(t) {
  t.target.composing && (t.target.composing = !1, M_(t.target, "input"));
}
function M_(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function Sl(t, e, n, r) {
  t.addEventListener(e, n, r);
}
var A_ = {
  created: function(e, n) {
    (!n.modifiers || !n.modifiers.lazy) && (Sl(e, "compositionstart", I_), Sl(e, "compositionend", Vd), Sl(e, "change", Vd));
  }
};
const Bo = A_;
var N_ = K({
  name: "Input",
  inheritAttrs: !1,
  props: {
    inputRef: i.any,
    prefixCls: i.string,
    id: i.string,
    inputElement: i.any,
    disabled: i.looseBool,
    autofocus: i.looseBool,
    autocomplete: i.string,
    editable: i.looseBool,
    accessibilityIndex: i.number,
    value: i.string,
    open: i.looseBool,
    tabindex: i.oneOfType([i.number, i.string]),
    /** Pass accessibility props to input */
    attrs: i.object,
    onKeydown: i.func,
    onMousedown: i.func,
    onChange: i.func,
    onPaste: i.func,
    onCompositionstart: i.func,
    onCompositionend: i.func,
    onFocus: i.func,
    onBlur: i.func
  },
  setup: function(e) {
    return process.env.NODE_ENV === "test" && Dt(function() {
      var n = ac();
      e.autofocus && n.vnode && n.vnode.el && n.vnode.el.focus();
    }), {
      blurTimeout: null,
      VCSelectContainerEvent: ye("VCSelectContainerEvent")
    };
  },
  render: function() {
    var e = this, n, r = this.$props, a = r.prefixCls, o = r.id, s = r.inputElement, l = r.disabled, u = r.tabindex, c = r.autofocus, f = r.autocomplete, d = r.editable, p = r.accessibilityIndex, m = r.value, v = r.onKeydown, g = r.onMousedown, C = r.onChange, y = r.onPaste, O = r.onCompositionstart, w = r.onCompositionend, _ = r.onFocus, x = r.onBlur, P = r.open, T = r.inputRef, M = r.attrs, $ = s || In(h("input", null, null), [[Bo]]), k = $.props || {}, V = k.onKeydown, I = k.onInput, F = k.onFocus, B = k.onBlur, E = k.onMousedown, j = k.onCompositionstart, D = k.onCompositionend, N = k.style;
    return $ = je($, b(b(b({
      id: o,
      ref: T,
      disabled: l,
      tabindex: u,
      autocomplete: f || "off",
      autofocus: c,
      class: Z("".concat(a, "-selection-search-input"), (n = $ == null ? void 0 : $.props) === null || n === void 0 ? void 0 : n.className),
      style: b(b({}, N), {
        opacity: d ? null : 0
      }),
      role: "combobox",
      "aria-expanded": P,
      "aria-haspopup": "listbox",
      "aria-owns": "".concat(o, "_list"),
      "aria-autocomplete": "list",
      "aria-controls": "".concat(o, "_list"),
      "aria-activedescendant": "".concat(o, "_list_").concat(p)
    }, M), {
      value: d ? m : "",
      readonly: !d,
      unselectable: d ? null : "on",
      onKeydown: function(L) {
        v(L), V && V(L);
      },
      onMousedown: function(L) {
        g(L), E && E(L);
      },
      onInput: function(L) {
        C(L), I && I(L);
      },
      onCompositionstart: function(L) {
        O(L), j && j(L);
      },
      onCompositionend: function(L) {
        w(L), D && D(L);
      },
      onPaste: y,
      onFocus: function() {
        var L;
        clearTimeout(e.blurTimeout), F && F(arguments.length <= 0 ? void 0 : arguments[0]), _ && _(arguments.length <= 0 ? void 0 : arguments[0]), (L = e.VCSelectContainerEvent) === null || L === void 0 || L.focus(arguments.length <= 0 ? void 0 : arguments[0]);
      },
      onBlur: function() {
        for (var L = arguments.length, ne = new Array(L), ie = 0; ie < L; ie++)
          ne[ie] = arguments[ie];
        e.blurTimeout = setTimeout(function() {
          var fe;
          B && B(ne[0]), x && x(ne[0]), (fe = e.VCSelectContainerEvent) === null || fe === void 0 || fe.blur(ne[0]);
        }, 200);
      }
    }), $.type === "textarea" ? {} : {
      type: "search"
    }), !0, !0), $;
  }
});
const Dg = N_;
var $g = Symbol("OverflowContextProviderKey"), ku = K({
  name: "OverflowContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object
    }
  },
  setup: function(e, n) {
    var r = n.slots;
    return Ut($g, W(function() {
      return e.value;
    })), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}), V_ = function() {
  return ye($g, W(function() {
    return null;
  }));
}, R_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Zr = void 0;
const Li = K({
  name: "Item",
  props: {
    prefixCls: String,
    item: i.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: i.any,
    invalidate: Boolean
  },
  setup: function(e, n) {
    var r = n.slots, a = n.expose, o = W(function() {
      return e.responsive && !e.display;
    }), s = Q();
    a({
      itemNodeRef: s
    });
    function l(u) {
      e.registerSize(e.itemKey, u);
    }
    return $s(function() {
      l(null);
    }), function() {
      var u, c = e.prefixCls, f = e.invalidate, d = e.item, p = e.renderItem, m = e.responsive;
      e.registerSize, e.itemKey, e.display;
      var v = e.order, g = e.component, C = g === void 0 ? "div" : g, y = R_(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), O = (u = r.default) === null || u === void 0 ? void 0 : u.call(r), w = p && d !== Zr ? p(d) : O, _;
      f || (_ = {
        opacity: o.value ? 0 : 1,
        height: o.value ? 0 : Zr,
        overflowY: o.value ? "hidden" : Zr,
        order: m ? v : Zr,
        pointerEvents: o.value ? "none" : Zr,
        position: o.value ? "absolute" : Zr
      });
      var x = {};
      o.value && (x["aria-hidden"] = !0);
      var P = h(C, H(H(H({
        class: Z(!f && c),
        style: _
      }, x), y), {}, {
        ref: s
      }), {
        default: function() {
          return [w];
        }
      });
      return h(Fs, {
        disabled: !m,
        onResize: function(M) {
          var $ = M.offsetWidth;
          l($);
        }
      }, {
        default: function() {
          return [P];
        }
      });
    };
  }
});
var _l = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const F_ = K({
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: i.any,
    title: i.any
  },
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = V_();
    return function() {
      var s, l;
      if (!o.value) {
        var u = e.component, c = u === void 0 ? "div" : u, f = _l(e, ["component"]);
        return h(c, H(H({}, f), a), {
          default: function() {
            return [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)];
          }
        });
      }
      var d = o.value, p = d.className, m = _l(d, ["className"]), v = a.class, g = _l(a, ["class"]);
      return h(ku, {
        value: null
      }, {
        default: function() {
          return [h(Li, H(H(H({
            class: Z(p, v)
          }, m), g), e), {
            default: function() {
              return [(l = r.default) === null || l === void 0 ? void 0 : l.call(r)];
            }
          })];
        }
      });
    };
  }
});
var B_ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Ig = "responsive", Mg = "invalidate";
function j_(t) {
  return "+ ".concat(t.length, " ...");
}
var el = K({
  name: "Overflow",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: Function,
    suffix: i.any,
    component: String,
    itemComponent: i.any,
    /** @private This API may be refactor since not well design */
    onVisibleChange: Function,
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: String
  },
  emits: ["visibleChange"],
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = W(function() {
      return e.ssr === "full";
    }), s = Q(null), l = W(function() {
      return s.value || 0;
    }), u = Q(/* @__PURE__ */ new Map()), c = Q(0), f = Q(0), d = Q(0), p = Q(null), m = Q(null), v = W(function() {
      return m.value === null && o.value ? Number.MAX_SAFE_INTEGER : m.value || 0;
    }), g = Q(!1), C = W(function() {
      return "".concat(e.prefixCls, "-item");
    }), y = W(function() {
      return Math.max(c.value, f.value);
    }), O = W(function() {
      return !!(e.data.length && e.maxCount === Ig);
    }), w = W(function() {
      return e.maxCount === Mg;
    }), _ = W(function() {
      return O.value || typeof e.maxCount == "number" && e.data.length > e.maxCount;
    }), x = W(function() {
      var E = e.data;
      return O.value ? s.value === null && o.value ? E = e.data : E = e.data.slice(0, Math.min(e.data.length, l.value / e.itemWidth)) : typeof e.maxCount == "number" && (E = e.data.slice(0, e.maxCount)), E;
    }), P = W(function() {
      return O.value ? e.data.slice(v.value + 1) : e.data.slice(x.value.length);
    }), T = function(j, D) {
      var N, U;
      return typeof e.itemKey == "function" ? e.itemKey(j) : (U = e.itemKey && ((N = j) === null || N === void 0 ? void 0 : N[e.itemKey])) !== null && U !== void 0 ? U : D;
    }, M = W(function() {
      return e.renderItem || function(E) {
        return E;
      };
    }), $ = function(j, D) {
      m.value = j, D || (g.value = j < e.data.length - 1, a("visibleChange", j));
    }, k = function(j, D) {
      s.value = D.clientWidth;
    }, V = function(j, D) {
      var N = new Map(u.value);
      D === null ? N.delete(j) : N.set(j, D), u.value = N;
    }, I = function(j, D) {
      c.value = f.value, f.value = D;
    }, F = function(j, D) {
      d.value = D;
    }, B = function(j) {
      return u.value.get(T(x.value[j], j));
    };
    return it([l, u, f, d, function() {
      return e.itemKey;
    }, x], function() {
      if (l.value && y.value && x.value) {
        var E = d.value, j = x.value.length, D = j - 1;
        if (!j) {
          $(0), p.value = null;
          return;
        }
        for (var N = 0; N < j; N += 1) {
          var U = B(N);
          if (U === void 0) {
            $(N - 1, !0);
            break;
          }
          if (E += U, // Only one means `totalWidth` is the final width
          D === 0 && E <= l.value || N === D - 1 && E + B(D) <= l.value) {
            $(D), p.value = null;
            break;
          } else if (E + y.value > l.value) {
            $(N - 1), p.value = E - U - d.value + f.value;
            break;
          }
        }
        e.suffix && B(0) + d.value > l.value && (p.value = null);
      }
    }), function() {
      var E = g.value && !!P.value.length, j = e.itemComponent, D = e.renderRawItem, N = e.renderRawRest, U = e.renderRest, L = e.prefixCls, ne = L === void 0 ? "rc-overflow" : L, ie = e.suffix, fe = e.component, $e = fe === void 0 ? "div" : fe, ze = r.class, Te = r.style, ge = B_(r, ["class", "style"]), Re = {};
      p.value !== null && O.value && (Re = {
        position: "absolute",
        left: "".concat(p.value, "px"),
        top: 0
      });
      var tt = {
        prefixCls: C.value,
        responsive: O.value,
        component: j,
        invalidate: w.value
      }, ft = D ? function(st, bt) {
        var nt = T(st, bt);
        return h(ku, {
          key: nt,
          value: b(b({}, tt), {
            order: bt,
            item: st,
            itemKey: nt,
            registerSize: V,
            display: bt <= v.value
          })
        }, {
          default: function() {
            return [D(st, bt)];
          }
        });
      } : function(st, bt) {
        var nt = T(st, bt);
        return h(Li, H(H({}, tt), {}, {
          order: bt,
          key: nt,
          item: st,
          renderItem: M.value,
          itemKey: nt,
          registerSize: V,
          display: bt <= v.value
        }), null);
      }, A, Y = {
        order: E ? v.value : Number.MAX_SAFE_INTEGER,
        className: "".concat(C.value, "-rest"),
        registerSize: I,
        display: E
      };
      if (N)
        N && (A = h(ku, {
          value: b(b({}, tt), Y)
        }, {
          default: function() {
            return [N(P.value)];
          }
        }));
      else {
        var X = U || j_;
        A = h(Li, H(H({}, tt), Y), {
          default: function() {
            return [typeof X == "function" ? X(P.value) : X];
          }
        });
      }
      var Ee = h($e, H({
        class: Z(!w.value && ne, ze),
        style: Te
      }, ge), {
        default: function() {
          return [x.value.map(ft), _.value ? A : null, ie && h(Li, H(H({}, tt), {}, {
            order: v.value,
            class: "".concat(C.value, "-suffix"),
            registerSize: F,
            display: !0,
            style: Re
          }), {
            default: function() {
              return [ie];
            }
          })];
        }
      });
      return h(Fs, {
        disabled: !O.value,
        onResize: k
      }, {
        default: function() {
          return [Ee];
        }
      });
    };
  }
});
el.Item = F_;
el.RESPONSIVE = Ig;
el.INVALIDATE = Mg;
const L_ = el;
var H_ = {
  id: i.string,
  prefixCls: i.string,
  values: i.array,
  open: i.looseBool,
  searchValue: i.string,
  inputRef: i.any,
  placeholder: i.any,
  disabled: i.looseBool,
  mode: i.string,
  showSearch: i.looseBool,
  autofocus: i.looseBool,
  autocomplete: i.string,
  accessibilityIndex: i.number,
  tabindex: i.oneOfType([i.number, i.string]),
  removeIcon: i.VNodeChild,
  choiceTransitionName: i.string,
  maxTagCount: i.oneOfType([i.number, i.string]),
  maxTagTextLength: i.number,
  maxTagPlaceholder: i.any.def(function() {
    return function(t) {
      return "+ ".concat(t.length, " ...");
    };
  }),
  tagRender: i.func,
  onToggleOpen: {
    type: Function
  },
  onSelect: i.func,
  onInputChange: i.func,
  onInputPaste: i.func,
  onInputKeyDown: i.func,
  onInputMouseDown: i.func,
  onInputCompositionStart: i.func,
  onInputCompositionEnd: i.func
}, Rd = function(e) {
  e.preventDefault(), e.stopPropagation();
}, z_ = K({
  name: "MultipleSelectSelector",
  inheritAttrs: !1,
  props: H_,
  setup: function(e) {
    var n = Q(), r = Q(0), a = Q(!1), o = W(function() {
      return "".concat(e.prefixCls, "-selection");
    }), s = W(function() {
      return e.open || e.mode === "tags" ? e.searchValue : "";
    }), l = W(function() {
      return e.mode === "tags" || e.showSearch && (e.open || a.value);
    });
    Dt(function() {
      it(s, function() {
        r.value = n.value.scrollWidth;
      }, {
        flush: "post",
        immediate: !0
      });
    });
    function u(p, m, v, g) {
      return h("span", {
        class: Z("".concat(o.value, "-item"), S({}, "".concat(o.value, "-item-disabled"), m))
      }, [h("span", {
        class: "".concat(o.value, "-item-content")
      }, [p]), v && h(cs, {
        class: "".concat(o.value, "-item-remove"),
        onMousedown: Rd,
        onClick: g,
        customizeIcon: e.removeIcon
      }, {
        default: function() {
          return [Me("×")];
        }
      })]);
    }
    function c(p, m, v, g, C) {
      var y = function(w) {
        Rd(w), e.onToggleOpen(!open);
      };
      return h("span", {
        onMousedown: y
      }, [e.tagRender({
        label: m,
        value: p,
        disabled: v,
        closable: g,
        onClose: C
      })]);
    }
    function f(p) {
      var m = p.disabled, v = p.label, g = p.value, C = !e.disabled && !m, y = v;
      if (typeof e.maxTagTextLength == "number" && (typeof v == "string" || typeof v == "number")) {
        var O = String(y);
        O.length > e.maxTagTextLength && (y = "".concat(O.slice(0, e.maxTagTextLength), "..."));
      }
      var w = function(x) {
        x && x.stopPropagation(), e.onSelect(g, {
          selected: !1
        });
      };
      return typeof e.tagRender == "function" ? c(g, y, m, C, w) : u(y, m, C, w);
    }
    function d(p) {
      var m = e.maxTagPlaceholder, v = m === void 0 ? function(C) {
        return "+ ".concat(C.length, " ...");
      } : m, g = typeof v == "function" ? v(p) : v;
      return u(g, !1);
    }
    return function() {
      var p = e.id, m = e.prefixCls, v = e.values, g = e.open, C = e.inputRef, y = e.placeholder, O = e.disabled, w = e.autofocus, _ = e.autocomplete, x = e.accessibilityIndex, P = e.tabindex, T = e.onInputChange, M = e.onInputPaste, $ = e.onInputKeyDown, k = e.onInputMouseDown, V = e.onInputCompositionStart, I = e.onInputCompositionEnd, F = h("div", {
        class: "".concat(o.value, "-search"),
        style: {
          width: r.value + "px"
        },
        key: "input"
      }, [h(Dg, {
        inputRef: C,
        open: g,
        prefixCls: m,
        id: p,
        inputElement: null,
        disabled: O,
        autofocus: w,
        autocomplete: _,
        editable: l.value,
        accessibilityIndex: x,
        value: s.value,
        onKeydown: $,
        onMousedown: k,
        onChange: T,
        onPaste: M,
        onCompositionstart: V,
        onCompositionend: I,
        tabindex: P,
        attrs: Mc(e, !0),
        onFocus: function() {
          return a.value = !0;
        },
        onBlur: function() {
          return a.value = !1;
        }
      }, null), h("span", {
        ref: n,
        class: "".concat(o.value, "-search-mirror"),
        "aria-hidden": !0
      }, [s.value, Me(" ")])]), B = h(L_, {
        prefixCls: "".concat(o.value, "-overflow"),
        data: v,
        renderItem: f,
        renderRest: d,
        suffix: F,
        itemKey: "key",
        maxCount: e.maxTagCount,
        key: "overflow"
      }, null);
      return h(mt, null, [B, !v.length && !s.value && h("span", {
        class: "".concat(o.value, "-placeholder")
      }, [y])]);
    };
  }
});
const Y_ = z_;
var W_ = {
  inputElement: i.any,
  id: i.string,
  prefixCls: i.string,
  values: i.array,
  open: i.looseBool,
  searchValue: i.string,
  inputRef: i.any,
  placeholder: i.any,
  disabled: i.looseBool,
  mode: i.string,
  showSearch: i.looseBool,
  autofocus: i.looseBool,
  autocomplete: i.string,
  accessibilityIndex: i.number,
  tabindex: i.oneOfType([i.number, i.string]),
  activeValue: i.string,
  backfill: i.looseBool,
  onInputChange: i.func,
  onInputPaste: i.func,
  onInputKeyDown: i.func,
  onInputMouseDown: i.func,
  onInputCompositionStart: i.func,
  onInputCompositionEnd: i.func
}, Bc = K({
  name: "SingleSelector",
  setup: function(e) {
    var n = Q(!1), r = W(function() {
      return e.mode === "combobox";
    }), a = W(function() {
      return r.value || e.showSearch;
    }), o = W(function() {
      var u = e.searchValue || "";
      return r.value && e.activeValue && !n.value && (u = e.activeValue), u;
    });
    it([r, function() {
      return e.activeValue;
    }], function() {
      r.value && (n.value = !1);
    }, {
      immediate: !0
    });
    var s = W(function() {
      return e.mode !== "combobox" && !e.open ? !1 : !!o.value;
    }), l = W(function() {
      var u = e.values[0];
      return u && (typeof u.label == "string" || typeof u.label == "number") ? u.label.toString() : void 0;
    });
    return function() {
      var u = e.inputElement, c = e.prefixCls, f = e.id, d = e.values, p = e.inputRef, m = e.disabled, v = e.autofocus, g = e.autocomplete, C = e.accessibilityIndex, y = e.open, O = e.placeholder, w = e.tabindex, _ = e.onInputKeyDown, x = e.onInputMouseDown, P = e.onInputChange, T = e.onInputPaste, M = e.onInputCompositionStart, $ = e.onInputCompositionEnd, k = d[0];
      return h(mt, null, [h("span", {
        class: "".concat(c, "-selection-search")
      }, [h(Dg, {
        inputRef: p,
        prefixCls: c,
        id: f,
        open: y,
        inputElement: u,
        disabled: m,
        autofocus: v,
        autocomplete: g,
        editable: a.value,
        accessibilityIndex: C,
        value: o.value,
        onKeydown: _,
        onMousedown: x,
        onChange: function(I) {
          n.value = !0, P(I);
        },
        onPaste: T,
        onCompositionstart: M,
        onCompositionend: $,
        tabindex: w,
        attrs: Mc(e, !0)
      }, null)]), !r.value && k && !s.value && h("span", {
        class: "".concat(c, "-selection-item"),
        title: l.value
      }, [h(mt, {
        key: k.key || k.value
      }, [k.label])]), !k && !s.value && h("span", {
        class: "".concat(c, "-selection-placeholder")
      }, [O])]);
    };
  }
});
Bc.props = W_;
Bc.inheritAttrs = !1;
const U_ = Bc;
function Ag() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, e = null, n;
  o0(function() {
    window.clearTimeout(n);
  });
  function r(a) {
    (a || e === null) && (e = a), window.clearTimeout(n), n = window.setTimeout(function() {
      e = null;
    }, t);
  }
  return [function() {
    return e;
  }, r];
}
var G_ = K({
  name: "Selector",
  inheritAttrs: !1,
  props: {
    id: i.string,
    prefixCls: i.string,
    showSearch: i.looseBool,
    open: i.looseBool,
    /** Display in the Selector value, it's not same as `value` prop */
    values: i.array,
    multiple: i.looseBool,
    mode: i.string,
    searchValue: i.string,
    activeValue: i.string,
    inputElement: i.any,
    autofocus: i.looseBool,
    accessibilityIndex: i.number,
    tabindex: i.oneOfType([i.number, i.string]),
    disabled: i.looseBool,
    placeholder: i.any,
    removeIcon: i.any,
    // Tags
    maxTagCount: i.oneOfType([i.number, i.string]),
    maxTagTextLength: i.number,
    maxTagPlaceholder: i.any,
    tagRender: i.func,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: i.looseBool,
    // Motion
    choiceTransitionName: i.string,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: i.func,
    onSearchSubmit: i.func,
    onSelect: i.func,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: i.func
  },
  setup: function(e) {
    var n = Ea(), r = !1, a = Ag(0), o = ht(a, 2), s = o[0], l = o[1], u = function(w) {
      var _ = w.which;
      (_ === oe.UP || _ === oe.DOWN) && w.preventDefault(), e.onInputKeyDown && e.onInputKeyDown(w), _ === oe.ENTER && e.mode === "tags" && !r && !e.open && e.onSearchSubmit(w.target.value), [oe.SHIFT, oe.TAB, oe.BACKSPACE, oe.ESC].includes(_) || e.onToggleOpen(!0);
    }, c = function() {
      l(!0);
    }, f = null, d = function(w) {
      e.onSearch(w, !0, r) !== !1 && e.onToggleOpen(!0);
    }, p = function() {
      r = !0;
    }, m = function(w) {
      r = !1, e.mode !== "combobox" && d(w.target.value);
    }, v = function(w) {
      var _ = w.target.value;
      if (e.tokenWithEnter && f && /[\r\n]/.test(f)) {
        var x = f.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        _ = _.replace(x, f);
      }
      f = null, d(_);
    }, g = function(w) {
      var _ = w.clipboardData, x = _.getData("text");
      f = x;
    }, C = function(w) {
      var _ = w.target;
      if (_ !== n.current) {
        var x = document.body.style.msTouchAction !== void 0;
        x ? setTimeout(function() {
          n.current.focus();
        }) : n.current.focus();
      }
    }, y = function(w) {
      var _ = s();
      w.target !== n.current && !_ && w.preventDefault(), (e.mode !== "combobox" && (!e.showSearch || !_) || !e.open) && (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
    };
    return {
      focus: function() {
        n.current.focus();
      },
      blur: function() {
        n.current.blur();
      },
      onMousedown: y,
      onClick: C,
      onInputPaste: g,
      inputRef: n,
      onInternalInputKeyDown: u,
      onInternalInputMouseDown: c,
      onInputChange: v,
      onInputCompositionEnd: m,
      onInputCompositionStart: p
    };
  },
  render: function() {
    var e = this.$props, n = e.prefixCls, r = e.domRef, a = e.multiple, o = this.onMousedown, s = this.onClick, l = this.inputRef, u = this.onInputPaste, c = this.onInternalInputKeyDown, f = this.onInternalInputMouseDown, d = this.onInputChange, p = this.onInputCompositionStart, m = this.onInputCompositionEnd, v = {
      inputRef: l,
      onInputKeyDown: c,
      onInputMouseDown: f,
      onInputChange: d,
      onInputPaste: u,
      onInputCompositionStart: p,
      onInputCompositionEnd: m
    }, g = a ? h(Y_, H(H({}, this.$props), v), null) : h(U_, H(H({}, this.$props), v), null);
    return h("div", {
      ref: r,
      class: "".concat(n, "-selector"),
      onClick: s,
      onMousedown: o
    }, [g]);
  }
});
const K_ = G_;
function io(t, e) {
  return t ? t.contains(e) : !1;
}
var Ng = ["moz", "ms", "webkit"];
function q_() {
  var t = 0;
  return function(e) {
    var n = new Date().getTime(), r = Math.max(0, 16 - (n - t)), a = window.setTimeout(function() {
      e(n + r);
    }, r);
    return t = n + r, a;
  };
}
function X_() {
  if (typeof window > "u")
    return function() {
    };
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame.bind(window);
  var t = Ng.filter(function(e) {
    return "".concat(e, "RequestAnimationFrame") in window;
  })[0];
  return t ? window["".concat(t, "RequestAnimationFrame")] : q_();
}
function Z_(t) {
  if (typeof window > "u")
    return null;
  if (window.cancelAnimationFrame)
    return window.cancelAnimationFrame(t);
  var e = Ng.filter(function(n) {
    return "".concat(n, "CancelAnimationFrame") in window || "".concat(n, "CancelRequestAnimationFrame") in window;
  })[0];
  return e ? (window["".concat(e, "CancelAnimationFrame")] || window["".concat(e, "CancelRequestAnimationFrame")]).call(this, t) : clearTimeout(t);
}
var Fd = X_(), Q_ = function(e) {
  return Z_(e.id);
}, J_ = function(e, n) {
  var r = Date.now();
  function a() {
    Date.now() - r >= n ? e.call() : o.id = Fd(a);
  }
  var o = {
    id: Fd(a)
  };
  return o;
};
function Bd(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jd(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bd(Object(n), !0).forEach(function(r) {
      ex(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bd(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Du(t) {
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Du(t);
}
function ex(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Qa, tx = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function fs() {
  if (Qa !== void 0)
    return Qa;
  Qa = "";
  var t = document.createElement("p").style, e = "Transform";
  for (var n in tx)
    n + e in t && (Qa = n);
  return Qa;
}
function Vg() {
  return fs() ? "".concat(fs(), "TransitionProperty") : "transitionProperty";
}
function tl() {
  return fs() ? "".concat(fs(), "Transform") : "transform";
}
function Ld(t, e) {
  var n = Vg();
  n && (t.style[n] = e, n !== "transitionProperty" && (t.style.transitionProperty = e));
}
function xl(t, e) {
  var n = tl();
  n && (t.style[n] = e, n !== "transform" && (t.style.transform = e));
}
function nx(t) {
  return t.style.transitionProperty || t.style[Vg()];
}
function rx(t) {
  var e = window.getComputedStyle(t, null), n = e.getPropertyValue("transform") || e.getPropertyValue(tl());
  if (n && n !== "none") {
    var r = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(r[12] || r[4], 0),
      y: parseFloat(r[13] || r[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var ax = /matrix\((.*)\)/, ox = /matrix3d\((.*)\)/;
function ix(t, e) {
  var n = window.getComputedStyle(t, null), r = n.getPropertyValue("transform") || n.getPropertyValue(tl());
  if (r && r !== "none") {
    var a, o = r.match(ax);
    if (o)
      o = o[1], a = o.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), a[4] = e.x, a[5] = e.y, xl(t, "matrix(".concat(a.join(","), ")"));
    else {
      var s = r.match(ox)[1];
      a = s.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), a[12] = e.x, a[13] = e.y, xl(t, "matrix3d(".concat(a.join(","), ")"));
    }
  } else
    xl(t, "translateX(".concat(e.x, "px) translateY(").concat(e.y, "px) translateZ(0)"));
}
var sx = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, jo;
function Hd(t) {
  var e = t.style.display;
  t.style.display = "none", t.offsetHeight, t.style.display = e;
}
function ma(t, e, n) {
  var r = n;
  if (Du(e) === "object") {
    for (var a in e)
      e.hasOwnProperty(a) && ma(t, a, e[a]);
    return;
  }
  if (typeof r < "u") {
    typeof r == "number" && (r = "".concat(r, "px")), t.style[e] = r;
    return;
  }
  return jo(t, e);
}
function lx(t) {
  var e, n, r, a = t.ownerDocument, o = a.body, s = a && a.documentElement;
  return e = t.getBoundingClientRect(), n = Math.floor(e.left), r = Math.floor(e.top), n -= s.clientLeft || o.clientLeft || 0, r -= s.clientTop || o.clientTop || 0, {
    left: n,
    top: r
  };
}
function Rg(t, e) {
  var n = t["page".concat(e ? "Y" : "X", "Offset")], r = "scroll".concat(e ? "Top" : "Left");
  if (typeof n != "number") {
    var a = t.document;
    n = a.documentElement[r], typeof n != "number" && (n = a.body[r]);
  }
  return n;
}
function Fg(t) {
  return Rg(t);
}
function Bg(t) {
  return Rg(t, !0);
}
function Eo(t) {
  var e = lx(t), n = t.ownerDocument, r = n.defaultView || n.parentWindow;
  return e.left += Fg(r), e.top += Bg(r), e;
}
function jc(t) {
  return t != null && t == t.window;
}
function jg(t) {
  return jc(t) ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
}
function ux(t, e, n) {
  var r = n, a = "", o = jg(t);
  return r = r || o.defaultView.getComputedStyle(t, null), r && (a = r.getPropertyValue(e) || r[e]), a;
}
var cx = new RegExp("^(".concat(sx, ")(?!px)[a-z%]+$"), "i"), fx = /^(top|right|bottom|left)$/, Pl = "currentStyle", Tl = "runtimeStyle", Tr = "left", dx = "px";
function hx(t, e) {
  var n = t[Pl] && t[Pl][e];
  if (cx.test(n) && !fx.test(e)) {
    var r = t.style, a = r[Tr], o = t[Tl][Tr];
    t[Tl][Tr] = t[Pl][Tr], r[Tr] = e === "fontSize" ? "1em" : n || 0, n = r.pixelLeft + dx, r[Tr] = a, t[Tl][Tr] = o;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (jo = window.getComputedStyle ? ux : hx);
function ri(t, e) {
  return t === "left" ? e.useCssRight ? "right" : t : e.useCssBottom ? "bottom" : t;
}
function zd(t) {
  if (t === "left")
    return "right";
  if (t === "right")
    return "left";
  if (t === "top")
    return "bottom";
  if (t === "bottom")
    return "top";
}
function Yd(t, e, n) {
  ma(t, "position") === "static" && (t.style.position = "relative");
  var r = -999, a = -999, o = ri("left", n), s = ri("top", n), l = zd(o), u = zd(s);
  o !== "left" && (r = 999), s !== "top" && (a = 999);
  var c = "", f = Eo(t);
  ("left" in e || "top" in e) && (c = nx(t) || "", Ld(t, "none")), "left" in e && (t.style[l] = "", t.style[o] = "".concat(r, "px")), "top" in e && (t.style[u] = "", t.style[s] = "".concat(a, "px")), Hd(t);
  var d = Eo(t), p = {};
  for (var m in e)
    if (e.hasOwnProperty(m)) {
      var v = ri(m, n), g = m === "left" ? r : a, C = f[m] - d[m];
      v === m ? p[v] = g + C : p[v] = g - C;
    }
  ma(t, p), Hd(t), ("left" in e || "top" in e) && Ld(t, c);
  var y = {};
  for (var O in e)
    if (e.hasOwnProperty(O)) {
      var w = ri(O, n), _ = e[O] - f[O];
      O === w ? y[w] = p[w] + _ : y[w] = p[w] - _;
    }
  ma(t, y);
}
function px(t, e) {
  var n = Eo(t), r = rx(t), a = {
    x: r.x,
    y: r.y
  };
  "left" in e && (a.x = r.x + e.left - n.left), "top" in e && (a.y = r.y + e.top - n.top), ix(t, a);
}
function vx(t, e, n) {
  if (n.ignoreShake) {
    var r = Eo(t), a = r.left.toFixed(0), o = r.top.toFixed(0), s = e.left.toFixed(0), l = e.top.toFixed(0);
    if (a === s && o === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? Yd(t, e, n) : n.useCssTransform && tl() in document.body.style ? px(t, e) : Yd(t, e, n);
}
function Lc(t, e) {
  for (var n = 0; n < t.length; n++)
    e(t[n]);
}
function Lg(t) {
  return jo(t, "boxSizing") === "border-box";
}
var mx = ["margin", "border", "padding"], $u = -1, gx = 2, Iu = 1, bx = 0;
function yx(t, e, n) {
  var r = {}, a = t.style, o;
  for (o in e)
    e.hasOwnProperty(o) && (r[o] = a[o], a[o] = e[o]);
  n.call(t);
  for (o in e)
    e.hasOwnProperty(o) && (a[o] = r[o]);
}
function so(t, e, n) {
  var r = 0, a, o, s;
  for (o = 0; o < e.length; o++)
    if (a = e[o], a)
      for (s = 0; s < n.length; s++) {
        var l = void 0;
        a === "border" ? l = "".concat(a).concat(n[s], "Width") : l = a + n[s], r += parseFloat(jo(t, l)) || 0;
      }
  return r;
}
var kn = {
  getParent: function(e) {
    var n = e;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Lc(["Width", "Height"], function(t) {
  kn["doc".concat(t)] = function(e) {
    var n = e.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(t)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(t)],
      kn["viewport".concat(t)](n)
    );
  }, kn["viewport".concat(t)] = function(e) {
    var n = "client".concat(t), r = e.document, a = r.body, o = r.documentElement, s = o[n];
    return r.compatMode === "CSS1Compat" && s || a && a[n] || s;
  };
});
function Wd(t, e, n) {
  var r = n;
  if (jc(t))
    return e === "width" ? kn.viewportWidth(t) : kn.viewportHeight(t);
  if (t.nodeType === 9)
    return e === "width" ? kn.docWidth(t) : kn.docHeight(t);
  var a = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"], o = Math.floor(e === "width" ? t.getBoundingClientRect().width : t.getBoundingClientRect().height), s = Lg(t), l = 0;
  (o == null || o <= 0) && (o = void 0, l = jo(t, e), (l == null || Number(l) < 0) && (l = t.style[e] || 0), l = Math.floor(parseFloat(l)) || 0), r === void 0 && (r = s ? Iu : $u);
  var u = o !== void 0 || s, c = o || l;
  return r === $u ? u ? c - so(t, ["border", "padding"], a) : l : u ? r === Iu ? c : c + (r === gx ? -so(t, ["border"], a) : so(t, ["margin"], a)) : l + so(t, mx.slice(r), a);
}
var Cx = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Ud() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, a = e[0];
  return a.offsetWidth !== 0 ? r = Wd.apply(void 0, e) : yx(a, Cx, function() {
    r = Wd.apply(void 0, e);
  }), r;
}
Lc(["width", "height"], function(t) {
  var e = t.charAt(0).toUpperCase() + t.slice(1);
  kn["outer".concat(e)] = function(r, a) {
    return r && Ud(r, t, a ? bx : Iu);
  };
  var n = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  kn[t] = function(r, a) {
    var o = a;
    if (o !== void 0) {
      if (r) {
        var s = Lg(r);
        return s && (o += so(r, ["padding", "border"], n)), ma(r, t, o);
      }
      return;
    }
    return r && Ud(r, t, $u);
  };
});
function Hg(t, e) {
  for (var n in e)
    e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
var ve = {
  getWindow: function(e) {
    if (e && e.document && e.setTimeout)
      return e;
    var n = e.ownerDocument || e;
    return n.defaultView || n.parentWindow;
  },
  getDocument: jg,
  offset: function(e, n, r) {
    if (typeof n < "u")
      vx(e, n, r || {});
    else
      return Eo(e);
  },
  isWindow: jc,
  each: Lc,
  css: ma,
  clone: function(e) {
    var n, r = {};
    for (n in e)
      e.hasOwnProperty(n) && (r[n] = e[n]);
    var a = e.overflow;
    if (a)
      for (n in e)
        e.hasOwnProperty(n) && (r.overflow[n] = e.overflow[n]);
    return r;
  },
  mix: Hg,
  getWindowScrollLeft: function(e) {
    return Fg(e);
  },
  getWindowScrollTop: function(e) {
    return Bg(e);
  },
  merge: function() {
    for (var e = {}, n = 0; n < arguments.length; n++)
      ve.mix(e, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return e;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Hg(ve, kn);
var El = ve.getParent;
function Mu(t) {
  if (ve.isWindow(t) || t.nodeType === 9)
    return null;
  var e = ve.getDocument(t), n = e.body, r, a = ve.css(t, "position"), o = a === "fixed" || a === "absolute";
  if (!o)
    return t.nodeName.toLowerCase() === "html" ? null : El(t);
  for (r = El(t); r && r !== n && r.nodeType !== 9; r = El(r))
    if (a = ve.css(r, "position"), a !== "static")
      return r;
  return null;
}
var Gd = ve.getParent;
function wx(t) {
  if (ve.isWindow(t) || t.nodeType === 9)
    return !1;
  var e = ve.getDocument(t), n = e.body, r = null;
  for (
    r = Gd(t);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    r && r !== n && r !== e;
    r = Gd(r)
  ) {
    var a = ve.css(r, "position");
    if (a === "fixed")
      return !0;
  }
  return !1;
}
function Hc(t, e) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, r = Mu(t), a = ve.getDocument(t), o = a.defaultView || a.parentWindow, s = a.body, l = a.documentElement; r; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    r !== s && r !== l && ve.css(r, "overflow") !== "visible") {
      var u = ve.offset(r);
      u.left += r.clientLeft, u.top += r.clientTop, n.top = Math.max(n.top, u.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        u.left + r.clientWidth
      ), n.bottom = Math.min(n.bottom, u.top + r.clientHeight), n.left = Math.max(n.left, u.left);
    } else if (r === s || r === l)
      break;
    r = Mu(r);
  }
  var c = null;
  if (!ve.isWindow(t) && t.nodeType !== 9) {
    c = t.style.position;
    var f = ve.css(t, "position");
    f === "absolute" && (t.style.position = "fixed");
  }
  var d = ve.getWindowScrollLeft(o), p = ve.getWindowScrollTop(o), m = ve.viewportWidth(o), v = ve.viewportHeight(o), g = l.scrollWidth, C = l.scrollHeight, y = window.getComputedStyle(s);
  if (y.overflowX === "hidden" && (g = o.innerWidth), y.overflowY === "hidden" && (C = o.innerHeight), t.style && (t.style.position = c), e || wx(t))
    n.left = Math.max(n.left, d), n.top = Math.max(n.top, p), n.right = Math.min(n.right, d + m), n.bottom = Math.min(n.bottom, p + v);
  else {
    var O = Math.max(g, d + m);
    n.right = Math.min(n.right, O);
    var w = Math.max(C, p + v);
    n.bottom = Math.min(n.bottom, w);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Ox(t, e, n, r) {
  var a = ve.clone(t), o = {
    width: e.width,
    height: e.height
  };
  return r.adjustX && a.left < n.left && (a.left = n.left), r.resizeWidth && a.left >= n.left && a.left + o.width > n.right && (o.width -= a.left + o.width - n.right), r.adjustX && a.left + o.width > n.right && (a.left = Math.max(n.right - o.width, n.left)), r.adjustY && a.top < n.top && (a.top = n.top), r.resizeHeight && a.top >= n.top && a.top + o.height > n.bottom && (o.height -= a.top + o.height - n.bottom), r.adjustY && a.top + o.height > n.bottom && (a.top = Math.max(n.bottom - o.height, n.top)), ve.mix(a, o);
}
function zc(t) {
  var e, n, r;
  if (!ve.isWindow(t) && t.nodeType !== 9)
    e = ve.offset(t), n = ve.outerWidth(t), r = ve.outerHeight(t);
  else {
    var a = ve.getWindow(t);
    e = {
      left: ve.getWindowScrollLeft(a),
      top: ve.getWindowScrollTop(a)
    }, n = ve.viewportWidth(a), r = ve.viewportHeight(a);
  }
  return e.width = n, e.height = r, e;
}
function Kd(t, e) {
  var n = e.charAt(0), r = e.charAt(1), a = t.width, o = t.height, s = t.left, l = t.top;
  return n === "c" ? l += o / 2 : n === "b" && (l += o), r === "c" ? s += a / 2 : r === "r" && (s += a), {
    left: s,
    top: l
  };
}
function ai(t, e, n, r, a) {
  var o = Kd(e, n[1]), s = Kd(t, n[0]), l = [s.left - o.left, s.top - o.top];
  return {
    left: Math.round(t.left - l[0] + r[0] - a[0]),
    top: Math.round(t.top - l[1] + r[1] - a[1])
  };
}
function qd(t, e, n) {
  return t.left < n.left || t.left + e.width > n.right;
}
function Xd(t, e, n) {
  return t.top < n.top || t.top + e.height > n.bottom;
}
function Sx(t, e, n) {
  return t.left > n.right || t.left + e.width < n.left;
}
function _x(t, e, n) {
  return t.top > n.bottom || t.top + e.height < n.top;
}
function oi(t, e, n) {
  var r = [];
  return ve.each(t, function(a) {
    r.push(a.replace(e, function(o) {
      return n[o];
    }));
  }), r;
}
function ii(t, e) {
  return t[e] = -t[e], t;
}
function Zd(t, e) {
  var n;
  return /%$/.test(t) ? n = parseInt(t.substring(0, t.length - 1), 10) / 100 * e : n = parseInt(t, 10), n || 0;
}
function Qd(t, e) {
  t[0] = Zd(t[0], e.width), t[1] = Zd(t[1], e.height);
}
function zg(t, e, n, r) {
  var a = n.points, o = n.offset || [0, 0], s = n.targetOffset || [0, 0], l = n.overflow, u = n.source || t;
  o = [].concat(o), s = [].concat(s), l = l || {};
  var c = {}, f = 0, d = !!(l && l.alwaysByViewport), p = Hc(u, d), m = zc(u);
  Qd(o, m), Qd(s, e);
  var v = ai(m, e, a, o, s), g = ve.merge(m, v);
  if (p && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && qd(v, m, p)) {
      var C = oi(a, /[lr]/gi, {
        l: "r",
        r: "l"
      }), y = ii(o, 0), O = ii(s, 0), w = ai(m, e, C, y, O);
      Sx(w, m, p) || (f = 1, a = C, o = y, s = O);
    }
    if (l.adjustY && Xd(v, m, p)) {
      var _ = oi(a, /[tb]/gi, {
        t: "b",
        b: "t"
      }), x = ii(o, 1), P = ii(s, 1), T = ai(m, e, _, x, P);
      _x(T, m, p) || (f = 1, a = _, o = x, s = P);
    }
    f && (v = ai(m, e, a, o, s), ve.mix(g, v));
    var M = qd(v, m, p), $ = Xd(v, m, p);
    if (M || $) {
      var k = a;
      M && (k = oi(a, /[lr]/gi, {
        l: "r",
        r: "l"
      })), $ && (k = oi(a, /[tb]/gi, {
        t: "b",
        b: "t"
      })), a = k, o = n.offset || [0, 0], s = n.targetOffset || [0, 0];
    }
    c.adjustX = l.adjustX && M, c.adjustY = l.adjustY && $, (c.adjustX || c.adjustY) && (g = Ox(v, m, p, c));
  }
  return g.width !== m.width && ve.css(u, "width", ve.width(u) + g.width - m.width), g.height !== m.height && ve.css(u, "height", ve.height(u) + g.height - m.height), ve.offset(u, {
    left: g.left,
    top: g.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: a,
    offset: o,
    targetOffset: s,
    overflow: c
  };
}
function xx(t, e) {
  var n = Hc(t, e), r = zc(t);
  return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
}
function Yc(t, e, n) {
  var r = n.target || e, a = zc(r), o = !xx(r, n.overflow && n.overflow.alwaysByViewport);
  return zg(t, a, n, o);
}
Yc.__getOffsetParent = Mu;
Yc.__getVisibleRectForElement = Hc;
function Px(t, e, n) {
  var r, a, o = ve.getDocument(t), s = o.defaultView || o.parentWindow, l = ve.getWindowScrollLeft(s), u = ve.getWindowScrollTop(s), c = ve.viewportWidth(s), f = ve.viewportHeight(s);
  "pageX" in e ? r = e.pageX : r = l + e.clientX, "pageY" in e ? a = e.pageY : a = u + e.clientY;
  var d = {
    left: r,
    top: a,
    width: 0,
    height: 0
  }, p = r >= 0 && r <= l + c && a >= 0 && a <= u + f, m = [n.points[0], "cc"];
  return zg(t, d, jd(jd({}, n), {}, {
    points: m
  }), p);
}
const Tx = function(t) {
  if (!t)
    return !1;
  if (t.offsetParent)
    return !0;
  if (t.getBBox) {
    var e = t.getBBox();
    if (e.width || e.height)
      return !0;
  }
  if (t.getBoundingClientRect) {
    var n = t.getBoundingClientRect();
    if (n.width || n.height)
      return !0;
  }
  return !1;
};
function Ex(t, e) {
  return t === e ? !0 : !t || !e ? !1 : "pageX" in e && "pageY" in e ? t.pageX === e.pageX && t.pageY === e.pageY : "clientX" in e && "clientY" in e ? t.clientX === e.clientX && t.clientY === e.clientY : !1;
}
function kx(t, e) {
  t !== document.activeElement && io(e, t) && typeof t.focus == "function" && t.focus();
}
function Jd(t, e) {
  var n = null, r = null;
  function a(s) {
    var l = ht(s, 1), u = l[0].target;
    if (document.documentElement.contains(u)) {
      var c = u.getBoundingClientRect(), f = c.width, d = c.height, p = Math.floor(f), m = Math.floor(d);
      (n !== p || r !== m) && Promise.resolve().then(function() {
        e({
          width: p,
          height: m
        });
      }), n = p, r = m;
    }
  }
  var o = new sc(a);
  return t && o.observe(t), function() {
    o.disconnect();
  };
}
const Dx = function(t, e) {
  var n = !1, r = null;
  function a() {
    window.clearTimeout(r);
  }
  function o(s) {
    if (!n || s === !0) {
      if (t() === !1)
        return;
      n = !0, a(), r = window.setTimeout(function() {
        n = !1;
      }, e.value);
    } else
      a(), r = window.setTimeout(function() {
        n = !1, o();
      }, e.value);
  }
  return [o, function() {
    n = !1, a();
  }];
};
var $x = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function eh(t) {
  return typeof t != "function" ? null : t();
}
function th(t) {
  return Ye(t) !== "object" || !t ? null : t;
}
const nh = K({
  name: "Align",
  props: $x,
  emits: ["align"],
  setup: function(e, n) {
    var r = n.expose, a = n.slots, o = Q({}), s = Q(), l = W(function() {
      return {
        disabled: e.disabled,
        target: e.target,
        onAlign: e.onAlign
      };
    }), u = Dx(function() {
      var C = l.value, y = C.disabled, O = C.target, w = C.onAlign;
      if (!y && O && s.value && s.value.$el) {
        var _ = s.value.$el, x, P = eh(O), T = th(O);
        o.value.element = P, o.value.point = T;
        var M = document, $ = M.activeElement;
        return P && Tx(P) ? x = Yc(_, P, e.align) : T && (x = Px(_, T, e.align)), kx($, _), w && x && w(_, x), !0;
      }
      return !1;
    }, W(function() {
      return e.monitorBufferTime;
    })), c = ht(u, 2), f = c[0], d = c[1], p = Q({
      cancel: function() {
      }
    }), m = Q({
      cancel: function() {
      }
    }), v = function() {
      var y = e.target, O = eh(y), w = th(y);
      s.value && s.value.$el !== m.value.element && (m.value.cancel(), m.value.element = s.value.$el, m.value.cancel = Jd(s.value.$el, f)), (o.value.element !== O || !Ex(o.value.point, w)) && (f(), p.value.element !== O && (p.value.cancel(), p.value.element = O, p.value.cancel = Jd(O, f)));
    };
    Dt(function() {
      v();
    }), Ds(function() {
      v();
    }), it(function() {
      return e.disabled;
    }, function(C) {
      C ? d() : f();
    }, {
      flush: "post"
    });
    var g = Q(null);
    return it(function() {
      return e.monitorWindowResize;
    }, function(C) {
      C ? g.value || (g.value = oo(window, "resize", f)) : g.value && (g.value.remove(), g.value = null);
    }, {
      flush: "post"
    }), $s(function() {
      p.value.cancel(), m.value.cancel(), g.value && g.value.remove(), d();
    }), r({
      forceAlign: function() {
        return f(!0);
      }
    }), function() {
      var C = a == null ? void 0 : a.default();
      return C ? je(C[0], {
        ref: s
      }, !0, !0) : C && C[0];
    };
  }
}), Yg = {
  name: "LazyRenderBox",
  props: {
    visible: i.looseBool,
    hiddenClassName: i.string
  },
  render: function() {
    var e = this.$props.hiddenClassName, n = et(this);
    return e || n && n.length > 1 || n && n[0] && n[0].type === rc ? h("div", null, [n]) : n && n[0];
  }
}, rh = {
  props: {
    hiddenClassName: i.string.def(""),
    prefixCls: i.string,
    visible: i.looseBool
  },
  render: function() {
    var e = this, n, r, a = this.$props, o = a.prefixCls, s = a.visible, l = a.hiddenClassName;
    return h("div", {
      class: s ? "" : l
    }, [h(Yg, {
      class: "".concat(o, "-content"),
      visible: s
    }, {
      default: function() {
        return [(r = (n = e.$slots).default) === null || r === void 0 ? void 0 : r.call(n)];
      }
    })]);
  }
}, Ce = {
  methods: {
    setState: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        var a = this.getDerivedStateFromProps(me(this), b(b({}, this.$data), r));
        if (a === null)
          return;
        r = b(b({}, r), a || {});
      }
      b(this.$data, r), this._.isMounted && this.$forceUpdate(), Le(function() {
        n && n();
      });
    },
    __emit: function() {
      var e = [].slice.call(arguments, 0), n = e[0];
      n = "on".concat(n[0].toUpperCase()).concat(n.substring(1));
      var r = this.$props[n] || this.$attrs[n];
      if (e.length && r)
        if (Array.isArray(r))
          for (var a = 0, o = r.length; a < o; a++)
            r[a].apply(r, Je(e.slice(1)));
        else
          r.apply(void 0, Je(e.slice(1)));
    }
  }
};
function Ix(t, e, n) {
  return n ? t[0] === e[0] : t[0] === e[0] && t[1] === e[1];
}
function Mx(t, e, n) {
  var r = t[e] || {};
  return b(b({}, r), n);
}
function Ax(t, e, n, r) {
  var a = n.points;
  for (var o in t)
    if (t.hasOwnProperty(o) && Ix(t[o].points, a, r))
      return "".concat(e, "-placement-").concat(o);
  return "";
}
function si() {
}
function ah(t, e) {
  this[t] = e;
}
var Nx = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Wc = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (process.env.NODE_ENV === "test")
    return n;
  var r = b(e ? {
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    appearToClass: "".concat(e, "-appear ").concat(e, "-appear-active"),
    enterFromClass: "".concat(e, "-enter ").concat(e, "-enter-prepare"),
    // enterActiveClass: `antdv-base-transtion`,
    enterToClass: "".concat(e, "-enter ").concat(e, "-enter-active"),
    leaveFromClass: " ".concat(e, "-leave"),
    leaveActiveClass: "".concat(e, "-leave ").concat(e, "-leave-active"),
    leaveToClass: "".concat(e, "-leave ").concat(e, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
}, Wg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = b(e ? {
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: "".concat(e),
    appearToClass: "".concat(e, "-appear ").concat(e, "-appear-active"),
    enterFromClass: "".concat(e, "-appear ").concat(e, "-enter ").concat(e, "-appear-prepare ").concat(e, "-enter-prepare"),
    enterActiveClass: "".concat(e),
    enterToClass: "".concat(e, "-enter ").concat(e, "-appear ").concat(e, "-appear-active ").concat(e, "-enter-active"),
    leaveActiveClass: "".concat(e, " ").concat(e, "-leave"),
    leaveToClass: "".concat(e, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
}, ga = i0, Uc = Qv;
process.env.NODE_ENV === "test" && (ga = K({
  name: "TransitionForTest",
  inheritAttrs: !1,
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = ac();
    return Ds(function() {
      var s = o.subTree.children[0];
      if (s && s.dirs && s.dirs[0]) {
        var l = s.dirs[0].value, u = s.dirs[0].oldValue;
        !l && l !== u && Le(function() {
          a.onAfterLeave && a.onAfterLeave(o.vnode.el);
        });
      }
    }), function() {
      var s;
      return (s = r.default) === null || s === void 0 ? void 0 : s.call(r);
    };
  }
}), Uc = K({
  name: "TransitionGroupForTest",
  inheritAttrs: !1,
  props: ["tag", "class"],
  setup: function(e, n) {
    var r = n.slots;
    return function() {
      var a, o = e.tag, s = Nx(e, ["tag"]), l = ((a = r.default) === null || a === void 0 ? void 0 : a.call(r)) || [];
      return o ? h(o, s, {
        default: function() {
          return [l];
        }
      }) : l;
    };
  }
}));
const Vx = {
  name: "VCTriggerPopup",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    visible: i.looseBool,
    getClassNameFromAlign: i.func,
    getRootDomNode: i.func,
    align: i.any,
    destroyPopupOnHide: i.looseBool,
    prefixCls: i.string,
    getContainer: i.func,
    transitionName: i.string,
    animation: i.any,
    maskAnimation: i.string,
    maskTransitionName: i.string,
    mask: i.looseBool,
    zIndex: i.number,
    popupClassName: i.any,
    popupStyle: i.object.def(function() {
      return {};
    }),
    stretch: i.string,
    point: i.shape({
      pageX: i.number,
      pageY: i.number
    }).loose
  },
  data: function() {
    return this.domEl = null, this.currentAlignClassName = void 0, this.transitionProps = {}, this.savePopupRef = ah.bind(this, "popupInstance"), this.saveAlignRef = ah.bind(this, "alignInstance"), {
      // Used for stretch
      stretchChecked: !1,
      targetWidth: void 0,
      targetHeight: void 0
    };
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.rootNode = e.getPopupDomNode(), e.setStretchSize();
    });
  },
  // 如添加会导致动画失效，如放开会导致快速输入时闪动 https://github.com/vueComponent/ant-design-vue/issues/1327，
  // 目前方案是保留动画，闪动问题(动画多次执行)进一步定位
  // beforeUpdate() {
  //   if (this.domEl && this.domEl.rcEndListener) {
  //     this.domEl.rcEndListener();
  //     this.domEl = null;
  //   }
  // },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      e.setStretchSize();
    });
  },
  methods: {
    onAlign: function(e, n) {
      var r = this.$props, a = r.getClassNameFromAlign(n);
      this.currentAlignClassName !== a && (this.currentAlignClassName = a, e.className = this.getClassName(a, e.className));
      var o = this.$attrs.onaAlign;
      o && o(e, n);
    },
    // Record size if stretch needed
    setStretchSize: function() {
      var e = this.$props, n = e.stretch, r = e.getRootDomNode, a = e.visible, o = this.$data, s = o.stretchChecked, l = o.targetHeight, u = o.targetWidth;
      if (!n || !a) {
        s && this.setState({
          stretchChecked: !1
        });
        return;
      }
      var c = r();
      if (c) {
        var f = c.offsetHeight, d = c.offsetWidth;
        (l !== f || u !== d || !s) && this.setState({
          stretchChecked: !0,
          targetHeight: f,
          targetWidth: d
        });
      }
    },
    getPopupDomNode: function() {
      return Yt(this.popupInstance);
    },
    getTargetElement: function() {
      return this.$props.getRootDomNode();
    },
    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    getAlignTarget: function() {
      var e = this.$props.point;
      return e || this.getTargetElement;
    },
    getMaskTransitionName: function() {
      var e = this.$props, n = e.maskTransitionName, r = e.maskAnimation;
      return !n && r && (n = "".concat(e.prefixCls, "-").concat(r)), n;
    },
    getTransitionName: function() {
      var e = this.$props, n = e.transitionName, r = e.animation;
      return n || (typeof r == "string" ? n = "".concat(r) : r && r.props && r.props.name && (n = r.props.name)), n;
    },
    getClassName: function(e) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = [];
      this.transitionProps && Object.keys(this.transitionProps).forEach(function(s) {
        typeof n.transitionProps[s] == "string" && a.push.apply(a, Je(n.transitionProps[s].split(" ")));
      });
      var o = r.split(" ").filter(function(s) {
        return a.indexOf(s) !== -1;
      }).join(" ");
      return "".concat(this.$props.prefixCls, " ").concat(this.$attrs.class || "", " ").concat(this.$props.popupClassName, " ").concat(e, " ").concat(o);
    },
    getPopupElement: function() {
      var e = this, n, r, a = this.savePopupRef, o = this.$props, s = this.$attrs, l = this.$slots, u = this.getTransitionName, c = this.$data, f = c.stretchChecked, d = c.targetHeight, p = c.targetWidth, m = s.style, v = m === void 0 ? {} : m, g = _m(s).onEvents, C = o.align, y = o.visible, O = o.prefixCls, w = o.animation, _ = o.popupStyle, x = o.getClassNameFromAlign, P = o.destroyPopupOnHide, T = o.stretch, M = this.getClassName(this.currentAlignClassName || x(C));
      y || (this.currentAlignClassName = null);
      var $ = {};
      T && (T.indexOf("height") !== -1 ? $.height = typeof d == "number" ? "".concat(d, "px") : d : T.indexOf("minHeight") !== -1 && ($.minHeight = typeof d == "number" ? "".concat(d, "px") : d), T.indexOf("width") !== -1 ? $.width = typeof p == "number" ? "".concat(p, "px") : p : T.indexOf("minWidth") !== -1 && ($.minWidth = typeof p == "number" ? "".concat(p, "px") : p), f || setTimeout(function() {
        e.alignInstance && e.alignInstance.forceAlign();
      }, 0));
      var k = b(b({
        prefixCls: O,
        visible: y,
        // hiddenClassName,
        class: M
      }, g), {
        ref: a,
        style: b(b(b(b({}, $), _), v), this.getZIndexStyle())
      }), V = u(), I = !!V, F = Wc(V);
      return Ye(w) === "object" && (I = !0, F = b(b({}, F), w)), I || (F = {}), this.transitionProps = F, P ? h(ga, F, {
        default: function() {
          return [y ? h(nh, {
            target: e.getAlignTarget(),
            key: "popup",
            ref: e.saveAlignRef,
            monitorWindowResize: !0,
            align: C,
            onAlign: e.onAlign
          }, {
            default: function() {
              return [h(rh, k, {
                default: function() {
                  return [(n = l.default) === null || n === void 0 ? void 0 : n.call(l)];
                }
              })];
            }
          }) : null];
        }
      }) : h(ga, F, {
        default: function() {
          return [In(h(nh, {
            target: e.getAlignTarget(),
            key: "popup",
            ref: e.saveAlignRef,
            monitorWindowResize: !0,
            disabled: !y,
            align: C,
            onAlign: e.onAlign
          }, {
            default: function() {
              return [h(rh, k, {
                default: function() {
                  return [(r = l.default) === null || r === void 0 ? void 0 : r.call(l)];
                }
              })];
            }
          }), [[Ji, y]])];
        }
      });
    },
    getZIndexStyle: function() {
      var e = {}, n = this.$props;
      return n.zIndex !== void 0 && (e.zIndex = n.zIndex), e;
    },
    getMaskElement: function() {
      var e = this.$props, n = null;
      if (e.mask) {
        var r = this.getMaskTransitionName();
        if (n = In(h(Yg, {
          style: this.getZIndexStyle(),
          key: "mask",
          class: "".concat(e.prefixCls, "-mask"),
          visible: e.visible
        }, null), [[Ji, e.visible]]), r) {
          var a = function() {
            return n;
          }();
          n = h(ga, {
            appear: !0,
            name: r
          }, {
            default: function() {
              return [a];
            }
          });
        }
      }
      return n;
    }
  },
  render: function() {
    var e = this.getMaskElement, n = this.getPopupElement;
    return h("div", null, [e(), n()]);
  }
}, Rx = K({
  name: "Portal",
  props: {
    getContainer: i.func.isRequired,
    children: i.any.isRequired,
    didUpdate: i.func
  },
  data: function() {
    return this._container = null, {};
  },
  mounted: function() {
    this.createContainer();
  },
  updated: function() {
    var e = this, n = this.$props.didUpdate;
    n && Le(function() {
      n(e.$props);
    });
  },
  beforeUnmount: function() {
    this.removeContainer();
  },
  methods: {
    createContainer: function() {
      this._container = this.$props.getContainer(), this.$forceUpdate();
    },
    removeContainer: function() {
      this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container);
    }
  },
  render: function() {
    var e = this;
    return this._container ? h(s0, {
      to: this._container
    }, {
      default: function() {
        return [e.$props.children];
      }
    }) : null;
  }
});
function Fx() {
  return "";
}
function Bx() {
  return window.document;
}
var jx = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
const nl = K({
  name: "Trigger",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    action: i.oneOfType([i.string, i.arrayOf(i.string)]).def([]),
    showAction: i.any.def([]),
    hideAction: i.any.def([]),
    getPopupClassNameFromAlign: i.any.def(Fx),
    onPopupVisibleChange: i.func.def(si),
    afterPopupVisibleChange: i.func.def(si),
    popup: i.any,
    popupStyle: i.object.def(function() {
      return {};
    }),
    prefixCls: i.string.def("rc-trigger-popup"),
    popupClassName: i.string.def(""),
    popupPlacement: i.string,
    builtinPlacements: i.object,
    popupTransitionName: i.oneOfType([i.string, i.object]),
    popupAnimation: i.any,
    mouseEnterDelay: i.number.def(0),
    mouseLeaveDelay: i.number.def(0.1),
    zIndex: i.number,
    focusDelay: i.number.def(0),
    blurDelay: i.number.def(0.15),
    getPopupContainer: i.func,
    getDocument: i.func.def(Bx),
    forceRender: i.looseBool,
    destroyPopupOnHide: i.looseBool.def(!1),
    mask: i.looseBool.def(!1),
    maskClosable: i.looseBool.def(!0),
    // onPopupAlign: PropTypes.func.def(noop),
    popupAlign: i.object.def(function() {
      return {};
    }),
    popupVisible: i.looseBool,
    defaultPopupVisible: i.looseBool.def(!1),
    maskTransitionName: i.oneOfType([i.string, i.object]),
    maskAnimation: i.string,
    stretch: i.string,
    alignPoint: i.looseBool
    // Maybe we can support user pass position in the future
  },
  setup: function() {
    return {
      vcTriggerContext: ye("vcTriggerContext", {}),
      savePopupRef: ye("savePopupRef", si),
      dialogContext: ye("dialogContext", null)
    };
  },
  data: function() {
    var e = this, n = this.$props, r;
    return Se(this, "popupVisible") ? r = !!n.popupVisible : r = !!n.defaultPopupVisible, jx.forEach(function(a) {
      e["fire".concat(a)] = function(o) {
        e.fireEvents(a, o);
      };
    }), this._component = null, this.focusTime = null, this.clickOutsideHandler = null, this.contextmenuOutsideHandler1 = null, this.contextmenuOutsideHandler2 = null, this.touchOutsideHandler = null, {
      prevPopupVisible: r,
      sPopupVisible: r,
      point: null
    };
  },
  watch: {
    popupVisible: function(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created: function() {
    Ut("vcTriggerContext", this);
  },
  deactivated: function() {
    this.setPopupVisible(!1);
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal();
    });
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal();
    });
  },
  beforeUnmount: function() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout);
  },
  methods: {
    updatedCal: function() {
      var e = this.$props, n = this.$data;
      if (n.sPopupVisible) {
        var r;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (r = e.getDocument(), this.clickOutsideHandler = oo(r, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (r = r || e.getDocument(), this.touchOutsideHandler = oo(r, "touchstart", this.onDocumentClick, ct ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (r = r || e.getDocument(), this.contextmenuOutsideHandler1 = oo(r, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = oo(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter: function(e) {
      var n = this.$props.mouseEnterDelay;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, n, n ? null : e);
    },
    onMouseMove: function(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave: function(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function(e) {
      e && e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && io(this._component.getPopupDomNode(), e.relatedTarget) || this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onFocus: function(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown: function(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart: function(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur: function(e) {
      io(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu: function(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose: function() {
      this.isContextmenuToShow() && this.close();
    },
    onClick: function(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        var n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      var r = !this.$data.sPopupVisible;
      (this.isClickToHide() && !r || r && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown: function() {
      var e = this, n = this.vcTriggerContext, r = n === void 0 ? {} : n;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(function() {
        e.hasPopupMouseDown = !1;
      }, 0), r.onPopupMouseDown && r.onPopupMouseDown.apply(r, arguments);
    },
    onDocumentClick: function(e) {
      if (!(this.$props.mask && !this.$props.maskClosable)) {
        var n = e.target, r = Yt(this);
        !io(r, n) && !this.hasPopupMouseDown && this.close();
      }
    },
    getPopupDomNode: function() {
      return this._component && this._component.getPopupDomNode ? this._component.getPopupDomNode() : null;
    },
    getRootDomNode: function() {
      return Yt(this);
    },
    handleGetPopupClassFromAlign: function(e) {
      var n = [], r = this.$props, a = r.popupPlacement, o = r.builtinPlacements, s = r.prefixCls, l = r.alignPoint, u = r.getPopupClassNameFromAlign;
      return a && o && n.push(Ax(o, s, e, l)), u && n.push(u(e)), n.join(" ");
    },
    getPopupAlign: function() {
      var e = this.$props, n = e.popupPlacement, r = e.popupAlign, a = e.builtinPlacements;
      return n && a ? Mx(a, n, r) : r;
    },
    savePopup: function(e) {
      this._component = e, this.savePopupRef(e);
    },
    getComponent: function() {
      var e = this, n = {};
      this.isMouseEnterToShow() && (n.onMouseenter = e.onPopupMouseenter), this.isMouseLeaveToHide() && (n.onMouseleave = e.onPopupMouseleave), n.onMousedown = this.onPopupMouseDown, n[ct ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      var r = e.handleGetPopupClassFromAlign, a = e.getRootDomNode, o = e.getContainer, s = e.$attrs, l = e.$props, u = l.prefixCls, c = l.destroyPopupOnHide, f = l.popupClassName, d = l.action, p = l.popupAnimation, m = l.popupTransitionName, v = l.popupStyle, g = l.mask, C = l.maskAnimation, y = l.maskTransitionName, O = l.zIndex, w = l.stretch, _ = l.alignPoint, x = this.$data, P = x.sPopupVisible, T = x.point, M = this.getPopupAlign(), $ = b(b({
        prefixCls: u,
        destroyPopupOnHide: c,
        visible: P,
        point: _ ? T : null,
        action: d,
        align: M,
        animation: p,
        getClassNameFromAlign: r,
        stretch: w,
        getRootDomNode: a,
        mask: g,
        zIndex: O,
        transitionName: m,
        maskAnimation: C,
        maskTransitionName: y,
        getContainer: o,
        popupClassName: f,
        popupStyle: v,
        onAlign: s.onPopupAlign || si
      }, n), {
        ref: this.savePopup
      });
      return h(Vx, $, {
        default: function() {
          return [ce(e, "popup")];
        }
      });
    },
    getContainer: function() {
      var e = this.$props, n = this.dialogContext, r = document.createElement("div");
      r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.width = "100%";
      var a = e.getPopupContainer ? e.getPopupContainer(Yt(this), n) : e.getDocument().body;
      return a.appendChild(r), this.popupContainer = r, r;
    },
    setPopupVisible: function(e, n) {
      var r = this.alignPoint, a = this.sPopupVisible, o = this.onPopupVisibleChange;
      this.clearDelayTimer(), a !== e && (Se(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: a
      }), o && o(e)), r && n && this.setPoint(n);
    },
    setPoint: function(e) {
      var n = this.$props.alignPoint;
      !n || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate: function() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible: function(e, n, r) {
      var a = this, o = n * 1e3;
      if (this.clearDelayTimer(), o) {
        var s = r ? {
          pageX: r.pageX,
          pageY: r.pageY
        } : null;
        this.delayTimer = J_(function() {
          a.setPopupVisible(e, s), a.clearDelayTimer();
        }, o);
      } else
        this.setPopupVisible(e, r);
    },
    clearDelayTimer: function() {
      this.delayTimer && (Q_(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler: function() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains: function(e) {
      var n = function() {
      }, r = rs(this);
      return this.childOriginEvents[e] && r[e] ? this["fire".concat(e)] : (n = this.childOriginEvents[e] || r[e] || n, n);
    },
    isClickToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("click") !== -1 || r.indexOf("click") !== -1;
    },
    isContextmenuToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("contextmenu") !== -1 || r.indexOf("contextmenu") !== -1;
    },
    isClickToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("click") !== -1 || r.indexOf("click") !== -1;
    },
    isMouseEnterToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("hover") !== -1 || r.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("hover") !== -1 || r.indexOf("mouseleave") !== -1;
    },
    isFocusToShow: function() {
      var e = this.$props, n = e.action, r = e.showAction;
      return n.indexOf("focus") !== -1 || r.indexOf("focus") !== -1;
    },
    isBlurToHide: function() {
      var e = this.$props, n = e.action, r = e.hideAction;
      return n.indexOf("focus") !== -1 || r.indexOf("blur") !== -1;
    },
    forcePopupAlign: function() {
      this.$data.sPopupVisible && this._component && this._component.alignInstance && this._component.alignInstance.forceAlign();
    },
    fireEvents: function(e, n) {
      this.childOriginEvents[e] && this.childOriginEvents[e](n);
      var r = this.$props[e] || this.$attrs[e];
      r && r(n);
    },
    close: function() {
      this.setPopupVisible(!1);
    }
  },
  render: function() {
    var e = this, n = this.sPopupVisible, r = this.$attrs, a = Aa(et(this)), o = this.$props, s = o.forceRender, l = o.alignPoint;
    a.length > 1 && bn(!1, "Trigger children just support only one default", !0);
    var u = a[0];
    this.childOriginEvents = rs(u);
    var c = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? c.onContextmenu = this.onContextmenu : c.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (c.onClick = this.onClick, c.onMousedown = this.onMousedown, c[ct ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (c.onClick = this.createTwoChains("onClick"), c.onMousedown = this.createTwoChains("onMousedown"), c[ct ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (c.onMouseenter = this.onMouseenter, l && (c.onMousemove = this.onMouseMove)) : c.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? c.onMouseleave = this.onMouseleave : c.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (c.onFocus = this.onFocus, c.onBlur = this.onBlur) : (c.onFocus = this.createTwoChains("onFocus"), c.onBlur = function(m) {
      m && (!m.relatedTarget || !io(m.target, m.relatedTarget)) && e.createTwoChains("onBlur")(m);
    });
    var f = Z(u && u.props && u.props.class, r.class);
    f && (c.class = f);
    var d = je(u, c), p;
    return (n || this._component || s) && (p = h(Rx, {
      key: "portal",
      children: this.getComponent(),
      getContainer: this.getContainer,
      didUpdate: this.handlePortalUpdate
    }, null)), [p, d];
  }
});
var Lx = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Hx = function(e) {
  var n = typeof e != "number" ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      }
    }
  };
}, Ug = K({
  name: "SelectTrigger",
  inheritAttrs: !1,
  created: function() {
    this.popupRef = Ea();
  },
  methods: {
    getPopupElement: function() {
      return this.popupRef.current;
    }
  },
  render: function() {
    var e = this, n = b(b({}, this.$props), this.$attrs), r = n.empty, a = r === void 0 ? !1 : r, o = Lx(n, ["empty"]), s = o.visible, l = o.dropdownAlign, u = o.prefixCls, c = o.popupElement, f = o.dropdownClassName, d = o.dropdownStyle, p = o.dropdownMatchSelectWidth, m = o.containerWidth, v = o.dropdownRender, g = o.animation, C = o.transitionName, y = o.direction, O = o.getPopupContainer, w = "".concat(u, "-dropdown"), _ = c;
    v && (_ = v({
      menuNode: c,
      props: o
    }));
    var x = Hx(p), P = g ? "".concat(w, "-").concat(g) : C, T = b({
      minWidth: "".concat(m, "px")
    }, d);
    return typeof p == "number" ? T.width = "".concat(p, "px") : p && (T.width = "".concat(m, "px")), h(nl, H(H({}, o), {}, {
      showAction: [],
      hideAction: [],
      popupPlacement: y === "rtl" ? "bottomRight" : "bottomLeft",
      builtinPlacements: x,
      prefixCls: w,
      popupTransitionName: P,
      popup: h("div", {
        ref: this.popupRef
      }, [_]),
      popupAlign: l,
      popupVisible: s,
      getPopupContainer: O,
      popupClassName: Z(f, S({}, "".concat(w, "-empty"), a)),
      popupStyle: T
    }), {
      default: function() {
        return [et(e)[0]];
      }
    });
  }
});
Ug.props = {
  dropdownAlign: i.object,
  visible: i.looseBool,
  disabled: i.looseBool,
  dropdownClassName: i.string,
  dropdownStyle: i.object,
  empty: i.looseBool,
  prefixCls: i.string,
  popupClassName: i.string,
  animation: i.string,
  transitionName: i.string,
  getPopupContainer: i.func,
  dropdownRender: i.func,
  containerWidth: i.number,
  dropdownMatchSelectWidth: i.oneOfType([Number, Boolean]).def(!0),
  popupElement: i.any,
  direction: i.string,
  getTriggerDOMNode: i.func
};
const zx = Ug;
var Yx = "RC_SELECT_INTERNAL_PROPS_MARK";
function Wx() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, e = Q(!1), n, r = function() {
    window.clearTimeout(n);
  };
  Dt(function() {
    r();
  });
  var a = function(s, l) {
    r(), n = window.setTimeout(function() {
      e.value = s, l && l();
    }, t);
  };
  return [e, a, r];
}
function Ux(t, e, n) {
  function r(a) {
    var o, s, l, u = a.target;
    u.shadowRoot && a.composed && (u = a.composedPath()[0] || u);
    var c = [(o = t[0]) === null || o === void 0 ? void 0 : o.value, (l = (s = t[1]) === null || s === void 0 ? void 0 : s.value) === null || l === void 0 ? void 0 : l.getPopupElement()];
    e.value && c.every(function(f) {
      return f && !f.contains(u) && f !== u;
    }) && n(!1);
  }
  Dt(function() {
    window.addEventListener("mousedown", r);
  }), Ao(function() {
    window.removeEventListener("mousedown", r);
  });
}
function Gx(t) {
  var e = Je(t.value), n = W(function() {
    var r = /* @__PURE__ */ new Map();
    e.forEach(function(o) {
      var s = o.value, l = o.label;
      s !== l && r.set(s, l);
    });
    var a = t.value.map(function(o) {
      var s = r.get(o.value);
      return o.isCacheable && s ? b(b({}, o), {
        label: s
      }) : o;
    });
    return e = a, a;
  });
  return n;
}
function Kx(t) {
  var e = W(function() {
    var r = /* @__PURE__ */ new Map();
    return t.value.forEach(function(a) {
      var o = a.data.value;
      r.set(o, a);
    }), r;
  }), n = function(a) {
    return a.map(function(o) {
      return e.value.get(o);
    }).filter(Boolean);
  };
  return n;
}
var qx = function(e, n) {
  var r = b({}, e);
  return Object.keys(n).forEach(function(a) {
    var o = r[a];
    if (o)
      o.default = n[a];
    else
      throw new Error("not have ".concat(a, " prop"));
  }), r;
};
const Ba = qx, Xx = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var t = navigator.userAgent || navigator.vendor || window.opera;
  return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t == null ? void 0 : t.substr(0, 4)));
};
var Zx = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Qx = ["children", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "tabindex"], Gg = function() {
  return {
    prefixCls: i.string,
    id: i.string,
    class: i.string,
    style: i.any,
    // Options
    options: i.array,
    mode: i.string,
    // Value
    value: i.any,
    defaultValue: i.any,
    labelInValue: i.looseBool,
    // Search
    inputValue: i.string,
    searchValue: i.string,
    optionFilterProp: i.string,
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: i.any,
    filterSort: i.func,
    showSearch: i.looseBool,
    autoClearSearchValue: i.looseBool,
    onSearch: i.func,
    onClear: i.func,
    // Icons
    allowClear: i.looseBool,
    clearIcon: i.VNodeChild,
    showArrow: i.looseBool,
    inputIcon: i.VNodeChild,
    removeIcon: i.VNodeChild,
    menuItemSelectedIcon: i.VNodeChild,
    // Dropdown
    open: i.looseBool,
    defaultOpen: i.looseBool,
    listHeight: i.number,
    listItemHeight: i.number,
    dropdownStyle: i.object,
    dropdownClassName: i.string,
    dropdownMatchSelectWidth: Qn(i.oneOfType([Boolean, Number])),
    virtual: i.looseBool,
    dropdownRender: i.func,
    dropdownAlign: i.any,
    animation: i.string,
    transitionName: i.string,
    getPopupContainer: i.func,
    direction: i.string,
    // Others
    disabled: i.looseBool,
    loading: i.looseBool,
    autofocus: i.looseBool,
    defaultActiveFirstOption: i.looseBool,
    notFoundContent: i.VNodeChild,
    placeholder: i.VNodeChild,
    backfill: i.looseBool,
    getInputElement: i.func,
    optionLabelProp: i.string,
    maxTagTextLength: i.number,
    maxTagCount: i.oneOfType([i.number, i.string]),
    maxTagPlaceholder: i.any,
    tokenSeparators: i.arrayOf(i.string),
    tagRender: i.func,
    showAction: i.array,
    tabindex: i.oneOfType([i.number, i.string]),
    // Events
    onKeyup: i.func,
    onKeydown: i.func,
    onPopupScroll: i.func,
    onDropdownVisibleChange: i.func,
    onSelect: i.func,
    onDeselect: i.func,
    onInputKeyDown: {
      type: Function
    },
    onClick: i.func,
    onChange: i.func,
    onBlur: i.func,
    onFocus: i.func,
    onMousedown: i.func,
    onMouseenter: i.func,
    onMouseleave: i.func,
    // Motion
    choiceTransitionName: i.string,
    // Internal props
    /**
     * Only used in current version for internal event process.
     * Do not use in production environment.
     */
    internalProps: i.object,
    children: i.array
  };
};
function Jx(t) {
  var e = t.prefixCls, n = t.components.optionList, r = t.convertChildrenToData, a = t.flattenOptions, o = t.getLabeledValue, s = t.filterOptions, l = t.isValueDisabled, u = t.findValueOption, c = t.warningProps, f = t.fillOptionsWithMissingValue, d = t.omitDOMProps, p = K({
    name: "Select",
    slots: ["option"],
    props: Ba(Gg(), {}),
    setup: function(v) {
      var g, C = W(function() {
        return v.internalProps && v.internalProps.mark === Yx;
      });
      bn(v.optionFilterProp !== "children", "Select", "optionFilterProp not support children, please use label instead");
      var y = Q(null), O = Q(null), w = Q(null), _ = Q(null), x = W(function() {
        return (v.tokenSeparators || []).some(function(ae) {
          return [`
`, `\r
`].includes(ae);
        });
      }), P = Wx(), T = ht(P, 3), M = T[0], $ = T[1], k = T[2], V = W(function() {
        return v.id || "rc_select_".concat(__());
      }), I = W(function() {
        var ae = v.optionLabelProp;
        return ae === void 0 && (ae = v.options ? "label" : "children"), ae;
      }), F = W(function() {
        return v.mode === "combobox" ? !1 : v.labelInValue;
      }), B = W(function() {
        return v.mode === "tags" || v.mode === "multiple";
      }), E = W(function() {
        return v.showSearch !== void 0 ? v.showSearch : B.value || v.mode === "combobox";
      }), j = Q(!1);
      Dt(function() {
        j.value = Xx();
      });
      var D = Ea(), N = Q(""), U = function(J) {
        N.value = J;
      }, L = Q(v.value !== void 0 ? v.value : v.defaultValue);
      it(function() {
        return v.value;
      }, function() {
        L.value = v.value, N.value = "";
      });
      var ne = W(function() {
        return y_(L.value, {
          labelInValue: F.value,
          combobox: v.mode === "combobox"
        });
      }), ie = W(function() {
        return ne.value[0];
      }), fe = W(function() {
        return ne.value[1];
      }), $e = W(function() {
        return new Set(ie.value);
      }), ze = Q(null), Te = function(J) {
        ze.value = J;
      }, ge = W(function() {
        var ae = N.value;
        return v.mode === "combobox" && L.value !== void 0 ? ae = L.value : v.searchValue !== void 0 ? ae = v.searchValue : v.inputValue && (ae = v.inputValue), ae;
      }), Re = W(function() {
        var ae = v.options;
        return ae === void 0 && (ae = r(v.children)), v.mode === "tags" && f && (ae = f(ae, L.value, I.value, v.labelInValue)), ae || [];
      }), tt = W(function() {
        return a(Re.value, v);
      }), ft = Kx(tt), A = W(function() {
        if (!ge.value || !E.value)
          return Je(Re.value);
        var ae = v.optionFilterProp, J = ae === void 0 ? "value" : ae, _e = v.mode, Fe = v.filterOption, Be = s(ge.value, Re.value, {
          optionFilterProp: J,
          filterOption: _e === "combobox" && Fe === void 0 ? function() {
            return !0;
          } : Fe
        });
        return _e === "tags" && Be.every(function(Ue) {
          return Ue[J] !== ge.value;
        }) && Be.unshift({
          value: ge.value,
          label: ge.value,
          key: "__RC_SELECT_TAG_PLACEHOLDER__"
        }), v.filterSort && Array.isArray(Be) ? Je(Be).sort(v.filterSort) : Be;
      }), Y = W(function() {
        return a(A.value, v);
      });
      Dt(function() {
        it(ge, function() {
          _.value && _.value.scrollTo && _.value.scrollTo(0);
        }, {
          flush: "post",
          immediate: !0
        });
      });
      var X = W(function() {
        var ae = ie.value.map(function(J) {
          var _e = ft([J]), Fe = o(J, {
            options: _e,
            prevValueMap: fe.value,
            labelInValue: F.value,
            optionLabelProp: I.value
          });
          return b(b({}, Fe), {
            disabled: l(J, _e)
          });
        });
        return !v.mode && ae.length === 1 && ae[0].value === null && ae[0].label === null ? [] : ae;
      });
      X = Gx(X);
      var Ee = function(J, _e, Fe) {
        var Be = ft([J]), Ue = u([J], Be)[0], sn = v.internalProps, lt = sn === void 0 ? {} : sn;
        if (!lt.skipTriggerSelect) {
          var Sn = F.value ? o(J, {
            options: Be,
            prevValueMap: fe.value,
            labelInValue: F.value,
            optionLabelProp: I.value
          }) : J;
          _e && v.onSelect ? v.onSelect(Sn, Ue) : !_e && v.onDeselect && v.onDeselect(Sn, Ue);
        }
        C.value && (_e && lt.onRawSelect ? lt.onRawSelect(J, Ue, Fe) : !_e && lt.onRawDeselect && lt.onRawDeselect(J, Ue, Fe));
      }, st = Q([]), bt = function(J) {
        st.value = J;
      }, nt = function(J) {
        if (!(C.value && v.internalProps && v.internalProps.skipTriggerChange)) {
          var _e = ft(J), Fe = C_(Array.from(J), {
            labelInValue: F.value,
            options: _e,
            getLabeledValue: o,
            prevValueMap: fe.value,
            optionLabelProp: I.value
          }), Be = B.value ? Fe : Fe[0];
          if (v.onChange && (ie.value.length !== 0 || Fe.length !== 0)) {
            var Ue = u(J, _e, {
              prevValueOptions: st.value
            });
            bt(Ue.map(function(sn, lt) {
              var Sn = b({}, sn);
              return Object.defineProperty(Sn, "_INTERNAL_OPTION_VALUE_", {
                get: function() {
                  return J[lt];
                }
              }), Sn;
            })), v.onChange(Be, B.value ? Ue : Ue[0]);
          }
          L.value = Be;
        }
      }, $t = function(J, _e) {
        var Fe = _e.selected, Be = _e.source, Ue = v.autoClearSearchValue, sn = Ue === void 0 ? !0 : Ue;
        if (!v.disabled) {
          var lt;
          B.value ? (lt = new Set(ie.value), Fe ? lt.add(J) : lt.delete(J)) : (lt = /* @__PURE__ */ new Set(), lt.add(J)), (B.value || !B.value && Array.from(ie.value)[0] !== J) && nt(Array.from(lt)), Ee(J, !B.value || Fe, Be), v.mode === "combobox" ? (U(String(J)), Te("")) : (!B.value || sn) && (U(""), Te(""));
        }
      }, On = function(J, _e) {
        $t(J, b(b({}, _e), {
          source: "option"
        }));
      }, cr = function(J, _e) {
        $t(J, b(b({}, _e), {
          source: "selection"
        }));
      }, Gr = v.open !== void 0 ? v.open : v.defaultOpen, xr = Q(Gr), Ot = Q(Gr), fr = function(J) {
        xr.value = v.open !== void 0 ? v.open : J, Ot.value = xr.value;
      };
      it(function() {
        return v.open;
      }, function() {
        fr(v.open);
      });
      var Ha = W(function() {
        return !v.notFoundContent && !A.value.length;
      });
      Mo(function() {
        Ot.value = xr.value, (v.disabled || Ha.value && Ot.value && v.mode === "combobox") && (Ot.value = !1);
      });
      var Kr = W(function() {
        return Ha.value ? !1 : Ot.value;
      }), Fn = function(J) {
        var _e = J !== void 0 ? J : !Ot.value;
        xr.value !== _e && !v.disabled && (fr(_e), v.onDropdownVisibleChange && v.onDropdownVisibleChange(_e));
      };
      Ux([y, O], Kr, Fn);
      var za = function(J, _e, Fe) {
        var Be = !0, Ue = J, sn = ge.value;
        Te(null);
        var lt = Fe ? null : k_(J, v.tokenSeparators), Sn = lt;
        if (v.mode === "combobox")
          _e && nt([Ue]);
        else if (lt) {
          Ue = "", v.mode !== "tags" && (Sn = lt.map(function(Ga) {
            var cd = tt.value.find(function(n0) {
              var r0 = n0.data;
              return r0[I.value] === Ga;
            });
            return cd ? cd.data.value : null;
          }).filter(function(Ga) {
            return Ga !== null;
          }));
          var Bn = Array.from(new Set([].concat(Je(ie.value), Je(Sn))));
          nt(Bn), Bn.forEach(function(Ga) {
            Ee(Ga, !0, "input");
          }), Fn(!1), Be = !1;
        }
        return U(Ue), v.onSearch && sn !== Ue && v.onSearch(Ue), Be;
      }, Xo = function(J) {
        if (!(!J || !J.trim())) {
          var _e = Array.from(new Set([].concat(Je(ie.value), [J])));
          nt(_e), _e.forEach(function(Fe) {
            Ee(Fe, !0, "input");
          }), U("");
        }
      };
      it(function() {
        return v.disabled;
      }, function() {
        xr.value && v.disabled && fr(!1);
      }, {
        immediate: !0
      }), it(Ot, function() {
        !Ot.value && !B.value && v.mode !== "combobox" && za("", !1, !1);
      }, {
        immediate: !0
      });
      var cl = Ag(), Ya = ht(cl, 2), fl = Ya[0], dl = Ya[1], hl = function(J) {
        var _e = fl(), Fe = J.which;
        if (Fe === oe.ENTER && (v.mode !== "combobox" && J.preventDefault(), Ot.value || Fn(!0)), dl(!!ge.value), Fe === oe.BACKSPACE && !_e && B.value && !ge.value && ie.value.length) {
          var Be = w_(X.value, ie.value);
          Be.removedValue !== null && (nt(Be.values), Ee(Be.removedValue, !1, "input"));
        }
        Ot.value && _.value && _.value.onKeydown(J), v.onKeydown && v.onKeydown(J);
      }, pl = function(J) {
        Ot.value && _.value && _.value.onKeyup(J), v.onKeyup && v.onKeyup(J);
      }, Wa = Q(!1), Zo = function() {
        $(!0), v.disabled || (v.onFocus && !Wa.value && v.onFocus(arguments.length <= 0 ? void 0 : arguments[0]), v.showAction && v.showAction.includes("focus") && Fn(!0)), Wa.value = !0;
      }, Ua = function() {
        if ($(!1, function() {
          Wa.value = !1, Fn(!1);
        }), !v.disabled) {
          var J = ge.value;
          J && (v.mode === "tags" ? (za("", !1, !1), nt(Array.from(new Set([].concat(Je(ie.value), [J]))))) : v.mode === "multiple" && U("")), v.onBlur && v.onBlur(arguments.length <= 0 ? void 0 : arguments[0]);
        }
      };
      Ut("VCSelectContainerEvent", {
        focus: Zo,
        blur: Ua
      });
      var on = [];
      Dt(function() {
        on.forEach(function(ae) {
          return window.clearTimeout(ae);
        }), on.splice(0, on.length);
      }), Ao(function() {
        on.forEach(function(ae) {
          return window.clearTimeout(ae);
        }), on.splice(0, on.length);
      });
      var vl = function(J) {
        var _e = J.target, Fe = O.value && O.value.getPopupElement();
        if (Fe && Fe.contains(_e)) {
          var Be = window.setTimeout(function() {
            var Ue = on.indexOf(Be);
            Ue !== -1 && on.splice(Ue, 1), k(), !j.value && !Fe.contains(document.activeElement) && w.value.focus();
          });
          on.push(Be);
        }
        v.onMousedown && v.onMousedown(J);
      }, Qo = Q(0), ml = W(function() {
        return v.defaultActiveFirstOption !== void 0 ? v.defaultActiveFirstOption : v.mode !== "combobox";
      }), gl = function(J, _e) {
        var Fe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Be = Fe.source, Ue = Be === void 0 ? "keyboard" : Be;
        Qo.value = _e, v.backfill && v.mode === "combobox" && J !== null && Ue === "keyboard" && Te(String(J));
      }, qr = Q(null);
      Dt(function() {
        it(Kr, function() {
          if (Kr.value) {
            var ae = Math.ceil(y.value.offsetWidth);
            qr.value !== ae && (qr.value = ae);
          }
        }, {
          immediate: !0
        });
      });
      var Jo = function() {
        w.value.focus();
      }, ei = function() {
        w.value.blur();
      };
      return {
        focus: Jo,
        blur: ei,
        scrollTo: (g = _.value) === null || g === void 0 ? void 0 : g.scrollTo,
        tokenWithEnter: x,
        mockFocused: M,
        mergedId: V,
        containerWidth: qr,
        onActiveValue: gl,
        accessibilityIndex: Qo,
        mergedDefaultActiveFirstOption: ml,
        onInternalMouseDown: vl,
        onContainerFocus: Zo,
        onContainerBlur: Ua,
        onInternalKeyDown: hl,
        isMultiple: B,
        mergedOpen: Ot,
        displayOptions: A,
        displayFlattenOptions: Y,
        rawValues: $e,
        onInternalOptionSelect: On,
        onToggleOpen: Fn,
        mergedSearchValue: ge,
        useInternalProps: C,
        triggerChange: nt,
        triggerSearch: za,
        mergedRawValue: ie,
        mergedShowSearch: E,
        onInternalKeyUp: pl,
        triggerOpen: Kr,
        mergedOptions: Re,
        onInternalSelectionSelect: cr,
        selectorDomRef: D,
        displayValues: X,
        activeValue: ze,
        onSearchSubmit: Xo,
        containerRef: y,
        listRef: _,
        triggerRef: O,
        selectorRef: w
      };
    },
    methods: {
      // We need force update here since popup dom is render async
      onPopupMouseEnter: function() {
        this.$forceUpdate();
      }
    },
    render: function() {
      var v, g = this, C = this.tokenWithEnter, y = this.mockFocused, O = this.mergedId, w = this.containerWidth, _ = this.onActiveValue, x = this.accessibilityIndex, P = this.mergedDefaultActiveFirstOption, T = this.onInternalMouseDown, M = this.onInternalKeyDown, $ = this.isMultiple, k = this.mergedOpen, V = this.displayOptions, I = this.displayFlattenOptions, F = this.rawValues, B = this.onInternalOptionSelect, E = this.onToggleOpen, j = this.mergedSearchValue, D = this.onPopupMouseEnter, N = this.useInternalProps, U = this.triggerChange, L = this.triggerSearch, ne = this.mergedRawValue, ie = this.mergedShowSearch, fe = this.onInternalKeyUp, $e = this.triggerOpen, ze = this.mergedOptions, Te = this.onInternalSelectionSelect, ge = this.selectorDomRef, Re = this.displayValues, tt = this.activeValue, ft = this.onSearchSubmit, A = this.$slots, Y = this.$props, X = Y.prefixCls, Ee = X === void 0 ? e : X, st = Y.class;
      Y.id, Y.open, Y.defaultOpen;
      var bt = Y.options;
      Y.children;
      var nt = Y.mode;
      Y.value, Y.defaultValue, Y.labelInValue, Y.showSearch, Y.inputValue, Y.searchValue, Y.filterOption, Y.optionFilterProp, Y.autoClearSearchValue, Y.onSearch;
      var $t = Y.allowClear, On = Y.clearIcon, cr = Y.showArrow, Gr = Y.inputIcon, xr = Y.menuItemSelectedIcon, Ot = Y.disabled, fr = Y.loading;
      Y.defaultActiveFirstOption;
      var Ha = Y.notFoundContent, Kr = Ha === void 0 ? "Not Found" : Ha;
      Y.optionLabelProp, Y.backfill;
      var Fn = Y.getInputElement, za = Y.getPopupContainer, Xo = Y.listHeight, cl = Xo === void 0 ? 200 : Xo, Ya = Y.listItemHeight, fl = Ya === void 0 ? 20 : Ya, dl = Y.animation, hl = Y.transitionName, pl = Y.virtual, Wa = Y.dropdownStyle, Zo = Y.dropdownClassName, Ua = Y.dropdownMatchSelectWidth, on = Y.dropdownRender, vl = Y.dropdownAlign;
      Y.showAction;
      var Qo = Y.direction;
      Y.tokenSeparators;
      var ml = Y.tagRender, gl = Y.onPopupScroll;
      Y.onDropdownVisibleChange, Y.onFocus, Y.onBlur, Y.onKeyup, Y.onKeydown, Y.onMousedown, Y.onChange, Y.onSelect, Y.onDeselect;
      var qr = Y.onClear, Jo = Y.internalProps, ei = Jo === void 0 ? {} : Jo, ae = Zx(Y, ["prefixCls", "class", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "getInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]), J = nt === "combobox" && Fn && Fn() || null, _e = d ? d(ae) : ae;
      Qx.forEach(function(Bn) {
        delete _e[Bn];
      });
      var Fe = h(n, {
        ref: "listRef",
        prefixCls: Ee,
        id: O,
        open: k,
        childrenAsData: !bt,
        options: V,
        flattenOptions: I,
        multiple: $,
        values: F,
        height: cl,
        itemHeight: fl,
        onSelect: B,
        onToggleOpen: E,
        onActiveValue: _,
        defaultActiveFirstOption: P,
        notFoundContent: Kr,
        onScroll: gl,
        searchValue: j,
        menuItemSelectedIcon: xr,
        virtual: pl !== !1 && Ua !== !1,
        onMouseenter: D
      }, {
        option: A.option
      }), Be, Ue = function() {
        N && ei.onClear && ei.onClear(), qr && qr(), U([]), L("", !1, !1);
      };
      !Ot && $t && (ne.length || j) && (Be = h(cs, {
        class: "".concat(Ee, "-clear"),
        onMousedown: Ue,
        customizeIcon: On
      }, {
        default: function() {
          return [Me("×")];
        }
      }));
      var sn = cr !== void 0 ? cr : fr || !$ && nt !== "combobox", lt;
      sn && (lt = h(cs, {
        class: Z("".concat(Ee, "-arrow"), S({}, "".concat(Ee, "-arrow-loading"), fr)),
        customizeIcon: Gr,
        customizeIconProps: {
          loading: fr,
          searchValue: j,
          open: k,
          focused: y,
          showSearch: ie
        }
      }, null)), process.env.NODE_ENV !== "production" && c && c(this.$props);
      var Sn = Z(Ee, st, (v = {}, S(v, "".concat(Ee, "-focused"), y), S(v, "".concat(Ee, "-multiple"), $), S(v, "".concat(Ee, "-single"), !$), S(v, "".concat(Ee, "-allow-clear"), $t), S(v, "".concat(Ee, "-show-arrow"), sn), S(v, "".concat(Ee, "-disabled"), Ot), S(v, "".concat(Ee, "-loading"), fr), S(v, "".concat(Ee, "-open"), k), S(v, "".concat(Ee, "-customize-input"), J), S(v, "".concat(Ee, "-show-search"), ie), v));
      return h("div", H(H({
        class: Sn
      }, _e), {}, {
        ref: "containerRef",
        onMousedown: T,
        onKeydown: M,
        onKeyup: fe
      }), [y && !k && h("span", {
        style: {
          width: 0,
          height: 0,
          display: "flex",
          overflow: "hidden",
          opacity: 0
        },
        "aria-live": "polite"
      }, ["".concat(ne.join(", "))]), h(zx, {
        ref: "triggerRef",
        disabled: Ot,
        prefixCls: Ee,
        visible: $e,
        popupElement: Fe,
        containerWidth: w,
        animation: dl,
        transitionName: hl,
        dropdownStyle: Wa,
        dropdownClassName: Zo,
        direction: Qo,
        dropdownMatchSelectWidth: Ua,
        dropdownRender: on,
        dropdownAlign: vl,
        getPopupContainer: za,
        empty: !ze.length,
        getTriggerDOMNode: function() {
          return ge.current;
        }
      }, {
        default: function() {
          return [h(K_, H(H({}, g.$props), {}, {
            domRef: ge,
            prefixCls: Ee,
            inputElement: J,
            ref: "selectorRef",
            id: O,
            showSearch: ie,
            mode: nt,
            accessibilityIndex: x,
            multiple: $,
            tagRender: ml,
            values: Re,
            open: k,
            onToggleOpen: E,
            searchValue: j,
            activeValue: tt,
            onSearch: L,
            onSearchSubmit: ft,
            onSelect: Te,
            tokenWithEnter: C
          }), null)];
        }
      }), lt, Be]);
    }
  });
  return p;
}
function eP(t) {
  var e = t.mode, n = t.options, r = t.children, a = t.backfill, o = t.allowClear, s = t.placeholder, l = t.getInputElement, u = t.showSearch, c = t.onSearch, f = t.defaultOpen, d = t.autofocus, p = t.labelInValue, m = t.value, v = t.inputValue, g = t.optionLabelProp, C = e === "multiple" || e === "tags", y = u !== void 0 ? u : C || e === "combobox", O = n || Vc(r);
  if (cn(e !== "tags" || O.every(function(x) {
    return !x.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), cn(e !== "combobox" || !g, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), cn(e === "combobox" || !a, "`backfill` only works with `combobox` mode."), cn(e === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), kd(e !== "combobox" || !l || !o || !s, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), c && !y && e !== "combobox" && e !== "tags" && cn(!1, "`onSearch` should work with `showSearch` instead of use alone."), kd(!f || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed."), m != null) {
    var w = Rc(m);
    cn(!p || w.every(function(x) {
      return Ye(x) === "object" && ("key" in x || "value" in x);
    }), "`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`"), cn(!C || Array.isArray(m), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var _ = null;
    r.some(function(x) {
      var P;
      if (!vn(x) || !x.type)
        return !1;
      var T = x.type;
      if (T.isSelectOption)
        return !1;
      if (T.isSelectOptGroup) {
        var M = ((P = x.children) === null || P === void 0 ? void 0 : P.default()) || [], $ = M.every(function(k) {
          return !vn(k) || !x.type || k.type.isSelectOption ? !0 : (_ = k.type, !1);
        });
        return !$;
      }
      return _ = T, !0;
    }), _ && cn(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(_.displayName || _.name || _, "`.")), cn(v === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function Kg(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = Array(r); ++n < r; )
    a[n] = e(t[n], n, t);
  return a;
}
function tP() {
  this.__data__ = [], this.size = 0;
}
function Gc(t, e) {
  return t === e || t !== t && e !== e;
}
function rl(t, e) {
  for (var n = t.length; n--; )
    if (Gc(t[n][0], e))
      return n;
  return -1;
}
var nP = Array.prototype, rP = nP.splice;
function aP(t) {
  var e = this.__data__, n = rl(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : rP.call(e, n, 1), --this.size, !0;
}
function oP(t) {
  var e = this.__data__, n = rl(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function iP(t) {
  return rl(this.__data__, t) > -1;
}
function sP(t, e) {
  var n = this.__data__, r = rl(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ir(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = tP;
ir.prototype.delete = aP;
ir.prototype.get = oP;
ir.prototype.has = iP;
ir.prototype.set = sP;
function lP() {
  this.__data__ = new ir(), this.size = 0;
}
function uP(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function cP(t) {
  return this.__data__.get(t);
}
function fP(t) {
  return this.__data__.has(t);
}
function tr(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var dP = "[object AsyncFunction]", hP = "[object Function]", pP = "[object GeneratorFunction]", vP = "[object Proxy]";
function qg(t) {
  if (!tr(t))
    return !1;
  var e = Lr(t);
  return e == hP || e == pP || e == dP || e == vP;
}
var mP = yn["__core-js_shared__"];
const kl = mP;
var oh = function() {
  var t = /[^.]+$/.exec(kl && kl.keys && kl.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function gP(t) {
  return !!oh && oh in t;
}
var bP = Function.prototype, yP = bP.toString;
function Wr(t) {
  if (t != null) {
    try {
      return yP.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var CP = /[\\^$.*+?()[\]{}|]/g, wP = /^\[object .+?Constructor\]$/, OP = Function.prototype, SP = Object.prototype, _P = OP.toString, xP = SP.hasOwnProperty, PP = RegExp(
  "^" + _P.call(xP).replace(CP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function TP(t) {
  if (!tr(t) || gP(t))
    return !1;
  var e = qg(t) ? PP : wP;
  return e.test(Wr(t));
}
function EP(t, e) {
  return t == null ? void 0 : t[e];
}
function Ur(t, e) {
  var n = EP(t, e);
  return TP(n) ? n : void 0;
}
var kP = Ur(yn, "Map");
const ko = kP;
var DP = Ur(Object, "create");
const Do = DP;
function $P() {
  this.__data__ = Do ? Do(null) : {}, this.size = 0;
}
function IP(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var MP = "__lodash_hash_undefined__", AP = Object.prototype, NP = AP.hasOwnProperty;
function VP(t) {
  var e = this.__data__;
  if (Do) {
    var n = e[t];
    return n === MP ? void 0 : n;
  }
  return NP.call(e, t) ? e[t] : void 0;
}
var RP = Object.prototype, FP = RP.hasOwnProperty;
function BP(t) {
  var e = this.__data__;
  return Do ? e[t] !== void 0 : FP.call(e, t);
}
var jP = "__lodash_hash_undefined__";
function LP(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Do && e === void 0 ? jP : e, this;
}
function Br(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Br.prototype.clear = $P;
Br.prototype.delete = IP;
Br.prototype.get = VP;
Br.prototype.has = BP;
Br.prototype.set = LP;
function HP() {
  this.size = 0, this.__data__ = {
    hash: new Br(),
    map: new (ko || ir)(),
    string: new Br()
  };
}
function zP(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function al(t, e) {
  var n = t.__data__;
  return zP(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function YP(t) {
  var e = al(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function WP(t) {
  return al(this, t).get(t);
}
function UP(t) {
  return al(this, t).has(t);
}
function GP(t, e) {
  var n = al(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function sr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
sr.prototype.clear = HP;
sr.prototype.delete = YP;
sr.prototype.get = WP;
sr.prototype.has = UP;
sr.prototype.set = GP;
var KP = 200;
function qP(t, e) {
  var n = this.__data__;
  if (n instanceof ir) {
    var r = n.__data__;
    if (!ko || r.length < KP - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new sr(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Dn(t) {
  var e = this.__data__ = new ir(t);
  this.size = e.size;
}
Dn.prototype.clear = lP;
Dn.prototype.delete = uP;
Dn.prototype.get = cP;
Dn.prototype.has = fP;
Dn.prototype.set = qP;
function XP(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var ZP = function() {
  try {
    var t = Ur(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const ds = ZP;
function Xg(t, e, n) {
  e == "__proto__" && ds ? ds(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
var QP = Object.prototype, JP = QP.hasOwnProperty;
function Zg(t, e, n) {
  var r = t[e];
  (!(JP.call(t, e) && Gc(r, n)) || n === void 0 && !(e in t)) && Xg(t, e, n);
}
function Lo(t, e, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var l = e[o], u = r ? r(n[l], t[l], l, n, t) : void 0;
    u === void 0 && (u = t[l]), a ? Xg(n, l, u) : Zg(n, l, u);
  }
  return n;
}
function eT(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var tT = "[object Arguments]";
function ih(t) {
  return Jn(t) && Lr(t) == tT;
}
var Qg = Object.prototype, nT = Qg.hasOwnProperty, rT = Qg.propertyIsEnumerable, aT = ih(function() {
  return arguments;
}()) ? ih : function(t) {
  return Jn(t) && nT.call(t, "callee") && !rT.call(t, "callee");
};
const Kc = aT;
var oT = Array.isArray;
const nn = oT;
function iT() {
  return !1;
}
var Jg = typeof exports == "object" && exports && !exports.nodeType && exports, sh = Jg && typeof module == "object" && module && !module.nodeType && module, sT = sh && sh.exports === Jg, lh = sT ? yn.Buffer : void 0, lT = lh ? lh.isBuffer : void 0, uT = lT || iT;
const hs = uT;
var cT = 9007199254740991, fT = /^(?:0|[1-9]\d*)$/;
function eb(t, e) {
  var n = typeof t;
  return e = e ?? cT, !!e && (n == "number" || n != "symbol" && fT.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var dT = 9007199254740991;
function qc(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= dT;
}
var hT = "[object Arguments]", pT = "[object Array]", vT = "[object Boolean]", mT = "[object Date]", gT = "[object Error]", bT = "[object Function]", yT = "[object Map]", CT = "[object Number]", wT = "[object Object]", OT = "[object RegExp]", ST = "[object Set]", _T = "[object String]", xT = "[object WeakMap]", PT = "[object ArrayBuffer]", TT = "[object DataView]", ET = "[object Float32Array]", kT = "[object Float64Array]", DT = "[object Int8Array]", $T = "[object Int16Array]", IT = "[object Int32Array]", MT = "[object Uint8Array]", AT = "[object Uint8ClampedArray]", NT = "[object Uint16Array]", VT = "[object Uint32Array]", Ke = {};
Ke[ET] = Ke[kT] = Ke[DT] = Ke[$T] = Ke[IT] = Ke[MT] = Ke[AT] = Ke[NT] = Ke[VT] = !0;
Ke[hT] = Ke[pT] = Ke[PT] = Ke[vT] = Ke[TT] = Ke[mT] = Ke[gT] = Ke[bT] = Ke[yT] = Ke[CT] = Ke[wT] = Ke[OT] = Ke[ST] = Ke[_T] = Ke[xT] = !1;
function RT(t) {
  return Jn(t) && qc(t.length) && !!Ke[Lr(t)];
}
function Xc(t) {
  return function(e) {
    return t(e);
  };
}
var tb = typeof exports == "object" && exports && !exports.nodeType && exports, vo = tb && typeof module == "object" && module && !module.nodeType && module, FT = vo && vo.exports === tb, Dl = FT && Cm.process, BT = function() {
  try {
    var t = vo && vo.require && vo.require("util").types;
    return t || Dl && Dl.binding && Dl.binding("util");
  } catch {
  }
}();
const ka = BT;
var uh = ka && ka.isTypedArray, jT = uh ? Xc(uh) : RT;
const nb = jT;
var LT = Object.prototype, HT = LT.hasOwnProperty;
function rb(t, e) {
  var n = nn(t), r = !n && Kc(t), a = !n && !r && hs(t), o = !n && !r && !a && nb(t), s = n || r || a || o, l = s ? eT(t.length, String) : [], u = l.length;
  for (var c in t)
    (e || HT.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    eb(c, u))) && l.push(c);
  return l;
}
var zT = Object.prototype;
function Zc(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || zT;
  return t === n;
}
var YT = Om(Object.keys, Object);
const WT = YT;
var UT = Object.prototype, GT = UT.hasOwnProperty;
function KT(t) {
  if (!Zc(t))
    return WT(t);
  var e = [];
  for (var n in Object(t))
    GT.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Qc(t) {
  return t != null && qc(t.length) && !qg(t);
}
function Ho(t) {
  return Qc(t) ? rb(t) : KT(t);
}
function qT(t, e) {
  return t && Lo(e, Ho(e), t);
}
function XT(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ZT = Object.prototype, QT = ZT.hasOwnProperty;
function JT(t) {
  if (!tr(t))
    return XT(t);
  var e = Zc(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !QT.call(t, r)) || n.push(r);
  return n;
}
function Jc(t) {
  return Qc(t) ? rb(t, !0) : JT(t);
}
function e2(t, e) {
  return t && Lo(e, Jc(e), t);
}
var ab = typeof exports == "object" && exports && !exports.nodeType && exports, ch = ab && typeof module == "object" && module && !module.nodeType && module, t2 = ch && ch.exports === ab, fh = t2 ? yn.Buffer : void 0, dh = fh ? fh.allocUnsafe : void 0;
function n2(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = dh ? dh(n) : new t.constructor(n);
  return t.copy(r), r;
}
function r2(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
function a2(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = 0, o = []; ++n < r; ) {
    var s = t[n];
    e(s, n, t) && (o[a++] = s);
  }
  return o;
}
function ob() {
  return [];
}
var o2 = Object.prototype, i2 = o2.propertyIsEnumerable, hh = Object.getOwnPropertySymbols, s2 = hh ? function(t) {
  return t == null ? [] : (t = Object(t), a2(hh(t), function(e) {
    return i2.call(t, e);
  }));
} : ob;
const ef = s2;
function l2(t, e) {
  return Lo(t, ef(t), e);
}
function tf(t, e) {
  for (var n = -1, r = e.length, a = t.length; ++n < r; )
    t[a + n] = e[n];
  return t;
}
var u2 = Object.getOwnPropertySymbols, c2 = u2 ? function(t) {
  for (var e = []; t; )
    tf(e, ef(t)), t = lc(t);
  return e;
} : ob;
const ib = c2;
function f2(t, e) {
  return Lo(t, ib(t), e);
}
function sb(t, e, n) {
  var r = e(t);
  return nn(t) ? r : tf(r, n(t));
}
function Au(t) {
  return sb(t, Ho, ef);
}
function lb(t) {
  return sb(t, Jc, ib);
}
var d2 = Ur(yn, "DataView");
const Nu = d2;
var h2 = Ur(yn, "Promise");
const Vu = h2;
var p2 = Ur(yn, "Set");
const ba = p2;
var v2 = Ur(yn, "WeakMap");
const Ru = v2;
var ph = "[object Map]", m2 = "[object Object]", vh = "[object Promise]", mh = "[object Set]", gh = "[object WeakMap]", bh = "[object DataView]", g2 = Wr(Nu), b2 = Wr(ko), y2 = Wr(Vu), C2 = Wr(ba), w2 = Wr(Ru), $r = Lr;
(Nu && $r(new Nu(new ArrayBuffer(1))) != bh || ko && $r(new ko()) != ph || Vu && $r(Vu.resolve()) != vh || ba && $r(new ba()) != mh || Ru && $r(new Ru()) != gh) && ($r = function(t) {
  var e = Lr(t), n = e == m2 ? t.constructor : void 0, r = n ? Wr(n) : "";
  if (r)
    switch (r) {
      case g2:
        return bh;
      case b2:
        return ph;
      case y2:
        return vh;
      case C2:
        return mh;
      case w2:
        return gh;
    }
  return e;
});
const $o = $r;
var O2 = Object.prototype, S2 = O2.hasOwnProperty;
function _2(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && S2.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var x2 = yn.Uint8Array;
const ps = x2;
function nf(t) {
  var e = new t.constructor(t.byteLength);
  return new ps(e).set(new ps(t)), e;
}
function P2(t, e) {
  var n = e ? nf(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var T2 = /\w*$/;
function E2(t) {
  var e = new t.constructor(t.source, T2.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var yh = tn ? tn.prototype : void 0, Ch = yh ? yh.valueOf : void 0;
function k2(t) {
  return Ch ? Object(Ch.call(t)) : {};
}
function D2(t, e) {
  var n = e ? nf(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var $2 = "[object Boolean]", I2 = "[object Date]", M2 = "[object Map]", A2 = "[object Number]", N2 = "[object RegExp]", V2 = "[object Set]", R2 = "[object String]", F2 = "[object Symbol]", B2 = "[object ArrayBuffer]", j2 = "[object DataView]", L2 = "[object Float32Array]", H2 = "[object Float64Array]", z2 = "[object Int8Array]", Y2 = "[object Int16Array]", W2 = "[object Int32Array]", U2 = "[object Uint8Array]", G2 = "[object Uint8ClampedArray]", K2 = "[object Uint16Array]", q2 = "[object Uint32Array]";
function X2(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case B2:
      return nf(t);
    case $2:
    case I2:
      return new r(+t);
    case j2:
      return P2(t, n);
    case L2:
    case H2:
    case z2:
    case Y2:
    case W2:
    case U2:
    case G2:
    case K2:
    case q2:
      return D2(t, n);
    case M2:
      return new r();
    case A2:
    case R2:
      return new r(t);
    case N2:
      return E2(t);
    case V2:
      return new r();
    case F2:
      return k2(t);
  }
}
var wh = Object.create, Z2 = function() {
  function t() {
  }
  return function(e) {
    if (!tr(e))
      return {};
    if (wh)
      return wh(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const Q2 = Z2;
function J2(t) {
  return typeof t.constructor == "function" && !Zc(t) ? Q2(lc(t)) : {};
}
var eE = "[object Map]";
function tE(t) {
  return Jn(t) && $o(t) == eE;
}
var Oh = ka && ka.isMap, nE = Oh ? Xc(Oh) : tE;
const rE = nE;
var aE = "[object Set]";
function oE(t) {
  return Jn(t) && $o(t) == aE;
}
var Sh = ka && ka.isSet, iE = Sh ? Xc(Sh) : oE;
const sE = iE;
var lE = 1, uE = 2, cE = 4, ub = "[object Arguments]", fE = "[object Array]", dE = "[object Boolean]", hE = "[object Date]", pE = "[object Error]", cb = "[object Function]", vE = "[object GeneratorFunction]", mE = "[object Map]", gE = "[object Number]", fb = "[object Object]", bE = "[object RegExp]", yE = "[object Set]", CE = "[object String]", wE = "[object Symbol]", OE = "[object WeakMap]", SE = "[object ArrayBuffer]", _E = "[object DataView]", xE = "[object Float32Array]", PE = "[object Float64Array]", TE = "[object Int8Array]", EE = "[object Int16Array]", kE = "[object Int32Array]", DE = "[object Uint8Array]", $E = "[object Uint8ClampedArray]", IE = "[object Uint16Array]", ME = "[object Uint32Array]", Ge = {};
Ge[ub] = Ge[fE] = Ge[SE] = Ge[_E] = Ge[dE] = Ge[hE] = Ge[xE] = Ge[PE] = Ge[TE] = Ge[EE] = Ge[kE] = Ge[mE] = Ge[gE] = Ge[fb] = Ge[bE] = Ge[yE] = Ge[CE] = Ge[wE] = Ge[DE] = Ge[$E] = Ge[IE] = Ge[ME] = !0;
Ge[pE] = Ge[cb] = Ge[OE] = !1;
function Hi(t, e, n, r, a, o) {
  var s, l = e & lE, u = e & uE, c = e & cE;
  if (n && (s = a ? n(t, r, a, o) : n(t)), s !== void 0)
    return s;
  if (!tr(t))
    return t;
  var f = nn(t);
  if (f) {
    if (s = _2(t), !l)
      return r2(t, s);
  } else {
    var d = $o(t), p = d == cb || d == vE;
    if (hs(t))
      return n2(t, l);
    if (d == fb || d == ub || p && !a) {
      if (s = u || p ? {} : J2(t), !l)
        return u ? f2(t, e2(s, t)) : l2(t, qT(s, t));
    } else {
      if (!Ge[d])
        return a ? t : {};
      s = X2(t, d, l);
    }
  }
  o || (o = new Dn());
  var m = o.get(t);
  if (m)
    return m;
  o.set(t, s), sE(t) ? t.forEach(function(C) {
    s.add(Hi(C, e, n, C, t, o));
  }) : rE(t) && t.forEach(function(C, y) {
    s.set(y, Hi(C, e, n, y, t, o));
  });
  var v = c ? u ? lb : Au : u ? Jc : Ho, g = f ? void 0 : v(t);
  return XP(g || t, function(C, y) {
    g && (y = C, C = t[y]), Zg(s, y, Hi(C, e, n, y, t, o));
  }), s;
}
var AE = "[object Symbol]";
function ol(t) {
  return typeof t == "symbol" || Jn(t) && Lr(t) == AE;
}
var NE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, VE = /^\w*$/;
function rf(t, e) {
  if (nn(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || ol(t) ? !0 : VE.test(t) || !NE.test(t) || e != null && t in Object(e);
}
var RE = "Expected a function";
function af(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(RE);
  var n = function() {
    var r = arguments, a = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = t.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (af.Cache || sr)(), n;
}
af.Cache = sr;
var FE = 500;
function BE(t) {
  var e = af(t, function(r) {
    return n.size === FE && n.clear(), r;
  }), n = e.cache;
  return e;
}
var jE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, LE = /\\(\\)?/g, HE = BE(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(jE, function(n, r, a, o) {
    e.push(a ? o.replace(LE, "$1") : r || n);
  }), e;
});
const zE = HE;
var YE = 1 / 0, _h = tn ? tn.prototype : void 0, xh = _h ? _h.toString : void 0;
function db(t) {
  if (typeof t == "string")
    return t;
  if (nn(t))
    return Kg(t, db) + "";
  if (ol(t))
    return xh ? xh.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -YE ? "-0" : e;
}
function WE(t) {
  return t == null ? "" : db(t);
}
function il(t, e) {
  return nn(t) ? t : rf(t, e) ? [t] : zE(WE(t));
}
function UE(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var GE = 1 / 0;
function zo(t) {
  if (typeof t == "string" || ol(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -GE ? "-0" : e;
}
function of(t, e) {
  e = il(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[zo(e[n++])];
  return n && n == r ? t : void 0;
}
function KE(t, e, n) {
  var r = -1, a = t.length;
  e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = t[r + e];
  return o;
}
function qE(t, e) {
  return e.length < 2 ? t : of(t, KE(e, 0, -1));
}
function XE(t, e) {
  return e = il(e, t), t = qE(t, e), t == null || delete t[zo(UE(e))];
}
function ZE(t) {
  return Rs(t) ? void 0 : t;
}
var Ph = tn ? tn.isConcatSpreadable : void 0;
function QE(t) {
  return nn(t) || Kc(t) || !!(Ph && t && t[Ph]);
}
function hb(t, e, n, r, a) {
  var o = -1, s = t.length;
  for (n || (n = QE), a || (a = []); ++o < s; ) {
    var l = t[o];
    e > 0 && n(l) ? e > 1 ? hb(l, e - 1, n, r, a) : tf(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function JE(t) {
  var e = t == null ? 0 : t.length;
  return e ? hb(t, 1) : [];
}
function ek(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var Th = Math.max;
function tk(t, e, n) {
  return e = Th(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, a = -1, o = Th(r.length - e, 0), s = Array(o); ++a < o; )
      s[a] = r[e + a];
    a = -1;
    for (var l = Array(e + 1); ++a < e; )
      l[a] = r[a];
    return l[e] = n(s), ek(t, this, l);
  };
}
function nk(t) {
  return function() {
    return t;
  };
}
function pb(t) {
  return t;
}
var rk = ds ? function(t, e) {
  return ds(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nk(e),
    writable: !0
  });
} : pb;
const ak = rk;
var ok = 800, ik = 16, sk = Date.now;
function lk(t) {
  var e = 0, n = 0;
  return function() {
    var r = sk(), a = ik - (r - n);
    if (n = r, a > 0) {
      if (++e >= ok)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var uk = lk(ak);
const ck = uk;
function fk(t) {
  return ck(tk(t, void 0, JE), t + "");
}
var dk = 1, hk = 2, pk = 4, vk = fk(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var r = !1;
  e = Kg(e, function(o) {
    return o = il(o, t), r || (r = o.length > 1), o;
  }), Lo(t, lb(t), n), r && (n = Hi(n, dk | hk | pk, ZE));
  for (var a = e.length; a--; )
    XE(n, e[a]);
  return n;
});
const vb = vk;
var mb = Jx({
  prefixCls: "rc-select",
  components: {
    optionList: v_
  },
  convertChildrenToData: Vc,
  flattenOptions: x_,
  getLabeledValue: P_,
  filterOptions: E_,
  isValueDisabled: D_,
  findValueOption: Fc,
  warningProps: eP,
  fillOptionsWithMissingValue: $_
}), Yo = K({
  setup: function(e, n) {
    var r = n.attrs, a = n.expose, o = n.slots, s = Q(null);
    return a({
      focus: function() {
        var u;
        (u = s.value) === null || u === void 0 || u.focus();
      },
      blur: function() {
        var u;
        (u = s.value) === null || u === void 0 || u.blur();
      }
    }), function() {
      var l;
      return h(mb, H(H(H({
        ref: s
      }, e), r), {}, {
        children: ((l = o.default) === null || l === void 0 ? void 0 : l.call(o)) || []
      }), o);
    };
  }
});
Yo.inheritAttrs = !1;
Yo.props = vb(mb.props, ["children"]);
Yo.Option = Tg;
Yo.OptGroup = Eg;
const mk = Yo;
var gk = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const bk = gk;
function en(t, e) {
  yk(t) && (t = "100%");
  var n = Ck(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function yk(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Ck(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function wk(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function li(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function $l(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Ok(t, e, n) {
  return {
    r: en(t, 255) * 255,
    g: en(e, 255) * 255,
    b: en(n, 255) * 255
  };
}
function Il(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * (6 * n) : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Sk(t, e, n) {
  var r, a, o;
  if (t = en(t, 360), e = en(e, 100), n = en(n, 100), e === 0)
    a = n, o = n, r = n;
  else {
    var s = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - s;
    r = Il(l, s, t + 1 / 3), a = Il(l, s, t), o = Il(l, s, t - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function _k(t, e, n) {
  t = en(t, 255), e = en(e, 255), n = en(n, 255);
  var r = Math.max(t, e, n), a = Math.min(t, e, n), o = 0, s = r, l = r - a, u = r === 0 ? 0 : l / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case t:
        o = (e - n) / l + (e < n ? 6 : 0);
        break;
      case e:
        o = (n - t) / l + 2;
        break;
      case n:
        o = (t - e) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: s };
}
function xk(t, e, n) {
  t = en(t, 360) * 6, e = en(e, 100), n = en(n, 100);
  var r = Math.floor(t), a = t - r, o = n * (1 - e), s = n * (1 - a * e), l = n * (1 - (1 - a) * e), u = r % 6, c = [n, s, o, o, l, n][u], f = [l, n, n, s, o, o][u], d = [o, o, l, n, n, s][u];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function Pk(t, e, n, r) {
  var a = [
    $l(Math.round(t).toString(16)),
    $l(Math.round(e).toString(16)),
    $l(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Eh(t) {
  return Vt(t) / 255;
}
function Vt(t) {
  return parseInt(t, 16);
}
var kh = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Ja(t) {
  var e = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, s = !1, l = !1;
  return typeof t == "string" && (t = kk(t)), typeof t == "object" && (Ln(t.r) && Ln(t.g) && Ln(t.b) ? (e = Ok(t.r, t.g, t.b), s = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : Ln(t.h) && Ln(t.s) && Ln(t.v) ? (r = li(t.s), a = li(t.v), e = xk(t.h, r, a), s = !0, l = "hsv") : Ln(t.h) && Ln(t.s) && Ln(t.l) && (r = li(t.s), o = li(t.l), e = Sk(t.h, r, o), s = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (n = t.a)), n = wk(n), {
    ok: s,
    format: t.format || l,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: n
  };
}
var Tk = "[-\\+]?\\d+%?", Ek = "[-\\+]?\\d*\\.\\d+%?", yr = "(?:".concat(Ek, ")|(?:").concat(Tk, ")"), Ml = "[\\s|\\(]+(".concat(yr, ")[,|\\s]+(").concat(yr, ")[,|\\s]+(").concat(yr, ")\\s*\\)?"), Al = "[\\s|\\(]+(".concat(yr, ")[,|\\s]+(").concat(yr, ")[,|\\s]+(").concat(yr, ")[,|\\s]+(").concat(yr, ")\\s*\\)?"), un = {
  CSS_UNIT: new RegExp(yr),
  rgb: new RegExp("rgb" + Ml),
  rgba: new RegExp("rgba" + Al),
  hsl: new RegExp("hsl" + Ml),
  hsla: new RegExp("hsla" + Al),
  hsv: new RegExp("hsv" + Ml),
  hsva: new RegExp("hsva" + Al),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function kk(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (kh[t])
    t = kh[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = un.rgb.exec(t);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = un.rgba.exec(t), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = un.hsl.exec(t), n ? { h: n[1], s: n[2], l: n[3] } : (n = un.hsla.exec(t), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = un.hsv.exec(t), n ? { h: n[1], s: n[2], v: n[3] } : (n = un.hsva.exec(t), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = un.hex8.exec(t), n ? {
    r: Vt(n[1]),
    g: Vt(n[2]),
    b: Vt(n[3]),
    a: Eh(n[4]),
    format: e ? "name" : "hex8"
  } : (n = un.hex6.exec(t), n ? {
    r: Vt(n[1]),
    g: Vt(n[2]),
    b: Vt(n[3]),
    format: e ? "name" : "hex"
  } : (n = un.hex4.exec(t), n ? {
    r: Vt(n[1] + n[1]),
    g: Vt(n[2] + n[2]),
    b: Vt(n[3] + n[3]),
    a: Eh(n[4] + n[4]),
    format: e ? "name" : "hex8"
  } : (n = un.hex3.exec(t), n ? {
    r: Vt(n[1] + n[1]),
    g: Vt(n[2] + n[2]),
    b: Vt(n[3] + n[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function Ln(t) {
  return Boolean(un.CSS_UNIT.exec(String(t)));
}
var ui = 2, Dh = 0.16, Dk = 0.05, $k = 0.05, Ik = 0.15, gb = 5, bb = 4, Mk = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function $h(t) {
  var e = t.r, n = t.g, r = t.b, a = _k(e, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function ci(t) {
  var e = t.r, n = t.g, r = t.b;
  return "#".concat(Pk(e, n, r, !1));
}
function Ak(t, e, n) {
  var r = n / 100, a = {
    r: (e.r - t.r) * r + t.r,
    g: (e.g - t.g) * r + t.g,
    b: (e.b - t.b) * r + t.b
  };
  return a;
}
function Ih(t, e, n) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = n ? Math.round(t.h) - ui * e : Math.round(t.h) + ui * e : r = n ? Math.round(t.h) + ui * e : Math.round(t.h) - ui * e, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Mh(t, e, n) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return n ? r = t.s - Dh * e : e === bb ? r = t.s + Dh : r = t.s + Dk * e, r > 1 && (r = 1), n && e === gb && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Ah(t, e, n) {
  var r;
  return n ? r = t.v + $k * e : r = t.v - Ik * e, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Fu(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Ja(t), a = gb; a > 0; a -= 1) {
    var o = $h(r), s = ci(Ja({
      h: Ih(o, a, !0),
      s: Mh(o, a, !0),
      v: Ah(o, a, !0)
    }));
    n.push(s);
  }
  n.push(ci(r));
  for (var l = 1; l <= bb; l += 1) {
    var u = $h(r), c = ci(Ja({
      h: Ih(u, l),
      s: Mh(u, l),
      v: Ah(u, l)
    }));
    n.push(c);
  }
  return e.theme === "dark" ? Mk.map(function(f) {
    var d = f.index, p = f.opacity, m = ci(Ak(Ja(e.backgroundColor || "#141414"), Ja(n[d]), p * 100));
    return m;
  }) : n;
}
var Nl = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Vl = {}, Rl = {};
Object.keys(Nl).forEach(function(t) {
  Vl[t] = Fu(Nl[t]), Vl[t].primary = Vl[t][5], Rl[t] = Fu(Nl[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Rl[t].primary = Rl[t][5];
});
var Nh = [], eo = [], Nk = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Vk() {
  var t = document.createElement("style");
  return t.setAttribute("type", "text/css"), t;
}
function Rk(t, e) {
  if (e = e || {}, t === void 0)
    throw new Error(Nk);
  var n = e.prepend === !0 ? "prepend" : "append", r = e.container !== void 0 ? e.container : document.querySelector("head"), a = Nh.indexOf(r);
  a === -1 && (a = Nh.push(r) - 1, eo[a] = {});
  var o;
  return eo[a] !== void 0 && eo[a][n] !== void 0 ? o = eo[a][n] : (o = eo[a][n] = Vk(), n === "prepend" ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)), t.charCodeAt(0) === 65279 && (t = t.substr(1, t.length)), o.styleSheet ? o.styleSheet.cssText += t : o.textContent += t, o;
}
function Vh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Fk(t, a, n[a]);
    });
  }
  return t;
}
function Fk(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Bk(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function jk(t, e) {
  Bk(t, "[@ant-design/icons-vue] ".concat(e));
}
function Rh(t) {
  return typeof t == "object" && typeof t.name == "string" && typeof t.theme == "string" && (typeof t.icon == "object" || typeof t.icon == "function");
}
function Bu(t, e, n) {
  return n ? kt(t.tag, Vh({
    key: e
  }, n, t.attrs), (t.children || []).map(function(r, a) {
    return Bu(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  })) : kt(t.tag, Vh({
    key: e
  }, t.attrs), (t.children || []).map(function(r, a) {
    return Bu(r, "".concat(e, "-").concat(t.tag, "-").concat(a));
  }));
}
function yb(t) {
  return Fu(t)[0];
}
function Cb(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var Lk = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Fh = !1, Hk = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lk;
  Le(function() {
    Fh || (typeof window < "u" && window.document && window.document.documentElement && Rk(e, {
      prepend: !0
    }), Fh = !0);
  });
}, zk = ["icon", "primaryColor", "secondaryColor"];
function Yk(t, e) {
  if (t == null)
    return {};
  var n = Wk(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Wk(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function zi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Uk(t, a, n[a]);
    });
  }
  return t;
}
function Uk(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var mo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Gk(t) {
  var e = t.primaryColor, n = t.secondaryColor;
  mo.primaryColor = e, mo.secondaryColor = n || yb(e), mo.calculated = !!n;
}
function Kk() {
  return zi({}, mo);
}
var ja = function(e, n) {
  var r = zi({}, e, n.attrs), a = r.icon, o = r.primaryColor, s = r.secondaryColor, l = Yk(r, zk), u = mo;
  if (o && (u = {
    primaryColor: o,
    secondaryColor: s || yb(o)
  }), Hk(), jk(Rh(a), "icon should be icon definiton, but got ".concat(a)), !Rh(a))
    return null;
  var c = a;
  return c && typeof c.icon == "function" && (c = zi({}, c, {
    icon: c.icon(u.primaryColor, u.secondaryColor)
  })), Bu(c.icon, "svg-".concat(c.name), zi({}, l, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ja.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ja.inheritAttrs = !1;
ja.displayName = "IconBase";
ja.getTwoToneColors = Kk;
ja.setTwoToneColors = Gk;
const sf = ja;
function qk(t, e) {
  return Jk(t) || Qk(t, e) || Zk(t, e) || Xk();
}
function Xk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zk(t, e) {
  if (t) {
    if (typeof t == "string")
      return Bh(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Bh(t, e);
  }
}
function Bh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Qk(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, s, l;
    try {
      for (n = n.call(t); !(a = (s = n.next()).done) && (r.push(s.value), !(e && r.length === e)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function Jk(t) {
  if (Array.isArray(t))
    return t;
}
function wb(t) {
  var e = Cb(t), n = qk(e, 2), r = n[0], a = n[1];
  return sf.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function eD() {
  var t = sf.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var tD = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function nD(t, e) {
  return iD(t) || oD(t, e) || aD(t, e) || rD();
}
function rD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aD(t, e) {
  if (t) {
    if (typeof t == "string")
      return jh(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return jh(t, e);
  }
}
function jh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function oD(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, s, l;
    try {
      for (n = n.call(t); !(a = (s = n.next()).done) && (r.push(s.value), !(e && r.length === e)); a = !0)
        ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function iD(t) {
  if (Array.isArray(t))
    return t;
}
function Lh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ju(t, a, n[a]);
    });
  }
  return t;
}
function ju(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function sD(t, e) {
  if (t == null)
    return {};
  var n = lD(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function lD(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
wb("#1890ff");
var La = function(e, n) {
  var r, a = Lh({}, e, n.attrs), o = a.class, s = a.icon, l = a.spin, u = a.rotate, c = a.tabindex, f = a.twoToneColor, d = a.onClick, p = sD(a, tD), m = (r = {
    anticon: !0
  }, ju(r, "anticon-".concat(s.name), Boolean(s.name)), ju(r, o, o), r), v = l === "" || l || s.name === "loading" ? "anticon-spin" : "", g = c;
  g === void 0 && d && (g = -1, p.tabindex = g);
  var C = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, y = Cb(f), O = nD(y, 2), w = O[0], _ = O[1];
  return h("span", Lh({
    role: "img",
    "aria-label": s.name
  }, p, {
    onClick: d,
    class: m
  }), [h(sf, {
    class: v,
    icon: s,
    primaryColor: w,
    secondaryColor: _,
    style: C
  }, null)]);
};
La.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
La.displayName = "AntdIcon";
La.inheritAttrs = !1;
La.getTwoToneColor = eD;
La.setTwoToneColor = wb;
const Pe = La;
function Hh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      uD(t, a, n[a]);
    });
  }
  return t;
}
function uD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var lf = function(e, n) {
  var r = Hh({}, e, n.attrs);
  return h(Pe, Hh({}, r, {
    icon: bk
  }), null);
};
lf.displayName = "DownOutlined";
lf.inheritAttrs = !1;
const uf = lf;
var cD = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const fD = cD;
function zh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      dD(t, a, n[a]);
    });
  }
  return t;
}
function dD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var cf = function(e, n) {
  var r = zh({}, e, n.attrs);
  return h(Pe, zh({}, r, {
    icon: fD
  }), null);
};
cf.displayName = "LoadingOutlined";
cf.inheritAttrs = !1;
const Da = cf;
var hD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const pD = hD;
function Yh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      vD(t, a, n[a]);
    });
  }
  return t;
}
function vD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ff = function(e, n) {
  var r = Yh({}, e, n.attrs);
  return h(Pe, Yh({}, r, {
    icon: pD
  }), null);
};
ff.displayName = "CheckOutlined";
ff.inheritAttrs = !1;
const Ob = ff;
var mD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const gD = mD;
function Wh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      bD(t, a, n[a]);
    });
  }
  return t;
}
function bD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var df = function(e, n) {
  var r = Wh({}, e, n.attrs);
  return h(Pe, Wh({}, r, {
    icon: gD
  }), null);
};
df.displayName = "CloseOutlined";
df.inheritAttrs = !1;
const Wo = df;
var yD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const CD = yD;
function Uh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      wD(t, a, n[a]);
    });
  }
  return t;
}
function wD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var hf = function(e, n) {
  var r = Uh({}, e, n.attrs);
  return h(Pe, Uh({}, r, {
    icon: CD
  }), null);
};
hf.displayName = "CloseCircleFilled";
hf.inheritAttrs = !1;
const lr = hf;
var OD = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const SD = OD;
function Gh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      _D(t, a, n[a]);
    });
  }
  return t;
}
function _D(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var pf = function(e, n) {
  var r = Gh({}, e, n.attrs);
  return h(Pe, Gh({}, r, {
    icon: SD
  }), null);
};
pf.displayName = "SearchOutlined";
pf.inheritAttrs = !1;
const Lu = pf;
function xD(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.loading, r = t.multiple, a = t.prefixCls, o = t.suffixIcon || e.suffixIcon && e.suffixIcon(), s = t.clearIcon || e.clearIcon && e.clearIcon(), l = t.menuItemSelectedIcon || e.menuItemSelectedIcon && e.menuItemSelectedIcon(), u = t.removeIcon || e.removeIcon && e.removeIcon(), c = s;
  s || (c = h(lr, null, null));
  var f = null;
  if (o !== void 0)
    f = o;
  else if (n)
    f = h(Da, {
      spin: !0
    }, null);
  else {
    var d = "".concat(a, "-suffix");
    f = function(g) {
      var C = g.open, y = g.showSearch;
      return C && y ? h(Lu, {
        class: d
      }, null) : h(uf, {
        class: d
      }, null);
    };
  }
  var p = null;
  l !== void 0 ? p = l : r ? p = h(Ob, null, null) : p = null;
  var m = null;
  return u !== void 0 ? m = u : m = h(Wo, null, null), {
    clearIcon: c,
    suffixIcon: f,
    itemIcon: p,
    removeIcon: m
  };
}
var PD = function() {
  return b(b({}, Ma(Gg(), ["inputIcon", "mode", "getInputElement", "backfill", "class", "style"])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: i.VNodeChild,
    suffixIcon: i.VNodeChild,
    itemIcon: i.VNodeChild,
    size: i.oneOf(ke("small", "middle", "large", "default")),
    mode: i.oneOf(ke("multiple", "tags", "SECRET_COMBOBOX_MODE_DO_NOT_USE")),
    bordered: i.looseBool.def(!0),
    transitionName: i.string.def("slide-up"),
    choiceTransitionName: i.string.def("")
  });
}, dn = K({
  name: "ASelect",
  Option: Tg,
  OptGroup: Eg,
  inheritAttrs: !1,
  props: PD(),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  emits: ["change", "update:value"],
  slots: ["notFoundContent", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "dropdownRender", "option"],
  setup: function(e, n) {
    var r = n.attrs, a = n.emit, o = n.slots, s = n.expose, l = Q(null), u = function() {
      l.value && l.value.focus();
    }, c = function() {
      l.value && l.value.blur();
    }, f = W(function() {
      var y = e.mode;
      if (y !== "combobox")
        return y === dn.SECRET_COMBOBOX_MODE_DO_NOT_USE ? "combobox" : y;
    }), d = Yr("select", e), p = d.prefixCls, m = d.direction, v = d.configProvider, g = W(function() {
      var y;
      return Z((y = {}, S(y, "".concat(p.value, "-lg"), e.size === "large"), S(y, "".concat(p.value, "-sm"), e.size === "small"), S(y, "".concat(p.value, "-rtl"), m.value === "rtl"), S(y, "".concat(p.value, "-borderless"), !e.bordered), y));
    }), C = function() {
      for (var O = arguments.length, w = new Array(O), _ = 0; _ < O; _++)
        w[_] = arguments[_];
      a("update:value", w[0]), a.apply(void 0, ["change"].concat(w));
    };
    return s({
      blur: c,
      focus: u
    }), function() {
      var y, O = e.notFoundContent, w = e.listHeight, _ = w === void 0 ? 256 : w, x = e.listItemHeight, P = x === void 0 ? 24 : x, T = e.getPopupContainer, M = e.dropdownClassName, $ = e.virtual, k = e.dropdownMatchSelectWidth, V = v.renderEmpty, I = v.getPopupContainer, F = f.value === "multiple" || f.value === "tags", B;
      O !== void 0 ? B = O : o.notFoundContent ? B = o.notFoundContent() : f.value === "combobox" ? B = null : B = V("Select");
      var E = xD(b(b({}, e), {
        multiple: F,
        prefixCls: p.value
      }), o), j = E.suffixIcon, D = E.itemIcon, N = E.removeIcon, U = E.clearIcon, L = Ma(e, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]), ne = Z(M, S({}, "".concat(p.value, "-dropdown-").concat(m.value), m.value === "rtl"));
      return h(mk, H(H(H({
        ref: l,
        virtual: $,
        dropdownMatchSelectWidth: k
      }, L), r), {}, {
        listHeight: _,
        listItemHeight: P,
        mode: f.value,
        prefixCls: p.value,
        direction: m.value,
        inputIcon: j,
        menuItemSelectedIcon: D,
        removeIcon: N,
        clearIcon: U,
        notFoundContent: B,
        class: [g.value, r.class],
        getPopupContainer: T || I,
        dropdownClassName: ne,
        onChange: C,
        dropdownRender: L.dropdownRender || o.dropdownRender
      }), {
        default: function() {
          return [(y = o.default) === null || y === void 0 ? void 0 : y.call(o)];
        },
        option: o.option
      });
    };
  }
});
dn.install = function(t) {
  return t.component(dn.name, dn), t.component(dn.Option.displayName, dn.Option), t.component(dn.OptGroup.displayName, dn.OptGroup), t;
};
var TD = dn.Option;
dn.OptGroup;
const ED = dn, Uo = {
  prefixCls: i.string,
  inputPrefixCls: i.string,
  defaultValue: i.oneOfType([i.string, i.number]),
  value: i.oneOfType([i.string, i.number]),
  placeholder: {
    type: [String, Number]
  },
  type: i.string.def("text"),
  name: i.string,
  size: {
    type: String
  },
  disabled: i.looseBool,
  readonly: i.looseBool,
  addonBefore: i.VNodeChild,
  addonAfter: i.VNodeChild,
  prefix: i.VNodeChild,
  suffix: i.VNodeChild,
  autofocus: i.looseBool,
  allowClear: i.looseBool,
  lazy: i.looseBool.def(!0),
  maxlength: i.number,
  loading: i.looseBool,
  onPressEnter: i.func,
  onKeydown: i.func,
  onKeyup: i.func,
  onFocus: i.func,
  onBlur: i.func,
  onChange: i.func,
  onInput: i.func,
  "onUpdate:value": i.func
};
function kD(t) {
  return !!(ce(t, "prefix") || ce(t, "suffix") || t.$props.allowClear);
}
var Kh = ["text", "input"], DD = K({
  name: "ClearableLabeledInput",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    inputType: i.oneOf(ke("text", "input")),
    value: i.any,
    defaultValue: i.any,
    allowClear: i.looseBool,
    element: i.VNodeChild,
    handleReset: i.func,
    disabled: i.looseBool,
    size: i.oneOf(ke("small", "large", "default")),
    suffix: i.VNodeChild,
    prefix: i.VNodeChild,
    addonBefore: i.VNodeChild,
    addonAfter: i.VNodeChild,
    readonly: i.looseBool,
    isFocused: i.looseBool
  },
  methods: {
    renderClearIcon: function(e) {
      var n = this.$props, r = n.allowClear, a = n.value, o = n.disabled, s = n.readonly, l = n.inputType, u = n.handleReset;
      if (!r)
        return null;
      var c = !o && !s && a !== void 0 && a !== null && a !== "", f = l === Kh[0] ? "".concat(e, "-textarea-clear-icon") : "".concat(e, "-clear-icon");
      return h(lr, {
        onClick: u,
        class: Z(f, S({}, "".concat(f, "-hidden"), !c)),
        role: "button"
      }, null);
    },
    renderSuffix: function(e) {
      var n = this.$props, r = n.suffix, a = n.allowClear;
      return r || a ? h("span", {
        class: "".concat(e, "-suffix")
      }, [this.renderClearIcon(e), r]) : null;
    },
    renderLabeledIcon: function(e, n) {
      var r, a, o = this.$props, s = this.$attrs.style, l = this.renderSuffix(e);
      if (!kD(this))
        return je(n, {
          value: o.value
        });
      var u = o.prefix ? h("span", {
        class: "".concat(e, "-prefix")
      }, [o.prefix]) : null, c = Z((a = this.$attrs) === null || a === void 0 ? void 0 : a.class, "".concat(e, "-affix-wrapper"), (r = {}, S(r, "".concat(e, "-affix-wrapper-focused"), o.isFocused), S(r, "".concat(e, "-affix-wrapper-disabled"), o.disabled), S(r, "".concat(e, "-affix-wrapper-sm"), o.size === "small"), S(r, "".concat(e, "-affix-wrapper-lg"), o.size === "large"), S(r, "".concat(e, "-affix-wrapper-input-with-clear-btn"), o.suffix && o.allowClear && this.$props.value), r));
      return h("span", {
        class: c,
        style: s
      }, [u, je(n, {
        style: null,
        value: o.value,
        class: xb(e, o.size, o.disabled)
      }), l]);
    },
    renderInputWithLabel: function(e, n) {
      var r, a = this.$props, o = a.addonBefore, s = a.addonAfter, l = a.size, u = this.$attrs, c = u.style, f = u.class;
      if (!o && !s)
        return n;
      var d = "".concat(e, "-group"), p = "".concat(d, "-addon"), m = o ? h("span", {
        class: p
      }, [o]) : null, v = s ? h("span", {
        class: p
      }, [s]) : null, g = Z("".concat(e, "-wrapper"), S({}, d, o || s)), C = Z(f, "".concat(e, "-group-wrapper"), (r = {}, S(r, "".concat(e, "-group-wrapper-sm"), l === "small"), S(r, "".concat(e, "-group-wrapper-lg"), l === "large"), r));
      return h("span", {
        class: C,
        style: c
      }, [h("span", {
        class: g
      }, [m, je(n, {
        style: null
      }), v])]);
    },
    renderTextAreaWithClearIcon: function(e, n) {
      var r = this.$props, a = r.value, o = r.allowClear, s = this.$attrs, l = s.style, u = s.class;
      if (!o)
        return je(n, {
          value: a
        });
      var c = Z(u, "".concat(e, "-affix-wrapper"), "".concat(e, "-affix-wrapper-textarea-with-clear-btn"));
      return h("span", {
        class: c,
        style: l
      }, [je(n, {
        style: null,
        value: a
      }), this.renderClearIcon(e)]);
    },
    renderClearableLabeledInput: function() {
      var e = this.$props, n = e.prefixCls, r = e.inputType, a = e.element;
      return r === Kh[0] ? this.renderTextAreaWithClearIcon(n, a) : this.renderInputWithLabel(n, this.renderLabeledIcon(n, a));
    }
  },
  render: function() {
    return this.renderClearableLabeledInput();
  }
});
const Sb = DD;
function _b(t) {
  return typeof t > "u" || t === null ? "" : t;
}
function vs(t, e, n) {
  if (n) {
    var r = e;
    if (e.type === "click") {
      Object.defineProperty(r, "target", {
        writable: !0
      }), Object.defineProperty(r, "currentTarget", {
        writable: !0
      }), r.target = t, r.currentTarget = t;
      var a = t.value;
      t.value = "", n(r), t.value = a;
      return;
    }
    n(r);
  }
}
function xb(t, e, n) {
  var r;
  return Z(t, (r = {}, S(r, "".concat(t, "-sm"), e === "small"), S(r, "".concat(t, "-lg"), e === "large"), S(r, "".concat(t, "-disabled"), n), r));
}
const pt = K({
  name: "AInput",
  inheritAttrs: !1,
  props: b({}, Uo),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      removePasswordTimeout: void 0,
      input: null,
      clearableInput: null
    };
  },
  data: function() {
    var e = this.$props, n = typeof e.value > "u" ? e.defaultValue : e.value;
    return {
      stateValue: typeof n > "u" ? "" : n,
      isFocused: !1
    };
  },
  watch: {
    value: function(e) {
      this.stateValue = e;
    }
  },
  mounted: function() {
    var e = this;
    Le(function() {
      process.env.NODE_ENV === "test" && e.autofocus && e.focus(), e.clearPasswordValueAttribute();
    });
  },
  beforeUnmount: function() {
    this.removePasswordTimeout && clearTimeout(this.removePasswordTimeout);
  },
  methods: {
    handleInputFocus: function(e) {
      this.isFocused = !0, this.onFocus && this.onFocus(e);
    },
    handleInputBlur: function(e) {
      this.isFocused = !1, this.onBlur && this.onBlur(e);
    },
    focus: function() {
      this.input.focus();
    },
    blur: function() {
      this.input.blur();
    },
    select: function() {
      this.input.select();
    },
    saveClearableInput: function(e) {
      this.clearableInput = e;
    },
    saveInput: function(e) {
      this.input = e;
    },
    setValue: function(e, n) {
      this.stateValue !== e && (Se(this, "value") ? this.$forceUpdate() : this.stateValue = e, Le(function() {
        n && n();
      }));
    },
    triggerChange: function(e) {
      this.$emit("update:value", e.target.value), this.$emit("change", e), this.$emit("input", e);
    },
    handleReset: function(e) {
      var n = this;
      this.setValue("", function() {
        n.focus();
      }), vs(this.input, e, this.triggerChange);
    },
    renderInput: function(e, n) {
      var r = n.addonBefore, a = n.addonAfter, o = Ma(this.$props, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "lazy", "size", "inputPrefixCls", "loading"]), s = this.handleKeyDown, l = this.handleChange, u = this.handleInputFocus, c = this.handleInputBlur, f = this.size, d = this.disabled, p = this.$attrs, m = b(b(b({}, o), p), {
        onKeydown: s,
        class: Z(xb(e, f, d), S({}, p.class, p.class && !r && !a)),
        ref: this.saveInput,
        key: "ant-input",
        onInput: l,
        onChange: l,
        onFocus: u,
        onBlur: c
      });
      m.autofocus || delete m.autofocus;
      var v = h("input", m, null);
      return In(v, [[Bo]]);
    },
    clearPasswordValueAttribute: function() {
      var e = this;
      this.removePasswordTimeout = setTimeout(function() {
        e.input && e.input.getAttribute && e.input.getAttribute("type") === "password" && e.input.hasAttribute("value") && e.input.removeAttribute("value");
      });
    },
    handleChange: function(e) {
      var n = e.target, r = n.value, a = n.composing, o = n.isComposing;
      (o || a) && this.lazy || this.stateValue === r || (this.setValue(r, this.clearPasswordValueAttribute), vs(this.input, e, this.triggerChange));
    },
    handleKeyDown: function(e) {
      e.keyCode === 13 && this.$emit("pressEnter", e), this.$emit("keydown", e);
    }
  },
  render: function() {
    var e = this.$props.prefixCls, n = this.$data, r = n.stateValue, a = n.isFocused, o = this.configProvider.getPrefixCls, s = o("input", e), l = ce(this, "addonAfter"), u = ce(this, "addonBefore"), c = ce(this, "suffix"), f = ce(this, "prefix"), d = b(b(b({}, this.$attrs), me(this)), {
      prefixCls: s,
      inputType: "input",
      value: _b(r),
      element: this.renderInput(s, {
        addonAfter: l,
        addonBefore: u
      }),
      handleReset: this.handleReset,
      addonAfter: l,
      addonBefore: u,
      suffix: c,
      prefix: f,
      isFocused: a
    });
    return h(Sb, H(H({}, d), {}, {
      ref: this.saveClearableInput
    }), null);
  }
}), $D = K({
  name: "AInputGroup",
  props: {
    prefixCls: i.string,
    size: i.oneOf(ke("small", "large", "default")),
    compact: i.looseBool
  },
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  computed: {
    classes: function() {
      var e, n = this.prefixCls, r = this.size, a = this.compact, o = a === void 0 ? !1 : a, s = this.configProvider, l = s.getPrefixCls, u = l("input-group", n);
      return e = {}, S(e, "".concat(u), !0), S(e, "".concat(u, "-lg"), r === "large"), S(e, "".concat(u, "-sm"), r === "small"), S(e, "".concat(u, "-compact"), o), e;
    }
  },
  render: function() {
    return h("span", {
      class: this.classes
    }, [et(this)]);
  }
});
var Fl = /iPhone/i, qh = /iPod/i, Xh = /iPad/i, Bl = /\bAndroid(?:.+)Mobile\b/i, Zh = /Android/i, Qr = /\bAndroid(?:.+)SD4930UR\b/i, fi = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, Hn = /Windows Phone/i, Qh = /\bWindows(?:.+)ARM\b/i, Jh = /BlackBerry/i, ep = /BB10/i, tp = /Opera Mini/i, np = /\b(CriOS|Chrome)(?:.+)Mobile/i, rp = /Mobile(?:.+)Firefox\b/i;
function de(t, e) {
  return t.test(e);
}
function ap(t) {
  var e = t || (typeof navigator < "u" ? navigator.userAgent : ""), n = e.split("[FBAN");
  if (typeof n[1] < "u") {
    var r = n, a = ht(r, 1);
    e = a[0];
  }
  if (n = e.split("Twitter"), typeof n[1] < "u") {
    var o = n, s = ht(o, 1);
    e = s[0];
  }
  var l = {
    apple: {
      phone: de(Fl, e) && !de(Hn, e),
      ipod: de(qh, e),
      tablet: !de(Fl, e) && de(Xh, e) && !de(Hn, e),
      device: (de(Fl, e) || de(qh, e) || de(Xh, e)) && !de(Hn, e)
    },
    amazon: {
      phone: de(Qr, e),
      tablet: !de(Qr, e) && de(fi, e),
      device: de(Qr, e) || de(fi, e)
    },
    android: {
      phone: !de(Hn, e) && de(Qr, e) || !de(Hn, e) && de(Bl, e),
      tablet: !de(Hn, e) && !de(Qr, e) && !de(Bl, e) && (de(fi, e) || de(Zh, e)),
      device: !de(Hn, e) && (de(Qr, e) || de(fi, e) || de(Bl, e) || de(Zh, e)) || de(/\bokhttp\b/i, e)
    },
    windows: {
      phone: de(Hn, e),
      tablet: de(Qh, e),
      device: de(Hn, e) || de(Qh, e)
    },
    other: {
      blackberry: de(Jh, e),
      blackberry10: de(ep, e),
      opera: de(tp, e),
      firefox: de(rp, e),
      chrome: de(np, e),
      device: de(Jh, e) || de(ep, e) || de(tp, e) || de(rp, e) || de(np, e)
    },
    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  return l.any = l.apple.device || l.android.device || l.windows.device || l.other.device, l.phone = l.apple.phone || l.android.phone || l.windows.phone, l.tablet = l.apple.tablet || l.android.tablet || l.windows.tablet, l;
}
var ID = b(b({}, ap()), {
  isMobile: ap
});
const MD = ID;
var jl = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
}, Ll = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
}, oa = [], ia = [];
function AD() {
  var t = document.createElement("div"), e = t.style;
  "AnimationEvent" in window || (delete jl.animationstart.animation, delete Ll.animationend.animation), "TransitionEvent" in window || (delete jl.transitionstart.transition, delete Ll.transitionend.transition);
  function n(r, a) {
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = r[o];
        for (var l in s)
          if (l in e) {
            a.push(s[l]);
            break;
          }
      }
  }
  n(jl, oa), n(Ll, ia);
}
typeof window < "u" && typeof document < "u" && AD();
function op(t, e, n) {
  t.addEventListener(e, n, !1);
}
function ip(t, e, n) {
  t.removeEventListener(e, n, !1);
}
var ND = {
  // Start events
  startEvents: oa,
  addStartEventListener: function(e, n) {
    if (oa.length === 0) {
      window.setTimeout(n, 0);
      return;
    }
    oa.forEach(function(r) {
      op(e, r, n);
    });
  },
  removeStartEventListener: function(e, n) {
    oa.length !== 0 && oa.forEach(function(r) {
      ip(e, r, n);
    });
  },
  // End events
  endEvents: ia,
  addEndEventListener: function(e, n) {
    if (ia.length === 0) {
      window.setTimeout(n, 0);
      return;
    }
    ia.forEach(function(r) {
      op(e, r, n);
    });
  },
  removeEndEventListener: function(e, n) {
    ia.length !== 0 && ia.forEach(function(r) {
      ip(e, r, n);
    });
  }
};
const di = ND;
var dr;
function sp(t) {
  return process.env.NODE_ENV === "test" ? !1 : !t || t.offsetParent === null;
}
function VD(t) {
  var e = (t || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  return e && e[1] && e[2] && e[3] ? !(e[1] === e[2] && e[2] === e[3]) : !0;
}
const Pb = K({
  name: "Wave",
  props: ["insertExtraNode"],
  setup: function() {
    var e = ye("configProvider", He);
    return {
      configProvider: e
    };
  },
  mounted: function() {
    var e = this;
    Le(function() {
      var n = Yt(e);
      n.nodeType === 1 && (e.instance = e.bindAnimationEvent(n));
    });
  },
  beforeUnmount: function() {
    this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId);
  },
  methods: {
    onClick: function(e, n) {
      if (!(!e || sp(e) || e.className.indexOf("-leave") >= 0)) {
        var r = this.$props.insertExtraNode;
        this.extraNode = document.createElement("div");
        var a = this.extraNode;
        a.className = "ant-click-animating-node";
        var o = this.getAttributeName();
        e.removeAttribute(o), e.setAttribute(o, "true"), dr = dr || document.createElement("style"), n && n !== "#ffffff" && n !== "rgb(255, 255, 255)" && VD(n) && !/rgba\(\d*, \d*, \d*, 0\)/.test(n) && // any transparent rgba color
        n !== "transparent" && (this.csp && this.csp.nonce && (dr.nonce = this.csp.nonce), a.style.borderColor = n, dr.innerHTML = `
        [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
          --antd-wave-shadow-color: `.concat(n, `;
        }`), document.body.contains(dr) || document.body.appendChild(dr)), r && e.appendChild(a), di.addStartEventListener(e, this.onTransitionStart), di.addEndEventListener(e, this.onTransitionEnd);
      }
    },
    onTransitionStart: function(e) {
      if (!this._.isUnmounted) {
        var n = Yt(this);
        !e || e.target !== n || this.animationStart || this.resetEffect(n);
      }
    },
    onTransitionEnd: function(e) {
      !e || e.animationName !== "fadeEffect" || this.resetEffect(e.target);
    },
    getAttributeName: function() {
      var e = this.$props.insertExtraNode;
      return e ? "ant-click-animating" : "ant-click-animating-without-extra-node";
    },
    bindAnimationEvent: function(e) {
      var n = this;
      if (!(!e || !e.getAttribute || e.getAttribute("disabled") || e.className.indexOf("disabled") >= 0)) {
        var r = function(o) {
          if (!(o.target.tagName === "INPUT" || sp(o.target))) {
            n.resetEffect(e);
            var s = getComputedStyle(e).getPropertyValue("border-top-color") || // Firefox Compatible
            getComputedStyle(e).getPropertyValue("border-color") || getComputedStyle(e).getPropertyValue("background-color");
            n.clickWaveTimeoutId = window.setTimeout(function() {
              return n.onClick(e, s);
            }, 0), yt.cancel(n.animationStartId), n.animationStart = !0, n.animationStartId = yt(function() {
              n.animationStart = !1;
            }, 10);
          }
        };
        return e.addEventListener("click", r, !0), {
          cancel: function() {
            e.removeEventListener("click", r, !0);
          }
        };
      }
    },
    resetEffect: function(e) {
      if (!(!e || e === this.extraNode || !(e instanceof Element))) {
        var n = this.$props.insertExtraNode, r = this.getAttributeName();
        e.setAttribute(r, "false"), dr && (dr.innerHTML = ""), n && this.extraNode && e.contains(this.extraNode) && e.removeChild(this.extraNode), di.removeStartEventListener(e, this.onTransitionStart), di.removeEndEventListener(e, this.onTransitionEnd);
      }
    }
  },
  render: function() {
    var e, n, r = this.configProvider.csp;
    return r && (this.csp = r), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)[0];
  }
});
var RD = ke("default", "primary", "ghost", "dashed", "link", "text"), FD = ke("circle", "round"), BD = ke("submit", "button", "reset");
function jD(t) {
  return t === "danger" ? {
    danger: !0
  } : {
    type: t
  };
}
var LD = function() {
  return {
    prefixCls: i.string,
    type: i.oneOf(RD),
    htmlType: i.oneOf(BD).def("button"),
    shape: i.oneOf(FD),
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function() {
        return !1;
      }
    },
    disabled: i.looseBool,
    ghost: i.looseBool,
    block: i.looseBool,
    danger: i.looseBool,
    icon: i.VNodeChild,
    href: i.string,
    target: i.string,
    title: i.string,
    onClick: {
      type: Function
    }
  };
};
const HD = LD, zD = function(t, e, n) {
  cn(t, "[ant-design-vue: ".concat(e, "] ").concat(n));
};
var lp = /^[\u4e00-\u9fa5]{2}$/, up = lp.test.bind(lp), YD = HD();
function hi(t) {
  return t === "text" || t === "link";
}
const Xn = K({
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: YD,
  slots: ["icon"],
  emits: ["click"],
  setup: function(e, n) {
    var r = n.slots, a = n.attrs, o = n.emit, s = Yr("btn", e), l = s.prefixCls, u = s.autoInsertSpaceInButton, c = s.direction, f = Q(null), d = Q(void 0), p = !1, m = Q(!1), v = Q(!1), g = W(function() {
      return u.value !== !1;
    }), C = W(function() {
      return Ye(e.loading) === "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading;
    });
    it(C, function(x) {
      clearTimeout(d.value), typeof C.value == "number" ? d.value = window.setTimeout(function() {
        m.value = x;
      }, C.value) : m.value = x;
    }, {
      immediate: !0
    });
    var y = W(function() {
      var x, P = e.type, T = e.shape, M = e.size, $ = e.ghost, k = e.block, V = e.danger, I = l.value, F = "";
      switch (M) {
        case "large":
          F = "lg";
          break;
        case "small":
          F = "sm";
          break;
      }
      return x = {}, S(x, "".concat(I), !0), S(x, "".concat(I, "-").concat(P), P), S(x, "".concat(I, "-").concat(T), T), S(x, "".concat(I, "-").concat(F), F), S(x, "".concat(I, "-loading"), m.value), S(x, "".concat(I, "-background-ghost"), $ && !hi(P)), S(x, "".concat(I, "-two-chinese-chars"), v.value && g.value), S(x, "".concat(I, "-block"), k), S(x, "".concat(I, "-dangerous"), !!V), S(x, "".concat(I, "-rtl"), c.value === "rtl"), x;
    }), O = function() {
      var P = f.value;
      if (!(!P || u.value === !1)) {
        var T = P.textContent;
        p && up(T) ? v.value || (v.value = !0) : v.value && (v.value = !1);
      }
    }, w = function(P) {
      if (m.value || e.disabled) {
        P.preventDefault();
        return;
      }
      o("click", P);
    }, _ = function(P, T) {
      var M = T ? " " : "";
      if (P.type === rc) {
        var $ = P.children.trim();
        return up($) && ($ = $.split("").join(M)), h("span", null, [$]);
      }
      return P;
    };
    return Mo(function() {
      zD(!(e.ghost && hi(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), Dt(O), Ds(O), Ao(function() {
      d.value && clearTimeout(d.value);
    }), function() {
      var x = Nr(la(r, e)), P = la(r, e, "icon");
      p = x.length === 1 && !P && !hi(e.type);
      var T = e.type, M = e.htmlType, $ = e.disabled, k = e.href, V = e.title, I = e.target, F = m.value ? "loading" : P, B = b(b({}, a), {
        title: V,
        disabled: $,
        class: [y.value, a.class, S({}, "".concat(l.value, "-icon-only"), x.length === 0 && !!F)],
        onClick: w
      }), E = m.value ? h(Da, null, null) : P, j = x.map(function(N) {
        return _(N, p && g.value);
      });
      if (k !== void 0)
        return h("a", H(H({}, B), {}, {
          href: k,
          target: I,
          ref: f
        }), [E, j]);
      var D = h("button", H(H({}, B), {}, {
        ref: f,
        type: M
      }), [E, j]);
      return hi(T) ? D : h(Pb, {
        ref: "wave"
      }, {
        default: function() {
          return [D];
        }
      });
    };
  }
});
var WD = {
  prefixCls: i.string,
  size: {
    type: String
  }
};
const Hu = K({
  name: "AButtonGroup",
  props: WD,
  setup: function(e, n) {
    var r = n.slots, a = Yr("btn-group", e), o = a.prefixCls, s = a.direction, l = W(function() {
      var u, c = e.size, f = "";
      switch (c) {
        case "large":
          f = "lg";
          break;
        case "small":
          f = "sm";
          break;
      }
      return u = {}, S(u, "".concat(o.value), !0), S(u, "".concat(o.value, "-").concat(f), f), S(u, "".concat(o.value, "-rtl"), s.value === "rtl"), u;
    });
    return function() {
      var u;
      return h("div", {
        class: l.value
      }, [Nr((u = r.default) === null || u === void 0 ? void 0 : u.call(r))]);
    };
  }
});
Xn.Group = Hu;
Xn.install = function(t) {
  return t.component(Xn.name, Xn), t.component(Hu.name, Hu), t;
};
var UD = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const GD = K({
  name: "AInputSearch",
  inheritAttrs: !1,
  props: b(b({}, Uo), {
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: i.VNodeChild,
    onSearch: i.func
  }),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      input: null
    };
  },
  methods: {
    saveInput: function(e) {
      this.input = e;
    },
    handleChange: function(e) {
      this.$emit("update:value", e.target.value), e && e.target && e.type === "click" && this.$emit("search", e.target.value, e), this.$emit("change", e);
    },
    handleSearch: function(e) {
      this.loading || this.disabled || (this.$emit("search", this.input.stateValue, e), MD.tablet || this.input.focus());
    },
    focus: function() {
      this.input.focus();
    },
    blur: function() {
      this.input.blur();
    },
    renderLoading: function(e) {
      var n = this.$props.size, r = ce(this, "enterButton");
      return r = r || r === "", r ? h(Xn, {
        class: "".concat(e, "-button"),
        type: "primary",
        size: n,
        key: "enterButton"
      }, {
        default: function() {
          return [h(Da, null, null)];
        }
      }) : h(Da, {
        class: "".concat(e, "-icon"),
        key: "loadingIcon"
      }, null);
    },
    renderSuffix: function(e) {
      var n = this.loading, r = ce(this, "suffix"), a = ce(this, "enterButton");
      if (a = a || a === "", n && !a)
        return [r, this.renderLoading(e)];
      if (a)
        return r;
      var o = h(Lu, {
        class: "".concat(e, "-icon"),
        key: "searchIcon",
        onClick: this.handleSearch
      }, null);
      return r ? [r, o] : o;
    },
    renderAddonAfter: function(e) {
      var n = this.size, r = this.disabled, a = this.loading, o = "".concat(e, "-button"), s = ce(this, "enterButton");
      s = s || s === "";
      var l = ce(this, "addonAfter");
      if (a && s)
        return [this.renderLoading(e), l];
      if (!s)
        return l;
      var u = Array.isArray(s) ? s[0] : s, c, f = u.type && Rs(u.type) && u.type.__ANT_BUTTON;
      return u.tagName === "button" || f ? c = je(u, b(b({
        key: "enterButton",
        class: f ? o : ""
      }, f ? {
        size: n
      } : {}), {
        onClick: this.handleSearch
      })) : c = h(Xn, {
        class: o,
        type: "primary",
        size: n,
        disabled: r,
        key: "enterButton",
        onClick: this.handleSearch
      }, {
        default: function() {
          return [s === !0 || s === "" ? h(Lu, null, null) : s];
        }
      }), l ? [c, l] : c;
    }
  },
  render: function() {
    var e = b(b({}, me(this)), this.$attrs), n = e.prefixCls, r = e.inputPrefixCls, a = e.size, o = e.class, s = UD(e, ["prefixCls", "inputPrefixCls", "size", "class"]);
    delete s.onSearch, delete s.loading, delete s.enterButton, delete s.addonBefore, delete s["onUpdate:value"];
    var l = this.configProvider.getPrefixCls, u = l("input-search", n), c = l("input", r), f = ce(this, "enterButton"), d = ce(this, "addonBefore");
    f = f || f === "";
    var p;
    if (f) {
      var m;
      p = Z(u, o, (m = {}, S(m, "".concat(u, "-enter-button"), !!f), S(m, "".concat(u, "-").concat(a), !!a), m));
    } else
      p = Z(u, o);
    var v = b(b({}, s), {
      prefixCls: c,
      size: a,
      suffix: this.renderSuffix(u),
      prefix: ce(this, "prefix"),
      addonAfter: this.renderAddonAfter(u),
      addonBefore: d,
      class: p,
      onPressEnter: this.handleSearch,
      onChange: this.handleChange
    });
    return h(pt, H(H({}, v), {}, {
      ref: this.saveInput
    }), null);
  }
});
var KD = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`, qD = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"], Hl = {}, _n;
function XD(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.getAttribute("id") || t.getAttribute("data-reactid") || t.getAttribute("name");
  if (e && Hl[n])
    return Hl[n];
  var r = window.getComputedStyle(t), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), s = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = qD.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), u = {
    sizingStyle: l,
    paddingSize: o,
    borderSize: s,
    boxSizing: a
  };
  return e && n && (Hl[n] = u), u;
}
function ZD(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  _n || (_n = document.createElement("textarea"), document.body.appendChild(_n)), t.getAttribute("wrap") ? _n.setAttribute("wrap", t.getAttribute("wrap")) : _n.removeAttribute("wrap");
  var a = XD(t, e), o = a.paddingSize, s = a.borderSize, l = a.boxSizing, u = a.sizingStyle;
  _n.setAttribute("style", "".concat(u, ";").concat(KD)), _n.value = t.value || t.placeholder || "";
  var c = Number.MIN_SAFE_INTEGER, f = Number.MAX_SAFE_INTEGER, d = _n.scrollHeight, p;
  if (l === "border-box" ? d += s : l === "content-box" && (d -= o), n !== null || r !== null) {
    _n.value = " ";
    var m = _n.scrollHeight - o;
    n !== null && (c = m * n, l === "border-box" && (c = c + o + s), d = Math.max(c, d)), r !== null && (f = m * r, l === "border-box" && (f = f + o + s), p = d > f ? "" : "hidden", d = Math.min(f, d));
  }
  return {
    height: "".concat(d, "px"),
    minHeight: "".concat(c, "px"),
    maxHeight: "".concat(f, "px"),
    overflowY: p,
    resize: "none"
  };
}
var zl = 0, cp = 1, QD = 2, JD = b(b({}, Uo), {
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: i.func
}), e4 = K({
  name: "ResizableTextArea",
  mixins: [Ce],
  inheritAttrs: !1,
  props: JD,
  setup: function() {
    return {
      nextFrameActionId: void 0,
      textArea: null,
      resizeFrameId: void 0
    };
  },
  data: function() {
    return {
      textareaStyles: {},
      resizeStatus: zl
    };
  },
  watch: {
    value: function() {
      var e = this;
      Le(function() {
        e.resizeTextarea();
      });
    }
  },
  mounted: function() {
    this.resizeTextarea();
  },
  beforeUnmount: function() {
    yt.cancel(this.nextFrameActionId), yt.cancel(this.resizeFrameId);
  },
  methods: {
    saveTextArea: function(e) {
      this.textArea = e;
    },
    handleResize: function(e) {
      var n = this.$data.resizeStatus;
      n === zl && this.$emit("resize", e);
    },
    resizeOnNextFrame: function() {
      yt.cancel(this.nextFrameActionId), this.nextFrameActionId = yt(this.resizeTextarea);
    },
    resizeTextarea: function() {
      var e = this, n = this.$props.autoSize || this.$props.autosize;
      if (!(!n || !this.textArea)) {
        var r = n.minRows, a = n.maxRows, o = ZD(this.textArea, !1, r, a);
        this.setState({
          textareaStyles: o,
          resizeStatus: cp
        }, function() {
          yt.cancel(e.resizeFrameId), e.resizeFrameId = yt(function() {
            e.setState({
              resizeStatus: QD
            }, function() {
              e.resizeFrameId = yt(function() {
                e.setState({
                  resizeStatus: zl
                }), e.fixFirefoxAutoScroll();
              });
            });
          });
        });
      }
    },
    // https://github.com/ant-design/ant-design/issues/21870
    fixFirefoxAutoScroll: function() {
      try {
        if (document.activeElement === this.textArea) {
          var e = this.textArea.selectionStart, n = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(e, n);
        }
      } catch {
      }
    },
    renderTextArea: function() {
      var e = this, n = b(b({}, me(this)), this.$attrs), r = n.prefixCls, a = n.autoSize, o = n.autosize, s = n.disabled, l = n.class, u = this.$data, c = u.textareaStyles, f = u.resizeStatus;
      bn(o === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
      var d = Ma(n, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy"]), p = Z(r, l, S({}, "".concat(r, "-disabled"), s));
      "value" in d && (d.value = d.value || "");
      var m = b(b(b({}, n.style), c), f === cp ? {
        overflowX: "hidden",
        overflowY: "hidden"
      } : null), v = b(b({}, d), {
        style: m,
        class: p
      });
      return v.autofocus || delete v.autofocus, h(Fs, {
        onResize: this.handleResize,
        disabled: !(a || o)
      }, {
        default: function() {
          return [In(h("textarea", H(H({}, v), {}, {
            ref: e.saveTextArea
          }), null), [[Bo]])];
        }
      });
    }
  },
  render: function() {
    return this.renderTextArea();
  }
});
const t4 = e4;
var n4 = b(b({}, Uo), {
  autosize: Qn(i.oneOfType([Object, Boolean])),
  autoSize: Qn(i.oneOfType([Object, Boolean])),
  showCount: i.looseBool,
  onCompositionstart: i.func,
  onCompositionend: i.func
});
const Tb = K({
  name: "ATextarea",
  inheritAttrs: !1,
  props: b({}, n4),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      resizableTextArea: null,
      clearableInput: null
    };
  },
  data: function() {
    var e = typeof this.value > "u" ? this.defaultValue : this.value;
    return {
      stateValue: typeof e > "u" ? "" : e
    };
  },
  watch: {
    value: function(e) {
      this.stateValue = e;
    }
  },
  mounted: function() {
    var e = this;
    Le(function() {
      process.env.NODE_ENV === "test" && e.autofocus && e.focus();
    });
  },
  methods: {
    setValue: function(e, n) {
      Se(this, "value") ? this.$forceUpdate() : this.stateValue = e, Le(function() {
        n && n();
      });
    },
    handleKeyDown: function(e) {
      e.keyCode === 13 && this.$emit("pressEnter", e), this.$emit("keydown", e);
    },
    triggerChange: function(e) {
      this.$emit("update:value", e.target.value), this.$emit("change", e), this.$emit("input", e);
    },
    handleChange: function(e) {
      var n = this, r = e.target, a = r.value, o = r.composing, s = r.isComposing;
      (s || o) && this.lazy || this.stateValue === a || (this.setValue(e.target.value, function() {
        var l;
        (l = n.resizableTextArea) === null || l === void 0 || l.resizeTextarea();
      }), vs(this.resizableTextArea.textArea, e, this.triggerChange));
    },
    focus: function() {
      this.resizableTextArea.textArea.focus();
    },
    blur: function() {
      this.resizableTextArea.textArea.blur();
    },
    saveTextArea: function(e) {
      this.resizableTextArea = e;
    },
    saveClearableInput: function(e) {
      this.clearableInput = e;
    },
    handleReset: function(e) {
      var n = this;
      this.setValue("", function() {
        n.resizableTextArea.renderTextArea(), n.focus();
      }), vs(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    renderTextArea: function(e) {
      var n = me(this), r = this.$attrs, a = r.style, o = r.class, s = b(b(b({}, n), this.$attrs), {
        style: !n.showCount && a,
        class: !n.showCount && o,
        showCount: null,
        prefixCls: e,
        onInput: this.handleChange,
        onChange: this.handleChange,
        onKeydown: this.handleKeyDown
      });
      return h(t4, H(H({}, s), {}, {
        ref: this.saveTextArea
      }), null);
    }
  },
  render: function() {
    var e = this.stateValue, n = this.prefixCls, r = this.maxlength, a = this.showCount, o = this.$attrs, s = o.style, l = o.class, u = this.configProvider.getPrefixCls, c = u("input", n), f = _b(e), d = Number(r) > 0;
    f = d ? f.slice(0, r) : f;
    var p = b(b(b({}, me(this)), this.$attrs), {
      prefixCls: c,
      inputType: "text",
      element: this.renderTextArea(c),
      handleReset: this.handleReset
    }), m = h(Sb, H(H({}, p), {}, {
      value: f,
      ref: this.saveClearableInput
    }), null);
    if (a) {
      var v = Je(f).length, g = "".concat(v).concat(d ? " / ".concat(r) : "");
      m = h("div", {
        class: Z("".concat(c, "-textarea"), "".concat(c, "-textarea-show-count"), l),
        style: s,
        "data-count": g
      }, [m]);
    }
    return m;
  }
});
var r4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const a4 = r4;
function fp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      o4(t, a, n[a]);
    });
  }
  return t;
}
function o4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var vf = function(e, n) {
  var r = fp({}, e, n.attrs);
  return h(Pe, fp({}, r, {
    icon: a4
  }), null);
};
vf.displayName = "EyeOutlined";
vf.inheritAttrs = !1;
const Eb = vf;
var i4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const s4 = i4;
function dp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      l4(t, a, n[a]);
    });
  }
  return t;
}
function l4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var mf = function(e, n) {
  var r = dp({}, e, n.attrs);
  return h(Pe, dp({}, r, {
    icon: s4
  }), null);
};
mf.displayName = "EyeInvisibleOutlined";
mf.inheritAttrs = !1;
const u4 = mf;
var c4 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, f4 = {
  click: "onClick",
  hover: "onMouseover"
};
const d4 = K({
  name: "AInputPassword",
  mixins: [Ce],
  inheritAttrs: !1,
  props: b(b({}, Uo), {
    prefixCls: i.string,
    inputPrefixCls: i.string,
    action: i.string.def("click"),
    visibilityToggle: i.looseBool.def(!0),
    iconRender: i.func.def(function(t) {
      return t ? h(Eb, null, null) : h(u4, null, null);
    })
  }),
  setup: function() {
    return {
      input: null,
      configProvider: ye("configProvider", He)
    };
  },
  data: function() {
    return {
      visible: !1
    };
  },
  methods: {
    saveInput: function(e) {
      this.input = e;
    },
    focus: function() {
      this.input.focus();
    },
    blur: function() {
      this.input.blur();
    },
    onVisibleChange: function() {
      this.disabled || this.setState({
        visible: !this.visible
      });
    },
    getIcon: function(e) {
      var n, r = this.$props.action, a = f4[r] || "", o = this.$slots.iconRender || this.$props.iconRender, s = o(this.visible), l = (n = {}, S(n, a, this.onVisibleChange), S(n, "onMousedown", function(c) {
        c.preventDefault();
      }), S(n, "onMouseup", function(c) {
        c.preventDefault();
      }), S(n, "class", "".concat(e, "-icon")), S(n, "key", "passwordIcon"), n);
      return je(s, l);
    }
  },
  render: function() {
    var e = me(this), n = e.prefixCls, r = e.inputPrefixCls, a = e.size;
    e.suffix, e.action;
    var o = e.visibilityToggle;
    e.iconRender;
    var s = c4(e, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]), l = this.$attrs.class, u = this.configProvider.getPrefixCls, c = u("input", r), f = u("input-password", n), d = o && this.getIcon(f), p = Z(f, l, S({}, "".concat(f, "-").concat(a), !!a)), m = b(b(b(b({}, s), {
      prefixCls: c,
      size: a,
      suffix: d,
      prefix: ce(this, "prefix"),
      addonAfter: ce(this, "addonAfter"),
      addonBefore: ce(this, "addonBefore")
    }), this.$attrs), {
      type: this.visible ? "text" : "password",
      class: p,
      ref: "input"
    });
    return h(pt, H(H({}, m), {}, {
      ref: this.saveInput
    }), null);
  }
});
pt.Group = $D;
pt.Search = GD;
pt.TextArea = Tb;
pt.Password = d4;
pt.install = function(t) {
  return t.component(pt.name, pt), t.component(pt.Group.name, pt.Group), t.component(pt.Search.name, pt.Search), t.component(pt.TextArea.name, pt.TextArea), t.component(pt.Password.name, pt.Password), t;
};
var h4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const p4 = h4;
function hp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      v4(t, a, n[a]);
    });
  }
  return t;
}
function v4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var gf = function(e, n) {
  var r = hp({}, e, n.attrs);
  return h(Pe, hp({}, r, {
    icon: p4
  }), null);
};
gf.displayName = "CheckCircleOutlined";
gf.inheritAttrs = !1;
const kb = gf;
var m4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const g4 = m4;
function pp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      b4(t, a, n[a]);
    });
  }
  return t;
}
function b4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var bf = function(e, n) {
  var r = pp({}, e, n.attrs);
  return h(Pe, pp({}, r, {
    icon: g4
  }), null);
};
bf.displayName = "ExclamationCircleOutlined";
bf.inheritAttrs = !1;
const y4 = bf;
var C4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const w4 = C4;
function vp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      O4(t, a, n[a]);
    });
  }
  return t;
}
function O4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var yf = function(e, n) {
  var r = vp({}, e, n.attrs);
  return h(Pe, vp({}, r, {
    icon: w4
  }), null);
};
yf.displayName = "InfoCircleOutlined";
yf.inheritAttrs = !1;
const S4 = yf;
var _4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const x4 = _4;
function mp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      P4(t, a, n[a]);
    });
  }
  return t;
}
function P4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Cf = function(e, n) {
  var r = mp({}, e, n.attrs);
  return h(Pe, mp({}, r, {
    icon: x4
  }), null);
};
Cf.displayName = "CloseCircleOutlined";
Cf.inheritAttrs = !1;
const Db = Cf;
var T4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const E4 = T4;
function gp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      k4(t, a, n[a]);
    });
  }
  return t;
}
function k4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var wf = function(e, n) {
  var r = gp({}, e, n.attrs);
  return h(Pe, gp({}, r, {
    icon: E4
  }), null);
};
wf.displayName = "CheckCircleFilled";
wf.inheritAttrs = !1;
const Of = wf;
var D4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const $4 = D4;
function bp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      I4(t, a, n[a]);
    });
  }
  return t;
}
function I4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Sf = function(e, n) {
  var r = bp({}, e, n.attrs);
  return h(Pe, bp({}, r, {
    icon: $4
  }), null);
};
Sf.displayName = "ExclamationCircleFilled";
Sf.inheritAttrs = !1;
const _f = Sf;
var M4 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const A4 = M4;
function yp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      N4(t, a, n[a]);
    });
  }
  return t;
}
function N4(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var xf = function(e, n) {
  var r = yp({}, e, n.attrs);
  return h(Pe, yp({}, r, {
    icon: A4
  }), null);
};
xf.displayName = "InfoCircleFilled";
xf.inheritAttrs = !1;
const $b = xf;
function V4() {
}
var R4 = {
  success: Of,
  info: $b,
  error: lr,
  warning: _f
}, F4 = {
  success: kb,
  info: S4,
  error: Db,
  warning: y4
}, B4 = ke("success", "info", "warning", "error"), j4 = {
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: i.oneOf(B4),
  /** Whether Alert can be closed */
  closable: i.looseBool,
  /** Close text to show */
  closeText: i.VNodeChild,
  /** Content of Alert */
  message: i.VNodeChild,
  /** Additional content of Alert */
  description: i.VNodeChild,
  /** Trigger when animation ending of Alert */
  afterClose: i.func.def(V4),
  /** Whether to show icon */
  showIcon: i.looseBool,
  prefixCls: i.string,
  banner: i.looseBool,
  icon: i.VNodeChild,
  onClose: i.VNodeChild
}, L4 = K({
  name: "AAlert",
  inheritAttrs: !1,
  props: j4,
  emits: ["close"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, s = n.expose, l = ye("configProvider", He), u = Q(!1), c = Q(!1), f = Q(), d = function(v) {
      v.preventDefault();
      var g = f.value;
      g.style.height = "".concat(g.offsetHeight, "px"), g.style.height = "".concat(g.offsetHeight, "px"), u.value = !0, a("close", v);
    }, p = function() {
      var v;
      u.value = !1, c.value = !0, (v = e.afterClose) === null || v === void 0 || v.call(e);
    };
    return s({
      animationEnd: p
    }), function() {
      var m, v = e.prefixCls, g = e.banner, C = l.getPrefixCls, y = C("alert", v), O = e.closable, w = e.type, _ = e.showIcon, x = la(r, e, "closeText"), P = la(r, e, "description"), T = la(r, e, "message"), M = la(r, e, "icon");
      _ = g && _ === void 0 ? !0 : _, w = g && w === void 0 ? "warning" : w || "info";
      var $ = (P ? F4 : R4)[w] || null;
      x && (O = !0);
      var k = Z(y, (m = {}, S(m, "".concat(y, "-").concat(w), !0), S(m, "".concat(y, "-closing"), u.value), S(m, "".concat(y, "-with-description"), !!P), S(m, "".concat(y, "-no-icon"), !_), S(m, "".concat(y, "-banner"), !!g), S(m, "".concat(y, "-closable"), O), m)), V = O ? h("button", {
        type: "button",
        onClick: d,
        class: "".concat(y, "-close-icon"),
        tabindex: 0
      }, [x ? h("span", {
        class: "".concat(y, "-close-text")
      }, [x]) : h(Wo, null, null)]) : null, I = M && (vn(M) ? Is(M, {
        class: "".concat(y, "-icon")
      }) : h("span", {
        class: "".concat(y, "-icon")
      }, [M])) || h($, {
        class: "".concat(y, "-icon")
      }, null), F = Wc("".concat(y, "-slide-up"), {
        appear: !1,
        onAfterLeave: p
      });
      return c.value ? null : h(ga, F, {
        default: function() {
          return [In(h("div", H(H({}, o), {}, {
            class: [o.class, k],
            "data-show": !u.value,
            ref: f
          }), [_ ? I : null, h("div", {
            class: "".concat(y, "-content")
          }, [h("div", {
            class: "".concat(y, "-message")
          }, [T]), h("div", {
            class: "".concat(y, "-description")
          }, [P])]), V]), [[Ji, !u.value]])];
        }
      });
    };
  }
});
const H4 = Cn(L4);
var Cp = ["xxl", "xl", "lg", "md", "sm", "xs"], pi = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
}, Er = /* @__PURE__ */ new Map(), Yl = -1, vi = {}, z4 = {
  matchHandlers: {},
  dispatch: function(e) {
    return vi = e, Er.forEach(function(n) {
      return n(vi);
    }), Er.size >= 1;
  },
  subscribe: function(e) {
    return Er.size || this.register(), Yl += 1, Er.set(Yl, e), e(vi), Yl;
  },
  unsubscribe: function(e) {
    Er.delete(e), Er.size || this.unregister();
  },
  unregister: function() {
    var e = this;
    Object.keys(pi).forEach(function(n) {
      var r = pi[n], a = e.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), Er.clear();
  },
  register: function() {
    var e = this;
    Object.keys(pi).forEach(function(n) {
      var r = pi[n], a = function(l) {
        var u = l.matches;
        e.dispatch(b(b({}, vi), S({}, n, u)));
      }, o = window.matchMedia(r);
      o.addListener(a), e.matchHandlers[r] = {
        mql: o,
        listener: a
      }, a(o);
    });
  }
};
const wp = z4;
var qt = {
  adjustX: 1,
  adjustY: 1
}, Xt = [0, 0], Ib = {
  left: {
    points: ["cr", "cl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xt
  },
  right: {
    points: ["cl", "cr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xt
  },
  top: {
    points: ["bc", "tc"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Xt
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Xt
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Xt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Xt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Xt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Xt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xt
  }
};
const Y4 = {
  name: "Content",
  props: {
    prefixCls: i.string,
    overlay: i.any,
    trigger: i.any,
    overlayInnerStyle: i.any
  },
  updated: function() {
    var e = this.trigger;
    e && e.forcePopupAlign();
  },
  render: function() {
    var e = this.overlay, n = this.prefixCls, r = this.overlayInnerStyle;
    return h("div", {
      class: "".concat(n, "-inner"),
      role: "tooltip",
      style: r
    }, [typeof e == "function" ? e() : e]);
  }
};
var W4 = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function Op() {
}
const U4 = K({
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: i.any.def(["hover"]),
    defaultVisible: i.looseBool,
    visible: i.looseBool,
    placement: i.string.def("right"),
    transitionName: i.oneOfType([i.string, i.object]),
    animation: i.any,
    afterVisibleChange: i.func.def(function() {
    }),
    overlay: i.any,
    overlayStyle: i.object,
    overlayClassName: i.string,
    prefixCls: i.string.def("rc-tooltip"),
    mouseEnterDelay: i.number.def(0),
    mouseLeaveDelay: i.number.def(0.1),
    getTooltipContainer: i.func,
    destroyTooltipOnHide: i.looseBool.def(!1),
    align: i.object.def(function() {
      return {};
    }),
    arrowContent: i.any.def(null),
    tipId: i.string,
    builtinPlacements: i.object,
    overlayInnerStyle: i.style
  },
  methods: {
    getPopupElement: function() {
      var e = this.$props, n = e.prefixCls, r = e.tipId, a = e.overlayInnerStyle;
      return [h("div", {
        class: "".concat(n, "-arrow"),
        key: "arrow"
      }, [ce(this, "arrowContent")]), h(Y4, {
        key: "content",
        trigger: this.$refs.trigger,
        prefixCls: n,
        id: r,
        overlay: ce(this, "overlay"),
        overlayInnerStyle: a
      }, null)];
    },
    getPopupDomNode: function() {
      return this.$refs.trigger.getPopupDomNode();
    }
  },
  render: function(e) {
    var n = this, r = me(this), a = r.overlayClassName, o = r.trigger, s = r.mouseEnterDelay, l = r.mouseLeaveDelay, u = r.overlayStyle, c = r.prefixCls, f = r.afterVisibleChange, d = r.transitionName, p = r.animation, m = r.placement, v = r.align, g = r.destroyTooltipOnHide, C = r.defaultVisible, y = r.getTooltipContainer, O = W4(r, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]), w = b({}, O);
    Se(this, "visible") && (w.popupVisible = this.$props.visible);
    var _ = this.$attrs, x = b(b(b({
      popupClassName: a,
      prefixCls: c,
      action: o,
      builtinPlacements: Ib,
      popupPlacement: m,
      popupAlign: v,
      getPopupContainer: y,
      afterPopupVisibleChange: f,
      popupTransitionName: d,
      popupAnimation: p,
      defaultPopupVisible: C,
      destroyPopupOnHide: g,
      mouseLeaveDelay: l,
      popupStyle: u,
      mouseEnterDelay: s
    }, w), _), {
      onPopupVisibleChange: _.onVisibleChange || Op,
      onPopupAlign: _.onPopupAlign || Op,
      ref: "trigger",
      popup: this.getPopupElement()
    });
    return h(nl, x, {
      default: function() {
        return [et(n)[0]];
      }
    });
  }
});
var G4 = {
  adjustX: 1,
  adjustY: 1
}, Sp = {
  adjustX: 0,
  adjustY: 0
}, K4 = [0, 0];
function _p(t) {
  return typeof t == "boolean" ? t ? G4 : Sp : b(b({}, Sp), t);
}
function q4(t) {
  var e = t.arrowWidth, n = e === void 0 ? 5 : e, r = t.horizontalArrowShift, a = r === void 0 ? 16 : r, o = t.verticalArrowShift, s = o === void 0 ? 12 : o, l = t.autoAdjustOverflow, u = l === void 0 ? !0 : l, c = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(a + n), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(s + n)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [a + n, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(s + n)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [a + n, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, s + n]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(a + n), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, s + n]
    }
  };
  return Object.keys(c).forEach(function(f) {
    c[f] = t.arrowPointAtCenter ? b(b({}, c[f]), {
      overflow: _p(u),
      targetOffset: K4
    }) : b(b({}, Ib[f]), {
      overflow: _p(u)
    }), c[f].ignoreShake = !0;
  }), c;
}
var X4 = ke("success", "processing", "error", "default", "warning"), Mb = ke("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"), xp = i.oneOf(ke("hover", "focus", "click", "contextmenu"));
const Ab = function() {
  return {
    trigger: i.oneOfType([xp, i.arrayOf(xp)]).def("hover"),
    visible: i.looseBool,
    defaultVisible: i.looseBool,
    placement: i.oneOf(ke("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")).def("top"),
    color: i.string,
    transitionName: i.string.def("zoom-big-fast"),
    overlayStyle: i.object.def(function() {
      return {};
    }),
    overlayClassName: i.string,
    openClassName: i.string,
    prefixCls: i.string,
    mouseEnterDelay: i.number.def(0.1),
    mouseLeaveDelay: i.number.def(0.1),
    getPopupContainer: i.func,
    arrowPointAtCenter: i.looseBool.def(!1),
    autoAdjustOverflow: i.oneOfType([i.looseBool, i.object]).def(!0),
    destroyTooltipOnHide: i.looseBool.def(!1),
    align: i.object.def(function() {
      return {};
    }),
    builtinPlacements: i.object,
    children: i.array,
    onVisibleChange: i.func,
    "onUpdate:visible": i.func
  };
};
var Z4 = function(e, n) {
  var r = {}, a = b({}, e);
  return n.forEach(function(o) {
    e && o in e && (r[o] = e[o], delete a[o]);
  }), {
    picked: r,
    omitted: a
  };
}, Q4 = Ab(), Pp = new RegExp("^(".concat(Mb.join("|"), ")(-inverse)?$")), J4 = b(b({}, Q4), {
  title: i.VNodeChild
});
const e$ = K({
  name: "ATooltip",
  inheritAttrs: !1,
  props: J4,
  emits: ["update:visible", "visibleChange"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  data: function() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },
  watch: {
    visible: function(e) {
      this.sVisible = e;
    }
  },
  methods: {
    handleVisibleChange: function(e) {
      Se(this, "visible") || (this.sVisible = this.isNoTitle() ? !1 : e), this.isNoTitle() || (this.$emit("update:visible", e), this.$emit("visibleChange", e));
    },
    getPopupDomNode: function() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    getPlacements: function() {
      var e = this.$props, n = e.builtinPlacements, r = e.arrowPointAtCenter, a = e.autoAdjustOverflow;
      return n || q4({
        arrowPointAtCenter: r,
        verticalArrowShift: 8,
        autoAdjustOverflow: a
      });
    },
    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18
    getDisabledCompatibleChildren: function(e) {
      if ((Ye(e.type) === "object" && (e.type.__ANT_BUTTON === !0 || e.type.__ANT_SWITCH === !0 || e.type.__ANT_CHECKBOX === !0) || e.type === "button") && e.props && (e.props.disabled || e.props.disabled === "")) {
        var n = Z4(D1(e), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), r = n.picked, a = n.omitted, o = b(b({
          display: "inline-block"
        }, r), {
          cursor: "not-allowed",
          width: e.props && e.props.block ? "100%" : null
        }), s = b(b({}, a), {
          pointerEvents: "none"
        }), l = je(e, {
          style: s
        }, !0);
        return h("span", {
          style: o
        }, [l]);
      }
      return e;
    },
    isNoTitle: function() {
      var e = ce(this, "title");
      return !e && e !== 0;
    },
    getOverlay: function() {
      var e = ce(this, "title");
      return e === 0 ? e : e || "";
    },
    // 动态设置动画点
    onPopupAlign: function(e, n) {
      var r = this.getPlacements(), a = Object.keys(r).filter(function(l) {
        return r[l].points[0] === n.points[0] && r[l].points[1] === n.points[1];
      })[0];
      if (a) {
        var o = e.getBoundingClientRect(), s = {
          top: "50%",
          left: "50%"
        };
        a.indexOf("top") >= 0 || a.indexOf("Bottom") >= 0 ? s.top = "".concat(o.height - n.offset[1], "px") : (a.indexOf("Top") >= 0 || a.indexOf("bottom") >= 0) && (s.top = "".concat(-n.offset[1], "px")), a.indexOf("left") >= 0 || a.indexOf("Right") >= 0 ? s.left = "".concat(o.width - n.offset[0], "px") : (a.indexOf("right") >= 0 || a.indexOf("Left") >= 0) && (s.left = "".concat(-n.offset[0], "px")), e.style.transformOrigin = "".concat(s.left, " ").concat(s.top);
      }
    }
  },
  render: function() {
    var e, n = this.$props, r = this.$data, a = this.$attrs, o = n.prefixCls, s = n.openClassName, l = n.getPopupContainer, u = n.color, c = n.overlayClassName, f = this.configProvider.getPopupContainer, d = this.configProvider.getPrefixCls, p = d("tooltip", o), m = this.children || Aa(et(this));
    m = m.length === 1 ? m[0] : m;
    var v = r.sVisible;
    if (!Se(this, "visible") && this.isNoTitle() && (v = !1), !m)
      return null;
    var g = this.getDisabledCompatibleChildren(vn(m) ? m : h("span", null, [m])), C = Z((e = {}, S(e, s || "".concat(p, "-open"), v), S(e, g.props && g.props.class, g.props && g.props.class), e)), y = Z(c, S({}, "".concat(p, "-").concat(u), u && Pp.test(u))), O, w;
    u && !Pp.test(u) && (O = {
      backgroundColor: u
    }, w = {
      backgroundColor: u
    });
    var _ = b(b(b({}, a), n), {
      prefixCls: p,
      getTooltipContainer: l || f,
      builtinPlacements: this.getPlacements(),
      overlay: this.getOverlay(),
      visible: v,
      ref: "tooltip",
      overlayClassName: y,
      overlayInnerStyle: O,
      arrowContent: h("span", {
        class: "".concat(p, "-arrow-content"),
        style: w
      }, null),
      onVisibleChange: this.handleVisibleChange,
      onPopupAlign: this.onPopupAlign
    });
    return h(U4, _, {
      default: function() {
        return [v ? je(g, {
          class: C
        }) : g];
      }
    });
  }
}), Nb = Cn(e$);
var t$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const n$ = t$;
function Tp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      r$(t, a, n[a]);
    });
  }
  return t;
}
function r$(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Pf = function(e, n) {
  var r = Tp({}, e, n.attrs);
  return h(Pe, Tp({}, r, {
    icon: n$
  }), null);
};
Pf.displayName = "RightOutlined";
Pf.inheritAttrs = !1;
const a$ = Pf;
function o$(t, e, n, r) {
  var a = n ? n.call(r, t, e) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === e)
    return !0;
  if (Ye(t) !== "object" || !t || Ye(e) !== "object" || !e)
    return !1;
  var o = Object.keys(t), s = Object.keys(e);
  if (o.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(e), u = 0; u < o.length; u++) {
    var c = o[u];
    if (!l(c))
      return !1;
    var f = t[c], d = e[c];
    if (a = n ? n.call(r, f, d, c) : void 0, a === !1 || a === void 0 && f !== d)
      return !1;
  }
  return !0;
}
function i$(t, e, n, r) {
  return o$(fd(t), fd(e), n, r);
}
var s$ = "__lodash_hash_undefined__";
function l$(t) {
  return this.__data__.set(t, s$), this;
}
function u$(t) {
  return this.__data__.has(t);
}
function Io(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new sr(); ++e < n; )
    this.add(t[e]);
}
Io.prototype.add = Io.prototype.push = l$;
Io.prototype.has = u$;
function Vb(t, e, n, r) {
  for (var a = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function c$(t) {
  return t !== t;
}
function f$(t, e, n) {
  for (var r = n - 1, a = t.length; ++r < a; )
    if (t[r] === e)
      return r;
  return -1;
}
function d$(t, e, n) {
  return e === e ? f$(t, e, n) : Vb(t, c$, n);
}
function h$(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && d$(t, e, 0) > -1;
}
function p$(t, e, n) {
  for (var r = -1, a = t == null ? 0 : t.length; ++r < a; )
    if (n(e, t[r]))
      return !0;
  return !1;
}
function Rb(t, e) {
  return t.has(e);
}
function v$() {
}
function Tf(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var m$ = 1 / 0, g$ = ba && 1 / Tf(new ba([, -0]))[1] == m$ ? function(t) {
  return new ba(t);
} : v$;
const b$ = g$;
var y$ = 200;
function C$(t, e, n) {
  var r = -1, a = h$, o = t.length, s = !0, l = [], u = l;
  if (n)
    s = !1, a = p$;
  else if (o >= y$) {
    var c = e ? null : b$(t);
    if (c)
      return Tf(c);
    s = !1, a = Rb, u = new Io();
  } else
    u = e ? [] : l;
  e:
    for (; ++r < o; ) {
      var f = t[r], d = e ? e(f) : f;
      if (f = n || f !== 0 ? f : 0, s && d === d) {
        for (var p = u.length; p--; )
          if (u[p] === d)
            continue e;
        e && u.push(d), l.push(f);
      } else
        a(u, d, n) || (u !== l && u.push(d), l.push(f));
    }
  return l;
}
const Mr = {
  DATE_ROW_COUNT: 6,
  DATE_COL_COUNT: 7
};
var Fb = function(e, n) {
  for (var r = n.attrs, a = r.value, o = a.localeData(), s = r.prefixCls, l = [], u = [], c = o.firstDayOfWeek(), f, d = R(), p = 0; p < Mr.DATE_COL_COUNT; p++) {
    var m = (c + p) % Mr.DATE_COL_COUNT;
    d.day(m), l[p] = o.weekdaysMin(d), u[p] = o.weekdaysShort(d);
  }
  r.showWeekNumber && (f = h("th", {
    role: "columnheader",
    class: "".concat(s, "-column-header ").concat(s, "-week-number-header")
  }, [h("span", {
    class: "".concat(s, "-column-header-inner")
  }, [Me("x")])]));
  var v = u.map(function(g, C) {
    return h("th", {
      key: C,
      role: "columnheader",
      title: g,
      class: "".concat(s, "-column-header")
    }, [h("span", {
      class: "".concat(s, "-column-header-inner")
    }, [l[C]])]);
  });
  return h("thead", null, [h("tr", {
    role: "row"
  }, [f, v])]);
};
Fb.inheritAttrs = !1;
const w$ = Fb;
var O$ = {
  disabledHours: function() {
    return [];
  },
  disabledMinutes: function() {
    return [];
  },
  disabledSeconds: function() {
    return [];
  }
};
function Sr(t) {
  var e = R();
  return e.locale(t.locale()).utcOffset(t.utcOffset()), e;
}
function Bb(t) {
  return t.format("LL");
}
function S$(t) {
  var e = Sr(t);
  return Bb(e);
}
function _$(t) {
  var e = t.locale(), n = t.localeData();
  return n[e === "zh-cn" ? "months" : "monthsShort"](t);
}
function Zt(t, e) {
  !R.isMoment(t) || !R.isMoment(e) || (e.hour(t.hour()), e.minute(t.minute()), e.second(t.second()), e.millisecond(t.millisecond()));
}
function Ef(t, e) {
  var n = e ? e(t) : {};
  return n = b(b({}, O$), n), n;
}
function x$(t, e) {
  var n = !1;
  if (t) {
    var r = t.hour(), a = t.minute(), o = t.second(), s = e.disabledHours();
    if (s.indexOf(r) === -1) {
      var l = e.disabledMinutes(r);
      if (l.indexOf(a) === -1) {
        var u = e.disabledSeconds(r, a);
        n = u.indexOf(o) !== -1;
      } else
        n = !0;
    } else
      n = !0;
  }
  return !n;
}
function P$(t, e) {
  var n = Ef(t, e);
  return x$(t, n);
}
function ms(t, e, n) {
  return !(e && e(t) || n && !P$(t, n));
}
function Wl(t, e) {
  if (!t)
    return "";
  if (Array.isArray(e) && (e = e[0]), typeof e == "function") {
    var n = e(t);
    if (typeof n == "string")
      return n;
    throw new Error("The function of format does not return a string");
  }
  return t.format(e);
}
function mi() {
}
function to(t, e) {
  return t && e && t.isSame(e, "day");
}
function T$(t, e) {
  return t.year() < e.year() ? 1 : t.year() === e.year() && t.month() < e.month();
}
function E$(t, e) {
  return t.year() > e.year() ? 1 : t.year() === e.year() && t.month() > e.month();
}
function k$(t) {
  return "rc-calendar-".concat(t.year(), "-").concat(t.month(), "-").concat(t.date());
}
var D$ = {
  name: "DateTBody",
  inheritAttrs: !1,
  props: {
    contentRender: i.func,
    dateRender: i.func,
    disabledDate: i.func,
    prefixCls: i.string,
    selectedValue: i.any,
    value: i.object,
    hoverValue: i.any.def([]),
    showWeekNumber: i.looseBool
  },
  render: function() {
    var e = me(this), n = e.contentRender, r = e.prefixCls, a = e.selectedValue, o = e.value, s = e.showWeekNumber, l = e.dateRender, u = e.disabledDate, c = e.hoverValue, f = this.$attrs, d = f.onSelect, p = d === void 0 ? mi : d, m = f.onDayHover, v = m === void 0 ? mi : m, g, C, y, O = [], w = Sr(o), _ = "".concat(r, "-cell"), x = "".concat(r, "-week-number-cell"), P = "".concat(r, "-date"), T = "".concat(r, "-today"), M = "".concat(r, "-selected-day"), $ = "".concat(r, "-selected-date"), k = "".concat(r, "-selected-start-date"), V = "".concat(r, "-selected-end-date"), I = "".concat(r, "-in-range-cell"), F = "".concat(r, "-last-month-cell"), B = "".concat(r, "-next-month-btn-day"), E = "".concat(r, "-disabled-cell"), j = "".concat(r, "-disabled-cell-first-of-row"), D = "".concat(r, "-disabled-cell-last-of-row"), N = "".concat(r, "-last-day-of-month"), U = o.clone();
    U.date(1);
    var L = U.day(), ne = (L + 7 - o.localeData().firstDayOfWeek()) % 7, ie = U.clone();
    ie.add(0 - ne, "days");
    var fe = 0;
    for (g = 0; g < Mr.DATE_ROW_COUNT; g++)
      for (C = 0; C < Mr.DATE_COL_COUNT; C++)
        y = ie, fe && (y = y.clone(), y.add(fe, "days")), O.push(y), fe++;
    var $e = [];
    for (fe = 0, g = 0; g < Mr.DATE_ROW_COUNT; g++) {
      var ze, Te = void 0, ge = void 0, Re = !1, tt = [];
      for (s && (ge = h("td", {
        key: "week-".concat(O[fe].week()),
        role: "gridcell",
        class: x
      }, [O[fe].week()])), C = 0; C < Mr.DATE_COL_COUNT; C++) {
        var ft = null, A = null;
        y = O[fe], C < Mr.DATE_COL_COUNT - 1 && (ft = O[fe + 1]), C > 0 && (A = O[fe - 1]);
        var Y = _, X = !1, Ee = !1;
        to(y, w) && (Y += " ".concat(T), Te = !0);
        var st = T$(y, o), bt = E$(y, o);
        if (a && Array.isArray(a)) {
          var nt = c.length ? c : a;
          if (!st && !bt) {
            var $t = nt[0], On = nt[1];
            $t && to(y, $t) && (Ee = !0, Re = !0, Y += " ".concat(k)), ($t || On) && (to(y, On) ? (Ee = !0, Re = !0, Y += " ".concat(V)) : ($t == null && y.isBefore(On, "day") || On == null && y.isAfter($t, "day") || y.isAfter($t, "day") && y.isBefore(On, "day")) && (Y += " ".concat(I)));
          }
        } else
          to(y, o) && (Ee = !0, Re = !0);
        to(y, a) && (Y += " ".concat($)), st && (Y += " ".concat(F)), bt && (Y += " ".concat(B)), y.clone().endOf("month").date() === y.date() && (Y += " ".concat(N)), u && u(y, o) && (X = !0, (!A || !u(A, o)) && (Y += " ".concat(j)), (!ft || !u(ft, o)) && (Y += " ".concat(D))), Ee && (Y += " ".concat(M)), X && (Y += " ".concat(E));
        var cr = void 0;
        if (l)
          cr = l({
            current: y,
            today: o
          });
        else {
          var Gr = n ? n({
            current: y,
            today: o
          }) : y.date();
          cr = h("div", {
            key: k$(y),
            class: P,
            "aria-selected": Ee,
            "aria-disabled": X
          }, [Gr]);
        }
        tt.push(h("td", {
          key: fe,
          onClick: X ? mi : p.bind(null, y),
          onMouseenter: X ? mi : v.bind(null, y),
          role: "gridcell",
          title: Bb(y),
          class: Y
        }, [cr])), fe++;
      }
      $e.push(h("tr", {
        key: g,
        role: "row",
        class: Z((ze = {}, S(ze, "".concat(r, "-current-week"), Te), S(ze, "".concat(r, "-active-week"), Re), ze))
      }, [ge, tt]));
    }
    return h("tbody", {
      class: "".concat(r, "-tbody")
    }, [$e]);
  }
};
const $$ = D$;
var jb = function(e, n) {
  var r = n.attrs, a = r.prefixCls;
  return h("table", {
    class: "".concat(a, "-table"),
    cellspacing: "0",
    role: "grid"
  }, [h(w$, r, null), h($$, r, null)]);
};
jb.inheritAttrs = !1;
const Lb = jb;
var I$ = 4, M$ = 3;
function A$() {
}
var N$ = {
  name: "MonthTable",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    cellRender: i.func,
    prefixCls: i.string,
    value: i.object,
    locale: i.any,
    contentRender: i.any,
    disabledDate: i.func
  },
  data: function() {
    return {
      sValue: this.value
    };
  },
  watch: {
    value: function(e) {
      this.setState({
        sValue: e
      });
    }
  },
  methods: {
    setAndSelectValue: function(e) {
      this.setState({
        sValue: e
      }), this.__emit("select", e);
    },
    chooseMonth: function(e) {
      var n = this.sValue.clone();
      n.month(e), this.setAndSelectValue(n);
    },
    months: function() {
      for (var e = this.sValue, n = e.clone(), r = [], a = 0, o = 0; o < I$; o++) {
        r[o] = [];
        for (var s = 0; s < M$; s++) {
          n.month(a);
          var l = _$(n);
          r[o][s] = {
            value: a,
            content: l,
            title: l
          }, a++;
        }
      }
      return r;
    }
  },
  render: function() {
    var e = this, n = this.$props, r = this.sValue, a = Sr(r), o = this.months(), s = r.month(), l = n.prefixCls, u = n.locale, c = n.contentRender, f = n.cellRender, d = n.disabledDate, p = o.map(function(m, v) {
      var g = m.map(function(C) {
        var y, O = !1;
        if (d) {
          var w = r.clone();
          w.month(C.value), O = d(w);
        }
        var _ = (y = {}, S(y, "".concat(l, "-cell"), 1), S(y, "".concat(l, "-cell-disabled"), O), S(y, "".concat(l, "-selected-cell"), C.value === s), S(y, "".concat(l, "-current-cell"), a.year() === r.year() && C.value === a.month()), y), x;
        if (f) {
          var P = r.clone();
          P.month(C.value), x = f({
            current: P,
            locale: u
          });
        } else {
          var T;
          if (c) {
            var M = r.clone();
            M.month(C.value), T = c({
              current: M,
              locale: u
            });
          } else
            T = C.content;
          x = h("a", {
            class: "".concat(l, "-month")
          }, [T]);
        }
        return h("td", {
          role: "gridcell",
          key: C.value,
          onClick: O ? A$ : function() {
            return e.chooseMonth(C.value);
          },
          title: C.title,
          class: _
        }, [x]);
      });
      return h("tr", {
        key: v,
        role: "row"
      }, [g]);
    });
    return h("table", {
      class: "".concat(l, "-table"),
      cellspacing: "0",
      role: "grid"
    }, [h("tbody", {
      class: "".concat(l, "-tbody")
    }, [p])]);
  }
};
const V$ = N$;
function gi() {
}
function zu(t) {
  var e;
  return t ? e = Sr(t) : e = R(), e;
}
function R$(t) {
  return Array.isArray(t) ? t.length === 0 || t.findIndex(function(e) {
    return e === void 0 || R.isMoment(e);
  }) !== -1 : t === void 0 || R.isMoment(t);
}
var Ep = i.custom(R$), F$ = {
  mixins: [Ce],
  inheritAttrs: !1,
  name: "CalendarMixinWrapper",
  props: {
    value: Ep,
    defaultValue: Ep
  },
  data: function() {
    this.onKeyDown === void 0 && (this.onKeyDown = gi), this.onBlur === void 0 && (this.onBlur = gi);
    var e = this.$props, n = e.value || e.defaultValue || zu();
    return {
      sValue: n,
      sSelectedValue: e.selectedValue || e.defaultSelectedValue
    };
  },
  watch: {
    value: function(e) {
      var n = e || this.defaultValue || zu(this.sValue);
      this.setState({
        sValue: n
      });
    },
    selectedValue: function(e) {
      this.setState({
        sSelectedValue: e
      });
    }
  },
  methods: {
    onSelect: function(e, n) {
      e && this.setValue(e), this.setSelectedValue(e, n);
    },
    renderRoot: function(e) {
      var n, r = b(b({}, this.$props), this.$attrs), a = r.prefixCls, o = (n = {}, S(n, a, 1), S(n, "".concat(a, "-hidden"), !r.visible), S(n, r.class, !!r.class), S(n, e.class, !!e.class), n);
      return h("div", {
        ref: this.saveRoot,
        class: o,
        tabindex: "0",
        onKeydown: this.onKeyDown || gi,
        onBlur: this.onBlur || gi
      }, [e.children]);
    },
    setSelectedValue: function(e, n) {
      Se(this, "selectedValue") || this.setState({
        sSelectedValue: e
      }), this.__emit("select", e, n);
    },
    setValue: function(e) {
      var n = this.sValue;
      Se(this, "value") || this.setState({
        sValue: e
      }), (n && e && !n.isSame(e) || !n && e || n && !e) && this.__emit("change", e);
    },
    isAllowedDate: function(e) {
      var n = this.disabledDate, r = this.disabledTime;
      return ms(e, n, r);
    }
  }
};
const Hb = F$, kf = {
  methods: {
    getFormat: function() {
      var e = this.format, n = this.locale, r = this.timePicker;
      return e || (r ? e = n.dateTimeFormat : e = n.dateFormat), e;
    },
    focus: function() {
      this.focusElement ? this.focusElement.focus() : this.rootInstance && this.rootInstance.focus();
    },
    saveFocusElement: function(e) {
      this.focusElement = e;
    },
    saveRoot: function(e) {
      this.rootInstance = e;
    }
  }
};
var B$ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const zb = K({
  name: "Checkbox",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Hr({
    prefixCls: i.string,
    name: i.string,
    id: i.string,
    type: i.string,
    defaultChecked: Qn(i.oneOfType([i.number, i.looseBool])),
    checked: Qn(i.oneOfType([i.number, i.looseBool])),
    disabled: i.looseBool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabindex: i.oneOfType([i.string, i.number]),
    readonly: i.looseBool,
    autofocus: i.looseBool,
    value: i.any
  }, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: !1
  }),
  data: function() {
    var e = Se(this, "checked") ? this.checked : this.defaultChecked;
    return {
      sChecked: e
    };
  },
  watch: {
    checked: function(e) {
      this.sChecked = e;
    }
  },
  mounted: function() {
    var e = this;
    Le(function() {
      process.env.NODE_ENV === "test" && e.autofocus && e.$refs.input && e.$refs.input.focus();
    });
  },
  methods: {
    focus: function() {
      this.$refs.input.focus();
    },
    blur: function() {
      this.$refs.input.blur();
    },
    handleChange: function(e) {
      var n = me(this);
      if (!n.disabled) {
        "checked" in n || (this.sChecked = e.target.checked), e.shiftKey = this.eventShiftKey;
        var r = {
          target: b(b({}, n), {
            checked: e.target.checked
          }),
          stopPropagation: function() {
            e.stopPropagation();
          },
          preventDefault: function() {
            e.preventDefault();
          },
          nativeEvent: e
        };
        "checked" in n && (this.$refs.input.checked = n.checked), this.__emit("change", r), this.eventShiftKey = !1;
      }
    },
    onClick: function(e) {
      this.__emit("click", e), this.eventShiftKey = e.shiftKey;
    }
  },
  render: function() {
    var e, n = me(this), r = n.prefixCls, a = n.name, o = n.id, s = n.type, l = n.disabled, u = n.readonly, c = n.tabindex, f = n.autofocus, d = n.value, p = B$(n, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value"]), m = this.$attrs, v = m.class, g = m.onFocus, C = m.onBlur, y = Object.keys(b(b({}, p), this.$attrs)).reduce(function(x, P) {
      return (P.substr(0, 5) === "aria-" || P.substr(0, 5) === "data-" || P === "role") && (x[P] = p[P]), x;
    }, {}), O = this.sChecked, w = Z(r, v, (e = {}, S(e, "".concat(r, "-checked"), O), S(e, "".concat(r, "-disabled"), l), e)), _ = b(b({
      name: a,
      id: o,
      type: s,
      readonly: u,
      disabled: l,
      tabindex: c,
      class: "".concat(r, "-input"),
      checked: !!O,
      autofocus: f,
      value: d
    }, y), {
      onChange: this.handleChange,
      onClick: this.onClick,
      onFocus: g,
      onBlur: C
    });
    return h("span", {
      class: w
    }, [h("input", H({
      ref: "input"
    }, _), null), h("span", {
      class: "".concat(r, "-inner")
    }, null)]);
  }
});
var j$ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, Yb = {
  prefixCls: i.string,
  defaultChecked: i.looseBool,
  checked: i.looseBool,
  disabled: i.looseBool,
  isGroup: i.looseBool,
  value: i.any,
  name: i.string,
  id: i.string,
  autofocus: i.looseBool,
  type: i.string.def("radio"),
  onChange: i.func,
  onFocus: i.func,
  onBlur: i.func
};
const At = K({
  name: "ARadio",
  props: Yb,
  emits: ["update:checked", "update:value", "change", "blur", "focus"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      radioGroupContext: ye("radioGroupContext", null)
    };
  },
  methods: {
    focus: function() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function() {
      this.$refs.vcCheckbox.blur();
    },
    handleChange: function(e) {
      var n = e.target.checked;
      this.$emit("update:checked", n), this.$emit("update:value", n), this.$emit("change", e);
    },
    onChange2: function(e) {
      this.$emit("change", e), this.radioGroupContext && this.radioGroupContext.onRadioChange && this.radioGroupContext.onRadioChange(e);
    }
  },
  render: function() {
    var e, n = this.$slots, r = this.radioGroupContext, a = me(this), o = a.prefixCls, s = j$(a, ["prefixCls"]), l = this.configProvider.getPrefixCls, u = l("radio", o), c = b({
      prefixCls: u
    }, s);
    r ? (c.name = r.name, c.onChange = this.onChange2, c.checked = a.value === r.stateValue, c.disabled = a.disabled || r.disabled) : c.onChange = this.handleChange;
    var f = Z((e = {}, S(e, "".concat(u, "-wrapper"), !0), S(e, "".concat(u, "-wrapper-checked"), c.checked), S(e, "".concat(u, "-wrapper-disabled"), c.disabled), e));
    return h("label", {
      class: f
    }, [h(zb, H(H({}, c), {}, {
      ref: "vcCheckbox"
    }), null), n.default && h("span", null, [n.default()])]);
  }
}), Df = K({
  name: "ARadioGroup",
  props: {
    prefixCls: i.string,
    defaultValue: i.any,
    value: i.any,
    size: i.oneOf(ke("large", "default", "small")).def("default"),
    options: i.array,
    disabled: i.looseBool,
    name: i.string,
    buttonStyle: i.string.def("outline"),
    onChange: i.func
  },
  emits: ["update:value", "change"],
  setup: function() {
    return {
      updatingValue: !1,
      configProvider: ye("configProvider", He),
      radioGroupContext: null
    };
  },
  data: function() {
    var e = this.value, n = this.defaultValue;
    return {
      stateValue: e === void 0 ? n : e
    };
  },
  watch: {
    value: function(e) {
      this.updatingValue = !1, this.stateValue = e;
    }
  },
  // computed: {
  //   radioOptions() {
  //     const { disabled } = this;
  //     return this.options.map(option => {
  //       return typeof option === 'string'
  //         ? { label: option, value: option }
  //         : { ...option, disabled: option.disabled === undefined ? disabled : option.disabled };
  //     });
  //   },
  // },
  created: function() {
    this.radioGroupContext = Ut("radioGroupContext", this);
  },
  methods: {
    onRadioChange: function(e) {
      var n = this, r = this.stateValue, a = e.target.value;
      Se(this, "value") || (this.stateValue = a), !this.updatingValue && a !== r && (this.updatingValue = !0, this.$emit("update:value", a), this.$emit("change", e)), Le(function() {
        n.updatingValue = !1;
      });
    }
  },
  render: function() {
    var e = this, n = me(this), r = n.prefixCls, a = n.options, o = n.buttonStyle, s = this.configProvider.getPrefixCls, l = s("radio", r), u = "".concat(l, "-group"), c = Z(u, "".concat(u, "-").concat(o), S({}, "".concat(u, "-").concat(n.size), n.size)), f = Aa(et(this));
    return a && a.length > 0 && (f = a.map(function(d) {
      return typeof d == "string" ? h(At, {
        key: d,
        prefixCls: l,
        disabled: n.disabled,
        value: d,
        checked: e.stateValue === d
      }, {
        default: function() {
          return [d];
        }
      }) : h(At, {
        key: "radio-group-value-options-".concat(d.value),
        prefixCls: l,
        disabled: d.disabled || n.disabled,
        value: d.value,
        checked: e.stateValue === d.value
      }, {
        default: function() {
          return [d.label];
        }
      });
    })), h("div", {
      class: c
    }, [f]);
  }
});
var L$ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const H$ = K({
  name: "ARadioButton",
  props: b({}, Yb),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      radioGroupContext: ye("radioGroupContext", {})
    };
  },
  render: function() {
    var e = this, n = me(this), r = n.prefixCls, a = L$(n, ["prefixCls"]), o = this.configProvider.getPrefixCls, s = o("radio-button", r), l = b({
      prefixCls: s
    }, a);
    return this.radioGroupContext && (l.onChange = this.radioGroupContext.onRadioChange, l.checked = n.value === this.radioGroupContext.stateValue, l.disabled = n.disabled || this.radioGroupContext.disabled), h(At, l, {
      default: function() {
        return [et(e)];
      }
    });
  }
});
At.Group = Df;
At.Button = H$;
At.install = function(t) {
  return t.component(At.name, At), t.component(At.Group.name, At.Group), t.component(At.Button.name, At.Button), t;
};
function gs(t) {
  return t == null;
}
var kp = {
  validator: function(e) {
    return Array.isArray(e) ? e.length === 0 || e.findIndex(function(n) {
      return typeof n != "string";
    }) === -1 || e.findIndex(function(n) {
      return !gs(n) && !R.isMoment(n);
    }) === -1 : typeof e == "string" || gs(e) || R.isMoment(e);
  }
};
function ya(t, e, n, r) {
  var a = Array.isArray(e) ? e : [e];
  a.forEach(function(o) {
    o && (r && bn(Wt(R)(o, r).isValid(), t, "When set `valueFormat`, `".concat(n, "` should provides invalidate string time. ")), !r && bn(Wt(R).isMoment(o) && o.isValid(), t, "`".concat(n, "` provides invalidate moment time. If you want to set empty value, use `null` instead.")));
  });
}
var go = function(e, n) {
  return Array.isArray(e) ? e.map(function(r) {
    return typeof r == "string" && r ? Wt(R)(r, n) : r || null;
  }) : typeof e == "string" && e ? Wt(R)(e, n) : e || null;
}, Yi = function(e, n) {
  return Array.isArray(e) ? e.map(function(r) {
    return Wt(R).isMoment(r) ? r.format(n) : r;
  }) : Wt(R).isMoment(e) ? e.format(n) : e;
}, z$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
const Y$ = z$;
function Dp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      W$(t, a, n[a]);
    });
  }
  return t;
}
function W$(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var $f = function(e, n) {
  var r = Dp({}, e, n.attrs);
  return h(Pe, Dp({}, r, {
    icon: Y$
  }), null);
};
$f.displayName = "PlusOutlined";
$f.inheritAttrs = !1;
const Wb = $f, bi = {
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40
  // also NUM_SOUTH
};
var U$ = {
  width: 0,
  height: 0,
  overflow: "hidden",
  position: "absolute"
};
const bs = {
  name: "Sentinel",
  props: {
    setRef: i.func,
    prevElement: i.any,
    nextElement: i.any
  },
  methods: {
    onKeyDown: function(e) {
      var n = e.target, r = e.which, a = e.shiftKey, o = this.$props, s = o.nextElement, l = o.prevElement;
      r !== oe.TAB || document.activeElement !== n || (!a && s && s.focus(), a && l && l.focus());
    }
  },
  render: function() {
    var e = this.$props.setRef;
    return h("div", {
      tabindex: 0,
      ref: e,
      style: U$,
      onKeydown: this.onKeyDown,
      role: "presentation"
    }, [et(this)]);
  }
};
function G$(t) {
  var e = [];
  return t.forEach(function(n) {
    _r(n) && e.push(n);
  }), e;
}
function Ub(t, e) {
  for (var n = G$(t), r = 0; r < n.length; r++)
    if (n[r].key === e)
      return r;
  return -1;
}
function Wi(t, e) {
  t.transform = e, t.webkitTransform = e, t.mozTransform = e;
}
function Gb(t) {
  return ("transform" in t || "webkitTransform" in t || "MozTransform" in t) && window.atob;
}
function K$(t) {
  return {
    transform: t,
    WebkitTransform: t,
    MozTransform: t
  };
}
function ys(t) {
  return t === "left" || t === "right";
}
function q$(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "ltr", r = ys(e) ? "translateY" : "translateX";
  return !ys(e) && n === "rtl" ? "".concat(r, "(").concat(t * 100, "%) translateZ(0)") : "".concat(r, "(").concat(-t * 100, "%) translateZ(0)");
}
function X$(t, e) {
  var n = ys(e) ? "marginTop" : "marginLeft";
  return S({}, n, "".concat(-t * 100, "%"));
}
function Kb(t, e) {
  return +window.getComputedStyle(t).getPropertyValue(e).replace("px", "");
}
function qb(t) {
  return Object.keys(t).reduce(function(e, n) {
    return (n.substr(0, 5) === "aria-" || n.substr(0, 5) === "data-" || n === "role") && (e[n] = t[n]), e;
  }, {});
}
function no(t, e) {
  return +t.getPropertyValue(e).replace("px", "");
}
function Xb(t, e, n, r, a) {
  var o = Kb(a, "padding-".concat(t));
  if (!r || !r.parentNode)
    return o;
  var s = r.parentNode.childNodes;
  return Array.prototype.some.call(s, function(l) {
    if (!l.tagName)
      return !1;
    var u = window.getComputedStyle(l);
    return l !== r ? (o += no(u, "margin-".concat(t)), o += l[e], o += no(u, "margin-".concat(n)), u.boxSizing === "content-box" && (o += no(u, "border-".concat(t, "-width")) + no(u, "border-".concat(n, "-width"))), !1) : (o += no(u, "margin-".concat(t)), !0);
  }), o;
}
function Z$(t, e) {
  return Xb("left", "offsetWidth", "right", t, e);
}
function Q$(t, e) {
  return Xb("top", "offsetHeight", "bottom", t, e);
}
var J$ = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function $p(t) {
  var e, n = t.children;
  return n.forEach(function(r) {
    r && !uc(e) && !r.disabled && (e = r.key);
  }), e;
}
function eI(t, e) {
  var n = t.children, r = n.map(function(a) {
    return a && a.key;
  });
  return r.indexOf(e) >= 0;
}
const tI = K({
  name: "Tabs",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    destroyInactiveTabPane: i.looseBool,
    renderTabBar: i.func.isRequired,
    renderTabContent: i.func.isRequired,
    navWrapper: i.func.def(function(t) {
      return t;
    }),
    children: i.any.def([]),
    prefixCls: i.string.def("ant-tabs"),
    tabBarPosition: i.string.def("top"),
    activeKey: i.oneOfType([i.string, i.number]),
    defaultActiveKey: i.oneOfType([i.string, i.number]),
    direction: i.string.def("ltr"),
    tabBarGutter: i.number
  },
  setup: function(e) {
    var n;
    e.activeKey !== void 0 ? n = e.activeKey : e.defaultActiveKey !== void 0 ? n = e.defaultActiveKey : n = $p(e);
    var r = rr({
      _activeKey: n
    });
    return Mo(function() {
      e.activeKey !== void 0 ? r._activeKey = e.activeKey : eI(e, r._activeKey) || (r._activeKey = $p(e));
    }, {
      flush: "sync"
    }), {
      state: r
    };
  },
  created: function() {
    this.panelSentinelStart = void 0, this.panelSentinelEnd = void 0, this.sentinelStart = void 0, this.sentinelEnd = void 0, Ut("sentinelContext", this);
  },
  beforeUnmount: function() {
    this.destroy = !0, cancelAnimationFrame(this.sentinelId);
  },
  methods: {
    onTabClick: function(e, n) {
      this.tabBar.props && this.tabBar.props.onTabClick && this.tabBar.props.onTabClick(e, n), this.setActiveKey(e);
    },
    onNavKeyDown: function(e) {
      var n = e.keyCode;
      if (n === bi.RIGHT || n === bi.DOWN) {
        e.preventDefault();
        var r = this.getNextActiveKey(!0);
        this.onTabClick(r);
      } else if (n === bi.LEFT || n === bi.UP) {
        e.preventDefault();
        var a = this.getNextActiveKey(!1);
        this.onTabClick(a);
      }
    },
    onScroll: function(e) {
      var n = e.target, r = e.currentTarget;
      n === r && n.scrollLeft > 0 && (n.scrollLeft = 0);
    },
    // Sentinel for tab index
    setSentinelStart: function(e) {
      this.sentinelStart = e;
    },
    setSentinelEnd: function(e) {
      this.sentinelEnd = e;
    },
    setPanelSentinelStart: function(e) {
      e !== this.panelSentinelStart && this.updateSentinelContext(), this.panelSentinelStart = e;
    },
    setPanelSentinelEnd: function(e) {
      e !== this.panelSentinelEnd && this.updateSentinelContext(), this.panelSentinelEnd = e;
    },
    setActiveKey: function(e) {
      if (this.state._activeKey !== e) {
        var n = this.$props;
        n.activeKey === void 0 && (this.state._activeKey = e), this.__emit("update:activeKey", e), this.__emit("change", e);
      }
    },
    getNextActiveKey: function(e) {
      var n = this.state._activeKey, r = [];
      this.$props.children.forEach(function(s) {
        var l, u;
        s && !(!((l = s.props) === null || l === void 0) && l.disabled) && ((u = s.props) === null || u === void 0 ? void 0 : u.disabled) !== "" && (e ? r.push(s) : r.unshift(s));
      });
      var a = r.length, o = a && r[0].key;
      return r.forEach(function(s, l) {
        s.key === n && (l === a - 1 ? o = r[0].key : o = r[l + 1].key);
      }), o;
    },
    updateSentinelContext: function() {
      var e = this;
      this.destroy || (cancelAnimationFrame(this.sentinelId), this.sentinelId = requestAnimationFrame(function() {
        e.destroy || e.$forceUpdate();
      }));
    }
  },
  render: function() {
    var e, n = this.$props, r = n.prefixCls, a = n.navWrapper, o = n.tabBarPosition, s = n.renderTabContent, l = n.renderTabBar, u = n.destroyInactiveTabPane, c = n.direction, f = n.tabBarGutter, d = this.$attrs, p = d.class;
    d.onChange;
    var m = d.style, v = J$(d, ["class", "onChange", "style"]), g = (e = {}, S(e, p, p), S(e, r, 1), S(e, "".concat(r, "-").concat(o), 1), S(e, "".concat(r, "-rtl"), c === "rtl"), e);
    this.tabBar = l();
    var C = je(this.tabBar, {
      prefixCls: r,
      navWrapper: a,
      tabBarPosition: o,
      panels: n.children,
      activeKey: this.state._activeKey,
      direction: c,
      tabBarGutter: f,
      onKeydown: this.onNavKeyDown,
      onTabClick: this.onTabClick,
      key: "tabBar"
    }), y = je(s(), {
      prefixCls: r,
      tabBarPosition: o,
      activeKey: this.state._activeKey,
      destroyInactiveTabPane: u,
      direction: c,
      onChange: this.setActiveKey,
      children: n.children,
      key: "tabContent"
    }), O = h(bs, {
      key: "sentinelStart",
      setRef: this.setSentinelStart,
      nextElement: this.panelSentinelStart
    }, null), w = h(bs, {
      key: "sentinelEnd",
      setRef: this.setSentinelEnd,
      prevElement: this.panelSentinelEnd
    }, null), _ = [];
    o === "bottom" ? _.push(O, y, w, C) : _.push(C, O, y, w);
    var x = b(b({}, qb(v)), {
      style: m,
      onScroll: this.onScroll,
      class: g
    });
    return h("div", x, [_]);
  }
}), If = K({
  name: "TabPane",
  props: {
    active: i.looseBool,
    destroyInactiveTabPane: i.looseBool,
    forceRender: i.looseBool,
    placeholder: i.any,
    rootPrefixCls: i.string,
    tab: i.any,
    closable: i.looseBool,
    disabled: i.looseBool
  },
  setup: function() {
    return {
      isActived: void 0,
      sentinelContext: ye("sentinelContext", {})
    };
  },
  render: function() {
    var e, n = this.$props, r = n.destroyInactiveTabPane, a = n.active, o = n.forceRender, s = n.rootPrefixCls, l = et(this), u = ce(this, "placeholder");
    this.isActived = this.isActived || a;
    var c = "".concat(s, "-tabpane"), f = (e = {}, S(e, c, 1), S(e, "".concat(c, "-inactive"), !a), S(e, "".concat(c, "-active"), a), e), d = r ? a : this.isActived, p = d || o, m = this.sentinelContext, v = m.sentinelStart, g = m.sentinelEnd, C = m.setPanelSentinelStart, y = m.setPanelSentinelEnd, O, w;
    return a && p && (O = h(bs, {
      setRef: C,
      prevElement: v
    }, null), w = h(bs, {
      setRef: y,
      nextElement: g
    }, null)), h("div", {
      class: f,
      role: "tabpanel",
      "aria-hidden": a ? "false" : "true"
    }, [O, p ? l : u, w]);
  }
}), Zb = K({
  name: "TabContent",
  inheritAttrs: !1,
  props: {
    animated: i.looseBool.def(!0),
    animatedWithMargin: i.looseBool.def(!0),
    prefixCls: i.string.def("ant-tabs"),
    activeKey: i.oneOfType([i.string, i.number]),
    tabBarPosition: i.string,
    direction: i.string,
    destroyInactiveTabPane: i.looseBool,
    children: i.any
  },
  computed: {
    classes: function() {
      var e, n = this.animated, r = this.prefixCls, a = this.$attrs.class;
      return e = {}, S(e, a, !!a), S(e, "".concat(r, "-content"), !0), S(e, n ? "".concat(r, "-content-animated") : "".concat(r, "-content-no-animated"), !0), e;
    }
  },
  methods: {
    getTabPanes: function(e) {
      var n = this.$props, r = n.activeKey, a = [];
      return e.forEach(function(o) {
        if (o) {
          var s = o.key, l = r === s;
          a.push(je(o, {
            active: l,
            destroyInactiveTabPane: n.destroyInactiveTabPane,
            rootPrefixCls: n.prefixCls
          }));
        }
      }), a;
    }
  },
  render: function() {
    var e = this.activeKey, n = this.tabBarPosition, r = this.animated, a = this.animatedWithMargin, o = this.direction, s = this.classes, l = this.children, u = {};
    if (r && l) {
      var c = Ub(l, e);
      if (c !== -1) {
        var f = a ? X$(c, n) : K$(q$(c, n, o));
        u = b(b({}, this.$attrs.style), f);
      } else
        u = b(b({}, this.$attrs.style), {
          display: "none"
        });
    }
    return h("div", {
      class: s,
      style: u
    }, [this.getTabPanes(l || [])]);
  }
});
var nI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
const rI = nI;
function Ip(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      aI(t, a, n[a]);
    });
  }
  return t;
}
function aI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Mf = function(e, n) {
  var r = Ip({}, e, n.attrs);
  return h(Pe, Ip({}, r, {
    icon: rI
  }), null);
};
Mf.displayName = "UpOutlined";
Mf.inheritAttrs = !1;
const Qb = Mf;
var oI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const iI = oI;
function Mp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      sI(t, a, n[a]);
    });
  }
  return t;
}
function sI(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Af = function(e, n) {
  var r = Mp({}, e, n.attrs);
  return h(Pe, Mp({}, r, {
    icon: iI
  }), null);
};
Af.displayName = "LeftOutlined";
Af.inheritAttrs = !1;
const lI = Af;
function Ap(t, e) {
  var n = t.$props, r = n.styles, a = r === void 0 ? {} : r, o = n.panels, s = n.activeKey, l = n.direction, u = t.getRef("root"), c = t.getRef("nav") || u, f = t.getRef("inkBar"), d = t.getRef("activeTab"), p = f.style, m = t.$props.tabBarPosition, v = Ub(o, s);
  if (e && (p.display = "none"), d) {
    var g = d, C = Gb(p);
    if (Wi(p, ""), p.width = "", p.height = "", p.left = "", p.top = "", p.bottom = "", p.right = "", m === "top" || m === "bottom") {
      var y = Z$(g, c), O = g.offsetWidth;
      O === u.offsetWidth ? O = 0 : a.inkBar && a.inkBar.width !== void 0 && (O = parseFloat(a.inkBar.width, 10), O && (y += (g.offsetWidth - O) / 2)), l === "rtl" && (y = Kb(g, "margin-left") - y), C ? Wi(p, "translate3d(".concat(y, "px,0,0)")) : p.left = "".concat(y, "px"), p.width = "".concat(O, "px");
    } else {
      var w = Q$(g, c), _ = g.offsetHeight;
      a.inkBar && a.inkBar.height !== void 0 && (_ = parseFloat(a.inkBar.height, 10), _ && (w += (g.offsetHeight - _) / 2)), C ? (Wi(p, "translate3d(0,".concat(w, "px,0)")), p.top = "0") : p.top = "".concat(w, "px"), p.height = "".concat(_, "px");
    }
  }
  p.display = v !== -1 ? "block" : "none";
}
const uI = {
  name: "InkTabBarNode",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    inkBarAnimated: {
      type: Boolean,
      default: !0
    },
    direction: i.string,
    prefixCls: String,
    styles: Object,
    tabBarPosition: String,
    saveRef: i.func.def(function() {
    }),
    getRef: i.func.def(function() {
    }),
    panels: i.array,
    activeKey: i.oneOfType([i.string, i.number])
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      Ap(e);
    });
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      Ap(e, !0);
    });
  },
  render: function() {
    var e, n = this.prefixCls, r = this.styles, a = r === void 0 ? {} : r, o = this.inkBarAnimated, s = "".concat(n, "-ink-bar"), l = (e = {}, S(e, s, !0), S(e, o ? "".concat(s, "-animated") : "".concat(s, "-no-animated"), !0), e);
    return h("div", {
      style: a.inkBar,
      class: l,
      key: "inkBar",
      ref: this.saveRef("inkBar")
    }, null);
  }
};
var cI = process.env.NODE_ENV !== "production", Jb = function() {
};
if (cI) {
  var fI = function(e, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    var o = 0, s = "Warning: " + e.replace(/%s/g, function() {
      return n[o++];
    });
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  };
  Jb = function(t, e, n) {
    var r = arguments.length;
    n = new Array(r > 2 ? r - 2 : 0);
    for (var a = 2; a < r; a++)
      n[a - 2] = arguments[a];
    if (e === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    t || fI.apply(null, [e].concat(n));
  };
}
var dI = Jb;
function Ul() {
}
const hI = {
  name: "TabBarTabsNode",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    activeKey: i.oneOfType([i.string, i.number]),
    panels: i.any.def([]),
    prefixCls: i.string.def(""),
    tabBarGutter: i.any.def(null),
    onTabClick: i.func,
    saveRef: i.func.def(Ul),
    getRef: i.func.def(Ul),
    renderTabBarNode: i.func,
    tabBarPosition: i.string,
    direction: i.string
  },
  render: function() {
    var e = this, n = this.$props, r = n.panels, a = n.activeKey, o = n.prefixCls, s = n.tabBarGutter, l = n.saveRef, u = n.tabBarPosition, c = n.direction, f = [], d = this.renderTabBarNode || this.$slots.renderTabBarNode;
    return r.forEach(function(p, m) {
      if (p) {
        var v = xm(p), g = p.key, C = a === g ? "".concat(o, "-tab-active") : "";
        C += " ".concat(o, "-tab");
        var y = {}, O = v.disabled;
        O ? C += " ".concat(o, "-tab-disabled") : y.onClick = function() {
          e.__emit("tabClick", g);
        };
        var w = ce(p, "tab"), _ = s && m === r.length - 1 ? 0 : s;
        _ = typeof _ == "number" ? "".concat(_, "px") : _;
        var x = c === "rtl" ? "marginLeft" : "marginRight", P = S({}, ys(u) ? "marginBottom" : x, _);
        dI(w !== void 0, "There must be `tab` property or slot on children of Tabs.");
        var T = h("div", H(H({
          role: "tab",
          "aria-disabled": O ? "true" : "false",
          "aria-selected": a === g ? "true" : "false"
        }, y), {}, {
          class: C.trim(),
          key: g,
          style: P,
          ref: a === g ? l("activeTab") : Ul
        }), [w]);
        d && (T = d(T)), f.push(T);
      }
    }), h("div", {
      ref: this.saveRef("navTabsContainer")
    }, [f]);
  }
};
var pI = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function Np() {
}
const vI = {
  name: "TabBarRootNode",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    saveRef: i.func.def(Np),
    getRef: i.func.def(Np),
    prefixCls: i.string.def(""),
    tabBarPosition: i.string.def("top"),
    extraContent: i.any
  },
  methods: {
    onKeyDown: function(e) {
      this.__emit("keydown", e);
    }
  },
  render: function() {
    var e, n = this.prefixCls, r = this.onKeyDown, a = this.tabBarPosition, o = this.extraContent, s = this.$attrs, l = s.class, u = s.style;
    s.onKeydown;
    var c = pI(s, ["class", "style", "onKeydown"]), f = (e = {}, S(e, "".concat(n, "-bar"), !0), S(e, l, !!l), e), d = a === "top" || a === "bottom", p = d ? {
      float: "right"
    } : {}, m = et(this), v = m;
    return o && (v = [je(o, {
      key: "extra",
      style: b({}, p)
    }), je(m, {
      key: "content"
    })], v = d ? v : v.reverse()), h("div", H({
      role: "tablist",
      class: f,
      tabindex: "0",
      onKeydown: r,
      style: u,
      ref: this.saveRef("root")
    }, qb(c)), [v]);
  }
};
var mI = function() {
  return yn.Date.now();
};
const Gl = mI;
var gI = /\s/;
function bI(t) {
  for (var e = t.length; e-- && gI.test(t.charAt(e)); )
    ;
  return e;
}
var yI = /^\s+/;
function CI(t) {
  return t && t.slice(0, bI(t) + 1).replace(yI, "");
}
var Vp = 0 / 0, wI = /^[-+]0x[0-9a-f]+$/i, OI = /^0b[01]+$/i, SI = /^0o[0-7]+$/i, _I = parseInt;
function Yu(t) {
  if (typeof t == "number")
    return t;
  if (ol(t))
    return Vp;
  if (tr(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tr(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = CI(t);
  var n = OI.test(t);
  return n || SI.test(t) ? _I(t.slice(2), n ? 2 : 8) : wI.test(t) ? Vp : +t;
}
var xI = "Expected a function", PI = Math.max, TI = Math.min;
function EI(t, e, n) {
  var r, a, o, s, l, u, c = 0, f = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(xI);
  e = Yu(e) || 0, tr(n) && (f = !!n.leading, d = "maxWait" in n, o = d ? PI(Yu(n.maxWait) || 0, e) : o, p = "trailing" in n ? !!n.trailing : p);
  function m(P) {
    var T = r, M = a;
    return r = a = void 0, c = P, s = t.apply(M, T), s;
  }
  function v(P) {
    return c = P, l = setTimeout(y, e), f ? m(P) : s;
  }
  function g(P) {
    var T = P - u, M = P - c, $ = e - T;
    return d ? TI($, o - M) : $;
  }
  function C(P) {
    var T = P - u, M = P - c;
    return u === void 0 || T >= e || T < 0 || d && M >= o;
  }
  function y() {
    var P = Gl();
    if (C(P))
      return O(P);
    l = setTimeout(y, g(P));
  }
  function O(P) {
    return l = void 0, p && r ? m(P) : (r = a = void 0, s);
  }
  function w() {
    l !== void 0 && clearTimeout(l), c = 0, r = u = a = l = void 0;
  }
  function _() {
    return l === void 0 ? s : O(Gl());
  }
  function x() {
    var P = Gl(), T = C(P);
    if (r = arguments, a = this, u = P, T) {
      if (l === void 0)
        return v(u);
      if (d)
        return clearTimeout(l), l = setTimeout(y, e), m(u);
    }
    return l === void 0 && (l = setTimeout(y, e)), s;
  }
  return x.cancel = w, x.flush = _, x;
}
const kI = {
  name: "ScrollableTabBarNode",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    activeKey: i.any,
    getRef: i.func.def(function() {
    }),
    saveRef: i.func.def(function() {
    }),
    tabBarPosition: i.oneOf(["left", "right", "top", "bottom"]).def("left"),
    prefixCls: i.string.def(""),
    scrollAnimated: i.looseBool.def(!0),
    navWrapper: i.func.def(function(t) {
      return t;
    }),
    prevIcon: i.any,
    nextIcon: i.any,
    direction: i.string
  },
  data: function() {
    return this.offset = 0, this.prevProps = b({}, this.$props), {
      next: !1,
      prev: !1
    };
  },
  watch: {
    tabBarPosition: function() {
      var e = this;
      this.tabBarPositionChange = !0, this.$nextTick(function() {
        e.setOffset(0);
      });
    }
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal(), e.debouncedResize = EI(function() {
        e.setNextPrev(), e.scrollToActiveTab();
      }, 200), e.resizeObserver = new sc(e.debouncedResize), e.resizeObserver.observe(e.$props.getRef("container"));
    });
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedCal(e.prevProps), e.prevProps = b({}, e.$props);
    });
  },
  beforeUnmount: function() {
    this.resizeObserver && this.resizeObserver.disconnect(), this.debouncedResize && this.debouncedResize.cancel && this.debouncedResize.cancel();
  },
  methods: {
    updatedCal: function(e) {
      var n = this, r = this.$props;
      if (e && e.tabBarPosition !== r.tabBarPosition) {
        this.setOffset(0);
        return;
      }
      this.isNextPrevShown(this.$data) !== this.isNextPrevShown(this.setNextPrev()) ? (this.$forceUpdate(), this.$nextTick(function() {
        n.scrollToActiveTab();
      })) : (!e || r.activeKey !== e.activeKey) && this.scrollToActiveTab();
    },
    setNextPrev: function() {
      var e = this.$props.getRef("nav"), n = this.$props.getRef("navTabsContainer"), r = this.getScrollWH(n || e), a = this.getOffsetWH(this.$props.getRef("container")) + 1, o = this.getOffsetWH(this.$props.getRef("navWrap")), s = this.offset, l = a - r, u = this.next, c = this.prev;
      if (l >= 0)
        u = !1, this.setOffset(0, !1), s = 0;
      else if (l < s)
        u = !0;
      else {
        u = !1;
        var f = o - r;
        this.setOffset(f, !1), s = f;
      }
      return s < 0 ? c = !0 : c = !1, this.setNext(u), this.setPrev(c), {
        next: u,
        prev: c
      };
    },
    getOffsetWH: function(e) {
      var n = this.$props.tabBarPosition, r = "offsetWidth";
      return (n === "left" || n === "right") && (r = "offsetHeight"), e[r];
    },
    getScrollWH: function(e) {
      var n = this.tabBarPosition, r = "scrollWidth";
      return (n === "left" || n === "right") && (r = "scrollHeight"), e[r];
    },
    getOffsetLT: function(e) {
      var n = this.$props.tabBarPosition, r = "left";
      return (n === "left" || n === "right") && (r = "top"), e.getBoundingClientRect()[r];
    },
    setOffset: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Math.min(0, e);
      if (this.offset !== r) {
        this.offset = r;
        var a = {}, o = this.$props.tabBarPosition, s = this.$props.getRef("nav").style, l = Gb(s);
        o === "left" || o === "right" ? l ? a = {
          value: "translate3d(0,".concat(r, "px,0)")
        } : a = {
          name: "top",
          value: "".concat(r, "px")
        } : l ? (this.$props.direction === "rtl" && (r = -r), a = {
          value: "translate3d(".concat(r, "px,0,0)")
        }) : a = {
          name: "left",
          value: "".concat(r, "px")
        }, l ? Wi(s, a.value) : s[a.name] = a.value, n && this.setNextPrev();
      }
    },
    setPrev: function(e) {
      this.prev !== e && (this.prev = e);
    },
    setNext: function(e) {
      this.next !== e && (this.next = e);
    },
    isNextPrevShown: function(e) {
      return e ? e.next || e.prev : this.next || this.prev;
    },
    prevTransitionEnd: function(e) {
      if (e.propertyName === "opacity") {
        var n = this.$props.getRef("container");
        this.scrollToActiveTab({
          target: n,
          currentTarget: n
        });
      }
    },
    scrollToActiveTab: function(e) {
      var n = this.$props.getRef("activeTab"), r = this.$props.getRef("navWrap");
      if (!(e && e.target !== e.currentTarget || !n)) {
        var a = this.isNextPrevShown() && this.lastNextPrevShown;
        if (this.lastNextPrevShown = this.isNextPrevShown(), !!a) {
          var o = this.getScrollWH(n), s = this.getOffsetWH(r), l = this.offset, u = this.getOffsetLT(r), c = this.getOffsetLT(n);
          u > c ? (l += u - c, this.setOffset(l)) : u + s < c + o && (l -= c + o - (u + s), this.setOffset(l));
        }
      }
    },
    prevClick: function(e) {
      this.__emit("prevClick", e);
      var n = this.$props.getRef("navWrap"), r = this.getOffsetWH(n), a = this.offset;
      this.setOffset(a + r);
    },
    nextClick: function(e) {
      this.__emit("nextClick", e);
      var n = this.$props.getRef("navWrap"), r = this.getOffsetWH(n), a = this.offset;
      this.setOffset(a - r);
    }
  },
  render: function() {
    var e, n, r, a, o = this.next, s = this.prev, l = this.$props, u = l.prefixCls, c = l.scrollAnimated, f = l.navWrapper, d = ce(this, "prevIcon"), p = ce(this, "nextIcon"), m = s || o, v = h("span", {
      onClick: s && this.prevClick,
      unselectable: "unselectable",
      class: (e = {}, S(e, "".concat(u, "-tab-prev"), 1), S(e, "".concat(u, "-tab-btn-disabled"), !s), S(e, "".concat(u, "-tab-arrow-show"), m), e),
      onTransitionend: this.prevTransitionEnd
    }, [d || h("span", {
      class: "".concat(u, "-tab-prev-icon")
    }, null)]), g = h("span", {
      onClick: o && this.nextClick,
      unselectable: "unselectable",
      class: (n = {}, S(n, "".concat(u, "-tab-next"), 1), S(n, "".concat(u, "-tab-btn-disabled"), !o), S(n, "".concat(u, "-tab-arrow-show"), m), n)
    }, [p || h("span", {
      class: "".concat(u, "-tab-next-icon")
    }, null)]), C = "".concat(u, "-nav"), y = (r = {}, S(r, C, !0), S(r, c ? "".concat(C, "-animated") : "".concat(C, "-no-animated"), !0), r);
    return h("div", {
      class: (a = {}, S(a, "".concat(u, "-nav-container"), 1), S(a, "".concat(u, "-nav-container-scrolling"), m), a),
      key: "container",
      ref: this.saveRef("container")
    }, [v, g, h("div", {
      class: "".concat(u, "-nav-wrap"),
      ref: this.saveRef("navWrap")
    }, [h("div", {
      class: "".concat(u, "-nav-scroll")
    }, [h("div", {
      class: y,
      ref: this.saveRef("nav")
    }, [f(et(this))])])])]);
  }
}, DI = {
  props: {
    children: i.func.def(function() {
      return null;
    })
  },
  methods: {
    getRef: function(e) {
      return this[e];
    },
    saveRef: function(e) {
      var n = this;
      return function(r) {
        r && (n[e] = r);
      };
    }
  },
  render: function() {
    var e = this, n = function(o) {
      return e.saveRef(o);
    }, r = function(o) {
      return e.getRef(o);
    };
    return this.children(n, r);
  }
}, Rp = K({
  name: "ScrollableInkTabBar",
  inheritAttrs: !1,
  render: function() {
    var e = this, n = this.$attrs.children;
    return h(DI, {
      children: function(a, o) {
        return h(vI, H({
          saveRef: a
        }, e.$attrs), {
          default: function() {
            return [h(kI, H({
              saveRef: a,
              getRef: o
            }, e.$attrs), {
              default: function() {
                return [h(hI, H({
                  saveRef: a
                }, b(b({}, e.$attrs), {
                  renderTabBarNode: n
                })), null), h(uI, H({
                  saveRef: a,
                  getRef: o
                }, e.$attrs), null)];
              }
            })];
          }
        });
      }
    }, null);
  }
});
var $I = K({
  name: "TabBar",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    centered: i.looseBool.def(!1),
    tabBarStyle: i.style,
    tabBarExtraContent: i.VNodeChild,
    type: i.oneOf(ke("line", "card", "editable-card")),
    tabPosition: i.oneOf(ke("top", "right", "bottom", "left")).def("top"),
    tabBarPosition: i.oneOf(ke("top", "right", "bottom", "left")),
    size: i.oneOf(ke("default", "small", "large")),
    animated: {
      type: [Boolean, Object],
      default: void 0
    },
    renderTabBar: i.func,
    panels: i.array.def([]),
    activeKey: i.oneOfType([i.string, i.number]),
    tabBarGutter: i.number
  },
  render: function() {
    var e, n = this.$props, r = n.centered, a = n.tabBarStyle, o = n.animated, s = o === void 0 ? !0 : o, l = n.renderTabBar, u = n.tabBarExtraContent, c = n.tabPosition, f = n.prefixCls, d = n.type, p = d === void 0 ? "line" : d, m = n.size, v = Ye(s) === "object" ? s.inkBar : s, g = c === "left" || c === "right", C = h("span", {
      class: "".concat(f, "-tab-prev-icon")
    }, [g ? h(Qb, {
      class: "".concat(f, "-tab-prev-icon-target")
    }, null) : h(lI, {
      class: "".concat(f, "-tab-prev-icon-target")
    }, null)]), y = h("span", {
      class: "".concat(f, "-tab-next-icon")
    }, [g ? h(uf, {
      class: "".concat(f, "-tab-next-icon-target")
    }, null) : h(a$, {
      class: "".concat(f, "-tab-next-icon-target")
    }, null)]), O = (e = {}, S(e, this.$attrs.class, this.$attrs.class), S(e, "".concat(f, "-centered-bar"), r), S(e, "".concat(f, "-").concat(c, "-bar"), !0), S(e, "".concat(f, "-").concat(m, "-bar"), !!m), S(e, "".concat(f, "-card-bar"), p && p.indexOf("card") >= 0), e), w = b(b(b({}, this.$props), this.$attrs), {
      children: null,
      inkBarAnimated: v,
      extraContent: u,
      prevIcon: C,
      nextIcon: y,
      style: a,
      class: O
    });
    return l ? l(b(b({}, w), {
      DefaultTabBar: Rp
    })) : h(Rp, w, null);
  }
});
const II = $I;
var MI = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const Pn = K({
  TabPane: If,
  name: "ATabs",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    activeKey: i.oneOfType([i.string, i.number]),
    defaultActiveKey: i.oneOfType([i.string, i.number]),
    hideAdd: i.looseBool.def(!1),
    centered: i.looseBool.def(!1),
    tabBarStyle: i.object,
    tabBarExtraContent: i.any,
    destroyInactiveTabPane: i.looseBool.def(!1),
    type: i.oneOf(ke("line", "card", "editable-card")),
    tabPosition: i.oneOf(["top", "right", "bottom", "left"]).def("top"),
    size: i.oneOf(["default", "small", "large"]),
    animated: Qn(i.oneOfType([i.looseBool, i.object])),
    tabBarGutter: i.number,
    renderTabBar: i.func,
    onChange: {
      type: Function
    },
    onTabClick: i.func,
    onPrevClick: {
      type: Function
    },
    onNextClick: {
      type: Function
    },
    onEdit: {
      type: Function
    }
  },
  emits: ["update:activeKey", "edit", "change"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  methods: {
    removeTab: function(e, n) {
      n.stopPropagation(), uc(e) && this.$emit("edit", e, "remove");
    },
    handleChange: function(e) {
      this.$emit("update:activeKey", e), this.$emit("change", e);
    },
    createNewTab: function(e) {
      this.$emit("edit", e, "add");
    }
  },
  render: function() {
    var e, n = this, r, a = me(this), o = a.prefixCls, s = a.size, l = a.type, u = l === void 0 ? "line" : l, c = a.tabPosition, f = a.animated, d = f === void 0 ? !0 : f, p = a.hideAdd, m = a.renderTabBar, v = this.$attrs, g = v.class, C = MI(v, ["class"]), y = this.configProvider.getPrefixCls, O = y("tabs", o), w = Aa(et(this)), _ = ce(this, "tabBarExtraContent"), x = Ye(d) === "object" ? d.tabPane : d;
    u !== "line" && (x = "animated" in a ? x : !1);
    var P = (e = {}, S(e, g, g), S(e, "".concat(O, "-vertical"), c === "left" || c === "right"), S(e, "".concat(O, "-").concat(s), !!s), S(e, "".concat(O, "-card"), u.indexOf("card") >= 0), S(e, "".concat(O, "-").concat(u), !0), S(e, "".concat(O, "-no-animation"), !x), e), T = [];
    u === "editable-card" && (T = [], w.forEach(function(I, F) {
      var B = xm(I), E = B.closable;
      E = typeof E > "u" ? !0 : E;
      var j = E ? h(Wo, {
        class: "".concat(O, "-close-x"),
        onClick: function(N) {
          return n.removeTab(I.key, N);
        }
      }, null) : null;
      T.push(je(I, {
        tab: h("div", {
          class: E ? void 0 : "".concat(O, "-tab-unclosable")
        }, [ce(I, "tab"), j]),
        key: I.key || F
      }));
    }), p || (_ = h("span", null, [h(Wb, {
      class: "".concat(O, "-new-tab"),
      onClick: this.createNewTab
    }, null), _]))), _ = _ ? h("div", {
      class: "".concat(O, "-extra-content")
    }, [_]) : null;
    var M = m || this.$slots.renderTabBar, $ = b(b(b(b({}, a), {
      prefixCls: O,
      tabBarExtraContent: _,
      renderTabBar: M
    }), C), {
      children: w
    }), k = (r = {}, S(r, "".concat(O, "-").concat(c, "-content"), !0), S(r, "".concat(O, "-card-content"), u.indexOf("card") >= 0), r), V = b(b(b(b({}, a), {
      prefixCls: O,
      tabBarPosition: c,
      // https://github.com/vueComponent/ant-design-vue/issues/2030
      // 如仅传递 tabBarProps 会导致，第二次执行 renderTabBar 时，丢失 on 属性，
      // 添加key之后，会在babel jsx 插件中做一次merge，最终TabBar接收的是一个新的对象，而不是 tabBarProps
      renderTabBar: function() {
        return h(II, H({
          key: "tabBar"
        }, $), null);
      },
      renderTabContent: function() {
        return h(Zb, {
          class: k,
          animated: x,
          animatedWithMargin: !0
        }, null);
      },
      children: T.length > 0 ? T : w
    }), C), {
      onChange: this.handleChange,
      class: P
    });
    return h(tI, V, null);
  }
});
Pn.TabPane = b(b({}, If), {
  name: "ATabPane",
  __ANT_TAB_PANE: !0
});
Pn.TabContent = b(b({}, Zb), {
  name: "ATabContent"
});
Pn.install = function(t) {
  return t.component(Pn.name, Pn), t.component(Pn.TabPane.name, Pn.TabPane), t.component(Pn.TabContent.name, Pn.TabContent), t;
};
function AI() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var NI = function() {
  return AI() && window.document.documentElement;
}, yi, VI = function() {
  if (!NI())
    return !1;
  if (yi !== void 0)
    return yi;
  var e = document.createElement("div");
  return e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), yi = e.scrollHeight === 1, document.body.removeChild(e), yi;
};
const RI = function() {
  var t = Q(!1);
  return Dt(function() {
    t.value = VI();
  }), t;
};
var ey = Symbol("rowContextKey"), FI = function(e) {
  Ut(ey, e);
}, BI = function() {
  return ye(ey, {
    gutter: W(function() {
    }),
    wrap: W(function() {
    }),
    supportFlexGap: W(function() {
    })
  });
}, jI = ke("top", "middle", "bottom", "stretch"), LI = ke("start", "end", "center", "space-around", "space-between"), HI = {
  type: i.oneOf(["flex"]),
  align: i.oneOf(jI),
  justify: i.oneOf(LI),
  prefixCls: i.string,
  gutter: i.oneOfType([i.object, i.number, i.array]).def(0),
  wrap: i.looseBool
}, zI = K({
  name: "ARow",
  props: HI,
  setup: function(e, n) {
    var r = n.slots, a = Yr("row", e), o = a.prefixCls, s = a.direction, l, u = Q({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0
    }), c = RI();
    Dt(function() {
      l = wp.subscribe(function(m) {
        var v = e.gutter || 0;
        (!Array.isArray(v) && Ye(v) === "object" || Array.isArray(v) && (Ye(v[0]) === "object" || Ye(v[1]) === "object")) && (u.value = m);
      });
    }), Ao(function() {
      wp.unsubscribe(l);
    });
    var f = W(function() {
      var m = [0, 0], v = e.gutter, g = v === void 0 ? 0 : v, C = Array.isArray(g) ? g : [g, 0];
      return C.forEach(function(y, O) {
        if (Ye(y) === "object")
          for (var w = 0; w < Cp.length; w++) {
            var _ = Cp[w];
            if (u.value[_] && y[_] !== void 0) {
              m[O] = y[_];
              break;
            }
          }
        else
          m[O] = y || 0;
      }), m;
    });
    FI({
      gutter: f,
      supportFlexGap: c,
      wrap: W(function() {
        return e.wrap;
      })
    });
    var d = W(function() {
      var m;
      return Z(o.value, (m = {}, S(m, "".concat(o.value, "-no-wrap"), e.wrap === !1), S(m, "".concat(o.value, "-").concat(e.justify), e.justify), S(m, "".concat(o.value, "-").concat(e.align), e.align), S(m, "".concat(o.value, "-rtl"), s.value === "rtl"), m));
    }), p = W(function() {
      var m = f.value, v = {}, g = m[0] > 0 ? "".concat(m[0] / -2, "px") : void 0, C = m[1] > 0 ? "".concat(m[1] / -2, "px") : void 0;
      return g && (v.marginLeft = g, v.marginRight = g), c.value ? v.rowGap = "".concat(m[1], "px") : C && (v.marginTop = C, v.marginBottom = C), v;
    });
    return function() {
      var m;
      return h("div", {
        class: d.value,
        style: p.value
      }, [(m = r.default) === null || m === void 0 ? void 0 : m.call(r)]);
    };
  }
});
const YI = zI;
function WI(t) {
  return typeof t == "number" ? "".concat(t, " ").concat(t, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(t) ? "0 0 ".concat(t) : t;
}
var hn = i.oneOfType([i.string, i.number]), UI = i.shape({
  span: hn,
  order: hn,
  offset: hn,
  push: hn,
  pull: hn
}).loose, Jr = i.oneOfType([i.string, i.number, UI]), GI = {
  span: hn,
  order: hn,
  offset: hn,
  push: hn,
  pull: hn,
  xs: Jr,
  sm: Jr,
  md: Jr,
  lg: Jr,
  xl: Jr,
  xxl: Jr,
  prefixCls: i.string,
  flex: hn
};
const KI = K({
  name: "ACol",
  props: GI,
  setup: function(e, n) {
    var r = n.slots, a = BI(), o = a.gutter, s = a.supportFlexGap, l = a.wrap, u = Yr("col", e), c = u.prefixCls, f = u.direction, d = W(function() {
      var m, v = e.span, g = e.order, C = e.offset, y = e.push, O = e.pull, w = c.value, _ = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(function(x) {
        var P, T = {}, M = e[x];
        typeof M == "number" ? T.span = M : Ye(M) === "object" && (T = M || {}), _ = b(b({}, _), (P = {}, S(P, "".concat(w, "-").concat(x, "-").concat(T.span), T.span !== void 0), S(P, "".concat(w, "-").concat(x, "-order-").concat(T.order), T.order || T.order === 0), S(P, "".concat(w, "-").concat(x, "-offset-").concat(T.offset), T.offset || T.offset === 0), S(P, "".concat(w, "-").concat(x, "-push-").concat(T.push), T.push || T.push === 0), S(P, "".concat(w, "-").concat(x, "-pull-").concat(T.pull), T.pull || T.pull === 0), S(P, "".concat(w, "-rtl"), f.value === "rtl"), P));
      }), Z(w, (m = {}, S(m, "".concat(w, "-").concat(v), v !== void 0), S(m, "".concat(w, "-order-").concat(g), g), S(m, "".concat(w, "-offset-").concat(C), C), S(m, "".concat(w, "-push-").concat(y), y), S(m, "".concat(w, "-pull-").concat(O), O), m), _);
    }), p = W(function() {
      var m = e.flex, v = o.value, g = {};
      if (v && v[0] > 0) {
        var C = "".concat(v[0] / 2, "px");
        g.paddingLeft = C, g.paddingRight = C;
      }
      if (v && v[1] > 0 && !s.value) {
        var y = "".concat(v[1] / 2, "px");
        g.paddingTop = y, g.paddingBottom = y;
      }
      return m && (g.flex = WI(m), m === "auto" && l.value === !1 && !g.minWidth && (g.minWidth = 0)), g;
    });
    return function() {
      var m;
      return h("div", {
        class: d.value,
        style: p.value
      }, [(m = r.default) === null || m === void 0 ? void 0 : m.call(r)]);
    };
  }
}), qI = Cn(YI), XI = Cn(KI);
var Fp = 1 / 0, ZI = 17976931348623157e292;
function QI(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Yu(t), t === Fp || t === -Fp) {
    var e = t < 0 ? -1 : 1;
    return e * ZI;
  }
  return t === t ? t : 0;
}
function JI(t) {
  var e = QI(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function eM(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
var tM = 1, nM = 2;
function ty(t, e, n, r, a, o) {
  var s = n & tM, l = t.length, u = e.length;
  if (l != u && !(s && u > l))
    return !1;
  var c = o.get(t), f = o.get(e);
  if (c && f)
    return c == e && f == t;
  var d = -1, p = !0, m = n & nM ? new Io() : void 0;
  for (o.set(t, e), o.set(e, t); ++d < l; ) {
    var v = t[d], g = e[d];
    if (r)
      var C = s ? r(g, v, d, e, t, o) : r(v, g, d, t, e, o);
    if (C !== void 0) {
      if (C)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!eM(e, function(y, O) {
        if (!Rb(m, O) && (v === y || a(v, y, n, r, o)))
          return m.push(O);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || a(v, g, n, r, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), p;
}
function rM(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, a) {
    n[++e] = [a, r];
  }), n;
}
var aM = 1, oM = 2, iM = "[object Boolean]", sM = "[object Date]", lM = "[object Error]", uM = "[object Map]", cM = "[object Number]", fM = "[object RegExp]", dM = "[object Set]", hM = "[object String]", pM = "[object Symbol]", vM = "[object ArrayBuffer]", mM = "[object DataView]", Bp = tn ? tn.prototype : void 0, Kl = Bp ? Bp.valueOf : void 0;
function gM(t, e, n, r, a, o, s) {
  switch (n) {
    case mM:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case vM:
      return !(t.byteLength != e.byteLength || !o(new ps(t), new ps(e)));
    case iM:
    case sM:
    case cM:
      return Gc(+t, +e);
    case lM:
      return t.name == e.name && t.message == e.message;
    case fM:
    case hM:
      return t == e + "";
    case uM:
      var l = rM;
    case dM:
      var u = r & aM;
      if (l || (l = Tf), t.size != e.size && !u)
        return !1;
      var c = s.get(t);
      if (c)
        return c == e;
      r |= oM, s.set(t, e);
      var f = ty(l(t), l(e), r, a, o, s);
      return s.delete(t), f;
    case pM:
      if (Kl)
        return Kl.call(t) == Kl.call(e);
  }
  return !1;
}
var bM = 1, yM = Object.prototype, CM = yM.hasOwnProperty;
function wM(t, e, n, r, a, o) {
  var s = n & bM, l = Au(t), u = l.length, c = Au(e), f = c.length;
  if (u != f && !s)
    return !1;
  for (var d = u; d--; ) {
    var p = l[d];
    if (!(s ? p in e : CM.call(e, p)))
      return !1;
  }
  var m = o.get(t), v = o.get(e);
  if (m && v)
    return m == e && v == t;
  var g = !0;
  o.set(t, e), o.set(e, t);
  for (var C = s; ++d < u; ) {
    p = l[d];
    var y = t[p], O = e[p];
    if (r)
      var w = s ? r(O, y, p, e, t, o) : r(y, O, p, t, e, o);
    if (!(w === void 0 ? y === O || a(y, O, n, r, o) : w)) {
      g = !1;
      break;
    }
    C || (C = p == "constructor");
  }
  if (g && !C) {
    var _ = t.constructor, x = e.constructor;
    _ != x && "constructor" in t && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (g = !1);
  }
  return o.delete(t), o.delete(e), g;
}
var OM = 1, jp = "[object Arguments]", Lp = "[object Array]", Ci = "[object Object]", SM = Object.prototype, Hp = SM.hasOwnProperty;
function _M(t, e, n, r, a, o) {
  var s = nn(t), l = nn(e), u = s ? Lp : $o(t), c = l ? Lp : $o(e);
  u = u == jp ? Ci : u, c = c == jp ? Ci : c;
  var f = u == Ci, d = c == Ci, p = u == c;
  if (p && hs(t)) {
    if (!hs(e))
      return !1;
    s = !0, f = !1;
  }
  if (p && !f)
    return o || (o = new Dn()), s || nb(t) ? ty(t, e, n, r, a, o) : gM(t, e, u, n, r, a, o);
  if (!(n & OM)) {
    var m = f && Hp.call(t, "__wrapped__"), v = d && Hp.call(e, "__wrapped__");
    if (m || v) {
      var g = m ? t.value() : t, C = v ? e.value() : e;
      return o || (o = new Dn()), a(g, C, n, r, o);
    }
  }
  return p ? (o || (o = new Dn()), wM(t, e, n, r, a, o)) : !1;
}
function Nf(t, e, n, r, a) {
  return t === e ? !0 : t == null || e == null || !Jn(t) && !Jn(e) ? t !== t && e !== e : _M(t, e, n, r, Nf, a);
}
var zp = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function Yp() {
}
const Ca = K({
  name: "ACheckbox",
  inheritAttrs: !1,
  __ANT_CHECKBOX: !0,
  props: {
    prefixCls: i.string,
    defaultChecked: i.looseBool,
    checked: i.looseBool,
    disabled: i.looseBool,
    isGroup: i.looseBool,
    value: i.any,
    name: i.string,
    id: i.string,
    indeterminate: i.looseBool,
    type: i.string.def("checkbox"),
    autofocus: i.looseBool,
    onChange: i.func,
    "onUpdate:checked": i.func
  },
  emits: ["change", "update:checked"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      checkboxGroupContext: ye("checkboxGroupContext", void 0)
    };
  },
  watch: {
    value: function(e, n) {
      var r = this;
      Le(function() {
        var a = r.checkboxGroupContext, o = a === void 0 ? {} : a;
        o.registerValue && o.cancelValue && (o.cancelValue(n), o.registerValue(e));
      });
    }
  },
  mounted: function() {
    var e = this.value, n = this.checkboxGroupContext, r = n === void 0 ? {} : n;
    r.registerValue && r.registerValue(e), bn(yu(this, "checked") || this.checkboxGroupContext || !yu(this, "value"), "Checkbox", "`value` is not validate prop, do you mean `checked`?");
  },
  beforeUnmount: function() {
    var e = this.value, n = this.checkboxGroupContext, r = n === void 0 ? {} : n;
    r.cancelValue && r.cancelValue(e);
  },
  methods: {
    handleChange: function(e) {
      var n = e.target.checked;
      this.$emit("update:checked", n), this.$emit("change", e);
    },
    focus: function() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function() {
      this.$refs.vcCheckbox.blur();
    }
  },
  render: function() {
    var e = this, n, r = me(this), a = this.checkboxGroupContext, o = this.$attrs, s = et(this), l = r.indeterminate, u = r.prefixCls, c = zp(r, ["indeterminate", "prefixCls"]), f = this.configProvider.getPrefixCls, d = f("checkbox", u), p = o.onMouseenter, m = p === void 0 ? Yp : p, v = o.onMouseleave, g = v === void 0 ? Yp : v;
    o.onInput;
    var C = o.class, y = o.style, O = zp(o, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), w = b(b(b({}, c), {
      prefixCls: d
    }), O);
    a ? (w.onChange = function() {
      for (var P = arguments.length, T = new Array(P), M = 0; M < P; M++)
        T[M] = arguments[M];
      e.$emit.apply(e, ["change"].concat(T)), a.toggleOption({
        label: s,
        value: r.value
      });
    }, w.name = a.name, w.checked = a.sValue.indexOf(r.value) !== -1, w.disabled = r.disabled || a.disabled, w.indeterminate = l) : w.onChange = this.handleChange;
    var _ = Z((n = {}, S(n, "".concat(d, "-wrapper"), !0), S(n, "".concat(d, "-wrapper-checked"), w.checked), S(n, "".concat(d, "-wrapper-disabled"), w.disabled), n), C), x = Z(S({}, "".concat(d, "-indeterminate"), l));
    return h("label", {
      class: _,
      style: y,
      onMouseenter: m,
      onMouseleave: g
    }, [h(zb, H(H({}, w), {}, {
      class: x,
      ref: "vcCheckbox"
    }), null), s.length ? h("span", null, [s]) : null]);
  }
});
function xM() {
}
const Cs = K({
  name: "ACheckboxGroup",
  props: {
    name: i.string,
    prefixCls: i.string,
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    },
    disabled: i.looseBool,
    onChange: i.func
  },
  emits: ["change", "update:value"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  data: function() {
    var e = this.value, n = this.defaultValue;
    return {
      sValue: e || n || [],
      registeredValues: []
    };
  },
  watch: {
    value: function(e) {
      this.sValue = e || [];
    }
  },
  created: function() {
    Ut("checkboxGroupContext", this);
  },
  methods: {
    getOptions: function() {
      var e = this.options, n = e === void 0 ? [] : e, r = this.$slots;
      return n.map(function(a) {
        if (typeof a == "string")
          return {
            label: a,
            value: a
          };
        var o = a.label;
        return o === void 0 && r.label && (o = r.label(a)), b(b({}, a), {
          label: o
        });
      });
    },
    cancelValue: function(e) {
      this.registeredValues = this.registeredValues.filter(function(n) {
        return n !== e;
      });
    },
    registerValue: function(e) {
      this.registeredValues = [].concat(Je(this.registeredValues), [e]);
    },
    toggleOption: function(e) {
      var n = this.registeredValues, r = this.sValue.indexOf(e.value), a = Je(this.sValue);
      r === -1 ? a.push(e.value) : a.splice(r, 1), yu(this, "value") || (this.sValue = a);
      var o = this.getOptions(), s = a.filter(function(l) {
        return n.indexOf(l) !== -1;
      }).sort(function(l, u) {
        var c = o.findIndex(function(d) {
          return d.value === l;
        }), f = o.findIndex(function(d) {
          return d.value === u;
        });
        return c - f;
      });
      this.$emit("update:value", s), this.$emit("change", s);
    }
  },
  render: function() {
    var e = this.$props, n = this.$data, r = e.prefixCls, a = e.options, o = this.configProvider.getPrefixCls, s = o("checkbox", r), l = et(this), u = "".concat(s, "-group");
    return a && a.length > 0 && (l = this.getOptions().map(function(c) {
      return h(Ca, {
        prefixCls: s,
        key: c.value.toString(),
        disabled: "disabled" in c ? c.disabled : e.disabled,
        indeterminate: c.indeterminate,
        value: c.value,
        checked: n.sValue.indexOf(c.value) !== -1,
        onChange: c.onChange || xM,
        class: "".concat(u, "-item")
      }, {
        default: function() {
          return [c.label];
        }
      });
    })), h("div", {
      class: u
    }, [l]);
  }
});
Ca.Group = Cs;
Ca.install = function(t) {
  return t.component(Ca.name, Ca), t.component(Cs.name, Cs), t;
};
function Wp(t) {
  this.changeYear(t);
}
function Up() {
}
var PM = {
  name: "MonthPanel",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    value: i.any,
    defaultValue: i.any,
    cellRender: i.any,
    contentRender: i.any,
    locale: i.any,
    rootPrefixCls: i.string,
    // onChange: PropTypes.func,
    disabledDate: i.func,
    // onSelect: PropTypes.func,
    renderFooter: i.func,
    changeYear: i.func.def(Up)
  },
  data: function() {
    var e = this.value, n = this.defaultValue;
    return this.nextYear = Wp.bind(this, 1), this.previousYear = Wp.bind(this, -1), {
      sValue: e || n
    };
  },
  watch: {
    value: function(e) {
      this.setState({
        sValue: e
      });
    }
  },
  methods: {
    setAndSelectValue: function(e) {
      this.setValue(e), this.__emit("select", e);
    },
    setValue: function(e) {
      Se(this, "value") && this.setState({
        sValue: e
      });
    }
  },
  render: function() {
    var e = this.sValue, n = this.cellRender, r = this.contentRender, a = this.locale, o = this.rootPrefixCls, s = this.disabledDate, l = this.renderFooter, u = e.year(), c = "".concat(o, "-month-panel"), f = l && l("month");
    return h("div", {
      class: c
    }, [h("div", null, [h("div", {
      class: "".concat(c, "-header")
    }, [h("a", {
      class: "".concat(c, "-prev-year-btn"),
      role: "button",
      onClick: this.previousYear,
      title: a.previousYear
    }, null), h("a", {
      class: "".concat(c, "-year-select"),
      role: "button",
      onClick: this.$attrs.onYearPanelShow || Up,
      title: a.yearSelect
    }, [h("span", {
      class: "".concat(c, "-year-select-content")
    }, [u]), h("span", {
      class: "".concat(c, "-year-select-arrow")
    }, [Me("x")])]), h("a", {
      class: "".concat(c, "-next-year-btn"),
      role: "button",
      onClick: this.nextYear,
      title: a.nextYear
    }, null)]), h("div", {
      class: "".concat(c, "-body")
    }, [h(V$, {
      disabledDate: s,
      onSelect: this.setAndSelectValue,
      locale: a,
      value: e,
      cellRender: n,
      contentRender: r,
      prefixCls: c
    }, null)]), f && h("div", {
      class: "".concat(c, "-footer")
    }, [f])])]);
  }
};
const TM = PM;
var EM = 4, kM = 3;
function Gp() {
}
function Kp(t) {
  var e = this.sValue.clone();
  e.add(t, "year"), this.setState({
    sValue: e
  });
}
function DM(t) {
  var e = this.sValue.clone();
  e.year(t), e.month(this.sValue.month()), this.sValue = e, this.__emit("select", e);
}
const $M = {
  name: "YearPanel",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    rootPrefixCls: i.string,
    value: i.object,
    defaultValue: i.object,
    locale: i.object,
    renderFooter: i.func
  },
  data: function() {
    return this.nextDecade = Kp.bind(this, 10), this.previousDecade = Kp.bind(this, -10), {
      sValue: this.value || this.defaultValue
    };
  },
  watch: {
    value: function(e) {
      this.sValue = e;
    }
  },
  methods: {
    years: function() {
      for (var e = this.sValue, n = e.year(), r = parseInt(n / 10, 10) * 10, a = r - 1, o = [], s = 0, l = 0; l < EM; l++) {
        o[l] = [];
        for (var u = 0; u < kM; u++) {
          var c = a + s, f = String(c);
          o[l][u] = {
            content: f,
            year: c,
            title: f
          }, s++;
        }
      }
      return o;
    }
  },
  render: function() {
    var e = this, n = this.sValue, r = this.locale, a = this.renderFooter, o = this.$attrs.onDecadePanelShow || Gp, s = this.years(), l = n.year(), u = parseInt(l / 10, 10) * 10, c = u + 9, f = "".concat(this.rootPrefixCls, "-year-panel"), d = s.map(function(m, v) {
      var g = m.map(function(C) {
        var y, O = (y = {}, S(y, "".concat(f, "-cell"), 1), S(y, "".concat(f, "-selected-cell"), C.year === l), S(y, "".concat(f, "-last-decade-cell"), C.year < u), S(y, "".concat(f, "-next-decade-cell"), C.year > c), y), w = Gp;
        return C.year < u ? w = e.previousDecade : C.year > c ? w = e.nextDecade : w = DM.bind(e, C.year), h("td", {
          role: "gridcell",
          title: C.title,
          key: C.content,
          onClick: w,
          class: O
        }, [h("a", {
          class: "".concat(f, "-year")
        }, [C.content])]);
      });
      return h("tr", {
        key: v,
        role: "row"
      }, [g]);
    }), p = a && a("year");
    return h("div", {
      class: f
    }, [h("div", null, [h("div", {
      class: "".concat(f, "-header")
    }, [h("a", {
      class: "".concat(f, "-prev-decade-btn"),
      role: "button",
      onClick: this.previousDecade,
      title: r.previousDecade
    }, null), h("a", {
      class: "".concat(f, "-decade-select"),
      role: "button",
      onClick: o,
      title: r.decadeSelect
    }, [h("span", {
      class: "".concat(f, "-decade-select-content")
    }, [u, Me("-"), c]), h("span", {
      class: "".concat(f, "-decade-select-arrow")
    }, [Me("x")])]), h("a", {
      class: "".concat(f, "-next-decade-btn"),
      role: "button",
      onClick: this.nextDecade,
      title: r.nextDecade
    }, null)]), h("div", {
      class: "".concat(f, "-body")
    }, [h("table", {
      class: "".concat(f, "-table"),
      cellspacing: "0",
      role: "grid"
    }, [h("tbody", {
      class: "".concat(f, "-tbody")
    }, [d])])]), p && h("div", {
      class: "".concat(f, "-footer")
    }, [p])])]);
  }
};
var IM = 4, MM = 3;
function AM() {
}
function qp(t) {
  var e = this.sValue.clone();
  e.add(t, "years"), this.setState({
    sValue: e
  });
}
function NM(t, e) {
  var n = this.sValue.clone();
  n.year(t), n.month(this.sValue.month()), this.__emit("select", n), e.preventDefault();
}
const VM = {
  name: "DecadePanel",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    locale: i.object,
    value: i.object,
    defaultValue: i.object,
    rootPrefixCls: i.string,
    renderFooter: i.func
  },
  data: function() {
    return this.nextCentury = qp.bind(this, 100), this.previousCentury = qp.bind(this, -100), {
      sValue: this.value || this.defaultValue
    };
  },
  watch: {
    value: function(e) {
      this.sValue = e;
    }
  },
  render: function() {
    for (var e = this, n = this.sValue, r = this.$props, a = r.locale, o = r.renderFooter, s = n.year(), l = parseInt(s / 100, 10) * 100, u = l - 10, c = l + 99, f = [], d = 0, p = "".concat(this.rootPrefixCls, "-decade-panel"), m = 0; m < IM; m++) {
      f[m] = [];
      for (var v = 0; v < MM; v++) {
        var g = u + d * 10, C = u + d * 10 + 9;
        f[m][v] = {
          startDecade: g,
          endDecade: C
        }, d++;
      }
    }
    var y = o && o("decade"), O = f.map(function(w, _) {
      var x = w.map(function(P) {
        var T, M = P.startDecade, $ = P.endDecade, k = M < l, V = $ > c, I = (T = {}, S(T, "".concat(p, "-cell"), 1), S(T, "".concat(p, "-selected-cell"), M <= s && s <= $), S(T, "".concat(p, "-last-century-cell"), k), S(T, "".concat(p, "-next-century-cell"), V), T), F = "".concat(M, "-").concat($), B = AM;
        return k ? B = e.previousCentury : V ? B = e.nextCentury : B = NM.bind(e, M), h("td", {
          key: M,
          onClick: B,
          role: "gridcell",
          class: I
        }, [h("a", {
          class: "".concat(p, "-decade")
        }, [F])]);
      });
      return h("tr", {
        key: _,
        role: "row"
      }, [x]);
    });
    return h("div", {
      class: p
    }, [h("div", {
      class: "".concat(p, "-header")
    }, [h("a", {
      class: "".concat(p, "-prev-century-btn"),
      role: "button",
      onClick: this.previousCentury,
      title: a.previousCentury
    }, null), h("div", {
      class: "".concat(p, "-century")
    }, [l, Me("-"), c]), h("a", {
      class: "".concat(p, "-next-century-btn"),
      role: "button",
      onClick: this.nextCentury,
      title: a.nextCentury
    }, null)]), h("div", {
      class: "".concat(p, "-body")
    }, [h("table", {
      class: "".concat(p, "-table"),
      cellspacing: "0",
      role: "grid"
    }, [h("tbody", {
      class: "".concat(p, "-tbody")
    }, [O])])]), y && h("div", {
      class: "".concat(p, "-footer")
    }, [y])]);
  }
};
function Xp() {
}
function Zp(t) {
  var e = this.value.clone();
  e.add(t, "months"), this.__emit("valueChange", e);
}
function Qp(t) {
  var e = this.value.clone();
  e.add(t, "years"), this.__emit("valueChange", e);
}
function wi(t, e) {
  return t ? e : null;
}
var RM = {
  name: "CalendarHeader",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    prefixCls: i.string,
    value: i.object,
    // onValueChange: PropTypes.func,
    showTimePicker: i.looseBool,
    // onPanelChange: PropTypes.func,
    locale: i.object,
    enablePrev: i.any.def(1),
    enableNext: i.any.def(1),
    disabledMonth: i.func,
    mode: i.any,
    monthCellRender: i.func,
    monthCellContentRender: i.func,
    renderFooter: i.func
  },
  data: function() {
    return this.nextMonth = Zp.bind(this, 1), this.previousMonth = Zp.bind(this, -1), this.nextYear = Qp.bind(this, 1), this.previousYear = Qp.bind(this, -1), {
      yearPanelReferer: null
    };
  },
  methods: {
    onMonthSelect: function(e) {
      this.__emit("panelChange", e, "date"), this.$attrs.onMonthSelect ? this.__emit("monthSelect", e) : this.__emit("valueChange", e);
    },
    onYearSelect: function(e) {
      var n = this.yearPanelReferer;
      this.setState({
        yearPanelReferer: null
      }), this.__emit("panelChange", e, n), this.__emit("valueChange", e);
    },
    onDecadeSelect: function(e) {
      this.__emit("panelChange", e, "year"), this.__emit("valueChange", e);
    },
    changeYear: function(e) {
      e > 0 ? this.nextYear() : this.previousYear();
    },
    monthYearElement: function(e) {
      var n = this, r = this.$props, a = r.prefixCls, o = r.locale, s = r.value, l = s.localeData(), u = o.monthBeforeYear, c = "".concat(a, "-").concat(u ? "my-select" : "ym-select"), f = e ? " ".concat(a, "-time-status") : "", d = h("a", {
        class: "".concat(a, "-year-select").concat(f),
        role: "button",
        onClick: e ? Xp : function() {
          return n.showYearPanel("date");
        },
        title: e ? null : o.yearSelect
      }, [s.format(o.yearFormat)]), p = h("a", {
        class: "".concat(a, "-month-select").concat(f),
        role: "button",
        onClick: e ? Xp : this.showMonthPanel,
        title: e ? null : o.monthSelect
      }, [o.monthFormat ? s.format(o.monthFormat) : l.monthsShort(s)]), m;
      e && (m = h("a", {
        class: "".concat(a, "-day-select").concat(f),
        role: "button"
      }, [s.format(o.dayFormat)]));
      var v = [];
      return u ? v = [p, m, d] : v = [d, p, m], h("span", {
        class: c
      }, [v]);
    },
    showMonthPanel: function() {
      this.__emit("panelChange", null, "month");
    },
    showYearPanel: function(e) {
      this.setState({
        yearPanelReferer: e
      }), this.__emit("panelChange", null, "year");
    },
    showDecadePanel: function() {
      this.__emit("panelChange", null, "decade");
    }
  },
  render: function() {
    var e = this, n = me(this), r = n.prefixCls, a = n.locale, o = n.mode, s = n.value, l = n.showTimePicker, u = n.enableNext, c = n.enablePrev, f = n.disabledMonth, d = n.renderFooter, p = null;
    return o === "month" && (p = h(TM, {
      locale: a,
      value: s,
      rootPrefixCls: r,
      onSelect: this.onMonthSelect,
      onYearPanelShow: function() {
        return e.showYearPanel("month");
      },
      disabledDate: f,
      cellRender: n.monthCellRender,
      contentRender: n.monthCellContentRender,
      renderFooter: d,
      changeYear: this.changeYear
    }, null)), o === "year" && (p = h($M, {
      locale: a,
      value: s,
      rootPrefixCls: r,
      onSelect: this.onYearSelect,
      onDecadePanelShow: this.showDecadePanel,
      renderFooter: d
    }, null)), o === "decade" && (p = h(VM, {
      locale: a,
      value: s,
      rootPrefixCls: r,
      onSelect: this.onDecadeSelect,
      renderFooter: d
    }, null)), h("div", {
      class: "".concat(r, "-header")
    }, [h("div", {
      style: {
        position: "relative"
      }
    }, [wi(c && !l, h("a", {
      class: "".concat(r, "-prev-year-btn"),
      role: "button",
      onClick: this.previousYear,
      title: a.previousYear
    }, null)), wi(c && !l, h("a", {
      class: "".concat(r, "-prev-month-btn"),
      role: "button",
      onClick: this.previousMonth,
      title: a.previousMonth
    }, null)), this.monthYearElement(l), wi(u && !l, h("a", {
      class: "".concat(r, "-next-month-btn"),
      onClick: this.nextMonth,
      title: a.nextMonth
    }, null)), wi(u && !l, h("a", {
      class: "".concat(r, "-next-year-btn"),
      onClick: this.nextYear,
      title: a.nextYear
    }, null))]), p]);
  }
};
const Vf = RM;
function FM() {
}
var ny = function(e, n) {
  var r = n.attrs, a = r.prefixCls, o = r.locale, s = r.value, l = r.timePicker, u = r.disabled, c = r.disabledDate, f = r.onToday, d = r.text, p = (!d && l ? o.now : d) || o.today, m = c && !ms(Sr(s), c), v = m || u, g = v ? "".concat(a, "-today-btn-disabled") : "";
  return h("a", {
    class: "".concat(a, "-today-btn ").concat(g),
    role: "button",
    onClick: v ? FM : f,
    title: S$(s)
  }, [p]);
};
ny.inheritAttrs = !1;
const ry = ny;
function BM() {
}
var ay = function(e, n) {
  var r = n.attrs, a = r.prefixCls, o = r.locale, s = r.okDisabled, l = r.onOk, u = "".concat(a, "-ok-btn");
  return s && (u += " ".concat(a, "-ok-btn-disabled")), h("a", {
    class: u,
    role: "button",
    onClick: s ? BM : l
  }, [o.ok]);
};
ay.inheritAttrs = !1;
const oy = ay;
function ql() {
}
var iy = function(e, n) {
  var r, a = n.attrs, o = a.prefixCls, s = a.locale, l = a.showTimePicker, u = a.timePickerDisabled, c = a.onCloseTimePicker, f = c === void 0 ? ql : c, d = a.onOpenTimePicker, p = d === void 0 ? ql : d, m = (r = {}, S(r, "".concat(o, "-time-picker-btn"), !0), S(r, "".concat(o, "-time-picker-btn-disabled"), u), r), v = ql;
  return u || (v = l ? f : p), h("a", {
    class: m,
    role: "button",
    onClick: v
  }, [l ? s.dateSelect : s.timeSelect]);
};
iy.inheritAttrs = !1;
const sy = iy;
var jM = {
  name: "CalendarFooter",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    prefixCls: i.string,
    showDateInput: i.looseBool,
    disabledTime: i.any,
    timePicker: i.any,
    selectedValue: i.any,
    showOk: i.looseBool,
    // onSelect: PropTypes.func,
    value: i.object,
    renderFooter: i.func,
    defaultValue: i.object,
    locale: i.object,
    showToday: i.looseBool,
    disabledDate: i.func,
    showTimePicker: i.looseBool,
    okDisabled: i.looseBool,
    mode: i.string
  },
  methods: {
    onSelect: function(e) {
      this.__emit("select", e);
    },
    getRootDOMNode: function() {
      return Yt(this);
    }
  },
  render: function() {
    var e = me(this), n = e.value, r = e.prefixCls, a = e.showOk, o = e.timePicker, s = e.renderFooter, l = e.showToday, u = e.mode, c = null, f = s && s(u);
    if (l || o || f) {
      var d, p = b(b(b({}, e), this.$attrs), {
        value: n
      }), m = null;
      l && (m = h(ry, H({
        key: "todayButton"
      }, p), null)), delete p.value;
      var v = null;
      (a === !0 || a !== !1 && o) && (v = h(oy, H({
        key: "okButton"
      }, p), null));
      var g = null;
      o && (g = h(sy, H({
        key: "timePickerButton"
      }, p), null));
      var C;
      (m || g || v || f) && (C = h("span", {
        class: "".concat(r, "-footer-btn")
      }, [f, m, g, v]));
      var y = (d = {}, S(d, "".concat(r, "-footer"), !0), S(d, "".concat(r, "-footer-show-ok"), !!v), d);
      c = h("div", {
        class: y
      }, [C]);
    }
    return c;
  }
};
const ly = jM;
var Xl, Zl, zn, LM = {
  name: "DateInput",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    prefixCls: i.string,
    timePicker: i.object,
    value: i.object,
    disabledTime: i.any,
    format: i.oneOfType([i.string, i.arrayOf(i.string), i.func]),
    locale: i.object,
    disabledDate: i.func,
    // onChange: PropTypes.func,
    // onClear: PropTypes.func,
    placeholder: i.string,
    // onSelect: PropTypes.func,
    selectedValue: i.object,
    clearIcon: i.any,
    inputMode: i.string,
    inputReadOnly: i.looseBool,
    disabled: i.looseBool,
    showClear: i.looseBool
  },
  data: function() {
    var e = this.selectedValue;
    return {
      str: Wl(e, this.format),
      invalid: !1,
      hasFocus: !1
    };
  },
  watch: {
    selectedValue: function() {
      this.setState();
    },
    format: function() {
      this.setState();
    }
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      zn && e.$data.hasFocus && !e.invalid && !(Xl === 0 && Zl === 0) && zn.setSelectionRange(Xl, Zl);
    });
  },
  getInstance: function() {
    return zn;
  },
  methods: {
    getDerivedStateFromProps: function(e, n) {
      var r = {};
      zn && (Xl = zn.selectionStart, Zl = zn.selectionEnd);
      var a = e.selectedValue;
      return n.hasFocus || (r = {
        str: Wl(a, this.format),
        invalid: !1
      }), r;
    },
    onClear: function() {
      this.setState({
        str: ""
      }), this.__emit("clear", null);
    },
    onInputChange: function(e) {
      var n = e.target, r = n.value, a = n.composing, o = this.str, s = o === void 0 ? "" : o;
      if (!(e.isComposing || a || s === r)) {
        var l = this.$props, u = l.disabledDate, c = l.format, f = l.selectedValue;
        if (!r) {
          this.__emit("change", null), this.setState({
            invalid: !1,
            str: r
          });
          return;
        }
        var d = R(r, c, !0);
        if (!d.isValid()) {
          this.setState({
            invalid: !0,
            str: r
          });
          return;
        }
        var p = this.value.clone();
        if (p.year(d.year()).month(d.month()).date(d.date()).hour(d.hour()).minute(d.minute()).second(d.second()), !p || u && u(p)) {
          this.setState({
            invalid: !0,
            str: r
          });
          return;
        }
        (f !== p || f && p && !f.isSame(p)) && (this.setState({
          invalid: !1,
          str: r
        }), this.__emit("change", p));
      }
    },
    onFocus: function() {
      this.setState({
        hasFocus: !0
      });
    },
    onBlur: function() {
      this.setState(function(e, n) {
        return {
          hasFocus: !1,
          str: Wl(n.value, n.format)
        };
      });
    },
    onKeyDown: function(e) {
      var n = e.keyCode, r = this.$props, a = r.value, o = r.disabledDate;
      if (n === oe.ENTER) {
        var s = !o || !o(a);
        s && this.__emit("select", a.clone()), e.preventDefault();
      }
    },
    getRootDOMNode: function() {
      return Yt(this);
    },
    focus: function() {
      zn && zn.focus();
    },
    saveDateInput: function(e) {
      zn = e;
    }
  },
  render: function() {
    var e = this.invalid, n = this.str, r = this.locale, a = this.prefixCls, o = this.placeholder, s = this.disabled, l = this.showClear, u = this.inputMode, c = this.inputReadOnly, f = ce(this, "clearIcon"), d = e ? "".concat(a, "-input-invalid") : "";
    return h("div", {
      class: "".concat(a, "-input-wrap")
    }, [h("div", {
      class: "".concat(a, "-date-input-wrap")
    }, [In(h("input", {
      ref: this.saveDateInput,
      class: "".concat(a, "-input ").concat(d),
      value: n,
      disabled: s,
      placeholder: o,
      onInput: this.onInputChange,
      onChange: this.onInputChange,
      onKeydown: this.onKeyDown,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      inputMode: u,
      readonly: c
    }, null), [[Bo]])]), l ? h("a", {
      role: "button",
      title: r.clear,
      onClick: this.onClear
    }, [f || h("span", {
      class: "".concat(a, "-clear-btn")
    }, null)]) : null]);
  }
};
const Ui = LM;
function uy(t) {
  return t.clone().startOf("month");
}
function cy(t) {
  return t.clone().endOf("month");
}
function Yn(t, e, n) {
  return t.clone().add(e, n);
}
function HM() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
  return t.some(function(r) {
    return r.isSame(e, n);
  });
}
var Oi = function(e) {
  return R.isMoment(e) && e.isValid() ? e : !1;
}, zM = K({
  name: "Calendar",
  mixins: [Ce, kf, Hb],
  inheritAttrs: !1,
  props: {
    locale: i.object.def(Bs),
    format: i.oneOfType([i.string, i.arrayOf(i.string), i.func]),
    visible: i.looseBool.def(!0),
    prefixCls: i.string.def("rc-calendar"),
    // prefixCls: PropTypes.string,
    defaultValue: i.object,
    value: i.object,
    selectedValue: i.object,
    defaultSelectedValue: i.object,
    mode: i.oneOf(["time", "date", "month", "year", "decade"]),
    // locale: PropTypes.object,
    showDateInput: i.looseBool.def(!0),
    showWeekNumber: i.looseBool,
    showToday: i.looseBool.def(!0),
    showOk: i.looseBool,
    // onSelect: PropTypes.func,
    // onOk: PropTypes.func,
    // onKeyDown: PropTypes.func,
    timePicker: i.any,
    dateInputPlaceholder: i.any,
    // onClear: PropTypes.func,
    // onChange: PropTypes.func,
    // onPanelChange: PropTypes.func,
    disabledDate: i.func,
    disabledTime: i.any,
    dateRender: i.func,
    renderFooter: i.func.def(function() {
      return null;
    }),
    renderSidebar: i.func.def(function() {
      return null;
    }),
    clearIcon: i.any,
    focusablePanel: i.looseBool.def(!0),
    inputMode: i.string,
    inputReadOnly: i.looseBool,
    monthCellRender: i.func,
    monthCellContentRender: i.func
  },
  data: function() {
    var e = this.$props;
    return {
      sMode: this.mode || "date",
      sValue: Oi(e.value) || Oi(e.defaultValue) || R(),
      sSelectedValue: e.selectedValue || e.defaultSelectedValue
    };
  },
  watch: {
    mode: function(e) {
      this.setState({
        sMode: e
      });
    },
    value: function(e) {
      this.setState({
        sValue: Oi(e) || Oi(this.defaultValue) || zu(this.sValue)
      });
    },
    selectedValue: function(e) {
      this.setState({
        sSelectedValue: e
      });
    }
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.saveFocusElement(Ui.getInstance());
    });
  },
  methods: {
    onPanelChange: function(e, n) {
      var r = this.sValue;
      Se(this, "mode") || this.setState({
        sMode: n
      }), this.__emit("panelChange", e || r, n);
    },
    onKeyDown: function(e) {
      if (e.target.nodeName.toLowerCase() !== "input") {
        var n = e.keyCode, r = e.ctrlKey || e.metaKey, a = this.disabledDate, o = this.sValue;
        switch (n) {
          case oe.DOWN:
            return this.goTime(1, "weeks"), e.preventDefault(), 1;
          case oe.UP:
            return this.goTime(-1, "weeks"), e.preventDefault(), 1;
          case oe.LEFT:
            return r ? this.goTime(-1, "years") : this.goTime(-1, "days"), e.preventDefault(), 1;
          case oe.RIGHT:
            return r ? this.goTime(1, "years") : this.goTime(1, "days"), e.preventDefault(), 1;
          case oe.HOME:
            return this.setValue(uy(o)), e.preventDefault(), 1;
          case oe.END:
            return this.setValue(cy(o)), e.preventDefault(), 1;
          case oe.PAGE_DOWN:
            return this.goTime(1, "month"), e.preventDefault(), 1;
          case oe.PAGE_UP:
            return this.goTime(-1, "month"), e.preventDefault(), 1;
          case oe.ENTER:
            return (!a || !a(o)) && this.onSelect(o, {
              source: "keyboard"
            }), e.preventDefault(), 1;
          default:
            return this.__emit("keydown", e), 1;
        }
      }
    },
    onClear: function() {
      this.onSelect(null), this.__emit("clear");
    },
    onOk: function() {
      var e = this.sSelectedValue;
      this.isAllowedDate(e) && this.__emit("ok", e);
    },
    onDateInputChange: function(e) {
      this.onSelect(e, {
        source: "dateInput"
      });
    },
    onDateInputSelect: function(e) {
      this.onSelect(e, {
        source: "dateInputSelect"
      });
    },
    onDateTableSelect: function(e) {
      var n = this.timePicker, r = this.sSelectedValue;
      if (!r && n) {
        var a = me(n), o = a.defaultValue;
        o && Zt(o, e);
      }
      this.onSelect(e);
    },
    onToday: function() {
      var e = this.sValue, n = Sr(e);
      this.onSelect(n, {
        source: "todayButton"
      });
    },
    onBlur: function(e) {
      var n = this;
      setTimeout(function() {
        var r = Ui.getInstance(), a = n.rootInstance;
        !a || a.contains(document.activeElement) || r && r.contains(document.activeElement) || n.__emit("blur", e);
      }, 0);
    },
    getRootDOMNode: function() {
      return Yt(this);
    },
    openTimePicker: function() {
      this.onPanelChange(null, "time");
    },
    closeTimePicker: function() {
      this.onPanelChange(null, "date");
    },
    goTime: function(e, n) {
      this.setValue(Yn(this.sValue, e, n));
    }
  },
  render: function() {
    var e = this.locale, n = this.prefixCls, r = this.disabledDate, a = this.dateInputPlaceholder, o = this.timePicker, s = this.disabledTime, l = this.showDateInput, u = this.sValue, c = this.sSelectedValue, f = this.sMode, d = this.renderFooter, p = this.inputMode, m = this.inputReadOnly, v = this.monthCellRender, g = this.monthCellContentRender, C = this.$props, y = ce(this, "clearIcon"), O = f === "time", w = O && s && o ? Ef(c, s) : null, _ = null;
    if (o && O) {
      var x = me(o), P = b(b(b({
        showHour: !0,
        showSecond: !0,
        showMinute: !0
      }, x), w), {
        value: c,
        disabledTime: s,
        onChange: this.onDateInputChange
      });
      x.defaultValue !== void 0 && (P.defaultOpenValue = x.defaultValue), _ = je(o, P);
    }
    var T = l ? h(Ui, {
      format: this.getFormat(),
      key: "date-input",
      value: u,
      locale: e,
      placeholder: a,
      showClear: !0,
      disabledTime: s,
      disabledDate: r,
      onClear: this.onClear,
      prefixCls: n,
      selectedValue: c,
      onChange: this.onDateInputChange,
      clearIcon: y,
      onSelect: this.onDateInputSelect,
      inputMode: p,
      inputReadOnly: m
    }, null) : null, M = [];
    return C.renderSidebar && M.push(C.renderSidebar()), M.push(h("div", {
      class: "".concat(n, "-panel"),
      key: "panel"
    }, [T, h("div", {
      tabindex: C.focusablePanel ? 0 : void 0,
      class: "".concat(n, "-date-panel")
    }, [h(Vf, {
      locale: e,
      mode: f,
      value: u,
      onValueChange: this.setValue,
      onPanelChange: this.onPanelChange,
      renderFooter: d,
      showTimePicker: O,
      prefixCls: n,
      monthCellRender: v,
      monthCellContentRender: g
    }, null), o && O ? h("div", {
      class: "".concat(n, "-time-picker")
    }, [h("div", {
      class: "".concat(n, "-time-picker-panel")
    }, [_])]) : null, h("div", {
      class: "".concat(n, "-body")
    }, [h(Lb, {
      locale: e,
      value: u,
      selectedValue: c,
      prefixCls: n,
      dateRender: C.dateRender,
      onSelect: this.onDateTableSelect,
      disabledDate: r,
      showWeekNumber: C.showWeekNumber
    }, null)]), h(ly, {
      showOk: C.showOk,
      mode: f,
      renderFooter: C.renderFooter,
      locale: e,
      prefixCls: n,
      showToday: C.showToday,
      disabledTime: s,
      showTimePicker: O,
      showDateInput: C.showDateInput,
      timePicker: o,
      selectedValue: c,
      timePickerDisabled: !c,
      value: u,
      disabledDate: r,
      okDisabled: C.showOk !== !1 && (!c || !this.isAllowedDate(c)),
      onOk: this.onOk,
      onSelect: this.onSelect,
      onToday: this.onToday,
      onOpenTimePicker: this.openTimePicker,
      onCloseTimePicker: this.closeTimePicker
    }, null)])])), this.renderRoot({
      children: M,
      class: C.showWeekNumber ? "".concat(n, "-week-number") : ""
    });
  }
});
const fy = zM;
var YM = K({
  name: "MonthCalendar",
  mixins: [Ce, kf, Hb],
  inheritAttrs: !1,
  props: {
    locale: i.object.def(Bs),
    format: i.string,
    visible: i.looseBool.def(!0),
    prefixCls: i.string.def("rc-calendar"),
    monthCellRender: i.func,
    value: i.object,
    defaultValue: i.object,
    selectedValue: i.object,
    defaultSelectedValue: i.object,
    disabledDate: i.func,
    monthCellContentRender: i.func,
    renderFooter: i.func.def(function() {
      return null;
    }),
    renderSidebar: i.func.def(function() {
      return null;
    })
  },
  data: function() {
    var e = this.$props;
    return {
      mode: "month",
      sValue: e.value || e.defaultValue || R(),
      sSelectedValue: e.selectedValue || e.defaultSelectedValue
    };
  },
  methods: {
    onKeyDown: function(e) {
      var n = e.keyCode, r = e.ctrlKey || e.metaKey, a = this.sValue, o = this.disabledDate, s = a;
      switch (n) {
        case oe.DOWN:
          s = a.clone(), s.add(3, "months");
          break;
        case oe.UP:
          s = a.clone(), s.add(-3, "months");
          break;
        case oe.LEFT:
          s = a.clone(), r ? s.add(-1, "years") : s.add(-1, "months");
          break;
        case oe.RIGHT:
          s = a.clone(), r ? s.add(1, "years") : s.add(1, "months");
          break;
        case oe.ENTER:
          return (!o || !o(a)) && this.onSelect(a), e.preventDefault(), 1;
        default:
          return;
      }
      if (s !== a)
        return this.setValue(s), e.preventDefault(), 1;
    },
    handlePanelChange: function(e, n) {
      n !== "date" && this.setState({
        mode: n
      });
    }
  },
  render: function() {
    var e = this.mode, n = this.sValue, r = this.$props, a = this.$slots, o = r.prefixCls, s = r.locale, l = r.disabledDate, u = this.monthCellRender || a.monthCellRender, c = this.monthCellContentRender || a.monthCellContentRender, f = this.renderFooter || a.renderFooter, d = h("div", {
      class: "".concat(o, "-month-calendar-content")
    }, [h("div", {
      class: "".concat(o, "-month-header-wrap")
    }, [h(Vf, {
      prefixCls: o,
      mode: e,
      value: n,
      locale: s,
      disabledMonth: l,
      monthCellRender: u,
      monthCellContentRender: c,
      onMonthSelect: this.onSelect,
      onValueChange: this.setValue,
      onPanelChange: this.handlePanelChange
    }, null)]), h(ly, {
      prefixCls: o,
      renderFooter: f
    }, null)]);
    return this.renderRoot({
      class: "".concat(r.prefixCls, "-month-calendar"),
      children: d
    });
  }
});
const dy = YM;
function lo() {
  var t = [].slice.call(arguments, 0);
  return t.length === 1 ? t[0] : function() {
    for (var n = 0; n < t.length; n++)
      t[n] && t[n].apply && t[n].apply(this, arguments);
  };
}
var Si = {
  adjustX: 1,
  adjustY: 1
}, _i = [0, 0], WM = {
  bottomLeft: {
    points: ["tl", "tl"],
    overflow: Si,
    offset: [0, -3],
    targetOffset: _i
  },
  bottomRight: {
    points: ["tr", "tr"],
    overflow: Si,
    offset: [0, -3],
    targetOffset: _i
  },
  topRight: {
    points: ["br", "br"],
    overflow: Si,
    offset: [0, 3],
    targetOffset: _i
  },
  topLeft: {
    points: ["bl", "bl"],
    overflow: Si,
    offset: [0, 3],
    targetOffset: _i
  }
};
const UM = WM;
var Jp = {
  validator: function(e) {
    return Array.isArray(e) ? e.length === 0 || e.findIndex(function(n) {
      return !gs(n) && !R.isMoment(n);
    }) === -1 : gs(e) || R.isMoment(e);
  }
};
function GM(t, e) {
  this[t] = e;
}
var KM = K({
  name: "Picker",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    animation: i.oneOfType([i.func, i.string]),
    disabled: i.looseBool,
    transitionName: i.string,
    format: i.oneOfType([i.string, i.array, i.func]),
    // onChange: PropTypes.func,
    // onOpenChange: PropTypes.func,
    getCalendarContainer: i.func,
    calendar: i.any,
    open: i.looseBool,
    defaultOpen: i.looseBool.def(!1),
    prefixCls: i.string.def("rc-calendar-picker"),
    placement: i.any.def("bottomLeft"),
    value: Jp,
    defaultValue: Jp,
    align: i.object.def(function() {
      return {};
    }),
    dropdownClassName: i.string,
    dateRender: i.func,
    children: i.func
  },
  data: function() {
    var e = this.$props;
    this.calendarElement = null, this.saveCalendarRef = GM.bind(this, "calendarInstance");
    var n;
    Se(this, "open") ? n = e.open : n = e.defaultOpen;
    var r = e.value || e.defaultValue;
    return {
      sOpen: n,
      sValue: r
    };
  },
  watch: {
    value: function(e) {
      this.setState({
        sValue: e
      });
    },
    open: function(e) {
      this.setState({
        sOpen: e
      });
    }
  },
  mounted: function() {
    this.preSOpen = this.sOpen;
  },
  updated: function() {
    !this.preSOpen && this.sOpen && (this.focusTimeout = setTimeout(this.focusCalendar, 100)), this.preSOpen = this.sOpen;
  },
  beforeUnmount: function() {
    clearTimeout(this.focusTimeout);
  },
  methods: {
    onCalendarKeyDown: function(e) {
      e.keyCode === oe.ESC && (e.stopPropagation(), this.closeCalendar(this.focus));
    },
    onCalendarSelect: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.$props;
      Se(this, "value") || this.setState({
        sValue: e
      });
      var a = me(r.calendar);
      (n.source === "keyboard" || n.source === "dateInputSelect" || !a.timePicker && n.source !== "dateInput" || n.source === "todayButton") && this.closeCalendar(this.focus), this.__emit("change", e);
    },
    onKeyDown: function(e) {
      !this.sOpen && (e.keyCode === oe.DOWN || e.keyCode === oe.ENTER) && (this.openCalendar(), e.preventDefault());
    },
    onCalendarOk: function() {
      this.closeCalendar(this.focus);
    },
    onCalendarClear: function() {
      this.closeCalendar(this.focus);
    },
    onCalendarBlur: function() {
      this.setOpen(!1);
    },
    onVisibleChange: function(e) {
      this.setOpen(e);
    },
    getCalendarElement: function() {
      var e = this.$props, n = me(e.calendar), r = rs(e.calendar), a = this.sValue, o = a, s = {
        ref: this.saveCalendarRef,
        defaultValue: o || n.defaultValue,
        selectedValue: a,
        onKeydown: this.onCalendarKeyDown,
        onOk: lo(r.onOk, this.onCalendarOk),
        onSelect: lo(r.onSelect, this.onCalendarSelect),
        onClear: lo(r.onClear, this.onCalendarClear),
        onBlur: lo(r.onBlur, this.onCalendarBlur)
      };
      return je(e.calendar, s);
    },
    setOpen: function(e, n) {
      this.sOpen !== e && (Se(this, "open") || this.setState({
        sOpen: e
      }, n), this.__emit("openChange", e));
    },
    openCalendar: function(e) {
      this.setOpen(!0, e);
    },
    closeCalendar: function(e) {
      this.setOpen(!1, e);
    },
    focus: function() {
      this.sOpen || Yt(this).focus();
    },
    focusCalendar: function() {
      this.sOpen && this.calendarInstance && this.calendarInstance.focus();
    }
  },
  render: function() {
    var e = this, n = me(this), r = n.prefixCls, a = n.placement, o = n.getCalendarContainer, s = n.align, l = n.animation, u = n.disabled, c = n.dropdownClassName, f = n.transitionName, d = this.sValue, p = this.sOpen, m = {
      value: d,
      open: p
    }, v = this.$slots.default(m);
    return (this.sOpen || !this.calendarElement) && (this.calendarElement = this.getCalendarElement()), h(nl, {
      popupAlign: s,
      builtinPlacements: UM,
      popupPlacement: a,
      action: u && !p ? [] : ["click"],
      destroyPopupOnHide: !0,
      getPopupContainer: o,
      popupStyle: this.$attrs.style || {},
      popupAnimation: l,
      popupTransitionName: f,
      popupVisible: p,
      onPopupVisibleChange: this.onVisibleChange,
      prefixCls: r,
      popupClassName: c,
      popup: this.calendarElement
    }, {
      default: function() {
        return [je(v, {
          onKeydown: e.onKeyDown
        })];
      }
    });
  }
});
const Rf = KM;
var qM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" };
const XM = qM;
function ev(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ZM(t, a, n[a]);
    });
  }
  return t;
}
function ZM(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ff = function(e, n) {
  var r = ev({}, e, n.attrs);
  return h(Pe, ev({}, r, {
    icon: XM
  }), null);
};
Ff.displayName = "CalendarOutlined";
Ff.inheritAttrs = !1;
const Bf = Ff;
function ca(t, e) {
  return t ? (Array.isArray(e) && (e = e[0]), typeof e == "function" ? e(t) : t.format(e)) : "";
}
function hy(t, e, n) {
  return K({
    name: n,
    mixins: [Ce],
    inheritAttrs: !1,
    props: b(b({}, e), {
      allowClear: i.looseBool.def(!0),
      showToday: i.looseBool.def(!0)
    }),
    setup: function() {
      return {
        configProvider: ye("configProvider", He),
        input: void 0,
        sPrefixCls: void 0
      };
    },
    data: function() {
      var a = this.value || this.defaultValue;
      return {
        sValue: a,
        showDate: a,
        sOpen: !!this.open
      };
    },
    watch: {
      open: function(a) {
        var o = me(this), s = {};
        s.sOpen = a, "value" in o && !a && o.value !== this.showDate && (s.showDate = o.value), this.setState(s);
      },
      value: function(a) {
        var o = {};
        o.sValue = a, a !== this.sValue && (o.showDate = a), this.setState(o);
      },
      sOpen: function(a, o) {
        var s = this;
        Le(function() {
          !Se(s, "open") && o && !a && s.focus();
        });
      }
    },
    methods: {
      saveInput: function(a) {
        this.input = a;
      },
      clearSelection: function(a) {
        a.preventDefault(), a.stopPropagation(), this.handleChange(null);
      },
      handleChange: function(a) {
        Se(this, "value") || this.setState({
          sValue: a,
          showDate: a
        }), this.$emit("change", a, ca(a, this.format));
      },
      handleCalendarChange: function(a) {
        this.setState({
          showDate: a
        });
      },
      handleOpenChange: function(a) {
        var o = me(this);
        "open" in o || this.setState({
          sOpen: a
        }), this.$emit("openChange", a);
      },
      focus: function() {
        var a;
        (a = this.input) === null || a === void 0 || a.focus();
      },
      blur: function() {
        var a;
        (a = this.input) === null || a === void 0 || a.blur();
      },
      renderFooter: function() {
        var a = this.$slots, o = this.sPrefixCls, s = this.renderExtraFooter || a.renderExtraFooter;
        return s ? h("div", {
          class: "".concat(o, "-footer-extra")
        }, [typeof s == "function" ? s.apply(void 0, arguments) : s]) : null;
      },
      onMouseEnter: function(a) {
        this.$emit("mouseenter", a);
      },
      onMouseLeave: function(a) {
        this.$emit("mouseleave", a);
      }
    },
    render: function() {
      var a, o = this, s = this.$slots, l = this.$data, u = l.sValue, c = l.showDate, f = l.sOpen, d = ce(this, "suffixIcon");
      d = Array.isArray(d) ? d[0] : d;
      var p = vb(b(b({}, me(this)), this.$attrs), ["onChange"]), m = p.prefixCls, v = p.locale, g = p.localeCode, C = p.inputReadOnly, y = this.configProvider.getPrefixCls, O = y("calendar", m);
      this.sPrefixCls = O;
      var w = p.dateRender || s.dateRender, _ = p.monthCellContentRender || s.monthCellContentRender, x = "placeholder" in p ? p.placeholder : v.lang.placeholder, P = p.showTime ? p.disabledTime : null, T = Z((a = {}, S(a, "".concat(O, "-time"), p.showTime), S(a, "".concat(O, "-month"), dy === t), a));
      u && g && u.locale(g);
      var M = {}, $ = {}, k = {};
      p.showTime ? ($.onSelect = this.handleChange, k.minWidth = "195px") : M.onChange = this.handleChange, "mode" in p && ($.mode = p.mode);
      var V = b(b({}, $), {
        disabledDate: p.disabledDate,
        disabledTime: P,
        locale: v.lang,
        timePicker: p.timePicker,
        defaultValue: p.defaultPickerValue || Wt(R)(),
        dateInputPlaceholder: x,
        prefixCls: O,
        dateRender: w,
        format: p.format,
        showToday: p.showToday,
        monthCellContentRender: _,
        renderFooter: this.renderFooter,
        value: c,
        inputReadOnly: C,
        onOk: p.onOk,
        onPanelChange: p.onPanelChange,
        onChange: this.handleCalendarChange,
        class: T
      }), I = h(t, V, s), F = !p.disabled && p.allowClear && u ? h(lr, {
        class: "".concat(O, "-picker-clear"),
        onClick: this.clearSelection
      }, null) : null, B = d && (vn(d) ? je(d, {
        class: "".concat(O, "-picker-icon")
      }) : h("span", {
        class: "".concat(O, "-picker-icon")
      }, [d])) || h(Bf, {
        class: "".concat(O, "-picker-icon")
      }, null), E = function(N) {
        var U = N.value;
        return h("div", null, [h("input", {
          ref: o.saveInput,
          disabled: p.disabled,
          onFocus: p.onFocus,
          onBlur: p.onBlur,
          readonly: !0,
          value: ca(U, o.format),
          placeholder: x,
          class: p.pickerInputClass,
          tabindex: p.tabindex,
          name: o.name
        }, null), F, B]);
      }, j = b(b(b({}, p), M), {
        calendar: I,
        value: u,
        prefixCls: "".concat(O, "-picker-container"),
        open: f,
        onOpenChange: this.handleOpenChange,
        style: p.popupStyle
      });
      return h("span", H(H({
        id: p.id,
        class: Z(p.class, p.pickerClass),
        style: b(b({}, k), p.style)
      }, ic(this.$attrs)), {}, {
        onMouseenter: this.onMouseEnter,
        onMouseleave: this.onMouseLeave
      }), [h(Rf, j, b(b({}, s), {
        default: $1(s.default) ? E : s.default
      }))]);
    }
  });
}
var QM = {
  inheritAttrs: !1,
  name: "Header",
  mixins: [Ce],
  props: {
    format: i.string,
    prefixCls: i.string,
    disabledDate: i.func,
    placeholder: i.string,
    clearText: i.string,
    value: i.object,
    inputReadOnly: i.looseBool.def(!1),
    hourOptions: i.array,
    minuteOptions: i.array,
    secondOptions: i.array,
    disabledHours: i.func,
    disabledMinutes: i.func,
    disabledSeconds: i.func,
    // onChange: PropTypes.func,
    // onClear: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: i.looseBool,
    defaultOpenValue: i.object,
    currentSelectPanel: i.string,
    focusOnOpen: i.looseBool,
    // onKeyDown: PropTypes.func,
    clearIcon: i.any
  },
  data: function() {
    var e = this.value, n = this.format;
    return {
      str: e && e.format(n) || "",
      invalid: !1
    };
  },
  mounted: function() {
    var e = this;
    if (this.focusOnOpen) {
      var n = window.requestAnimationFrame || window.setTimeout;
      n(function() {
        e.refInput.focus(), e.refInput.select();
      });
    }
  },
  watch: {
    value: function(e) {
      var n = this;
      this.$nextTick(function() {
        n.setState({
          str: e && e.format(n.format) || "",
          invalid: !1
        });
      });
    }
  },
  methods: {
    onInputChange: function(e) {
      var n = e.target, r = n.value, a = n.composing, o = this.str, s = o === void 0 ? "" : o;
      if (!(e.isComposing || a || s === r)) {
        this.setState({
          str: r
        });
        var l = this.format, u = this.hourOptions, c = this.minuteOptions, f = this.secondOptions, d = this.disabledHours, p = this.disabledMinutes, m = this.disabledSeconds, v = this.value;
        if (r) {
          var g = this.getProtoValue().clone(), C = R(r, l, !0);
          if (!C.isValid()) {
            this.setState({
              invalid: !0
            });
            return;
          }
          if (g.hour(C.hour()).minute(C.minute()).second(C.second()), u.indexOf(g.hour()) < 0 || c.indexOf(g.minute()) < 0 || f.indexOf(g.second()) < 0) {
            this.setState({
              invalid: !0
            });
            return;
          }
          var y = d(), O = p(g.hour()), w = m(g.hour(), g.minute());
          if (y && y.indexOf(g.hour()) >= 0 || O && O.indexOf(g.minute()) >= 0 || w && w.indexOf(g.second()) >= 0) {
            this.setState({
              invalid: !0
            });
            return;
          }
          if (v) {
            if (v.hour() !== g.hour() || v.minute() !== g.minute() || v.second() !== g.second()) {
              var _ = v.clone();
              _.hour(g.hour()), _.minute(g.minute()), _.second(g.second()), this.__emit("change", _);
            }
          } else
            v !== g && this.__emit("change", g);
        } else
          this.__emit("change", null);
        this.setState({
          invalid: !1
        });
      }
    },
    onKeyDown: function(e) {
      e.keyCode === 27 && this.__emit("esc"), this.__emit("keydown", e);
    },
    getProtoValue: function() {
      return this.value || this.defaultOpenValue;
    },
    getInput: function() {
      var e = this, n = this.prefixCls, r = this.placeholder, a = this.inputReadOnly, o = this.invalid, s = this.str, l = o ? "".concat(n, "-input-invalid") : "";
      return In(h("input", {
        class: "".concat(n, "-input ").concat(l),
        ref: function(c) {
          e.refInput = c;
        },
        onKeydown: this.onKeyDown,
        value: s,
        placeholder: r,
        onInput: this.onInputChange,
        onChange: this.onInputChange,
        readonly: !!a
      }, null), [[Bo]]);
    }
  },
  render: function() {
    var e = this.prefixCls;
    return h("div", {
      class: "".concat(e, "-input-wrap")
    }, [this.getInput()]);
  }
};
const JM = QM;
function e3() {
}
var t3 = function t(e, n, r) {
  if (r <= 0) {
    requestAnimationFrame(function() {
      e.scrollTop = n;
    });
    return;
  }
  var a = n - e.scrollTop, o = a / r * 10;
  requestAnimationFrame(function() {
    e.scrollTop += o, e.scrollTop !== n && t(e, n, r - 10);
  });
}, n3 = {
  name: "Select",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    options: i.array,
    selectedIndex: i.number,
    type: i.string
    // onSelect: PropTypes.func,
    // onMouseEnter: PropTypes.func,
  },
  data: function() {
    return {
      active: !1
    };
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.scrollToSelected(0);
    });
  },
  watch: {
    selectedIndex: function() {
      var e = this;
      this.$nextTick(function() {
        e.scrollToSelected(120);
      });
    }
  },
  methods: {
    onSelect: function(e) {
      var n = this.type;
      this.__emit("select", n, e);
    },
    onEsc: function(e) {
      this.__emit("esc", e);
    },
    getOptions: function() {
      var e = this, n = this.options, r = this.selectedIndex, a = this.prefixCls;
      return n.map(function(o, s) {
        var l, u = Z((l = {}, S(l, "".concat(a, "-select-option-selected"), r === s), S(l, "".concat(a, "-select-option-disabled"), o.disabled), l)), c = o.disabled ? e3 : function() {
          e.onSelect(o.value);
        }, f = function(p) {
          p.keyCode === 13 ? c() : p.keyCode === 27 && e.onEsc();
        };
        return h("li", {
          role: "button",
          onClick: c,
          class: u,
          key: s,
          disabled: o.disabled,
          tabindex: "0",
          onKeydown: f
        }, [o.value]);
      });
    },
    handleMouseEnter: function(e) {
      this.setState({
        active: !0
      }), this.__emit("mouseenter", e);
    },
    handleMouseLeave: function() {
      this.setState({
        active: !1
      });
    },
    scrollToSelected: function(e) {
      var n = Yt(this), r = this.$refs.list;
      if (r) {
        var a = this.selectedIndex;
        a < 0 && (a = 0);
        var o = r.children[a], s = o.offsetTop;
        t3(n, s, e);
      }
    }
  },
  render: function() {
    var e, n = this.prefixCls, r = this.options, a = this.active;
    if (r.length === 0)
      return null;
    var o = (e = {}, S(e, "".concat(n, "-select"), 1), S(e, "".concat(n, "-select-active"), a), e);
    return h("div", {
      class: o,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave
    }, [h("ul", {
      ref: "list"
    }, [this.getOptions()])]);
  }
};
const xi = n3;
var Ql = function(e, n) {
  var r = "".concat(e);
  e < 10 && (r = "0".concat(e));
  var a = !1;
  return n && n.indexOf(e) >= 0 && (a = !0), {
    value: r,
    disabled: a
  };
}, r3 = {
  inheritAttrs: !1,
  mixins: [Ce],
  name: "Combobox",
  props: {
    format: i.string,
    defaultOpenValue: i.object,
    prefixCls: i.string,
    value: i.object,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    showHour: i.looseBool,
    showMinute: i.looseBool,
    showSecond: i.looseBool,
    hourOptions: i.array,
    minuteOptions: i.array,
    secondOptions: i.array,
    disabledHours: i.func,
    disabledMinutes: i.func,
    disabledSeconds: i.func,
    // onCurrentSelectPanelChange: PropTypes.func,
    use12Hours: i.looseBool,
    isAM: i.looseBool
  },
  methods: {
    onItemChange: function(e, n) {
      var r = this.defaultOpenValue, a = this.use12Hours, o = this.value, s = this.isAM, l = (o || r).clone();
      if (e === "hour")
        a ? s ? l.hour(+n % 12) : l.hour(+n % 12 + 12) : l.hour(+n);
      else if (e === "minute")
        l.minute(+n);
      else if (e === "ampm") {
        var u = n.toUpperCase();
        a && (u === "PM" && l.hour() < 12 && l.hour(l.hour() % 12 + 12), u === "AM" && l.hour() >= 12 && l.hour(l.hour() - 12)), this.__emit("amPmChange", u);
      } else
        l.second(+n);
      this.__emit("change", l);
    },
    onEnterSelectPanel: function(e) {
      this.__emit("currentSelectPanelChange", e);
    },
    onEsc: function(e) {
      this.__emit("esc", e);
    },
    getHourSelect: function(e) {
      var n = this, r = this.prefixCls, a = this.hourOptions, o = this.disabledHours, s = this.showHour, l = this.use12Hours;
      if (!s)
        return null;
      var u = o(), c, f;
      return l ? (c = [12].concat(a.filter(function(d) {
        return d < 12 && d > 0;
      })), f = e % 12 || 12) : (c = a, f = e), h(xi, {
        prefixCls: r,
        options: c.map(function(d) {
          return Ql(d, u);
        }),
        selectedIndex: c.indexOf(f),
        type: "hour",
        onSelect: this.onItemChange,
        onMouseenter: function() {
          return n.onEnterSelectPanel("hour");
        },
        onEsc: this.onEsc
      }, null);
    },
    getMinuteSelect: function(e) {
      var n = this, r = this.prefixCls, a = this.minuteOptions, o = this.disabledMinutes, s = this.defaultOpenValue, l = this.showMinute, u = this.value;
      if (!l)
        return null;
      var c = u || s, f = o(c.hour());
      return h(xi, {
        prefixCls: r,
        options: a.map(function(d) {
          return Ql(d, f);
        }),
        selectedIndex: a.indexOf(e),
        type: "minute",
        onSelect: this.onItemChange,
        onMouseenter: function() {
          return n.onEnterSelectPanel("minute");
        },
        onEsc: this.onEsc
      }, null);
    },
    getSecondSelect: function(e) {
      var n = this, r = this.prefixCls, a = this.secondOptions, o = this.disabledSeconds, s = this.showSecond, l = this.defaultOpenValue, u = this.value;
      if (!s)
        return null;
      var c = u || l, f = o(c.hour(), c.minute());
      return h(xi, {
        prefixCls: r,
        options: a.map(function(d) {
          return Ql(d, f);
        }),
        selectedIndex: a.indexOf(e),
        type: "second",
        onSelect: this.onItemChange,
        onMouseenter: function() {
          return n.onEnterSelectPanel("second");
        },
        onEsc: this.onEsc
      }, null);
    },
    getAMPMSelect: function() {
      var e = this, n = this.prefixCls, r = this.use12Hours, a = this.format, o = this.isAM;
      if (!r)
        return null;
      var s = ["am", "pm"].map(function(u) {
        return a.match(/\sA/) ? u.toUpperCase() : u;
      }).map(function(u) {
        return {
          value: u
        };
      }), l = o ? 0 : 1;
      return h(xi, {
        prefixCls: n,
        options: s,
        selectedIndex: l,
        type: "ampm",
        onSelect: this.onItemChange,
        onMouseenter: function() {
          return e.onEnterSelectPanel("ampm");
        },
        onEsc: this.onEsc
      }, null);
    }
  },
  render: function() {
    var e = this.prefixCls, n = this.defaultOpenValue, r = this.value, a = r || n;
    return h("div", {
      class: "".concat(e, "-combobox")
    }, [this.getHourSelect(a.hour()), this.getMinuteSelect(a.minute()), this.getSecondSelect(a.second()), this.getAMPMSelect(a.hour())]);
  }
};
const a3 = r3;
function ea() {
}
function Jl(t, e, n) {
  for (var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, a = [], o = 0; o < t; o += r)
    (!e || e.indexOf(o) < 0 || !n) && a.push(o);
  return a;
}
function o3(t, e, n, r) {
  var a = e.slice().sort(function(l, u) {
    return Math.abs(t.hour() - l) - Math.abs(t.hour() - u);
  })[0], o = n.slice().sort(function(l, u) {
    return Math.abs(t.minute() - l) - Math.abs(t.minute() - u);
  })[0], s = r.slice().sort(function(l, u) {
    return Math.abs(t.second() - l) - Math.abs(t.second() - u);
  })[0];
  return R("".concat(a, ":").concat(o, ":").concat(s), "HH:mm:ss");
}
var i3 = K({
  name: "Panel",
  mixins: [Ce],
  inheritAttrs: !1,
  props: {
    clearText: i.string,
    prefixCls: i.string.def("rc-time-picker-panel"),
    defaultOpenValue: {
      type: Object,
      default: function() {
        return R();
      }
    },
    value: i.any,
    defaultValue: i.any,
    placeholder: i.string,
    format: i.string,
    inputReadOnly: i.looseBool.def(!1),
    disabledHours: i.func.def(ea),
    disabledMinutes: i.func.def(ea),
    disabledSeconds: i.func.def(ea),
    hideDisabledOptions: i.looseBool,
    // onChange: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: i.looseBool,
    showHour: i.looseBool,
    showMinute: i.looseBool,
    showSecond: i.looseBool,
    // onClear: PropTypes.func,
    use12Hours: i.looseBool.def(!1),
    hourStep: i.number,
    minuteStep: i.number,
    secondStep: i.number,
    addon: i.func.def(ea),
    focusOnOpen: i.looseBool,
    // onKeydown: PropTypes.func,
    clearIcon: i.any
  },
  data: function() {
    return {
      sValue: this.value,
      selectionRange: [],
      currentSelectPanel: ""
    };
  },
  watch: {
    value: function(e) {
      this.setState({
        sValue: e
      });
    }
  },
  methods: {
    onChange: function(e) {
      this.setState({
        sValue: e
      }), this.__emit("change", e);
    },
    onAmPmChange: function(e) {
      this.__emit("amPmChange", e);
    },
    onCurrentSelectPanelChange: function(e) {
      this.setState({
        currentSelectPanel: e
      });
    },
    // https://github.com/ant-design/ant-design/issues/5829
    close: function() {
      this.__emit("esc");
    },
    onEsc: function(e) {
      this.__emit("esc", e);
    },
    disabledHours2: function() {
      var e = this.use12Hours, n = this.disabledHours, r = n();
      return e && Array.isArray(r) && (this.isAM() ? r = r.filter(function(a) {
        return a < 12;
      }).map(function(a) {
        return a === 0 ? 12 : a;
      }) : r = r.map(function(a) {
        return a === 12 ? 12 : a - 12;
      })), r;
    },
    isAM: function() {
      var e = this.sValue || this.defaultOpenValue;
      return e.hour() >= 0 && e.hour() < 12;
    }
  },
  render: function() {
    var e = this.prefixCls, n = this.placeholder, r = this.disabledMinutes, a = this.addon, o = this.disabledSeconds, s = this.hideDisabledOptions, l = this.showHour, u = this.showMinute, c = this.showSecond, f = this.format, d = this.defaultOpenValue, p = this.clearText, m = this.use12Hours, v = this.focusOnOpen, g = this.hourStep, C = this.minuteStep, y = this.secondStep, O = this.inputReadOnly, w = this.sValue, _ = this.currentSelectPanel, x = this.$attrs, P = x.class, T = x.onEsc, M = T === void 0 ? ea : T, $ = x.onKeydown, k = $ === void 0 ? ea : $, V = ce(this, "clearIcon"), I = this.disabledHours2(), F = r(w ? w.hour() : null), B = o(w ? w.hour() : null, w ? w.minute() : null), E = Jl(24, I, s, g), j = Jl(60, F, s, C), D = Jl(60, B, s, y), N = o3(d, E, j, D);
    return h("div", {
      className: Z(P, "".concat(e, "-inner"))
    }, [h(JM, {
      clearText: p,
      prefixCls: e,
      defaultOpenValue: N,
      value: w,
      currentSelectPanel: _,
      onEsc: M,
      format: f,
      placeholder: n,
      hourOptions: E,
      minuteOptions: j,
      secondOptions: D,
      disabledHours: this.disabledHours2,
      disabledMinutes: r,
      disabledSeconds: o,
      onChange: this.onChange,
      focusOnOpen: v,
      onKeydown: k,
      inputReadOnly: O,
      clearIcon: V
    }, null), h(a3, {
      prefixCls: e,
      value: w,
      defaultOpenValue: N,
      format: f,
      onChange: this.onChange,
      onAmPmChange: this.onAmPmChange,
      showHour: l,
      showMinute: u,
      showSecond: c,
      hourOptions: E,
      minuteOptions: j,
      secondOptions: D,
      disabledHours: this.disabledHours2,
      disabledMinutes: r,
      disabledSeconds: o,
      onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
      use12Hours: m,
      onEsc: this.onEsc,
      isAM: this.isAM()
    }, null), a(this)]);
  }
});
const py = i3;
var Pi = {
  adjustX: 1,
  adjustY: 1
}, Ti = [0, 0], s3 = {
  bottomLeft: {
    points: ["tl", "tl"],
    overflow: Pi,
    offset: [0, -3],
    targetOffset: Ti
  },
  bottomRight: {
    points: ["tr", "tr"],
    overflow: Pi,
    offset: [0, -3],
    targetOffset: Ti
  },
  topRight: {
    points: ["br", "br"],
    overflow: Pi,
    offset: [0, 3],
    targetOffset: Ti
  },
  topLeft: {
    points: ["bl", "bl"],
    overflow: Pi,
    offset: [0, 3],
    targetOffset: Ti
  }
};
const l3 = s3;
function eu() {
}
function tv(t, e) {
  this[t] = e;
}
const u3 = K({
  name: "VcTimePicker",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Hr({
    prefixCls: i.string,
    clearText: i.string,
    value: i.any,
    defaultOpenValue: {
      type: Object,
      default: function() {
        return R();
      }
    },
    pickerInputClass: String,
    inputReadOnly: i.looseBool,
    disabled: i.looseBool,
    allowEmpty: i.looseBool,
    defaultValue: i.any,
    open: i.looseBool,
    defaultOpen: i.looseBool,
    align: i.object,
    placement: i.any,
    transitionName: i.string,
    getPopupContainer: i.func,
    placeholder: i.string,
    format: i.string,
    showHour: i.looseBool,
    showMinute: i.looseBool,
    showSecond: i.looseBool,
    popupClassName: i.string,
    popupStyle: i.object,
    disabledHours: i.func,
    disabledMinutes: i.func,
    disabledSeconds: i.func,
    hideDisabledOptions: i.looseBool,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    // onOpen: PropTypes.func,
    // onClose: PropTypes.func,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    name: i.string,
    autocomplete: i.string,
    use12Hours: i.looseBool,
    hourStep: i.number,
    minuteStep: i.number,
    secondStep: i.number,
    focusOnOpen: i.looseBool,
    // onKeyDown: PropTypes.func,
    autofocus: i.looseBool,
    id: i.string,
    inputIcon: i.any,
    clearIcon: i.any,
    addon: i.func
  }, {
    clearText: "clear",
    prefixCls: "rc-time-picker",
    defaultOpen: !1,
    inputReadOnly: !1,
    popupClassName: "",
    popupStyle: {},
    align: {},
    allowEmpty: !0,
    showHour: !0,
    showMinute: !0,
    showSecond: !0,
    disabledHours: eu,
    disabledMinutes: eu,
    disabledSeconds: eu,
    hideDisabledOptions: !1,
    placement: "bottomLeft",
    use12Hours: !1,
    focusOnOpen: !1
  }),
  data: function() {
    this.saveInputRef = tv.bind(this, "picker"), this.savePanelRef = tv.bind(this, "panelInstance");
    var e = this.defaultOpen, n = this.defaultValue, r = this.open, a = r === void 0 ? e : r, o = this.value, s = o === void 0 ? n : o;
    return {
      sOpen: a,
      sValue: s
    };
  },
  watch: {
    value: function(e) {
      this.setState({
        sValue: e
      });
    },
    open: function(e) {
      e !== void 0 && this.setState({
        sOpen: e
      });
    }
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.autofocus && e.focus();
    });
  },
  methods: {
    onPanelChange: function(e) {
      this.setValue(e);
    },
    onAmPmChange: function(e) {
      this.__emit("amPmChange", e);
    },
    onClear: function(e) {
      e.stopPropagation(), this.setValue(null), this.setOpen(!1);
    },
    onVisibleChange: function(e) {
      this.setOpen(e);
    },
    onEsc: function() {
      this.setOpen(!1), this.focus();
    },
    onKeyDown: function(e) {
      e.keyCode === 40 && this.setOpen(!0);
    },
    onKeyDown2: function(e) {
      this.__emit("keydown", e);
    },
    setValue: function(e) {
      Se(this, "value") || this.setState({
        sValue: e
      }), this.__emit("change", e);
    },
    getFormat: function() {
      var e = this.format, n = this.showHour, r = this.showMinute, a = this.showSecond, o = this.use12Hours;
      if (e)
        return e;
      if (o) {
        var s = [n ? "h" : "", r ? "mm" : "", a ? "ss" : ""].filter(function(l) {
          return !!l;
        }).join(":");
        return s.concat(" a");
      }
      return [n ? "HH" : "", r ? "mm" : "", a ? "ss" : ""].filter(function(l) {
        return !!l;
      }).join(":");
    },
    getPanelElement: function() {
      var e = this.prefixCls, n = this.placeholder, r = this.disabledHours, a = this.addon, o = this.disabledMinutes, s = this.disabledSeconds, l = this.hideDisabledOptions, u = this.inputReadOnly, c = this.showHour, f = this.showMinute, d = this.showSecond, p = this.defaultOpenValue, m = this.clearText, v = this.use12Hours, g = this.focusOnOpen, C = this.onKeyDown2, y = this.hourStep, O = this.minuteStep, w = this.secondStep, _ = this.sValue, x = ce(this, "clearIcon");
      return h(py, {
        clearText: m,
        prefixCls: "".concat(e, "-panel"),
        ref: this.savePanelRef,
        value: _,
        inputReadOnly: u,
        onChange: this.onPanelChange,
        onAmPmChange: this.onAmPmChange,
        defaultOpenValue: p,
        showHour: c,
        showMinute: f,
        showSecond: d,
        onEsc: this.onEsc,
        format: this.getFormat(),
        placeholder: n,
        disabledHours: r,
        disabledMinutes: o,
        disabledSeconds: s,
        hideDisabledOptions: l,
        use12Hours: v,
        hourStep: y,
        minuteStep: O,
        secondStep: w,
        focusOnOpen: g,
        onKeydown: C,
        clearIcon: x,
        addon: a
      }, null);
    },
    getPopupClassName: function() {
      var e = this.showHour, n = this.showMinute, r = this.showSecond, a = this.use12Hours, o = this.prefixCls, s = this.popupClassName, l = 0;
      return e && (l += 1), n && (l += 1), r && (l += 1), a && (l += 1), Z(s, S({}, "".concat(o, "-panel-narrow"), (!e || !n || !r) && !a), "".concat(o, "-panel-column-").concat(l));
    },
    setOpen: function(e) {
      this.sOpen !== e && (Se(this, "open") || this.setState({
        sOpen: e
      }), e ? this.__emit("open", {
        open: e
      }) : this.__emit("close", {
        open: e
      }));
    },
    focus: function() {
      this.picker.focus();
    },
    blur: function() {
      this.picker.blur();
    },
    onFocus: function(e) {
      this.__emit("focus", e);
    },
    onBlur: function(e) {
      this.__emit("blur", e);
    },
    renderClearButton: function() {
      var e = this, n = this.sValue, r = this.$props, a = r.prefixCls, o = r.allowEmpty, s = r.clearText, l = r.disabled;
      if (!o || !n || l)
        return null;
      var u = ce(this, "clearIcon");
      if (vn(u)) {
        var c = rs(u) || {}, f = c.onClick;
        return je(u, {
          onClick: function() {
            f && f.apply(void 0, arguments), e.onClear.apply(e, arguments);
          }
        });
      }
      return h("a", {
        role: "button",
        class: "".concat(a, "-clear"),
        title: s,
        onClick: this.onClear,
        tabindex: 0
      }, [u || h("i", {
        class: "".concat(a, "-clear-icon")
      }, null)]);
    }
  },
  render: function() {
    var e = this, n = this.prefixCls, r = this.placeholder, a = this.placement, o = this.align, s = this.id, l = this.disabled, u = this.transitionName, c = this.getPopupContainer, f = this.name, d = this.autocomplete, p = this.autofocus, m = this.sOpen, v = this.sValue, g = this.onFocus, C = this.onBlur, y = this.popupStyle, O = this.pickerInputClass, w = this.$attrs, _ = w.class, x = w.style, P = this.getPopupClassName(), T = ce(this, "inputIcon");
    return h(nl, {
      prefixCls: "".concat(n, "-panel"),
      popupClassName: P,
      popupStyle: y,
      popupAlign: o,
      builtinPlacements: l3,
      popupPlacement: a,
      action: l ? [] : ["click"],
      destroyPopupOnHide: !0,
      getPopupContainer: c,
      popupTransitionName: u,
      popupVisible: m,
      onPopupVisibleChange: this.onVisibleChange,
      popup: this.getPanelElement()
    }, {
      default: function() {
        return [h("span", {
          class: Z(n, _),
          style: x
        }, [h("input", {
          class: O,
          ref: e.saveInputRef,
          type: "text",
          placeholder: r,
          name: f,
          onKeydown: e.onKeyDown,
          disabled: l,
          value: v && v.format(e.getFormat()) || "",
          autocomplete: d,
          onFocus: g,
          onBlur: C,
          autofocus: p,
          readonly: !0,
          id: s
        }, null), T || h("span", {
          class: "".concat(n, "-icon")
        }, null), e.renderClearButton()])];
      }
    });
  }
});
var c3 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" };
const f3 = c3;
function nv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      d3(t, a, n[a]);
    });
  }
  return t;
}
function d3(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var jf = function(e, n) {
  var r = nv({}, e, n.attrs);
  return h(Pe, nv({}, r, {
    icon: f3
  }), null);
};
jf.displayName = "ClockCircleOutlined";
jf.inheritAttrs = !1;
const h3 = jf;
function vy(t) {
  return {
    showHour: t.indexOf("H") > -1 || t.indexOf("h") > -1 || t.indexOf("k") > -1,
    showMinute: t.indexOf("m") > -1,
    showSecond: t.indexOf("s") > -1
  };
}
var p3 = function() {
  return {
    size: i.oneOf(ke("large", "default", "small")),
    value: kp,
    defaultValue: kp,
    open: i.looseBool,
    format: i.string,
    disabled: i.looseBool,
    placeholder: i.string,
    prefixCls: i.string,
    hideDisabledOptions: i.looseBool,
    disabledHours: i.func,
    disabledMinutes: i.func,
    disabledSeconds: i.func,
    getPopupContainer: i.func,
    use12Hours: i.looseBool,
    focusOnOpen: i.looseBool,
    hourStep: i.number,
    minuteStep: i.number,
    secondStep: i.number,
    allowEmpty: i.looseBool,
    allowClear: i.looseBool,
    inputReadOnly: i.looseBool,
    clearText: i.string,
    defaultOpenValue: i.object,
    popupClassName: i.string,
    popupStyle: i.style,
    suffixIcon: i.any,
    align: i.object,
    placement: i.any,
    transitionName: i.string,
    autofocus: i.looseBool,
    addon: i.any,
    clearIcon: i.any,
    locale: i.object,
    valueFormat: i.string,
    onChange: i.func,
    onAmPmChange: i.func,
    onOpen: i.func,
    onClose: i.func,
    onFocus: i.func,
    onBlur: i.func,
    onKeydown: i.func,
    onOpenChange: i.func
  };
}, v3 = K({
  name: "ATimePicker",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Ba(p3(), {
    align: {
      offset: [0, -2]
    },
    disabled: !1,
    disabledHours: void 0,
    disabledMinutes: void 0,
    disabledSeconds: void 0,
    hideDisabledOptions: !1,
    placement: "bottomLeft",
    transitionName: "slide-up",
    focusOnOpen: !0,
    allowClear: !0
  }),
  emits: ["update:value", "update:open", "change", "openChange", "focus", "blur", "keydown"],
  setup: function() {
    return {
      popupRef: null,
      timePickerRef: null,
      configProvider: ye("configProvider", He)
    };
  },
  data: function() {
    var e = this.value, n = this.defaultValue, r = this.valueFormat;
    return ya("TimePicker", n, "defaultValue", r), ya("TimePicker", e, "value", r), bn(!Se(this, "allowEmpty"), "TimePicker", "`allowEmpty` is deprecated. Please use `allowClear` instead."), {
      sValue: go(e || n, r)
    };
  },
  watch: {
    value: function(e) {
      ya("TimePicker", e, "value", this.valueFormat), this.setState({
        sValue: go(e, this.valueFormat)
      });
    }
  },
  created: function() {
    Ut("savePopupRef", this.savePopupRef);
  },
  methods: {
    getDefaultFormat: function() {
      var e = this.format, n = this.use12Hours;
      return e || (n ? "h:mm:ss a" : "HH:mm:ss");
    },
    getAllowClear: function() {
      var e = this.$props, n = e.allowClear, r = e.allowEmpty;
      return Se(this, "allowClear") ? n : r;
    },
    getDefaultLocale: function() {
      var e = b(b({}, fc), this.$props.locale);
      return e;
    },
    savePopupRef: function(e) {
      this.popupRef = e;
    },
    saveTimePicker: function(e) {
      this.timePickerRef = e;
    },
    handleChange: function(e) {
      Se(this, "value") || this.setState({
        sValue: e
      });
      var n = this.format, r = n === void 0 ? "HH:mm:ss" : n, a = this.valueFormat ? Yi(e, this.valueFormat) : e;
      this.$emit("update:value", a), this.$emit("change", a, e && e.format(r) || "");
    },
    handleOpenClose: function(e) {
      var n = e.open;
      this.$emit("update:open", n), this.$emit("openChange", n);
    },
    focus: function() {
      this.timePickerRef.focus();
    },
    blur: function() {
      this.timePickerRef.blur();
    },
    renderInputIcon: function(e) {
      var n = ce(this, "suffixIcon");
      n = Array.isArray(n) ? n[0] : n;
      var r = n && vn(n) && je(n, {
        class: "".concat(e, "-clock-icon")
      }) || h(h3, {
        class: "".concat(e, "-clock-icon")
      }, null);
      return h("span", {
        class: "".concat(e, "-icon")
      }, [r]);
    },
    renderClearIcon: function(e) {
      var n = ce(this, "clearIcon"), r = "".concat(e, "-clear");
      return n && vn(n) ? je(n, {
        class: r
      }) : h(lr, {
        class: r
      }, null);
    },
    renderTimePicker: function(e) {
      var n, r = me(this);
      r = Ma(r, ["defaultValue", "suffixIcon", "allowEmpty", "allowClear"]);
      var a = this.$attrs.class, o = r, s = o.prefixCls, l = o.getPopupContainer, u = o.placeholder, c = o.size, f = this.configProvider.getPrefixCls, d = f("time-picker", s), p = f("input"), m = Z("".concat(d, "-input"), p), v = this.getDefaultFormat(), g = (n = {}, S(n, a, a), S(n, "".concat(d, "-").concat(c), !!c), n), C = ce(this, "addon", {}, !1), y = function(T) {
        return C ? h("div", {
          class: "".concat(d, "-panel-addon")
        }, [typeof C == "function" ? C(T) : C]) : null;
      }, O = this.renderInputIcon(d), w = this.renderClearIcon(d), _ = this.configProvider.getPopupContainer, x = b(b(b(b({}, vy(v)), r), this.$attrs), {
        allowEmpty: this.getAllowClear(),
        prefixCls: d,
        pickerInputClass: m,
        getPopupContainer: l || _,
        format: v,
        value: this.sValue,
        placeholder: u === void 0 ? e.placeholder : u,
        addon: y,
        inputIcon: O,
        clearIcon: w,
        class: g,
        ref: this.saveTimePicker,
        onChange: this.handleChange,
        onOpen: this.handleOpenClose,
        onClose: this.handleOpenClose
      });
      return h(u3, x, null);
    }
  },
  render: function() {
    return h(Na, {
      componentName: "TimePicker",
      defaultLocale: this.getDefaultLocale(),
      children: this.renderTimePicker
    }, null);
  }
});
Cn(v3);
var m3 = {
  date: "YYYY-MM-DD",
  dateTime: "YYYY-MM-DD HH:mm:ss",
  week: "gggg-wo",
  month: "YYYY-MM"
}, g3 = {
  date: "dateFormat",
  dateTime: "dateTimeFormat",
  week: "weekFormat",
  month: "monthFormat"
};
function b3(t) {
  var e = t.showHour, n = t.showMinute, r = t.showSecond, a = t.use12Hours, o = 0;
  return e && (o += 1), n && (o += 1), r && (o += 1), a && (o += 1), o;
}
function sl(t, e, n) {
  return K({
    name: t.name,
    inheritAttrs: !1,
    props: b(b({}, e), {
      transitionName: i.string.def("slide-up"),
      popupStyle: i.style,
      locale: i.any.def({})
    }),
    emits: ["update:value", "openChange", "focus", "blur", "mouseenter", "mouseleave", "change", "ok", "calendarChange"],
    setup: function() {
      return {
        configProvider: ye("configProvider", He),
        picker: void 0,
        popupRef: void 0
      };
    },
    watch: {
      value: function(a) {
        ya("DatePicker", a, "value", this.valueFormat);
      }
    },
    created: function() {
      Ut("savePopupRef", this.savePopupRef);
    },
    mounted: function() {
      var a = this, o = this.$props, s = o.autofocus, l = o.disabled, u = o.value, c = o.defaultValue, f = o.valueFormat;
      ya("DatePicker", c, "defaultValue", f), ya("DatePicker", u, "value", f), s && !l && Le(function() {
        a.focus();
      });
    },
    methods: {
      savePicker: function(a) {
        this.picker = a;
      },
      getDefaultLocale: function() {
        var a = b(b({}, Cu), this.locale);
        return a.lang = b(b({}, a.lang), (this.locale || {}).lang), a;
      },
      savePopupRef: function(a) {
        this.popupRef = a;
      },
      handleOpenChange: function(a) {
        this.$emit("openChange", a);
      },
      handleFocus: function(a) {
        this.$emit("focus", a);
      },
      handleBlur: function(a) {
        this.$emit("blur", a);
      },
      handleMouseEnter: function(a) {
        this.$emit("mouseenter", a);
      },
      handleMouseLeave: function(a) {
        this.$emit("mouseleave", a);
      },
      handleChange: function(a, o) {
        var s = this.valueFormat ? Yi(a, this.valueFormat) : a;
        this.$emit("update:value", s), this.$emit("change", s, o);
      },
      handleOk: function(a) {
        this.$emit("ok", this.valueFormat ? Yi(a, this.valueFormat) : a);
      },
      handleCalendarChange: function(a, o) {
        this.$emit("calendarChange", this.valueFormat ? Yi(a, this.valueFormat) : a, o);
      },
      focus: function() {
        this.picker.focus();
      },
      blur: function() {
        this.picker.blur();
      },
      transformValue: function(a) {
        "value" in a && (a.value = go(a.value, this.valueFormat)), "defaultValue" in a && (a.defaultValue = go(a.defaultValue, this.valueFormat)), "defaultPickerValue" in a && (a.defaultPickerValue = go(a.defaultPickerValue, this.valueFormat));
      },
      renderPicker: function(a, o) {
        var s, l = b(b({}, me(this)), this.$attrs);
        this.transformValue(l);
        var u = l.prefixCls, c = l.inputPrefixCls, f = l.getCalendarContainer, d = l.size, p = l.showTime, m = l.disabled, v = l.format, g = p ? "".concat(n, "Time") : n, C = v || a[g3[g]] || m3[g], y = this.configProvider, O = y.getPrefixCls, w = y.getPopupContainer, _ = f || w, x = O("calendar", u), P = O("input", c), T = Z("".concat(x, "-picker"), S({}, "".concat(x, "-picker-").concat(d), !!d)), M = Z("".concat(x, "-picker-input"), P, (s = {}, S(s, "".concat(P, "-lg"), d === "large"), S(s, "".concat(P, "-sm"), d === "small"), S(s, "".concat(P, "-disabled"), m), s)), $ = p && p.format || "HH:mm:ss", k = b(b({}, vy($)), {
          format: $,
          use12Hours: p && p.use12Hours
        }), V = b3(k), I = "".concat(x, "-time-picker-column-").concat(V), F = b(b(b({}, k), p), {
          prefixCls: "".concat(x, "-time-picker"),
          placeholder: a.timePickerLocale.placeholder,
          transitionName: "slide-up",
          class: I,
          onEsc: function() {
          }
        }), B = p ? h(py, F, null) : null, E = b(b({}, l), {
          getCalendarContainer: _,
          format: C,
          pickerClass: T,
          pickerInputClass: M,
          locale: a,
          localeCode: o,
          timePicker: B,
          onOpenChange: this.handleOpenChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onChange: this.handleChange,
          onOk: this.handleOk,
          onCalendarChange: this.handleCalendarChange,
          ref: this.savePicker
        });
        return h(t, E, this.$slots);
      }
    },
    render: function() {
      return h(Na, {
        componentName: "DatePicker",
        defaultLocale: this.getDefaultLocale,
        children: this.renderPicker
      }, null);
    }
  });
}
function ta() {
}
var y3 = {
  name: "CalendarPart",
  inheritAttrs: !1,
  mixins: [Ce],
  props: {
    prefixCls: i.string,
    value: i.any,
    hoverValue: i.any,
    selectedValue: i.any,
    direction: i.any,
    locale: i.any,
    showDateInput: i.looseBool,
    showTimePicker: i.looseBool,
    showWeekNumber: i.looseBool,
    format: i.any,
    placeholder: i.any,
    disabledDate: i.any,
    timePicker: i.any,
    disabledTime: i.any,
    disabledMonth: i.any,
    mode: i.any,
    // onInputSelect: PropTypes.func,
    timePickerDisabledTime: i.object,
    enableNext: i.any,
    enablePrev: i.any,
    clearIcon: i.any,
    dateRender: i.func,
    inputMode: i.string,
    inputReadOnly: i.looseBool
  },
  render: function() {
    var e = this.$props, n = e.prefixCls, r = e.value, a = e.hoverValue, o = e.selectedValue, s = e.mode, l = e.direction, u = e.locale, c = e.format, f = e.placeholder, d = e.disabledDate, p = e.timePicker, m = e.disabledTime, v = e.timePickerDisabledTime, g = e.showTimePicker, C = e.enablePrev, y = e.enableNext, O = e.disabledMonth, w = e.showDateInput, _ = e.dateRender, x = e.showWeekNumber, P = e.showClear, T = e.inputMode, M = e.inputReadOnly, $ = ce(this, "clearIcon"), k = this.$attrs, V = k.onInputChange, I = V === void 0 ? ta : V, F = k.onInputSelect, B = F === void 0 ? ta : F, E = k.onValueChange, j = E === void 0 ? ta : E, D = k.onPanelChange, N = D === void 0 ? ta : D, U = k.onSelect, L = U === void 0 ? ta : U, ne = k.onDayHover, ie = ne === void 0 ? ta : ne, fe = g && p, $e = fe && m ? Ef(o, m) : null, ze = "".concat(n, "-range"), Te = {
      locale: u,
      value: r,
      prefixCls: n,
      showTimePicker: g
    }, ge = l === "left" ? 0 : 1, Re = null;
    if (fe) {
      var tt = me(p);
      Re = je(p, b(b(b(b({
        showHour: !0,
        showMinute: !0,
        showSecond: !0
      }, tt), $e), v), {
        defaultOpenValue: r,
        value: o[ge],
        onChange: I
      }));
    }
    var ft = w && h(Ui, {
      format: c,
      locale: u,
      prefixCls: n,
      timePicker: p,
      disabledDate: d,
      placeholder: f,
      disabledTime: m,
      value: r,
      showClear: P || !1,
      selectedValue: o[ge],
      onChange: I,
      onSelect: B,
      clearIcon: $,
      inputMode: T,
      inputReadOnly: M
    }, null), A = b(b({}, Te), {
      mode: s,
      enableNext: y,
      enablePrev: C,
      disabledMonth: O,
      onValueChange: j,
      onPanelChange: N
    }), Y = b(b({}, Te), {
      hoverValue: a,
      selectedValue: o,
      dateRender: _,
      disabledDate: d,
      showWeekNumber: x,
      onSelect: L,
      onDayHover: ie
    });
    return h("div", {
      class: "".concat(ze, "-part ").concat(ze, "-").concat(l)
    }, [ft, h("div", {
      style: {
        outline: "none"
      }
    }, [h(Vf, A, null), g ? h("div", {
      class: "".concat(n, "-time-picker")
    }, [h("div", {
      class: "".concat(n, "-time-picker-panel")
    }, [Re])]) : null, h("div", {
      class: "".concat(n, "-body")
    }, [h(Lb, Y, null)])])]);
  }
};
const rv = y3;
function Ei() {
}
function C3(t) {
  return Array.isArray(t) && (t.length === 0 || t.every(function(e) {
    return !e;
  }));
}
function av(t, e) {
  if (t === e)
    return !0;
  if (t === null || typeof t > "u" || e === null || typeof e > "u" || t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; ++n)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Wu(t) {
  var e = ht(t, 2), n = e[0], r = e[1];
  return r && n == null && (n = r.clone().subtract(1, "month")), n && r == null && (r = n.clone().add(1, "month")), [n, r];
}
function ov(t, e) {
  var n = t.selectedValue || e && t.defaultSelectedValue, r = t.value || e && t.defaultValue, a = Wu(r || n);
  return C3(a) ? e && [R(), R().add(1, "months")] : a;
}
function tu(t, e) {
  for (var n = e ? e().concat() : [], r = 0; r < t; r++)
    n.indexOf(r) === -1 && n.push(r);
  return n;
}
function ki(t, e, n) {
  if (e) {
    var r = this.sSelectedValue, a = r.concat(), o = t === "left" ? 0 : 1;
    a[o] = e, a[0] && this.compare(a[0], a[1]) > 0 && (a[1 - o] = this.sShowTimePicker ? a[o] : void 0), this.__emit("inputSelect", a), this.fireSelectValueChange(a, null, n || {
      source: "dateInput"
    });
  }
}
var w3 = K({
  name: "RangeCalendar",
  mixins: [Ce, kf],
  inheritAttrs: !1,
  props: {
    locale: i.object.def(Bs),
    visible: i.looseBool.def(!0),
    prefixCls: i.string.def("rc-calendar"),
    dateInputPlaceholder: i.any,
    seperator: i.string.def("~"),
    defaultValue: i.any,
    value: i.any,
    hoverValue: i.any,
    mode: i.arrayOf(i.oneOf(["time", "date", "month", "year", "decade"])),
    showDateInput: i.looseBool.def(!0),
    timePicker: i.any,
    showOk: i.looseBool,
    showToday: i.looseBool.def(!0),
    defaultSelectedValue: i.array.def([]),
    selectedValue: i.array,
    showClear: i.looseBool,
    showWeekNumber: i.looseBool,
    // locale: PropTypes.object,
    // onChange: PropTypes.func,
    // onSelect: PropTypes.func,
    // onValueChange: PropTypes.func,
    // onHoverChange: PropTypes.func,
    // onPanelChange: PropTypes.func,
    format: i.oneOfType([i.string, i.arrayOf(i.string), i.func]),
    // onClear: PropTypes.func,
    type: i.any.def("both"),
    disabledDate: i.func,
    disabledTime: i.func.def(Ei),
    renderFooter: i.func.def(function() {
      return null;
    }),
    renderSidebar: i.func.def(function() {
      return null;
    }),
    dateRender: i.func,
    clearIcon: i.any,
    inputReadOnly: i.looseBool
  },
  data: function() {
    var e = this.$props, n = e.selectedValue || e.defaultSelectedValue, r = ov(e, 1);
    return {
      sSelectedValue: n,
      prevSelectedValue: n,
      firstSelectedValue: null,
      sHoverValue: e.hoverValue || [],
      sValue: r,
      sShowTimePicker: !1,
      sMode: e.mode || ["date", "date"],
      sPanelTriggerSource: ""
      // Trigger by which picker panel: 'start' & 'end'
    };
  },
  watch: {
    value: function() {
      var e = {};
      e.sValue = ov(this.$props, 0), this.setState(e);
    },
    hoverValue: function(e) {
      av(this.sHoverValue, e) || this.setState({
        sHoverValue: e
      });
    },
    selectedValue: function(e) {
      var n = {};
      n.sSelectedValue = e, n.prevSelectedValue = e, this.setState(n);
    },
    mode: function(e) {
      av(this.sMode, e) || this.setState({
        sMode: e
      });
    }
  },
  methods: {
    onDatePanelEnter: function() {
      this.hasSelectedValue() && this.fireHoverValueChange(this.sSelectedValue.concat());
    },
    onDatePanelLeave: function() {
      this.hasSelectedValue() && this.fireHoverValueChange([]);
    },
    onSelect: function(e) {
      var n = this.type, r = this.sSelectedValue, a = this.prevSelectedValue, o = this.firstSelectedValue, s;
      if (n === "both")
        o ? this.compare(o, e) < 0 ? (Zt(a[1], e), s = [o, e]) : (Zt(a[0], e), Zt(a[1], o), s = [e, o]) : (Zt(a[0], e), s = [e]);
      else if (n === "start") {
        Zt(a[0], e);
        var l = r[1];
        s = l && this.compare(l, e) > 0 ? [e, l] : [e];
      } else {
        var u = r[0];
        u && this.compare(u, e) <= 0 ? (Zt(a[1], e), s = [u, e]) : (Zt(a[0], e), s = [e]);
      }
      this.fireSelectValueChange(s);
    },
    onKeyDown: function(e) {
      var n = this;
      if (e.target.nodeName.toLowerCase() !== "input") {
        var r = e.keyCode, a = e.ctrlKey || e.metaKey, o = this.$data, s = o.sSelectedValue, l = o.sHoverValue, u = o.firstSelectedValue, c = o.sValue, f = this.$props.disabledDate, d = function(v) {
          var g, C, y;
          if (u ? l.length === 1 ? (g = l[0].clone(), C = v(g), y = n.onDayHover(C)) : (g = l[0].isSame(u, "day") ? l[1] : l[0], C = v(g), y = n.onDayHover(C)) : (g = l[0] || s[0] || c[0] || R(), C = v(g), y = [C], n.fireHoverValueChange(y)), y.length >= 2) {
            var O = y.some(function(P) {
              return !HM(c, P, "month");
            });
            if (O) {
              var w = y.slice().sort(function(P, T) {
                return P.valueOf() - T.valueOf();
              });
              w[0].isSame(w[1], "month") && (w[1] = w[0].clone().add(1, "month")), n.fireValueChange(w);
            }
          } else if (y.length === 1) {
            var _ = c.findIndex(function(P) {
              return P.isSame(g, "month");
            });
            if (_ === -1 && (_ = 0), c.every(function(P) {
              return !P.isSame(C, "month");
            })) {
              var x = c.slice();
              x[_] = C.clone(), n.fireValueChange(x);
            }
          }
          return e.preventDefault(), C;
        };
        switch (r) {
          case oe.DOWN:
            d(function(m) {
              return Yn(m, 1, "weeks");
            });
            return;
          case oe.UP:
            d(function(m) {
              return Yn(m, -1, "weeks");
            });
            return;
          case oe.LEFT:
            d(a ? function(m) {
              return Yn(m, -1, "years");
            } : function(m) {
              return Yn(m, -1, "days");
            });
            return;
          case oe.RIGHT:
            d(a ? function(m) {
              return Yn(m, 1, "years");
            } : function(m) {
              return Yn(m, 1, "days");
            });
            return;
          case oe.HOME:
            d(function(m) {
              return uy(m);
            });
            return;
          case oe.END:
            d(function(m) {
              return cy(m);
            });
            return;
          case oe.PAGE_DOWN:
            d(function(m) {
              return Yn(m, 1, "month");
            });
            return;
          case oe.PAGE_UP:
            d(function(m) {
              return Yn(m, -1, "month");
            });
            return;
          case oe.ENTER: {
            var p;
            l.length === 0 ? p = d(function(m) {
              return m;
            }) : l.length === 1 ? p = l[0] : p = l[0].isSame(u, "day") ? l[1] : l[0], p && (!f || !f(p)) && this.onSelect(p), e.preventDefault();
            return;
          }
          default:
            this.__emit("keydown", e);
        }
      }
    },
    onDayHover: function(e) {
      var n = [], r = this.sSelectedValue, a = this.firstSelectedValue, o = this.type;
      if (o === "start" && r[1])
        n = this.compare(e, r[1]) < 0 ? [e, r[1]] : [e];
      else if (o === "end" && r[0])
        n = this.compare(e, r[0]) > 0 ? [r[0], e] : [];
      else {
        if (!a)
          return this.sHoverValue.length && this.setState({
            sHoverValue: []
          }), n;
        n = this.compare(e, a) < 0 ? [e, a] : [a, e];
      }
      return this.fireHoverValueChange(n), n;
    },
    onToday: function() {
      var e = Sr(this.sValue[0]), n = e.clone().add(1, "months");
      this.setState({
        sValue: [e, n]
      });
    },
    onOpenTimePicker: function() {
      this.setState({
        sShowTimePicker: !0
      });
    },
    onCloseTimePicker: function() {
      this.setState({
        sShowTimePicker: !1
      });
    },
    onOk: function() {
      var e = this.sSelectedValue;
      this.isAllowedDateAndTime(e) && this.__emit("ok", e);
    },
    onStartInputChange: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      var a = ["left"].concat(n);
      return ki.apply(this, a);
    },
    onEndInputChange: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      var a = ["right"].concat(n);
      return ki.apply(this, a);
    },
    onStartInputSelect: function(e) {
      var n = ["left", e, {
        source: "dateInputSelect"
      }];
      return ki.apply(this, n);
    },
    onEndInputSelect: function(e) {
      var n = ["right", e, {
        source: "dateInputSelect"
      }];
      return ki.apply(this, n);
    },
    onStartValueChange: function(e) {
      var n = Je(this.sValue);
      return n[0] = e, this.fireValueChange(n);
    },
    onEndValueChange: function(e) {
      var n = Je(this.sValue);
      return n[1] = e, this.fireValueChange(n);
    },
    onStartPanelChange: function(e, n) {
      var r = this.sMode, a = this.sValue, o = [n, r[1]], s = [e || a[0], a[1]];
      this.__emit("panelChange", s, o);
      var l = {
        sPanelTriggerSource: "start"
      };
      Se(this, "mode") || (l.sMode = o), this.setState(l);
    },
    onEndPanelChange: function(e, n) {
      var r = this.sMode, a = this.sValue, o = [r[0], n], s = [a[0], e || a[1]];
      this.__emit("panelChange", s, o);
      var l = {
        sPanelTriggerSource: "end"
      };
      Se(this, "mode") || (l.sMode = o), this.setState(l);
    },
    getStartValue: function() {
      var e = this.$data, n = e.sSelectedValue, r = e.sShowTimePicker, a = e.sValue, o = e.sMode, s = e.sPanelTriggerSource, l = a[0];
      return n[0] && this.$props.timePicker && (l = l.clone(), Zt(n[0], l)), r && n[0] && (l = n[0]), s === "end" && o[0] === "date" && o[1] === "date" && l.isSame(a[1], "month") && (l = l.clone().subtract(1, "month")), l;
    },
    getEndValue: function() {
      var e = this.$data, n = e.sSelectedValue, r = e.sShowTimePicker, a = e.sValue, o = e.sMode, s = e.sPanelTriggerSource, l = a[1] ? a[1].clone() : a[0].clone().add(1, "month");
      return n[1] && this.$props.timePicker && Zt(n[1], l), r && (l = n[1] ? n[1] : this.getStartValue()), !r && s !== "end" && o[0] === "date" && o[1] === "date" && l.isSame(a[0], "month") && (l = l.clone().add(1, "month")), l;
    },
    // get disabled hours for second picker
    getEndDisableTime: function() {
      var e = this.sSelectedValue, n = this.sValue, r = this.disabledTime, a = r(e, "end") || {}, o = e && e[0] || n[0].clone();
      if (!e[1] || o.isSame(e[1], "day")) {
        var s = o.hour(), l = o.minute(), u = o.second(), c = a.disabledHours, f = a.disabledMinutes, d = a.disabledSeconds, p = f ? f() : [], m = d ? d() : [];
        return c = tu(s, c), f = tu(l, f), d = tu(u, d), {
          disabledHours: function() {
            return c;
          },
          disabledMinutes: function(g) {
            return g === s ? f : p;
          },
          disabledSeconds: function(g, C) {
            return g === s && C === l ? d : m;
          }
        };
      }
      return a;
    },
    isAllowedDateAndTime: function(e) {
      return ms(e[0], this.disabledDate, this.disabledStartTime) && ms(e[1], this.disabledDate, this.disabledEndTime);
    },
    isMonthYearPanelShow: function(e) {
      return ["month", "year", "decade"].indexOf(e) > -1;
    },
    hasSelectedValue: function() {
      var e = this.sSelectedValue;
      return !!e[1] && !!e[0];
    },
    compare: function(e, n) {
      return this.timePicker ? e.diff(n) : e.diff(n, "days");
    },
    fireSelectValueChange: function(e, n, r) {
      var a = this.timePicker, o = this.prevSelectedValue;
      if (a) {
        var s = me(a);
        if (s.defaultValue) {
          var l = s.defaultValue;
          !o[0] && e[0] && Zt(l[0], e[0]), !o[1] && e[1] && Zt(l[1], e[1]);
        }
      }
      if (!this.sSelectedValue[0] || !this.sSelectedValue[1]) {
        var u = e[0] || R(), c = e[1] || u.clone().add(1, "months");
        this.setState({
          sSelectedValue: e,
          sValue: e && e.length === 2 ? Wu([u, c]) : this.sValue
        });
      }
      e[0] && !e[1] && (this.setState({
        firstSelectedValue: e[0]
      }), this.fireHoverValueChange(e.concat())), this.__emit("change", e), (n || e[0] && e[1]) && (this.setState({
        prevSelectedValue: e,
        firstSelectedValue: null
      }), this.fireHoverValueChange([]), this.__emit("select", e, r)), Se(this, "selectedValue") || this.setState({
        sSelectedValue: e
      });
    },
    fireValueChange: function(e) {
      Se(this, "value") || this.setState({
        sValue: e
      }), this.__emit("valueChange", e);
    },
    fireHoverValueChange: function(e) {
      Se(this, "hoverValue") || this.setState({
        sHoverValue: e
      }), this.__emit("hoverChange", e);
    },
    clear: function() {
      this.fireSelectValueChange([], !0), this.__emit("clear");
    },
    disabledStartTime: function(e) {
      return this.disabledTime(e, "start");
    },
    disabledEndTime: function(e) {
      return this.disabledTime(e, "end");
    },
    disabledStartMonth: function(e) {
      var n = this.sValue;
      return e.isAfter(n[1], "month");
    },
    disabledEndMonth: function(e) {
      var n = this.sValue;
      return e.isBefore(n[0], "month");
    }
  },
  render: function() {
    var e, n, r = me(this), a = r.prefixCls, o = r.dateInputPlaceholder, s = r.timePicker, l = r.showOk, u = r.locale, c = r.showClear, f = r.showToday, d = r.type, p = r.seperator, m = ce(this, "clearIcon"), v = this.sHoverValue, g = this.sSelectedValue, C = this.sMode, y = this.sShowTimePicker, O = this.sValue, w = (e = {}, S(e, this.$attrs.class, !!this.$attrs.class), S(e, a, 1), S(e, "".concat(a, "-hidden"), !r.visible), S(e, "".concat(a, "-range"), 1), S(e, "".concat(a, "-show-time-picker"), y), S(e, "".concat(a, "-week-number"), r.showWeekNumber), e), _ = b(b({}, r), this.$attrs), x = {
      selectedValue: g,
      onSelect: this.onSelect,
      onDayHover: d === "start" && g[1] || d === "end" && g[0] || v.length ? this.onDayHover : Ei
    }, P, T;
    if (o)
      if (Array.isArray(o)) {
        var M = ht(o, 2);
        P = M[0], T = M[1];
      } else
        P = T = o;
    var $ = l === !0 || l !== !1 && !!s, k = (n = {}, S(n, "".concat(a, "-footer"), !0), S(n, "".concat(a, "-range-bottom"), !0), S(n, "".concat(a, "-footer-show-ok"), $), n), V = this.getStartValue(), I = this.getEndValue(), F = Sr(V), B = F.month(), E = F.year(), j = V.year() === E && V.month() === B || I.year() === E && I.month() === B, D = V.clone().add(1, "months"), N = D.year() === I.year() && D.month() === I.month(), U = b(b(b({}, _), x), {
      hoverValue: v,
      direction: "left",
      disabledTime: this.disabledStartTime,
      disabledMonth: this.disabledStartMonth,
      format: this.getFormat(),
      value: V,
      mode: C[0],
      placeholder: P,
      showDateInput: this.showDateInput,
      timePicker: s,
      showTimePicker: y || C[0] === "time",
      enablePrev: !0,
      enableNext: !N || this.isMonthYearPanelShow(C[1]),
      clearIcon: m,
      onInputChange: this.onStartInputChange,
      onInputSelect: this.onStartInputSelect,
      onValueChange: this.onStartValueChange,
      onPanelChange: this.onStartPanelChange
    }), L = b(b(b({}, _), x), {
      hoverValue: v,
      direction: "right",
      format: this.getFormat(),
      timePickerDisabledTime: this.getEndDisableTime(),
      placeholder: T,
      value: I,
      mode: C[1],
      showDateInput: this.showDateInput,
      timePicker: s,
      showTimePicker: y || C[1] === "time",
      disabledTime: this.disabledEndTime,
      disabledMonth: this.disabledEndMonth,
      enablePrev: !N || this.isMonthYearPanelShow(C[0]),
      enableNext: !0,
      clearIcon: m,
      onInputChange: this.onEndInputChange,
      onInputSelect: this.onEndInputSelect,
      onValueChange: this.onEndValueChange,
      onPanelChange: this.onEndPanelChange
    }), ne = null;
    if (f) {
      var ie = b(b({}, _), {
        disabled: j,
        value: O[0],
        text: u.backToToday,
        onToday: this.onToday
      });
      ne = h(ry, H({
        key: "todayButton"
      }, ie), null);
    }
    var fe = null;
    if (r.timePicker) {
      var $e = b(b({}, _), {
        showTimePicker: y || C[0] === "time" && C[1] === "time",
        timePickerDisabled: !this.hasSelectedValue() || v.length,
        onOpenTimePicker: this.onOpenTimePicker,
        onCloseTimePicker: this.onCloseTimePicker
      });
      fe = h(sy, H({
        key: "timePickerButton"
      }, $e), null);
    }
    var ze = null;
    if ($) {
      var Te = b(b({}, _), {
        okDisabled: !this.isAllowedDateAndTime(g) || !this.hasSelectedValue() || v.length,
        onOk: this.onOk
      });
      ze = h(oy, H({
        key: "okButtonNode"
      }, Te), null);
    }
    var ge = this.renderFooter(C);
    return h("div", {
      ref: "rootInstance",
      class: w,
      tabindex: "0",
      onKeydown: this.onKeyDown
    }, [r.renderSidebar(), h("div", {
      class: "".concat(a, "-panel")
    }, [c && g[0] && g[1] ? h("a", {
      role: "button",
      title: u.clear,
      onClick: this.clear
    }, [m || h("span", {
      class: "".concat(a, "-clear-btn")
    }, null)]) : null, h("div", {
      class: "".concat(a, "-date-panel"),
      onMouseleave: d !== "both" ? this.onDatePanelLeave : Ei,
      onMouseenter: d !== "both" ? this.onDatePanelEnter : Ei
    }, [h(rv, U, null), h("span", {
      class: "".concat(a, "-range-middle")
    }, [p]), h(rv, L, null)]), h("div", {
      class: k
    }, [f || r.timePicker || $ || ge ? h("div", {
      class: "".concat(a, "-footer-btn")
    }, [ge, ne, fe, ze]) : null])])]);
  }
});
const O3 = w3;
var S3 = K({
  name: "ACheckableTag",
  props: {
    prefixCls: i.string,
    checked: i.looseBool,
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  emits: ["update:checked", "change", "click"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = Yr("tag", e), s = o.prefixCls, l = function(f) {
      var d = e.checked;
      a("update:checked", !d), a("change", !d), a("click", f);
    }, u = W(function() {
      var c;
      return Z(s.value, (c = {}, S(c, "".concat(s.value, "-checkable"), !0), S(c, "".concat(s.value, "-checkable-checked"), e.checked), c));
    });
    return function() {
      var c;
      return h("span", {
        class: u.value,
        onClick: l
      }, [(c = r.default) === null || c === void 0 ? void 0 : c.call(r)]);
    };
  }
});
const Uu = S3;
var _3 = new RegExp("^(".concat(Mb.join("|"), ")(-inverse)?$")), x3 = new RegExp("^(".concat(X4.join("|"), ")$")), P3 = {
  prefixCls: i.string,
  color: {
    type: String
  },
  closable: i.looseBool.def(!1),
  closeIcon: i.VNodeChild,
  visible: i.looseBool,
  onClose: {
    type: Function
  },
  icon: i.VNodeChild
}, bo = K({
  name: "ATag",
  props: P3,
  emits: ["update:visible", "close"],
  slots: ["closeIcon", "icon"],
  setup: function(e, n) {
    var r = n.slots, a = n.emit, o = n.attrs, s = Yr("tag", e), l = s.prefixCls, u = s.direction, c = Q(!0);
    Mo(function() {
      e.visible !== void 0 && (c.value = e.visible);
    });
    var f = function(v) {
      v.stopPropagation(), a("update:visible", !1), a("close", v), !v.defaultPrevented && e.visible === void 0 && (c.value = !1);
    }, d = W(function() {
      var m = e.color;
      return m ? _3.test(m) || x3.test(m) : !1;
    }), p = W(function() {
      var m;
      return Z(l.value, (m = {}, S(m, "".concat(l.value, "-").concat(e.color), d.value), S(m, "".concat(l.value, "-has-color"), e.color && !d.value), S(m, "".concat(l.value, "-hidden"), !c.value), S(m, "".concat(l.value, "-rtl"), u.value === "rtl"), m));
    });
    return function() {
      var m, v, g, C = e.icon, y = C === void 0 ? (m = r.icon) === null || m === void 0 ? void 0 : m.call(r) : C, O = e.color, w = e.closeIcon, _ = w === void 0 ? (v = r.closeIcon) === null || v === void 0 ? void 0 : v.call(r) : w, x = e.closable, P = x === void 0 ? !1 : x, T = function() {
        return P ? _ ? h("div", {
          class: "".concat(l.value, "-close-icon"),
          onClick: f
        }, [_]) : h(Wo, {
          class: "".concat(l.value, "-close-icon"),
          onClick: f
        }, null) : null;
      }, M = {
        backgroundColor: O && !d.value ? O : void 0
      }, $ = y || null, k = (g = r.default) === null || g === void 0 ? void 0 : g.call(r), V = $ ? h(mt, null, [$, h("span", null, [k])]) : k, I = "onClick" in o, F = h("span", {
        class: p.value,
        style: M
      }, [V, T()]);
      return I ? h(Pb, null, {
        default: function() {
          return [F];
        }
      }) : F;
    };
  }
});
bo.CheckableTag = Uu;
bo.install = function(t) {
  return t.component(bo.name, bo), t.component(Uu.name, Uu), t;
};
const T3 = bo;
var ll = {
  name: i.string,
  transitionName: i.string,
  prefixCls: i.string,
  inputPrefixCls: i.string,
  format: i.oneOfType([i.string, i.array, i.func]),
  disabled: i.looseBool,
  allowClear: i.looseBool,
  suffixIcon: i.any,
  popupStyle: i.object,
  dropdownClassName: i.string,
  locale: i.any,
  localeCode: i.string,
  size: i.oneOf(ke("large", "small", "default")),
  getCalendarContainer: i.func,
  open: i.looseBool,
  disabledDate: i.func,
  showToday: i.looseBool,
  dateRender: i.any,
  pickerClass: i.string,
  pickerInputClass: i.string,
  timePicker: i.any,
  autofocus: i.looseBool,
  tagPrefixCls: i.string,
  tabindex: i.oneOfType([i.string, i.number]),
  align: i.object.def(function() {
    return {};
  }),
  inputReadOnly: i.looseBool,
  valueFormat: i.string,
  onOpenChange: i.func,
  onFocus: i.func,
  onBlur: i.func,
  //'onUpdate:value': PropTypes.func,
  onMouseenter: i.func,
  onMouseleave: i.func
}, Lf = {
  value: {
    type: [String, Object]
  },
  defaultValue: {
    type: [String, Object]
  },
  defaultPickerValue: {
    type: [String, Object]
  },
  renderExtraFooter: i.any,
  placeholder: i.string,
  onChange: i.func
}, iv = b(b(b({}, ll), Lf), {
  showTime: Qn(i.oneOfType([i.object, i.looseBool])),
  open: i.looseBool,
  disabledTime: i.func,
  mode: i.oneOf(ke("time", "date", "month", "year", "decade")),
  onOpenChange: i.func,
  onPanelChange: i.func,
  onOk: i.func
}), sv = b(b(b({}, ll), Lf), {
  placeholder: i.string,
  monthCellContentRender: i.func
}), my = b(b({}, ll), {
  tagPrefixCls: i.string,
  value: {
    type: Array
  },
  defaultValue: {
    type: Array
  },
  defaultPickerValue: {
    type: Array
  },
  timePicker: i.any,
  showTime: Qn(i.oneOfType([i.object, i.looseBool])),
  ranges: i.object,
  placeholder: i.arrayOf(String),
  mode: i.oneOfType([i.string, i.arrayOf(String)]),
  separator: i.any,
  disabledTime: i.func,
  showToday: i.looseBool,
  renderExtraFooter: i.any,
  onChange: i.func,
  onCalendarChange: i.func,
  onOk: i.func,
  onPanelChange: i.func,
  onMouseenter: i.func,
  onMouseleave: i.func
}), gy = b(b(b({}, ll), Lf), {
  placeholder: i.string
}), by = function(e, n) {
  var r, a = n.attrs, o, s, l = a.suffixIcon, u = a.prefixCls;
  return (l && vn(l) ? je(l, {
    class: Z((r = {}, S(r, (o = l.props) === null || o === void 0 ? void 0 : o.class, (s = l.props) === null || s === void 0 ? void 0 : s.class), S(r, "".concat(u, "-picker-icon"), !0), r))
  }) : h("span", {
    class: "".concat(u, "-picker-icon")
  }, [l])) || h(Bf, {
    class: "".concat(u, "-picker-icon")
  }, null);
};
by.inheritAttrs = !1;
const yy = by;
function nu(t, e) {
  var n = ht(t, 2), r = n[0], a = n[1];
  if (!(!r && !a)) {
    if (e && e[0] === "month")
      return [r, a];
    var o = a && a.isSame(r, "month") ? a.clone().add(1, "month") : a;
    return [r, o];
  }
}
function E3(t) {
  if (t)
    return Array.isArray(t) ? t : [t, t.clone().add(1, "month")];
}
function k3(t) {
  return Array.isArray(t) ? t.length === 0 || t.every(function(e) {
    return !e;
  }) : !1;
}
function lv(t, e) {
  if (e && !(!t || t.length === 0)) {
    var n = ht(t, 2), r = n[0], a = n[1];
    r && r.locale(e), a && a.locale(e);
  }
}
const D3 = K({
  name: "ARangePicker",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Ba(my, {
    allowClear: !0,
    showToday: !1,
    separator: "~"
  }),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      picker: null,
      sTagPrefixCls: void 0,
      sPrefixCls: ""
    };
  },
  data: function() {
    var e = this.value || this.defaultValue || [], n = ht(e, 2), r = n[0], a = n[1];
    if (r && !Wt(R).isMoment(r) || a && !Wt(R).isMoment(a))
      throw new Error("The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, see: https://u.ant.design/date-picker-value");
    var o = !e || k3(e) ? this.defaultPickerValue : e;
    return {
      sValue: e,
      sShowDate: E3(o || Wt(R)()),
      sOpen: this.open,
      sHoverValue: []
    };
  },
  watch: {
    value: function(e) {
      var n = e || [], r = {
        sValue: n
      };
      i$(e, this.sValue) || (r = b(b({}, r), {
        sShowDate: nu(n, this.mode) || this.sShowDate
      })), this.setState(r);
    },
    open: function(e) {
      var n = {
        sOpen: e
      };
      this.setState(n);
    },
    sOpen: function(e, n) {
      var r = this;
      Le(function() {
        !Se(r, "open") && n && !e && r.focus();
      });
    }
  },
  methods: {
    setValue: function(e, n) {
      this.handleChange(e), (n || !this.showTime) && !Se(this, "open") && this.setState({
        sOpen: !1
      });
    },
    savePicker: function(e) {
      this.picker = e;
    },
    clearSelection: function(e) {
      e.preventDefault(), e.stopPropagation(), this.setState({
        sValue: []
      }), this.handleChange([]);
    },
    clearHoverValue: function() {
      this.setState({
        sHoverValue: []
      });
    },
    handleChange: function(e) {
      Se(this, "value") || this.setState(function(o) {
        var s = o.sShowDate;
        return {
          sValue: e,
          sShowDate: nu(e) || s
        };
      }), e[0] && e[1] && e[0].diff(e[1]) > 0 && (e[1] = void 0);
      var n = ht(e, 2), r = n[0], a = n[1];
      this.$emit("change", e, [ca(r, this.format), ca(a, this.format)]);
    },
    handleOpenChange: function(e) {
      Se(this, "open") || this.setState({
        sOpen: e
      }), e === !1 && this.clearHoverValue(), this.$emit("openChange", e);
    },
    handleShowDateChange: function(e) {
      this.setState({
        sShowDate: e
      });
    },
    handleHoverChange: function(e) {
      this.setState({
        sHoverValue: e
      });
    },
    handleRangeMouseLeave: function() {
      this.sOpen && this.clearHoverValue();
    },
    handleCalendarInputSelect: function(e) {
      var n = ht(e, 1), r = n[0];
      r && this.setState(function(a) {
        var o = a.sShowDate;
        return {
          sValue: e,
          sShowDate: nu(e) || o
        };
      });
    },
    handleRangeClick: function(e) {
      typeof e == "function" && (e = e()), this.setValue(e, !0), this.$emit("ok", e), this.$emit("openChange", !1);
    },
    onMouseEnter: function(e) {
      this.$emit("mouseenter", e);
    },
    onMouseLeave: function(e) {
      this.$emit("mouseleave", e);
    },
    focus: function() {
      this.picker.focus();
    },
    blur: function() {
      this.picker.blur();
    },
    renderFooter: function() {
      var e = this, n = this.ranges, r = this.$slots, a = this.sPrefixCls, o = this.sTagPrefixCls, s = this.renderExtraFooter || r.renderExtraFooter;
      if (!n && !s)
        return null;
      var l = s ? h("div", {
        class: "".concat(a, "-footer-extra"),
        key: "extra"
      }, [typeof s == "function" ? s() : s]) : null, u = n && Object.keys(n).map(function(f) {
        var d = n[f], p = typeof d == "function" ? d.call(e) : d;
        return h(T3, {
          key: f,
          prefixCls: o,
          color: "blue",
          onClick: function() {
            return e.handleRangeClick(d);
          },
          onMouseenter: function() {
            return e.setState({
              sHoverValue: p
            });
          },
          onMouseleave: e.handleRangeMouseLeave
        }, {
          default: function() {
            return [f];
          }
        });
      }), c = u && u.length > 0 ? h("div", {
        class: "".concat(a, "-footer-extra ").concat(a, "-range-quick-selector"),
        key: "range"
      }, [u]) : null;
      return [c, l];
    }
  },
  render: function() {
    var e, n = this, r = b(b({}, me(this)), this.$attrs), a = ce(this, "suffixIcon");
    a = Array.isArray(a) ? a[0] : a;
    var o = this.sValue, s = this.sShowDate, l = this.sHoverValue, u = this.sOpen, c = this.$slots, f = r.prefixCls, d = r.tagPrefixCls, p = r.popupStyle, m = r.disabledDate, v = r.disabledTime, g = r.showTime, C = r.showToday, y = r.ranges, O = r.locale, w = r.localeCode, _ = r.format, x = r.separator, P = r.inputReadOnly, T = r.style, M = r.onCalendarChange, $ = r.onOk, k = r.onBlur, V = r.onFocus, I = r.onPanelChange, F = this.configProvider.getPrefixCls, B = F("calendar", f), E = F("tag", d);
    this.sPrefixCls = B, this.sTagPrefixCls = E;
    var j = r.dateRender || c.dateRender;
    lv(o, w), lv(s, w);
    var D = Z((e = {}, S(e, "".concat(B, "-time"), g), S(e, "".concat(B, "-range-with-ranges"), y), e)), N = {
      onChange: this.handleChange
    }, U = {
      onOk: this.handleChange
    };
    r.timePicker ? N.onChange = function(Y) {
      return n.handleChange(Y);
    } : U = {}, "mode" in r && (U.mode = r.mode);
    var L = Array.isArray(r.placeholder) ? r.placeholder[0] : O.lang.rangePlaceholder[0], ne = Array.isArray(r.placeholder) ? r.placeholder[1] : O.lang.rangePlaceholder[1], ie = b(b({}, U), {
      separator: x,
      format: _,
      prefixCls: B,
      renderFooter: this.renderFooter,
      timePicker: r.timePicker,
      disabledDate: m,
      disabledTime: v,
      dateInputPlaceholder: [L, ne],
      locale: O.lang,
      dateRender: j,
      value: s,
      hoverValue: l,
      showToday: C,
      inputReadOnly: P,
      onChange: M,
      onOk: $,
      onValueChange: this.handleShowDateChange,
      onHoverChange: this.handleHoverChange,
      onPanelChange: I,
      onInputSelect: this.handleCalendarInputSelect,
      class: D
    }), fe = h(O3, ie, c), $e = {};
    r.showTime && ($e.width = "350px");
    var ze = ht(o, 2), Te = ze[0], ge = ze[1], Re = !r.disabled && r.allowClear && o && (Te || ge) ? h(lr, {
      class: "".concat(B, "-picker-clear"),
      onClick: this.clearSelection
    }, null) : null, tt = h(yy, {
      suffixIcon: a,
      prefixCls: B
    }, null), ft = function(X) {
      var Ee = X.value, st = ht(Ee, 2), bt = st[0], nt = st[1];
      return h("span", {
        class: r.pickerInputClass
      }, [h("input", {
        disabled: r.disabled,
        readonly: !0,
        value: ca(bt, r.format),
        placeholder: L,
        class: "".concat(B, "-range-picker-input"),
        tabindex: -1
      }, null), h("span", {
        class: "".concat(B, "-range-picker-separator")
      }, [Me(" "), x, Me(" ")]), h("input", {
        disabled: r.disabled,
        readonly: !0,
        value: ca(nt, r.format),
        placeholder: ne,
        class: "".concat(B, "-range-picker-input"),
        tabindex: -1
      }, null), Re, tt]);
    }, A = b(b(b({}, r), N), {
      calendar: fe,
      value: o,
      open: u,
      prefixCls: "".concat(B, "-picker-container"),
      onOpenChange: this.handleOpenChange,
      style: p
    });
    return h("span", H({
      ref: this.savePicker,
      id: r.id,
      class: Z(r.class, r.pickerClass),
      style: b(b({}, $e), T),
      tabindex: r.disabled ? -1 : 0,
      onFocus: V,
      onBlur: k,
      onMouseenter: this.onMouseEnter,
      onMouseleave: this.onMouseLeave
    }, ic(r)), [h(Rf, A, b({
      default: ft
    }, c))]);
  }
});
function $3(t, e) {
  return t && t.format(e) || "";
}
function uv() {
}
const I3 = K({
  name: "AWeekPicker",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Ba(gy, {
    allowClear: !0
  }),
  setup: function() {
    return {
      configProvider: ye("configProvider", He),
      prevState: {},
      input: void 0,
      sPrefixCls: void 0
    };
  },
  data: function() {
    var e = this.value || this.defaultValue;
    if (e && !Wt(R).isMoment(e))
      throw new Error("The value/defaultValue of WeekPicker or MonthPicker must be a moment object");
    return {
      _value: e,
      _open: this.open
    };
  },
  watch: {
    value: function(e) {
      var n = {
        _value: e
      };
      this.setState(n), this.prevState = b(b({}, this.$data), n);
    },
    open: function(e) {
      var n = {
        _open: e
      };
      this.setState(n), this.prevState = b(b({}, this.$data), n);
    },
    _open: function(e, n) {
      var r = this;
      Le(function() {
        !Se(r, "open") && n && !e && r.focus();
      });
    }
  },
  mounted: function() {
    this.prevState = b({}, this.$data);
  },
  updated: function() {
    var e = this;
    Le(function() {
      !Se(e, "open") && e.prevState._open && !e._open && e.focus();
    });
  },
  methods: {
    saveInput: function(e) {
      this.input = e;
    },
    weekDateRender: function(e) {
      var n = e.current, r = this.$data._value, a = this.sPrefixCls, o = this.$slots, s = this.dateRender || o.dateRender, l = s ? s({
        current: n
      }) : n.date();
      return r && n.year() === r.year() && n.week() === r.week() ? h("div", {
        class: "".concat(a, "-selected-day")
      }, [h("div", {
        class: "".concat(a, "-date")
      }, [l])]) : h("div", {
        class: "".concat(a, "-date")
      }, [l]);
    },
    handleChange: function(e) {
      Se(this, "value") || this.setState({
        _value: e
      }), this.$emit("change", e, $3(e, this.format));
    },
    handleOpenChange: function(e) {
      Se(this, "open") || this.setState({
        _open: e
      }), this.$emit("openChange", e);
    },
    clearSelection: function(e) {
      e.preventDefault(), e.stopPropagation(), this.handleChange(null);
    },
    focus: function() {
      this.input.focus();
    },
    blur: function() {
      this.input.blur();
    },
    renderFooter: function() {
      var e = this.sPrefixCls, n = this.$slots, r = this.renderExtraFooter || n.renderExtraFooter;
      return r ? h("div", {
        class: "".concat(e, "-footer-extra")
      }, [r.apply(void 0, arguments)]) : null;
    }
  },
  render: function() {
    var e = this, n = b(b({}, me(this)), this.$attrs), r = ce(this, "suffixIcon");
    r = Array.isArray(r) ? r[0] : r;
    var a = this.prefixCls, o = this.disabled, s = this.pickerClass, l = this.popupStyle, u = this.pickerInputClass, c = this.format, f = this.allowClear, d = this.locale, p = this.localeCode, m = this.disabledDate, v = this.defaultPickerValue, g = this.$data, C = this.$slots, y = this.configProvider.getPrefixCls, O = y("calendar", a);
    this.sPrefixCls = O;
    var w = g._value, _ = g._open, x = n.class, P = n.style, T = n.id, M = n.onFocus, $ = M === void 0 ? uv : M, k = n.onBlur, V = k === void 0 ? uv : k;
    w && p && w.locale(p);
    var I = Se(this, "placeholder") ? this.placeholder : d.lang.placeholder, F = this.dateRender || C.dateRender || this.weekDateRender, B = h(fy, {
      showWeekNumber: !0,
      dateRender: F,
      prefixCls: O,
      format: c,
      locale: d.lang,
      showDateInput: !1,
      showToday: !1,
      disabledDate: m,
      renderFooter: this.renderFooter,
      defaultValue: v
    }, null), E = !o && f && g._value ? h(lr, {
      class: "".concat(O, "-picker-clear"),
      onClick: this.clearSelection
    }, null) : null, j = h(yy, {
      suffixIcon: r,
      prefixCls: O
    }, null), D = function(L) {
      var ne = L.value;
      return h("span", {
        style: {
          display: "inline-block",
          width: "100%"
        }
      }, [h("input", {
        ref: e.saveInput,
        disabled: o,
        readonly: !0,
        value: ne && ne.format(c) || "",
        placeholder: I,
        class: u,
        onFocus: $,
        onBlur: V
      }, null), E, j]);
    }, N = b(b({}, n), {
      calendar: B,
      prefixCls: "".concat(O, "-picker-container"),
      value: w,
      open: _,
      onChange: this.handleChange,
      onOpenChange: this.handleOpenChange,
      style: l
    });
    return h("span", H({
      class: Z(x, s),
      style: P,
      id: T
    }, ic(n)), [h(Rf, N, b({
      default: D
    }, C))]);
  }
});
var M3 = sl(D3, my, "date"), A3 = sl(I3, gy, "week"), fn = sl(hy(fy, iv, "ADatePicker"), iv, "date"), N3 = sl(hy(dy, sv, "AMonthPicker"), sv, "month");
b(fn, {
  RangePicker: M3,
  MonthPicker: N3,
  WeekPicker: A3
});
fn.install = function(t) {
  return t.component(fn.name, fn), t.component(fn.RangePicker.name, fn.RangePicker), t.component(fn.MonthPicker.name, fn.MonthPicker), t.component(fn.WeekPicker.name, fn.WeekPicker), t;
};
const V3 = fn;
var R3 = 1, F3 = 2;
function B3(t, e, n, r) {
  var a = n.length, o = a, s = !r;
  if (t == null)
    return !o;
  for (t = Object(t); a--; ) {
    var l = n[a];
    if (s && l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
      return !1;
  }
  for (; ++a < o; ) {
    l = n[a];
    var u = l[0], c = t[u], f = l[1];
    if (s && l[2]) {
      if (c === void 0 && !(u in t))
        return !1;
    } else {
      var d = new Dn();
      if (r)
        var p = r(c, f, u, t, e, d);
      if (!(p === void 0 ? Nf(f, c, R3 | F3, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function Cy(t) {
  return t === t && !tr(t);
}
function j3(t) {
  for (var e = Ho(t), n = e.length; n--; ) {
    var r = e[n], a = t[r];
    e[n] = [r, a, Cy(a)];
  }
  return e;
}
function wy(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function L3(t) {
  var e = j3(t);
  return e.length == 1 && e[0][2] ? wy(e[0][0], e[0][1]) : function(n) {
    return n === t || B3(n, t, e);
  };
}
function H3(t, e, n) {
  var r = t == null ? void 0 : of(t, e);
  return r === void 0 ? n : r;
}
function z3(t, e) {
  return t != null && e in Object(t);
}
function Y3(t, e, n) {
  e = il(e, t);
  for (var r = -1, a = e.length, o = !1; ++r < a; ) {
    var s = zo(e[r]);
    if (!(o = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return o || ++r != a ? o : (a = t == null ? 0 : t.length, !!a && qc(a) && eb(s, a) && (nn(t) || Kc(t)));
}
function W3(t, e) {
  return t != null && Y3(t, e, z3);
}
var U3 = 1, G3 = 2;
function K3(t, e) {
  return rf(t) && Cy(e) ? wy(zo(t), e) : function(n) {
    var r = H3(n, t);
    return r === void 0 && r === e ? W3(n, t) : Nf(e, r, U3 | G3);
  };
}
function q3(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function X3(t) {
  return function(e) {
    return of(e, t);
  };
}
function Z3(t) {
  return rf(t) ? q3(zo(t)) : X3(t);
}
function Hf(t) {
  return typeof t == "function" ? t : t == null ? pb : typeof t == "object" ? nn(t) ? K3(t[0], t[1]) : L3(t) : Z3(t);
}
var Q3 = Math.max;
function J3(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var a = n == null ? 0 : JI(n);
  return a < 0 && (a = Q3(r + a, 0)), Vb(t, Hf(e), a);
}
var eA = {
  disabled: i.looseBool,
  activeClassName: i.string,
  activeStyle: i.any
  // onTouchStart: PropTypes.func,
  // onTouchEnd: PropTypes.func,
  // onTouchCancel: PropTypes.func,
  // onMouseDown: PropTypes.func,
  // onMouseUp: PropTypes.func,
  // onMouseLeave: PropTypes.func,
};
const tA = K({
  name: "TouchFeedback",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Hr(eA, {
    disabled: !1
  }),
  data: function() {
    return this.child = null, {
      active: !1
    };
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.disabled && e.active && e.setState({
        active: !1
      });
    });
  },
  methods: {
    triggerEvent: function(e, n, r) {
      var a = "on".concat(e), o = this.child;
      o.props[a] && o.props[a](r), n !== this.active && this.setState({
        active: n
      });
    },
    onTouchStart: function(e) {
      this.triggerEvent("Touchstart", !0, e);
    },
    onTouchMove: function(e) {
      this.triggerEvent("Touchmove", !1, e);
    },
    onTouchEnd: function(e) {
      this.triggerEvent("Touchend", !1, e);
    },
    onTouchCancel: function(e) {
      this.triggerEvent("Touchcancel", !1, e);
    },
    onMouseDown: function(e) {
      this.triggerEvent("Mousedown", !0, e);
    },
    onMouseUp: function(e) {
      this.triggerEvent("Mouseup", !1, e);
    },
    onMouseLeave: function(e) {
      this.triggerEvent("Mouseleave", !1, e);
    }
  },
  render: function() {
    var e, n = this.$props, r = n.disabled, a = n.activeClassName, o = a === void 0 ? "" : a, s = n.activeStyle, l = s === void 0 ? {} : s, u = et(this);
    if (u.length !== 1)
      return bn(!1, "m-feedback组件只能包含一个子元素"), null;
    var c = r ? void 0 : (e = {}, S(e, ct ? "onTouchstartPassive" : "onTouchstart", this.onTouchStart), S(e, ct ? "onTouchmovePassive" : "onTouchmove", this.onTouchMove), S(e, "onTouchend", this.onTouchEnd), S(e, "onTouchcancel", this.onTouchCancel), S(e, "onMousedown", this.onMouseDown), S(e, "onMouseup", this.onMouseUp), S(e, "onMouseleave", this.onMouseLeave), e);
    if (u = u[0], this.child = u, !r && this.active) {
      var f = u.props, d = f.style, p = f.class;
      return l !== !1 && (l && (d = b(b({}, d), l)), p = Z(p, o)), je(u, b({
        class: p,
        style: d
      }, c));
    }
    return je(u, c);
  }
});
var nA = {
  name: "InputHandler",
  inheritAttrs: !1,
  props: {
    prefixCls: i.string,
    disabled: i.looseBool
  },
  render: function() {
    var e = this, n = this.$props, r = n.prefixCls, a = n.disabled, o = {
      disabled: a,
      activeClassName: "".concat(r, "-handler-active")
    };
    return h(tA, o, {
      default: function() {
        return [h("span", e.$attrs, [et(e)])];
      }
    });
  }
};
const cv = nA;
function fv(t) {
  t.preventDefault();
}
function rA(t) {
  return t.replace(/[^\w\.-]+/g, "");
}
var aA = 200, oA = 600, iA = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, ro = function(e) {
  return e != null;
}, ru = function(e, n) {
  return n === e || typeof n == "number" && typeof e == "number" && isNaN(n) && isNaN(e);
}, sA = {
  value: i.oneOfType([i.number, i.string]),
  defaultValue: i.oneOfType([i.number, i.string]),
  focusOnUpDown: i.looseBool,
  autofocus: i.looseBool,
  // onChange: PropTypes.func,
  // onKeyDown: PropTypes.func,
  // onKeyUp: PropTypes.func,
  prefixCls: i.string,
  tabindex: i.oneOfType([i.string, i.number]),
  placeholder: i.string,
  disabled: i.looseBool,
  // onFocus: PropTypes.func,
  // onBlur: PropTypes.func,
  readonly: i.looseBool,
  max: i.number,
  min: i.number,
  step: i.oneOfType([i.number, i.string]),
  upHandler: i.any,
  downHandler: i.any,
  useTouch: i.looseBool,
  formatter: i.func,
  parser: i.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onMouseOver: PropTypes.func,
  // onMouseOut: PropTypes.func,
  precision: i.number,
  required: i.looseBool,
  pattern: i.string,
  decimalSeparator: i.string,
  autocomplete: i.string,
  title: i.string,
  name: i.string,
  id: i.string,
  type: i.string,
  maxlength: i.any
};
const lA = K({
  name: "VCInputNumber",
  mixins: [Ce],
  inheritAttrs: !1,
  // model: {
  //   prop: 'value',
  //   event: 'change',
  // },
  props: Hr(sA, {
    focusOnUpDown: !0,
    useTouch: !1,
    prefixCls: "rc-input-number",
    min: -iA,
    step: 1,
    parser: rA,
    required: !1,
    autocomplete: "off"
  }),
  data: function() {
    var e = me(this);
    this.prevProps = b({}, e);
    var n;
    "value" in e ? n = this.value : n = this.defaultValue;
    var r = this.getValidValue(this.toNumber(n));
    return {
      inputValue: this.toPrecisionAsStep(r),
      sValue: r,
      focused: this.autofocus
    };
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.updatedFunc();
    });
  },
  updated: function() {
    var e = this, n = this.$props, r = n.value, a = n.max, o = n.min, s = this.$data.focused, l = this.prevProps, u = me(this);
    if (l) {
      if (!ru(l.value, r) || !ru(l.max, a) || !ru(l.min, o)) {
        var c = s ? r : this.getValidValue(r), f;
        this.pressingUpOrDown ? f = c : this.inputting ? f = this.rawInput : f = this.toPrecisionAsStep(c), this.setState({
          // eslint-disable-line
          sValue: c,
          inputValue: f
        });
      }
      var d = "value" in u ? r : this.$data.sValue;
      "max" in u && l.max !== a && typeof d == "number" && d > a && (this.__emit("update:value", a), this.__emit("change", a)), "min" in u && l.min !== o && typeof d == "number" && d < o && (this.__emit("update:value", o), this.__emit("change", o));
    }
    this.prevProps = b({}, u), this.$nextTick(function() {
      e.updatedFunc();
    });
  },
  beforeUnmount: function() {
    this.stop();
  },
  methods: {
    updatedFunc: function() {
      var e = this.inputRef;
      try {
        if (this.cursorStart !== void 0 && this.$data.focused) {
          if (
            // If not match full str, try to match part of str
            !this.partRestoreByAfter(this.cursorAfter) && this.$data.sValue !== this.value
          ) {
            var n = this.cursorStart + 1;
            this.cursorAfter ? this.lastKeyCode === oe.BACKSPACE ? n = this.cursorStart - 1 : this.lastKeyCode === oe.DELETE && (n = this.cursorStart) : n = e.value.length, this.fixCaret(n, n);
          } else if (this.currentValue === e.value)
            switch (this.lastKeyCode) {
              case oe.BACKSPACE:
                this.fixCaret(this.cursorStart - 1, this.cursorStart - 1);
                break;
              case oe.DELETE:
                this.fixCaret(this.cursorStart + 1, this.cursorStart + 1);
                break;
              default:
            }
        }
      } catch {
      }
      this.lastKeyCode = null, this.pressingUpOrDown && (this.focusOnUpDown && this.$data.focused && document.activeElement !== e && this.focus(), this.pressingUpOrDown = !1);
    },
    onKeyDown: function(e) {
      if (e.keyCode === oe.UP) {
        var n = this.getRatio(e);
        this.up(e, n), this.stop();
      } else if (e.keyCode === oe.DOWN) {
        var r = this.getRatio(e);
        this.down(e, r), this.stop();
      } else
        e.keyCode === oe.ENTER && this.__emit("pressEnter", e);
      this.recordCursorPosition(), this.lastKeyCode = e.keyCode;
      for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
        o[s - 1] = arguments[s];
      this.__emit.apply(this, ["keydown", e].concat(o));
    },
    onKeyUp: function(e) {
      this.stop(), this.recordCursorPosition();
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        r[a - 1] = arguments[a];
      this.__emit.apply(this, ["keyup", e].concat(r));
    },
    onTrigger: function(e) {
      if (e.target.composing)
        return !1;
      this.onChange(e);
    },
    onChange: function(e) {
      this.$data.focused && (this.inputting = !0), this.rawInput = this.parser(this.getValueFromEvent(e)), this.setState({
        inputValue: this.rawInput
      });
      var n = this.toNumber(this.rawInput);
      this.__emit("update:value", n), this.__emit("change", n);
    },
    onFocus: function() {
      this.setState({
        focused: !0
      });
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      this.__emit.apply(this, ["focus"].concat(n));
    },
    onBlur: function() {
      this.inputting = !1, this.setState({
        focused: !1
      });
      var e = this.getCurrentValidValue(this.$data.inputValue), n = this.setValue(e);
      if (this.$attrs.onBlur && this.inputRef) {
        var r = this.inputRef.value, a = this.getInputDisplayValue({
          focused: !1,
          sValue: n
        });
        this.inputRef.value = a;
        for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
          s[l] = arguments[l];
        this.__emit.apply(this, ["blur"].concat(s)), this.inputRef.value = r;
      }
    },
    getCurrentValidValue: function(e) {
      var n = e;
      return n === "" ? n = "" : this.isNotCompleteNumber(parseFloat(n, 10)) ? n = this.$data.sValue : n = this.getValidValue(n), this.toNumber(n);
    },
    getRatio: function(e) {
      var n = 1;
      return e.metaKey || e.ctrlKey ? n = 0.1 : e.shiftKey && (n = 10), n;
    },
    getValueFromEvent: function(e) {
      var n = e.target.value.trim().replace(/。/g, ".");
      return ro(this.decimalSeparator) && (n = n.replace(this.decimalSeparator, ".")), n;
    },
    getValidValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.min, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.max, a = parseFloat(e, 10);
      return isNaN(a) ? e : (a < n && (a = n), a > r && (a = r), a);
    },
    setValue: function(e, n) {
      var r = this.$props.precision, a = this.isNotCompleteNumber(parseFloat(e, 10)) ? null : parseFloat(e, 10), o = this.$data, s = o.sValue, l = s === void 0 ? null : s, u = o.inputValue, c = u === void 0 ? null : u, f = typeof a == "number" ? a.toFixed(r) : "".concat(a), d = a !== l || f !== "".concat(c);
      return Se(this, "value") ? this.setState({
        inputValue: this.toPrecisionAsStep(this.$data.sValue)
      }, n) : this.setState({
        sValue: a,
        inputValue: this.toPrecisionAsStep(e)
      }, n), d && (this.__emit("update:value", a), this.__emit("change", a)), a;
    },
    getPrecision: function(e) {
      if (ro(this.precision))
        return this.precision;
      var n = e.toString();
      if (n.indexOf("e-") >= 0)
        return parseInt(n.slice(n.indexOf("e-") + 2), 10);
      var r = 0;
      return n.indexOf(".") >= 0 && (r = n.length - n.indexOf(".") - 1), r;
    },
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.$props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      if (ro(this.precision))
        return this.precision;
      var r = this.step, a = this.getPrecision(n), o = this.getPrecision(r), s = this.getPrecision(e);
      return e ? Math.max(s, a + o) : a + o;
    },
    getPrecisionFactor: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, r = this.getMaxPrecision(e, n);
      return Math.pow(10, r);
    },
    getInputDisplayValue: function(e) {
      var n = e || this.$data, r = n.focused, a = n.inputValue, o = n.sValue, s;
      r ? s = a : s = this.toPrecisionAsStep(o), s == null && (s = "");
      var l = this.formatWrapper(s);
      return ro(this.$props.decimalSeparator) && (l = l.toString().replace(".", this.$props.decimalSeparator)), l;
    },
    recordCursorPosition: function() {
      try {
        var e = this.inputRef;
        this.cursorStart = e.selectionStart, this.cursorEnd = e.selectionEnd, this.currentValue = e.value, this.cursorBefore = e.value.substring(0, this.cursorStart), this.cursorAfter = e.value.substring(this.cursorEnd);
      } catch {
      }
    },
    fixCaret: function(e, n) {
      if (!(e === void 0 || n === void 0 || !this.inputRef || !this.inputRef.value))
        try {
          var r = this.inputRef, a = r.selectionStart, o = r.selectionEnd;
          (e !== a || n !== o) && r.setSelectionRange(e, n);
        } catch {
        }
    },
    restoreByAfter: function(e) {
      if (e === void 0)
        return !1;
      var n = this.inputRef.value, r = n.lastIndexOf(e);
      if (r === -1)
        return !1;
      var a = this.cursorBefore.length;
      return this.lastKeyCode === oe.DELETE && this.cursorBefore.charAt(a - 1) === e[0] ? (this.fixCaret(a, a), !0) : r + e.length === n.length ? (this.fixCaret(r, r), !0) : !1;
    },
    partRestoreByAfter: function(e) {
      var n = this;
      return e === void 0 ? !1 : Array.prototype.some.call(e, function(r, a) {
        var o = e.substring(a);
        return n.restoreByAfter(o);
      });
    },
    focus: function() {
      this.inputRef.focus(), this.recordCursorPosition();
    },
    blur: function() {
      this.inputRef.blur();
    },
    formatWrapper: function(e) {
      return this.formatter ? this.formatter(e) : e;
    },
    toPrecisionAsStep: function(e) {
      if (this.isNotCompleteNumber(e) || e === "")
        return e;
      var n = Math.abs(this.getMaxPrecision(e));
      return isNaN(n) ? e.toString() : Number(e).toFixed(n);
    },
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber: function(e) {
      return isNaN(e) || e === "" || e === null || e && e.toString().indexOf(".") === e.toString().length - 1;
    },
    toNumber: function(e) {
      var n = this.$props, r = n.precision, a = n.autofocus, o = this.$data.focused, s = o === void 0 ? a : o, l = e && e.length > 16 && s;
      return this.isNotCompleteNumber(e) || l ? e : ro(r) ? Math.round(e * Math.pow(10, r)) / Math.pow(10, r) : Number(e);
    },
    upStep: function(e, n) {
      var r = this.step, a = this.getPrecisionFactor(e, n), o = Math.abs(this.getMaxPrecision(e, n)), s = ((a * e + a * r * n) / a).toFixed(o);
      return this.toNumber(s);
    },
    downStep: function(e, n) {
      var r = this.step, a = this.getPrecisionFactor(e, n), o = Math.abs(this.getMaxPrecision(e, n)), s = ((a * e - a * r * n) / a).toFixed(o);
      return this.toNumber(s);
    },
    stepFn: function(e, n) {
      var r = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o = arguments.length > 3 ? arguments[3] : void 0;
      if (this.stop(), n && n.preventDefault(), !this.disabled) {
        var s = this.max, l = this.min, u = this.getCurrentValidValue(this.$data.inputValue) || 0;
        if (!this.isNotCompleteNumber(u)) {
          var c = this["".concat(e, "Step")](u, a), f = c > s || c < l;
          c > s ? c = s : c < l && (c = l), this.setValue(c), this.setState({
            focused: !0
          }), !f && (this.autoStepTimer = setTimeout(function() {
            r[e](n, a, !0);
          }, o ? aA : oA));
        }
      }
    },
    stop: function() {
      this.autoStepTimer && clearTimeout(this.autoStepTimer);
    },
    down: function(e, n, r) {
      this.pressingUpOrDown = !0, this.stepFn("down", e, n, r);
    },
    up: function(e, n, r) {
      this.pressingUpOrDown = !0, this.stepFn("up", e, n, r);
    },
    handleInputClick: function() {
      this.__emit("click");
    },
    saveUp: function(e) {
      this.upHandlerRef = e;
    },
    saveDown: function(e) {
      this.downHandlerRef = e;
    },
    saveInput: function(e) {
      this.inputRef = e;
    },
    onCompositionstart: function(e) {
      e.target.composing = !0;
    },
    onCompositionend: function(e) {
      this.onChange(e), e.target.composing = !1;
    }
  },
  render: function() {
    var e, n = b(b({}, this.$props), this.$attrs), r = n.prefixCls, a = n.disabled, o = n.readonly, s = n.useTouch, l = n.autocomplete, u = n.upHandler, c = n.downHandler, f = n.class, d = Z((e = {}, S(e, f, f), S(e, r, !0), S(e, "".concat(r, "-disabled"), a), S(e, "".concat(r, "-focused"), this.$data.focused), e)), p = "", m = "", v = this.$data.sValue;
    if (v || v === 0)
      if (isNaN(v))
        p = "".concat(r, "-handler-up-disabled"), m = "".concat(r, "-handler-down-disabled");
      else {
        var g = Number(v);
        g >= this.max && (p = "".concat(r, "-handler-up-disabled")), g <= this.min && (m = "".concat(r, "-handler-down-disabled"));
      }
    var C = {};
    for (var y in n)
      n.hasOwnProperty(y) && (y.substr(0, 5) === "data-" || y.substr(0, 5) === "aria-" || y === "role") && (C[y] = n[y]);
    var O = !this.readonly && !this.disabled, w = this.getInputDisplayValue(), _, x;
    if (s) {
      var P, T;
      _ = (P = {}, S(P, ct ? "onTouchstartPassive" : "onTouchstart", O && !p && this.up), S(P, "onTouchend", this.stop), P), x = (T = {}, S(T, ct ? "onTouchstartPassive" : "onTouchstart", O && !m && this.down), S(T, "onTouchend", this.stop), T);
    } else
      _ = {
        onMousedown: O && !p && this.up,
        onMouseup: this.stop,
        onMouseleave: this.stop
      }, x = {
        onMousedown: O && !m && this.down,
        onMouseup: this.stop,
        onMouseleave: this.stop
      };
    var M = !!p || a || o, $ = !!m || a || o, k = b(b({
      disabled: M,
      prefixCls: r,
      unselectable: "unselectable",
      role: "button",
      "aria-label": "Increase Value",
      "aria-disabled": !!M,
      class: "".concat(r, "-handler ").concat(r, "-handler-up ").concat(p)
    }, _), {
      ref: this.saveUp
    }), V = b(b({
      disabled: $,
      prefixCls: r,
      unselectable: "unselectable",
      role: "button",
      "aria-label": "Decrease Value",
      "aria-disabled": !!$,
      class: "".concat(r, "-handler ").concat(r, "-handler-down ").concat(m)
    }, x), {
      ref: this.saveDown
    });
    return h("div", {
      class: d,
      style: n.style,
      title: n.title,
      onMouseenter: n.onMouseenter,
      onMouseleave: n.onMouseleave,
      onMouseover: n.onMouseover,
      onMouseout: n.onMouseout
    }, [h("div", {
      class: "".concat(r, "-handler-wrap")
    }, [h("span", null, [h(cv, H(H({}, k), {}, {
      key: "upHandler"
    }), {
      default: function() {
        return [u || h("span", {
          unselectable: "unselectable",
          class: "".concat(r, "-handler-up-inner"),
          onClick: fv
        }, null)];
      }
    })]), h(cv, H(H({}, V), {}, {
      key: "downHandler"
    }), {
      default: function() {
        return [c || h("span", {
          unselectable: "unselectable",
          class: "".concat(r, "-handler-down-inner"),
          onClick: fv
        }, null)];
      }
    })]), h("div", {
      class: "".concat(r, "-input-wrap")
    }, [h("input", H({
      role: "spinbutton",
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
      "aria-valuenow": v,
      required: this.required,
      type: n.type,
      placeholder: this.placeholder,
      onClick: this.handleInputClick,
      class: "".concat(r, "-input"),
      tabindex: this.tabindex,
      autocomplete: l,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeydown: O && this.onKeyDown,
      onKeyup: O && this.onKeyUp,
      autofocus: this.autofocus,
      maxlength: this.maxlength,
      readonly: this.readonly,
      disabled: this.disabled,
      max: this.max,
      min: this.min,
      step: this.step,
      name: this.name,
      title: this.title,
      id: this.id,
      onInput: this.onTrigger,
      onCompositionstart: this.onCompositionstart,
      onCompositionend: this.onCompositionend,
      ref: this.saveInput,
      value: w,
      pattern: this.pattern
    }, C), null)])]);
  }
});
var uA = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, cA = {
  prefixCls: i.string,
  min: i.number,
  max: i.number,
  value: i.oneOfType([i.number, i.string]),
  step: i.oneOfType([i.number, i.string]).def(1),
  defaultValue: i.oneOfType([i.number, i.string]),
  tabindex: i.oneOfType([i.number, i.string]),
  disabled: i.looseBool,
  size: i.oneOf(ke("large", "small", "default")),
  formatter: i.func,
  parser: i.func,
  decimalSeparator: i.string,
  placeholder: i.string,
  name: i.string,
  id: i.string,
  precision: i.number,
  autofocus: i.looseBool,
  onPressEnter: {
    type: Function
  },
  onChange: Function
}, fA = K({
  name: "AInputNumber",
  inheritAttrs: !1,
  props: cA,
  setup: function(e) {
    var n = Q(null), r = function() {
      n.value.focus();
    }, a = function() {
      n.value.blur();
    };
    return Dt(function() {
      Le(function() {
        process.env.NODE_ENV === "test" && e.autofocus && !e.disabled && r();
      });
    }), {
      configProvider: ye("configProvider", He),
      inputNumberRef: n,
      focus: r,
      blur: a
    };
  },
  render: function() {
    var e, n = b(b({}, me(this)), this.$attrs), r = n.prefixCls, a = n.size, o = n.class, s = uA(n, ["prefixCls", "size", "class"]), l = this.configProvider.getPrefixCls, u = l("input-number", r), c = Z((e = {}, S(e, "".concat(u, "-lg"), a === "large"), S(e, "".concat(u, "-sm"), a === "small"), e), o), f = h(Qb, {
      class: "".concat(u, "-handler-up-inner")
    }, null), d = h(uf, {
      class: "".concat(u, "-handler-down-inner")
    }, null), p = b(b({
      prefixCls: u,
      upHandler: f,
      downHandler: d
    }, s), {
      class: c
    });
    return h(lA, H(H({}, p), {}, {
      ref: "inputNumberRef"
    }), null);
  }
});
const dA = Cn(fA), hA = {
  mixins: [Ce],
  props: {
    duration: i.number.def(1.5),
    closable: i.looseBool,
    prefixCls: i.string,
    update: i.looseBool,
    closeIcon: i.any,
    onClose: i.func
  },
  watch: {
    duration: function() {
      this.restartCloseTimer();
    }
  },
  mounted: function() {
    this.startCloseTimer();
  },
  updated: function() {
    this.update && this.restartCloseTimer();
  },
  beforeUnmount: function() {
    this.clearCloseTimer(), this.willDestroy = !0;
  },
  methods: {
    close: function(e) {
      e && e.stopPropagation(), this.clearCloseTimer(), this.__emit("close");
    },
    startCloseTimer: function() {
      var e = this;
      this.clearCloseTimer(), !this.willDestroy && this.duration && (this.closeTimer = setTimeout(function() {
        e.close();
      }, this.duration * 1e3));
    },
    clearCloseTimer: function() {
      this.closeTimer && (clearTimeout(this.closeTimer), this.closeTimer = null);
    },
    restartCloseTimer: function() {
      this.clearCloseTimer(), this.startCloseTimer();
    }
  },
  render: function() {
    var e, n = this.prefixCls, r = this.closable, a = this.clearCloseTimer, o = this.startCloseTimer, s = this.close, l = this.$attrs, u = "".concat(n, "-notice"), c = (e = {}, S(e, "".concat(u), 1), S(e, "".concat(u, "-closable"), r), e), f = ce(this, "closeIcon");
    return h("div", {
      class: c,
      style: l.style || {
        right: "50%"
      },
      onMouseenter: a,
      onMouseleave: o
    }, [h("div", {
      class: "".concat(u, "-content")
    }, [et(this)]), r ? h("a", {
      tabindex: "0",
      onClick: s,
      class: "".concat(u, "-close")
    }, [f || h("span", {
      class: "".concat(u, "-close-x")
    }, null)]) : null]);
  }
};
var pA = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
function vA() {
}
var mA = 0, gA = Date.now();
function bA() {
  return "rcNotification_".concat(gA, "_").concat(mA++);
}
var Gu = K({
  mixins: [Ce],
  props: {
    prefixCls: i.string.def("rc-notification"),
    transitionName: i.string,
    animation: i.oneOfType([i.string, i.object]).def("fade"),
    maxCount: i.number,
    closeIcon: i.any
  },
  data: function() {
    return {
      notices: []
    };
  },
  methods: {
    getTransitionName: function() {
      var e = this.$props, n = e.transitionName;
      return !n && e.animation && (n = "".concat(e.prefixCls, "-").concat(e.animation)), n;
    },
    add: function(e) {
      var n = e.key = e.key || bA(), r = this.$props.maxCount;
      this.setState(function(a) {
        var o = a.notices, s = o.map(function(u) {
          return u.key;
        }).indexOf(n), l = o.concat();
        return s !== -1 ? l.splice(s, 1, e) : (r && o.length >= r && (e.updateKey = l[0].updateKey || l[0].key, l.shift()), l.push(e)), {
          notices: l
        };
      });
    },
    remove: function(e) {
      this.setState(function(n) {
        return {
          notices: n.notices.filter(function(r) {
            return r.key !== e;
          })
        };
      });
    }
  },
  render: function() {
    var e = this, n = this.prefixCls, r = this.notices, a = this.remove, o = this.getTransitionName, s = this.$attrs, l = Wg(o()), u = r.map(function(f, d) {
      var p = Boolean(d === r.length - 1 && f.updateKey), m = f.updateKey ? f.updateKey : f.key, v = f.content, g = f.duration, C = f.closable, y = f.onClose, O = f.style, w = f.class, _ = lo(a.bind(e, f.key), y), x = {
        prefixCls: n,
        duration: g,
        closable: C,
        update: p,
        closeIcon: ce(e, "closeIcon"),
        onClose: _,
        onClick: f.onClick || vA,
        style: O,
        class: w,
        key: m
      };
      return h(hA, x, {
        default: function() {
          return [typeof v == "function" ? v() : v];
        }
      });
    }), c = S({}, n, 1);
    return h("div", {
      class: c,
      style: s.style || {
        top: "65px",
        left: "50%"
      }
    }, [h(Uc, H({
      tag: "span"
    }, l), {
      default: function() {
        return [u];
      }
    })]);
  }
});
Gu.newInstance = function(e, n) {
  var r = e || {}, a = r.getContainer, o = r.style, s = r.class, l = pA(r, ["getContainer", "style", "class"]), u = document.createElement("div");
  if (a) {
    var c = a();
    c.appendChild(u);
  } else
    document.body.appendChild(u);
  var f = l0({
    mounted: function() {
      var p = this;
      this.$nextTick(function() {
        n({
          notice: function(v) {
            p.$refs.notification.add(v);
          },
          removeNotice: function(v) {
            p.$refs.notification.remove(v);
          },
          component: p,
          destroy: function() {
            f.unmount(u), u.parentNode && u.parentNode.removeChild(u);
          }
        });
      });
    },
    render: function() {
      var p = b(b({}, l), {
        ref: "notification",
        style: o,
        class: s
      });
      return h(Gu, p, null);
    }
  });
  f.mount(u);
};
const yA = Gu;
var Oy = 3, Sy, Ht, CA = 1, ws = "ant-message", _y = "move-up", xy = function() {
  return document.body;
}, Py;
function wA(t) {
  if (Ht) {
    t(Ht);
    return;
  }
  yA.newInstance({
    prefixCls: ws,
    transitionName: _y,
    style: {
      top: Sy
    },
    getContainer: xy,
    maxCount: Py
  }, function(e) {
    if (Ht) {
      t(Ht);
      return;
    }
    Ht = e, t(e);
  });
}
var OA = {
  info: $b,
  success: Of,
  error: lr,
  warning: _f,
  loading: Da
};
function SA(t) {
  var e = t.duration !== void 0 ? t.duration : Oy, n = OA[t.type], r = n ? h(n, null, null) : "", a = t.key || CA++, o = new Promise(function(l) {
    var u = function() {
      return typeof t.onClose == "function" && t.onClose(), l(!0);
    };
    wA(function(c) {
      c.notice({
        key: a,
        duration: e,
        style: t.style || {},
        class: t.class,
        content: function() {
          return h("div", {
            class: "".concat(ws, "-custom-content").concat(t.type ? " ".concat(ws, "-").concat(t.type) : "")
          }, [t.icon || r, h("span", null, [t.content])]);
        },
        onClose: u
      });
    });
  }), s = function() {
    Ht && Ht.removeNotice(a);
  };
  return s.then = function(l, u) {
    return o.then(l, u);
  }, s.promise = o, s;
}
function _A(t) {
  return Object.prototype.toString.call(t) === "[object Object]" && !!t.content;
}
var wa = {
  open: SA,
  config: function(e) {
    e.top !== void 0 && (Sy = e.top, Ht = null), e.duration !== void 0 && (Oy = e.duration), e.prefixCls !== void 0 && (ws = e.prefixCls), e.getContainer !== void 0 && (xy = e.getContainer), e.transitionName !== void 0 && (_y = e.transitionName, Ht = null), e.maxCount !== void 0 && (Py = e.maxCount, Ht = null);
  },
  destroy: function() {
    Ht && (Ht.destroy(), Ht = null);
  }
};
["success", "info", "warning", "error", "loading"].forEach(function(t) {
  wa[t] = function(e, n, r) {
    return _A(e) ? wa.open(b(b({}, e), {
      type: t
    })) : (typeof n == "function" && (r = n, n = void 0), wa.open({
      content: e,
      duration: n,
      type: t,
      onClose: r
    }));
  };
});
wa.warn = wa.warning;
const dv = wa;
var hv = Ab(), xA = K({
  name: "APopconfirm",
  mixins: [Ce],
  props: b(b({}, hv), {
    prefixCls: i.string,
    transitionName: i.string.def("zoom-big"),
    content: i.any,
    title: i.any,
    trigger: hv.trigger.def("click"),
    okType: {
      type: String,
      default: "primary"
    },
    disabled: i.looseBool.def(!1),
    okText: i.any,
    cancelText: i.any,
    icon: i.any,
    okButtonProps: i.object,
    cancelButtonProps: i.object,
    onConfirm: i.func,
    onCancel: i.func,
    onVisibleChange: i.func
  }),
  emits: ["update:visible", "confirm", "cancel", "visibleChange"],
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  data: function() {
    var e = me(this), n = {
      sVisible: !1
    };
    return "visible" in e && (n.sVisible = e.visible), "defaultVisible" in e && (n.sVisible = e.defaultVisible), n;
  },
  watch: {
    visible: function(e) {
      this.sVisible = e;
    }
  },
  methods: {
    onConfirmHandle: function(e) {
      this.setVisible(!1, e), this.$emit("confirm", e);
    },
    onCancelHandle: function(e) {
      this.setVisible(!1, e), this.$emit("cancel", e);
    },
    onVisibleChangeHandle: function(e) {
      var n = this.$props.disabled;
      n || this.setVisible(e);
    },
    setVisible: function(e, n) {
      Se(this, "visible") || this.setState({
        sVisible: e
      }), this.$emit("update:visible", e), this.$emit("visibleChange", e, n);
    },
    getPopupDomNode: function() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    renderOverlay: function(e, n) {
      var r = this, a = this.okType, o = this.okButtonProps, s = this.cancelButtonProps, l = ce(this, "icon") || h(_f, null, null), u = Cd(b({
        size: "small",
        onClick: this.onCancelHandle
      }, s)), c = Cd(b(b(b({}, jD(a)), {
        size: "small",
        onClick: this.onConfirmHandle
      }), o));
      return h("div", {
        class: "".concat(e, "-inner-content")
      }, [h("div", {
        class: "".concat(e, "-message")
      }, [l, h("div", {
        class: "".concat(e, "-message-title")
      }, [ce(this, "title")])]), h("div", {
        class: "".concat(e, "-buttons")
      }, [h(Xn, u, {
        default: function() {
          return [ce(r, "cancelText") || n.cancelText];
        }
      }), h(Xn, c, {
        default: function() {
          return [ce(r, "okText") || n.okText];
        }
      })])]);
    }
  },
  render: function() {
    var e = this, n, r = me(this), a = r.prefixCls, o = this.configProvider.getPrefixCls, s = o("popover", a), l = Ma(r, ["title", "content", "cancelText", "okText", "onUpdate:visible"]), u = h(Na, {
      componentName: "Popconfirm",
      defaultLocale: Ta.Popconfirm,
      children: function(d) {
        return e.renderOverlay(s, d);
      }
    }, null), c = b(b({}, l), {
      title: u,
      prefixCls: s,
      visible: this.sVisible,
      ref: "tooltip",
      onVisibleChange: this.onVisibleChangeHandle
    });
    return h(Nb, c, {
      default: function() {
        return [(n = e.$slots) === null || n === void 0 ? void 0 : n.default()];
      }
    });
  }
});
const PA = Cn(xA);
function Rr(t) {
  return !t || t < 0 ? 0 : t > 100 ? 100 : t;
}
var TA = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, EA = function(e) {
  for (var n = [], r = 0, a = Object.entries(e); r < a.length; r++) {
    var o = ht(a[r], 2), s = o[0], l = o[1], u = parseFloat(s.replace(/%/g, ""));
    if (isNaN(u))
      return {};
    n.push({
      key: u,
      value: l
    });
  }
  return n = n.sort(function(c, f) {
    return c.key - f.key;
  }), n.map(function(c) {
    var f = c.key, d = c.value;
    return "".concat(d, " ").concat(f, "%");
  }).join(", ");
}, kA = function(e) {
  var n = e.from, r = n === void 0 ? "#1890ff" : n, a = e.to, o = a === void 0 ? "#1890ff" : a, s = e.direction, l = s === void 0 ? "to right" : s, u = TA(e, ["from", "to", "direction"]);
  if (Object.keys(u).length !== 0) {
    var c = EA(u);
    return {
      backgroundImage: "linear-gradient(".concat(l, ", ").concat(c, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(l, ", ").concat(r, ", ").concat(o, ")")
  };
}, DA = function(e, n) {
  var r = n.attrs, a = n.slots, o = r.prefixCls, s = r.percent, l = r.successPercent, u = r.strokeWidth, c = r.size, f = r.strokeColor, d = r.strokeLinecap, p = r.trailColor, m;
  f && typeof f != "string" ? m = kA(f) : m = {
    background: f
  };
  var v = p ? {
    style: {
      backgroundColor: p
    }
  } : void 0, g = b({
    width: "".concat(Rr(s), "%"),
    height: "".concat(u || (c === "small" ? 6 : 8), "px"),
    background: f,
    borderRadius: d === "square" ? 0 : "100px"
  }, m), C = {
    width: "".concat(Rr(l), "%"),
    height: "".concat(u || (c === "small" ? 6 : 8), "px"),
    borderRadius: d === "square" ? 0 : ""
  }, y = l !== void 0 ? h("div", {
    class: "".concat(o, "-success-bg"),
    style: C
  }, null) : null;
  return h("div", null, [h("div", {
    class: "".concat(o, "-outer")
  }, [h("div", H({
    class: "".concat(o, "-inner")
  }, v), [h("div", {
    class: "".concat(o, "-bg"),
    style: g
  }, null), y])]), a == null ? void 0 : a.default()]);
};
const $A = DA;
function IA(t) {
  return b(b({}, t), {
    updated: function() {
      var n = this, r = Date.now(), a = !1;
      Object.keys(this.paths).forEach(function(o) {
        var s = n.paths[o];
        if (s) {
          a = !0;
          var l = s.style;
          l.transitionDuration = ".3s, .3s, .3s, .06s", n.prevTimeStamp && r - n.prevTimeStamp < 100 && (l.transitionDuration = "0s, 0s");
        }
      }), a && (this.prevTimeStamp = Date.now());
    }
  });
}
var MA = {
  // className: '',
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  // style: {},
  trailColor: "#D9D9D9",
  trailWidth: 1
}, Di = i.oneOfType([i.number, i.string]), AA = {
  // className: PropTypes.string,
  percent: i.oneOfType([Di, i.arrayOf(Di)]),
  prefixCls: i.string,
  strokeColor: i.oneOfType([i.string, i.arrayOf(i.oneOfType([i.string, i.object])), i.object]),
  strokeLinecap: i.oneOf(["butt", "round", "square"]),
  strokeWidth: Di,
  // style: PropTypes.object,
  trailColor: i.string,
  trailWidth: Di
}, NA = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}, VA = b(b({}, AA), {
  gapPosition: i.oneOf(["top", "bottom", "left", "right"]),
  gapDegree: Qn(i.oneOfType([i.number, i.string, i.looseBool]))
}), RA = b(b({}, MA), {
  gapPosition: "top"
}), pv = 0;
function vv(t) {
  return +t.replace("%", "");
}
function au(t) {
  return Array.isArray(t) ? t : [t];
}
function mv(t, e, n, r) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 ? arguments[5] : void 0, s = 50 - r / 2, l = 0, u = -s, c = 0, f = -2 * s;
  switch (o) {
    case "left":
      l = -s, u = 0, c = 2 * s, f = 0;
      break;
    case "right":
      l = s, u = 0, c = -2 * s, f = 0;
      break;
    case "bottom":
      u = s, f = 2 * s;
      break;
  }
  var d = "M 50,50 m ".concat(l, ",").concat(u, `
   a `).concat(s, ",").concat(s, " 0 1 1 ").concat(c, ",").concat(-f, `
   a `).concat(s, ",").concat(s, " 0 1 1 ").concat(-c, ",").concat(f), p = Math.PI * 2 * s, m = {
    stroke: n,
    strokeDasharray: "".concat(e / 100 * (p - a), "px ").concat(p, "px"),
    strokeDashoffset: "-".concat(a / 2 + t / 100 * (p - a), "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
    // eslint-disable-line
  };
  return {
    pathString: d,
    pathStyle: m
  };
}
var FA = K({
  name: "Circle",
  props: Hr(VA, RA),
  created: function() {
    this.paths = {}, this.gradientId = pv, pv += 1;
  },
  methods: {
    getStokeList: function() {
      var e = this, n = this.$props, r = n.prefixCls, a = n.percent, o = n.strokeColor, s = n.strokeWidth, l = n.strokeLinecap, u = n.gapDegree, c = n.gapPosition, f = au(a), d = au(o), p = 0;
      return f.map(function(m, v) {
        var g = d[v] || d[d.length - 1], C = Object.prototype.toString.call(g) === "[object Object]" ? "url(#".concat(r, "-gradient-").concat(e.gradientId, ")") : "", y = mv(p, m, g, s, u, c), O = y.pathString, w = y.pathStyle;
        p += m;
        var _ = {
          key: v,
          d: O,
          stroke: C,
          "stroke-linecap": l,
          "stroke-width": s,
          opacity: m === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: "".concat(r, "-circle-path"),
          style: w
        };
        return h("path", H({
          ref: function(P) {
            return e.paths[v] = P;
          }
        }, _), null);
      });
    }
  },
  render: function() {
    var e = this.$props, n = e.prefixCls, r = e.strokeWidth, a = e.trailWidth, o = e.gapDegree, s = e.gapPosition, l = e.trailColor, u = e.strokeLinecap, c = e.strokeColor, f = NA(e, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]), d = mv(0, 100, l, r, o, s), p = d.pathString, m = d.pathStyle;
    delete f.percent;
    var v = au(c), g = v.find(function(y) {
      return Object.prototype.toString.call(y) === "[object Object]";
    }), C = {
      d: p,
      stroke: l,
      "stroke-linecap": u,
      "stroke-width": a || r,
      "fill-opacity": "0",
      class: "".concat(n, "-circle-trail"),
      style: m
    };
    return h("svg", H({
      class: "".concat(n, "-circle"),
      viewBox: "0 0 100 100"
    }, f), [g && h("defs", null, [h("linearGradient", {
      id: "".concat(n, "-gradient-").concat(this.gradientId),
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "0%"
    }, [Object.keys(g).sort(function(y, O) {
      return vv(y) - vv(O);
    }).map(function(y, O) {
      return h("stop", {
        key: O,
        offset: y,
        "stop-color": g[y]
      }, null);
    })])]), h("path", C, null), this.getStokeList().reverse()]);
  }
});
const BA = IA(FA);
var Ty = ke("normal", "exception", "active", "success"), jA = i.oneOf(ke("line", "circle", "dashboard")), LA = i.oneOf(ke("default", "small")), Ey = {
  prefixCls: i.string,
  type: jA,
  percent: i.number,
  successPercent: i.number,
  format: i.func,
  status: i.oneOf(Ty),
  showInfo: i.looseBool,
  strokeWidth: i.number,
  strokeLinecap: i.oneOf(["butt", "round", "square"]),
  strokeColor: i.oneOfType([i.string, i.object]),
  trailColor: i.string,
  width: i.number,
  gapDegree: i.number,
  gapPosition: i.oneOf(ke("top", "bottom", "left", "right")),
  size: LA
}, HA = b(b({}, Ey), {
  progressStatus: i.string
}), gv = {
  normal: "#108ee9",
  exception: "#ff5500",
  success: "#87d068"
};
function zA(t) {
  var e = t.percent, n = t.successPercent, r = Rr(e);
  if (!n)
    return r;
  var a = Rr(n);
  return [n, Rr(r - a)];
}
function YA(t) {
  var e = t.progressStatus, n = t.successPercent, r = t.strokeColor, a = r || gv[e];
  return n ? [gv.success, a] : a;
}
var WA = K({
  props: HA,
  setup: function(e, n) {
    var r = n.slots;
    return function() {
      var a, o = e.prefixCls, s = e.width, l = e.strokeWidth, u = e.trailColor, c = e.strokeLinecap, f = e.gapPosition, d = e.gapDegree, p = e.type, m = s || 120, v = {
        width: typeof m == "number" ? "".concat(m, "px") : m,
        height: typeof m == "number" ? "".concat(m, "px") : m,
        fontSize: "".concat(m * 0.15 + 6, "px")
      }, g = l || 6, C = f || p === "dashboard" && "bottom" || "top", y = d || p === "dashboard" && 75, O = YA(e), w = Object.prototype.toString.call(O) === "[object Object]", _ = (a = {}, S(a, "".concat(o, "-inner"), !0), S(a, "".concat(o, "-circle-gradient"), w), a);
      return h("div", {
        class: _,
        style: v
      }, [h(BA, {
        percent: zA(e),
        strokeWidth: g,
        trailWidth: g,
        strokeColor: O,
        strokeLinecap: c,
        trailColor: u,
        prefixCls: o,
        gapDegree: y,
        gapPosition: C
      }, null), r == null ? void 0 : r.default()]);
    };
  }
});
const UA = WA, GA = K({
  name: "AProgress",
  props: Ba(Ey, {
    type: "line",
    percent: 0,
    showInfo: !0,
    // null for different theme definition
    trailColor: null,
    size: "default",
    gapDegree: 0,
    strokeLinecap: "round"
  }),
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  methods: {
    getPercentNumber: function() {
      var e = this.$props, n = e.successPercent, r = e.percent, a = r === void 0 ? 0 : r;
      return parseInt(n !== void 0 ? n.toString() : a.toString(), 10);
    },
    getProgressStatus: function() {
      var e = this.$props.status;
      return Ty.indexOf(e) < 0 && this.getPercentNumber() >= 100 ? "success" : e || "normal";
    },
    renderProcessInfo: function(e, n) {
      var r = this.$props, a = r.showInfo, o = r.format, s = r.type, l = r.percent, u = r.successPercent;
      if (!a)
        return null;
      var c, f = o || this.$slots.format || function(p) {
        return "".concat(p, "%");
      }, d = s === "line";
      return o || this.$slots.format || n !== "exception" && n !== "success" ? c = f(Rr(l), Rr(u)) : n === "exception" ? c = d ? h(lr, null, null) : h(Wo, null, null) : n === "success" && (c = d ? h(Of, null, null) : h(Ob, null, null)), h("span", {
        class: "".concat(e, "-text"),
        title: typeof c == "string" ? c : void 0
      }, [c]);
    }
  },
  render: function() {
    var e, n = me(this), r = n.prefixCls, a = n.size, o = n.type, s = n.showInfo, l = this.configProvider.getPrefixCls, u = l("progress", r), c = this.getProgressStatus(), f = this.renderProcessInfo(u, c), d;
    if (o === "line") {
      var p = b(b({}, n), {
        prefixCls: u
      });
      d = h($A, p, {
        default: function() {
          return [f];
        }
      });
    } else if (o === "circle" || o === "dashboard") {
      var m = b(b({}, n), {
        prefixCls: u,
        progressStatus: c
      });
      d = h(UA, m, {
        default: function() {
          return [f];
        }
      });
    }
    var v = Z(u, (e = {}, S(e, "".concat(u, "-").concat(o === "dashboard" && "circle" || o), !0), S(e, "".concat(u, "-status-").concat(c), !0), S(e, "".concat(u, "-show-info"), s), S(e, "".concat(u, "-").concat(a), a), e)), g = {
      class: v
    };
    return h("div", g, [d]);
  }
}), KA = Cn(GA);
function qA(t) {
  return function(e, n, r) {
    for (var a = -1, o = Object(e), s = r(e), l = s.length; l--; ) {
      var u = s[t ? l : ++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var XA = qA();
const ZA = XA;
var QA = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" };
const JA = QA;
function bv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      e6(t, a, n[a]);
    });
  }
  return t;
}
function e6(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var zf = function(e, n) {
  var r = bv({}, e, n.attrs);
  return h(Pe, bv({}, r, {
    icon: JA
  }), null);
};
zf.displayName = "FileOutlined";
zf.inheritAttrs = !1;
const t6 = zf;
function n6(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Vs(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var r = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return r >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[r++]
          };
        },
        e: function(c) {
          throw c;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, l;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var c = n.next();
      return o = c.done, c;
    },
    e: function(c) {
      s = !0, l = c;
    },
    f: function() {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (s)
          throw l;
      }
    }
  };
}
globalThis && globalThis.__rest;
function r6(t) {
  return Object.keys(t).reduce(function(e, n) {
    return (n.substr(0, 5) === "data-" || n.substr(0, 5) === "aria-") && (e[n] = t[n]), e;
  }, {});
}
var a6 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
const o6 = a6;
function yv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      i6(t, a, n[a]);
    });
  }
  return t;
}
function i6(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Yf = function(e, n) {
  var r = yv({}, e, n.attrs);
  return h(Pe, yv({}, r, {
    icon: o6
  }), null);
};
Yf.displayName = "CaretDownOutlined";
Yf.inheritAttrs = !1;
const Cv = Yf;
var s6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" };
const l6 = s6;
function wv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      u6(t, a, n[a]);
    });
  }
  return t;
}
function u6(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Wf = function(e, n) {
  var r = wv({}, e, n.attrs);
  return h(Pe, wv({}, r, {
    icon: l6
  }), null);
};
Wf.displayName = "EditOutlined";
Wf.inheritAttrs = !1;
const c6 = Wf;
function f6(t, e) {
  return t && t.length ? C$(t, Hf(e)) : [];
}
function d6(t, e, n, r) {
  for (var a = -1, o = t == null ? 0 : t.length; ++a < o; ) {
    var s = t[a];
    e(r, s, n(s), t);
  }
  return r;
}
function h6(t, e) {
  return t && ZA(t, e, Ho);
}
function p6(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Qc(n))
      return t(n, r);
    for (var a = n.length, o = e ? a : -1, s = Object(n); (e ? o-- : ++o < a) && r(s[o], o, s) !== !1; )
      ;
    return n;
  };
}
var v6 = p6(h6);
const m6 = v6;
function g6(t, e, n, r) {
  return m6(t, function(a, o, s) {
    e(r, a, n(a), s);
  }), r;
}
function b6(t, e) {
  return function(n, r) {
    var a = nn(n) ? d6 : g6, o = e ? e() : {};
    return a(n, t, Hf(r), o);
  };
}
var y6 = b6(function(t, e, n) {
  t[n ? 0 : 1].push(e);
}, function() {
  return [[], []];
});
const C6 = y6;
function w6(t, e) {
  var n = "cannot ".concat(t.method, " ").concat(t.action, " ").concat(e.status, "'"), r = new Error(n);
  return r.status = e.status, r.method = t.method, r.url = t.action, r;
}
function Ov(t) {
  var e = t.responseText || t.response;
  if (!e)
    return e;
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function O6(t) {
  var e = new window.XMLHttpRequest();
  t.onProgress && e.upload && (e.upload.onprogress = function(s) {
    s.total > 0 && (s.percent = s.loaded / s.total * 100), t.onProgress(s);
  });
  var n = new window.FormData();
  t.data && Object.keys(t.data).forEach(function(o) {
    var s = t.data[o];
    if (Array.isArray(s)) {
      s.forEach(function(l) {
        n.append("".concat(o, "[]"), l);
      });
      return;
    }
    n.append(o, t.data[o]);
  }), n.append(t.filename, t.file), e.onerror = function(s) {
    t.onError(s);
  }, e.onload = function() {
    if (e.status < 200 || e.status >= 300)
      return t.onError(w6(t, e), Ov(e));
    t.onSuccess(Ov(e), e);
  }, e.open(t.method, t.action, !0), t.withCredentials && "withCredentials" in e && (e.withCredentials = !0);
  var r = t.headers || {};
  r["X-Requested-With"] !== null && e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  for (var a in r)
    r.hasOwnProperty(a) && r[a] !== null && e.setRequestHeader(a, r[a]);
  return e.send(n), {
    abort: function() {
      e.abort();
    }
  };
}
var S6 = +new Date(), _6 = 0;
function Gi() {
  return "vc-upload-".concat(S6, "-").concat(++_6);
}
function x6(t, e) {
  return t.indexOf(e, t.length - e.length) !== -1;
}
const Sv = function(t, e) {
  if (t && e) {
    var n = Array.isArray(e) ? e : e.split(","), r = t.name || "", a = t.type || "", o = a.replace(/\/.*$/, "");
    return n.some(function(s) {
      var l = s.trim();
      return l.charAt(0) === "." ? x6(r.toLowerCase(), l.toLowerCase()) : /\/\*$/.test(l) ? o === l.replace(/\/.*$/, "") : a === l;
    });
  }
  return !0;
};
function P6(t, e) {
  var n = t.createReader(), r = [];
  function a() {
    n.readEntries(function(o) {
      var s = Array.prototype.slice.apply(o);
      r = r.concat(s);
      var l = !s.length;
      l ? e(r) : a();
    });
  }
  a();
}
var T6 = function(e, n, r) {
  var a = function u(c, f) {
    f = f || "", c.isFile ? c.file(function(d) {
      r(d) && (c.fullPath && !d.webkitRelativePath && (Object.defineProperties(d, {
        webkitRelativePath: {
          writable: !0
        }
      }), d.webkitRelativePath = c.fullPath.replace(/^\//, ""), Object.defineProperties(d, {
        webkitRelativePath: {
          writable: !1
        }
      })), n([d]));
    }) : c.isDirectory && P6(c, function(d) {
      d.forEach(function(p) {
        u(p, "".concat(f).concat(c.name, "/"));
      });
    });
  }, o = n6(e), s;
  try {
    for (o.s(); !(s = o.n()).done; ) {
      var l = s.value;
      a(l.webkitGetAsEntry());
    }
  } catch (u) {
    o.e(u);
  } finally {
    o.f();
  }
};
const E6 = T6;
var k6 = {
  componentTag: i.string,
  // style: PropTypes.object,
  prefixCls: i.string,
  name: i.string,
  // className: PropTypes.string,
  multiple: i.looseBool,
  directory: i.looseBool,
  disabled: i.looseBool,
  accept: i.string,
  // children: PropTypes.any,
  // onStart: PropTypes.func,
  data: i.oneOfType([i.object, i.func]),
  action: i.oneOfType([i.string, i.func]),
  headers: i.object,
  beforeUpload: i.func,
  customRequest: i.func,
  // onProgress: PropTypes.func,
  withCredentials: i.looseBool,
  openFileDialogOnClick: i.looseBool,
  transformFile: i.func,
  method: i.string
}, D6 = {
  inheritAttrs: !1,
  name: "ajaxUploader",
  mixins: [Ce],
  props: k6,
  data: function() {
    return this.reqs = {}, {
      uid: Gi()
    };
  },
  mounted: function() {
    this._isMounted = !0;
  },
  beforeUnmount: function() {
    this._isMounted = !1, this.abort();
  },
  methods: {
    onChange: function(e) {
      var n = e.target.files;
      this.uploadFiles(n), this.reset();
    },
    onClick: function() {
      var e = this.$refs.fileInputRef;
      e && e.click();
    },
    onKeyDown: function(e) {
      e.key === "Enter" && this.onClick();
    },
    onFileDrop: function(e) {
      var n = this, r = this.$props.multiple;
      if (e.preventDefault(), e.type !== "dragover")
        if (this.directory)
          E6(e.dataTransfer.items, this.uploadFiles, function(l) {
            return Sv(l, n.accept);
          });
        else {
          var a = C6(Array.prototype.slice.call(e.dataTransfer.files), function(l) {
            return Sv(l, n.accept);
          }), o = a[0], s = a[1];
          r === !1 && (o = o.slice(0, 1)), this.uploadFiles(o), s.length && this.__emit("reject", s);
        }
    },
    uploadFiles: function(e) {
      var n = this, r = Array.prototype.slice.call(e);
      r.map(function(a) {
        return a.uid = Gi(), a;
      }).forEach(function(a) {
        n.upload(a, r);
      });
    },
    upload: function(e, n) {
      var r = this;
      if (!this.beforeUpload)
        return setTimeout(function() {
          return r.post(e);
        }, 0);
      var a = this.beforeUpload(e, n);
      a && a.then ? a.then(function(o) {
        var s = Object.prototype.toString.call(o);
        return s === "[object File]" || s === "[object Blob]" ? r.post(o) : r.post(e);
      }).catch(function(o) {
        console && console.log(o);
      }) : a !== !1 && setTimeout(function() {
        return r.post(e);
      }, 0);
    },
    post: function(e) {
      var n = this;
      if (this._isMounted) {
        var r = this.$props, a = r.data, o = r.transformFile, s = o === void 0 ? function(l) {
          return l;
        } : o;
        new Promise(function(l) {
          var u = n.action;
          if (typeof u == "function")
            return l(u(e));
          l(u);
        }).then(function(l) {
          var u = e.uid, c = n.customRequest || O6, f = Promise.resolve(s(e)).catch(function(d) {
            console.error(d);
          });
          f.then(function(d) {
            typeof a == "function" && (a = a(e));
            var p = {
              action: l,
              filename: n.name,
              data: a,
              file: d,
              headers: n.headers,
              withCredentials: n.withCredentials,
              method: r.method || "post",
              onProgress: function(v) {
                n.__emit("progress", v, e);
              },
              onSuccess: function(v, g) {
                delete n.reqs[u], n.__emit("success", v, e, g);
              },
              onError: function(v, g) {
                delete n.reqs[u], n.__emit("error", v, g, e);
              }
            };
            n.reqs[u] = c(p), n.__emit("start", e);
          });
        });
      }
    },
    reset: function() {
      this.setState({
        uid: Gi()
      });
    },
    abort: function(e) {
      var n = this.reqs;
      if (e) {
        var r = e;
        e && e.uid && (r = e.uid), n[r] && n[r].abort && n[r].abort(), delete n[r];
      } else
        Object.keys(n).forEach(function(a) {
          n[a] && n[a].abort && n[a].abort(), delete n[a];
        });
    }
  },
  render: function() {
    var e, n = this, r = this.$props, a = this.$attrs, o = r.componentTag, s = r.prefixCls, l = r.disabled, u = r.multiple, c = r.accept, f = r.directory, d = r.openFileDialogOnClick, p = a.class, m = a.style, v = a.id, g = Z((e = {}, S(e, s, !0), S(e, "".concat(s, "-disabled"), l), S(e, p, p), e)), C = l ? {} : {
      onClick: d ? this.onClick : function() {
      },
      onKeydown: d ? this.onKeyDown : function() {
      },
      onDrop: this.onFileDrop,
      onDragover: this.onFileDrop
    }, y = b(b({}, C), {
      role: "button",
      tabindex: l ? null : "0",
      class: g,
      style: m
    });
    return h(o, y, {
      default: function() {
        return [h("input", {
          id: v,
          type: "file",
          ref: "fileInputRef",
          onClick: function(_) {
            return _.stopPropagation();
          },
          key: n.uid,
          style: {
            display: "none"
          },
          accept: c,
          directory: f ? "directory" : null,
          webkitdirectory: f ? "webkitdirectory" : null,
          multiple: u,
          onChange: n.onChange
        }, null), et(n)];
      }
    });
  }
};
const $6 = D6;
var I6 = {
  position: "absolute",
  top: 0,
  opacity: 0,
  filter: "alpha(opacity=0)",
  left: 0,
  zIndex: 9999
}, M6 = {
  name: "IframeUploader",
  mixins: [Ce],
  props: {
    componentTag: i.string,
    // style: PropTypes.object,
    disabled: i.looseBool,
    prefixCls: i.string,
    // className: PropTypes.string,
    accept: i.string,
    // onStart: PropTypes.func,
    multiple: i.looseBool,
    // children: PropTypes.any,
    data: i.oneOfType([i.object, i.func]),
    action: i.oneOfType([i.string, i.func]),
    name: i.string
  },
  data: function() {
    return this.file = {}, {
      uploading: !1
    };
  },
  methods: {
    onLoad: function() {
      if (this.uploading) {
        var e = this.file, n;
        try {
          var r = this.getIframeDocument(), a = r.getElementsByTagName("script")[0];
          a && a.parentNode === r.body && r.body.removeChild(a), n = r.body.innerHTML, this.__emit("success", n, e);
        } catch (o) {
          bn(!1, "cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload"), n = "cross-domain", this.__emit("error", o, null, e);
        }
        this.endUpload();
      }
    },
    onChange: function() {
      var e = this, n = this.getFormInputNode(), r = this.file = {
        uid: Gi(),
        name: n.value && n.value.substring(n.value.lastIndexOf("\\") + 1, n.value.length)
      };
      this.startUpload();
      var a = this.$props;
      if (!a.beforeUpload)
        return this.post(r);
      var o = a.beforeUpload(r);
      o && o.then ? o.then(function() {
        e.post(r);
      }, function() {
        e.endUpload();
      }) : o !== !1 ? this.post(r) : this.endUpload();
    },
    getIframeNode: function() {
      return this.$refs.iframeRef;
    },
    getIframeDocument: function() {
      return this.getIframeNode().contentDocument;
    },
    getFormNode: function() {
      return this.getIframeDocument().getElementById("form");
    },
    getFormInputNode: function() {
      return this.getIframeDocument().getElementById("input");
    },
    getFormDataNode: function() {
      return this.getIframeDocument().getElementById("data");
    },
    getFileForMultiple: function(e) {
      return this.multiple ? [e] : e;
    },
    getIframeHTML: function(e) {
      var n = "", r = "";
      if (e) {
        var a = "script";
        n = "<".concat(a, '>document.domain="').concat(e, '";</').concat(a, ">"), r = '<input name="_documentDomain" value="'.concat(e, '" />');
      }
      return `
      <!DOCTYPE html>
      <html>
      <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style>
      body,html {padding:0;margin:0;border:0;overflow:hidden;}
      </style>
      `.concat(n, `
      </head>
      <body>
      <form method="post"
      encType="multipart/form-data"
      action="" id="form"
      style="display:block;height:9999px;position:relative;overflow:hidden;">
      <input id="input" type="file"
       name="`).concat(this.name, `"
       style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>
      `).concat(r, `
      <span id="data"></span>
      </form>
      </body>
      </html>
      `);
    },
    initIframeSrc: function() {
      this.domain && (this.getIframeNode().src = `javascript:void((function(){
          var d = document;
          d.open();
          d.domain='`.concat(this.domain, `';
          d.write('');
          d.close();
        })())`));
    },
    initIframe: function() {
      var e = this.getIframeNode(), n = e.contentWindow, r;
      this.domain = this.domain || "", this.initIframeSrc();
      try {
        r = n.document;
      } catch {
        this.domain = document.domain, this.initIframeSrc(), n = e.contentWindow, r = n.document;
      }
      r.open("text/html", "replace"), r.write(this.getIframeHTML(this.domain)), r.close(), this.getFormInputNode().onchange = this.onChange;
    },
    endUpload: function() {
      this.uploading && (this.file = {}, this.uploading = !1, this.setState({
        uploading: !1
      }), this.initIframe());
    },
    startUpload: function() {
      this.uploading || (this.uploading = !0, this.setState({
        uploading: !0
      }));
    },
    updateIframeWH: function() {
      var e = Yt(this), n = this.getIframeNode();
      n.style.height = "".concat(e.offsetHeight, "px"), n.style.width = "".concat(e.offsetWidth, "px");
    },
    abort: function(e) {
      if (e) {
        var n = e;
        e && e.uid && (n = e.uid), n === this.file.uid && this.endUpload();
      } else
        this.endUpload();
    },
    post: function(e) {
      var n = this, r = this.getFormNode(), a = this.getFormDataNode(), o = this.$props.data;
      typeof o == "function" && (o = o(e));
      var s = document.createDocumentFragment();
      for (var l in o)
        if (o.hasOwnProperty(l)) {
          var u = document.createElement("input");
          u.setAttribute("name", l), u.value = o[l], s.appendChild(u);
        }
      a.appendChild(s), new Promise(function(c) {
        var f = n.action;
        if (typeof f == "function")
          return c(f(e));
        c(f);
      }).then(function(c) {
        r.setAttribute("action", c), r.submit(), a.innerHTML = "", n.__emit("start", e);
      });
    }
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.updateIframeWH(), e.initIframe();
    });
  },
  updated: function() {
    var e = this;
    this.$nextTick(function() {
      e.updateIframeWH();
    });
  },
  render: function() {
    var e, n = this, r = this.$props, a = r.componentTag, o = r.disabled, s = r.prefixCls, l = this.$attrs, u = l.class, c = l.style, f = b(b({}, I6), {
      display: this.uploading || o ? "none" : ""
    }), d = Z((e = {}, S(e, s, !0), S(e, "".concat(s, "-disabled"), o), S(e, u, u), e));
    return h(a, {
      class: d,
      style: b({
        position: "relative",
        zIndex: 0
      }, c)
    }, {
      default: function() {
        return [h("iframe", {
          ref: "iframeRef",
          onLoad: n.onLoad,
          style: f
        }, null), et(n)];
      }
    });
  }
};
const A6 = M6;
function ao() {
}
var N6 = {
  componentTag: i.string,
  prefixCls: i.string,
  action: i.oneOfType([i.string, i.func]),
  name: i.string,
  multipart: i.looseBool,
  directory: i.looseBool,
  onError: i.func,
  onSuccess: i.func,
  onProgress: i.func,
  onStart: i.func,
  data: i.oneOfType([i.object, i.func]),
  headers: i.object,
  accept: i.string,
  multiple: i.looseBool,
  disabled: i.looseBool,
  beforeUpload: i.func,
  customRequest: i.func,
  onReady: i.func,
  withCredentials: i.looseBool,
  supportServerRender: i.looseBool,
  openFileDialogOnClick: i.looseBool,
  method: i.string
};
const _v = K({
  name: "Upload",
  mixins: [Ce],
  inheritAttrs: !1,
  props: Hr(N6, {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onReady: ao,
    onStart: ao,
    onError: ao,
    onSuccess: ao,
    supportServerRender: !1,
    multiple: !1,
    beforeUpload: ao,
    withCredentials: !1,
    openFileDialogOnClick: !0
  }),
  data: function() {
    return this.Component = null, {
      // Component: null, // 组件作为响应式数据，性能比较低，采用强制刷新
    };
  },
  mounted: function() {
    var e = this;
    this.$nextTick(function() {
      e.supportServerRender && (e.Component = e.getComponent(), e.$forceUpdate(), Le(function() {
        e.__emit("ready");
      }));
    });
  },
  methods: {
    getComponent: function() {
      return typeof File < "u" ? $6 : A6;
    },
    abort: function(e) {
      this.$refs.uploaderRef.abort(e);
    }
  },
  render: function() {
    var e = this, n = b(b(b({}, this.$props), {
      ref: "uploaderRef"
    }), this.$attrs);
    if (this.supportServerRender) {
      var r = this.Component;
      return r ? h(r, n, {
        default: function() {
          return [et(e)];
        }
      }) : null;
    }
    var a = this.getComponent();
    return h(a, n, {
      default: function() {
        return [et(e)];
      }
    });
  }
});
i.oneOf(ke("error", "success", "done", "uploading", "removed"));
function $a(t) {
  var e = t.uid, n = t.name;
  return !(!e && e !== 0 || !["string", "number"].includes(Ye(e)) || n === "" || typeof n != "string");
}
i.custom($a), i.arrayOf(i.custom($a)), i.object;
var V6 = i.shape({
  showRemoveIcon: i.looseBool,
  showPreviewIcon: i.looseBool
}).loose, ky = i.shape({
  uploading: i.string,
  removeFile: i.string,
  downloadFile: i.string,
  uploadError: i.string,
  previewFile: i.string
}).loose, Dy = {
  type: i.oneOf(ke("drag", "select")),
  name: i.string,
  defaultFileList: i.arrayOf(i.custom($a)),
  fileList: i.arrayOf(i.custom($a)),
  action: i.oneOfType([i.string, i.func]),
  directory: i.looseBool,
  data: i.oneOfType([i.object, i.func]),
  method: i.oneOf(ke("POST", "PUT", "PATCH", "post", "put", "patch")),
  headers: i.object,
  showUploadList: i.oneOfType([i.looseBool, V6]),
  multiple: i.looseBool,
  accept: i.string,
  beforeUpload: i.func,
  listType: i.oneOf(ke("text", "picture", "picture-card")),
  // className: PropsTypes.string,
  remove: i.func,
  supportServerRender: i.looseBool,
  // style: PropsTypes.object,
  disabled: i.looseBool,
  prefixCls: i.string,
  customRequest: i.func,
  withCredentials: i.looseBool,
  openFileDialogOnClick: i.looseBool,
  locale: ky,
  height: i.number,
  id: i.string,
  previewFile: i.func,
  transformFile: i.func,
  onChange: i.func,
  onPreview: i.func,
  onRemove: i.func,
  onDownload: i.func,
  "onUpdate:fileList": i.func
};
i.arrayOf(i.custom($a)), i.string;
var R6 = {
  listType: i.oneOf(ke("text", "picture", "picture-card")),
  // items: PropsTypes.arrayOf(UploadFile),
  items: i.arrayOf(i.custom($a)),
  // items: PropsTypes.any,
  progressAttr: i.object,
  prefixCls: i.string,
  showRemoveIcon: i.looseBool,
  showDownloadIcon: i.looseBool,
  showPreviewIcon: i.looseBool,
  locale: ky,
  previewFile: i.func,
  onPreview: i.func,
  onRemove: i.func,
  onDownload: i.func
}, xv = globalThis && globalThis.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
};
const Os = K({
  name: "AUploadDragger",
  inheritAttrs: !1,
  props: Dy,
  render: function() {
    var e = this, n = me(this), r = n.height, a = xv(n, ["height"]), o = this.$attrs, s = o.style, l = xv(o, ["style"]), u = b(b(b({}, a), l), {
      type: "drag",
      style: b(b({}, s), {
        height: r
      })
    });
    return h(Oa, u, {
      default: function() {
        return [et(e)];
      }
    });
  }
});
function F6() {
  return !0;
}
function Pv(t) {
  return b(b({}, t), {
    lastModified: t.lastModified,
    lastModifiedDate: t.lastModifiedDate,
    name: t.name,
    size: t.size,
    type: t.type,
    uid: t.uid,
    percent: 0,
    originFileObj: t
  });
}
function B6() {
  var t = 0.1, e = 0.01, n = 0.98;
  return function(r) {
    var a = r;
    return a >= n || (a += t, t = t - e, t < 1e-3 && (t = 1e-3)), a;
  };
}
function ou(t, e) {
  var n = t.uid !== void 0 ? "uid" : "name";
  return e.filter(function(r) {
    return r[n] === t[n];
  })[0];
}
function j6(t, e) {
  var n = t.uid !== void 0 ? "uid" : "name", r = e.filter(function(a) {
    return a[n] !== t[n];
  });
  return r.length === e.length ? null : r;
}
var L6 = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = e.split("/"), r = n[n.length - 1], a = r.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(a) || [""])[0];
}, $y = function(e) {
  return !!e && e.indexOf("image/") === 0;
}, H6 = function(e) {
  if ($y(e.type))
    return !0;
  var n = e.thumbUrl || e.url, r = L6(n);
  return /^data:image\//.test(n) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(r) ? !0 : !(/^data:/.test(n) || r);
}, hr = 200;
function z6(t) {
  return new Promise(function(e) {
    if (!$y(t.type)) {
      e("");
      return;
    }
    var n = document.createElement("canvas");
    n.width = hr, n.height = hr, n.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(hr, "px; height: ").concat(hr, "px; z-index: 9999; display: none;"), document.body.appendChild(n);
    var r = n.getContext("2d"), a = new Image();
    a.onload = function() {
      var o = a.width, s = a.height, l = hr, u = hr, c = 0, f = 0;
      o < s ? (u = s * (hr / o), f = -(u - l) / 2) : (l = o * (hr / s), c = -(l - u) / 2), r.drawImage(a, c, f, l, u);
      var d = n.toDataURL();
      document.body.removeChild(n), e(d);
    }, a.src = window.URL.createObjectURL(t);
  });
}
var Y6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
const W6 = Y6;
function Tv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      U6(t, a, n[a]);
    });
  }
  return t;
}
function U6(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Uf = function(e, n) {
  var r = Tv({}, e, n.attrs);
  return h(Pe, Tv({}, r, {
    icon: W6
  }), null);
};
Uf.displayName = "PaperClipOutlined";
Uf.inheritAttrs = !1;
const G6 = Uf;
var K6 = { icon: function(e, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: e } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: e } }] };
}, name: "picture", theme: "twotone" };
const q6 = K6;
function Ev(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      X6(t, a, n[a]);
    });
  }
  return t;
}
function X6(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Gf = function(e, n) {
  var r = Ev({}, e, n.attrs);
  return h(Pe, Ev({}, r, {
    icon: q6
  }), null);
};
Gf.displayName = "PictureTwoTone";
Gf.inheritAttrs = !1;
const Z6 = Gf;
var Q6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
const J6 = Q6;
function kv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      e8(t, a, n[a]);
    });
  }
  return t;
}
function e8(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Kf = function(e, n) {
  var r = kv({}, e, n.attrs);
  return h(Pe, kv({}, r, {
    icon: J6
  }), null);
};
Kf.displayName = "DeleteOutlined";
Kf.inheritAttrs = !1;
const t8 = Kf;
var n8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
const r8 = n8;
function Dv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      a8(t, a, n[a]);
    });
  }
  return t;
}
function a8(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var qf = function(e, n) {
  var r = Dv({}, e, n.attrs);
  return h(Pe, Dv({}, r, {
    icon: r8
  }), null);
};
qf.displayName = "DownloadOutlined";
qf.inheritAttrs = !1;
const o8 = qf, i8 = K({
  name: "AUploadList",
  mixins: [Ce],
  props: Hr(R6, {
    listType: "text",
    progressAttr: {
      strokeWidth: 2,
      showInfo: !1
    },
    showRemoveIcon: !0,
    showDownloadIcon: !1,
    showPreviewIcon: !0,
    previewFile: z6
  }),
  setup: function() {
    return {
      configProvider: ye("configProvider", He)
    };
  },
  updated: function() {
    var e = this;
    Le(function() {
      var n = e.$props, r = n.listType, a = n.items, o = n.previewFile;
      r !== "picture" && r !== "picture-card" || (a || []).forEach(function(s) {
        typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(s.originFileObj instanceof File || s.originFileObj instanceof Blob) || s.thumbUrl !== void 0 || (s.thumbUrl = "", o && o(s.originFileObj).then(function(l) {
          s.thumbUrl = l || "", e.$forceUpdate();
        }));
      });
    });
  },
  methods: {
    handlePreview: function(e, n) {
      var r = this.$props.onPreview;
      if (r)
        return n.preventDefault(), this.$emit("preview", e);
    },
    handleDownload: function(e) {
      var n = this.$props.onDownload;
      typeof n == "function" ? this.$emit("download", e) : e.url && window.open(e.url);
    },
    handleClose: function(e) {
      this.$emit("remove", e);
    }
  },
  render: function() {
    var e = this, n, r = me(this), a = r.prefixCls, o = r.items, s = o === void 0 ? [] : o, l = r.listType, u = r.showPreviewIcon, c = r.showRemoveIcon, f = r.showDownloadIcon, d = r.locale, p = r.progressAttr, m = this.configProvider.getPrefixCls, v = m("upload", a), g = s.map(function(w) {
      var _, x, P, T = w.status === "uploading" ? h(Da, null, null) : h(G6, null, null);
      if (l === "picture" || l === "picture-card")
        if (l === "picture-card" && w.status === "uploading")
          T = h("div", {
            class: "".concat(v, "-list-item-uploading-text")
          }, [d.uploading]);
        else if (!w.thumbUrl && !w.url)
          T = h(Z6, {
            class: "".concat(v, "-list-item-thumbnail")
          }, null);
        else {
          var M = H6(w) ? h("img", {
            src: w.thumbUrl || w.url,
            alt: w.name,
            class: "".concat(v, "-list-item-image")
          }, null) : h(t6, {
            class: "".concat(v, "-list-item-icon")
          }, null);
          T = h("a", {
            class: "".concat(v, "-list-item-thumbnail"),
            onClick: function(ge) {
              return e.handlePreview(w, ge);
            },
            href: w.url || w.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [M]);
        }
      if (w.status === "uploading") {
        var $ = b(b({}, p), {
          type: "line",
          percent: w.percent
        }), k = "percent" in w ? h(KA, $, null) : null;
        P = h("div", {
          class: "".concat(v, "-list-item-progress"),
          key: "progress"
        }, [k]);
      }
      var V = Z((_ = {}, S(_, "".concat(v, "-list-item"), !0), S(_, "".concat(v, "-list-item-").concat(w.status), !0), S(_, "".concat(v, "-list-item-list-type-").concat(l), !0), _)), I = typeof w.linkProps == "string" ? JSON.parse(w.linkProps) : w.linkProps, F = c ? h(t8, {
        title: d.removeFile,
        onClick: function() {
          return e.handleClose(w);
        }
      }, null) : null, B = f && w.status === "done" ? h(o8, {
        title: d.downloadFile,
        onClick: function() {
          return e.handleDownload(w);
        }
      }, null) : null, E = l !== "picture-card" && h("span", {
        key: "download-delete",
        class: "".concat(v, "-list-item-card-actions ").concat(l === "picture" ? "picture" : "")
      }, [B && h("a", {
        title: d.downloadFile
      }, [B]), F && h("a", {
        title: d.removeFile
      }, [F])]), j = Z((x = {}, S(x, "".concat(v, "-list-item-name"), !0), S(x, "".concat(v, "-list-item-name-icon-count-").concat([B, F].filter(function(Te) {
        return Te;
      }).length), !0), x)), D = w.url ? [h("a", H(H({
        target: "_blank",
        rel: "noopener noreferrer",
        class: j,
        title: w.name
      }, I), {}, {
        href: w.url,
        onClick: function(ge) {
          return e.handlePreview(w, ge);
        }
      }), [w.name]), E] : [h("span", {
        key: "view",
        class: "".concat(v, "-list-item-name"),
        onClick: function(ge) {
          return e.handlePreview(w, ge);
        },
        title: w.name
      }, [w.name]), E], N = w.url || w.thumbUrl ? void 0 : {
        pointerEvents: "none",
        opacity: 0.5
      }, U = u ? h("a", {
        href: w.url || w.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        style: N,
        onClick: function(ge) {
          return e.handlePreview(w, ge);
        },
        title: d.previewFile
      }, [h(Eb, null, null)]) : null, L = l === "picture-card" && w.status !== "uploading" && h("span", {
        class: "".concat(v, "-list-item-actions")
      }, [U, w.status === "done" && B, F]), ne;
      w.response && typeof w.response == "string" ? ne = w.response : ne = w.error && w.error.statusText || d.uploadError;
      var ie = h("span", null, [T, D]), fe = Wc("fade"), $e = h("div", {
        class: V,
        key: w.uid
      }, [h("div", {
        class: "".concat(v, "-list-item-info")
      }, [ie]), L, h(ga, fe, {
        default: function() {
          return [P];
        }
      })]), ze = Z(S({}, "".concat(v, "-list-picture-card-container"), l === "picture-card"));
      return h("div", {
        key: w.uid,
        class: ze
      }, [w.status === "error" ? h(Nb, {
        title: ne
      }, {
        default: function() {
          return [$e];
        }
      }) : h("span", null, [$e])]);
    }), C = Z((n = {}, S(n, "".concat(v, "-list"), !0), S(n, "".concat(v, "-list-").concat(l), !0), n)), y = l === "picture-card" ? "animate-inline" : "animate", O = b(b({}, Wg("".concat(v, "-").concat(y))), {
      class: C
    });
    return h(Uc, H(H({}, O), {}, {
      tag: "div"
    }), {
      default: function() {
        return [g];
      }
    });
  }
}), Oa = K({
  name: "AUpload",
  mixins: [Ce],
  inheritAttrs: !1,
  Dragger: Os,
  props: Ba(Dy, {
    type: "select",
    multiple: !1,
    action: "",
    data: {},
    accept: "",
    beforeUpload: F6,
    showUploadList: !0,
    listType: "text",
    disabled: !1,
    supportServerRender: !0
  }),
  setup: function() {
    return {
      upload: null,
      progressTimer: null,
      configProvider: ye("configProvider", He)
    };
  },
  // recentUploadStatus: boolean | PromiseLike<any>;
  data: function() {
    return {
      sFileList: this.fileList || this.defaultFileList || [],
      dragState: "drop"
    };
  },
  watch: {
    fileList: function(e) {
      this.sFileList = e || [];
    }
  },
  beforeUnmount: function() {
    this.clearProgressTimer();
  },
  methods: {
    onStart: function(e) {
      var n = Pv(e);
      n.status = "uploading";
      var r = this.sFileList.concat(), a = J3(r, function(o) {
        var s = o.uid;
        return s === n.uid;
      });
      a === -1 ? r.push(n) : r[a] = n, this.handleChange({
        file: n,
        fileList: r
      }), (!window.File || (typeof process > "u" ? "undefined" : Ye(process)) === "object" && process.env.TEST_IE) && this.autoUpdateProgress(0, n);
    },
    onSuccess: function(e, n, r) {
      this.clearProgressTimer();
      try {
        typeof e == "string" && (e = JSON.parse(e));
      } catch {
      }
      var a = this.sFileList, o = ou(n, a);
      o && (o.status = "done", o.response = e, o.xhr = r, this.handleChange({
        file: b({}, o),
        fileList: a
      }));
    },
    onProgress: function(e, n) {
      var r = this.sFileList, a = ou(n, r);
      a && (a.percent = e.percent, this.handleChange({
        event: e,
        file: b({}, a),
        fileList: this.sFileList
      }));
    },
    onError: function(e, n, r) {
      this.clearProgressTimer();
      var a = this.sFileList, o = ou(r, a);
      o && (o.error = e, o.response = n, o.status = "error", this.handleChange({
        file: b({}, o),
        fileList: a
      }));
    },
    onReject: function(e) {
      this.$emit("reject", e);
    },
    handleRemove: function(e) {
      var n = this, r = this.remove, a = this.$data.sFileList;
      Promise.resolve(typeof r == "function" ? r(e) : r).then(function(o) {
        if (o !== !1) {
          var s = j6(e, a);
          s && (e.status = "removed", n.upload && n.upload.abort(e), n.handleChange({
            file: e,
            fileList: s
          }));
        }
      });
    },
    handleManualRemove: function(e) {
      this.$refs.uploadRef && this.$refs.uploadRef.abort(e), this.handleRemove(e);
    },
    handleChange: function(e) {
      Se(this, "fileList") || this.setState({
        sFileList: e.fileList
      }), this.$emit("update:fileList", e.fileList), this.$emit("change", e);
    },
    onFileDrop: function(e) {
      this.setState({
        dragState: e.type
      });
    },
    reBeforeUpload: function(e, n) {
      var r = this.$props.beforeUpload, a = this.$data.sFileList;
      if (!r)
        return !0;
      var o = r(e, n);
      return o === !1 ? (this.handleChange({
        file: e,
        fileList: f6(a.concat(n.map(Pv)), function(s) {
          return s.uid;
        })
      }), !1) : o && o.then ? o : !0;
    },
    clearProgressTimer: function() {
      clearInterval(this.progressTimer);
    },
    autoUpdateProgress: function(e, n) {
      var r = this, a = B6(), o = 0;
      this.clearProgressTimer(), this.progressTimer = setInterval(function() {
        o = a(o), r.onProgress({
          percent: o * 100
        }, n);
      }, 200);
    },
    renderUploadList: function(e) {
      var n = me(this), r = n.showUploadList, a = r === void 0 ? {} : r, o = n.listType, s = n.previewFile, l = n.disabled, u = n.locale, c = a.showRemoveIcon, f = a.showPreviewIcon, d = a.showDownloadIcon, p = this.$data.sFileList, m = this.$props, v = m.onDownload, g = m.onPreview, C = {
        listType: o,
        items: p,
        previewFile: s,
        showRemoveIcon: !l && c,
        showPreviewIcon: f,
        showDownloadIcon: d,
        locale: b(b({}, e), u),
        onRemove: this.handleManualRemove,
        onDownload: v,
        onPreview: g
      };
      return h(i8, C, null);
    }
  },
  render: function() {
    var e, n = me(this), r = n.prefixCls, a = n.showUploadList, o = n.listType, s = n.type, l = n.disabled, u = this.$data, c = u.sFileList, f = u.dragState, d = this.$attrs, p = d.class, m = d.style, v = this.configProvider.getPrefixCls, g = v("upload", r), C = b(b({}, this.$props), {
      prefixCls: g,
      beforeUpload: this.reBeforeUpload,
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onReject: this.onReject,
      ref: "uploadRef"
    }), y = a ? h(Na, {
      componentName: "Upload",
      defaultLocale: Ta.Upload,
      children: this.renderUploadList
    }, null) : null, O = et(this);
    if (s === "drag") {
      var w, _ = Z(g, (w = {}, S(w, "".concat(g, "-drag"), !0), S(w, "".concat(g, "-drag-uploading"), c.some(function(T) {
        return T.status === "uploading";
      })), S(w, "".concat(g, "-drag-hover"), f === "dragover"), S(w, "".concat(g, "-disabled"), l), w));
      return h("span", H({
        class: p
      }, r6(this.$attrs)), [h("div", {
        class: _,
        onDrop: this.onFileDrop,
        onDragover: this.onFileDrop,
        onDragleave: this.onFileDrop,
        style: m
      }, [h(_v, H(H({}, C), {}, {
        class: "".concat(g, "-btn")
      }), {
        default: function() {
          return [h("div", {
            class: "".concat(g, "-drag-container")
          }, [O])];
        }
      })]), y]);
    }
    var x = Z(g, (e = {}, S(e, "".concat(g, "-select"), !0), S(e, "".concat(g, "-select-").concat(o), !0), S(e, "".concat(g, "-disabled"), l), e));
    (!O.length || l) && delete C.id;
    var P = h("div", {
      class: x,
      style: O.length ? void 0 : {
        display: "none"
      }
    }, [h(_v, C, {
      default: function() {
        return [O];
      }
    })]);
    return o === "picture-card" ? h("span", {
      class: Z("".concat(g, "-picture-card-wrapper"), p)
    }, [y, P]) : h("span", {
      class: p
    }, [P, y]);
  }
});
Oa.Dragger = Os;
Oa.install = function(t) {
  return t.component(Oa.name, Oa), t.component(Os.name, Os), t;
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $v(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $v(Object(n), !0).forEach(function(r) {
      s8(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $v(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ki(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ki = function(e) {
    return typeof e;
  } : Ki = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ki(t);
}
function s8(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function nr() {
  return nr = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, nr.apply(this, arguments);
}
function l8(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function u8(t, e) {
  if (t == null)
    return {};
  var n = l8(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
var c8 = "1.14.0";
function Zn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ur = Zn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Go = Zn(/Edge/i), Iv = Zn(/firefox/i), yo = Zn(/safari/i) && !Zn(/chrome/i) && !Zn(/android/i), Iy = Zn(/iP(ad|od|hone)/i), f8 = Zn(/chrome/i) && Zn(/android/i), My = {
  capture: !1,
  passive: !1
};
function Ve(t, e, n) {
  t.addEventListener(e, n, !ur && My);
}
function Ie(t, e, n) {
  t.removeEventListener(e, n, !ur && My);
}
function Ss(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function d8(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Tn(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Ss(t, e) : Ss(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = d8(t));
  }
  return null;
}
var Mv = /\s+/g;
function Rt(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(Mv, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(Mv, " ");
    }
}
function le(t, e, n) {
  var r = t && t.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Sa(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var r = le(t, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!e && (t = t.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(n);
}
function Ay(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), a = 0, o = r.length;
    if (n)
      for (; a < o; a++)
        n(r[a], a);
    return r;
  }
  return [];
}
function $n() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function vt(t, e, n, r, a) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var o, s, l, u, c, f, d;
    if (t !== window && t.parentNode && t !== $n() ? (o = t.getBoundingClientRect(), s = o.top, l = o.left, u = o.bottom, c = o.right, f = o.height, d = o.width) : (s = 0, l = 0, u = window.innerHeight, c = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !ur))
      do
        if (a && a.getBoundingClientRect && (le(a, "transform") !== "none" || n && le(a, "position") !== "static")) {
          var p = a.getBoundingClientRect();
          s -= p.top + parseInt(le(a, "border-top-width")), l -= p.left + parseInt(le(a, "border-left-width")), u = s + o.height, c = l + o.width;
          break;
        }
      while (a = a.parentNode);
    if (r && t !== window) {
      var m = Sa(a || t), v = m && m.a, g = m && m.d;
      m && (s /= g, l /= v, d /= v, f /= g, u = s + f, c = l + d);
    }
    return {
      top: s,
      left: l,
      bottom: u,
      right: c,
      width: d,
      height: f
    };
  }
}
function Av(t, e, n) {
  for (var r = Cr(t, !0), a = vt(t)[e]; r; ) {
    var o = vt(r)[n], s = void 0;
    if (n === "top" || n === "left" ? s = a >= o : s = a <= o, !s)
      return r;
    if (r === $n())
      break;
    r = Cr(r, !1);
  }
  return !1;
}
function Ia(t, e, n, r) {
  for (var a = 0, o = 0, s = t.children; o < s.length; ) {
    if (s[o].style.display !== "none" && s[o] !== ue.ghost && (r || s[o] !== ue.dragged) && Tn(s[o], n.draggable, t, !1)) {
      if (a === e)
        return s[o];
      a++;
    }
    o++;
  }
  return null;
}
function Xf(t, e) {
  for (var n = t.lastElementChild; n && (n === ue.ghost || le(n, "display") === "none" || e && !Ss(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function Qt(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ue.clone && (!e || Ss(t, e)) && n++;
  return n;
}
function Nv(t) {
  var e = 0, n = 0, r = $n();
  if (t)
    do {
      var a = Sa(t), o = a.a, s = a.d;
      e += t.scrollLeft * o, n += t.scrollTop * s;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function h8(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r])
          return Number(n);
    }
  return -1;
}
function Cr(t, e) {
  if (!t || !t.getBoundingClientRect)
    return $n();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var a = le(n);
      if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return $n();
        if (r || e)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return $n();
}
function p8(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function iu(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Co;
function Ny(t, e) {
  return function() {
    if (!Co) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Co = setTimeout(function() {
        Co = void 0;
      }, e);
    }
  };
}
function v8() {
  clearTimeout(Co), Co = void 0;
}
function Vy(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Ry(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
var zt = "Sortable" + new Date().getTime();
function m8() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(a) {
          if (!(le(a, "display") === "none" || a === ue.ghost)) {
            t.push({
              target: a,
              rect: vt(a)
            });
            var o = Nn({}, t[t.length - 1].rect);
            if (a.thisAnimationDuration) {
              var s = Sa(a, !0);
              s && (o.top -= s.f, o.left -= s.e);
            }
            a.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(r) {
      t.push(r);
    },
    removeAnimationState: function(r) {
      t.splice(h8(t, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var o = !1, s = 0;
      t.forEach(function(l) {
        var u = 0, c = l.target, f = c.fromRect, d = vt(c), p = c.prevFromRect, m = c.prevToRect, v = l.rect, g = Sa(c, !0);
        g && (d.top -= g.f, d.left -= g.e), c.toRect = d, c.thisAnimationDuration && iu(p, d) && !iu(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - d.top) / (v.left - d.left) === (f.top - d.top) / (f.left - d.left) && (u = b8(v, p, m, a.options)), iu(d, f) || (c.prevFromRect = f, c.prevToRect = d, u || (u = a.options.animation), a.animate(c, v, d, u)), u && (o = !0, s = Math.max(s, u), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, u), c.thisAnimationDuration = u);
      }), clearTimeout(e), o ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, s) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, a, o, s) {
      if (s) {
        le(r, "transition", ""), le(r, "transform", "");
        var l = Sa(this.el), u = l && l.a, c = l && l.d, f = (a.left - o.left) / (u || 1), d = (a.top - o.top) / (c || 1);
        r.animatingX = !!f, r.animatingY = !!d, le(r, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = g8(r), le(r, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), le(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          le(r, "transition", ""), le(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, s);
      }
    }
  };
}
function g8(t) {
  return t.offsetWidth;
}
function b8(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var na = [], su = {
  initializeByDefault: !0
}, Ko = {
  mount: function(e) {
    for (var n in su)
      su.hasOwnProperty(n) && !(n in e) && (e[n] = su[n]);
    na.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), na.push(e);
  },
  pluginEvent: function(e, n, r) {
    var a = this;
    this.eventCanceled = !1, r.cancel = function() {
      a.eventCanceled = !0;
    };
    var o = e + "Global";
    na.forEach(function(s) {
      n[s.pluginName] && (n[s.pluginName][o] && n[s.pluginName][o](Nn({
        sortable: n
      }, r)), n.options[s.pluginName] && n[s.pluginName][e] && n[s.pluginName][e](Nn({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, a) {
    na.forEach(function(l) {
      var u = l.pluginName;
      if (!(!e.options[u] && !l.initializeByDefault)) {
        var c = new l(e, n, e.options);
        c.sortable = e, c.options = e.options, e[u] = c, nr(r, c.defaults);
      }
    });
    for (var o in e.options)
      if (e.options.hasOwnProperty(o)) {
        var s = this.modifyOption(e, o, e.options[o]);
        typeof s < "u" && (e.options[o] = s);
      }
  },
  getEventProperties: function(e, n) {
    var r = {};
    return na.forEach(function(a) {
      typeof a.eventProperties == "function" && nr(r, a.eventProperties.call(n[a.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var a;
    return na.forEach(function(o) {
      e[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (a = o.optionListeners[n].call(e[o.pluginName], r));
    }), a;
  }
};
function y8(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, a = t.targetEl, o = t.cloneEl, s = t.toEl, l = t.fromEl, u = t.oldIndex, c = t.newIndex, f = t.oldDraggableIndex, d = t.newDraggableIndex, p = t.originalEvent, m = t.putSortable, v = t.extraEventProperties;
  if (e = e || n && n[zt], !!e) {
    var g, C = e.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !ur && !Go ? g = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (g = document.createEvent("Event"), g.initEvent(r, !0, !0)), g.to = s || n, g.from = l || n, g.item = a || n, g.clone = o, g.oldIndex = u, g.newIndex = c, g.oldDraggableIndex = f, g.newDraggableIndex = d, g.originalEvent = p, g.pullMode = m ? m.lastPutMode : void 0;
    var O = Nn(Nn({}, v), Ko.getEventProperties(r, e));
    for (var w in O)
      g[w] = O[w];
    n && n.dispatchEvent(g), C[y] && C[y].call(e, g);
  }
}
var C8 = ["evt"], It = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.evt, o = u8(r, C8);
  Ko.pluginEvent.bind(ue)(e, n, Nn({
    dragEl: G,
    parentEl: rt,
    ghostEl: be,
    rootEl: Ze,
    nextEl: Ir,
    lastDownEl: qi,
    cloneEl: at,
    cloneHidden: mr,
    dragStarted: uo,
    putSortable: Ct,
    activeSortable: ue.active,
    originalEvent: a,
    oldIndex: fa,
    oldDraggableIndex: wo,
    newIndex: Ft,
    newDraggableIndex: pr,
    hideGhostForTarget: Ly,
    unhideGhostForTarget: Hy,
    cloneNowHidden: function() {
      mr = !0;
    },
    cloneNowShown: function() {
      mr = !1;
    },
    dispatchSortableEvent: function(l) {
      Et({
        sortable: n,
        name: l,
        originalEvent: a
      });
    }
  }, o));
};
function Et(t) {
  y8(Nn({
    putSortable: Ct,
    cloneEl: at,
    targetEl: G,
    rootEl: Ze,
    oldIndex: fa,
    oldDraggableIndex: wo,
    newIndex: Ft,
    newDraggableIndex: pr
  }, t));
}
var G, rt, be, Ze, Ir, qi, at, mr, fa, Ft, wo, pr, $i, Ct, sa = !1, _s = !1, xs = [], kr, ln, lu, uu, Vv, Rv, uo, ra, Oo, So = !1, Ii = !1, Xi, St, cu = [], Ku = !1, Ps = [], ul = typeof document < "u", Mi = Iy, Fv = Go || ur ? "cssFloat" : "float", w8 = ul && !f8 && !Iy && "draggable" in document.createElement("div"), Fy = function() {
  if (ul) {
    if (ur)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), By = function(e, n) {
  var r = le(e), a = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = Ia(e, 0, n), s = Ia(e, 1, n), l = o && le(o), u = s && le(s), c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + vt(o).width, f = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + vt(s).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return s && (u.clear === "both" || u.clear === d) ? "vertical" : "horizontal";
  }
  return o && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || c >= a && r[Fv] === "none" || s && r[Fv] === "none" && c + f > a) ? "vertical" : "horizontal";
}, O8 = function(e, n, r) {
  var a = r ? e.left : e.top, o = r ? e.right : e.bottom, s = r ? e.width : e.height, l = r ? n.left : n.top, u = r ? n.right : n.bottom, c = r ? n.width : n.height;
  return a === l || o === u || a + s / 2 === l + c / 2;
}, S8 = function(e, n) {
  var r;
  return xs.some(function(a) {
    var o = a[zt].options.emptyInsertThreshold;
    if (!(!o || Xf(a))) {
      var s = vt(a), l = e >= s.left - o && e <= s.right + o, u = n >= s.top - o && n <= s.bottom + o;
      if (l && u)
        return r = a;
    }
  }), r;
}, jy = function(e) {
  function n(o, s) {
    return function(l, u, c, f) {
      var d = l.options.group.name && u.options.group.name && l.options.group.name === u.options.group.name;
      if (o == null && (s || d))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (s && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(l, u, c, f), s)(l, u, c, f);
      var p = (s ? l : u).options.group.name;
      return o === !0 || typeof o == "string" && o === p || o.join && o.indexOf(p) > -1;
    };
  }
  var r = {}, a = e.group;
  (!a || Ki(a) != "object") && (a = {
    name: a
  }), r.name = a.name, r.checkPull = n(a.pull, !0), r.checkPut = n(a.put), r.revertClone = a.revertClone, e.group = r;
}, Ly = function() {
  !Fy && be && le(be, "display", "none");
}, Hy = function() {
  !Fy && be && le(be, "display", "");
};
ul && document.addEventListener("click", function(t) {
  if (_s)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), _s = !1, !1;
}, !0);
var Dr = function(e) {
  if (G) {
    e = e.touches ? e.touches[0] : e;
    var n = S8(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var a in e)
        e.hasOwnProperty(a) && (r[a] = e[a]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[zt]._onDragOver(r);
    }
  }
}, _8 = function(e) {
  G && G.parentNode[zt]._isOutsideThisEl(e.target);
};
function ue(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = nr({}, e), t[zt] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return By(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, l) {
      s.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: ue.supportPointer !== !1 && "PointerEvent" in window && !yo,
    emptyInsertThreshold: 5
  };
  Ko.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  jy(e);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : w8, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Ve(t, "pointerdown", this._onTapStart) : (Ve(t, "mousedown", this._onTapStart), Ve(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ve(t, "dragover", this), Ve(t, "dragenter", this)), xs.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), nr(this, m8());
}
ue.prototype = /** @lends Sortable.prototype */
{
  constructor: ue,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (ra = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, G) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, r = this.el, a = this.options, o = a.preventOnFilter, s = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, u = (l || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || u, f = a.filter;
      if (I8(r), !G && !(/mousedown|pointerdown/.test(s) && e.button !== 0 || a.disabled) && !c.isContentEditable && !(!this.nativeDraggable && yo && u && u.tagName.toUpperCase() === "SELECT") && (u = Tn(u, a.draggable, r, !1), !(u && u.animated) && qi !== u)) {
        if (fa = Qt(u), wo = Qt(u, a.draggable), typeof f == "function") {
          if (f.call(this, e, u, this)) {
            Et({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: u,
              toEl: r,
              fromEl: r
            }), It("filter", n, {
              evt: e
            }), o && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = Tn(c, d.trim(), r, !1), d)
            return Et({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: u,
              fromEl: r,
              toEl: r
            }), It("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          o && e.cancelable && e.preventDefault();
          return;
        }
        a.handle && !Tn(c, a.handle, r, !1) || this._prepareDragStart(e, l, u);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var a = this, o = a.el, s = a.options, l = o.ownerDocument, u;
    if (r && !G && r.parentNode === o) {
      var c = vt(r);
      if (Ze = o, G = r, rt = G.parentNode, Ir = G.nextSibling, qi = r, $i = s.group, ue.dragged = G, kr = {
        target: G,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Vv = kr.clientX - c.left, Rv = kr.clientY - c.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, G.style["will-change"] = "all", u = function() {
        if (It("delayEnded", a, {
          evt: e
        }), ue.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !Iv && a.nativeDraggable && (G.draggable = !0), a._triggerDragStart(e, n), Et({
          sortable: a,
          name: "choose",
          originalEvent: e
        }), Rt(G, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(f) {
        Ay(G, f.trim(), fu);
      }), Ve(l, "dragover", Dr), Ve(l, "mousemove", Dr), Ve(l, "touchmove", Dr), Ve(l, "mouseup", a._onDrop), Ve(l, "touchend", a._onDrop), Ve(l, "touchcancel", a._onDrop), Iv && this.nativeDraggable && (this.options.touchStartThreshold = 4, G.draggable = !0), It("delayStart", this, {
        evt: e
      }), s.delay && (!s.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Go || ur))) {
        if (ue.eventCanceled) {
          this._onDrop();
          return;
        }
        Ve(l, "mouseup", a._disableDelayedDrag), Ve(l, "touchend", a._disableDelayedDrag), Ve(l, "touchcancel", a._disableDelayedDrag), Ve(l, "mousemove", a._delayedDragTouchMoveHandler), Ve(l, "touchmove", a._delayedDragTouchMoveHandler), s.supportPointer && Ve(l, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(u, s.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    G && fu(G), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Ve(document, "pointermove", this._onTouchMove) : n ? Ve(document, "touchmove", this._onTouchMove) : Ve(document, "mousemove", this._onTouchMove) : (Ve(G, "dragend", this), Ve(Ze, "dragstart", this._onDragStart));
    try {
      document.selection ? Zi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (sa = !1, Ze && G) {
      It("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ve(document, "dragover", _8);
      var r = this.options;
      !e && Rt(G, r.dragClass, !1), Rt(G, r.ghostClass, !0), ue.active = this, e && this._appendGhost(), Et({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ln) {
      this._lastX = ln.clientX, this._lastY = ln.clientY, Ly();
      for (var e = document.elementFromPoint(ln.clientX, ln.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ln.clientX, ln.clientY), e !== n); )
        n = e;
      if (G.parentNode[zt]._isOutsideThisEl(e), n)
        do {
          if (n[zt]) {
            var r = void 0;
            if (r = n[zt]._onDragOver({
              clientX: ln.clientX,
              clientY: ln.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      Hy();
    }
  },
  _onTouchMove: function(e) {
    if (kr) {
      var n = this.options, r = n.fallbackTolerance, a = n.fallbackOffset, o = e.touches ? e.touches[0] : e, s = be && Sa(be, !0), l = be && s && s.a, u = be && s && s.d, c = Mi && St && Nv(St), f = (o.clientX - kr.clientX + a.x) / (l || 1) + (c ? c[0] - cu[0] : 0) / (l || 1), d = (o.clientY - kr.clientY + a.y) / (u || 1) + (c ? c[1] - cu[1] : 0) / (u || 1);
      if (!ue.active && !sa) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (be) {
        s ? (s.e += f - (lu || 0), s.f += d - (uu || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var p = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        le(be, "webkitTransform", p), le(be, "mozTransform", p), le(be, "msTransform", p), le(be, "transform", p), lu = f, uu = d, ln = o;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!be) {
      var e = this.options.fallbackOnBody ? document.body : Ze, n = vt(G, !0, Mi, !0, e), r = this.options;
      if (Mi) {
        for (St = e; le(St, "position") === "static" && le(St, "transform") === "none" && St !== document; )
          St = St.parentNode;
        St !== document.body && St !== document.documentElement ? (St === document && (St = $n()), n.top += St.scrollTop, n.left += St.scrollLeft) : St = $n(), cu = Nv(St);
      }
      be = G.cloneNode(!0), Rt(be, r.ghostClass, !1), Rt(be, r.fallbackClass, !0), Rt(be, r.dragClass, !0), le(be, "transition", ""), le(be, "transform", ""), le(be, "box-sizing", "border-box"), le(be, "margin", 0), le(be, "top", n.top), le(be, "left", n.left), le(be, "width", n.width), le(be, "height", n.height), le(be, "opacity", "0.8"), le(be, "position", Mi ? "absolute" : "fixed"), le(be, "zIndex", "100000"), le(be, "pointerEvents", "none"), ue.ghost = be, e.appendChild(be), le(be, "transform-origin", Vv / parseInt(be.style.width) * 100 + "% " + Rv / parseInt(be.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var r = this, a = e.dataTransfer, o = r.options;
    if (It("dragStart", this, {
      evt: e
    }), ue.eventCanceled) {
      this._onDrop();
      return;
    }
    It("setupClone", this), ue.eventCanceled || (at = Ry(G), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), Rt(at, this.options.chosenClass, !1), ue.clone = at), r.cloneId = Zi(function() {
      It("clone", r), !ue.eventCanceled && (r.options.removeCloneOnHide || Ze.insertBefore(at, G), r._hideClone(), Et({
        sortable: r,
        name: "clone"
      }));
    }), !n && Rt(G, o.dragClass, !0), n ? (_s = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ie(document, "mouseup", r._onDrop), Ie(document, "touchend", r._onDrop), Ie(document, "touchcancel", r._onDrop), a && (a.effectAllowed = "move", o.setData && o.setData.call(r, a, G)), Ve(document, "drop", r), le(G, "transform", "translateZ(0)")), sa = !0, r._dragStartId = Zi(r._dragStarted.bind(r, n, e)), Ve(document, "selectstart", r), uo = !0, yo && le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, r = e.target, a, o, s, l = this.options, u = l.group, c = ue.active, f = $i === u, d = l.sort, p = Ct || c, m, v = this, g = !1;
    if (Ku)
      return;
    function C(N, U) {
      It(N, v, Nn({
        evt: e,
        isOwner: f,
        axis: m ? "vertical" : "horizontal",
        revert: s,
        dragRect: a,
        targetRect: o,
        canSort: d,
        fromSortable: p,
        target: r,
        completed: O,
        onMove: function(ne, ie) {
          return Ai(Ze, n, G, a, ne, vt(ne), e, ie);
        },
        changed: w
      }, U));
    }
    function y() {
      C("dragOverAnimationCapture"), v.captureAnimationState(), v !== p && p.captureAnimationState();
    }
    function O(N) {
      return C("dragOverCompleted", {
        insertion: N
      }), N && (f ? c._hideClone() : c._showClone(v), v !== p && (Rt(G, Ct ? Ct.options.ghostClass : c.options.ghostClass, !1), Rt(G, l.ghostClass, !0)), Ct !== v && v !== ue.active ? Ct = v : v === ue.active && Ct && (Ct = null), p === v && (v._ignoreWhileAnimating = r), v.animateAll(function() {
        C("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (r === G && !G.animated || r === n && !r.animated) && (ra = null), !l.dragoverBubble && !e.rootEl && r !== document && (G.parentNode[zt]._isOutsideThisEl(e.target), !N && Dr(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), g = !0;
    }
    function w() {
      Ft = Qt(G), pr = Qt(G, l.draggable), Et({
        sortable: v,
        name: "change",
        toEl: n,
        newIndex: Ft,
        newDraggableIndex: pr,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = Tn(r, l.draggable, n, !0), C("dragOver"), ue.eventCanceled)
      return g;
    if (G.contains(e.target) || r.animated && r.animatingX && r.animatingY || v._ignoreWhileAnimating === r)
      return O(!1);
    if (_s = !1, c && !l.disabled && (f ? d || (s = rt !== Ze) : Ct === this || (this.lastPutMode = $i.checkPull(this, c, G, e)) && u.checkPut(this, c, G, e))) {
      if (m = this._getDirection(e, r) === "vertical", a = vt(G), C("dragOverValid"), ue.eventCanceled)
        return g;
      if (s)
        return rt = Ze, y(), this._hideClone(), C("revert"), ue.eventCanceled || (Ir ? Ze.insertBefore(G, Ir) : Ze.appendChild(G)), O(!0);
      var _ = Xf(n, l.draggable);
      if (!_ || E8(e, m, this) && !_.animated) {
        if (_ === G)
          return O(!1);
        if (_ && n === e.target && (r = _), r && (o = vt(r)), Ai(Ze, n, G, a, r, o, e, !!r) !== !1)
          return y(), n.appendChild(G), rt = n, w(), O(!0);
      } else if (_ && T8(e, m, this)) {
        var x = Ia(n, 0, l, !0);
        if (x === G)
          return O(!1);
        if (r = x, o = vt(r), Ai(Ze, n, G, a, r, o, e, !1) !== !1)
          return y(), n.insertBefore(G, x), rt = n, w(), O(!0);
      } else if (r.parentNode === n) {
        o = vt(r);
        var P = 0, T, M = G.parentNode !== n, $ = !O8(G.animated && G.toRect || a, r.animated && r.toRect || o, m), k = m ? "top" : "left", V = Av(r, "top", "top") || Av(G, "top", "top"), I = V ? V.scrollTop : void 0;
        ra !== r && (T = o[k], So = !1, Ii = !$ && l.invertSwap || M), P = k8(e, r, o, m, $ ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Ii, ra === r);
        var F;
        if (P !== 0) {
          var B = Qt(G);
          do
            B -= P, F = rt.children[B];
          while (F && (le(F, "display") === "none" || F === be));
        }
        if (P === 0 || F === r)
          return O(!1);
        ra = r, Oo = P;
        var E = r.nextElementSibling, j = !1;
        j = P === 1;
        var D = Ai(Ze, n, G, a, r, o, e, j);
        if (D !== !1)
          return (D === 1 || D === -1) && (j = D === 1), Ku = !0, setTimeout(P8, 30), y(), j && !E ? n.appendChild(G) : r.parentNode.insertBefore(G, j ? E : r), V && Vy(V, 0, I - V.scrollTop), rt = G.parentNode, T !== void 0 && !Ii && (Xi = Math.abs(T - vt(r)[k])), w(), O(!0);
      }
      if (n.contains(G))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ie(document, "mousemove", this._onTouchMove), Ie(document, "touchmove", this._onTouchMove), Ie(document, "pointermove", this._onTouchMove), Ie(document, "dragover", Dr), Ie(document, "mousemove", Dr), Ie(document, "touchmove", Dr);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._onDrop), Ie(e, "touchend", this._onDrop), Ie(e, "pointerup", this._onDrop), Ie(e, "touchcancel", this._onDrop), Ie(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (Ft = Qt(G), pr = Qt(G, r.draggable), It("drop", this, {
      evt: e
    }), rt = G && G.parentNode, Ft = Qt(G), pr = Qt(G, r.draggable), ue.eventCanceled) {
      this._nulling();
      return;
    }
    sa = !1, Ii = !1, So = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), qu(this.cloneId), qu(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), yo && le(document.body, "user-select", ""), le(G, "transform", ""), e && (uo && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), be && be.parentNode && be.parentNode.removeChild(be), (Ze === rt || Ct && Ct.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), G && (this.nativeDraggable && Ie(G, "dragend", this), fu(G), G.style["will-change"] = "", uo && !sa && Rt(G, Ct ? Ct.options.ghostClass : this.options.ghostClass, !1), Rt(G, this.options.chosenClass, !1), Et({
      sortable: this,
      name: "unchoose",
      toEl: rt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), Ze !== rt ? (Ft >= 0 && (Et({
      rootEl: rt,
      name: "add",
      toEl: rt,
      fromEl: Ze,
      originalEvent: e
    }), Et({
      sortable: this,
      name: "remove",
      toEl: rt,
      originalEvent: e
    }), Et({
      rootEl: rt,
      name: "sort",
      toEl: rt,
      fromEl: Ze,
      originalEvent: e
    }), Et({
      sortable: this,
      name: "sort",
      toEl: rt,
      originalEvent: e
    })), Ct && Ct.save()) : Ft !== fa && Ft >= 0 && (Et({
      sortable: this,
      name: "update",
      toEl: rt,
      originalEvent: e
    }), Et({
      sortable: this,
      name: "sort",
      toEl: rt,
      originalEvent: e
    })), ue.active && ((Ft == null || Ft === -1) && (Ft = fa, pr = wo), Et({
      sortable: this,
      name: "end",
      toEl: rt,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    It("nulling", this), Ze = G = rt = be = Ir = at = qi = mr = kr = ln = uo = Ft = pr = fa = wo = ra = Oo = Ct = $i = ue.dragged = ue.ghost = ue.clone = ue.active = null, Ps.forEach(function(e) {
      e.checked = !0;
    }), Ps.length = lu = uu = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        G && (this._onDragOver(e), x8(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, r = this.el.children, a = 0, o = r.length, s = this.options; a < o; a++)
      n = r[a], Tn(n, s.draggable, this.el, !1) && e.push(n.getAttribute(s.dataIdAttr) || $8(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var r = {}, a = this.el;
    this.toArray().forEach(function(o, s) {
      var l = a.children[s];
      Tn(l, this.options.draggable, a, !1) && (r[o] = l);
    }, this), n && this.captureAnimationState(), e.forEach(function(o) {
      r[o] && (a.removeChild(r[o]), a.appendChild(r[o]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return Tn(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var a = Ko.modifyOption(this, e, n);
    typeof a < "u" ? r[e] = a : r[e] = n, e === "group" && jy(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    It("destroy", this);
    var e = this.el;
    e[zt] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), xs.splice(xs.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!mr) {
      if (It("hideClone", this), ue.eventCanceled)
        return;
      le(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), mr = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (mr) {
      if (It("showClone", this), ue.eventCanceled)
        return;
      G.parentNode == Ze && !this.options.group.revertClone ? Ze.insertBefore(at, G) : Ir ? Ze.insertBefore(at, Ir) : Ze.appendChild(at), this.options.group.revertClone && this.animate(G, at), le(at, "display", ""), mr = !1;
    }
  }
};
function x8(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ai(t, e, n, r, a, o, s, l) {
  var u, c = t[zt], f = c.options.onMove, d;
  return window.CustomEvent && !ur && !Go ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = e, u.from = t, u.dragged = n, u.draggedRect = r, u.related = a || e, u.relatedRect = o || vt(e), u.willInsertAfter = l, u.originalEvent = s, t.dispatchEvent(u), f && (d = f.call(c, u, s)), d;
}
function fu(t) {
  t.draggable = !1;
}
function P8() {
  Ku = !1;
}
function T8(t, e, n) {
  var r = vt(Ia(n.el, 0, n.options, !0)), a = 10;
  return e ? t.clientX < r.left - a || t.clientY < r.top && t.clientX < r.right : t.clientY < r.top - a || t.clientY < r.bottom && t.clientX < r.left;
}
function E8(t, e, n) {
  var r = vt(Xf(n.el, n.options.draggable)), a = 10;
  return e ? t.clientX > r.right + a || t.clientX <= r.right && t.clientY > r.bottom && t.clientX >= r.left : t.clientX > r.right && t.clientY > r.top || t.clientX <= r.right && t.clientY > r.bottom + a;
}
function k8(t, e, n, r, a, o, s, l) {
  var u = r ? t.clientY : t.clientX, c = r ? n.height : n.width, f = r ? n.top : n.left, d = r ? n.bottom : n.right, p = !1;
  if (!s) {
    if (l && Xi < c * a) {
      if (!So && (Oo === 1 ? u > f + c * o / 2 : u < d - c * o / 2) && (So = !0), So)
        p = !0;
      else if (Oo === 1 ? u < f + Xi : u > d - Xi)
        return -Oo;
    } else if (u > f + c * (1 - a) / 2 && u < d - c * (1 - a) / 2)
      return D8(e);
  }
  return p = p || s, p && (u < f + c * o / 2 || u > d - c * o / 2) ? u > f + c / 2 ? 1 : -1 : 0;
}
function D8(t) {
  return Qt(G) < Qt(t) ? 1 : -1;
}
function $8(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function I8(t) {
  Ps.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && Ps.push(r);
  }
}
function Zi(t) {
  return setTimeout(t, 0);
}
function qu(t) {
  return clearTimeout(t);
}
ul && Ve(document, "touchmove", function(t) {
  (ue.active || sa) && t.cancelable && t.preventDefault();
});
ue.utils = {
  on: Ve,
  off: Ie,
  css: le,
  find: Ay,
  is: function(e, n) {
    return !!Tn(e, n, e, !1);
  },
  extend: p8,
  throttle: Ny,
  closest: Tn,
  toggleClass: Rt,
  clone: Ry,
  index: Qt,
  nextTick: Zi,
  cancelNextTick: qu,
  detectDirection: By,
  getChild: Ia
};
ue.get = function(t) {
  return t[zt];
};
ue.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ue.utils = Nn(Nn({}, ue.utils), r.utils)), Ko.mount(r);
  });
};
ue.create = function(t, e) {
  return new ue(t, e);
};
ue.version = c8;
var dt = [], co, Xu, Zu = !1, du, hu, Ts, fo;
function M8() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? Ve(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ve(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Ve(document, "touchmove", this._handleFallbackAutoScroll) : Ve(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), Bv(), Qi(), v8();
    },
    nulling: function() {
      Ts = Xu = co = Zu = fo = du = hu = null, dt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var a = this, o = (n.touches ? n.touches[0] : n).clientX, s = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(o, s);
      if (Ts = n, r || this.options.forceAutoScrollFallback || Go || ur || yo) {
        pu(n, this.options, l, r);
        var u = Cr(l, !0);
        Zu && (!fo || o !== du || s !== hu) && (fo && Bv(), fo = setInterval(function() {
          var c = Cr(document.elementFromPoint(o, s), !0);
          c !== u && (u = c, Qi()), pu(n, a.options, c, r);
        }, 10), du = o, hu = s);
      } else {
        if (!this.options.bubbleScroll || Cr(l, !0) === $n()) {
          Qi();
          return;
        }
        pu(n, this.options, Cr(l, !1), !1);
      }
    }
  }, nr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Qi() {
  dt.forEach(function(t) {
    clearInterval(t.pid);
  }), dt = [];
}
function Bv() {
  clearInterval(fo);
}
var pu = Ny(function(t, e, n, r) {
  if (e.scroll) {
    var a = (t.touches ? t.touches[0] : t).clientX, o = (t.touches ? t.touches[0] : t).clientY, s = e.scrollSensitivity, l = e.scrollSpeed, u = $n(), c = !1, f;
    Xu !== n && (Xu = n, Qi(), co = e.scroll, f = e.scrollFn, co === !0 && (co = Cr(n, !0)));
    var d = 0, p = co;
    do {
      var m = p, v = vt(m), g = v.top, C = v.bottom, y = v.left, O = v.right, w = v.width, _ = v.height, x = void 0, P = void 0, T = m.scrollWidth, M = m.scrollHeight, $ = le(m), k = m.scrollLeft, V = m.scrollTop;
      m === u ? (x = w < T && ($.overflowX === "auto" || $.overflowX === "scroll" || $.overflowX === "visible"), P = _ < M && ($.overflowY === "auto" || $.overflowY === "scroll" || $.overflowY === "visible")) : (x = w < T && ($.overflowX === "auto" || $.overflowX === "scroll"), P = _ < M && ($.overflowY === "auto" || $.overflowY === "scroll"));
      var I = x && (Math.abs(O - a) <= s && k + w < T) - (Math.abs(y - a) <= s && !!k), F = P && (Math.abs(C - o) <= s && V + _ < M) - (Math.abs(g - o) <= s && !!V);
      if (!dt[d])
        for (var B = 0; B <= d; B++)
          dt[B] || (dt[B] = {});
      (dt[d].vx != I || dt[d].vy != F || dt[d].el !== m) && (dt[d].el = m, dt[d].vx = I, dt[d].vy = F, clearInterval(dt[d].pid), (I != 0 || F != 0) && (c = !0, dt[d].pid = setInterval(function() {
        r && this.layer === 0 && ue.active._onTouchMove(Ts);
        var E = dt[this.layer].vy ? dt[this.layer].vy * l : 0, j = dt[this.layer].vx ? dt[this.layer].vx * l : 0;
        typeof f == "function" && f.call(ue.dragged.parentNode[zt], j, E, t, Ts, dt[this.layer].el) !== "continue" || Vy(dt[this.layer].el, j, E);
      }.bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && p !== u && (p = Cr(p, !1)));
    Zu = c;
  }
}, 30), zy = function(e) {
  var n = e.originalEvent, r = e.putSortable, a = e.dragEl, o = e.activeSortable, s = e.dispatchSortableEvent, l = e.hideGhostForTarget, u = e.unhideGhostForTarget;
  if (n) {
    var c = r || o;
    l();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(f.clientX, f.clientY);
    u(), c && !c.el.contains(d) && (s("spill"), this.onSpill({
      dragEl: a,
      putSortable: r
    }));
  }
};
function Zf() {
}
Zf.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var a = Ia(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: zy
};
nr(Zf, {
  pluginName: "revertOnSpill"
});
function Qf() {
}
Qf.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, a = r || this.sortable;
    a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll();
  },
  drop: zy
};
nr(Qf, {
  pluginName: "removeOnSpill"
});
ue.mount(new M8());
ue.mount(Qf, Zf);
function vu(t) {
  t.parentElement !== null && t.parentElement.removeChild(t);
}
function jv(t, e, n) {
  const r = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
  t.insertBefore(e, r);
}
function A8() {
  return typeof window < "u" ? window.console : global.console;
}
const N8 = A8();
function V8(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] || (e[r] = t(r));
  };
}
const R8 = /-(\w)/g, F8 = V8((t) => t.replace(R8, (e, n) => n.toUpperCase())), Yy = ["Start", "Add", "Remove", "Update", "End"], Wy = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Uy = ["Move"], B8 = [Uy, Yy, Wy].flatMap((t) => t).map((t) => `on${t}`), Qu = {
  manage: Uy,
  manageAndEmit: Yy,
  emit: Wy
};
function j8(t) {
  return B8.indexOf(t) !== -1;
}
const L8 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function H8(t) {
  return L8.includes(t);
}
function z8(t) {
  return ["transition-group", "TransitionGroup"].includes(t);
}
function Gy(t) {
  return ["id", "class", "role", "style"].includes(t) || t.startsWith("data-") || t.startsWith("aria-") || t.startsWith("on");
}
function Ky(t) {
  return t.reduce((e, [n, r]) => (e[n] = r, e), {});
}
function Y8({ $attrs: t, componentData: e = {} }) {
  return {
    ...Ky(
      Object.entries(t).filter(([r, a]) => Gy(r))
    ),
    ...e
  };
}
function W8({ $attrs: t, callBackBuilder: e }) {
  const n = Ky(qy(t));
  Object.entries(e).forEach(([a, o]) => {
    Qu[a].forEach((s) => {
      n[`on${s}`] = o(s);
    });
  });
  const r = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: r
  };
}
function qy(t) {
  return Object.entries(t).filter(([e, n]) => !Gy(e)).map(([e, n]) => [F8(e), n]).filter(([e, n]) => !j8(e));
}
const Lv = ({ el: t }) => t, U8 = (t, e) => t.__draggable_context = e, Hv = (t) => t.__draggable_context;
class G8 {
  constructor({
    nodes: { header: e, default: n, footer: r },
    root: a,
    realList: o
  }) {
    this.defaultNodes = n, this.children = [...e, ...n, ...r], this.externalComponent = a.externalComponent, this.rootTransition = a.transition, this.tag = a.tag, this.realList = o;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(e, n) {
    const { tag: r, children: a, _isRootComponent: o } = this;
    return e(r, n, o ? { default: () => a } : a);
  }
  updated() {
    const { defaultNodes: e, realList: n } = this;
    e.forEach((r, a) => {
      U8(Lv(r), {
        element: n[a],
        index: a
      });
    });
  }
  getUnderlyingVm(e) {
    return Hv(e);
  }
  getVmIndexFromDomIndex(e, n) {
    const { defaultNodes: r } = this, { length: a } = r, o = n.children, s = o.item(e);
    if (s === null)
      return a;
    const l = Hv(s);
    if (l)
      return l.index;
    if (a === 0)
      return 0;
    const u = Lv(r[0]), c = [...o].findIndex(
      (f) => f === u
    );
    return e < c ? 0 : a;
  }
}
function K8(t, e) {
  const n = t[e];
  return n ? n() : [];
}
function q8({ $slots: t, realList: e, getKey: n }) {
  const r = e || [], [a, o] = ["header", "footer"].map(
    (u) => K8(t, u)
  ), { item: s } = t;
  if (!s)
    throw new Error("draggable element must have an item slot");
  const l = r.flatMap(
    (u, c) => s({ element: u, index: c }).map((f) => (f.key = n(u), f.props = { ...f.props || {}, "data-draggable": !0 }, f))
  );
  if (l.length !== r.length)
    throw new Error("Item slot must have only one child");
  return {
    header: a,
    footer: o,
    default: l
  };
}
function X8(t) {
  const e = z8(t), n = !H8(t) && !e;
  return {
    transition: e,
    externalComponent: n,
    tag: n ? Jv(t) : e ? Qv : t
  };
}
function Z8({ $slots: t, tag: e, realList: n, getKey: r }) {
  const a = q8({ $slots: t, realList: n, getKey: r }), o = X8(e);
  return new G8({ nodes: a, root: o, realList: n });
}
function Xy(t, e) {
  Le(() => this.$emit(t.toLowerCase(), e));
}
function Zy(t) {
  return (e, n) => {
    if (this.realList !== null)
      return this[`onDrag${t}`](e, n);
  };
}
function Q8(t) {
  const e = Zy.call(this, t);
  return (n, r) => {
    e.call(this, n, r), Xy.call(this, t, n);
  };
}
let mu = null;
const J8 = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (t) => t
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, eN = [
  "update:modelValue",
  "change",
  ...[...Qu.manageAndEmit, ...Qu.emit].map((t) => t.toLowerCase())
], Ju = K({
  name: "draggable",
  inheritAttrs: !1,
  props: J8,
  emits: eN,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: t, $attrs: e, tag: n, componentData: r, realList: a, getKey: o } = this, s = Z8({
        $slots: t,
        tag: n,
        realList: a,
        getKey: o
      });
      this.componentStructure = s;
      const l = Y8({ $attrs: e, componentData: r });
      return s.render(kt, l);
    } catch (t) {
      return this.error = !0, kt("pre", { style: { color: "red" } }, t.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && N8.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: t, $el: e, componentStructure: n } = this;
    n.updated();
    const r = W8({
      $attrs: t,
      callBackBuilder: {
        manageAndEmit: (o) => Q8.call(this, o),
        emit: (o) => Xy.bind(this, o),
        manage: (o) => Zy.call(this, o)
      }
    }), a = e.nodeType === 1 ? e : e.parentElement;
    this._sortable = new ue(a, r), this.targetDomElement = a, a.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: t } = this;
      return t || this.modelValue;
    },
    getKey() {
      const { itemKey: t } = this;
      return typeof t == "function" ? t : (e) => e[t];
    }
  },
  watch: {
    $attrs: {
      handler(t) {
        const { _sortable: e } = this;
        e && qy(t).forEach(([n, r]) => {
          e.option(n, r);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(t) {
      return this.componentStructure.getUnderlyingVm(t) || null;
    },
    getUnderlyingPotencialDraggableComponent(t) {
      return t.__draggable_component__;
    },
    emitChanges(t) {
      Le(() => this.$emit("change", t));
    },
    alterList(t) {
      if (this.list) {
        t(this.list);
        return;
      }
      const e = [...this.modelValue];
      t(e), this.$emit("update:modelValue", e);
    },
    spliceList() {
      const t = (e) => e.splice(...arguments);
      this.alterList(t);
    },
    updatePosition(t, e) {
      const n = (r) => r.splice(e, 0, r.splice(t, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: t, related: e }) {
      const n = this.getUnderlyingPotencialDraggableComponent(t);
      if (!n)
        return { component: n };
      const r = n.realList, a = { list: r, component: n };
      return t !== e && r ? { ...n.getUnderlyingVm(e) || {}, ...a } : a;
    },
    getVmIndexFromDomIndex(t) {
      return this.componentStructure.getVmIndexFromDomIndex(
        t,
        this.targetDomElement
      );
    },
    onDragStart(t) {
      this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), mu = t.item;
    },
    onDragAdd(t) {
      const e = t.item._underlying_vm_;
      if (e === void 0)
        return;
      vu(t.item);
      const n = this.getVmIndexFromDomIndex(t.newIndex);
      this.spliceList(n, 0, e);
      const r = { element: e, newIndex: n };
      this.emitChanges({ added: r });
    },
    onDragRemove(t) {
      if (jv(this.$el, t.item, t.oldIndex), t.pullMode === "clone") {
        vu(t.clone);
        return;
      }
      const { index: e, element: n } = this.context;
      this.spliceList(e, 1);
      const r = { element: n, oldIndex: e };
      this.emitChanges({ removed: r });
    },
    onDragUpdate(t) {
      vu(t.item), jv(t.from, t.item, t.oldIndex);
      const e = this.context.index, n = this.getVmIndexFromDomIndex(t.newIndex);
      this.updatePosition(e, n);
      const r = { element: this.context.element, oldIndex: e, newIndex: n };
      this.emitChanges({ moved: r });
    },
    computeFutureIndex(t, e) {
      if (!t.element)
        return 0;
      const n = [...e.to.children].filter(
        (s) => s.style.display !== "none"
      ), r = n.indexOf(e.related), a = t.component.getVmIndexFromDomIndex(
        r
      );
      return n.indexOf(mu) !== -1 || !e.willInsertAfter ? a : a + 1;
    },
    onDragMove(t, e) {
      const { move: n, realList: r } = this;
      if (!n || !r)
        return !0;
      const a = this.getRelatedContextFromMoveEvent(t), o = this.computeFutureIndex(a, t), s = {
        ...this.context,
        futureIndex: o
      }, l = {
        ...t,
        relatedContext: a,
        draggedContext: s
      };
      return n(l, e);
    },
    onDragEnd() {
      mu = null;
    }
  }
}), tN = {
  input: "单行文本框",
  textarea: "多行文本框",
  select: "下拉框",
  selectPlaceholder: "请选择",
  option: "选项",
  multiple: "多选下拉框",
  radio: "单选框",
  checkbox: "复选框",
  date: "日期",
  dateFormatVal1: "YYYY-MM-DD",
  dateFormatVal2: "YYYY/MM/DD",
  inputNumber: "数字文本框",
  inputPlaceholder: "请输入",
  value: "数值",
  percent: "百分比",
  email: "邮箱",
  show: "显示",
  hide: "隐藏",
  link: "超链接",
  attachment: "附件",
  container12: "一行两列布局",
  container13: "一行三列布局",
  removeConfirm: "您确认删除这个组件吗？",
  remove: "删除组件",
  upload: "上传",
  uploaderFail: "上传失败！",
  actionWarning: "请先填写该附件的上传地址",
  fieldsTxt: "字段控件",
  dragToCanvas: "拖拽到页面中央",
  layoutTxt: "布局控件",
  setting: "模块设置",
  title: "标题",
  defaultVal: "默认提示语",
  optionsTxt: "选项设置",
  dateFormat: "日期格式",
  numberType: "数字类型",
  mailSuffix: "邮箱后缀",
  actionTxt: "上传地址",
  nameMapping: "文件名称映射",
  urlMapping: "文件地址映射",
  selectComponent: "请先选择控件",
  urlMappingWarning: "上传控件的文件地址映射为空"
}, nN = {
  input: "Input",
  textarea: "Textarea",
  select: "Select",
  selectPlaceholder: "Please select",
  option: "Option",
  multiple: "Multiple",
  radio: "Radio",
  checkbox: "Checkbox",
  date: "Date",
  dateFormatVal1: "YYYY-MM-DD",
  dateFormatVal2: "YYYY/MM/DD",
  inputNumber: "InputNumber",
  inputPlaceholder: "Please input",
  value: "value",
  percent: "percent",
  email: "Email",
  show: "show",
  hide: "hide",
  link: "Link",
  attachment: "Attachment",
  container12: "One row two cols",
  container13: "One row three cols",
  removeConfirm: "confrim to remove？",
  remove: "remove",
  upload: "upload",
  uploaderFail: "upload failed!",
  actionWarning: "action is empty!",
  fieldsTxt: "Fields control",
  dragToCanvas: "drag to layout",
  layoutTxt: "Layout control",
  setting: "Setting",
  title: "Title",
  defaultVal: "Placeholder",
  optionsTxt: "Options",
  dateFormat: "Date format",
  numberType: "Number type",
  mailSuffix: "Mail suffix",
  actionTxt: "Action",
  nameMapping: "Name mapping",
  urlMapping: "Url mapping",
  selectComponent: "Please select component",
  urlMappingWarning: "url mapping is null"
};
function Qy(t) {
  return t === "en-US" ? nN : tN;
}
const ec = (t) => t === 1 ? {
  l: [],
  r: []
} : t === 5e3 ? {
  l: [],
  m: [],
  r: []
} : {}, rN = (t) => [
  {
    isTem: !0,
    id: 1,
    type: "container2",
    columns: ec(1),
    title: t.container12
  },
  {
    isTem: !0,
    id: 5e3,
    type: "container3",
    columns: ec(5e3),
    title: t.container13
  }
], Jf = {};
function aN(t) {
  return t._vuebarState = {
    // config with default values that may be overwritten on directive intialization
    config: {
      scrollThrottle: 10,
      draggerThrottle: 10,
      resizeRefresh: !0,
      observerThrottle: 100,
      resizeDebounce: 100,
      unselectableBody: !0,
      overrideFloatingScrollbar: !0,
      scrollingPhantomDelay: 1e3,
      draggingPhantomDelay: 1e3,
      preventParentScroll: !1,
      useScrollbarPseudo: !1,
      // experimental
      el1Class: "vb",
      el1ScrollVisibleClass: "vb-visible",
      el1ScrollInvisibleClass: "vb-invisible",
      el1ScrollingClass: "vb-scrolling",
      el1ScrollingPhantomClass: "vb-scrolling-phantom",
      el1DraggingClass: "vb-dragging",
      el1DraggingPhantomClass: "vb-dragging-phantom",
      el2Class: "vb-content",
      draggerClass: "vb-dragger",
      draggerStylerClass: "vb-dragger-styler"
    },
    // reference to binding
    binding: null,
    // references to directive DOM elements
    el1: null,
    el2: null,
    dragger: null,
    // show dragger
    draggerEnabled: null,
    // properties computed for internal directive logic & DOM manipulations
    visibleArea: 0,
    // ratio between container height and scrollable content height
    scrollTop: 0,
    // position of content scrollTop in px
    barTop: 0,
    // position of dragger in px
    barHeight: 0,
    // height of dragger in px
    mouseBarOffsetY: 0,
    // relative position of mouse at the time of clicking on dragger
    barDragging: !1,
    // when the dragger is used
    // reference to MutationObserver
    mutationObserver: null,
    // references to timeouts for DOM class manipulation
    scrollingClassTimeout: null,
    draggingClassTimeout: null,
    scrollingPhantomClassTimeout: null,
    draggingPhantomClassTimeout: null,
    // references to a functions we'll need when removing events
    barMousedown: null,
    documentMousemove: null,
    documentMouseup: null,
    windowResize: null,
    scrollHandler: null,
    wheelHandler: null
  }, t._vuebarState;
}
function wt(t) {
  return t._vuebarState;
}
function oN(t) {
  return !!t.firstChild;
}
function tc(t) {
  const e = wt(t);
  e.visibleArea = e.el2.clientHeight / e.el2.scrollHeight;
}
function iN(t) {
  const e = wt(t);
  e.scrollTop = e.barTop * (e.el2.scrollHeight / e.el2.clientHeight);
}
function Es(t, e) {
  const n = wt(t);
  if (!e)
    return n.barTop = n.el2.scrollTop * n.visibleArea, !1;
  const r = e.clientY - n.el1.getBoundingClientRect().top;
  r <= n.mouseBarOffsetY && (n.barTop = 0), r > n.mouseBarOffsetY && (n.barTop = r - n.mouseBarOffsetY), n.barTop + n.barHeight >= n.el2.clientHeight && (n.barTop = n.el2.clientHeight - n.barHeight);
}
function nc(t) {
  const e = wt(t);
  e.visibleArea >= 1 ? e.barHeight = 0 : e.barHeight = e.el2.clientHeight * e.visibleArea;
}
function sN(t) {
  const e = wt(t), n = document.createElement("div"), r = document.createElement("div");
  return n.className = e.config.draggerClass, n.style.position = "absolute", e.draggerEnabled || (n.style.display = "none"), r.className = e.config.draggerStylerClass, n.appendChild(r), e.el1.appendChild(n), n;
}
function ks(t, e = {}) {
  const n = wt(t);
  n.dragger.style.height = parseInt(Math.round(n.barHeight) + "") + "px", n.dragger.style.top = parseInt(Math.round(n.barTop) + "") + "px", n.draggerEnabled && n.visibleArea < 1 ? (jt(n.el1, n.config.el1ScrollInvisibleClass), wr(n.el1, n.config.el1ScrollVisibleClass)) : (jt(n.el1, n.config.el1ScrollVisibleClass), wr(n.el1, n.config.el1ScrollInvisibleClass)), e.withScrollingClasses && (wr(n.el1, n.config.el1ScrollingClass), n.scrollingClassTimeout && clearTimeout(n.scrollingClassTimeout), n.scrollingClassTimeout = setTimeout(function() {
    jt(n.el1, n.config.el1ScrollingClass);
  }, n.config.scrollThrottle + 5), wr(n.el1, n.config.el1ScrollingPhantomClass), n.scrollingPhantomClassTimeout && clearTimeout(n.scrollingPhantomClassTimeout), n.scrollingPhantomClassTimeout = setTimeout(function() {
    jt(n.el1, n.config.el1ScrollingPhantomClass);
  }, n.config.scrollThrottle + n.config.scrollingPhantomDelay));
}
function lN(t) {
  const e = wt(t), n = "vuebar-pseudo-element-styles", r = "." + e.config.el2Class + "::-webkit-scrollbar";
  let a = document.getElementById(n), o = null;
  a || (a = document.createElement("style"), a.id = n, document.head.appendChild(a)), o = a.sheet;
  let s = !1;
  for (let l = 0, u = o.rules.length; l < u; l++)
    o.rules[l].selectorText == r && (s = !0);
  if (s)
    return !1;
  o.insertRule && o.insertRule(r + "{display:none}", 0);
}
function uN(t, e) {
  const n = wt(t);
  if (n.visibleArea >= 1)
    return !1;
  const r = n.el2.scrollHeight - n.el2.clientHeight, a = n.el2.scrollTop, o = e.deltaY < 0, s = e.deltaY > 0;
  if (a <= 0 && o || a >= r && s)
    return e.preventDefault(), !1;
}
function cN(t) {
  const e = wt(t);
  e.el2.scrollTop = e.scrollTop;
}
function qo(t, e) {
  e = e || {}, e.immediate && (tc(t), Es(t), nc(t), ks(t)), Le(
    function() {
      if (!wt(t))
        return !1;
      tc(t), Es(t), nc(t), ks(t);
    }.bind(this)
  );
}
function fN(t) {
  const e = wt(t);
  return ed(
    function() {
      tc(t), nc(t), e.barDragging || (Es(t), ks(t, { withScrollingClasses: !0 }));
    }.bind(this),
    e.config.scrollThrottle
  );
}
function dN(t) {
  return function(e) {
    uN(t, e);
  }.bind(this);
}
function hN(t) {
  const e = wt(t);
  return ed(
    function(n) {
      Es(t, n), ks(t), iN(t), cN(t);
    }.bind(this),
    e.config.draggerThrottle
  );
}
function pN(t) {
  const e = wt(t);
  return function() {
    e.barDragging = !1, e.el1.style.userSelect = "", e.config.unselectableBody && td(document.body, "UserSelect", ""), jt(e.el1, e.config.el1DraggingClass), e.draggingPhantomClassTimeout = setTimeout(function() {
      jt(e.el1, e.config.el1DraggingPhantomClass);
    }, e.config.draggingPhantomDelay), document.removeEventListener("mousemove", e.documentMousemove, !1), document.removeEventListener("mouseup", e.documentMouseup, !1);
  }.bind(this);
}
function vN(t) {
  const e = wt(t);
  return function(n) {
    if (n.which !== 1)
      return !1;
    e.barDragging = !0, e.mouseBarOffsetY = n.offsetY, e.el1.style.userSelect = "none", e.config.unselectableBody && td(document.body, "UserSelect", "none"), wr(e.el1, e.config.el1DraggingClass), e.draggingPhantomClassTimeout && clearTimeout(e.draggingPhantomClassTimeout), wr(e.el1, e.config.el1DraggingPhantomClass), document.addEventListener("mousemove", e.documentMousemove, !1), document.addEventListener("mouseup", e.documentMouseup, !1);
  }.bind(this);
}
function mN(t) {
  const e = wt(t);
  return bN(
    function() {
      qo(t);
    }.bind(this),
    e.config.resizeDebounce
  );
}
function gN(t) {
  if (typeof MutationObserver > "u")
    return null;
  const e = wt(t), n = new MutationObserver(
    ed(function() {
      qo(t);
    }, e.config.observerThrottle)
  );
  return n.observe(e.el2, {
    childList: !0,
    characterData: !0,
    subtree: !0
  }), n;
}
function Jy(t, e) {
  if (!oN.call(this, t) || t._vuebarState)
    return !1;
  const n = aN(t), r = e.value ? e.value : e || {};
  for (const l in r)
    n.config[l] = r[l];
  const a = CN(), o = wN(t.firstElementChild), s = o == 0;
  n.draggerEnabled = !s || n.config.overrideFloatingScrollbar ? 1 : 0, n.binding = e.value ? e : null, n.el1 = t, n.el2 = t.firstElementChild, n.dragger = sN(t), n.barMousedown = vN(t), n.documentMousemove = hN(t), n.documentMouseup = pN(t), n.windowResize = mN(t), n.scrollHandler = fN(t), n.wheelHandler = dN(t), n.mutationObserver = gN(t), wr(n.el1, n.config.el1Class), n.el1.style.position = "relative", n.el1.style.overflow = "hidden", wr(n.el2, n.config.el2Class), n.el2.style.display = "block", n.el2.style.overflowX = "hidden", n.el2.style.overflowY = "scroll", n.el2.style.height = "100%", n.draggerEnabled && (n.config.useScrollbarPseudo && (a.chrome || a.safari) ? (n.el2.style.width = "100%", lN(t)) : s ? (n.el2.style.width = "100%", td(n.el2, "BoxSizing", "content-box"), n.el2.style.paddingRight = "20px") : n.el2.style.width = "calc(100% + " + o + "px)"), n.el2.addEventListener("scroll", n.scrollHandler, 0), n.dragger.addEventListener("mousedown", n.barMousedown, 0), n.config.preventParentScroll && n.el2.addEventListener("wheel", n.wheelHandler, 0), n.config.resizeRefresh && window.addEventListener("resize", n.windowResize, !1), qo(t, { immediate: !0 });
}
function e0(t, e) {
  e = e || {};
  const n = wt(t);
  n && (n.dragger.removeEventListener("mousedown", n.barMousedown, 0), n.el2.removeEventListener("scroll", n.scrollHandler, 0), n.el2.removeEventListener("wheel", n.scrollHandler, 0), window.removeEventListener("resize", n.windowResize, !1), n.mutationObserver && n.mutationObserver.disconnect(), jt(n.el1, n.config.el1Class), jt(n.el1, n.config.el1ScrollVisibleClass), jt(n.el1, n.config.el1ScrollInvisibleClass), jt(n.el1, n.config.el1ScrollingClass), jt(n.el1, n.config.el1ScrollingPhantomClass), jt(n.el1, n.config.el1DraggingClass), e.clearStyles && (n.el1.style.position = "", n.el1.style.overflow = ""), jt(n.el2, n.config.el2Class), e.clearStyles && (n.el2.style.display = "", n.el2.style.overflowX = "", n.el2.style.overflowY = "", n.el2.style.msOverflowStyle = "", n.el2.style.height = "", n.el2.style.width = ""), n.dragger.removeChild(n.dragger.firstChild), n.el1.removeChild(n.dragger), n.scrollingPhantomClassTimeout && clearTimeout(n.scrollingPhantomClassTimeout), n.draggingPhantomClassTimeout && clearTimeout(n.draggingPhantomClassTimeout), delete t._vuebarState);
}
function bN(t, e) {
  let n = null;
  return function() {
    const r = this, a = arguments;
    clearTimeout(n), n = setTimeout(function() {
      t.apply(r, a);
    }, e);
  };
}
function ed(t, e, n) {
  e || (e = 250);
  let r, a;
  return function() {
    const o = n || this, s = +new Date(), l = arguments;
    r && s < r + e ? (clearTimeout(a), a = setTimeout(function() {
      r = s, t.apply(o, l);
    }, e)) : (r = s, t.apply(o, l));
  };
}
function td(t, e, n) {
  t.style["webkit" + e] = n, t.style["moz" + e] = n, t.style["ms" + e] = n, t.style["o" + e] = n, t.style[e.slice(0, 1).toLowerCase() + e.substring(1)] = n;
}
function yN(t, e) {
  return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className);
}
function wr(t, e) {
  t.classList ? t.classList.add(e) : yN(t, e) || (t.className += " " + e);
}
function jt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(
    new RegExp("\\b" + e + "\\b", "g"),
    ""
  );
}
function CN() {
  function t() {
    const m = window.navigator.userAgent.match(
      /(?:MSIE |Trident\/.*; rv:)(\d+)/
    );
    return m ? parseInt(m[1]) : void 0;
  }
  const e = window.navigator.userAgent, n = window.navigator.vendor, r = e.toLowerCase().indexOf("chrome") > -1 && n.toLowerCase().indexOf("google") > -1, a = e.indexOf("Edge") > -1, o = !!window.safari || e.toLowerCase().indexOf("safari") > -1 && n.toLowerCase().indexOf("apple") > -1, s = t() == 8, l = t() == 9, u = t() == 10, c = t() == 11, f = s || l || u || c, d = e || n || window.opera, p = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    d
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    d.substr(0, 4)
  );
  return {
    edge: a,
    chrome: r,
    safari: o,
    mobile: p,
    ie: f,
    ie8: s,
    ie9: l,
    ie10: u,
    ie11: c
  };
}
function wN(t) {
  t = t || document.body;
  let e = 0, n = 0;
  const r = document.createElement("div"), a = document.createElement("div");
  return r.style.position = "absolute", r.style.pointerEvents = "none", r.style.bottom = "0", r.style.right = "0", r.style.width = "100px", r.style.overflow = "hidden", r.appendChild(a), t.appendChild(r), e = a.offsetWidth, a.style.width = "100%", r.style.overflowY = "scroll", n = e - a.offsetWidth, t.removeChild(r), n;
}
Jf.install = function(t, e) {
  e = e || {}, e.directive = e.directive || "bar", t.directive(e.directive, {
    mounted: function(n, r) {
      Jy.call(this, n, r);
    },
    updated: function(n) {
      qo.call(this, n);
    },
    unmounted: function(n) {
      e0.call(this, n, { clearStyles: !1 });
    }
  });
};
Jf.directive = {
  mounted: function(t, e) {
    Jy.call(this, t, e);
  },
  updated: function(t) {
    qo.call(this, t);
  },
  unmounted: function(t) {
    e0.call(this, t, { clearStyles: !1 });
  }
};
var ON = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "check-square", theme: "outlined" };
const SN = ON;
function zv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      _N(t, a, n[a]);
    });
  }
  return t;
}
function _N(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var nd = function(e, n) {
  var r = zv({}, e, n.attrs);
  return h(Pe, zv({}, r, {
    icon: SN
  }), null);
};
nd.displayName = "CheckSquareOutlined";
nd.inheritAttrs = !1;
const xN = nd;
var PN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M600 395.4h91V649h79V267c0-4.4-3.6-8-8-8h-48.2c-3.7 0-7 2.6-7.7 6.3-2.6 12.1-6.9 22.3-12.9 30.9a86.14 86.14 0 01-26.3 24.4c-10.3 6.2-22 10.5-35 12.9-10.4 1.9-21 3-32 3.1a8 8 0 00-7.9 8v42.8c0 4.4 3.6 8 8 8zM871 702H567c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM443.9 312.7c-16.1-19-34.4-32.4-55.2-40.4-21.3-8.2-44.1-12.3-68.4-12.3-23.9 0-46.4 4.1-67.7 12.3-20.8 8-39 21.4-54.8 40.3-15.9 19.1-28.7 44.7-38.3 77-9.6 32.5-14.5 73-14.5 121.5 0 49.9 4.9 91.4 14.5 124.4 9.6 32.8 22.4 58.7 38.3 77.7 15.8 18.9 34 32.3 54.8 40.3 21.3 8.2 43.8 12.3 67.7 12.3 24.4 0 47.2-4.1 68.4-12.3 20.8-8 39.2-21.4 55.2-40.4 16.1-19 29-44.9 38.6-77.7 9.6-33 14.5-74.5 14.5-124.4 0-48.4-4.9-88.9-14.5-121.5-9.5-32.1-22.4-57.7-38.6-76.8zm-29.5 251.7c-1 21.4-4.2 42-9.5 61.9-5.5 20.7-14.5 38.5-27 53.4-13.6 16.3-33.2 24.3-57.6 24.3-24 0-43.2-8.1-56.7-24.4-12.2-14.8-21.1-32.6-26.6-53.3-5.3-19.9-8.5-40.6-9.5-61.9-1-20.8-1.5-38.5-1.5-53.2 0-8.8.1-19.4.4-31.8.2-12.7 1.1-25.8 2.6-39.2 1.5-13.6 4-27.1 7.6-40.5 3.7-13.8 8.8-26.3 15.4-37.4 6.9-11.6 15.8-21.1 26.7-28.3 11.4-7.6 25.3-11.3 41.5-11.3 16.1 0 30.1 3.7 41.7 11.2a87.94 87.94 0 0127.4 28.2c6.9 11.2 12.1 23.8 15.6 37.7 3.3 13.2 5.8 26.6 7.5 40.1 1.8 13.5 2.8 26.6 3 39.4.2 12.4.4 23 .4 31.8.1 14.8-.4 32.5-1.4 53.3z" } }] }, name: "field-binary", theme: "outlined" };
const TN = PN;
function Yv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      EN(t, a, n[a]);
    });
  }
  return t;
}
function EN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var rd = function(e, n) {
  var r = Yv({}, e, n.attrs);
  return h(Pe, Yv({}, r, {
    icon: TN
  }), null);
};
rd.displayName = "FieldBinaryOutlined";
rd.inheritAttrs = !1;
const kN = rd;
var DN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm78 195a32 32 0 1064 0 32 32 0 10-64 0z" } }] }, name: "file-unknown", theme: "outlined" };
const $N = DN;
function Wv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      IN(t, a, n[a]);
    });
  }
  return t;
}
function IN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ad = function(e, n) {
  var r = Wv({}, e, n.attrs);
  return h(Pe, Wv({}, r, {
    icon: $N
  }), null);
};
ad.displayName = "FileUnknownOutlined";
ad.inheritAttrs = !1;
const MN = ad;
var AN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" } }] }, name: "link", theme: "outlined" };
const NN = AN;
function Uv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      VN(t, a, n[a]);
    });
  }
  return t;
}
function VN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var od = function(e, n) {
  var r = Uv({}, e, n.attrs);
  return h(Pe, Uv({}, r, {
    icon: NN
  }), null);
};
od.displayName = "LinkOutlined";
od.inheritAttrs = !1;
const RN = od;
var FN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" } }] }, name: "mail", theme: "outlined" };
const BN = FN;
function Gv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      jN(t, a, n[a]);
    });
  }
  return t;
}
function jN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var id = function(e, n) {
  var r = Gv({}, e, n.attrs);
  return h(Pe, Gv({}, r, {
    icon: BN
  }), null);
};
id.displayName = "MailOutlined";
id.inheritAttrs = !1;
const LN = id;
var HN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "minus", theme: "outlined" };
const zN = HN;
function Kv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      YN(t, a, n[a]);
    });
  }
  return t;
}
function YN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var sd = function(e, n) {
  var r = Kv({}, e, n.attrs);
  return h(Pe, Kv({}, r, {
    icon: zN
  }), null);
};
sd.displayName = "MinusOutlined";
sd.inheritAttrs = !1;
const WN = sd;
var UN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "profile", theme: "outlined" };
const GN = UN;
function qv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      KN(t, a, n[a]);
    });
  }
  return t;
}
function KN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ld = function(e, n) {
  var r = qv({}, e, n.attrs);
  return h(Pe, qv({}, r, {
    icon: GN
  }), null);
};
ld.displayName = "ProfileOutlined";
ld.inheritAttrs = !1;
const qN = ld;
var XN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "upload", theme: "outlined" };
const ZN = XN;
function Xv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? Object(arguments[e]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      QN(t, a, n[a]);
    });
  }
  return t;
}
function QN(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var ud = function(e, n) {
  var r = Xv({}, e, n.attrs);
  return h(Pe, Xv({}, r, {
    icon: ZN
  }), null);
};
ud.displayName = "UploadOutlined";
ud.inheritAttrs = !1;
const JN = ud, t0 = (t) => [
  {
    isTem: !0,
    id: 1e4,
    type: "input",
    model: "",
    title: t.input,
    icon: kt(c6)
  },
  {
    isTem: !0,
    id: 4e4,
    type: "textarea",
    model: "",
    title: t.textarea,
    icon: kt(qN)
  },
  {
    isTem: !0,
    id: 2e4,
    type: "select",
    model: void 0,
    title: t.select,
    placeholder: t.selectPlaceholder,
    icon: kt(Cv),
    value: [
      {
        value: `${t.option}1`,
        label: `${t.option}1`
      },
      {
        value: `${t.option}2`,
        label: `${t.option}2`
      }
    ]
  },
  {
    isTem: !0,
    id: 3e4,
    type: "multiple",
    model: [],
    title: t.multiple,
    placeholder: t.selectPlaceholder,
    icon: kt(Cv),
    value: [
      {
        value: `${t.option}1`,
        label: `${t.option}1`
      },
      {
        value: `${t.option}2`,
        label: `${t.option}2`
      },
      {
        value: `${t.option}3`,
        label: `${t.option}3`
      }
    ]
  },
  {
    isTem: !0,
    id: 5e4,
    type: "radio",
    model: "",
    title: t.radio,
    icon: kt(kb),
    value: [
      {
        value: "option1",
        label: "radio1"
      },
      {
        value: "option2",
        label: "radio2"
      },
      {
        value: "option3",
        label: "radio3"
      }
    ]
  },
  {
    isTem: !0,
    id: 6e4,
    type: "checkbox",
    model: [],
    title: t.checkbox,
    icon: kt(xN),
    value: [
      {
        value: "option1",
        label: `${t.option}1`
      },
      {
        value: "option2",
        label: `${t.option}2`
      },
      {
        value: "option3",
        label: `${t.option}3`
      }
    ]
  },
  {
    isTem: !0,
    id: 7e4,
    type: "date",
    model: "",
    title: t.date,
    placeholder: t.selectPlaceholder,
    format: t.dateFormatVal1,
    formatOptions: [t.dateFormatVal1, t.dateFormatVal2],
    icon: kt(Bf)
  },
  {
    isTem: !0,
    id: 8e4,
    type: "inputNumber",
    model: 0,
    title: t.inputNumber,
    placeholder: t.inputPlaceholder,
    format: t.value,
    formatOptions: [t.value, t.percent],
    icon: kt(kN)
  },
  {
    isTem: !0,
    id: 9e4,
    type: "email",
    model: "",
    title: t.email,
    placeholder: t.inputPlaceholder,
    append: ".com",
    hasSuffix: t.show,
    suffixOptions: [t.show, t.hide],
    icon: kt(LN)
  },
  {
    isTem: !0,
    id: 1e6,
    type: "link",
    model: "",
    title: t.link,
    prepend: "http://",
    append: ".com",
    icon: kt(RN)
  },
  {
    isTem: !0,
    id: 2e6,
    type: "attachment",
    title: t.attachment,
    model: "",
    icon: kt(MN),
    action: "",
    nameMapping: "",
    urlMapping: "response",
    fileName: "file",
    defaultList: []
  }
];
const eV = {
  key: 1,
  class: "component"
}, tV = { class: "component-title" }, nV = { key: 0 }, rV = { class: "component-content" }, aV = {
  key: 0,
  class: "view-model"
}, oV = {
  key: 1,
  class: "nodrag"
}, iV = {
  key: 2,
  class: "component"
}, sV = { class: "component-title" }, lV = { key: 0 }, uV = { class: "component-content" }, cV = {
  key: 0,
  class: "view-model"
}, fV = {
  key: 1,
  class: "nodrag"
}, dV = {
  key: 3,
  class: "component"
}, hV = { class: "component-title" }, pV = { key: 0 }, vV = { class: "component-content" }, mV = {
  key: 0,
  class: "view-model"
}, gV = {
  key: 1,
  class: "nodrag"
}, bV = {
  key: 4,
  class: "component"
}, yV = { class: "component-title" }, CV = { key: 0 }, wV = { class: "component-content" }, OV = {
  key: 0,
  class: "view-model"
}, SV = {
  key: 1,
  class: "nodrag"
}, _V = {
  key: 5,
  class: "component"
}, xV = { class: "component-title" }, PV = { key: 0 }, TV = { class: "component-content" }, EV = {
  key: 0,
  class: "view-model"
}, kV = {
  key: 1,
  class: "nodrag"
}, DV = {
  key: 6,
  class: "component"
}, $V = { class: "component-title" }, IV = { key: 0 }, MV = { class: "component-content" }, AV = {
  key: 0,
  class: "view-model"
}, NV = {
  key: 1,
  class: "nodrag"
}, VV = {
  key: 7,
  class: "component"
}, RV = { class: "component-title" }, FV = { key: 0 }, BV = { class: "component-content" }, jV = {
  key: 0,
  class: "view-model"
}, LV = {
  key: 1,
  class: "nodrag"
}, HV = {
  key: 8,
  class: "component"
}, zV = { class: "component-title" }, YV = { key: 0 }, WV = { class: "component-content" }, UV = {
  key: 0,
  class: "view-model"
}, GV = {
  key: 1,
  class: "nodrag"
}, KV = {
  key: 9,
  class: "component"
}, qV = { class: "component-title" }, XV = { key: 0 }, ZV = { class: "component-content" }, QV = {
  key: 0,
  class: "view-model"
}, JV = {
  key: 1,
  class: "nodrag"
}, eR = {
  key: 10,
  class: "component"
}, tR = { class: "component-title" }, nR = { key: 0 }, rR = { class: "component-content" }, aR = ["href"], oR = {
  key: 1,
  class: "nodrag"
}, iR = {
  key: 11,
  class: "component"
}, sR = { class: "component-title" }, lR = { key: 0 }, uR = { class: "component-content" }, cR = { class: "nodrag attachment" }, fR = /* @__PURE__ */ K({
  __name: "ListContainer",
  props: {
    uploadAction: { default: "" },
    list: { default: () => [] },
    selectedItem: { default: () => ({}) },
    mode: { default: "design" },
    lang: { default: "zh-CN" },
    header: { type: Function, default: () => {
    } },
    hasColon: { type: Boolean, default: !1 },
    domain: { default: "" },
    containerIndex: { default: void 0 },
    dragType: { default: "" },
    uploadInfo: null
  },
  emits: ["handleDelete"],
  setup(t, { expose: e, emit: n }) {
    const r = t, a = Q({}), o = Q({}), s = Q({}), l = Q(r.mode === "design"), u = Q(r.mode === "edit"), c = Q(r.mode === "view"), f = Q({}), d = (E) => {
      n("handleDelete", E);
    }, p = ye("handleSelect"), m = (E) => {
      p(r.list[E.oldIndex].id);
    }, v = (E) => {
      p(r.list[E.newIndex].id);
    }, g = (E) => {
      E ? r.domain ? (E = r.domain + E, window.open(E.replace(/#/g, "%23"), "_blank")) : window.open(E.replace(/#/g, "%23"), "_blank") : console.log("url不存在");
    }, C = (E, j) => {
      f.value[j + ""] = E;
    }, y = (E, j, D, N) => {
      if (E[r.uploadInfo.statusKey] === r.uploadInfo.successValue) {
        if (N.nameMapping) {
          let U = {};
          Object.assign(U, E), N.nameMapping.split(".").map((L) => {
            U = U[L];
          }), j.name = U.split("/").pop();
        }
        if (N.urlMapping) {
          let U = {};
          Object.assign(U, E), N.urlMapping.split(".").map((L) => {
            U = U[L];
          }), j.url = U;
        }
        N.defaultList = D;
      } else
        dv.warning(E.message || E.Message), D.splice(D.indexOf(j), 1);
    }, O = ye("setDragType"), w = (E) => {
      O(r.list[E.oldIndex].type);
    }, _ = () => {
      O("");
    }, x = ({ file: E, fileList: j }, D) => {
      E.error ? P(E.error, j, E) : E.response && y(E.response, E, j, D);
    }, P = (E, j, D) => {
      dv.error(E && E.message || o.value.uploaderFail), j.splice(j.indexOf(D), 1);
    }, T = () => {
      Object.assign(a.value, r.header());
    }, M = (E, j) => {
      j.defaultList = f.value[j.id + ""].fileList;
    }, $ = (E) => {
      console.log(E), g(E.response.Data.FileRelativePath);
    }, k = (E) => E.model && E.value ? E.value.filter((D) => E.model && E.model.includes(D.value)).map((D) => D.label).join(",") : [], V = (E) => E.model && E.value ? E.value.map((D) => {
      if (D.value === E.model)
        return D.label;
    }).join("") : "", I = (E) => {
      if (E.model && typeof E.model == "string") {
        const j = E.model.split("/").pop(), { defaultList: D, ...N } = s.value;
        Object.assign(D, {
          name: j,
          response: {
            ResponseBody: E.model
          },
          url: E.model
        }), Object.assign(E, {
          ...N,
          defaultList: D
        });
      }
    }, F = (E, j) => (E.forEach((D) => {
      (D == null ? void 0 : D.type) === "attachment" && (Object.assign(D, {
        fileName: j || D.fileName
      }), I(D), D.defaultList ? D.defaultList.map((N) => {
        N.showProgress = !1;
      }) : Object.assign(D, {
        defaultList: []
      }));
    }), E);
    return (() => {
      o.value = Qy(r.lang), s.value = t0(o.value).pop() || {}, F(r.list, r.uploadInfo.uploadFileName);
    })(), e({
      initPropsFile: F
    }), (E, j) => {
      const D = Jv("ListContainer", !0), N = pt, U = Tb, L = TD, ne = ED, ie = At, fe = Df, $e = Ca, ze = Cs, Te = V3, ge = dA, Re = Xn, tt = Oa, ft = PA;
      return q(), Bt(vr(Ju), {
        itemKey: "id",
        ghostClass: "ghost",
        list: r.list,
        group: "container",
        class: "listContainer form-row-item",
        onChoose: m,
        onAdd: v,
        onStart: w,
        onEnd: _,
        disabled: (t.dragType === "container" || t.dragType === "container2" || t.dragType === "container3") && t.containerIndex !== void 0 || c.value || u.value
      }, {
        item: he(({ element: A, index: Y }) => [
          pe("div", {
            class: Ni(["componentBox", [
              t.selectedItem.id === A.id && l.value ? "form-row-item-active" : ""
            ]])
          }, [
            A.type === "container" || A.type === "container2" || A.type === "container3" ? (q(), te("div", {
              key: 0,
              class: Ni(["component container-row-item", {
                "form-row-item-active": A.hasOwnProperty("columns") && l.value
              }])
            }, [
              (q(!0), te(mt, null, Un(A.columns, (X, Ee) => (q(), te("div", {
                class: "container-column",
                key: Ee
              }, [
                h(D, {
                  "upload-info": t.uploadInfo,
                  dragType: t.dragType,
                  "container-index": Y,
                  list: X,
                  domain: t.domain,
                  mode: t.mode,
                  "selected-item": t.selectedItem,
                  onHandleDelete: d,
                  header: t.header,
                  lang: t.lang,
                  hasColon: t.hasColon,
                  uploadAction: t.uploadAction
                }, null, 8, ["upload-info", "dragType", "container-index", "list", "domain", "mode", "selected-item", "header", "lang", "hasColon", "uploadAction"])
              ]))), 128))
            ], 2)) : ot("", !0),
            A.type === "input" ? (q(), te("div", eV, [
              pe("div", tV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", nV, "：")) : ot("", !0)
              ]),
              pe("div", rV, [
                c.value ? (q(), te("div", aV, we(A.model), 1)) : (q(), te("div", oV, [
                  h(N, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    placeholder: A.placeholder
                  }, null, 8, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "textarea" ? (q(), te("div", iV, [
              pe("div", sV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", lV, "：")) : ot("", !0)
              ]),
              pe("div", uV, [
                c.value ? (q(), te("div", cV, we(A.model), 1)) : (q(), te("div", fV, [
                  h(U, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    placeholder: A.placeholder
                  }, null, 8, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "select" ? (q(), te("div", dV, [
              pe("div", hV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", pV, "：")) : ot("", !0)
              ]),
              pe("div", vV, [
                c.value ? (q(), te("div", mV, we(V(A)), 1)) : (q(), te("div", gV, [
                  h(ne, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    placeholder: A.placeholder,
                    transfer: ""
                  }, {
                    default: he(() => [
                      (q(!0), te(mt, null, Un(A.value, (X) => (q(), Bt(L, {
                        value: X.value,
                        key: X.label
                      }, {
                        default: he(() => [
                          Me(we(X.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "multiple" ? (q(), te("div", bV, [
              pe("div", yV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", CV, "：")) : ot("", !0)
              ]),
              pe("div", wV, [
                c.value ? (q(), te("div", OV, we(k(A)), 1)) : (q(), te("div", SV, [
                  h(ne, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    mode: "multiple",
                    placeholder: A.placeholder,
                    transfer: ""
                  }, {
                    default: he(() => [
                      (q(!0), te(mt, null, Un(A.value, (X) => (q(), Bt(L, {
                        value: X.value,
                        key: X.label
                      }, {
                        default: he(() => [
                          Me(we(X.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "radio" ? (q(), te("div", _V, [
              pe("div", xV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", PV, "：")) : ot("", !0)
              ]),
              pe("div", TV, [
                c.value ? (q(), te("div", EV, we(A.model), 1)) : (q(), te("div", kV, [
                  h(fe, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    class: "ivu-middle-group"
                  }, {
                    default: he(() => [
                      (q(!0), te(mt, null, Un(A.value, (X) => (q(), Bt(ie, {
                        value: X.label,
                        key: X.value,
                        disabled: A.isCheck
                      }, {
                        default: he(() => [
                          Me(we(X.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : A.type === "checkbox" ? (q(), te("div", DV, [
              pe("div", $V, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", IV, "：")) : ot("", !0)
              ]),
              pe("div", MV, [
                c.value ? (q(), te("div", AV, we(A.model.join(",")), 1)) : (q(), te("div", NV, [
                  h(ze, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    class: "ivu-middle-group"
                  }, {
                    default: he(() => [
                      (q(!0), te(mt, null, Un(A.value, (X) => (q(), Bt($e, {
                        key: X.value,
                        value: X.label
                      }, {
                        default: he(() => [
                          Me(we(X.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : A.type === "date" ? (q(), te("div", VV, [
              pe("div", RV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", FV, "：")) : ot("", !0)
              ]),
              pe("div", BV, [
                c.value ? (q(), te("div", jV, we(A.model), 1)) : (q(), te("div", LV, [
                  h(Te, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    type: "date",
                    format: A.format,
                    "value-format": A.format,
                    placeholder: A.placeholder,
                    transfer: ""
                  }, null, 8, ["value", "onUpdate:value", "format", "value-format", "placeholder"])
                ]))
              ])
            ])) : A.type === "inputNumber" ? (q(), te("div", HV, [
              pe("div", zV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", YV, "：")) : ot("", !0)
              ]),
              pe("div", WV, [
                c.value ? (q(), te("div", UV, we(A.model), 1)) : (q(), te("div", GV, [
                  h(ge, {
                    min: 0,
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X
                  }, null, 8, ["value", "onUpdate:value"])
                ]))
              ])
            ])) : A.type === "email" ? (q(), te("div", KV, [
              pe("div", qV, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", XV, "：")) : ot("", !0)
              ]),
              pe("div", ZV, [
                c.value ? (q(), te("div", QV, we(A.model) + we(A.append), 1)) : (q(), te("div", JV, [
                  h(N, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    placeholder: A.placeholder
                  }, {
                    addonAfter: he(() => [
                      In(h(ne, {
                        value: A.append,
                        "onUpdate:value": (X) => A.append = X,
                        style: { width: "100px" }
                      }, {
                        default: he(() => [
                          h(L, { value: ".com" }, {
                            default: he(() => [
                              Me(".com")
                            ]),
                            _: 1
                          }),
                          h(L, { value: ".cn" }, {
                            default: he(() => [
                              Me(".cn")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"]), [
                        [Ji, ["显示", "show"].includes(A.hasSuffix)]
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "link" ? (q(), te("div", eR, [
              pe("div", tR, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", nR, "：")) : ot("", !0)
              ]),
              pe("div", rR, [
                c.value ? (q(), te("a", {
                  key: 0,
                  target: "_blank",
                  style: { display: "block" },
                  class: "view-model",
                  href: (A.prepend || "") + A.model + (A.append || "")
                }, we(A.prepend || "") + we(A.model) + we(A.append || ""), 9, aR)) : (q(), te("div", oR, [
                  h(N, {
                    value: A.model,
                    "onUpdate:value": (X) => A.model = X,
                    placeholder: A.placeholder
                  }, {
                    addonBefore: he(() => [
                      h(ne, {
                        value: A.prepend,
                        "onUpdate:value": (X) => A.prepend = X,
                        style: { width: "100px" }
                      }, {
                        default: he(() => [
                          h(L, { value: "http://" }, {
                            default: he(() => [
                              Me("http://")
                            ]),
                            _: 1
                          }),
                          h(L, { value: "https://" }, {
                            default: he(() => [
                              Me("https://")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"])
                    ]),
                    addonAfter: he(() => [
                      h(ne, {
                        value: A.append,
                        "onUpdate:value": (X) => A.append = X,
                        style: { width: "100px" }
                      }, {
                        default: he(() => [
                          h(L, { value: ".com" }, {
                            default: he(() => [
                              Me(".com")
                            ]),
                            _: 1
                          }),
                          h(L, { value: ".cn" }, {
                            default: he(() => [
                              Me(".cn")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value", "onUpdate:value"])
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value", "placeholder"])
                ]))
              ])
            ])) : A.type === "attachment" ? (q(), te("div", iR, [
              pe("div", sR, [
                Me(we(A.title) + " ", 1),
                t.hasColon ? (q(), te("span", lR, "：")) : ot("", !0)
              ]),
              pe("div", uR, [
                pe("div", cR, [
                  h(tt, {
                    ref: (X) => {
                      C(X, A.id);
                    },
                    onPreview: $,
                    onRemove: (X) => {
                      M(X, A);
                    },
                    "default-file-list": A.defaultList,
                    headers: a.value,
                    "before-upload": T,
                    onChange: (X) => x(X, A),
                    action: c.value ? "" : t.uploadAction || A.action,
                    name: A.fileName,
                    class: Ni({ "view-mode": c.value })
                  }, {
                    default: he(() => [
                      h(Re, null, {
                        default: he(() => [
                          h(vr(JN)),
                          Me(we(o.value.upload), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onRemove", "default-file-list", "headers", "onChange", "action", "name", "class"])
                ])
              ])
            ])) : ot("", !0),
            A.type !== "container" && l.value ? (q(), Bt(ft, {
              key: 12,
              class: "remove-btn",
              title: o.value.removeConfirm,
              width: "184",
              placement: "topRight",
              onConfirm: (X) => d(A),
              transfer: ""
            }, {
              default: he(() => [
                h(vr(Db), {
                  title: o.value.remove
                }, null, 8, ["title"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : ot("", !0)
          ], 2)
        ]),
        _: 1
      }, 8, ["list", "disabled"]);
    };
  }
}), dR = { class: "new-elements" }, hR = { class: "panel panel--info" }, pR = { class: "button draggable-button" }, vR = { class: "new-elements" }, mR = { class: "panel panel--info" }, gR = { class: "button draggable-button" }, bR = { class: "form" }, yR = { key: 0 }, CR = {
  key: 0,
  class: "widget-option"
}, wR = { class: "sub-title" }, OR = {
  key: 1,
  class: "widget-option"
}, SR = { class: "sub-title" }, _R = {
  key: 2,
  class: "widget-option"
}, xR = { class: "sub-title" }, PR = ["onClick"], TR = {
  key: 3,
  class: "widget-option"
}, ER = { class: "sub-title" }, kR = {
  key: 4,
  class: "widget-option"
}, DR = { class: "sub-title" }, $R = {
  key: 5,
  class: "widget-option"
}, IR = { class: "sub-title" }, MR = { key: 1 }, AR = {
  name: "NeoCustomFormNext"
}, Zv = /* @__PURE__ */ K({
  ...AR,
  props: {
    uploadAction: { default: "" },
    height: { default: "100%" },
    value: { default: () => [] },
    mode: { default: "design" },
    lang: { default: "zh-CN" },
    langPackage: { default: () => ({}) },
    header: { type: Function, default: () => {
    } },
    hasColon: { type: Boolean, default: !1 },
    domain: { default: "" },
    uploadInfo: { default: () => ({
      statusKey: "Status",
      successValue: 1,
      uploadFileName: ""
    }) }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const n = t, r = Jf.directive, a = Q({}), o = Q(["select", "multiple", "radio", "checkbox"]), s = Q(["input", "textarea"]), l = Q({
      layoutTxt: "",
      fieldsTxt: "",
      dragToCanvas: "",
      option: ""
    }), u = Q([]), c = Q([]), f = Q(n.mode === "design"), d = Q("tab1"), p = Q(""), m = (k) => {
      let V = {
        icon: ""
      };
      return k.type === "attachment" && (V.fileName = n.uploadInfo.uploadFileName || k.fileName), {
        ...k,
        isTem: !1,
        id: Date.now(),
        ...V,
        ...["container2", "container3"].includes(k.type) ? { columns: ec(k.id) } : {}
      };
    }, v = Q([]);
    it(
      () => n.value,
      () => {
        v.value = n.value || [];
      },
      { immediate: !0 }
    ), it(
      () => v.value,
      () => {
        e("update:value", v.value);
      },
      { deep: !0 }
    );
    const g = (k) => {
      var V;
      if ((V = k.relatedContext) != null && V.element)
        return !k.relatedContext.element.isTem;
    }, C = (k, V) => {
      let I;
      for (let F = 0; F < k.length; F++)
        if (k[F].id === V) {
          I = k[F];
          break;
        } else
          Array.isArray(k[F]) ? I = C(k[F], V) : k[F].columns && Object.values(k[F].columns).forEach(
            (B) => {
              I || (I = C(
                B,
                V
              ));
            }
          );
      return I;
    };
    Ut("handleSelect", (k) => {
      a.value = C(v.value, k);
    }), Ut("setDragType", (k) => {
      p.value = k;
    });
    const w = (k, V, I, F) => {
      k.id === V.id ? I.splice(F, 1) : Array.isArray(k) ? k.map((B, E) => w(B, V, k, E)) : k.columns && Object.values(k.columns).map(
        (B, E) => w(B, V)
      );
    }, _ = (k) => {
      w(n.value, k), Le(() => {
        a.value = {};
      });
    }, x = () => {
      var k, V, I, F, B, E;
      (E = (k = a.value) == null ? void 0 : k.value) == null || E.push({
        value: `${l.value.option}${((I = (V = a.value) == null ? void 0 : V.value) == null ? void 0 : I.length) + 1}`,
        label: `${l.value.option}${((B = (F = a.value) == null ? void 0 : F.value) == null ? void 0 : B.length) + 1}`
      });
    }, P = (k) => {
      var V, I;
      a.value.value && a.value.value.length === 1 || (a.value.value = (I = (V = a.value) == null ? void 0 : V.value) == null ? void 0 : I.filter(
        (F) => F.value !== k
      ));
    }, T = (k) => {
      p.value = u.value[k.oldIndex].type;
    }, M = () => {
      p.value = "";
    };
    return (() => {
      l.value = Object.assign({}, Qy(n.lang), n.langPackage), u.value = rN(l.value), c.value = t0(l.value);
    })(), (k, V) => {
      const I = If, F = Pn, B = XI, E = pt, j = At, D = Df, N = H4, U = qI;
      return q(), te("div", {
        class: "neo-form",
        style: u0({ height: t.height })
      }, [
        h(U, {
          type: "flex",
          class: "neo-body"
        }, {
          default: he(() => [
            f.value ? (q(), Bt(B, {
              key: 0,
              class: "left-section"
            }, {
              default: he(() => [
                h(F, {
                  activeKey: d.value,
                  "onUpdate:activeKey": V[0] || (V[0] = (L) => d.value = L),
                  size: "small"
                }, {
                  default: he(() => [
                    h(I, {
                      tab: l.value.fieldsTxt,
                      key: "tab1"
                    }, {
                      default: he(() => [
                        pe("div", dR, [
                          pe("div", hR, [
                            h(vr(Ju), {
                              move: g,
                              itemKey: "id",
                              list: c.value,
                              group: { name: "container", pull: "clone", put: !1 },
                              clone: m
                            }, {
                              item: he(({ element: L }) => [
                                pe("div", pR, [
                                  Me(we(L.title) + " ", 1),
                                  (q(), Bt(c0(L.icon), { class: "buttonIcon" }))
                                ])
                              ]),
                              _: 1
                            }, 8, ["list"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["tab"]),
                    h(I, {
                      tab: l.value.layoutTxt,
                      key: "tab2"
                    }, {
                      default: he(() => [
                        pe("div", vR, [
                          pe("div", mR, [
                            h(vr(Ju), {
                              move: g,
                              itemKey: "id",
                              list: u.value,
                              group: { name: "container", pull: "clone", put: !1 },
                              clone: m,
                              onStart: T,
                              onEnd: M
                            }, {
                              item: he(({ element: L }) => [
                                pe("div", gR, we(L.title), 1)
                              ]),
                              _: 1
                            }, 8, ["list"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["tab"])
                  ]),
                  _: 1
                }, 8, ["activeKey"])
              ]),
              _: 1
            })) : ot("", !0),
            h(B, { class: "middle-section" }, {
              default: he(() => [
                In((q(), te("div", {
                  class: Ni(["content", { shadow: f.value }])
                }, [
                  pe("div", null, [
                    pe("div", bR, [
                      f0(k.$slots, "preset-fields", { class: "preset-fields" }),
                      h(fR, {
                        "upload-info": t.uploadInfo,
                        dragType: p.value,
                        list: v.value,
                        "selected-item": a.value,
                        "upload-action": t.uploadAction,
                        domain: t.domain,
                        mode: t.mode,
                        header: t.header,
                        lang: t.lang,
                        "has-colon": t.hasColon,
                        onHandleDelete: _
                      }, null, 8, ["upload-info", "dragType", "list", "selected-item", "upload-action", "domain", "mode", "header", "lang", "has-colon"])
                    ])
                  ])
                ], 2)), [
                  [vr(r)]
                ])
              ]),
              _: 3
            }),
            f.value ? (q(), Bt(B, {
              key: 1,
              class: "right-section"
            }, {
              default: he(() => [
                h(F, null, {
                  default: he(() => [
                    h(I, {
                      tab: l.value.setting,
                      key: "1"
                    }, {
                      default: he(() => [
                        a.value.id ? (q(), te("div", yR, [
                          a.value.id ? (q(), te("div", CR, [
                            pe("div", wR, we(l.value.title), 1),
                            h(E, {
                              value: a.value.title,
                              "onUpdate:value": V[1] || (V[1] = (L) => a.value.title = L)
                            }, null, 8, ["value"])
                          ])) : ot("", !0),
                          s.value.includes(a.value.type) ? (q(), te("div", OR, [
                            pe("div", SR, we(l.value.defaultVal), 1),
                            h(E, {
                              value: a.value.placeholder,
                              "onUpdate:value": V[2] || (V[2] = (L) => a.value.placeholder = L)
                            }, null, 8, ["value"])
                          ])) : ot("", !0),
                          o.value.includes(a.value.type) ? (q(), te("div", _R, [
                            pe("div", xR, we(l.value.optionsTxt), 1),
                            (q(!0), te(mt, null, Un(a.value.value, (L) => (q(), Bt(E, {
                              value: L.label,
                              "onUpdate:value": (ne) => L.label = ne,
                              key: L.value
                            }, {
                              addonBefore: he(() => [
                                pe("div", {
                                  class: "inputBtn",
                                  onClick: (ne) => P(L.value)
                                }, [
                                  h(vr(WN))
                                ], 8, PR)
                              ]),
                              addonAfter: he(() => [
                                pe("div", {
                                  onClick: x,
                                  class: "inputBtn"
                                }, [
                                  h(vr(Wb))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value", "onUpdate:value"]))), 128))
                          ])) : ot("", !0),
                          a.value.type === "date" ? (q(), te("div", TR, [
                            pe("div", ER, we(l.value.dateFormat), 1),
                            h(D, {
                              value: a.value.format,
                              "onUpdate:value": V[3] || (V[3] = (L) => a.value.format = L),
                              vertical: ""
                            }, {
                              default: he(() => [
                                (q(!0), te(mt, null, Un(a.value.formatOptions, (L, ne) => (q(), Bt(j, {
                                  key: ne,
                                  value: L
                                }, {
                                  default: he(() => [
                                    pe("span", null, we(L), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : ot("", !0),
                          a.value.type === "inputNumber" ? (q(), te("div", kR, [
                            pe("div", DR, we(l.value.numberType), 1),
                            h(D, {
                              value: a.value.format,
                              "onUpdate:value": V[4] || (V[4] = (L) => a.value.format = L),
                              vertical: ""
                            }, {
                              default: he(() => [
                                (q(!0), te(mt, null, Un(a.value.formatOptions, (L, ne) => (q(), Bt(j, {
                                  key: ne,
                                  value: L
                                }, {
                                  default: he(() => [
                                    pe("span", null, we(L), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : ot("", !0),
                          a.value.type === "email" ? (q(), te("div", $R, [
                            pe("div", IR, we(l.value.mailSuffix), 1),
                            h(D, {
                              value: a.value.hasSuffix,
                              "onUpdate:value": V[5] || (V[5] = (L) => a.value.hasSuffix = L),
                              vertical: ""
                            }, {
                              default: he(() => [
                                (q(!0), te(mt, null, Un(a.value.suffixOptions, (L, ne) => (q(), Bt(j, {
                                  value: L,
                                  key: ne
                                }, {
                                  default: he(() => [
                                    pe("span", null, we(L), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ])) : ot("", !0)
                        ])) : (q(), te("div", MR, [
                          h(N, {
                            type: "warning",
                            "show-icon": ""
                          }, {
                            message: he(() => [
                              pe("h4", null, we(l.value.selectComponent), 1)
                            ]),
                            _: 1
                          })
                        ]))
                      ]),
                      _: 1
                    }, 8, ["tab"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : ot("", !0)
          ]),
          _: 3
        })
      ], 4);
    };
  }
});
const VR = {
  install: (t) => (t.component(Zv.name, Zv), t)
};
export {
  Zv as CustomForm,
  VR as default
};
//# sourceMappingURL=index.es.js.map

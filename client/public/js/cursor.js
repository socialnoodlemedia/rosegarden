(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Accordion = /*#__PURE__*/function (_Component) {
  _inherits(Accordion, _Component);

  var _super = _createSuper(Accordion);

  function Accordion(site) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, "accordion");
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Accordion, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var heading = e.target.closest(".accordion__heading");
        var accordion = e.target.closest(".accordion");

        if (accordion && heading) {
          _this2.toggle(accordion);
        }
      });
    }
  }, {
    key: "toggle",
    value: function toggle(accordion) {
      if (accordion.classList.contains("accordion--expanded")) {
        accordion.classList.remove("accordion--expanded");
      } else {
        accordion.querySelector(".accordion__content").style.height = accordion.querySelector(".accordion__inner").offsetHeight + "px";
        accordion.classList.add("accordion--expanded");
      }
    }
  }]);

  return Accordion;
}(_component["default"]);

exports["default"] = Accordion;

},{"./component":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Anima = /*#__PURE__*/function (_Component) {
  _inherits(Anima, _Component);

  var _super = _createSuper(Anima);

  function Anima(site) {
    var _this;

    _classCallCheck(this, Anima);

    _this = _super.call(this, "anima");
    site.components.mount(_assertThisInitialized(_this)); //site.navigation.registerNavigationCallback(this.enterPageWithDelay.bind(this, 300));

    _this.t = 100;
    _this.base = 200;
    _this.benter = _this.enter.bind(_assertThisInitialized(_this));
    _this.bexit = _this.exit.bind(_assertThisInitialized(_this));
    _this.bclear = _this.clear.bind(_assertThisInitialized(_this));

    _inView["default"].threshold(0);

    _inView["default"].offset(window.innerHeight * 0.15);

    if (site.browser.state.isMobile) _inView["default"].offset(50);
    if (site.edit) document.documentElement.classList.add("no-anima");
    setTimeout(function () {
      setInterval(_this.check, 100);
    }, 2000);

    _this.enterPageWithDelay(2000);

    return _this;
  }

  _createClass(Anima, [{
    key: "check",
    value: function check() {
      (0, _inView["default"])('.scroll').check();
    }
  }, {
    key: "mount",
    value: function mount(site) {}
  }, {
    key: "enterPageWithDelay",
    value: function enterPageWithDelay(delay) {
      if (!delay || delay == 0) this.enterPage();else setTimeout(this.enterPage.bind(this), delay);
    }
  }, {
    key: "enterPage",
    value: function enterPage() {
      document.querySelectorAll(".entry").forEach(this.run.bind(this));
      (0, _inView["default"])('.scroll').on('enter', this.run.bind(this));
      (0, _inView["default"])('.scroll').check();
    }
  }, {
    key: "run",
    value: function run(el) {
      if (el.classList.contains("anima")) this.enter(el);
      el.querySelectorAll(".anima").forEach(this.benter);
      el.classList.remove("scroll");
    }
  }, {
    key: "enter",
    value: function enter(el) {
      el.classList.remove("out");
      var delay = Number(el.getAttribute("data-anima-delay")) || 0;
      setTimeout(function () {
        el.classList.add("in");
      }, delay * this.t + this.base);
    }
  }, {
    key: "exit",
    value: function exit(el) {
      el.classList.add("out");
    }
  }, {
    key: "clear",
    value: function clear(el) {
      el.classList.remove("out");
      el.classList.remove("in");
    }
  }, {
    key: "inChildren",
    value: function inChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.benter);
    }
  }, {
    key: "outChildren",
    value: function outChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bexit);
    }
  }, {
    key: "clearChildren",
    value: function clearChildren(el) {
      if (!el) return;
      var c = el.querySelectorAll(".anima");
      if (!c) return;
      c.forEach(this.bclear);
    }
  }]);

  return Anima;
}(_component["default"]);

exports["default"] = Anima;

},{"./component":6,"in-view":26}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _cart = _interopRequireDefault(require("../utility/cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cart = /*#__PURE__*/function (_Component) {
  _inherits(Cart, _Component);

  var _super = _createSuper(Cart);

  function Cart(site) {
    var _this;

    _classCallCheck(this, Cart);

    _this = _super.call(this, "cart");
    _this.cart = (0, _cart["default"])(_this.validateCart.bind(_assertThisInitialized(_this)));
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cart, [{
    key: "mount",
    value: function mount(site) {
      this.badge = document.getElementById("cart-badge");
    }
  }, {
    key: "validateCart",
    value: function validateCart() {
      var _this2 = this;

      // Remove any products that are past their drop date
      var found = 0;
      if (!this.cart.data) return;
      this.cart.data.items.forEach(function (item, i) {
        var product = products.find(function (product) {
          return product.id == item.product_id;
        });
        var remove = false;

        if (product) {
          var parts = product.dropDate.split("-");

          if (parts.length == 3) {
            var date = new Date(parts[2], parts[1] - 1, parts[0]);
            var now = Date.now();
            var diff = date - now;
            var diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
            console.log(diffDays);

            if (diffDays < 0 || !diffDays) {
              remove = true;
            }
          } else {
            remove = true;
          }
        } else {
          remove = true;
        }

        if (remove) {
          setTimeout(function () {
            _this2.changeQuantity(item.key, 0);
          }, found * 300);
          found++;
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(variantId) {
      var _this3 = this;

      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var properties = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      var onError = arguments.length > 4 ? arguments[4] : undefined;
      this.cart.add(variantId, quantity, properties, function () {
        if (callback) callback();

        _this3.updateCartPill();

        _this3.validateCart();
      }, onError);
    }
  }, {
    key: "changeQuantity",
    value: function changeQuantity(line, quantity, callback) {
      var _this4 = this;

      this.cart.change(line, quantity, function () {
        if (callback) callback();

        _this4.updateCartPill();
      });
    }
  }, {
    key: "addNote",
    value: function addNote(note, callback) {
      this.cart.addNote(note, callback);
    }
  }, {
    key: "updateCartPill",
    value: function updateCartPill() {
      var count = this.cart.data.item_count;
      this.badge.innerHTML = count;
    }
  }, {
    key: "showCartLoading",
    value: function showCartLoading() {
      document.documentElement.classList.add("cart-loading");
    }
  }, {
    key: "hideCartLoading",
    value: function hideCartLoading() {
      document.documentElement.classList.remove("cart-loading");
    }
  }]);

  return Cart;
}(_component["default"]);

exports["default"] = Cart;

},{"../utility/cart":24,"./component":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CartPage = /*#__PURE__*/function (_Component) {
  _inherits(CartPage, _Component);

  var _super = _createSuper(CartPage);

  function CartPage(site) {
    var _this;

    _classCallCheck(this, CartPage);

    _this = _super.call(this, "cartpage");
    _this.cart = site.components.getComponent("cart");
    _this.plusMinus = site.components.getComponent("plusminus");
    _this.parser = new DOMParser();
    _this.browser = site.browser;
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CartPage, [{
    key: "mount",
    value: function mount(site) {}
  }, {
    key: "initListeners",
    value: function initListeners(doc) {
      doc.querySelectorAll(".cart__product:not(.inited)").forEach(this.initRowListeners.bind(this));
    }
  }, {
    key: "initRowListeners",
    value: function initRowListeners(row) {
      var line = row.getAttribute("data-line");
      row.querySelector("input[name='quantity']").addEventListener("change", this.changeQuantity.bind(this, line));
      row.querySelector(".removeItem").addEventListener("click", this.removeItem.bind(this, line));
      this.plusMinus.initOne(row.querySelector(".plusMinus"));
      row.classList.add("inited");
    }
  }, {
    key: "changeQuantity",
    value: function changeQuantity(line, e) {
      // Set a short timeout before this happens to handle multiple clicks
      this.cart.showCartLoading();
      this.cart.changeQuantity(line, e.target.value, this.reloadCart.bind(this));
    }
  }, {
    key: "removeItem",
    value: function removeItem(line) {
      // Remove the item here or just hide it?
      var el = document.querySelector("[data-line='" + line + "']");
      if (el) el.style.display = "none";
      this.cart.showCartLoading();
      this.cart.changeQuantity(line, 0, this.reloadCart.bind(this));
    }
  }, {
    key: "reloadCart",
    value: function reloadCart() {
      var _this2 = this;

      (0, _ajax.getAjax)("/cart", function (response) {
        var doc = _this2.parser.parseFromString(response, "text/html");

        var content = doc.getElementById("cart-inner");
        var cartInner = document.getElementById("cart-inner");
        if (!content || !cartInner) return;
        cartInner.innerHTML = content.innerHTML;

        _this2.initListeners(cartInner);

        setTimeout(_this2.cart.hideCartLoading, 50);
      });
    } // initListeners(){
    //   // Convert to document click type listeners
    //   let submit = document.querySelectorAll(".noteSubmit");
    //   if(submit) submit.forEach((item, i) => {
    //     item.addEventListener("click", this.addNote.bind(this));
    //   });
    //   let text = document.querySelectorAll(".noteText");
    //   if(text) text.forEach((item, i) => {
    //     item.addEventListener("input", (e) => {
    //       e.target.classList.add("dirty");
    //       document.querySelectorAll(".noteSubmit .button__label").forEach((item, i) => {
    //         item.innerHTML = "Save Note";
    //       });
    //     })
    //   });
    //   let checkoutForm = document.querySelectorAll(".checkoutForm");
    //   if(checkoutForm) checkoutForm.forEach((item, i) => {
    //     item.addEventListener("submit", this.showCartLoading);
    //   });
    //   let checkoutAnchor = document.querySelectorAll(".checkout-anchor");
    //   if(checkoutAnchor) checkoutAnchor.forEach((item, i) => {
    //     item.addEventListener("click", this.showCartLoading);
    //   });
    //
    //   this.reinitListeners();
    // }
    //
    // showCart(){
    //   document.documentElement.classList.add("show-cart");
    // }
    //
    // showCartLoading(){
    //   document.querySelectorAll(".checkoutButton").forEach((item, i) => {
    //     item.classList.add("button--loading");
    //     setTimeout(() => {
    //       document.documentElement.classList.add("is-animating");
    //     }, 500);
    //   });
    // }
    //
    // reinitListeners(){
    //   document.querySelectorAll(".cart__row:not(.inited)").forEach(this.initRowListeners.bind(this));
    // }

  }, {
    key: "initRowListeners",
    value: function initRowListeners(row) {
      var line = row.getAttribute("data-line");
      row.querySelector("input[name='quantity']").addEventListener("change", this.changeQuantity.bind(this, line));
      row.querySelector(".removeItem").addEventListener("click", this.removeItem.bind(this, line));
      this.plusMinus.initOne(row.querySelector(".plusMinus"));
      row.classList.add("inited");
    } // changeQuantity(line, e){
    //   this.cart.showCartLoading(false);
    //   this.cart.changeQuantity(line, e.target.value, this.updatePage.bind(this, false));
    // }
    //
    // removeItem(line){
    //   this.cart.showCartLoading(true);
    //   this.cart.changeQuantity(line, 0, this.updatePage.bind(this, true));
    // }
    // addNote(){
    //   let el = document.querySelector(".noteText.dirty")
    //   if(el){
    //     let val = el.value;
    //     this.cart.showCartLoading(false);
    //     this.cart.addNote(val, () => {
    //       document.querySelectorAll(".noteSubmit .button__label").forEach((item, i) => {
    //         item.innerHTML = "Saved!";
    //       });
    //       this.cart.hideCartLoading();
    //     });
    //   }
    // }
    // updateCheckoutUrl(){
    //   let hasSubscription = document.getElementById("cart-has-subscription")
    //   let url = hasSubscription ? reChargeBuildCheckoutURL() : "/checkout";
    //   let buttons = document.querySelectorAll(".checkoutButton");
    //   if(buttons){
    //     buttons.forEach((item, i) => {
    //       if(hasSubscription) item.classList.add("checkoutButton--subscription");
    //       else item.classList.remove("checkoutButton--subscription");
    //     });
    //   }
    //   let anchors = document.querySelectorAll(".checkout-anchor");
    //   if(anchors){
    //     anchors.forEach((item, i) => {
    //       item.href= url;
    //     });
    //   }
    // }
    // updatePage(full, callback){
    //
    //   let selector = full ? ".cartSwap, .fullSwap" : ".cartSwap";
    //
    //   if(this.cart.cart.changed) selector = ".emptySwap";
    //
    //   console.log(selector);
    //
    //   getAjax("/cart", (response) => {
    //     let newDoc = this.parser.parseFromString(response, 'text/html');
    //
    //     document.querySelectorAll(selector).forEach((swap, i) => {
    //       let id = swap.id;
    //       let rep = newDoc.getElementById(id);
    //       if(rep){
    //         swap.innerHTML = rep.innerHTML;
    //         this.browser.lazy.update();
    //       } else {
    //         swap.remove();
    //       }
    //     });
    //     if(selector == ".cartSwap, .fullSwap"){
    //       this.reinitListeners();
    //     } else if (selector == ".emptySwap"){
    //       this.initListeners();
    //     }
    //
    //     this.cart.hideCartLoading();
    //     if(callback) callback();
    //     if(selector == ".emptySwap" && Zapiet && ZapietCachedSettings) Zapiet.start(ZapietCachedSettings);
    //     // Update checkout url
    //     this.updateCheckoutUrl();
    //   })
    // }

  }]);

  return CartPage;
}(_component["default"]);

exports["default"] = CartPage;

},{"../utility/ajax":23,"./component":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Circle = /*#__PURE__*/function (_Component) {
  _inherits(Circle, _Component);

  var _super = _createSuper(Circle);

  function Circle(site) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _super.call(this, "circle");
    _this.state = {
      browser: site.browser,
      navigation: site.navigation,
      circle: document.getElementById("transition-circle")
    };
    site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Circle, [{
    key: "render",
    value: function render() {
      if (this.state.navigation.state.pageState.includes("/products/")) {
        var remainingScroll = document.body.scrollHeight - window.innerHeight - this.state.browser.state.scrollTop;
        var remainingRem = remainingScroll / this.state.browser.state.rem;
        var full = this.state.browser.state.isMobile ? 25 : 35;

        if (remainingRem < full) {
          document.documentElement.classList.add("circle-bottom");
        } else {
          document.documentElement.classList.remove("circle-bottom");
        }

        if (remainingRem < 85) document.documentElement.classList.add("hide-add-button");else document.documentElement.classList.remove("hide-add-button");
      } else {//this.state.circle.style.transform = "";
      }
    }
  }]);

  return Circle;
}(_component["default"]);

exports["default"] = Circle;

},{"./component":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, Component);

    this.name = name;
  }

  _createClass(Component, [{
    key: "mount",
    value: function mount() {}
  }, {
    key: "unmount",
    value: function unmount() {}
  }]);

  return Component;
}();

exports["default"] = Component;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _dcanvas = _interopRequireDefault(require("../utility/2dcanvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cursors = /*#__PURE__*/function (_Component) {
  _inherits(Cursors, _Component);

  var _super = _createSuper(Cursors);

  function Cursors(site) {
    var _this;

    _classCallCheck(this, Cursors);

    _this = _super.call(this, "cursors");
    _this.showing = false;
    _this.browser = site.browser;
    _this.navigation = site.navigation;
    _this.state = {
      mouseCache: {
        x: site.browser.state.mouse.xLag,
        y: site.browser.state.mouse.yLag
      },
      moveDist: 0,
      doodleIndex: 0
    };
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cursors, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      setTimeout(function () {
        _this2.browser.addToRenderLoop(_this2.render.bind(_this2));
      }, 2000);
    }
  }, {
    key: "spawn",
    value: function spawn() {
      var el = document.createElement("div");
      el.classList = 'absodoodle doodle';
      el.innerHTML = "<div class='doodle__inner'><img class='doodle__img' src='images/cherry blossom.png'></div>";
      el.style.top = this.browser.state.scrollLag + this.browser.state.mouse.yLag + "px";
      el.style.left = this.browser.state.mouse.xLag + "px";
      document.body.appendChild(el);
      setTimeout(function () {
        el.remove();
      }, 1000);
      this.state.doodleIndex = (this.state.doodleIndex + 1) % doodles.length;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.browser.state.isMobile) return;

      if (this.navigation.state.pageState != "/") {
        this.state.moveDist = 0;
        this.state.mouseCache.x = this.browser.state.mouse.xLag;
        this.state.mouseCache.y = this.browser.state.mouse.yLag;
        return;
      }

      var d = Math.sqrt(Math.pow(this.browser.state.mouse.xLag - this.state.mouseCache.x, 2) + Math.pow(this.browser.state.mouse.yLag - this.state.mouseCache.y, 2));
      this.state.moveDist += d;
      var dd = this.browser.state.rem * 11;

      if (this.state.moveDist > dd) {
        this.state.moveDist -= dd;
        this.spawn();
      }

      this.state.mouseCache.x = this.browser.state.mouse.xLag;
      this.state.mouseCache.y = this.browser.state.mouse.yLag;
    }
  }]);

  return Cursors;
}(_component["default"]);

exports["default"] = Cursors;

},{"../utility/2dcanvas":21,"./component":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Magentic = /*#__PURE__*/function (_Component) {
  _inherits(Magentic, _Component);

  var _super = _createSuper(Magentic);

  function Magentic(site) {
    var _this;

    _classCallCheck(this, Magentic);

    _this = _super.call(this, "magnetic");
    _this.browser = site.browser;
    _this.mags = [];
    site.components.mount(_assertThisInitialized(_this));
    site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Magentic, [{
    key: "mount",
    value: function mount(site) {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      if (this.browser.state.isMobile) return;
      this.mags = [];
      var els = document.querySelectorAll(".magnetic");
      els.forEach(this.initOne.bind(this));
    }
  }, {
    key: "initOne",
    value: function initOne(el) {
      var mag = {
        el: el,
        bounds: el.getBoundingClientRect(),
        "in": false,
        mve: 0,
        distMulti: 0
      };
      this.mags.push(mag);
      el.addEventListener("mouseenter", function () {
        return mag["in"] = true;
      });
      el.addEventListener("mouseleave", function () {
        return mag["in"] = false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.browser.state.isMobile) return;
      this.mags.forEach(function (mag) {
        // Get dist to mouse;
        var toMouse = {
          x: mag.bounds.left + mag.bounds.width / 2 - _this2.browser.state.mouse.xLag,
          y: mag.bounds.top + mag.bounds.height / 2 - _this2.browser.state.mouse.yLag
        };
        var dist = Math.sqrt(Math.pow(toMouse.x, 2) + Math.pow(toMouse.y, 2));
        var targetDistMulti = 1 - Math.min(1, dist / (mag.bounds.width * 2));
        mag.distMulti += (targetDistMulti - mag.distMulti) * 0.1; // Apply transform based on it.

        var mveTarget = (mag["in"] ? 75 : 25) * mag.distMulti;
        mag.mve += (mveTarget - mag.mve) * 0.1;
        var tx = Math.max(-1, Math.min(1, toMouse.x / mag.bounds.width * -1)) * mag.mve;
        var ty = Math.max(-1, Math.min(1, toMouse.y / mag.bounds.height * -1)) * mag.mve;
        var py = (_this2.browser.state.scrollLag - _this2.browser.state.scrollTop) * 0.5;
        mag.el.style.transform = "translate3d(" + tx + "%," + ty + "%,0) translateY(" + py + "px)";
      });
    }
  }]);

  return Magentic;
}(_component["default"]);

exports["default"] = Magentic;

},{"./component":6}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _access = require("../utility/access");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PlusMinus = /*#__PURE__*/function (_Component) {
  _inherits(PlusMinus, _Component);

  var _super = _createSuper(PlusMinus);

  function PlusMinus(site) {
    var _this;

    _classCallCheck(this, PlusMinus);

    _this = _super.call(this, "plusminus");
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlusMinus, [{
    key: "mount",
    value: function mount(site) {
      this.init(document);
    }
  }, {
    key: "init",
    value: function init(doc) {
      doc.querySelectorAll("[data-pm]").forEach(this.initOne.bind(this));
    }
  }, {
    key: "initOne",
    value: function initOne(el) {
      if (el.getAttribute("data-pm-inited")) return;
      var pm = {
        el: el,
        input: el.querySelector("[data-pm-input]"),
        plus: el.querySelector("[data-pm-plus]"),
        minus: el.querySelector("[data-pm-minus]"),
        value: 1,
        min: el.getAttribute("data-pm-min") || 1,
        max: el.getAttribute("data-pm-max") || 99
      };
      pm.value = parseInt(pm.input.value);
      (0, _access.addConfirmListeners)(pm.plus, this.inc.bind(this, pm, 1));
      (0, _access.addConfirmListeners)(pm.minus, this.inc.bind(this, pm, -1));
      pm.input.addEventListener("change", this.parse.bind(this, pm));
      el.setAttribute("data-pm-inited", true);
    }
  }, {
    key: "inc",
    value: function inc(pm, amt) {
      pm.value += amt;
      pm.input.value = pm.value;
      this.triggerChange(pm);
    }
  }, {
    key: "minmax",
    value: function minmax(pm, val) {
      return Math.min(pm.max, Math.max(pm.min, val));
    }
  }, {
    key: "parse",
    value: function parse(pm) {
      var parsed = parseInt(pm.input.value);
      if (parsed) pm.value = this.minmax(pm, parsed);
      this.output(pm);
    }
  }, {
    key: "output",
    value: function output(pm) {
      pm.input.value = pm.value;
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(pm) {
      if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        pm.input.dispatchEvent(evt);
      } else pm.input.fireEvent("onchange"); //$( pm.input ).trigger( "change" );

    }
  }]);

  return PlusMinus;
}(_component["default"]);

exports["default"] = PlusMinus;

},{"../utility/access":22,"./component":6}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _cookies = require("../utility/cookies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Popup = /*#__PURE__*/function (_Component) {
  _inherits(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(site) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _super.call(this, "popup");
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popup, [{
    key: "mount",
    value: function mount(site) {
      var popup = document.getElementById("popup");
      if (!popup) return;
      this.initPopup(popup);
      document.addEventListener("click", function (e) {
        var origin = e.target.closest(".show-popup");
        if (origin) document.documentElement.classList.add("show-popup");
      });
    }
  }, {
    key: "initPopup",
    value: function initPopup(popup) {
      var time = Number(popup.getAttribute("data-show-time")) * 1000;
      if (!time) time = 10000;
      var force = false;

      if (document.getElementById("emails-accepted")) {
        time = 500;
        force = true;
      }

      if (!(0, _cookies.getCookie)("rogueshop-popup-closed") || force) {
        setTimeout(function () {
          document.documentElement.classList.add("show-popup");
        }, time);
      }

      var close = document.getElementById("popup-close");
      close.addEventListener("click", function () {
        document.documentElement.classList.remove("show-popup");
        (0, _cookies.setCookie)("rogueshop-popup-closed", true, 365);
      });
    }
  }]);

  return Popup;
}(_component["default"]);

exports["default"] = Popup;

},{"../utility/cookies":25,"./component":6}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _ajax = require("../utility/ajax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductForm = /*#__PURE__*/function (_Component) {
  _inherits(ProductForm, _Component);

  var _super = _createSuper(ProductForm);

  function ProductForm(site) {
    var _this;

    _classCallCheck(this, ProductForm);

    _this = _super.call(this, "productform");
    _this.navigation = site.navigation;
    _this.cart = site.components.getComponent("cart");
    _this.cartPage = site.components.getComponent("cartpage");
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductForm, [{
    key: "mount",
    value: function mount(site) {
      this.initListeners();
    }
  }, {
    key: "initListeners",
    value: function initListeners() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        var button = e.target.closest(".addToCart");

        if (button) {
          _this2.addToCart(button);
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(button) {
      var _this3 = this;

      // Get Data
      var wrap = button.closest(".addToCartWrapper");
      var id = Number(button.getAttribute("data-product-id"));
      var product = products.find(function (prod) {
        return id == prod.id;
      });

      if (product == null) {
        this.displayError("Missing product");
        return;
      } // Get options


      var options = ["Default Title", null, null];
      var valid = true;
      var message = "";
      product.options.forEach(function (option, i) {
        var found = false;
        var inputs = wrap.querySelectorAll("[name=" + option.name + "]");
        inputs.forEach(function (input) {
          if (input.checked) {
            found = true;
            options[i] = input.value;
          }
        });

        if (!found) {
          valid = false;
          message += option.name + " is required.\n";
        }
      });

      if (!valid) {
        var options = document.querySelector(".productContent__cartBar__options");

        if (options) {
          options.classList.add("productContent__cartBar__options--arrow");
          components.getComponent("scroll-to").scrollToEl(options, window.innerHeight / -2);
        } //this.displayError(message);


        return;
      } // Get variant


      var variant = null;
      product.variants.forEach(function (v, i) {
        if (v.option1 == options[0] && v.option2 == options[1] && v.option3 == options[2]) variant = v;
      });
      if (product.variants.length == 1) variant = product.variants[0];

      if (!variant) {
        this.displayError("Missing variant");
        return;
      } // Get quantity;


      var quantityField = wrap.querySelector("input[name='quantity']");
      var quantity = parseInt(quantityField.value);

      if (quantity <= 0 || !quantity) {
        this.displayError("Quantity must be greater than zero");
        return;
      } // Start request


      var properties = {};
      this.navigation.openDrawer(true);
      this.cart.addToCart(variant.id, quantity, properties, function () {
        _this3.navigation.loadInDrawer("/cart", true);
      }, function () {
        _this3.displayError("Issue with adding to cart");
      });
    }
  }, {
    key: "displayError",
    value: function displayError(message) {
      console.log(message);
    }
  }]);

  return ProductForm;
}(_component["default"]);

exports["default"] = ProductForm;

},{"../utility/ajax":23,"./component":6}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _access = require("../utility/access");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ScrollTo = /*#__PURE__*/function (_Component) {
  _inherits(ScrollTo, _Component);

  var _super = _createSuper(ScrollTo);

  function ScrollTo(site) {
    var _this;

    _classCallCheck(this, ScrollTo);

    _this = _super.call(this, "scroll-to");
    _this.browser = site.browser;
    site.components.attachToPages(["all"], _assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollTo, [{
    key: "mount",
    value: function mount(site) {
      var _this2 = this;

      document.querySelectorAll(".scrollTo").forEach(function (el, i) {
        (0, _access.addConfirmListeners)(el, _this2.scrollToId.bind(_this2, el));
      });
    }
  }, {
    key: "scrollToId",
    value: function scrollToId(el, e) {
      if (e) e.preventDefault();
      var selector = el.getAttribute("href");

      if (selector) {
        var to = document.querySelector(selector);

        if (to) {
          this.scrollToEl(to);
          var offset = this.browser.state.scrollTop + to.getBoundingClientRect().top - window.innerWidth * 0.1;
          $("html, body").stop().animate({
            scrollTop: offset
          }, 500, 'swing');
        }
      }
    }
  }, {
    key: "scrollToEl",
    value: function scrollToEl(to) {
      var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var offset = this.browser.state.scrollTop + to.getBoundingClientRect().top - window.innerWidth * 0.1 + push; //$("html, body").stop().animate({scrollTop: offset}, 500, 'swing');

      window.scrollTo(0, offset);
    }
  }]);

  return ScrollTo;
}(_component["default"]);

exports["default"] = ScrollTo;

},{"../utility/access":22,"./component":6}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _inView = _interopRequireDefault(require("in-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ScrollPal = /*#__PURE__*/function (_Component) {
  _inherits(ScrollPal, _Component);

  var _super = _createSuper(ScrollPal);

  function ScrollPal(site) {
    var _this;

    _classCallCheck(this, ScrollPal);

    _this = _super.call(this, "scrollpal");
    _this.browser = site.browser;
    _this.images = [];
    site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
    site.browser.addToResizeLoop(_this.resize.bind(_assertThisInitialized(_this)));
    _this.pals = [];
    _this.center = 0;
    site.components.mount(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollPal, [{
    key: "mount",
    value: function mount(site) {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.pals.forEach(function (pal, i) {
        clearInterval(pal.interval);
      });
      this.pals = [];
      document.querySelectorAll(".pal").forEach(this.initEl.bind(this));
      (0, _inView["default"])('.pal').on('enter', this.show.bind(this));
      (0, _inView["default"])('.pal').on('exit', this.hide.bind(this));
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 100);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 500);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 1000);
      setTimeout(function () {
        _this2.pals.forEach(function (pal) {
          _this2.getOffset.bind(_this2, pal);
        });
      }, 2000);
    }
  }, {
    key: "show",
    value: function show(el) {
      var pal = this.find(el);
      if (pal) pal.showing = true;
    }
  }, {
    key: "hide",
    value: function hide(el) {
      var pal = this.find(el);
      if (pal) pal.showing = false;
    }
  }, {
    key: "find",
    value: function find(el) {
      return this.pals.find(function (o) {
        return o.el == el;
      });
    }
  }, {
    key: "initEl",
    value: function initEl(el) {
      var pal = {
        el: el,
        offset: 0,
        ratio: 0.5,
        // ability to set this.
        moves: []
      };
      el.querySelectorAll("[data-pal]").forEach(function (item, i) {
        pal.moves.push({
          el: item,
          speed: Number(item.getAttribute("data-pal")) || 1,
          offset: 0,
          onlyRotate: item.classList.contains("pal-onlyRotate")
        });
      });
      this.getOffset(pal);
      pal.interval = setInterval(this.getOffset.bind(this, pal), 3000);
      this.pals.push(pal);
      if (!this.browser.state.isMobile) this.renderOne(pal);
    }
  }, {
    key: "getOffset",
    value: function getOffset(pal) {
      var bounds = pal.el.getBoundingClientRect();
      pal.offset = bounds.top + this.browser.state.scrollTop + bounds.height * pal.ratio;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.browser.state.isMobile) return;
      this.center = this.browser.state.scrollLag + window.innerHeight / 2;
      this.pals.forEach(this.renderOne.bind(this));
    }
  }, {
    key: "renderOne",
    value: function renderOne(pal) {
      //if(!pal.showing) return;
      // Base move amount on center of parent pal section (less calcs + better alignment)
      // get scroll offset from center (based on screen height?? / set a max on this of a header height??)
      var offset = this.center - pal.offset;
      var move = offset / window.innerWidth * 100;
      pal.moves.forEach(function (item, i) {
        var y = item.speed * move;
        var x = y * 0.1;
        var deg = y * 0.5;

        if (item.onlyRotate) {
          item.el.style.transform = "rotate(" + deg + "deg)";
        } else {
          item.el.style.transform = "translate3d(" + x + "%," + y + "%,0) rotate(" + deg + "deg)";
        }
      });
    }
  }, {
    key: "resize",
    value: function resize() {}
  }]);

  return ScrollPal;
}(_component["default"]);

exports["default"] = ScrollPal;

},{"./component":6,"in-view":26}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BrowserController = /*#__PURE__*/function () {
  function BrowserController(site) {
    var _this = this;

    _classCallCheck(this, BrowserController);

    this.state = {
      scrollTop: this.getScroll(),
      scrollLag: this.getScroll(),
      lag: 20,
      toRender: [],
      toResize: [],
      resizeTimeout: null,
      mouse: {
        x: 0,
        y: 0,
        xLag: 0,
        yLag: 0,
        xSlowLag: 0,
        ySlowLag: 0,
        lag: 8,
        down: false
      },
      dpi: Math.min(2, window.devicePixelRatio || 1),
      t: 0,
      d: Date.now(),
      delta: 0,
      rate: 0,
      rem: 0,
      isMobile: false
    };
    this.site = site;
    this.lazy = new _vanillaLazyload["default"]({});

    if (site.edit) {
      setInterval(function () {
        _this.lazy.update();
      }, 2000);
    }

    this.init();
  }

  _createClass(BrowserController, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.resizeBaseWork();
      window.addEventListener("scroll", this.onScroll.bind(this));
      window.addEventListener('mousemove', this.onMouseMove.bind(this));
      window.addEventListener('mousedown', this.onMouseDown.bind(this));
      window.addEventListener('mouseup', this.onMouseUp.bind(this));
      window.addEventListener("mouseout", function (e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;

        if (!from || from.nodeName == "HTML") {
          _this2.onMouseUp();
        }
      });
      window.addEventListener('resize', this.onResize.bind(this));
      this.boundRender = this.renderLoop.bind(this);
      this.renderLoop();
    }
  }, {
    key: "onScroll",
    value: function onScroll(e) {
      this.state.scrollTop = this.getScroll();
    }
  }, {
    key: "getScroll",
    value: function getScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      this.state.mouse.x = e.clientX;
      this.state.mouse.y = e.clientY;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      this.state.mouse.down = true;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      this.state.mouse.down = false;
    }
  }, {
    key: "addToRenderLoop",
    value: function addToRenderLoop(callback) {
      this.state.toRender.push(callback);
    }
  }, {
    key: "renderBaseWork",
    value: function renderBaseWork() {
      this.state.delta = Date.now() - this.state.d;
      this.state.t += this.state.delta;
      this.state.d = Date.now();
      this.state.rate = this.state.delta / 16;
      this.state.mouse.xLag += (this.state.mouse.x - this.state.mouse.xLag) / this.state.mouse.lag;
      this.state.mouse.yLag += (this.state.mouse.y - this.state.mouse.yLag) / this.state.mouse.lag;
      this.state.mouse.xSlowLag += (this.state.mouse.x - this.state.mouse.xSlowLag) / this.state.mouse.lag / 2;
      this.state.mouse.ySlowLag += (this.state.mouse.y - this.state.mouse.ySlowLag) / this.state.mouse.lag / 2;
      this.state.scrollLag += (this.state.scrollTop - this.state.scrollLag) / this.state.lag;
    }
  }, {
    key: "renderLoop",
    value: function renderLoop(e) {
      var _this3 = this;

      this.renderBaseWork();
      this.state.toRender.forEach(function (callback) {
        callback(_this3.state.rate);
      });
      requestAnimationFrame(this.boundRender);
    }
  }, {
    key: "addToResizeLoop",
    value: function addToResizeLoop(callback) {
      this.state.toResize.push(callback);
      callback();
    }
  }, {
    key: "resizeBaseWork",
    value: function resizeBaseWork() {
      this.state.isMobile = window.innerWidth <= 600;
      this.state.rem = window.innerWidth / 100 * (1000 / (this.state.isMobile ? 375 : 1440));
    }
  }, {
    key: "onResize",
    value: function onResize() {
      clearTimeout(this.state.resizeTimeout);
      this.state.resizeTimeout = setTimeout(this.resizeLoop.bind(this), 100);
    }
  }, {
    key: "resizeLoop",
    value: function resizeLoop(e) {
      this.resizeBaseWork();
      this.state.toResize.forEach(function (callback) {
        callback();
      });
    }
  }]);

  return BrowserController;
}();

exports["default"] = BrowserController;

},{"vanilla-lazyload":27}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initComponents;

var _componentRegister = _interopRequireDefault(require("./componentRegister"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initComponents(site) {
  site.components = {
    site: site,
    debug: site.debug,
    all: [],
    mounted: [],
    attachedToPages: []
  };
  window.components = site.components;
  site.components.getComponent = getComponent.bind(site.components);
  site.components.mount = mount.bind(site.components);
  site.components.unmount = unmount.bind(site.components);
  site.components.attachToPages = attachToPages.bind(site.components);
  site.components.mountPage = mountPage.bind(site.components);
  site.components.unmountPage = unmountPage.bind(site.components);
  (0, _componentRegister["default"])(site);
}

function getComponent(name) {
  return this.all.find(function (c) {
    return c.name == name;
  });
}

function mount(component) {
  this.mounted.push({
    component: component
  });
  component.mount(this.site);
}

function unmount(component) {//loop through and remove
}

function attachToPages(pages, component) {
  var _this = this;

  pages.forEach(function (path) {
    _this.attachedToPages.push({
      component: component,
      path: path
    });
  });
}

function mountPage(path) {
  var _this2 = this;

  this.attachedToPages.forEach(function (attach) {
    if (attach.path == path || attach.path == "all") {
      _this2.mounted.push({
        component: attach.component,
        trigger: {
          path: attach.path
        }
      });

      attach.component.mount(_this2.site);
    }
  });
}

function unmountPage(path) {
  var mount;

  for (var i = this.mounted.length - 1; i >= 0; i--) {
    mount = this.mounted[i];

    if (mount.trigger && mount.trigger.path == path) {
      mount.component.unmount(this.site);
      this.mounted.splice(i, 1);
    }
  }
}

},{"./componentRegister":16}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerComponents;

var _anima = _interopRequireDefault(require("../components/anima"));

var _circle = _interopRequireDefault(require("../components/circle"));

var _accordion = _interopRequireDefault(require("../components/accordion"));

var _plusMinus = _interopRequireDefault(require("../components/plus-minus"));

var _cart = _interopRequireDefault(require("../components/cart"));

var _cartpage = _interopRequireDefault(require("../components/cartpage"));

var _productform = _interopRequireDefault(require("../components/productform"));

var _scrollpal = _interopRequireDefault(require("../components/scrollpal"));

var _popup = _interopRequireDefault(require("../components/popup"));

var _magnetic = _interopRequireDefault(require("../components/magnetic"));

var _scrollTo = _interopRequireDefault(require("../components/scroll-to"));

var _cursors = _interopRequireDefault(require("../components/cursors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerComponents(site) {
  site.components.all.push(new _anima["default"](site));
  site.components.all.push(new _circle["default"](site));
  site.components.all.push(new _accordion["default"](site));
  site.components.all.push(new _plusMinus["default"](site));
  site.components.all.push(new _cart["default"](site));
  site.components.all.push(new _cartpage["default"](site));
  site.components.all.push(new _scrollTo["default"](site));
  site.components.all.push(new _productform["default"](site));
  site.components.all.push(new _popup["default"](site));
  site.components.all.push(new _scrollpal["default"](site));
  site.components.all.push(new _magnetic["default"](site));
  site.components.all.push(new _cursors["default"](site));
}

},{"../components/accordion":1,"../components/anima":2,"../components/cart":3,"../components/cartpage":4,"../components/circle":5,"../components/cursors":7,"../components/magnetic":8,"../components/plus-minus":9,"../components/popup":10,"../components/productform":11,"../components/scroll-to":12,"../components/scrollpal":13}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ajax = require("../utility/ajax");

var _cookies = require("../utility/cookies");

var _pageState = require("./pageState");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NavigationController = /*#__PURE__*/function () {
  function NavigationController(site) {
    _classCallCheck(this, NavigationController);

    this.state = {
      site: site,
      debug: site.debug,
      templates: {},
      pageState: "/",
      drawerState: "",
      inNavigation: false
    };
    this.initDrawer();
    this.loadTemplates();
    this.initLinks();
    this.loadInitialState();
    window.onpopstate = this.onPopState.bind(this);

    if ('scrollRestoration' in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = 'manual';
    }
  }

  _createClass(NavigationController, [{
    key: "loadTemplates",
    value: function loadTemplates() {
      var productTemplate = document.getElementById("product-template");
      if (!productTemplate) return;
      this.state.templates.product = productTemplate.innerHTML;
      productTemplate.remove();
    }
  }, {
    key: "initLinks",
    value: function initLinks() {
      var _this = this;

      document.addEventListener("click", function (e) {
        var origin = e.target.closest("a");

        if (origin && origin.getAttribute("data-allow-navigation") == undefined && origin.getAttribute("target") != "_blank") {
          e.preventDefault();
          if (origin.getAttribute("data-navigation-manual") != undefined) return;
          var image = origin.querySelector(".image-candidate");

          if (image) {
            image.classList.add("active-image");
            image.style.zIndex = 12;
            var parent = image.closest(".candidate-parent");
            if (parent) parent.style.zIndex = 12;
          }

          var path = origin.pathname;
          if (origin.getAttribute("data-load-id") != undefined) path = "#" + origin.getAttribute("data-load-id");

          _this.navigateTo(path);
        }
      });
    }
  }, {
    key: "loadInitialState",
    value: function loadInitialState() {
      var path = location.pathname;

      if (path.includes("/products/")) {
        (0, _pageState.outputProductPage)(path, this);
        document.documentElement.classList.remove("home-active");
        document.documentElement.classList.add("product-active");
        document.getElementById("product-content").appendChild(document.getElementById("transition-circle"));
        this.state.pageState = path;
      }

      setTimeout(function () {
        document.documentElement.classList.remove("fade-out");
        document.documentElement.classList.remove("page-out");
        document.getElementById("preloader").remove();
      }, 1300);
      var drawerState = (0, _cookies.getCookie)("roguestore_drawer");

      if (drawerState) {
        this.loadInDrawer(drawerState); //deleteCookie("roguestore_redirect");
      }
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(path) {
      if (this.state.inNavigation) return;

      if (path == "/") {
        this.closeDrawer();
        (0, _pageState.fadeTo)(path, this);
        this.addHistoryState(path);
      } else if (path.includes("/products/")) {
        this.closeDrawer();
        (0, _pageState.goToProduct)(path, this);
        this.addHistoryState(path);
      } else {
        if (path[0] == "#") {
          this.loadIDInDrawer(path);
        } else {
          this.loadInDrawer(path);
        }
      }
    }
  }, {
    key: "loadInDrawer",
    value: function loadInDrawer(path) {
      var _this2 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.state.drawerState == path && !force) {
        document.documentElement.classList.add("drawer-open");
        document.documentElement.classList.add("drawer-loaded");
        return;
      }

      document.documentElement.classList.remove("drawer-loaded");
      document.documentElement.classList.add("drawer-open");
      (0, _ajax.getAjax)(path, function (response) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(response, "text/html");
        var content = doc.getElementById("drawer-content");
        if (!content) content = doc.body;
        var drawerInner = document.getElementById("drawer-inner");
        drawerInner.innerHTML = content.innerHTML;
        document.documentElement.classList.add("drawer-loaded");
        _this2.state.drawerState = path;
        (0, _cookies.setCookie)("roguestore_drawer", path); //components.getComponent("plusminus").init(drawerInner);

        if (path == "/cart") {
          components.getComponent("cartpage").initListeners(drawerInner);
        }
      }, function (error) {
        console.log(error);

        _this2.closeDrawer();
      });
    }
  }, {
    key: "loadIDInDrawer",
    value: function loadIDInDrawer(id) {
      var content = document.getElementById(id.substring(1));

      if (content != null) {
        document.getElementById("drawer-inner").innerHTML = content.innerHTML;
        document.documentElement.classList.add("drawer-loaded");
        document.documentElement.classList.add("drawer-open");
        this.state.drawerState = window.location.pathname + id;
      }
    }
  }, {
    key: "initDrawer",
    value: function initDrawer() {
      var overlay = document.getElementById("drawer-overlay");
      if (overlay) overlay.addEventListener("click", this.closeDrawer);
      var close = document.getElementById("drawer-close");
      if (close) close.addEventListener("click", this.closeDrawer);
    }
  }, {
    key: "openDrawer",
    value: function openDrawer() {
      var showLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      document.documentElement.classList.add("drawer-open");
      if (showLoading) document.documentElement.classList.remove("drawer-loaded");
    }
  }, {
    key: "closeDrawer",
    value: function closeDrawer() {
      document.documentElement.classList.remove("drawer-open");
      (0, _cookies.deleteCookie)("roguestore_drawer");
    }
  }, {
    key: "addHistoryState",
    value: function addHistoryState(path) {
      history.pushState({}, "", path);
    }
  }, {
    key: "onPopState",
    value: function onPopState(e) {
      var path = e.path[0].location.pathname;
      console.log(path);

      if (path == "/" || path.includes("/products/")) {
        e.preventDefault();
        (0, _pageState.fadeTo)(path, this);
      }
    }
  }]);

  return NavigationController;
}();

exports["default"] = NavigationController;

},{"../utility/ajax":23,"../utility/cookies":25,"./pageState":18}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeTo = fadeTo;
exports.goToProduct = goToProduct;
exports.outputProductPage = outputProductPage;

function fadeTo(path, navigation) {
  if (navigation.state.pageState == path) return;
  navigation.state.pageState = path;
  navigation.state.inNavigation = true;
  document.documentElement.classList.add("in-transition");
  document.documentElement.classList.add("fade-out");
  setTimeout(function () {
    if (path == "/") {
      document.documentElement.classList.remove("product-active");
      document.documentElement.classList.add("home-active");
    } else {
      outputProductPage(path, navigation);
      document.documentElement.classList.add("product-active");
      document.documentElement.classList.remove("home-active");
    }

    document.documentElement.classList.add("page-out");
    window.scrollTo(0, 0);
    setTimeout(function () {
      document.documentElement.classList.remove("fade-out");
      document.documentElement.classList.remove("page-out");
      document.documentElement.classList.remove("in-transition");
      navigation.state.inNavigation = false;
    }, 100);
  }, 300);
}

function goToProduct(path, navigation) {
  if (navigation.state.pageState == path) return;
  navigation.state.pageState = path;
  navigation.state.inNavigation = true;
  document.documentElement.classList.add("in-transition"); // select the active product card here and give it the correct transition path;

  var activeImage = document.querySelector(".active-image");

  if (activeImage) {
    // get offset and add a transform path to bring it to screen center;
    var bounds = activeImage.getBoundingClientRect();
    var x = window.innerWidth / 2 - (bounds.left + bounds.width / 2);
    var y = window.innerHeight / 2 - (bounds.top + bounds.height / 2);
    activeImage.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  } else {
    // Fade out the image for the transition;
    document.documentElement.classList.add("fade-product");
  } // Deal w the circle
  //if(document.documentElement.classList.contains("circle-abso")){


  document.body.appendChild(document.getElementById("transition-circle")); //document.documentElement.classList.remove("circle-bottom");
  //}

  setTimeout(function () {
    document.documentElement.classList.add("circle-center");
  }, 50);
  setTimeout(function () {
    // Make a copy of the active image above everything
    if (activeImage) {
      // Clone it here
      var activeClone = activeImage.cloneNode(true);
      activeImage.parentNode.prepend(activeClone);
      activeClone.classList.remove('active-image');
      activeClone.style.zIndex = "";
      activeClone.style.transform = "";
      var parent = activeClone.closest(".candidate-parent");
      if (parent) parent.style.zIndex = "";
      activeImage.classList.remove('active-image');
      activeImage.classList.add('active-cover');
      document.documentElement.appendChild(activeImage);
      activeImage.style.transform = "";
    }

    outputProductPage(path, navigation);
    document.documentElement.classList.add("product-active");
    document.documentElement.classList.remove("home-active");
    document.documentElement.classList.add("page-out");
    window.scrollTo(0, 0);
    components.getComponent("scrollpal").init();
    components.getComponent("magnetic").init();
    resetHome();
    setTimeout(function () {
      document.documentElement.classList.remove("circle-center");
      document.documentElement.classList.remove("circle-bottom");
      document.documentElement.classList.add("circle-top");
      document.documentElement.classList.remove("page-out");
      document.documentElement.classList.remove("in-transition");
      document.documentElement.classList.remove("fade-product"); // Remove the active image here

      if (activeImage) {
        activeImage.remove();
      }

      setTimeout(function () {
        document.documentElement.classList.remove("circle-top"); // move circle inside product page

        document.getElementById("product-content").appendChild(document.getElementById("transition-circle"));
        navigation.state.inNavigation = false;
      }, 1000);
    }, 40);
  }, 650);
}

function resetHome() {
  var resets = document.querySelectorAll("#home-content .anima.in");
  resets.forEach(function (item, i) {
    item.classList.remove("in");
    item.classList.add("scroll");
  });
}

function outputProductPage(path, navigation) {
  // Get the product
  var product = products[0];
  var next = products[0];
  products.forEach(function (prod, i) {
    if (prod.url == path) {
      product = prod;
      if (i < products.length - 1) next = products[i + 1];
    }
  }); // Output the template

  var pc = document.getElementById("product-content");
  pc.innerHTML = navigation.state.templates.product; // Fill in the content

  outputProductContent(product, pc, "data-product-content");
  outputProductContent(next, pc, "data-next-content");
}

function outputProductContent(product, parent, contentName) {
  var content = parent.querySelectorAll("[" + contentName + "]");
  content.forEach(function (item, i) {
    var uid = item.getAttribute(contentName);
    if (uid != "url" && uid != "id") item.innerHTML = getProductContent(product, uid);else if (uid == "id") item.setAttribute("data-product-id", product.id);else item.href = product.url;
  });
}

function getProductContent(product, uid) {
  var output = "";

  switch (uid) {
    case "price":
      output = product.displayPrice;
      break;

    case "featuredImage":
      output = "<img src=" + product.featuredImage + " />";
      break;

    case "images":
      product.images.forEach(function (image, i) {
        if (i == 0) return;
        output += "<div class='productContent__info__image anima scroll'><img src=" + image + " /></div>";
      });
      break;

    case "options":
      product.options.forEach(function (option, i) {
        if (option.name == "Title") {
          output += "<input type='hidden' value='" + option.values[0] + "'>";
        } else {
          output += "<div class='productOption'>";
          output += "<span class='productOption__name'>" + option.name + ": </span>";
          output += "<div class='productOption__values radioField'>";
          option.values.forEach(function (value, i) {
            output += "<label class='radioField__label'>";
            output += "<input class='radioField__input' type='radio' value='" + value + "' name='" + option.name + "'>";
            output += "<span class='radioField__span' >" + value + "</span>";
            output += "</label>";
          });
          output += "</div>";
          output += "</div>";
        }
      });
      break;

    case "designed":
      if (product.designedBy.name != "") {
        output = "<span class='smallUpper'>Designed by <span class='productContent__info__designer__name anima scroll doodleLine' onmouseover='event.target.closest(\".productContent__info__designer\").classList.add(\"show\")' onmouseleave='event.target.closest(\".productContent__info__designer\").classList.remove(\"show\")'>" + product.designedBy.name + "</span></span>";

        if (product.designedBy.photo != "") {
          output += "<span class='productContent__info__designer__image' ><span class='productContent__info__designer__wrap' data-pal='-1' ><img src=" + product.designedBy.photo + " /></span></span>";
        }
      }

      break;

    case "fit":
      if (product.fit != "") output = "Fit: " + product.fit;
      break;

    case "sizing":
      output += "<div class='sizingChart'>";
      product.sizing.forEach(function (row, i) {
        output += "<div class='sizingChart__row'>";
        row.forEach(function (col, i) {
          output += "<span class='sizingChart__col'>" + col + "</span>";
        });
        output += "</div>";
      });
      output += "</div>";
      break;

    case "doodle1":
    case "doodle2":
    case "doodle3":
    case "doodle4":
      var index = parseInt(uid.replace("doodle", "")) - 1;
      var doodleSrc = product.doodles[index];

      if (doodleSrc && doodleSrc != "") {
        output += "<div class='doodle pal'>";
        output += "<div class='doodle__inner' data-pal='-1'>";
        output += "<img class='doodle__img' src='" + doodleSrc + "' />";
        output += "</div>";
        output += "</div>";
      }

      break;

    case "preorderNumber":
      var found = false;
      var parts = product.dropDate.split("-");

      if (parts.length == 3) {
        var date = new Date(parts[2], parts[1] - 1, parts[0]);
        var now = Date.now();
        var diff = date - now;
        var diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
          output = diffDays;
          found = true;
          document.documentElement.classList.remove("product-unavailable");
        }
      }

      if (!found) {
        output = "0";
        document.documentElement.classList.add("product-unavailable");
      }

      break;

    default:
      output = product[uid];
  }

  return output;
}

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initSite;

var _browserController = _interopRequireDefault(require("./browserController"));

var _navigationController = _interopRequireDefault(require("./navigationController"));

var _componentController = _interopRequireDefault(require("./componentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initSite() {
  var site = {
    debug: true,
    edit: window.location !== window.parent.location
  };
  site.browser = new _browserController["default"](site);
  site.navigation = new _navigationController["default"](site);
  (0, _componentController["default"])(site);
}

},{"./browserController":14,"./componentController":15,"./navigationController":17}],20:[function(require,module,exports){
"use strict";

var _siteController = _interopRequireDefault(require("./core/siteController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('DOMContentLoaded', _siteController["default"]);

},{"./core/siteController":19}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init2dCanvas;

function init2dCanvas(canvas, browser) {
  var bounds = canvas.getBoundingClientRect();
  var data = {
    canvas: canvas,
    ctx: canvas.getContext('2d'),
    browser: browser,
    // left: bounds.left,
    // top: bounds.top + browser.state.scrollTop,
    // width: bounds.width,
    // height: bounds.height,
    mouse: {
      x: 0,
      y: 0
    }
  };
  data.resize = sizeCanvas.bind(data);
  data.resize();
  browser.addToResizeLoop(data.resize);
  data.updateMouse = updateMouse.bind(data);
  return data;
}

function sizeCanvas() {
  this.cw = this.canvas.offsetWidth * this.browser.state.dpi;
  this.ch = this.canvas.offsetHeight * this.browser.state.dpi;
  this.canvas.width = this.cw;
  this.canvas.height = this.ch;
}

function updateMouse() {
  var bounds = this.canvas.getBoundingClientRect();
  var rate = this.browser.state.rate;
  var top = this.browser.state.mouse.yLag - bounds.top;
  var left = this.browser.state.mouse.xLag - bounds.left;
  this.mouse.x = left * this.browser.state.dpi;
  this.mouse.y = top * this.browser.state.dpi;
}

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addConfirmListeners = addConfirmListeners;

function addConfirmListeners(el, callback, newFocus) {
  if (!el) return;
  el.addEventListener("click", callback);
  el.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      callback();

      if (newFocus) {
        e.preventDefault();
        newFocus.focus();
      }
    }
  });
}

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAjax = getAjax;
exports.postAjax = postAjax;
exports.serializeArray = serializeArray;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getAjax(url, success, error) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
  };

  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();
  return xhr;
}

function postAjax(url, data, success, error) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(JSON.parse(xhr.responseText));
    }
  };

  if (error) xhr.addEventListener('error', error);
  if (error) xhr.addEventListener('abort', error);
  var params = JSON.stringify(data);
  xhr.send(params);
  return xhr;
}

function serializeArray(form) {
  var field, l;
  var s = {};

  if (_typeof(form) == 'object' && form.nodeName == "FORM") {
    var len = form.elements.length;

    for (var i = 0; i < len; i++) {
      field = form.elements[i];

      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          l = form.elements[i].options.length;

          for (j = 0; j < l; j++) {
            if (field.options[j].selected) s[field.name] = field.options[j].value;
          }
        } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
          s[field.name] = field.value;
        }
      }
    }
  }

  return s;
}

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initCart;

var _ajax = require("./ajax");

function initCart(cb) {
  var cart = {
    ready: false,
    data: null,
    empty: true,
    changed: false
  };
  cart.init = init.bind(cart);
  cart.clear = clear.bind(cart);
  cart.add = add.bind(cart);
  cart.change = change.bind(cart);
  cart.refresh = refresh.bind(cart);
  cart.addNote = addNote.bind(cart);
  cart.init(cb);
  return cart;
}

function handleError() {//console.log("CART AJAX ERROR");
}

function setEmpty(cart, skip) {
  var cache = cart.empty;
  if (cart.data && cart.data.items) cart.empty = cart.data.items.length == 0;
  if (!skip) cart.changed = cart.empty != cache;
}

function init(cb) {
  var _this = this;

  (0, _ajax.postAjax)("/cart.js", {}, function (response) {
    _this.data = response;
    setEmpty(_this, true);
    _this.ready = true;
    if (cb != null) cb(); //console.log("Cart Inited", response, response.items.length)
  }, handleError);
}

function refresh(callback, onError) {
  var _this2 = this;

  (0, _ajax.postAjax)("/cart.js", {}, function (response) {
    _this2.data = response;
    setEmpty(_this2);
    if (callback) callback();
  }, function () {
    if (onError != undefined) onError();else handleError();
  });
}

function clear() {
  var _this3 = this;

  (0, _ajax.postAjax)("/cart/clear.js", {}, function (response) {
    _this3.data = response; //console.log("Cart Cleared", response, response.items.length)
  }, handleError);
}

function add(id, quantity, properties, callback, onError) {
  var _this4 = this;

  var data = {
    items: [{
      id: id,
      quantity: quantity,
      properties: properties
    }]
  };
  (0, _ajax.postAjax)('/cart/add.js', data, function (response) {
    //console.log("Added to Cart", response);
    _this4.refresh(callback, onError);
  }, function () {
    if (onError != undefined) onError();else handleError();
  });
}

function change(line, quantity, callback) {
  var _this5 = this;

  var data = {
    id: line,
    quantity: parseInt(quantity)
  };
  (0, _ajax.postAjax)("/cart/change.js", data, function (response) {
    _this5.data = response;
    setEmpty(_this5); //console.log("Cart Changed", response, response.items.length)

    if (callback) callback();
  }, handleError);
}

function addNote(note, callback) {
  var _this6 = this;

  (0, _ajax.postAjax)("/cart/update.js", {
    note: note
  }, function (response) {
    _this6.data = response;
    setEmpty(_this6); //console.log("Note Added", response, response.items.length);

    if (callback) callback();
  }, handleError);
}

},{"./ajax":23}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  setCookie(name, '', -1);
}

},{}],26:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.inView = e() : t.inView = e();
}(void 0, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var i = n(2),
        o = r(i);
    t.exports = o["default"];
  }, function (t, e) {
    function n(t) {
      var e = _typeof(t);

      return null != t && ("object" == e || "function" == e);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var i = n(9),
        o = r(i),
        u = n(3),
        f = r(u),
        s = n(4),
        c = function c() {
      if ("undefined" != typeof window) {
        var t = 100,
            e = ["scroll", "resize", "load"],
            n = {
          history: []
        },
            r = {
          offset: {},
          threshold: 0,
          test: s.inViewport
        },
            i = (0, o["default"])(function () {
          n.history.forEach(function (t) {
            n[t].check();
          });
        }, t);
        e.forEach(function (t) {
          return addEventListener(t, i);
        }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
          new MutationObserver(i).observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
          });
        });

        var u = function u(t) {
          if ("string" == typeof t) {
            var e = [].slice.call(document.querySelectorAll(t));
            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
          }
        };

        return u.offset = function (t) {
          if (void 0 === t) return r.offset;

          var e = function e(t) {
            return "number" == typeof t;
          };

          return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
            return r.offset[e] = t;
          } : function (n) {
            return e(t[n]) ? r.offset[n] = t[n] : null;
          }), r.offset;
        }, u.threshold = function (t) {
          return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
        }, u.test = function (t) {
          return "function" == typeof t ? r.test = t : r.test;
        }, u.is = function (t) {
          return r.test(t, r);
        }, u.offset(0), u;
      }
    };

    e["default"] = c();
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = function () {
      function t(e, r) {
        n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
          enter: [],
          exit: []
        }, this.singles = {
          enter: [],
          exit: []
        };
      }

      return r(t, [{
        key: "check",
        value: function value() {
          var t = this;
          return this.elements.forEach(function (e) {
            var n = t.options.test(e, t.options),
                r = t.current.indexOf(e),
                i = r > -1,
                o = n && !i,
                u = !n && i;
            o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
          }), this;
        }
      }, {
        key: "on",
        value: function value(t, e) {
          return this.handlers[t].push(e), this;
        }
      }, {
        key: "once",
        value: function value(t, e) {
          return this.singles[t].unshift(e), this;
        }
      }, {
        key: "emit",
        value: function value(t, e) {
          for (; this.singles[t].length;) {
            this.singles[t].pop()(e);
          }

          for (var n = this.handlers[t].length; --n > -1;) {
            this.handlers[t][n](e);
          }

          return this;
        }
      }]), t;
    }();

    e["default"] = function (t, e) {
      return new i(t, e);
    };
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      var n = t.getBoundingClientRect(),
          r = n.top,
          i = n.right,
          o = n.bottom,
          u = n.left,
          f = n.width,
          s = n.height,
          c = {
        t: o,
        r: window.innerWidth - u,
        b: window.innerHeight - r,
        l: i
      },
          a = {
        x: e.threshold * f,
        y: e.threshold * s
      };
      return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.inViewport = n;
  }, function (t, e) {
    (function (e) {
      var n = "object" == _typeof(e) && e && e.Object === Object && e;
      t.exports = n;
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, n) {
    var r = n(5),
        i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o;
  }, function (t, e, n) {
    function r(t, e, n) {
      function r(e) {
        var n = x,
            r = m;
        return x = m = void 0, E = e, w = t.apply(r, n);
      }

      function a(t) {
        return E = t, j = setTimeout(h, e), M ? r(t) : w;
      }

      function l(t) {
        var n = t - O,
            r = t - E,
            i = e - n;
        return _ ? c(i, g - r) : i;
      }

      function d(t) {
        var n = t - O,
            r = t - E;
        return void 0 === O || n >= e || n < 0 || _ && r >= g;
      }

      function h() {
        var t = o();
        return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
      }

      function p(t) {
        return j = void 0, T && x ? r(t) : (x = m = void 0, w);
      }

      function v() {
        void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
      }

      function y() {
        return void 0 === j ? w : p(o());
      }

      function b() {
        var t = o(),
            n = d(t);

        if (x = arguments, m = this, O = t, n) {
          if (void 0 === j) return a(O);
          if (_) return j = setTimeout(h, e), r(O);
        }

        return void 0 === j && (j = setTimeout(h, e)), w;
      }

      var x,
          m,
          g,
          w,
          j,
          O,
          E = 0,
          M = !1,
          _ = !1,
          T = !0;

      if ("function" != typeof t) throw new TypeError(f);
      return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
    }

    var i = n(1),
        o = n(8),
        u = n(10),
        f = "Expected a function",
        s = Math.max,
        c = Math.min;
    t.exports = r;
  }, function (t, e, n) {
    var r = n(6),
        i = function i() {
      return r.Date.now();
    };

    t.exports = i;
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = !0,
          f = !0;
      if ("function" != typeof t) throw new TypeError(u);
      return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
        leading: r,
        maxWait: e,
        trailing: f
      });
    }

    var i = n(7),
        o = n(1),
        u = "Expected a function";
    t.exports = r;
  }, function (t, e) {
    function n(t) {
      return t;
    }

    t.exports = n;
  }]);
});

},{}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (n, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).LazyLoad = t();
}(void 0, function () {
  "use strict";

  function n() {
    return (n = Object.assign || function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];

        for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
      }

      return n;
    }).apply(this, arguments);
  }

  var t = "undefined" != typeof window,
      e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      i = t && "IntersectionObserver" in window,
      a = t && "classList" in document.createElement("p"),
      o = t && window.devicePixelRatio > 1,
      r = {
    elements_selector: ".lazy",
    container: e || t ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1
  },
      c = function c(t) {
    return n({}, r, t);
  },
      l = function l(n, t) {
    var e,
        i = new n(t);

    try {
      e = new CustomEvent("LazyLoad::Initialized", {
        detail: {
          instance: i
        }
      });
    } catch (n) {
      (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
        instance: i
      });
    }

    window.dispatchEvent(e);
  },
      s = function s(n, t) {
    return n.getAttribute("data-" + t);
  },
      u = function u(n, t, e) {
    var i = "data-" + t;
    null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
  },
      d = function d(n) {
    return s(n, "ll-status");
  },
      f = function f(n, t) {
    return u(n, "ll-status", t);
  },
      _ = function _(n) {
    return f(n, null);
  },
      g = function g(n) {
    return null === d(n);
  },
      v = function v(n) {
    return "native" === d(n);
  },
      p = ["loading", "loaded", "applied", "error"],
      b = function b(n, t, e, i) {
    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
  },
      h = function h(n, t) {
    a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
  },
      m = function m(n, t) {
    a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  },
      E = function E(n) {
    return n.llTempImage;
  },
      I = function I(n, t) {
    if (t) {
      var e = t._observer;
      e && e.unobserve(n);
    }
  },
      y = function y(n, t) {
    n && (n.loadingCount += t);
  },
      A = function A(n, t) {
    n && (n.toLoadCount = t);
  },
      L = function L(n) {
    for (var t, e = [], i = 0; t = n.children[i]; i += 1) {
      "SOURCE" === t.tagName && e.push(t);
    }

    return e;
  },
      w = function w(n, t, e) {
    e && n.setAttribute(t, e);
  },
      z = function z(n, t) {
    n.removeAttribute(t);
  },
      k = function k(n) {
    return !!n.llOriginalAttrs;
  },
      O = function O(n) {
    if (!k(n)) {
      var t = {};
      t.src = n.getAttribute("src"), t.srcset = n.getAttribute("srcset"), t.sizes = n.getAttribute("sizes"), n.llOriginalAttrs = t;
    }
  },
      C = function C(n) {
    if (k(n)) {
      var t = n.llOriginalAttrs;
      w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes);
    }
  },
      N = function N(n, t) {
    w(n, "sizes", s(n, t.data_sizes)), w(n, "srcset", s(n, t.data_srcset)), w(n, "src", s(n, t.data_src));
  },
      x = function x(n) {
    z(n, "src"), z(n, "srcset"), z(n, "sizes");
  },
      M = function M(n, t) {
    var e = n.parentNode;
    e && "PICTURE" === e.tagName && L(e).forEach(t);
  },
      R = function R(n, t) {
    L(n).forEach(t);
  },
      G = {
    IMG: function IMG(n, t) {
      M(n, function (n) {
        O(n), N(n, t);
      }), O(n), N(n, t);
    },
    IFRAME: function IFRAME(n, t) {
      w(n, "src", s(n, t.data_src));
    },
    VIDEO: function VIDEO(n, t) {
      R(n, function (n) {
        w(n, "src", s(n, t.data_src));
      }), w(n, "poster", s(n, t.data_poster)), w(n, "src", s(n, t.data_src)), n.load();
    }
  },
      T = function T(n, t) {
    var e = G[n.tagName];
    e && e(n, t);
  },
      D = function D(n, t, e) {
    y(e, 1), h(n, t.class_loading), f(n, "loading"), b(t.callback_loading, n, e);
  },
      F = {
    IMG: function IMG(n, t) {
      u(n, t.data_src, null), u(n, t.data_srcset, null), u(n, t.data_sizes, null), M(n, function (n) {
        u(n, t.data_srcset, null), u(n, t.data_sizes, null);
      });
    },
    IFRAME: function IFRAME(n, t) {
      u(n, t.data_src, null);
    },
    VIDEO: function VIDEO(n, t) {
      u(n, t.data_src, null), u(n, t.data_poster, null), R(n, function (n) {
        u(n, t.data_src, null);
      });
    }
  },
      V = function V(n, t) {
    u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null);
  },
      j = function j(n, t) {
    var e = F[n.tagName];
    e ? e(n, t) : function (n, t) {
      u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null);
    }(n, t);
  },
      P = ["IMG", "IFRAME", "VIDEO"],
      S = function S(n, t) {
    !t || function (n) {
      return n.loadingCount > 0;
    }(t) || function (n) {
      return n.toLoadCount > 0;
    }(t) || b(n.callback_finish, t);
  },
      U = function U(n, t, e) {
    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
  },
      $ = function $(n, t, e) {
    n.removeEventListener(t, e);
  },
      q = function q(n) {
    return !!n.llEvLisnrs;
  },
      H = function H(n) {
    if (q(n)) {
      var t = n.llEvLisnrs;

      for (var e in t) {
        var i = t[e];
        $(n, e, i);
      }

      delete n.llEvLisnrs;
    }
  },
      B = function B(n, t, e) {
    !function (n) {
      delete n.llTempImage;
    }(n), y(e, -1), function (n) {
      n && (n.toLoadCount -= 1);
    }(e), m(n, t.class_loading), t.unobserve_completed && I(n, e);
  },
      J = function J(n, t, e) {
    var i = E(n) || n;
    q(i) || function (n, t, e) {
      q(n) || (n.llEvLisnrs = {});
      var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
      U(n, i, t), U(n, "error", e);
    }(i, function (a) {
      !function (n, t, e, i) {
        var a = v(t);
        B(t, e, i), h(t, e.class_loaded), f(t, "loaded"), j(t, e), b(e.callback_loaded, t, i), a || S(e, i);
      }(0, n, t, e), H(i);
    }, function (a) {
      !function (n, t, e, i) {
        var a = v(t);
        B(t, e, i), h(t, e.class_error), f(t, "error"), b(e.callback_error, t, i), a || S(e, i);
      }(0, n, t, e), H(i);
    });
  },
      K = function K(n, t, e) {
    !function (n) {
      n.llTempImage = document.createElement("IMG");
    }(n), J(n, t, e), function (n, t, e) {
      var i = s(n, t.data_bg),
          a = s(n, t.data_bg_hidpi),
          r = o && a ? a : i;
      r && (n.style.backgroundImage = 'url("'.concat(r, '")'), E(n).setAttribute("src", r), D(n, t, e));
    }(n, t, e), function (n, t, e) {
      var i = s(n, t.data_bg_multi),
          a = s(n, t.data_bg_multi_hidpi),
          r = o && a ? a : i;
      r && (n.style.backgroundImage = r, function (n, t, e) {
        h(n, t.class_applied), f(n, "applied"), V(n, t), t.unobserve_completed && I(n, t), b(t.callback_applied, n, e);
      }(n, t, e));
    }(n, t, e);
  },
      Q = function Q(n, t, e) {
    !function (n) {
      return P.indexOf(n.tagName) > -1;
    }(n) ? K(n, t, e) : function (n, t, e) {
      J(n, t, e), T(n, t), D(n, t, e);
    }(n, t, e);
  },
      W = ["IMG", "IFRAME"],
      X = function X(n) {
    return n.use_native && "loading" in HTMLImageElement.prototype;
  },
      Y = function Y(n, t, e) {
    n.forEach(function (n) {
      return function (n) {
        return n.isIntersecting || n.intersectionRatio > 0;
      }(n) ? function (n, t, e, i) {
        f(n, "entered"), function (n, t, e) {
          t.unobserve_entered && I(n, e);
        }(n, e, i), b(e.callback_enter, n, t, i), function (n) {
          return p.indexOf(d(n)) >= 0;
        }(n) || Q(n, e, i);
      }(n.target, n, t, e) : function (n, t, e, i) {
        g(n) || (function (n, t, e, i) {
          e.cancel_on_exit && function (n) {
            return "loading" === d(n);
          }(n) && "IMG" === n.tagName && (H(n), function (n) {
            M(n, function (n) {
              x(n);
            }), x(n);
          }(n), function (n) {
            M(n, function (n) {
              C(n);
            }), C(n);
          }(n), m(n, e.class_loading), y(i, -1), _(n), b(e.callback_cancel, n, t, i));
        }(n, t, e, i), b(e.callback_exit, n, t, i));
      }(n.target, n, t, e);
    });
  },
      Z = function Z(n) {
    return Array.prototype.slice.call(n);
  },
      nn = function nn(n) {
    return n.container.querySelectorAll(n.elements_selector);
  },
      tn = function tn(n) {
    return function (n) {
      return "error" === d(n);
    }(n);
  },
      en = function en(n, t) {
    return function (n) {
      return Z(n).filter(g);
    }(n || nn(t));
  },
      an = function an(n, e) {
    var a = c(n);
    this._settings = a, this.loadingCount = 0, function (n, t) {
      i && !X(n) && (t._observer = new IntersectionObserver(function (e) {
        Y(e, n, t);
      }, function (n) {
        return {
          root: n.container === document ? null : n.container,
          rootMargin: n.thresholds || n.threshold + "px"
        };
      }(n)));
    }(a, this), function (n, e) {
      t && window.addEventListener("online", function () {
        !function (n, t) {
          var e;
          (e = nn(n), Z(e).filter(tn)).forEach(function (t) {
            m(t, n.class_error), _(t);
          }), t.update();
        }(n, e);
      });
    }(a, this), this.update(e);
  };

  return an.prototype = {
    update: function update(n) {
      var t,
          a,
          o = this._settings,
          r = en(n, o);
      A(this, r.length), !e && i ? X(o) ? function (n, t, e) {
        n.forEach(function (n) {
          -1 !== W.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"), function (n, t, e) {
            J(n, t, e), T(n, t), j(n, t), f(n, "native");
          }(n, t, e));
        }), A(e, 0);
      }(r, o, this) : (a = r, function (n) {
        n.disconnect();
      }(t = this._observer), function (n, t) {
        t.forEach(function (t) {
          n.observe(t);
        });
      }(t, a)) : this.loadAll(r);
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), nn(this._settings).forEach(function (n) {
        delete n.llOriginalAttrs;
      }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(n) {
      var t = this,
          e = this._settings;
      en(n, e).forEach(function (n) {
        I(n, t), Q(n, e, t);
      });
    }
  }, an.load = function (n, t) {
    var e = c(t);
    Q(n, e);
  }, an.resetStatus = function (n) {
    _(n);
  }, t && function (n, t) {
    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) {
      l(n, e);
    } else l(n, t);
  }(an, window.lazyLoadOptions), an;
});

},{}]},{},[20]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      config: _config_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      data: null,
      productData: null,
      image: null,
      success: null,
      size: 'lowDose',
      cupType: null,
      sugarLevel: null,
      addOns: [],
      quantity: 1,
      productName: null,
      price: null,
      highprice: null,
      overprice: null,
      addOnsData: null,
      cupData: null,
      total: 0,
      description: null,
      addOnsPrice: 0,
      totalAddOns: 0,
      totalPrice: 0,
      cupTypePrice: 0,
      priceShown: 0,
      count: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.count = 0;
    this.retrieveCategory();
    this.retrieveProduct();
    this.retrieveAddOns();
    this.retrieveCupType();
    var pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      encrypted: true
    });
    var channel = pusher.subscribe('driptea-channel');
    channel.bind('driptea-data', function (data) {
      if (data.order.status === 'incart') {
        _this.count++;
      }
    });
  },
  methods: {
    direct: function direct() {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/customerCart')["catch"](function () {});
    },
    getSizePrice: function getSizePrice() {
      if (this.size === 'highDose') {
        this.total = this.highprice;
      } else if (this.size === 'overDose') {
        this.total = this.overprice;
      } else if (this.size === 'lowDose') {
        this.total = this.price;
      }

      this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice);
    },
    getCupPrice: function getCupPrice() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOneCupType', {
        cupType: this.cupType
      }).then(function (res) {
        _this2.cupTypePrice = res.data.cupType[0].inputCupOnlinePrice;
        _this2.priceShown = _this2.quantity * (_this2.total + _this2.totalAddOns + _this2.cupTypePrice);
      });
    },
    getQuantity: function getQuantity() {
      this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice);
    },
    retrieveCupType: function retrieveCupType() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType").then(function (response) {
        _this3.cupData = response.data.cupType;
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this4 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
        _this4.addOnsData = response.data.addons;
      });
    },
    retrieveCategory: function retrieveCategory() {
      var _this5 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategoryAscending').then(function (res) {
        _this5.data = res.data.addCategory;
      });
    },
    redirect: function redirect(param) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productOnline/' + param)["catch"](function () {});
    },
    retrieveProduct: function retrieveProduct() {
      var _this6 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveAllProductAscending').then(function (res) {
        _this6.productData = res.data.product;
      });
    },
    addTotalPrice: function addTotalPrice(item, event) {
      var _this7 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneAddOn", {
        id: item.id
      }).then(function (response) {
        _this7.addOnsPrice = response.data.addons.onlineAddOnsPrice;

        if (event.target.checked) {
          _this7.totalAddOns += _this7.addOnsPrice;
        } else {
          _this7.totalAddOns -= _this7.addOnsPrice;
        }

        _this7.priceShown = _this7.quantity * (_this7.total + _this7.totalAddOns + _this7.cupTypePrice);
      });
    },
    addToCart: function addToCart() {
      var _this8 = this;

      if (this.quantity <= 0) {
        this.errorMessage3 = 'quantity must be greater than 0!';
      }

      if (this.size === null) {
        this.errorMessage = 'cup size is required!';
      }

      if (this.sugarLevel === null) {
        this.errorMessage2 = 'sugar level is required!';
      }

      if (this.cupType === null) {
        this.errorMessage1 = 'cup type is required!';
      }

      if (this.quantity > 0 && this.size !== null && this.sugarLevel !== null && this.cupType !== null) {
        if (localStorage.getItem('customerOnlineId') === null) {
          var param = {
            customerType: "onlineOrder",
            customerName: localStorage.getItem('fullName'),
            customerAddress: localStorage.getItem('address'),
            customerContactNumber: localStorage.getItem('contactNumber')
          };
          this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addCustomer", param).then(function (res) {
            localStorage.setItem('customerOnlineId', res.data.customerDetails.id);
            var parameter = {
              customerId: res.data.customerDetails.id,
              onlineId: localStorage.getItem('customerId'),
              productId: _this8.itemId,
              quantity: _this8.quantity,
              size: _this8.size,
              sugarLevel: _this8.sugarLevel,
              choosenPrice: _this8.total,
              cupType: _this8.cupType,
              status: 'incart',
              addOns: _this8.addOns,
              subTotal: _this8.priceShown
            };

            _this8.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter).then(function (response) {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('#viewDetails').modal('hide');
            });
          });
        } else {
          var parameter = {
            customerId: localStorage.getItem('customerOnlineId'),
            onlineId: localStorage.getItem('customerId'),
            productId: this.itemId,
            quantity: this.quantity,
            size: this.size,
            sugarLevel: this.sugarLevel,
            choosenPrice: this.total,
            cupType: this.cupType,
            status: 'incart',
            addOns: this.addOns,
            subTotal: this.priceShown
          };
          this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter).then(function (response) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#viewDetails').modal('hide');
          });
        }
      }
    },
    cancel: function cancel() {
      this.addOns = [];
    },
    showModal: function showModal(item) {
      this.size = 'lowDose';
      this.sugarLevel = null;
      this.cupType = null;
      this.addOns = [];
      this.quantity = 1;
      this.total = 0;
      this.totalAddOns = 0;
      this.cupTypePrice = 0;
      this.price = item.onlinelowPrice;
      this.highprice = item.onlinehighPrice;
      this.overprice = item.onlineoverPrice;
      this.productName = item.productName;
      this.image = item.image;
      this.description = item.description;
      this.itemId = item.id;
      this.getSizePrice();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.categoryStorage[data-v-f97c238c]{\r\n    margin-top: 3%;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px gray;\n}\n.imageSize[data-v-f97c238c]{\r\n    height: 250px;\r\n    margin-top: 2%;\n}\n.imageSize2[data-v-f97c238c]{\r\n    height: 300px;\r\n    width: 300px;\r\n    margin-top: 2%;\n}\n.dripteaImage[data-v-f97c238c]{\r\n    width: 100%;\r\n    height: 300px;\n}\r\n/* .imgItem{\r\n    height: 150px;\r\n    width: 100%;\r\n} */\n.imgItem[data-v-f97c238c]{\r\n    height: 170px;\r\n    width: 70%;\n}\n@media screen and (max-width: 900px) {\n.imageSize2[data-v-f97c238c]{\r\n        height: 300px;\r\n        width: 200px;\r\n        margin-top: 2%;\n}\n}\n@media screen and (max-width: 1000px) {\n.imageSize2[data-v-f97c238c]{\r\n        height: 300px;\r\n        width: 200px;\r\n        margin-top: 2%;\n}\n}\n@media screen and (max-width: 400px) {\n.imgItem[data-v-f97c238c]{\r\n        height: 170px;\r\n        width: 50%;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        { staticClass: "overflow-hidden" },
        [
          _c(
            "v-app-bar",
            {
              attrs: {
                absolute: "",
                color: "orange",
                dark: "",
                "shrink-on-scroll": "",
                prominent: "",
                "fade-img-on-scroll": "",
                "scroll-target": "#scrolling-techniques-3"
              },
              scopedSlots: _vm._u([
                {
                  key: "extension",
                  fn: function() {
                    return [
                      _c(
                        "v-tabs",
                        { attrs: { "align-with-title": "" } },
                        _vm._l(_vm.productData, function(item, index) {
                          return _c("v-tab", { key: index }, [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "white" },
                                attrs: { href: "#" + item.productCategory }
                              },
                              [_vm._v(_vm._s(item.productCategory))]
                            )
                          ])
                        }),
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c("v-toolbar-title", [_vm._v("Title")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticStyle: { "margin-right": "2%" }, attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("mdi-magnify")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticStyle: { "margin-right": "2%" },
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.direct()
                    }
                  }
                },
                [
                  _c("v-icon", [_vm._v("mdi-cart")]),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "margin-left": "-3%" } }, [
                    _vm._v("Cart")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "background-color": "red",
                        color: "white",
                        "border-radius": "20%",
                        "font-size": "10px",
                        "margin-left": "-10%",
                        "margin-top": "-20%"
                      }
                    },
                    [_vm._v(_vm._s(_vm.count > 0 ? "New" : ""))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticStyle: { "margin-right": "3%" }, attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            {
              staticClass: "overflow-y-auto",
              attrs: {
                id: "scrolling-techniques-3",
                height: "100%",
                "max-height": "900"
              }
            },
            [
              _c(
                "v-container",
                { staticStyle: { "margin-top": "300px" } },
                _vm._l(_vm.productData, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "categoryStorage",
                      attrs: { id: item.productCategory }
                    },
                    [
                      _c("h3", [_vm._v(_vm._s(item.productCategory))]),
                      _vm._v(" "),
                      _vm.productData !== null && _vm.data.length > 0
                        ? _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.productData, function(items, ind) {
                              return item.productCategory ===
                                items.productCategory
                                ? _c(
                                    "div",
                                    {
                                      key: ind,
                                      staticClass: "col-md-3 imageSize"
                                    },
                                    [
                                      _c("center", [
                                        _c("img", {
                                          staticClass: "imgItem",
                                          attrs: {
                                            "data-toggle": "modal",
                                            "data-target": "#viewDetails",
                                            src: items.image
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.showModal(items)
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("h4", [
                                          _vm._v(_vm._s(items.productName))
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            }),
                            0
                          )
                        : _c(
                            "div",
                            { staticClass: "secRow" },
                            [
                              _c("center", [
                                _c("img", {
                                  staticClass: "noImage",
                                  attrs: { src: __webpack_require__(/*! @/assets/data.png */ "./resources/assets/data.png") }
                                }),
                                _vm._v(" "),
                                _c("h2", [_vm._v("No Product Yet")])
                              ])
                            ],
                            1
                          )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "viewDetails", role: "dialog" }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _vm.success !== null
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-success",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.success) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("center", [
                          _c("img", {
                            staticClass: "imageSize2",
                            attrs: { src: _vm.image }
                          }),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _vm._v(" "),
                            _c("h3", [
                              _vm._v("Base Price (₱" + _vm._s(_vm.price) + ")")
                            ]),
                            _vm._v(" "),
                            _c("h3", [_vm._v(_vm._s(_vm.productName))]),
                            _vm._v(" "),
                            _c("p", { staticClass: "productDescription" }, [
                              _vm._v(_vm._s(_vm.description))
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "modalDiv" }, [
                        _c("form", [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "15px",
                                  "font-weight": "bold"
                                },
                                attrs: { for: "size" }
                              },
                              [_vm._v("Size :")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.size,
                                    expression: "size"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.size = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.getSizePrice()
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "lowDose", selected: "" } },
                                  [_vm._v("Low Dose")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "highDose" } }, [
                                  _vm._v("High Dose")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "overDose" } }, [
                                  _vm._v("Over Dose")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "15px",
                                  "font-weight": "bold"
                                },
                                attrs: { for: "cupType" }
                              },
                              [_vm._v("Cup Type :")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cupType,
                                    expression: "cupType"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.cupType = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    function($event) {
                                      return _vm.getCupPrice()
                                    }
                                  ]
                                }
                              },
                              _vm._l(_vm.cupData, function(item, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: item.cupTypeName }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.cupTypeName) +
                                        " (+ ₱" +
                                        _vm._s(item.inputCupOnlinePrice) +
                                        ")"
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "15px",
                                  "font-weight": "bold"
                                },
                                attrs: { for: "sugarLevel" }
                              },
                              [_vm._v("Sugar Level:")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.sugarLevel,
                                    expression: "sugarLevel"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.sugarLevel = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "extra" } }, [
                                  _vm._v("100%(Normal Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "normal" } }, [
                                  _vm._v("75%(Three fourth Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "less" } }, [
                                  _vm._v("50%(Half Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "half" } }, [
                                  _vm._v("25%(One fourth Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "no" } }, [
                                  _vm._v("0%(No Sugar)")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "15px",
                                  "font-weight": "bold"
                                },
                                attrs: { for: "size" }
                              },
                              [_vm._v("Add Ons(Optional):")]
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "checkboxStyle" },
                              _vm._l(_vm.addOnsData, function(item, index) {
                                return _c("div", { key: index }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.addOns,
                                        expression: "addOns"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      id: item.addons_name
                                    },
                                    domProps: {
                                      value: item.addons_name,
                                      checked: Array.isArray(_vm.addOns)
                                        ? _vm._i(_vm.addOns, item.addons_name) >
                                          -1
                                        : _vm.addOns
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.addTotalPrice(item, $event)
                                      },
                                      change: function($event) {
                                        var $$a = _vm.addOns,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = item.addons_name,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.addOns = $$a.concat([$$v]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.addOns = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.addOns = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { attrs: { for: item.addons_name } },
                                    [
                                      _vm._v(
                                        _vm._s(item.addons_name) +
                                          " (+ ₱" +
                                          _vm._s(item.onlineAddOnsPrice) +
                                          ")"
                                      )
                                    ]
                                  ),
                                  _c("br")
                                ])
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("center", [
                    _c("div", { staticStyle: { "text-align": "center" } }, [
                      _c(
                        "label",
                        {
                          staticStyle: {
                            "font-size": "15px",
                            "font-weight": "bold",
                            display: "inline"
                          },
                          attrs: { for: "quantity" }
                        },
                        [_vm._v("Quantity:")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quantity,
                            expression: "quantity"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { width: "100px", display: "inline" },
                        attrs: { type: "number", min: "1" },
                        domProps: { value: _vm.quantity },
                        on: {
                          change: function($event) {
                            return _vm.getQuantity()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.quantity = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button", "data-dismiss": "modal" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c("center", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btnRegister",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            return _vm.addToCart()
                          }
                        }
                      },
                      [_vm._v("Add to Cart - " + _vm._s(_vm.priceShown))]
                    )
                  ])
                ],
                1
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/data.png":
/*!***********************************!*\
  !*** ./resources/assets/data.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/data.png?843acdc0c0b7cf274f9043b8a1604f0e";

/***/ }),

/***/ "./resources/js/modules/dashboard/onlineOrderDashboard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/dashboard/onlineOrderDashboard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true& */ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true&");
/* harmony import */ var _onlineOrderDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineOrderDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& */ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _onlineOrderDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f97c238c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/dashboard/onlineOrderDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineOrderDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=style&index=0&id=f97c238c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_style_index_0_id_f97c238c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/onlineOrderDashboard.vue?vue&type=template&id=f97c238c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineOrderDashboard_vue_vue_type_template_id_f97c238c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
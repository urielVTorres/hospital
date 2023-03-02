"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
require("./database/connection.js");
var app = (0, _express["default"])();

//settings
app.set('PORT', _config["default"].PORT);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
var _default = app;
exports["default"] = _default;
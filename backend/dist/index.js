"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _pacienteRoutes = _interopRequireDefault(require("./routes/paciente.routes.js"));
_dotenv["default"].config();
_app["default"].listen(_app["default"].get('PORT'), function () {
  console.log("Servidor funcionando en el puerto: ".concat(_app["default"].get('PORT')));
});
_app["default"].use(_pacienteRoutes["default"]);
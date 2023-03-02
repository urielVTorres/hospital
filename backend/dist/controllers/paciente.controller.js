"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotalPatients = exports.getPatientByCURP = exports.getPatient = exports.deletePatientByCURP = exports.createNewPatient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getPatient = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("conectando");
          _context.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().query(_index.queries.getAllPatients);
        case 7:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getPatient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPatient = getPatient;
var createNewPatient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var i, CURP, firstname, f_lastname, NSS, CP, email, phone, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          i = req.body;
          CURP = i.CURP, firstname = i.firstname, f_lastname = i.f_lastname, NSS = i.NSS, CP = i.CP, email = i.email, phone = i.phone;
          if (!([CURP, firstname, f_lastname, email].includes('') || [NSS, CP, phone].includes(null))) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.json({
            msg: "Llene los campos obligatorios"
          }));
        case 5:
          _context2.next = 7;
          return (0, _index.getConnection)();
        case 7:
          pool = _context2.sent;
          _context2.next = 10;
          return pool.request().input("CURP", i.CURP).input("firstname", i.firstname).input("f_lastname", i.f_lastname).input("m_lastname", i.m_lastname).input("gender", i.gender).input("birthday", i.birthday).input("NSS", i.NSS).input("street", i.street).input("number", i.number).input("state", i.state).input("CP", i.CP).input("phone", i.phone).input("email", i.email).query(_index.queries.registerNewPatient);
        case 10:
          result = _context2.sent;
          console.log(result);
          return _context2.abrupt("return", res.json({
            msg: "Paciente registrado"
          }));
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return function createNewPatient(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createNewPatient = createNewPatient;
var getPatientByCURP = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var CURP, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          CURP = req.params.CURP;
          _context3.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('CURP', CURP).query(_index.queries.getPatientByCURP);
        case 7:
          result = _context3.sent;
          res.json(result.recordset[0]);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function getPatientByCURP(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getPatientByCURP = getPatientByCURP;
var deletePatientByCURP = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var CURP, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          CURP = req.params.CURP;
          _context4.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input('CURP', CURP).query(_index.queries.deletePatient);
        case 7:
          result = _context4.sent;
          res.json({
            msg: "Registro eliminado"
          });
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deletePatientByCURP(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deletePatientByCURP = deletePatientByCURP;
var getTotalPatients = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _index.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_index.queries.getTotalPatients);
        case 6:
          result = _context5.sent;
          console.log(result);
          res.json({
            total: result.recordset[0]['']
          });
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function getTotalPatients(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getTotalPatients = getTotalPatients;
var updatePatientById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, i, CURP, firstname, f_lastname, NSS, CP, email, phone, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          i = req.body;
          CURP = i.CURP, firstname = i.firstname, f_lastname = i.f_lastname, NSS = i.NSS, CP = i.CP, email = i.email, phone = i.phone;
          if (!([CURP, firstname, f_lastname, email].includes('') || [NSS, CP, phone].includes(null))) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.json({
            msg: "Llene los campos obligatorios"
          }));
        case 6:
          _context6.next = 8;
          return (0, _index.getConnection)();
        case 8:
          pool = _context6.sent;
          _context6.next = 11;
          return pool.request().input("CURP", i.CURP).input("firstname", i.firstname).input("f_lastname", i.f_lastname).input("m_lastname", i.m_lastname).input("gender", i.gender).input("birthday", i.birthday).input("NSS", i.NSS).input("alergies", i.alergies).input("symptoms", i.symptoms).input("street", i.street).input("number", i.number).input("state", i.state).input("CP", i.CP).input("phone", i.phone).input("email", i.email).input("medicines", i.medicines).input("area", i.area).input("status", i.status).input("floor", i.floor).input("room", i.room).input("bed", i.bed).input("id_patient", id).query(_index.queries.updatePatientById);
        case 11:
          result = _context6.sent;
          console.log(result);
          res.json({
            msg: "Información Actualizada."
          });
          _context6.next = 19;
          break;
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 16]]);
  }));
  return function updatePatientById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
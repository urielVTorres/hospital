"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pacienteController = require("../controllers/paciente.controller.js");
var router = (0, _express.Router)();
router.get('/api/paciente', _pacienteController.getPatient);
router.get("/api/paciente/count", _pacienteController.getTotalPatients);
router.post('/api/paciente', _pacienteController.createNewPatient);
router.get('/api/paciente/:CURP', _pacienteController.getPatientByCURP);
router["delete"]('/api/paciente/:CURP', _pacienteController.deletePatientByCURP);
router.put('/api/paciente/:id', _pacienteController.getPatient);
var _default = router;
exports["default"] = _default;
import { Router } from "express";
import { createNewPatient, deletePatientByCURP, getPatient, getPatientByCURP, getTotalPatients, updatePatientById } from "../controllers/paciente.controller.js";

const router = Router();

router.get('/api/paciente', getPatient);
router.get("/api/paciente/count", getTotalPatients);
router.post('/api/paciente', createNewPatient);
router.get('/api/paciente/:CURP', getPatientByCURP);
router.delete('/api/paciente/:CURP', deletePatientByCURP);
router.put('/api/paciente/:id', updatePatientById);


export default router;
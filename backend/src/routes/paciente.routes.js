import { Router } from "express";
import { createNewPatient, deletePatientByCURP, getPatient, getPatientByCURP, getTotalPatients, updatePatientById } from "../controllers/paciente.controller.js";

const router = Router();

router.get('/', getPatient);
router.get("/count", getTotalPatients);
router.post('/', createNewPatient);
router.get('/:CURP', getPatientByCURP);
router.delete('/:CURP', deletePatientByCURP);
router.put('/:id', updatePatientById);


export default router;
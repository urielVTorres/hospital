import { Router } from "express";
import { 
    createNewPatient, 
    deletePatientByCURP, 
    getPatientByCURP, 
    getTotalPatients, 
    updatePatientById
} from "../controllers/paciente.controller.js";

import { 
    createNewUser,
    getTurnos, agregarTurno, eliminarTurno, editarTurno,
    getDepartamentos, agregarDepartamento, eliminarDepartamento, editarDepartamento,
    getEspecialidades, agregarEspecialidad, eliminarEspecialidad, editarEspecialidad, getAllPatients, getCitas,
} from "../controllers/admin.controller.js";

const router = Router();

//Agregar usuario
router.post("/user", createNewUser);

//Rutas con relación a los pacientes
router.get("/paciente/count", getTotalPatients);
router.post('/paciente', createNewPatient);
router.get('/paciente/:CURP', getPatientByCURP);
router.get('/paciente', getAllPatients);
router.delete('/paciente/:CURP', deletePatientByCURP);
router.put('/paciente/:id', updatePatientById);


//Rutas con relación a la clínica.

//Departamentos (Areas)
router.get('/clinica/departamentos', getDepartamentos);
router.post('/clinica/departamentos', agregarDepartamento);
router.delete('/clinica/departamentos/:id', eliminarDepartamento);
router.put('/clinica/departamentos/:id', editarDepartamento);

//Turnos
router.get('/clinica/turnos', getTurnos);
router.post('/clinica/turnos', agregarTurno);
router.delete('/clinica/turnos/:id', eliminarTurno);
router.put('/clinica/turnos/:id', editarTurno);

//Especialidades
router.get('/clinica/especialidades', getEspecialidades);
router.post('/clinica/especialidades', agregarEspecialidad);
router.delete('/clinica/especialidades/:id', eliminarEspecialidad);
router.put('/clinica/especialidades/:id', editarEspecialidad);

//Citas
router.get('/clinica/citas', getCitas);


export default router;
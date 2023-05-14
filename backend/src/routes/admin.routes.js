import { Router } from "express";
import { 
    createNewPatient, 
    deletePatientByCURP, 
    getPatientByCURP, 
    getTotalPatients, 
    updatePatientById,
} from "../controllers/paciente.controller.js";

import { 
    getTurnos, agregarTurno, eliminarTurno, editarTurno,

    getDepartamentos, agregarDepartamento, eliminarDepartamento, editarDepartamento,
    getEspecialidades, agregarEspecialidad, eliminarEspecialidad, editarEspecialidad,
} from "../controllers/admin.controller.js";

const router = Router();

//Rutas con relación a los pacientes

router.get("/api/admin/paciente/count", getTotalPatients);
router.post('/api/admin/paciente', createNewPatient);
router.get('/api/admin/paciente/:CURP', getPatientByCURP);
router.delete('/api/admin/paciente/:CURP', deletePatientByCURP);
router.put('/api/admin/paciente/:id', updatePatientById);


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



export default router;
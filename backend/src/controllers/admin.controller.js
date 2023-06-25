import { getConnection, queries } from "../database/index.js";

const getTurnos = async (req, res) => {
    try {
        console.log("conectando a Turnos");
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTurnos);
        res.json(result.recordset);
        await pool.close();
    } catch (error) {
        console.error(error);
    }
}

const agregarTurno = async (req, res) => {
    try {
        console.log(req.body);
        const {turno} = req.body;
        const pool = await getConnection();
        const result = await pool.request().input('turno', turno).query(queries.agregarTurno);
        await pool.close();
        res.json({msg: "Agregado Correctamente.", error: false});
    } catch (error) {
        console.log(error)
    }
}

const eliminarTurno = async (req, res) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('id', id).query(queries.eliminarTurno);
        await pool.close();
        res.json({msg: "Eliminado Correctamente", error: false});
    } catch (error) {
        console.log(error);
    }
}

const editarTurno = async (req, res) => {
    try {
        const {id} = req.params;
        const {turno} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('turno', turno)
            .input('id', id)
            .query(queries.editarTurno);
        res.json({msg: 'Editado correctamente.', error: false});
        await pool.close();
    } catch (error) {
        console.log(error)
    }
}

const getDepartamentos = async (req, res) => {
    try {
        
        console.log("conectando a Departamentos");
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDepartamentos);
        await pool.close();
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
    }
}

const agregarDepartamento = async (req, res) => {
    try {
        console.log(req.body);
        const {departamento} = req.body;
        const pool = await getConnection();
        const result = await pool.request().input('departamento', departamento).query(queries.agregarDepartamento);
        await pool.close();
        res.json({msg: "Agregado Correctamente.", error: false});
    } catch (error) {
        console.log(error)
    }
}

const eliminarDepartamento = async (req, res) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('id', id).query(queries.eliminarDepartamento);
        await pool.close();
        res.json({msg: "Eliminado Correctamente", error: false});
    } catch (error) {
        console.log(error);
    }
}

const editarDepartamento = async (req, res) => {
    try {
        const {id} = req.params;
        const {departamento} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('departamento', departamento)
            .input('id', id)
            .query(queries.editarDepartamento);
        res.json({msg: 'Editado correctamente.', error: false});
        await pool.close();
    } catch (error) {
        console.log(error)
    }
}

const getEspecialidades = async (req, res) => {
    try {
        
        console.log("conectando a Especialidades");
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEspecialidades);
        await pool.close();
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
    }
}

const agregarEspecialidad = async (req, res) => {
    try {
        console.log(req.body);
        const { especialidad } = req.body;
        const pool = await getConnection();
        const result = await pool.request().input('especialidad', especialidad).query(queries.agregarEspecialidad);
        await pool.close();
        res.json({msg: "Agregado Correctamente.", error: false});
    } catch (error) {
        console.log(error)
    }
}

const eliminarEspecialidad = async (req, res) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('id', id).query(queries.eliminarEspecialidad);
        await pool.close();
        res.json({msg: "Eliminado Correctamente", error: false});
    } catch (error) {
        console.log(error);
    }
}

const editarEspecialidad = async (req, res) => {
    try {
        const {id} = req.params;
        const {especialidad} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('especialidad', especialidad)
            .input('id', id)
            .query(queries.editarEspecialidad);
        res.json({msg: 'Editado correctamente.', error: false});
        await pool.close();
    } catch (error) {
        console.log(error)
    }
}

const createNewUser = async (req, res)=>{
    try {
        const {email, password, tipo_usuario} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('email', email)
            .input('password', password)
            .input('tipo_usuario', tipo_usuario)
            .query(queries.agregarUsuario); 
        res.json({msg: 'Usuario agregado correctamente.', error: false});
        await pool.close();
    } catch (error) {
        console.log(error)
    }
}

const getAllPatients = async (req, res)=>{
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPatients);
        await pool.close();
        res.json(result.recordset);

    } catch (error) {
        console.log(error);
    }
}

const getCitas = async ( req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getCitas);
        await pool.close();
        res.json(result.recordset);
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('email', email)
            .input('password', password)
            .query(queries.confirmarInicioSesion);
        
            console.log(result.recordset);
        if(result.recordset.length === 0 || result.recordset[0].contraseña !== password){
            
            res.json({msg: "El correo o la contraseña son incorrectos.", error: true});
            return;
        }
        let result2
        switch (result.recordset[0].ID_Tipo_Usuario) {
            case 1:
                result2 = await pool.request()
                    .input('id', result.recordset[0].Id_Usuario)
                    .query(queries.perfilPaciente);            
                    break;
            case 2:
                result2 = await pool.request()
                    .input('id', result.recordset[0].Id_Usuario)
                    .query(queries.perfilDoctor);            
                        break;
            case 3:
                result2 = await pool.request()
                    .input('id', result.recordset[0].Id_Usuario)
                    .query(queries.perfilEnfermera);            
                break;
            case 4:
                result2 = await pool.request()
                    .input('id', result.recordset[0].Id_Usuario)
                    .query(queries.perfilAdmin);  
                break;
        
            default:
                break;
        }
        
        res.json(result2.recordset[0]);
        await pool.close();
    } catch (error) {
        console.log(error)
    }
}

const agregarDoctor = async (req, res) =>{
    try {
        const doctor = req.body;
        const { paterno, materno, nombre, edad, CURP, telefono, correo, cedula, turno, especialidad, usuario } = doctor;
        if ([CURP, paterno, nombre, correo].includes('') || [telefono].includes(null)) {
            return res.json({ msg: "Llene los campos obligatorios" });
        }
        const pool = await getConnection();
        const result = await pool.request()
            .input("paterno", paterno)
            .input("materno", materno)
            .input("nombre", nombre)
            .input("CURP", CURP)
            .input("cedula", cedula)
            .input("edad", edad)
            .input("telefono", telefono)
            .input("correo", correo)
            .input("idturno", turno)
            .input("idespecialidad", especialidad)
            .input("idUsuario", usuario)
            .query(queries.registerNewDoctor)
        console.log(result);
        return res.json({ msg: "Doctor registrado.", error: false });
    } catch (error) {
        console.error(error);
    }
}

export {
    getTurnos, agregarTurno, eliminarTurno, editarTurno,
    getDepartamentos, agregarDepartamento, eliminarDepartamento, editarDepartamento,
    getEspecialidades, agregarEspecialidad, eliminarEspecialidad, editarEspecialidad,
    createNewUser,
    getAllPatients, getCitas,
    login,
    agregarDoctor

}
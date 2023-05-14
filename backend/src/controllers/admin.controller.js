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

export {
    getTurnos, agregarTurno, eliminarTurno, editarTurno,
    getDepartamentos, agregarDepartamento, eliminarDepartamento, editarDepartamento,
    getEspecialidades, agregarEspecialidad, eliminarEspecialidad, editarEspecialidad
}
import { getConnection, queries } from "../database/index.js";

const getPatient = async (req, res) => {
    try {
        console.log("conectando");
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPatients);
        res.json(result.recordset);
    } catch (error) {
        console.error(error);
    }
}

const createNewPatient = async (req, res) => {
    try {
        const i = req.body;
        const { CURP, firstname, f_lastname, NSS, CP, email, phone } = i;
        if ([CURP, firstname, f_lastname, email].includes('') || [NSS, CP, phone].includes(null)) {
            return res.json({ msg: "Llene los campos obligatorios" });
        }
        const pool = await getConnection();
        const result = await pool.request()
            .input("CURP", i.CURP)
            .input("firstname", i.firstname)
            .input("f_lastname", i.f_lastname)
            .input("m_lastname", i.m_lastname)
            .input("gender", i.gender)
            .input("birthday", i.birthday)
            .input("NSS", i.NSS)
            .input("street", i.street)
            .input("number", i.number)
            .input("state", i.state)
            .input("CP", i.CP)
            .input("phone", i.phone)
            .input("email", i.email)
            .query(queries.registerNewPatient)
        console.log(result);
        return res.json({ msg: "Paciente registrado" });
    } catch (error) {
        console.error(error);
    }
}

const getPatientByCURP = async (req, res) => {
    try {
        const { CURP } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('CURP', CURP)
            .query(queries.getPatientByCURP);
        res.json(result.recordset[0]);
    } catch (error) {
        console.log(error);
    }
}

const deletePatientByCURP = async (req, res) => {
    try {
        const { CURP } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('CURP', CURP)
            .query(queries.deletePatient);
        res.json({msg: "Registro eliminado"});
    } catch (error) {
        console.log(error);
    }
}
const getTotalPatients = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getTotalPatients);

        console.log(result);
        res.json({total: result.recordset[0]['']});
    } catch (error) {
        console.log(error);
    }
}

const updatePatientById = async (req, res) => {
try {   
        const {id} = req.params;
        const i = req.body;
        const { CURP, firstname, f_lastname, NSS, CP, email, phone } = i;
        if ([CURP, firstname, f_lastname, email].includes('') || [NSS, CP, phone].includes(null)) {
            return res.json({ msg: "Llene los campos obligatorios" });
        }
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("CURP", i.CURP)
            .input("firstname", i.firstname)
            .input("f_lastname", i.f_lastname)
            .input("m_lastname", i.m_lastname)
            .input("gender", i.gender)
            .input("birthday", i.birthday)
            .input("NSS", i.NSS)
            .input("alergies", i.alergies)
            .input("symptoms", i.symptoms)
            .input("street", i.street)
            .input("number", i.number)
            .input("state", i.state)
            .input("CP", i.CP)
            .input("phone", i.phone)
            .input("email", i.email)
            .input("medicines", i.medicines)
            .input("area", i.area)
            .input("status", i.status)
            .input("floor", i.floor)
            .input("room", i.room)
            .input("bed", i.bed)
            .input("id_patient", id)
            .query(queries.updatePatientById);
        console.log(result);
        res.json({msg: "Información Actualizada."});
    } catch (error) {
        console.log(error);
    }
}

export {
    getPatient,
    createNewPatient,
    getPatientByCURP,
    deletePatientByCURP,
    getTotalPatients,
    updatePatientById
}
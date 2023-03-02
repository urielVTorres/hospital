import sql from 'mssql';
import config from '../config.js';
const sqlConfig = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

export { sql }

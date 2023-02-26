// import sql from 'mssql';

// const sqlConfig = {
//     user: "root",
//     password: "gordito21",
//     port: 3306,
//     server: "localhost",
//     database: "hospital",
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     }
// }

// const getConnection = async () => {
//     const pool = await sql.connect(sqlConfig);
//     const result = await pool.request().query("SELECT 1");
//     console.log(result);
// }

// getConnection();

import {Connection, Request} from 'tedious'


const config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'root', // update me
      password: 'gordito21' // update me
    },
    port: 3306
  }
}

const connection = new Connection(config)


connection.on('connect', (err) => {
  console.log("Conectando???");
    if (err) {
    console.log(err)
  } else {
    console.log("Base de datos conectada??");
    executeStatement()
  }
})

console.log("Paso la funcion")
function executeStatement () {
  const request = new Request("SELECT 1", (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log(results)
    }
    connection.close()
  })

  request.on('row', (columns) => {
    columns.forEach((column) => {
      if (column.value === null) {
        console.log('NULL')
      } else {
        console.log(column.value)
      }
    })
  })

  connection.execSql(request)
}
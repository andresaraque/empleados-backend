const sql = require('mssql');
require('dotenv').config();
const dbconfig = {
    server: process.env.SQL_SERVER,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    port: 1433,
    options: {
        encrypt: false,
        enableArithAbort: true
    },
}

const dbConnection = async() => {

    try {

        await sql.connect(dbconfig);

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la DB ver logs');
    }

}


module.exports = {
    dbConnection
}
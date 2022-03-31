const mysql = require('mysql');

// Datos de conecion a la base de datos
const host = 'localhost';
const user = 'brandon';
const password = 'Bama1591%*';
const database = 'apiUsuarios';

// Creacion de conexion a la base de datos
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

// Validacion de conexion a la base de datos
/**
 * @param err error al conectarse a la base de datos
 */
connection.connect((err) => {
    if (!err)
        console.log('Connected to database');
    else
        console.log(err);
});

module.exports = connection;


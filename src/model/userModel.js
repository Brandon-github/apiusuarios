const model = {};

const connection = require('../config/connection');
let query = '';


model.obtenerUsuarios = (callback) => {
    query = `SELECT u.nombre, u.correo, r.nombre AS rol
                FROM usuarios AS u
                    INNER JOIN roles AS r
                        ON (u.id_rol = r.id_rol)
                ORDER BY u.nombre`;

    connection.query(query, callback);
}

module.exports = model;
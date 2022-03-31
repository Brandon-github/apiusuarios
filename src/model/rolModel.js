const model = {};

const connection = require('../config/connection');
let query = '';

model.obtenerRoles = (callback) => {
    query = `SELECT id_rol, nombre
                FROM roles`;
    
    connection.query(query, callback);
}

model.obtenerRolPorId = (data, callback) => {
    query = `SELECT id_rol, nombre
                FROM roles 
                WHERE id_rol = ?`;
    
    connection.query(query, data, callback);
}

model.insertarRol = (data, callback) => {
    query = `INSERT INTO roles(nombre)
                VALUES(?)`;

    connection.query(query, data, callback);
}

model.modificarRol = (data, callback) => {
    query = `UPDATE roles 
                SET nombre = ? 
                WHERE id_rol = ?`;
    
    connection.query(query, data, callback);
}

model.eliminarRol = (data, callback) => {
    query = `DELETE FROM roles 
                WHERE id_rol = ?`;

    connection.query(query, data, callback);
}

module.exports = model;
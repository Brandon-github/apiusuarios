const model = {};

const connection = require('../config/connection');
let query = '';


model.obtenerUsuarios = (callback) => {
    query = `SELECT id_usuario, nombre, correo, id_rol
                FROM usuarios`;

    connection.query(query, callback);
}

model.obtenerUsuarioPorId = (data, callback) => {
    query = `SELECT id_usuario, nombre, correo, id_rol
                FROM usuarios
                WHERE id_usuario = ?`;
    
    connection.query(query, data, callback);
}

model.obtenerUsuarioPorNombre = (data, callback) => {
    query = `SELECT id_usuario, nombre, correo, id_rol
                FROM usuarios
                WHERE nombre LIKE ?%`;

    connection.query(query, data, callback);
}

model.insertarUsuario = (data, callback) => {
    query = `INSERT INTO usuarios(nombre, correo, id_rol)
                VALUES(?, ?, ?)`;

    connection.query(query, data, callback);
}

model.modificarUsuario = (data, callback) => {
    query = `UPDATE usuarios
                SET nombre = ?, correo = ?, id_rol = ?
                WHERE id_usuario = ?`;

    connection.query(query, data, callback);
}

model.eliminarUsuario = (data, callback) => {
    query = `DELETE FROM usuarios
                WHERE id_usuario = ?`;

    connection.query(query, data, callback);
}

module.exports = model;
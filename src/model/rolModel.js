const model = {};

const connection = require('../config/connection');
let query = '';

model.obtenerRoles = (callback) => {
    query = `SELECT nombre
                FROM roles`;
    
    connection.query(query, callback);
}

module.exports = model;
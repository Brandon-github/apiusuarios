const controller = {};

// Importacion de model de usuario
const userModel = require('../model/userModel');

controller.listarUsuarios = (req, res) => {
    userModel.obtenerUsuarios((err, rows, fields) => {
        if (!err) 
            res.json(rows);
        else 
            console.log(err);
    })
};

module.exports = controller;
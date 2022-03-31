const controller = {};

// importacion de model de roles
const rolModel = require('../model/rolModel');

controller.listarRoles = (req, res) => {
    rolModel.obtenerRoles((err, rows, fields) => {
        if (!err)
            res.json(rows);
        else 
            console.log(err);
    });
}


module.exports = controller;
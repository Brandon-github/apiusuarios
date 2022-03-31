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

controller.listarRolPorId = (req, res) => {
    const { id } = req.params;

    rolModel.obtenerRolPorId([id], (err, rows, fields) => {
        if (!err) 
            res.json(rows);
        else 
            console.log(err);
        
    });
}

controller.crearRol = (req, res) => {
    const { nombre } = req.body; 
    rolModel.insertarRol([nombre], (err, rows, fields) => {
        if (!err) 
            res.json({Status: 'Create rol successfully'});
        else 
            console.log(err);
    });
} 

controller.actualizarRol = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body; 

    rolModel.modificarRol([nombre, id], (err, rows, fields) => {
        if (!err) 
            res.json({Status: 'Update rol successfully'});
        else 
            console.log(err);
    });
}

controller.eliminarRol = (req, res) => {
    const { id } = req.params;

    rolModel.eliminarRol([id], (err, rows, fields) => {
        if (!err) 
            res.json({Status: 'Delete rol with id ' + id});
        else
            console.log(err);
    });
}

module.exports = controller;
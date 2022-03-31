const controller = {};

// Importacion de model de usuario
const userModel = require('../model/userModel');

controller.listarUsuarios = (req, res) => {
    userModel.obtenerUsuarios((err, rows, fields) => {
        if (!err) 
            res.status(200).json(rows);
        else 
            console.log(err);
    })
};

controller.listarUsuarioPorId = (req, res) => {
    const { id } = req.params;

    userModel.obtenerUsuarioPorId([id], (err, rows, fields) => {
        if (!err)   
            res.json(rows);
        else 
            console.log(err);
    });
}

controller.listarUsuarioPorNombre = (req, res) => {
    const { nombre } = req.params;

    userModel.obtenerUsuarioPorNombre([nombre], (err, rows, fields) => {
        if (!err) 
            res.json(rows);
        else 
            console.log(rows);
    });
} 

controller.crearUsuario = (req, res) => {
    const { nombre, correo, id_rol } = req.body;

    userModel.insertarUsuario([nombre, correo, id_rol], (err, rows, fields) => {
        if (!err) 
            res.json({Status: 'create user successfully'});
        else 
            console.log(err);
    });
}

controller.actualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, correo, id_rol } = req.body;

    userModel.modificarUsuario([nombre, correo, id_rol, id], (err, rows, fields) => {
        if (!err)
            res.json({Status: 'update user successfully'});
        else 
            console.log(err);
    });
}

controller.eliminarUsuario = (req, res) => {
    const { id } = req.params;

    userModel.eliminarUsuario([id], (err, rows, fields) => {
        if (!err) 
            res.json({Status: 'Delete user with id' + id});
        else 
            console.log(err);
    });
}

module.exports = controller;
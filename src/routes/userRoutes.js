const { Router } = require('express');
const router = Router();

const userController = require('../controller/userController');

router.get('/', userController.listarUsuarios);

router.get('/:id', userController.listarUsuarioPorId);

router.get('/nombre/:nombre', userController.listarUsuarioPorNombre);

router.post('/crear', userController.crearUsuario);

router.put('/actualizar/:id', userController.actualizarUsuario);

router.delete('/eliminar/:id', userController.eliminarUsuario);

module.exports = router;
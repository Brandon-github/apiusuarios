const { Router } = require('express');
const router = Router();

// importacion de controllador de roles
const rolController = require('../controller/rolController');

router.get('/', rolController.listarRoles);

router.get('/:id', rolController.listarRolPorId);

router.post('/crear/', rolController.crearRol);

router.put('/actualizar/:id', rolController.actualizarRol);

router.delete('/eliminar/:id', rolController.eliminarRol);

module.exports = router;

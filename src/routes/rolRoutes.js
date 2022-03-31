const { Router } = require('express');
const router = Router();

// importacion de controllador de roles
const rolControllador = require('../controller/rolController');

router.get('/', rolControllador.listarRoles);

module.exports = router;
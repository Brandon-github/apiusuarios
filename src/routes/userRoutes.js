const { Router } = require('express');
const router = Router();

const userController = require('../controller/userController');

router.get('/', userController.listarUsuarios);

module.exports = router;
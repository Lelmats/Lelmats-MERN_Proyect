const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @ruta   POST api/auth/register
// @desc   Registrar un usuario
// @acceso Public
router.post('/register', register);

// @ruta   POST api/auth/login
// @desc   Autenticar un usuario y obtener token
// @acceso Public
router.post('/login', login);

module.exports = router;
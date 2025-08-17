const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @ruta   GET api/data
// @desc   Obtener datos protegidos
// @acceso Privado
router.get('/data', auth, (req, res) => {
    res.json({ 
        message: `¡Hola, usuario con ID ${req.user.id}!`,
        data: "Estos son datos súper secretos a los que solo tú puedes acceder."
    });
});

module.exports = router;
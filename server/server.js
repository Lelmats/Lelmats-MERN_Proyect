const express = require('express');
const cors = require('cors');
const db = require('./models'); // Sequelize importa y configura todo
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Sincronizar la base de datos (asegura que las tablas existan)
db.sequelize.sync()
  .then(() => console.log("Base de datos de MySQL conectada y sincronizada."))
  .catch((err) => console.log("Error al sincronizar la BD: " + err.message));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente." });
});

// Rutas de la aplicación
app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/protected'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
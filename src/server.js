const express = require('express');
const app = express();

// Importacion de rutas
const userRoutes = require('./routes/userRoutes');

// Configuraciones
app.set('port', process.env.PORT || 5000);

// Rutas
app.use('/api/users', userRoutes);

module.exports = app;
const express = require('express');
const app = express();

// Importacion de rutas
const userRoutes = require('./routes/userRoutes');
const rolRoutes = require('./routes/rolRoutes');

// Configuraciones
app.set('port', process.env.PORT || 5000);

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/roles', rolRoutes);

module.exports = app;
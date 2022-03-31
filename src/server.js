const express = require('express');
const morgan = require('morgan');

// Iniciar aplicacion
const app = express();

// Importacion de rutas
const userRoutes = require('./routes/userRoutes');
const rolRoutes = require('./routes/rolRoutes');

// Configuraciones
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/usuarios', userRoutes);
app.use('/api/roles', rolRoutes);

module.exports = app;
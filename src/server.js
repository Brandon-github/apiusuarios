const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

module.exports = app;
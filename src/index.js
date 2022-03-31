const app = require('./server');

// Iniciar a escuchar el servidor
app.listen(app.get('port'), () => { 
    console.log(`Server running on port ${app.get('port')}`);
});
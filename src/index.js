const app = require('./server');

app.listen(app.get('port'), () => { 
    console.log(`Server running on port ${app.get('port')}`);
});
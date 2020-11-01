require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
  
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Configuración global de rutas
app.use(require('./routes/index'));

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', 3000);
})
require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware para arquivos estáticos
app.use('/estatico', express.static('src/app/public/'));

//habilitando middleware bodyParser para receber objetos complexos em formato JSON
app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;
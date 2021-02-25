const express = require('express');
const app = express();

const routerBasic = require('./routes/routerBasic');

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/', routerBasic);

//TODO Impostare viewEngine


module.exports = app;
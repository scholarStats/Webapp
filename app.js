const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

const routerBasic = require('./routers/routerBasic');
const routerDB =  require('./routers/routerDB');

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/', routerBasic);
app.use('/db', routerDB)

module.exports = app;





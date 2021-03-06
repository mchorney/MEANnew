var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function () { });
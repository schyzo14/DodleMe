/* global __dirname */

var express = require('../../node_modules/express');
var app = express();
app.use(express.static(__dirname+'/app'));
app.use('/bower_components', express.static(__dirname+'/bower_components'));

var server = require('http').Server(app);
server.listen(8080);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

exports.app = app;
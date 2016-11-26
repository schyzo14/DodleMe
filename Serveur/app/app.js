var express = require('express');
var app = express();
app.use(express.static(__dirname+'/app'));
app.use('/bower_components', express.static(__dirname+'/bower_components'));

var cors = require('cors');
app.use(cors());
app.options('*', cors());

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header('Access-Control-Allow-Methods',    'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    if (req.method == 'OPTIONS') {
        res.status(200);
        res.write("Allow: GET,PUT,POST,DELETE,OPTIONS");
        res.end();
    } else {
        next();
    }
});

var server = require('http').Server(app);
server.listen(8080);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var creneau = require('./ressources/creneau');
app.use('/creneau', creneau);
var evenement = require('./ressources/evenement');
app.use('/evenement', evenement);
var listeEvenements = require('./ressources/listeEvenements');
app.use('/listeEvenements', listeEvenements);
var reponse = require('./ressources/reponse');
app.use('/reponse', reponse);
var utilisateur = require('./ressources/utilisateur');
app.use('/utilisateur', utilisateur);

module.exports = app;
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


var evenement = require('../metier/evenement.js');


// POST
app.post(
    '/evenement', function(req, res) {
        if(evenement.creerEvenement (req.body.id, req.body.nom, req.body.descriptif) == 1) {
            res.json("OK");
        } else {
            res.json("echec");
        }
    }
);


// GET
app.get(
    '/evenement/:idE', function(req, res) {
        res.json(evenement.getEvenement (req.params.idE));
    }
);
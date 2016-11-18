/* global __dirname */

var express = require('express');
var app = express();
app.use(express.static(__dirname+'/app'));
app.use('/bower_components', express.static(__dirname+'/bower_components'));

var server = require('http').Server(app);
server.listen(8080);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var banque = require('./banque.js');

//GET
app.get(
    '/comptes/:id', function(req, res) {
        console.log(req.params.id);
        if(banque.positionDuCompte(req.params.id).id === null) {
        //Envoi avec code http personnalisé
            res.status(404).json( {
                    error: "Le compte d'id "+req.params.id+" n'existe pas."
                }
            );
        } else {
            res.json(banque.positionDuCompte(req.params.id));
        }
    }
);

//POST
app.post(
    '/comptes/', function(req, res) {
        if(banque.creerCompte(req.body.id, req.body.somme) === 1) {
            res.json(banque.positionDuCompte(req.body.id));
        } else {
            res.json("echec");
        }
    }
);

//PUT
app.put(
    '/comptes/:id', function(req, res) {
        if(req.body.somme < 0) {
            if(banque.retirerDuCompte(req.params.id, -req.body.somme) === 1) {
                res.json("Nouveau solde : " + banque.positionDuCompte(req.params.id).somme + "€");
            } else {
                res.json("echec");
            }
        } else {
            if(banque.ajouterAuCompte(req.params.id, req.body.somme) === 1) {
                res.json("Nouveau solde : " + banque.positionDuCompte(req.params.id).somme + "€");
            } else {
                res.json("echec");
            }
        }
    }
);
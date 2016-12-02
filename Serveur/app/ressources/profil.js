var evenement = require('../metier/profil.js');
var express = require('express');
var router = express.Router();

//POST
router.post(
    '/', function(req,res){
        req.json(profil.creerProfil(req.body.nom, req.body.prenom, req.body.nomUtil));
    }
);

module.exports = router;
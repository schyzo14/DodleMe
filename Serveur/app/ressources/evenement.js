var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();


// POST
router.post(
    '/', function(req, res) {
        if(evenement.creerEvenement (req.body.id, req.body.nom, req.body.descriptif) == 1) {
            res.json("OK");
        } else {
            res.json("echec");
        }
    }
);


// GET
router.get(
    '/:idE', function(req, res) {
        res.json(evenement.getEvenement (req.params.idE));
    }
);

module.exports = router;
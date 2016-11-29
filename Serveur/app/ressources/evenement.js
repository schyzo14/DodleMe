var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();


// POST
router.post(
    '/', function(req, res) {

        res.json(evenement.creerEvenement (req.body.nom, req.body.descriptif));

    }
);


// GET
router.get(
    '/:idE', function(req, res) {
        res.json(evenement.getEvenement (req.params.idE));
    }
);

module.exports = router;
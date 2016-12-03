var evenement = require('../metier/evenement');

var express = require('express');
var router = express.Router();

// GET
router.get(
    '/:idE', function(req, res) {
        res.json(evenement.getEvenement (req.params.idE));
    }
);

// POST
router.post(
    '/', function(req, res) {
        res.json(evenement.creerEvenement (req.body.nom, req.body.descriptif, req.body.nomUtil));
    }
);

// PATCH
router.patch(
    '/:idE', function(req, res) {
        if(typeof req.body.listeCreneau != 'undefined') {
            evenement.setListeCreneaux(req.params.idE, req.body.listeCreneau);
        }
        if(typeof req.body.listeReponses != 'undefined') {
            evenement.setListeReponses(req.params.idE, req.body.listeReponses);
        }
        res.json(evenement.getEvenement(req.params.idE));
    }
)

module.exports = router;
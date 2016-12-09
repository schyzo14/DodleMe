var evenement = require('../metier/evenement');
var reponse = require('../metier/reponse');

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
        res.json(evenement.creerEvenement(req.body.nom, req.body.descriptif, req.body.nomUtil));
    }
);

// PATCH
router.patch(
    '/:idE', function(req, res) {
        console.log(req.body.listeReponses);
        if(typeof req.body.listeCreneau != 'undefined') {
            evenement.setListeCreneaux(req.params.idE, req.body.listeCreneau);
        }
        if(typeof req.body.listeReponses != 'undefined') {
            evenement.setListeReponses(req.params.idE, req.body.listeReponses);

            var sizeRep = Object.keys(req.body.listeReponses).length;
            for(i=1; i<=sizeRep; i++) {
                console.log(req.body.listeReponses[i]);
                for(j=0; j<req.body.listeReponses[i].listeCreneaux.length; j++) {
                    reponse.ajouterReponse(req.body.listeReponses[i].listeCreneaux[j], req.body.listeReponses[i].pseudo,
                        req.body.listeReponses[i].idEvenement);
                }
            }
        }
        res.json(evenement.getEvenement(req.params.idE));
    }
)

module.exports = router;
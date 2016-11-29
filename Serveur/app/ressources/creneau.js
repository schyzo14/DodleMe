var creneau = require('../metier/creneau.js');
var express = require('express');
var router = express.Router();

//POST
router.post(
    '/:idE/', function(req, res) {
        if(creneau.ajouterCreneau(req.body.heure, req.body.date, req.params.idE) == 1) {
            res.json("OK");
        } else {
            res.json("echec : heure="+req.body.heure+" date="+ req.body.date+" idE="+ req.params.idE);
        }
    }
);

module.exports = router;
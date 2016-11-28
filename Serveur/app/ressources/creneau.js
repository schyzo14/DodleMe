var creneau = require('../metier/creneau.js');
var express = require('express');
var router = express.Router();

//POST
router.post(
    '/:idE/', function(req, res) {
        if(creneau.ajouterCreneau(req.body.id, req.body.heure, req.body.date, req.params.idE) == 1) {
            res.json("OK");
        } else {
            res.json("echec");
        }
    }
);

module.exports = router;
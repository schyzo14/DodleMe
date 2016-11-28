var reponse = require('../metier/reponse.js');
var express = require('express');
var router = express.Router();

//GET
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send("lol");
});

//POST
/*router.post(
    '/reponses/', function(req, res) {
        if(reponse.ajouterReponse(req.body.evenement, req.body.creneaux) === 1) {
            res.json("OK");
        } else {
            res.json("NOK");
        }
    }
)*/

module.exports = router;
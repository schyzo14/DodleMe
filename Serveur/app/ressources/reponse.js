var reponse = require('../metier/reponse.js');

//GET
app.post(
    '/reponses/', function(req, res) {
        res.json(reponse.listeReponses());
    }
)

//POST
app.post(
    '/reponses/', function(req, res) {
        if(reponse.ajouterReponse(req.body.evenement, req.body.creneaux) === 1) {
            res.json("OK");
        } else {
            res.json("NOK");
        }
    }
)
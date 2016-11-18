var general = require('./General.js');
var utilisateur = require('../Metier/Utilisateur.js');

//POST
general.app.post(
    '/utilisateurs/', function(req, res) {
        if(utilisateur.inscription(req.body.id, req.body.pseudo, req.body.nom, req.body.prenom) === 1) {
            res.json("success");
        } else {
            res.json("echec");
        }
    }
);
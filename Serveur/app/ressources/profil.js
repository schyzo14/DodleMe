var profil = require('../metier/profil.js');
var express = require('express');
var router = express.Router();

//POST
router.post(
    '/', function(req,res){
        res.json(profil.creerProfil(req.body.nom, req.body.prenom, req.body.nomUtil));
    }
);


//GET
router.get(
	'/:nomUtil', function(req, res) {
		console.log(req.params.nomUtil);
		if(profil.getProfilNom(req.params.nomUtil).nomUtil === null) {
		//Envoi avec code http personnalisé
			res.status(404).json(
				{
					error: "Le profil "+req.params.nomUtil+" n'existe pas."
				}
			);
		} else {
			res.json(profil.getProfilNom(req.params.nomUtil));
		}
	}
);

module.exports = router;
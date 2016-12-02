var profils = require('../metier/profil.js');
var express = require('express');
var router = express.Router();

//GET
router.get(
	'/', function(req, res) {
		
		res.json(profils.getListeProfil());
	}
);

module.exports = router;
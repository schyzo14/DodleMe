var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();

//GET
router.get(
	'/', function(req, res) {
		
		res.json(evenement.getListe());
	}
);

//GET
router.get(
	'/crees/:nomUtil', function(req, res) {
		
		res.json(evenement.getListeCrees(req.params.nomUtil));
	}
);

module.exports = router;
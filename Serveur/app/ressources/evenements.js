var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();

//GET
router.get(
	'/', function(req, res) {
		
		res.json(evenement.getListe());
	}
);

module.exports = router;
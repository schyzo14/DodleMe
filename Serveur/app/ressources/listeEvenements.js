<<<<<<< HEAD
//GET
app.get(
	'/evenements', function(req, res) {
		
		res.json(evenement.getListe()));
	}
);
=======
var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();





module.exports = router;
>>>>>>> 7109a98ffdaeb3502a137479240b702e15ef1462

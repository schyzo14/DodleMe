var evenement = require('../metier/evenement.js');
var express = require('express');
var router = express.Router();

<<<<<<< HEAD
// GET
router.get(
    '/', function(req, res) {
        res.json(evenement.getListe());
    }
=======
//GET
router.get(
	'/evenements', function(req, res) {
		
		res.json(evenement.getListe());
	}
>>>>>>> 4fdc6325983cc8a2e744526b1352b48477c4c225
);

module.exports = router;
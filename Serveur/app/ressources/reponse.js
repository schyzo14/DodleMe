var reponse = require('../metier/reponse.js');
var express = require('express');
var router = express.Router();

//GET
router.get('/:idU', function(req, res, next) {
    res.send(reponse.getReponsesUser(req.params.idU));
});

module.exports = router;
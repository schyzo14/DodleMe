//GET
app.get(
	'/evenements', function(req, res) {
		
		res.json(evenement.getListe()));
	}
);
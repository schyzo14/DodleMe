var listeEvenement = {};

function Evenement(id, nom, descriptif) {
    this.id = id;
    this.nom = nom;
    this.descriptif = descriptif;
}

// créer un nouveau événement
var creerEveneement = function(id, nom, descriptif) {
	// s'il n'existe pas
	if (typeof listeEvenement[id] === 'undefined') {
		// ajout de l'evenement
		listeEvenement[id] = new Evenement(id, nom, descriptif);
		return 1;
    }
    return 0;
}

exports.creerEvenement = creerEvenement;
exports.getListe = getListe;

var listeEvenement = {};

function Evenement(id, nom, descriptif) {
    this.id = id;
    this.nom = nom;
    this.descriptif = descriptif;
    this.listeCreneau = {};
}

// créer un nouveau événement
var creerEvenement = function(id, nom, descriptif) {
	// s'il n'existe pas
	if (typeof listeEvenement[id] === 'undefined') {
		// ajout de l'evenement
		listeEvenement[id] = new Evenement(id, nom, descriptif);
		return 1;
    }
    return 0;
}

// recupérer événement
var getEvenement = function(id) {
	// s'il n'existe pas
	if (typeof listeEvenement[id] === 'undefined') {
		return 0;
    }
    return listeEvenement[id];
}

exports.creerEvenement = creerEvenement;
exports.getEvenement = getEvenement;
//exports.getListe = getListe;

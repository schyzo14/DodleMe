<<<<<<< HEAD
var listeEvenement = {};

function Evenement(id, nom, descriptif){
    this.id = id;
    this.nom = nom;
    this.descriptif = nom;
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
=======
// Liste des evenements
var listeEvenements = {};

// Constructeur pour les Evenements
function Evenement(id, nom, description) {
    // l'id de levenement
    this.id = id;
    // nom de l'evenement
    this.nom = nom;
    // la description de l'evenement
    this.description = description;
}

>>>>>>> 9e81a76b792f2c9cb4686762452b0565eca9b733

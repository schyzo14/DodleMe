var listeEvenement = {};

var element1 = new Evenement(1, "unElement", "descriptif");
listeEvenement[1] = element1;
var lastIdEv = 1;

function Evenement(id, nom, descriptif) {
    this.id = id;
    this.nom = nom;
    this.descriptif = descriptif;
    this.listeCreneau = {};
    this.listeReponses = {};
}

// créer un nouveau événement
var creerEvenement = function (nom, descriptif) {
	// s'il n'existe pas
    var id = lastIdEv+1;
    listeEvenement[id] = new Evenement(id, nom, descriptif);
    lastIdEv = lastIdEv+1;
    return listeEvenement[id];
}

// recupérer événement
var getEvenement = function (id) {
	// s'il n'existe pas
	if (typeof listeEvenement[id] === 'undefined') {
		return 0;
    }
    return listeEvenement[id];
};

//Liste des evenements
var getListe = function (){
    return listeEvenement;
};

//Nouvelle liste de créneaux
var setListeCreneaux = function(id, listeC) {
    listeEvenement[id].listeCreneau = listeC;
    return 0;
};

//Nouvelle liste de réponses
var setListeReponses = function(id, listeR) {
    listeEvenement[id].listeReponses = listeR;
    return 0;
}

exports.creerEvenement = creerEvenement;
exports.getEvenement = getEvenement;
exports.getListe = getListe;
exports.setListeCreneaux = setListeCreneaux;
exports.setListeReponses = setListeReponses;
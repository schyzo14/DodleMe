var listeProfil = require('./profil.js');

var listeEvenement = {};

var element1 = new Evenement(1, "unElement", "descriptif");
listeEvenement[1] = element1;
var lastIdEv = 1;

function Evenement(id, nom, descriptif, nomUtil) {
    this.id = id;
    this.nom = nom;
    this.descriptif = descriptif;
    this.nomUtil = nomUtil;
    this.listeCreneau = {};
    this.listeReponses = {};
}

// créer un nouveau événement
var creerEvenement = function (nom, descriptif, nomUtil) {
	// s'il n'existe pas
    var id = lastIdEv+1;
    listeEvenement[id] = new Evenement(id, nom, descriptif, nomUtil);
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

// Liste des evenements créés par un nom d'utilisateur
var getListeCrees = function(id) {
    var listeEvenementCrees = {};    
    var pas=1;
    var sizeRep = Object.keys(listeEvenement).length;
    // parcours des evenements
    while(pas<sizeRep+1) {
        // comme le nom et l'id sont pareil !
        // si c'est le même nom
        if(listeEvenement[pas].nomUtil !== 'undefined') {
            if(listeEvenement[pas].nomUtil === id){
                listeEvenementCrees[listeEvenement[pas].id] = listeEvenement[pas];
            }
        }

        pas++;
    }
    
    return listeEvenementCrees;
}

// EXPORTS
exports.creerEvenement = creerEvenement;
exports.getEvenement = getEvenement;
exports.getListe = getListe;
exports.setListeCreneaux = setListeCreneaux;
exports.setListeReponses = setListeReponses;
exports.getListeCrees = getListeCrees;
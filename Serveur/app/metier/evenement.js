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
var getListeCrees = function(nomUtil) {
    var listeEvenementCrees = {};    
    var pas=1;
    var sizeRep = Object.keys(listeEvenement).length;
    console.log("avant for");
    while(pas<sizeRep+1) {
        console.log("dans for");
        console.log(listeEvenement[pas].nomUtil + " --> " + nomUtil)
        if(listeEvenement[pas].nomUtil === nomUtil){
            listeEvenementCrees[listeEvenement[pas].id] = listeEvenement[pas];
            console.log("dans if");
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
var creneau = require("./creneau");
var listeEvenements = require("./evenement");

var listeReponses = {};
var lastid = 0;

//Constructeur des réponses
function Reponse(idR, idE) {
    //Id de la réponse
    this.id = lastid;
    //Liste créneaux
    this.listeCreneaux = new Array();
    //Evénement
    this.idEvenement = idE;
};

var ajouterReponse = function(c, idE) {
    var idR = lastid+1;
    lastid = lastid+1;

    //Liste de réponses
    listeReponses = listeEvenements.getEvenement(idE).listeReponses;
    listeReponses[idR] = new Reponse(idR, idE);
    listeReponses[idR].listeCreneaux.push(c);
    listeEvenements.getEvenement(idE).listeReponses = listeReponses;

    return listeReponses[idR];
};

var c = listeEvenements.getEvenement(1).listeCreneau[1];
var c2 = listeEvenements.getEvenement(1).listeCreneau[4];
var rep = ajouterReponse(c, 1);
rep.listeCreneaux.push(c2);

//Export
exports.ajouterReponse = ajouterReponse;
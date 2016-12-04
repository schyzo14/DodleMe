var creneau = require("./creneau");
var listeEvenements = require("./evenement");

var listeReponses = {};
var lastid = 0;

//Constructeur des réponses
function Reponse(idR, p, idE) {
    //Id de la réponse
    this.id = lastid;
    //Liste créneaux
    this.listeCreneaux = new Array();
    //Utilisateur
    this.pseudo = p;
    //Evénement
    this.idEvenement = idE;
};

var ajouterReponse = function(c, p, idE) {
    var idR = lastid+1;
    lastid = lastid+1;

    //Liste de réponses
    listeReponses = listeEvenements.getEvenement(idE).listeReponses;
    listeReponses[idR] = new Reponse(idR, p, idE);
    listeReponses[idR].listeCreneaux.push(c);
    listeEvenements.getEvenement(idE).listeReponses = listeReponses;

    return listeReponses[idR];
};

var getReponsesUser = function(p) {
    var listeRepUser = {};
    var sizeRep = Object.keys(listeReponses).length;
    var j = 0;
    for(i=1; i<=sizeRep; i++) {
        if(listeReponses[i].pseudo.localeCompare(p) == 0) {
            listeRepUser[j] = listeReponses[i];
            j++;
        }
    }
    return {'liste' : listeRepUser};
}

var c = listeEvenements.getEvenement(1).listeCreneau[1];
var c2 = listeEvenements.getEvenement(1).listeCreneau[4];
var rep = ajouterReponse(c, "schyzo", 1);
var rep = ajouterReponse(c2, "schyzo", 1);
rep.listeCreneaux.push(c2);

//Export
exports.ajouterReponse = ajouterReponse;
exports.getReponsesUser = getReponsesUser;
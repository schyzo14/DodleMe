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
    listeReponses[idR] = new Reponse(idR, p, idE);
    listeReponses[idR].listeCreneaux.push(c);

    return listeReponses[idR];
};

var getReponsesUser = function(p) {
    var listeRepUser = {};
    var sizeRep = Object.keys(listeReponses).length;
    var j = 0;
    for(i=1; i<=sizeRep; i++) {
        if(typeof listeReponses[i].pseudo !== 'undefined') {
			console.log(listeReponses[i].pseudo);
			if(listeReponses[i].pseudo.localeCompare(p) == 0) {
				listeRepUser[j] = listeReponses[i];
				j++;
			}
        }
    }
    return {'liste' : listeRepUser};
};

//Export
exports.ajouterReponse = ajouterReponse;
exports.getReponsesUser = getReponsesUser;
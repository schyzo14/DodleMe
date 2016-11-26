var listeReponses = {};
var lastid = 0;

//Constructeur des réponses
function Reponse(idEvent, creneau) {
    //Id de la réponse
    this.id = lastid;
    lastid++;
    //Evénement
    this.evenement = listeEvenement[idEvent];
    //Créneau
    this.evenement.listeCreneau.add(new Creneau());
};

var ajouterReponse = function(idEvent, creneau) {
    listeReponses[lastid] = new Reponse(idEvent, creneau);
    return 0;
};

var listeReponses = function() {
    return listeReponses;
};

var recupererReponse = function(id) {
    return listeReponses[id];
};

//Export
exports.ajouterReponse = ajouterReponse;
exports.listeReponses = listeReponses;
exports.recupererReponse = recupererReponse;
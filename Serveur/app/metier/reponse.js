var listeReponses = {};
var lastid = 0;

//Constructeur des réponses
function Reponse(evenement, creneaux) {
    //Id de la réponse
    this.id = lastid;
    lastid++;
    //Evénement
    this.evenement = evenement;
    //Créneaux
    this.creneaux = creneaux;
}

var ajouterReponse = function(evenement, creneaux) {
    listeReponses[lastid] = new Repone(evenement, creneaux);
    return 0;
}

var listeReponses = function() {
    return listeReponses;
}

var recupererReponse = function(id) {
    return listeReponses[id];
}

//Export
exports.ajouterReponse = ajouterReponse;
exports.listeReponses = listeReponses;
exports.recupererReponse = recupererReponse;
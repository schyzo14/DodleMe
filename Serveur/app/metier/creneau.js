var listeEvenement = require('../metier/evenement.js');

var lastId = 0;

// Constructeur pour les créneaux
function Creneau(id, heure, date, idE) {
    // id du créneau
    this.idCreneau = id;
    // heure du créneau
    this.heure = heure;
    // date du creneau
    this.date = date;
    // id de l'evenement
    this.idEvenement = idE;
};

// Ajouter un créneau
var ajouterCreneau = function(heure, date, idE) {
    var idC = lastId+1;
    lastId = lastId+1;
    
    // liste des creneaux de l'evenement
    var listeCreneau = {};
    listeCreneau = listeEvenement.getEvenement(idE).listeCreneau;
    listeCreneau[idC] = new Creneau(idC, heure, date, idE);
    listeEvenement.getEvenement(idE).listeCreneau = listeCreneau;
    return 1;
};

// fonctions exportés
exports.ajouterCreneau = ajouterCreneau;
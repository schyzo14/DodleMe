var listeEvenement = require('../metier/evenement.js');

var lastId = 0;

// Constructeur pour les créneaux
function Creneau(idP, heureP, dateP, idEP) {
    // id du créneau
    this.idCreneau = idP;
    // heure du créneau
    this.heure = heureP;
    // date du creneau
    this.date = dateP;
    // id de l'evenement
    this.idEvenement = idEP;
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
// Constructeur pour les créneaux
function Creneau(id, heure, date) {
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
var ajouterCreneau = function(idC, heure, date, idE) {
    // liste des creneaux de l'evenement
    var listeCreneau = {};
    listeCreneau = listeEvenement[idE].listeCreneau;
    // si le creneau n'existe pas
    if (typeof listeCreneau[idC] === 'undefined') {
        listeCreneau[idC] = new Creneau(idC, heure, date);
        listeEvenement[idE].listeCreneau = listeCreneau;
        return 1;
    }
    return 0;
};

// fonctions exportés
exports.ajouterCreneau = ajouterCreneau;
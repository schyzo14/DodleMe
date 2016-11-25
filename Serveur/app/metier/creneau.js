var listeCreneau = {};

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
}

// Ajouter un créneau
var ajouterCreneau = function(id, heure, date, idE) {
    // on le cree
    listeCreneau[id] = new Creneau(id, heure, date, idE);
    console.log(listeCreneau);
    return 1;
}

// fonctions exportés
export.ajouterCreneau = ajouterCreneau;
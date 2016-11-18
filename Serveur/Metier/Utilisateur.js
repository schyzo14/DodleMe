var listeUtilisateurs = {};

function Utilisateur(pseudo, nom, prenom) {
    this.pseudo = pseudo;
    this.nom = nom;
    this.prenom = prenom;
    this.mdp = generateMDP;
};

var inscription = function(id, pseudo, nom, prenom) {
    if(typeof listeUtilisateurs[id] === 'undefined') {
        listeUtilisateurs[id] = new Utilisateur(pseudo, nom, prenom);
        return 1;
    }
    return 0;
};

var generateMDP = function() {
    
};

//to export
exports.inscription = inscription;
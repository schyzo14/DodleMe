var listeProfil = {};
var unProfil = new Profil("nom", "prenom", "nomUtilTest");
listeProfil["nomUtilTest"] = unProfil;

function Profil(nom, prenom, nomUtil){
    this.id = nomUtil;
    this.nom = nom;
    this.prenom = prenom;
    this.nomUtil = nomUtil;
}

//Creer un nouveau profil
var creerProfil = function (nom, prenom, nomUtil){
    listeProfil[nomUtil] = new Profil(nom, prenom, nomUtil);
    return nomUtil;
}

//Récupérer un profil
var getProfil = function(id){
    if(typeof listeProfil[id] === 'undefined'){
        return {};
    }
    return listeProfil[id];
}

//Liste des profils
var getListeProfil = function(){
    return listeProfil;
}

exports.creerProfil = creerProfil;
exports.getProfil = getProfil;
exports.getListeProfil = getListeProfil;
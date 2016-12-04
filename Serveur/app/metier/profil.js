var listeProfil = {};
var unProfil = new Profil("nom", "prenom", "nomUtilTest");
listeProfil["nomUtilTest"] = unProfil;

function Profil(nom, prenom, nomUtil){
    this.id = nomUtil;
    this.nom = nom;
    this.prenom = prenom;
    this.nomUtil = nomUtil;
    //this.listeProfil = {};
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

//Récupérer un profil à partir de son nom
/*var getProfilNom = function(nom){
    var pas=0;
    var sizeRep = Object.keys(listeProfil).length;
    
    while(pas<sizeRep && typeof listeProfil[pas].nomUtil != nom)
        {
            if(listeProfil[pas].nomUtil === nom){
                return listeProfil[pas];
                pas=sizeRep;
            }
            pas++;
        }
}*/

//Liste des profils
var getListeProfil = function(){
    return listeProfil;
}

exports.creerProfil = creerProfil;
exports.getProfil = getProfil;
//exports.getProfilNom = getProfilNom;
exports.getListeProfil = getListeProfil;
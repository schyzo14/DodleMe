var listeProfil = {};
var lastIdProfil = 1;
var unProfil = new Profil(0, "nom", "prenom", "nomUtilTest");
listeProfil[0] = unProfil;

function Profil(id, nom, prenom, nomUtil){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.nomUtil = nomUtil;
    //this.listeProfil = {};
}

//Creer un nouveau profil
var creerProfil = function (nom, prenom, nomUtil){
    var id = lastIdProfil+1;
    listeProfil[id] = new Profil(id, nom, prenom, nomUtil);
    lastIdProfil=lastIdProfil+1;
    return id;
}

//Récupérer un profil
var getProfil = function(id){
    if(typeof listeProfil[id] === 'undefined'){
        return {};
    }
    return listeProfil[id];
}

//Récupérer un profil à partir de son nom
var getProfilNom = function(nom){
    var pas;
    console.log(nom);
    var sizeRep = Object.keys(listeProfil).length;
    console.log(sizeRep);
    for(pas=0;pas<sizeRep;pas++)
    {        
        console.log("boucle for");
        console.log(listeProfil[pas].nom);

        if(typeof listeProfil[pas].nom === 'undefined'){
            return {};
        }else{
            return listeProfil[pas];
        }
    } 
}

//Liste des profils
var getListeProfil = function(){
    return listeProfil;
}

exports.creerProfil = creerProfil;
exports.getProfil = getProfil;
exports.getProfilNom = getProfilNom;
exports.getListeProfil = getListeProfil;
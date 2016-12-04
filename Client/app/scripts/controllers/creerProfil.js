'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreerProfil
 * @description
 * # CreerProfil
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('CreerProfilCtrl', ['$location', '$scope', 'ProfilFactory', '$http', 'ConnexionFactory',
      function($location, $scope, ProfilFactory, $http, ConnexionFactory) {

    /** Bouton créer le profil **/

    $scope.data = {};

    $scope.creerProfil = function (form) {
        var nomUtil = $scope.data.nomUtil;
        var nom = $scope.data.nom;
        var prenom = $scope.data.prenom;

        var profil = new ProfilFactory({
            nomUtil : nomUtil,
            nom: nom,
            prenom : prenom
        });
        profil.$save(function success(data){
            alert("Profil créé");
            
            ConnexionFactory.setUser(data);
            /** redirection page du profil **/
            $location.path('/profilUtilisateur/'+nomUtil);

        }, function error(){
            alert("Echec lors de la création du profil !");
        })

    }


}]);

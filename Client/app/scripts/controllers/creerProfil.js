'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreerProfil
 * @description
 * # CreerProfil
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('CreerProfilCtrl', ['$location', '$scope', 'ProfilFactory', function($location, $scope, ProfilFactory) {
    
    /** Bouton créer le profil **/
      
    $scope.data = {};
      
    $scope.creerProfil = function (form) {
        var nomUtil = $scope.data.nomUtil;
        var nom = $scope.data.nom;
        var prenom = $scope.data.prenom;
        
        alert(nomUtil);
    
    }
        
    
}]);
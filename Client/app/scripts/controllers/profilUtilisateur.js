'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:profilUtilisateurCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('profilUtilisateurCtrl', ['$scope', '$routeParams', 'ProfilFactory', function ($scope, $routeParams, ProfilFactory) {

      $scope.data = {};
      
      /** Profil connecté **/
      $scope.data.idP = $routeParams.id;
      var nomUtil = $routeParams.id;
      
      
      /** Récupération éléments profils**/
      //GEt
      ProfilFactory.get({'nomUtil' : nomUtil}).$promise.then(function(data) {
            $scope.nomUtil = data.nomUtil;
            $scope.nom = data.nom;
            $scope.prenom = data.prenom;
    
            
      });
      
      
      /** Les événements créés par le profil **/
      $scope.data.nbEvCrees = 9;
      
      /** Les événements auxquels participent le profil **/
      $scope.data.nbEvParticipes = 10;
 
  }]);
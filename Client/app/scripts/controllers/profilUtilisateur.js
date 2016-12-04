'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:profilUtilisateurCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('profilUtilisateurCtrl', ['$scope', '$routeParams', 'ProfilFactory', 'EventsCreesFactory', function ($scope, $routeParams, ProfilFactory, EventsCreesFactory) {

      $scope.data = {};
      
      /** Profil connecté **/
      $scope.data.idP = $routeParams.id;
      var nomUtil = $routeParams.id;
      alert("idP : "+nomUtil);
      
      /** Récupération éléments profils**/
      //GEt
      ProfilFactory.get({'nomUtil' : nomUtil}).$promise.then(function(data) {
            $scope.nomUtil = data.nomUtil;
            $scope.nom = data.nom;
            $scope.prenom = data.prenom;
    
            
      });
      
  }]);
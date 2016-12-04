'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:profilUtilisateurCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('profilUtilisateurCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

      $scope.data = {};
      
      /** Profil connecté **/
      $scope.data.idP = $routeParams.id;
      var nomUtil = $routeParams.id;
      alert("idP : "+nomUtil);
      
      /** Récupération éléments profils**/
      
      /** Les événements créés par le profil **/
      $scope.data.nbEvCrees = 9;
      
      /** Les événements auxquels participent le profil **/
      $scope.data.nbEvParticipes = 10;
 
  }]);
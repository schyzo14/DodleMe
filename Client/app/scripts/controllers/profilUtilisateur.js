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
      
      
      /** Les événements créés par le profil **/
      $scope.data.nbEvCrees = 9;
      
      /** Les événements auxquels participent le profil **/
      $scope.data.nbEvParticipes = 10;
 
  }]);
'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SeConnecterCtrl
 * @description
 * # SeConnecterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SeDeconnecterCtrl', ['$location', '$scope', '$cookies', 'Connexion',
    function ($location, $scope, $cookies, Connexion) {
      $cookies.remove('idP');
      Connexion.setUser(null);
      $location.path('/');
    }]);

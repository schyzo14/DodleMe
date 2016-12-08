'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MenuCtrl', ['$scope', '$location', '$cookies', 'Connexion',
      function ($scope, $location, $cookies, Connexion) {
    $scope.user = Connexion;
  }]);

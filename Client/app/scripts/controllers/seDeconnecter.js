'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SeConnecterCtrl
 * @description
 * # SeConnecterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SeDeconnecterCtrl', ['$location', '$scope', '$cookies',
    function ($location, $scope, $cookies) {
      $cookies.remove('idP');
      $location.path('/');
    }]);

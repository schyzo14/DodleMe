'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailEvenementsCtrl
 * @description
 * # DetailEvenementsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DetailEvenementsCtrl', ['$scope', 'DetailEventsFactory', '$location', function ($scope, DetailEventsFactory) {
    $scope.reponses = DetailEventsFactory.get();
  }]);

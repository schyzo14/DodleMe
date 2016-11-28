'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailEvenementsCtrl
 * @description
 * # DetailEvenementsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreerEvenementCtrl', ['$scope', 'CreerEventFactory', '$location', function ($scope, CreerEventFactory) {
    CreerEventFactory.post();
  }]);

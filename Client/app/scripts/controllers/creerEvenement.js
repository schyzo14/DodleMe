'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreerEvenementCtrl
 * @description
 * # CreerEvenementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreerEvenementCtrl', ['$scope', 'eventFactory', '$location', function ($scope, eventFactory) {
    //eventFactory.post();
      
    $scope.data = {};
      
    $scope.creerEvenementF = function (form) {
        
        var formV = angular.copy(form);
        alert($scope.data.nom +" - " + $scope.data.descriptif + " - " + $scope.data.date);
        
    };
      
}]);

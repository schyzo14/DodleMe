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
      
    $scope.creerEvenementF = function (form) {
        alert("form : "+form);
        
        if (form.$valid) {
            // Copier l'instance du flux 
            var form = angular.copy(form);
            
            
        }
    };
      
}]);

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
    
 $scope.dateController = function () {
     alert("bla !")
    $scope.myDate = new Date();
    $scope.minDate = new Date(
       $scope.myDate.getFullYear(),
       $scope.myDate.getMonth() - 2,
       $scope.myDate.getDate());
    $scope.maxDate = new Date(
       $scope.myDate.getFullYear(),
       $scope.myDate.getMonth() + 2,
       $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
       var day = date.getDay();
       return day === 0 || day === 6;
    }
 }; 
      
}]);

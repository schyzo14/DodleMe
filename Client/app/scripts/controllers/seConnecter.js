'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SeConnecterCtrl
 * @description
 * # SeConnecterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('SeConnecterCtrl', ['$location', '$scope', 'profilfactory', function ($location, $scope, profilfactory) {
      
    $scope.data = {};
      
    $scope.seConnecterF = function (form) {
        var nomUtil = $scope.data.nomUtil;
        
        alert(nomUtil);
    
    }
}
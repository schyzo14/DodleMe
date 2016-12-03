'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SeConnecterCtrl
 * @description
 * # SeConnecterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('SeConnecterCtrl', ['$location', '$scope', 'ProfilFactory', function ($location, $scope, ProfilFactory) {

        
    $scope.data = {};

      
    $scope.seConnecterF = function (form) {
        var nomUtil = $scope.data.nomUtil;
        alert(nomUtil);
        
        
        //GEt
        ProfilFactory.get({'nomUtil' : nomUtil}).$promise.then(function(data) {
        $scope.nomUtil = data;
        console.log(data);
      });
        
    }
}]);
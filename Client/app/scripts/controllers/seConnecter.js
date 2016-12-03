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
        
        
        //ProfilFactory.get({ nomUtil:nomUtil })
        // Get Booking ID 1
        var pro = ProfilFactory.get({},{'nomUtil': nomUtil});
        alert(pro);
        
    }
}]);
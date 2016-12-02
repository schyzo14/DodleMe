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
        
        var profil1 = new ProfilFactory({
            id: idP,
            heure: creneau1,
            date: date
        });
        
        /*ProfilFactory.get({ nomUtil:nomUtil }).$promise.then(function(data) {
			//$scope.idCompteRes = data.somme;
		});*/
        
        
    }
}]);
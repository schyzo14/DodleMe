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
        
        //GEt
        ProfilFactory.get({'nomUtil' : nomUtil}).$promise.then(function(data) {
            $scope.nomUtil = data.nomUtil;
            var idP = data.id;
            
            /** redirection page du profil **/
            $location.path('/profilUtilisateur/'+idP);
            
        }).catch(function() {
	       alert("Le profil "+nomUtil+" n'existe pas.");
	   });
            
        
    }
}]);
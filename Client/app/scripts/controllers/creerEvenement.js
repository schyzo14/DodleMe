'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreerEvenementCtrl
 * @description
 * # CreerEvenementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreerEvenementCtrl', ['$location', '$scope', 'eventFactory', '$http', function ($location, $scope, eventFactory, $http) {
    //eventFactory.post();
      
    $scope.data = {};
      
    $scope.creerEvenementF = function (form) {
        
        var formV = angular.copy(form);
        
        /* Créer l'évènement */
        $http({
             method: 'POST',
             url: 'http://localhost:8080/evenement/',
             headers: {
               'Content-Type': 'application/json'
             },
             data: { 
                   nom: $scope.data.nom,
                   descriptif: $scope.data.descriptif}
            }).
            success(function(data, status){
                alert("OK");
            
                var idE = data;
                var dateTime = $scope.data.date;
                var date = dateTime.substring(0, 10);
                var heure = dateTime.substring(11, 16);
            
                /* Ajouter les jalons */
                $http({
                     method: 'POST',
                     url: 'http://localhost:8080/creneau/'+idE,
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     data: { 
                           heure: heure,
                           date: date
                    }}).
                    success(function(data, status){
                        alert("OK : "+data + " - "+ status);
                    }).
                    error(function(data, status){
                        alert("Echec : "+data + " - "+ status);
                    });

            }).
            error(function(data, status){
                alert("Echec : "+data + " - "+ status);
            });
        
        
    };
      
}]);

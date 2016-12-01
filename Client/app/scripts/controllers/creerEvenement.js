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
      
    /** Calendrier **/
      
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    
    /** Mettre la date dans le tableau **/
    
    $scope.listDates = new Array();
    var cpt=0;
      
    $scope.$watch('dt',function()
    {     
        /** Pas le jour présélectionné **/
        if (cpt != 0) {
            /** Pas de duplication des dates **/
            var sorted_listDates = $scope.listDates.slice().sort();
            var trouve = new Boolean(false);
            alert("taille : "+ $scope.listDates.length);
            for (var i = 0; i < $scope.listDates.length; i++) {
                alert(sorted_listDates[i].toString().trim() + " - " + $scope.dt.toLocaleDateString('fr-FR').toString().trim());
                if (sorted_listDates[i] == $scope.dt.toLocaleDateString('fr-FR')) {
                    trouve = true;
                }
            }
            /** Si pas de duplication, on ajoute la date **/
            if (trouve !== true) {
                $scope.listDates.push($scope.dt.toLocaleDateString('fr-FR'));
            } 
        }
        cpt = cpt+1;
    });
    
    
    /** Bouton créer l'évènement **/
      
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

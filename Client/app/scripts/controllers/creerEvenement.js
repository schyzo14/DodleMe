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
            for (var i = 0; i < $scope.listDates.length; i++) {
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
                alert("OK création évènement");
                
                var idE = data;
            
                var arrayLignes = document.getElementById("tableDate").rows;
                var longueur = arrayLignes.length;
                for(var i=0; i<longueur; i++) {
                    var arrayColonnes = arrayLignes[i].cells;
                    var date = arrayColonnes[0].innerHTML;
                    var creneau1 = arrayColonnes[1].children[0].options[arrayColonnes[1].children[0].selectedIndex].value;
                    var creneau2 = arrayColonnes[2].children[0].options[arrayColonnes[2].children[0].selectedIndex].value;
                    var creneau3 = arrayColonnes[3].children[0].options[arrayColonnes[3].children[0].selectedIndex].value;
                    if (creneau1 !== "Pas de créneau choisi") {
                        alert(date + " - "+ creneau1);
                        /** ajouter creneau 1 **/
                        $http({
                             method: 'POST',
                             url: 'http://localhost:8080/creneau/'+idE,
                             headers: {
                               'Content-Type': 'application/json'
                             },
                             data: { 
                                   heure: creneau1,
                                   date: date
                            }}).
                            success(function(data, status){
                                alert("OK créneau : "+data + " - "+ status);
                            }).
                            error(function(data, status){
                                alert("Echec : "+data + " - "+ status);
                            });

                    }
                    if (creneau2 !== "Pas de créneau choisi") {
                        alert(date + " - "+ creneau2);
                        /** ajouter creneau 2 **/
                        $http({
                             method: 'POST',
                             url: 'http://localhost:8080/creneau/'+idE,
                             headers: {
                               'Content-Type': 'application/json'
                             },
                             data: { 
                                   heure: creneau2,
                                   date: date
                            }}).
                            success(function(data, status){
                                alert("OK créneau : "+data + " - "+ status);
                            }).
                            error(function(data, status){
                                alert("Echec : "+data + " - "+ status);
                            });
                    }
                    if (creneau3 !== "Pas de créneau choisi") {
                        alert(date + " - "+ creneau3);
                        /** ajouter creneau 3 **/
                        $http({
                             method: 'POST',
                             url: 'http://localhost:8080/creneau/'+idE,
                             headers: {
                               'Content-Type': 'application/json'
                             },
                             data: { 
                                   heure: creneau3,
                                   date: date
                            }}).
                            success(function(data, status){
                                alert("OK créneau : "+data + " - "+ status);
                            }).
                            error(function(data, status){
                                alert("Echec : "+data + " - "+ status);
                            });
                    }
                }
            }).
            error(function(data, status){
                alert("Echec : "+data + " - "+ status);
            });
    };
      
}]);

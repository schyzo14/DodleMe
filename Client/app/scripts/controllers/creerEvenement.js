'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CreerEvenementCtrl
 * @description
 * # CreerEvenementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CreerEvenementCtrl', ['$location', '$scope', 'eventFactory', 'creneauFactory', function ($location, $scope, eventFactory, creneauFactory) {
    
    /** Calendrier : Date du jour **/
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();
    
      
    /** Mettre la date sur laquelle on a cliquée dans le tableau **/
    
    $scope.listDates = [];
    var cpt=0;
      
    $scope.$watch('dt',function()
    {     
        /** Pas le jour présélectionné (aujourd'hui) **/
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
        
        /** Test si tous les champs sont complétés */
        if (form.$valid) {
            
            /** Test si il y a une date **/
            if ($scope.listDates.length === 0) {
                alert("Merci de choisir une date avec un créneau")
            } else {
                
                /** Test si un créneau est sélectionné **/
                var arrayLignes = document.getElementById("tableDate").rows;
                var longueur = arrayLignes.length;
                var taille = 0;
                for(var i=0; i<longueur; i++) {
                    var arrayColonnes = arrayLignes[i].cells;
                    var creneau1 = arrayColonnes[1].children[0].options[arrayColonnes[1].children[0].selectedIndex].value;
                    var creneau2 = arrayColonnes[2].children[0].options[arrayColonnes[2].children[0].selectedIndex].value;
                    var creneau3 = arrayColonnes[3].children[0].options[arrayColonnes[3].children[0].selectedIndex].value;
                    if (creneau1 !== "Pas de créneau choisi" || creneau2 !== "Pas de créneau choisi" || creneau3 !== "Pas de créneau choisi") {
                        taille = taille +1;
                    }
                }
                if (taille === 0) {
                    alert ("Merci de mettre au moins un créneau !");
                } else {
                    
                    /** on fait une factory avec les paramètres **/
                    var event = new eventFactory({
                        nom : $scope.data.nom,
                        descriptif: $scope.data.descriptif
                    });
                    /** on fait un post pour créer l'évènement **/
                    event.$save(function success(data){
                        evCree(data.id);
                    }, function error(){
                        alert("Echec lors de la création de l'évènement !");
                    });
                    
                    /** L'évènement a été créé donc on ajoute les créneaux **/
                    var evCree = function(data){
                        alert("L'évènement a été créé !");

                        var idE = data;

                        var arrayLignes = document.getElementById("tableDate").rows;
                        var longueur = arrayLignes.length;
                        /* Parcours des lignes du tableau */
                        for(var i=0; i<longueur; i++) {
                            var arrayColonnes = arrayLignes[i].cells;
                            var date = arrayColonnes[0].innerHTML;
                            var creneau1 = arrayColonnes[1].children[0].options[arrayColonnes[1].children[0].selectedIndex].value;
                            var creneau2 = arrayColonnes[2].children[0].options[arrayColonnes[2].children[0].selectedIndex].value;
                            var creneau3 = arrayColonnes[3].children[0].options[arrayColonnes[3].children[0].selectedIndex].value;
                            if (creneau1 !== "Pas de créneau choisi") {
                                /** ajouter creneau 1 **/
                                /** on fait une factory avec les paramètres **/
                                var cren1 = new creneauFactory({
                                    id: idE,
                                    heure: creneau1,
                                    date: date
                                });
                                /** on fait un post pour créer le créneau **/
                                cren1.$save(function success(data){
                                }, function error(){
                                    alert(status + " - Echec lors de la création du créneau : " + date + " - " + creneau1);
                                });

                            }
                            if (creneau2 !== "Pas de créneau choisi") {
                                /** ajouter creneau 2 **/
                                /** on fait une factory avec les paramètres **/
                                var cren2 = new creneauFactory({
                                    id: idE,
                                    heure: creneau2,
                                    date: date
                                });
                                /** on fait un post pour créer le créneau **/
                                cren2.$save(function success(data){
                                }, function error(){
                                    alert(status + " - Echec lors de la création du créneau : " + date + " - " + creneau2);
                                });
                            }
                            if (creneau3 !== "Pas de créneau choisi") {
                                /** ajouter creneau 3 **/
                                /** on fait une factory avec les paramètres **/
                                var cren3 = new creneauFactory({
                                    id: idE,
                                    heure: creneau3,
                                    date: date
                                });
                                /** on fait un post pour créer le créneau **/
                                cren3.$save(function success(data){
                                }, function error(){
                                    alert(status + " - Echec lors de la création du créneau : " + date + " - " + creneau3);
                                });
                            }
                        }
                        
                        /** redirection page de détail **/
                        $location.path('/detailEvenements/'+idE);
                    }
                }
            }
            
        } else {
            alert ("Merci de compléter le nom et la description !");
        }
    };
      
}]);
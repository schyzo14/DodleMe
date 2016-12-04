'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailEvenementsCtrl
 * @description
 * # DetailEvenementsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DetailEvenementsCtrl', ['$location', '$routeParams', '$scope', 'ReponsesFactory', 'eventFactory', 'creneauFactory',
    function ($location, $routeParams, $scope, ReponsesFactory, eventFactory, creneauFactory) {

      //Remplissage du tableau
      var idEvent = $routeParams.idEvent;
      var sizeRep = 0;
      eventFactory.get({'idEvent' : idEvent}).$promise.then(function(data) {
        $scope.evenement = data;
        $scope.evenement.listeCreneau = data.listeCreneau;
        $scope.creneauxSpan = creneauxDate();
        $scope.evenement.listeReponses = data.listeReponses;
        sizeRep = Object.keys($scope.evenement.listeReponses).length;
      });

      //Mise en place du colspan
      var creneauxDate = function() {
        var output = new Array();
        angular.forEach($scope.evenement.listeCreneau, function(col) {
          if (output.length == 0 || output[output.length-1].date.localeCompare(col.date) != 0) {
            output.push({
              date:col.date,
              span:1
            });
          } else {
            output[output.length-1].span++;
          }
        });
        return output;
      };

      //Mise en place des cases à cocher précochées
      $scope.checkCreneau = function(reponse, creneau) {
        var retour = false;
        angular.forEach(reponse.listeCreneaux, function(cr) {
          if(cr.idCreneau == creneau.idCreneau) {
            retour = true;
            return;
          }
        });
        return retour;
      };

      $scope.ajouterCreneau = function() {
        var size = Object.keys($scope.evenement.listeCreneau).length;
        $scope.evenement.listeCreneau[size+1] = {
          idCreneau : size+1,
          date : $scope.myDate,
          heure : $scope.myCreneau,
          idEvenement : $scope.evenement.id
        };
        $scope.creneauxSpan = creneauxDate();
      };

      $scope.validerReponse = function() {
        //Ajout des réponses à l'événement
        $scope.evenement.listeReponses[sizeRep+1] = {
          id : sizeRep+1,
          pseudo : $scope.newUser,
          listeCreneaux : listeCreneauxReponse,
          idEvenement : $scope.evenement.id
        };

        console.log($scope.evenement);
        //Enregistrement de l'événement
        $scope.evenement.$update(function() {
          $location.path('/');
        });
      };

      var listeCreneauxReponse = [];
      var i = 0;
      $scope.changeReponse = function(rep, etat) {
        if(etat == true) {
          listeCreneauxReponse[i] = rep.creneau;
          i++;
        } else {
          listeCreneauxReponse.splice(i);
          i--;
        }
      };
  }]);

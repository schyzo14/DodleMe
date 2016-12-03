'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailEvenementsCtrl
 * @description
 * # DetailEvenementsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DetailEvenementsCtrl', ['$location', '$routeParams', '$scope', 'ReponsesFactory', 'eventFactory',
    function ($location, $routeParams, $scope, ReponsesFactory, eventFactory) {

      var idEvent = $routeParams.idEvent;
      var c = {};
      eventFactory.get({'idEvent' : idEvent}).$promise.then(function(data) {
        c = data.listeCreneau;
        $scope.evenement = data;
        $scope.creneaux = data.listeCreneau;
        $scope.creneauxSpan = creneauxDate();
        $scope.reponses = data.listeReponses;
        console.log(data);
      });

      var creneauxDate = function() {
        var output = new Array();
        angular.forEach(c, function(col) {
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

      $scope.checkCreneau = function(reponse, creneau) {
        var retour = false;
        angular.forEach(reponse.listeCreneaux, function(cr) {
          if(cr.idCreneau == creneau.idCreneau) {
            retour = true;
            return;
          }
        })
        return retour;
      };

      var validerReponse = function() {

      }
  }]);

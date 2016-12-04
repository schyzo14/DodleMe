'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EvenementsRepondusCtrl
 * @description
 * # EvenementsRepondusCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EvenementsRepondusCtrl', ['$scope', '$routeParams', 'ReponsesFactory', 'eventFactory',
      function ($scope, $routeParams, ReponsesFactory, eventFactory) {
    var idU = $routeParams.idU;
    var evenements = [];
    var reponses = {};
    ReponsesFactory.get({'idU' : idU}).$promise.then(function(data) {
      angular.forEach(data.liste, function(rep) {
        eventFactory.get({'idEvent' : rep.idEvenement}).$promise.then(function(dataEvent) {
          if(!evenements[dataEvent.id-1]) {
            evenements[dataEvent.id-1] = dataEvent;
          }
        });
      });
      $scope.evenements = evenements;
    });
  }]);

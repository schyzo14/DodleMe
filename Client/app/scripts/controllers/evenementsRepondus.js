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
			if(evenements.length > 0) {
				for(var i = 0; i < evenements.length; i++) {
					if(evenements[i].id != dataEvent.id) {
						evenements.push(dataEvent);
					}
				}
			} else {
				evenements.push(dataEvent);
			}
        });
      });
      $scope.evenements = evenements;
    });
  }]);

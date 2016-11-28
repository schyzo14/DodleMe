'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
<<<<<<< HEAD
  .controller('MainCtrl', ['$scope', 'EventsFactory', '$location', function ($scope, EventsFactory) {
    EventsFactory.get().$promise.then(function(data) {
      $scope.evenements = data;
    });

    $scope.detail = function(idE) {

    }
  }]);
=======
  .controller('MainCtrl', ['$scope', 'eventsfactory', '$location', function ($scope, eventsfactory) {

    $('#main').addClass('active');
	
	eventsfactory.get().$promise.then(function(data) {
		$scope.evenement = data;
	});
  });
>>>>>>> 4fdc6325983cc8a2e744526b1352b48477c4c225

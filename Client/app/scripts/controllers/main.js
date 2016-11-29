'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['$scope', 'EventsFactory', '$location', function ($scope, EventsFactory) {

    $('#main').addClass('active');
	
	EventsFactory.get().$promise.then(function(data) {
		$scope.evenements = data;
	});
  }]);
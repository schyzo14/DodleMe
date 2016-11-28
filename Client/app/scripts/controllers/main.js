'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['$scope', 'eventsfactory', '$location', function ($scope, eventsfactory) {

    $('#main').addClass('active');
	
	eventsfactory.get().$promise.then(function(data) {
		$scope.evenement = data;
	});
  }]);
'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['$scope', 'MyFactoryEvenement', '$location', function ($scope, MyFactoryEvenement) {

    $('#main').addClass('active');
	
	MyFactoryEvenement.get().$promise.then(function(data) {
		$scope.evenement = data;
	});
  });

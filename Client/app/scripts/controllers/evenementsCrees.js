'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('evenementsCreesCtrl', ['$scope', 'EventsCreesFactory', '$location', '$routeParams', function ($scope, EventsCreesFactory, $location, $routeParams) {

      $scope.data = {};
      $scope.data.id = $routeParams.id;

      
        EventsCreesFactory.get({'id' : $scope.data.id}).$promise.then(function(data) {
            $scope.evenements = data;
      });

  }]);
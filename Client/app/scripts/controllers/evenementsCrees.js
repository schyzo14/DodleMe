'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('evenementsCreesCtrl', ['$scope', 'EventsCreesFactory', '$location', function ($scope, EventsCreesFactory, $location) {

      $scope.data = {};
      $scope.data.nomUtil = "momo";

      
        EventsCreesFactory.get({'nomUtil' : $scope.data.nomUtil}).$promise.then(function(data) {
            $scope.evenements = data;
      });

  }]);
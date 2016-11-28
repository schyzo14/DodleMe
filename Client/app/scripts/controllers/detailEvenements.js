'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailEvenementsCtrl
 * @description
 * # DetailEvenementsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DetailEvenementsCtrl', ['$location', '$scope', 'ReponsesFactory', function ($location, $scope, ReponsesFactory) {
    //$scope.reponses = DetailEventsFactory.get();
    var id = $location.search().idE;
    alert(id);
  }]);

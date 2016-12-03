'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:profilUtilisateurCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('profilUtilisateurCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.$on('$beforeRouteChange', function(scope, newRoute){
        if (!newRoute) return;
        //Load any required resources here
        console.log("Do conditional loading here");
        //Set the state bound do the ng-include src attribute
        $rootScope.templates = newRoute.$route.templates;        
    });
 
  }]);
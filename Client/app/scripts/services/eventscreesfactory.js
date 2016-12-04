'use strict';

/**
 * @ngdoc service
 * @name clientApp.EventsFactory
 * @description
 * # EventsFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('EventsCreesFactory', function ($resource) {
	return $resource('http://localhost:8080/evenements/crees/:nomUtil', {
         nomUtil: '@nomUtil' 
    });
  })

'use strict';

/**
 * @ngdoc service
 * @name clientApp.EventsFactory
 * @description
 * # EventsFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('EventsFactory', function ($resource) {
	return $resource('http://localhost:8080/evenements/', {
        
    })
  });

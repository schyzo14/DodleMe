'use strict';

/**
 * @ngdoc service
 * @name clientApp.DetailEventsFactory
 * @description
 * # DetailEventsFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('DetailEventsFactory', function ($resource) {
    return $resource('http://localhost:8080/reponses/', {
        
    })
  });

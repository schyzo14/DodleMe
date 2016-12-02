'use strict';

/**
 * @ngdoc service
 * @name clientApp.CreerEventFactory
 * @description
 * # CreerEventFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('creneauFactory', function ( $resource) {
    return $resource('http://localhost:8080/creneau/:id', {
         id: '@id' 
    })
  })
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
<<<<<<< HEAD
    return $resource('http://localhost:8080/listeEvenements/', {

=======
    return $resource('http://localhost:8080/evenements/', {
        
>>>>>>> 4fdc6325983cc8a2e744526b1352b48477c4c225
    })
  });

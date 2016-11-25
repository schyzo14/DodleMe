'use strict';

/**
 * @ngdoc service
 * @name clientApp.EventsFactory
 * @description
 * # EventsFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('EventsFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

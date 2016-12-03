'use strict';

/**
 * @ngdoc service
 * @name clientApp.ConnexionFactory
 * @description
 * # ConnexionFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('ConnexionFactory', function () {
    var user;

    return {
      setUser: function(aUser) {
        user = aUser;
      },
      isLoggedIn: function() {
        return (user)? user : false;
      }
    }
  });

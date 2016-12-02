'use strict';

/**
 * @ngdoc service
 * @name clientApp.ProfilFactory
 * @description
 * # ProfilFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('ProfilFactory', function ($resource) {
    var urlBase = 'http://localhost:8080/profil/';
    var ProfilFactory = {};
    
    ProfilFactory.getJSON = function () {
        return $ressource(urlBase);
    };
    
	/*return $resource('http://localhost:8080/profil/', null, {
        
        
    })*/
  });
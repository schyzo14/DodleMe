'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MenuCtrl', ['$scope', 'ConnexionFactory', function ($scope, ConnexionFactory) {
    $scope.items = [
      {"name":"Inscription", "lien":"creerProfil", "needAuthentication":false},
      {"name":"Connexion", "lien":"seConnecter", "needAuthentication":false},
      {"name":"Profil", "lien":"profilUtilisateur", "needAuthentication":true}
    ];

    $scope.condition = function(item) {
      return (item.needAuthentication == false && !ConnexionFactory.isLoggedIn()) ||
        (item.needAuthentication == true && ConnexionFactory.isLoggedIn());
    };
  }]);

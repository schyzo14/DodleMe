'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MenuCtrl', ['$scope', '$cookies', function ($scope, $cookies) {
    var lienReponses = "evenementsRepondus/"+$cookies.get('idP');
    var lienEvents = "evenementsCrees/"+$cookies.get('idP');
    var lienProfil = "profilUtilisateur/"+$cookies.get('idP');
    $scope.items = [
      {"name":"Inscription", "lien":"creerProfil", "span":"glyphicon glyphicon-user", "needAuthentication":false},
      {"name":"Connexion", "lien":"seConnecter", "span":"glyphicon glyphicon-log-in", "needAuthentication":false},
      {"name":"Créer un événement", "lien":"creerEvenement", "span":"glyphicon glyphicon-user", "needAuthentication":true},
      {"name":"Mes réponses", "lien":lienReponses, "span":"glyphicon glyphicon-user", "needAuthentication":true},
      {"name":"Mes événements", "lien":lienEvents, "span":"glyphicon glyphicon-user", "needAuthentication":true},
      {"name":"Profil", "lien":lienProfil, "span":"glyphicon glyphicon-user", "needAuthentication":true},
      {"name":"Deconnexion", "lien":"seDeconnecter", "span":"glyphicon glyphicon-log-in", "needAuthentication":true}
    ];

    $scope.condition = function(item) {
      return (item.needAuthentication == false && ($cookies.get('idP') == null)) ||
        (item.needAuthentication == true && ($cookies.get('idP') != null));
    };
  }]);

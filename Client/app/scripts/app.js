'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/creerEvenement', {
        templateUrl: 'views/creerEvenement.html',
        controller: 'CreerEvenementCtrl',
        controllerAs: 'creerEvenement'
      })
      .when('/detailEvenements/:idEvent', {
        templateUrl: 'views/detailEvenements.html',
        controller: 'DetailEvenementsCtrl',
        controllerAs: 'detailEvenements'
      })
      .when('/creerProfil', {
        templateUrl: 'views/creerProfil.html',
        controller: 'CreerProfilCtrl',
        controllerAs: 'creerProfil'
      })
      .when('/seConnecter', {
        templateUrl: 'views/seConnecter.html',
        controller: 'SeConnecterCtrl',
        controllerAs: 'seConnecter'
      })
      .when('/profilUtilisateur/:id', {
        templateUrl: 'views/profilUtilisateur.html',
        controller: 'profilUtilisateurCtrl',
        controllerAs: 'profilUtilisateur',
        /*access: {
          isFreeAccess: false
        }*/
      })
      .when('/evenementsCrees/:id', {
        templateUrl: 'views/evenementsCrees.html',
        controller: 'evenementsCreesCtrl',
        controllerAs: 'evenementsCrees'
      })
      .when('/evenementsRepondus/:idU', {
        templateUrl: 'views/evenementsRepondus.html',
        controller: 'EvenementsRepondusCtrl',
        controllerAs: 'EvenementsRepondus'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .run(function ($rootScope, $location, ConnexionFactory) {
    $rootScope.$on('$routeChangeStart', function (currRoute, prevRoute) {
      if (prevRoute.access != undefined) {
        // if route requires auth and user is not logged in
        if (!prevRoute.access.isFreeAccess && !ConnexionFactory.isLogged) {
          // redirects to index
          $location.path('/');
        }
      }
    })
  });

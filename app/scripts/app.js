'use strict';

/**
 * @ngdoc overview
 * @name teamderApp
 * @description
 * # teamderApp
 *
 * Main module of the application.
 */
 
angular
  .module('teamderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/profil', {
        templateUrl: 'app/views/profil.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projets', {
        templateUrl: 'app/views/projets.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/equipes', {
        templateUrl: 'app/views/equipes.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

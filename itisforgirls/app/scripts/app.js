'use strict';

/**
 * @ngdoc overview
 * @name gccdApp
 * @description
 * # gccdApp
 *
 * Main module of the application.
 */
angular
  .module('itisforgirls', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/registration', {
          templateUrl: 'views/registration.html',
          controller : 'RegistrationCtrl'
        })
        .when('/admin_login', {
          templateUrl: 'views/admin_login.html',
          controller : 'AdminLoginCtrl'
        })
         .when('/vote/:email/:eventid', {
          templateUrl: 'views/vote.html',
          controller : 'VoteCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

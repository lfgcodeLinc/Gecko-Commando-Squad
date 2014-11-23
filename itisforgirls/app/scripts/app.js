'use strict';

/**
 * @ngdoc overview
 * @name itisforgirls
 * @description
 * # itisforgirls
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
        .when('/admin_home', {
          templateUrl: 'views/admin_home.html',
          controller : 'AdminHomeCtrl'
        })
        .when('/create_event', {
          templateUrl: 'views/create_event.html',
          controller : 'CreateEventCtrl'
        })
        .when('/reports', {
          templateUrl: 'views/reports.html',
          controller : 'ReportsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

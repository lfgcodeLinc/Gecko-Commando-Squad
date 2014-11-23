'use strict';

/**
 * @ngdoc function
 * @name codelincTestApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the codelincTestApp
 */
var adminControllers = angular.module('codelincTestApp');
  adminControllers.controller('AdminLoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.submitForm = function() {
        console.log("posting data....");
        formData = $scope.form;
        //console.log(formData);
    };
/*
    $scope.getClass = function(path) {
 if (path == "/" && $location.path() == "/") { return "active"; } else if (path == "/") { return ""; } return "active" } else { return "" } }*/
  });
  adminControllers.controller('AdminHomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    });
  adminControllers.controller('AdminEventCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.create = function(){}
    });

'use strict';

/**
 * @ngdoc function
 * @name codelincTestApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the codelincTestApp
 */
angular.module('codelincTestApp')
  .controller('AdminLoginCtrl', function ($scope) {
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

    $scope.getClass = function(path) {
 if (path == "/" && $location.path() == "/") { return "active"; } else if (path == "/") { return ""; } return "active" } else { return "" } }
  });

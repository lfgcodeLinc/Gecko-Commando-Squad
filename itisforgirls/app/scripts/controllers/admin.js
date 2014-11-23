'use strict';

/**
 * @ngdoc function
 * @name codelincTestApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the codelincTestApp
 */
var adminControllers = angular.module('itisforgirls');
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
  adminControllers.controller('EventCreateCtrl', function ($scope) {
$scope.choices =[{id: 'choice1',name:'Android'}, {id: 'choice2',name:'Web Design'}];
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
    $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };

  $scope.showAddChoice = function (choice) {
    return choice.id === $scope.choices[0].id;
  }
});
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
$scope.choices =[{id: 0,name:'Android',projects:[{pid:0,title:"Awesome"}]}, {id: 1,name:'Web Design',projects:[{pid:0,title:"Awesome"}]},{id: 2,name:'Web Design',projects:[{pid:0,title:"Awesome"}]},{id: 3,name:'Web Design',projects:[{pid:0,title:"Awesome"}]},{id: 4,name:'Web Design',projects:[{pid:0,title:"Awesome"}]},{id: 5,name:'Web Design',projects:[{pid:0,title:"Awesome"}]}];
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
    $scope.addNewCategory = function() {
    var newItemNo = $scope.choices.length;
    $scope.choices.push({'id':newItemNo,'projects':[]});
  };

  $scope.showAddCategory = function (choice) {
    return choice.id === $scope.choices[0].id;
  }
$scope.addNewProject = function(choice){
  $modal.open({
    templateUrl: 'myModalContent.html',
    windowClass: 'modal'
  })
}



  /*
  $scope.addNewProject = function(thisID) {
    var newItemNo = 0;
    for(x in $scope.choices){
      if (x.id = 0){
        newItemNo = x.projects.length;
        x.projects.push({pid:newItemNo})
        $scope.choices.push(x)
      }
    }
    //$scope.choices[thisID].projects.push({pid:newItemNo});
  };

  $scope.showAddProject = function (project) {
    return project.pid === 0;
  }*/
});


adminControllers.controller('ProjectCreateCtrl', function ($scope) {
  $scope.students =[{id: 0,name:'Jane'}]
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
    $scope.addNewStudent = function() {
    var newItemNo = $scope.choices.length;
    $scope.students.push({'id':newItemNo});
  };

  $scope.showAddStudent = function (student) {
    return student.id === $scope.students[0].id;
  }
  });
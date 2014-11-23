/**
 * @ngdoc function
 * @name lfgcodeLinc.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the lfgcodeLinc
 */
angular.module('itisforgirls')
  .controller('ReportsCtrl', function ($scope) {
    $scope.results = [
    	    { rank: "1", category: "Mobile App Development", project: "IT is for Girls", members: [ 
    		{name: 'Brynn'}, {name: 'Dan'}, {name: 'Sathish'}, {name: 'Patrick'}, {name: 'Selva'}
    	]},
    	    { rank: "2", category: "Web Design", project: "IT is for Girls", members: [ 
    		{name: 'Mark'}, {name: 'Kim'}, {name: 'Jack'}
    	]}
    	  ];
  });

angular.module('itisforgirls')
    .controller('VoteCtrl', function ($scope, $routeParams, $location) {
    	if ($routeParams.email=="email@email.com") {
    		$scope.categories = categories;
    		$scope.orig = angular.copy($scope.categories);
    		$scope.success = true;
    	}
    	$scope.resetRating = function() {
    		$scope.categories = angular.copy($scope.orig);
    	}
    	$scope.submitRating = function() {
    		$location.path('/submitRating');
    	}
    });
 
 angular.module('itisforgirls')
 .directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating"><li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605</li> </ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {
            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };
            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});
 var categories = [
    { name: "Mobile App Development", projects: [{name: "Team A", rating: {current: -1, max: 5}},{name: "Team B", rating: {current: -1, max: 5}}] },
    { name: "Creating Animation with MITs Scratch", projects: [{name: "Team B", rating: {current: -1, max: 5}},{name: "Team E", rating: {current: -1, max: 5}}] },
    { name: "Web Design", projects: [{name: "Team C", rating: {current: -1, max: 5}},{name: "Team F", rating: {current: -1, max: 5}}] },
    { name: "Lego Robotics", projects: [{name: "Team C", rating: {current: -1, max: 5}},{name: "Team F", rating: {current: -1, max: 5}}] },
 	{ name: "Microsoft Kodu Game Development", projects: [{name: "Team C", rating: {current: -1, max: 5}},{name: "Team F", rating: {current: -1, max: 5}}] }, 
	{ name: "Video Editing", projects: [{name: "Team C", rating: {current: -1, max: 5}},{name: "Team F", rating: {current: -1, max: 5}}] } 
  ];


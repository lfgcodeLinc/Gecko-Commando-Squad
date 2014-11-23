'use strict';

/**
 * @ngdoc function
 * @name codelincTestApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the codelincTestApp
 */
angular.module('itisforgirls')
  .controller('RegistrationCtrl', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
         var uName = user.name;
         var uEmail = user.email;

          /*function go() {
              var userEmail = uEmail;
              checkIfUserExists(userEmail);
          }

          var USERS_LOCATION = 'https://SampleChat.firebaseIO-demo.com/users';

          function userExistsCallback(userEmail, exists) {
              if (exists) {
                  alert('user ' + userId + ' exists!');
              } else {
                  alert('user ' + userId + ' does not exist!');
              }
          }

// Tests to see if /users/<userEmail> has any data.
          function checkIfUserExists(userEmail) {
              var usersRef = new Firebase(USERS_LOCATION);
              usersRef.child(userEmail).once('value', function(snapshot) {
                  var exists = (snapshot.val() !== null);
                  userExistsCallback(userEmail, exists);
              });
          }
*/
      };

    }]);

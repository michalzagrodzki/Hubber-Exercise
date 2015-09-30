'use strict';

/**
 * @ngdoc function
 * @name hubberAngularApp.controller:HubusersCtrl
 * @description
 * # HubusersCtrl
 * Controller of the hubberAngularApp
 */
var hubuserControllers = angular.module('hubuserControllers', []);
/*

// Single User of Github ( GET ) - View
hubuserControllers.controller('ViewHubusersCtrl', ['$scope', '$stateParams', 'Hubuser',
  function($scope, $stateParams, Hubuser){
    $scope.hubuser = Hubuser.get({ login: $stateParams.login });
  }]);
*/
// List Users of Github ( QUERY ) - List
hubuserControllers.controller('ListHubusersCtrl', ['$scope', 'hubusersFactory',
  function($scope, hubusersFactory){

    $scope.status;

    $scope.getHubUsers = function (){
      hubusersFactory.getHubUsers()
        .success(function(hubs){
          $scope.hubusers = hubs;
        })
        .error(function(error){
          $scope.status = 'Unable to load users list: ' + error.message;
        });
    };

}]);

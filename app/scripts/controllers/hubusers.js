'use strict';

/**
 * @ngdoc function
 * @name hubberAngularApp.controller:HubusersCtrl
 * @description
 * # HubusersCtrl
 * Controller of the hubberAngularApp
 */
var hubuserControllers = angular.module('hubuserControllers', []);

// List Users of Github ( QUERY ) - List
hubuserControllers.controller('ListHubusersCtrl', ['$scope', 'Hubusers',
  function($scope, Hubusers){
    $scope.hubusers = Hubusers.query();
}]);

// Single User of Github ( GET ) - View
hubuserControllers.controller('ViewHubusersCtrl', ['$scope', '$stateParams', 'Hubuser',
  function($scope, $stateParams, Hubuser){
    $scope.hubuser = Hubuser.get({ login: $stateParams.login });
  }]);

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
hubuserControllers.controller('ListHubusersCtrl', ['$scope', 'Hubuser',
  function($scope, Hubuser){
    $scope.hubusers = Hubuser.query();
}]);

// Single User of Github ( GET ) - View
hubuserControllers.controller('ViewHubusersCtrl', ['$scope', '$routeParams', 'Hubuser',
  function($scope, $routeParams, Hubuser){
    $scope.hubuser = Hubuser.get({ login: $routeParams.login });
  }]);

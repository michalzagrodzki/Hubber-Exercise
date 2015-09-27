'use strict';

/**
 * @ngdoc function
 * @name hubberAngularApp.controller:HubusersCtrl
 * @description
 * # HubusersCtrl
 * Controller of the hubberAngularApp
 */
var hubuserControllers = angular.module('hubuserControllers', []);

// List Users of Github ( QUERY )
hubuserControllers.controller('ListHubusersCtrl', ['$scope', 'Hubuser',
  function($scope, Hubuser){
    $scope.hubusers = Hubuser.query();
}]);

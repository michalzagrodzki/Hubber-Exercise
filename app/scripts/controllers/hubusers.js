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
hubuserControllers.controller('HubusersCtrl', ['$scope', '$stateParams', 'hubusersFactory',
  function($scope, $stateParams, hubusersFactory){

    $scope.status;

    // QUERY Github Users
    $scope.getHubUsers = function (){
      hubusersFactory.getHubUsers()
        .success(function(hubs){
          $scope.hubusers = hubs;
        })
        .error(function(error){
          $scope.status = 'Unable to load users list: ' + error.message;
        });
    };

    // GET Github User
    $scope.getHubUser = function (){
      hubusersFactory.getHubUser({ login: $stateParams.login })
        .success(function(hub){
          $scope.hubuser = hub;
        })
        .error(function(error){
          $scope.status = 'Unable to load specific user: ' + error.message;
        });
    };

    // QUERY Repositories for Github User
    $scope.getRepositories = function (){
      hubusersFactory.getRepositories({ login: $stateParams.login })
        .success(function(repos){
          $scope.repos = repos;
        })
        .error(function(error){
          $scope.status = 'Unable to load specific user: ' + error.message;
        });
    };

    // QUERY Followers for Github User
    $scope.getFollowers = function (){
      hubusersFactory.getFollowers({ login: $stateParams.login })
        .success(function(repos){
          $scope.followers = repos;
        })
        .error(function(error){
          $scope.status = 'Unable to load specific user: ' + error.message;
        });
    };

    // QUERY Followed people for Github User
    $scope.getFollowing = function (){
      hubusersFactory.getFollowing({ login: $stateParams.login })
        .success(function(repos){
          $scope.followings = repos;
        })
        .error(function(error){
          $scope.status = 'Unable to load specific user: ' + error.message;
        });
    };

}]);

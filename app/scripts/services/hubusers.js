'use strict';

/**
 * @ngdoc service
 * @name hubberAngularApp.hubusers
 * @description
 * # hubusers
 * Factory in the hubberAngularApp.
 */

// factory for calling data from github API
var hubusersServices = angular.module('hubusersServices', []);

hubusersServices.factory('hubusersFactory', ['$stateParams', '$http', function($stateParams, $http){

  var baseUrl = "https://api.github.com/users";
  var hubusersFactory = {};

  // QUERY github users
  hubusersFactory.getHubUsers = function() {
    return $http.get(baseUrl);
  };

  // GET single github user
  hubusersFactory.getHubUser = function($stateParams) {
    return $http.get(baseUrl + '/' + $stateParams.login);
  };

  // methods related to single user

  // QUERY repositories for single github user
  hubusersFactory.getRepositories = function($stateParams) {
    return $http.get(baseUrl + '/' + $stateParams.login + '/repos');
  };

  // QUERY followers for single github user
  hubusersFactory.getFollowers = function($stateParams) {
    return $http.get(baseUrl + '/' + $stateParams.login + '/followers');
  };

  // QUERY followers for single github user
  hubusersFactory.getFollowing = function($stateParams) {
    return $http.get(baseUrl + '/' + $stateParams.login + '/following');
  };

  // QUERY organizations for single github user
  hubusersFactory.getOrganizations = function($stateParams) {
    return $http.get(baseUrl + '/' + $stateParams.login + '/orgs');
  };

  return hubusersFactory;

  }]);


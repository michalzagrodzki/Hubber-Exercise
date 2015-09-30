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

hubusersServices.factory('hubusersFactory', ['$http', function($http){

  var baseUrl = "https://api.github.com/users";
  var hubusersFactory = {};

  // QUERY github users
  hubusersFactory.getHubUsers = function() {
    return $http.get(baseUrl);
  };

  // GET single github user
  hubusersFactory.getHubUser = function(stateParams) {
    return $http.get(baseUrl + '/' + stateParams.login);
  };

  return hubusersFactory;

  }]);


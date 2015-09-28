'use strict';

/**
 * @ngdoc service
 * @name hubberAngularApp.hubusers
 * @description
 * # hubusers
 * Factory in the hubberAngularApp.
 */

// service for calling data from github API
var hubusersServices = angular.module('hubusersServices', ['ngResource']) ;

// Service for querying LIST of users ( QUERY )
hubusersServices.factory('Hubusers', ['$resource',
  function ($resource) {
    return $resource('https://api.github.com/users', {
        query: {
          method: 'GET'
        }
      });
  }]);

// Service for listing SINGLE user ( GET )
hubusersServices.factory('Hubuser', ['$resource',
  function ($resource) {
    return $resource('https://api.github.com/users/:login', {
      get: {
        method: 'GET'
      }
    });
}]);

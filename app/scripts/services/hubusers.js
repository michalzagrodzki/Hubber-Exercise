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

hubusersServices.factory('Hubuser', ['$resource',
  function ($resource) {
    return $resource('https://api.github.com/users/:login', {
      query: { method: 'GET', isArray: true },
      get: { method: 'GET' }
    });
}]);

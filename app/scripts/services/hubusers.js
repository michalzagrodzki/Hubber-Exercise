'use strict';

/**
 * @ngdoc service
 * @name hubberAngularApp.hubusers
 * @description
 * # hubusers
 * Factory in the hubberAngularApp.
 */
var hubusersServices = angular.module('hubusersServices', ['ngResource']) ;

hubusersServices.factory('Hubuser', ['$resource',
  function ($resource) {
    return $resource('https://api.github.com/users', {
      query: { method: 'GET', isArray: true },
      get: { method: 'GET' }
    });
}]);

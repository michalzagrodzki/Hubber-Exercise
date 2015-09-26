'use strict';

/**
 * @ngdoc service
 * @name hubberAngularApp.hubusers
 * @description
 * # hubusers
 * Factory in the hubberAngularApp.
 */
angular.module('hubberAngularApp.services', [])
  .factory('hubusers', function ($resource) {
    return $resource('https://api.github.com/users');

  });

'use strict';

/**
 * @ngdoc overview
 * @name hubberApplicationApp
 * @description
 * # hubberApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('hubberApplicationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hubusersServices',
    'hubuserControllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/hubusers', {
        templateUrl: 'views/hubusers-list.html',
        controller: 'ListHubusersCtrl'
      })
      .when('/hubusers/:login', {
        templateUrl: 'views/hubuser-view.html',
        controller: 'ViewHubusersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

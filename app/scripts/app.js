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
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularMoment',
    'hubusersServices',
    'hubuserControllers'
  ])

.config(function ($stateProvider, $urlRouterProvider) {

  // Default route, when url is not specified
  $urlRouterProvider.otherwise('/');

  $stateProvider

    // Main Route
    .state('/', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })

    // Github Users INDEX Route
    .state('hubusersIndex', {
      url: '/hubusers',

      views: {
        '' : { controller: 'HubusersCtrl',
          templateUrl: 'views/hubusers-list.html'
           },
        'name@hubusersIndex' : { templateUrl: 'views/hubusers-list-partial-name.html'}

      }
    })

    // Github User DETAIL Route
    .state('hubusersDetail', {
      url: '/hubusers/:login',
      templateUrl: 'views/hubuser-view.html',
      controller: 'HubusersCtrl'
    });

  });

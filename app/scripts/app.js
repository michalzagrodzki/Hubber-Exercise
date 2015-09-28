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
      controller: 'MainCtrl',
      controllerAs: 'main'
    })

    // About Route
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })

    // Github Users INDEX Route
    .state('hubusersIndex', {
      url: '/hubusers',
      views: {
        '' : {   templateUrl: 'views/hubusers-list.html',
                controller: 'ListHubusersCtrl'
            },
        'hubuserName@hubusersIndex' : {
          templateUrl: 'views/hubusers-list-partial-name.html',
          controller: 'ViewHubusersCtrl'
        }
      }

    })

    // Github User DETAIL Route
    .state('hubusersDetail', {
      url: '/hubusers/:login',
      templateUrl: 'views/hubuser-view.html',
      controller: 'ViewHubusersCtrl'
    });

  });

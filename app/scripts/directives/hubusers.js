'use strict';

// directive for navigating to previous page
var hubusersDirectives = angular.module('hubusersDirectives', []);

hubusersDirectives.directive('backButton', [function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function () {
        history.back();
        scope.$apply();
      });
    }
  }
}]);

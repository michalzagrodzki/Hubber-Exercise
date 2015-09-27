'use strict';

describe('Controller: HubusersCtrl', function () {

  // load the controller's module
  beforeEach(module('hubberAngularApp'));

  var HubusersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HubusersCtrl = $controller('HubusersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HubusersCtrl.awesomeThings.length).toBe(3);
  });
});

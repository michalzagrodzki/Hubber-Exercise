'use strict';

describe('Service: hubusers', function () {

  // load the service's module
  beforeEach(module('hubberAngularApp'));

  // instantiate service
  var hubusers;
  beforeEach(inject(function (_hubusers_) {
    hubusers = _hubusers_;
  }));

  it('should do something', function () {
    expect(!!hubusers).toBe(true);
  });

});

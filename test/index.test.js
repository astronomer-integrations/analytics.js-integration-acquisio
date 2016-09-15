'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var MyIntegration  = require('../lib/');

describe('analytics.js-integration-acquisio', function () {
  var analytics;
  var myIntegration;

  beforeEach(function () {
    analytics = new Analytics();
    myIntegration = new MyIntegration(options);
    analytics.use(myIntegration);
    analytics.use(tester);
    analytics.add(myIntegration);
  });

  afterEach(function () {
    analytics.restore();
    analytics.reset();
    myIntegration.reset();
    sandbox();
  });
});

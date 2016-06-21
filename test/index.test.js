'use strict';

var Analytics = require('analytics.js-core').constructor;
var integration = require('analytics.js-integration');
var sandbox = require('clear-env');
var tester = require('analytics.js-integration-tester');
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

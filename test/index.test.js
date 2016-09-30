'use strict';

var Analytics = require('@astronomerio/analytics.js-core').constructor;
var integration = require('@astronomerio/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var Acquisio  = require('../lib/');

describe('Acquisio', function() {
  var analytics;
  var acquisio;
  var options = {
  };

  beforeEach(function() {
    analytics = new Analytics();
    acquisio = new Acquisio(options);
    analytics.use(Acquisio);
    analytics.use(tester);
    analytics.add(acquisio);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    acquisio.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(Acquisio, integration('Acquisio')
                      .global('TTDUniversalPixelApi')
                      .option('events', '')
                      .option('advertiserId', ''));
  });

  describe('loading', function() {
    it('should load', function(done) {
      analytics.load(acquisio, done);
    });
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
    });
  });
});

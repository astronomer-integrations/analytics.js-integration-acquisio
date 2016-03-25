'use strict';

/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');

/**
 * Expose `Kenshoo` integration.
 */

var Acquisio = module.exports = integration('Acquisio')
.assumesPageView()
.option('events', '')
.tag('<div id="ttdUniversalPixelTagb36891b1ae0c43c58ed7c4959ea61e43" style="display:none"><script src="https://js.adsrvr.org/up_loader.1.1.0.js" type="text/javascript"></script><script type="text/javascript">(function(global) {if (typeof TTDUniversalPixelApi === "function") {var universalPixelApi = new TTDUniversalPixelApi();universalPixelApi.init("zto85fg", ["nwzwuyj"], "https://insight.adsrvr.org/track/up", "ttdUniversalPixelTagb36891b1ae0c43c58ed7c4959ea61e43");}})(this);</script></div>');

/**
 * Initialize.
 *
 * Documentation:
 *
 * @api public
 */

Acquisio.prototype.initialize = function() {
    this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Acquisio.prototype.loaded = function() {
    return true;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Acquisio.prototype.page = function(page) {

};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Acquisio.prototype.identify = function(identify) {

};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Acquisio.prototype.track = function(track) {
    var eventName = track.event();
    var events = this.options.events;
    // check to see if the track event is defined for this integration
    if (events.indexOf(eventName) !== -1) {
        this.fire(track);
    }
};

Acquisio.prototype.fire = function(track) {
    var pixel = document.body.appendChild(document.createElement('img'));
    pixel.setAttribute('height', 1);
    pixel.setAttribute('width', 1);
    pixel.style.borderStyle = 'none';
    pixel.setAttribute('alt', '');

    // <img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/conv/?adv=zto85fg&ct=0:6k17byi&fmt=3"/>
};

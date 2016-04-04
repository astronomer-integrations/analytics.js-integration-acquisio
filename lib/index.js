'use strict';

/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');

/**
 * Expose `Acquisio` integration.
 */

var Acquisio = module.exports = integration('Acquisio')
.global('TTDUniversalPixelApi')
.option('events', '')
.option('advertiserId', '')

/**
 * Initialize.
 *
 * Documentation:
 *
 * @api public
 */

Acquisio.prototype.initialize = function() {
    var scriptText = '';

    var div = document.body.appendChild(document.createElement('div'));
    div.style.display = 'none';
    div.setAttribute('id', 'ttdUniversalPixelTagb36891b1ae0c43c58ed7c4959ea61e43');

    var scriptElement = document.createElement('script');
    scriptElement.setAttribute("type","text/javascript");

    div.appendChild(scriptElement);
    scriptElement.onload = function () {
            if (typeof TTDUniversalPixelApi === "function") {
                var universalPixelApi = new TTDUniversalPixelApi();universalPixelApi.init(this.options.advertiserId, ["nwzwuyj"], "https://insight.adsrvr.org/track/up", "ttdUniversalPixelTagb36891b1ae0c43c58ed7c4959ea61e43");
            }
    };
    scriptElement.src = 'https://js.adsrvr.org/up_loader.1.1.0.js';
    
    this.ready();
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
    var pixel = document.createElement('img');
    pixel.setAttribute('height', 1);
    pixel.setAttribute('width', 1);
    pixel.style.borderStyle = 'none';
    pixel.setAttribute('alt', '');
    pixel.setAttribute('src', '//insight.adsrvr.org/track/conv/?adv=' + this.options.advertiserId + '&ct=0:6k17byi&fmt=3');
    document.body.appendChild(pixel);
};

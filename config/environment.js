/* eslint-env node */

'use strict';

module.exports = function(environment) {
    let ENV = {
        modulePrefix: 'kincade-weddings',
        environment,
        rootURL: '/',
        locationType: 'auto',

        firebase: {
            apiKey: "AIzaSyAV4KY3a0DKXadXsMwUDWBeO-4v0Eoji1U",
            authDomain: "kincadeweddings-ecb95.firebaseapp.com",
            databaseURL: "https://kincadeweddings-ecb95.firebaseio.com",
            projectId: "kincadeweddings-ecb95",
            storageBucket: "",
            messagingSenderId: "834347271401"
        },

        contentSecurityPolicy: {
            'script-src': "'self' 'unsafe-eval' apis.google.com",
            'frame-src': "'self' https://*.firebaseapp.com",
            'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance when it is created.
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // Keep test console output quieter.
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        ENV.APP.autoboot = false;
    }

    if (environment === 'production') {
        // Here you can enable a production-specific feature.
    }

    return ENV;
};

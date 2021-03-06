module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '',
        frameworks: ['mocha', 'requirejs', 'sinon-chai'],
        files: [
            {pattern: 'app/**/*.js', included: false},
            {pattern: 'bower_components/**/*.js', included: false},
            'test-main.js'
        ],
        exclude: [
            'app/config.js',
            'bower_components/**/build/output/knockout.mapping-latest.js'
        ],
        preprocessors: {

        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};

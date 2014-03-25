'use strict';

requirejs.config({
    baseUrl: './app',
    paths: {
        'durandal': '../bower_components/durandal/js',
        'jquery': '../bower_components/jquery/jquery',
        'knockout': '../bower_components/knockout.js/knockout',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'sinon': '../bower_components/sinon/lib/sinon'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'sinon': {
            exports: 'sinon'
        }
    }
});
'use strict';

requirejs.config({
    baseUrl: './app',
    paths: {
        'durandal': '../bower_components/durandal/js',
        'text': '../bower_components/requirejs-text/text',
        'plugins': '../bower_components/durandal/js/plugins',
        'transitions': '../bower_components/durandal/js/transitions',
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
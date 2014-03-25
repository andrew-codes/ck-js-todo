/*global define */
define(function (require) {
    'use strict';

    var system = require('durandal/system'),
        app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator');


    system.debug(true);

    app.title = 'Task Manager';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell');
    });
});
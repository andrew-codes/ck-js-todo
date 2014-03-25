/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout');

    var app = {
        tasks: ko.observableArray()
    };

    return app;
});
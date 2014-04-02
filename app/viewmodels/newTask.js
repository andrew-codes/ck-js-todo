/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout'),
        app = require('durandal/app'),
        mapping = require('knockout-mapping'),
        save = function () {
            app.trigger('task:new', mapping.toJS(this));
        };

    var ViewModel = function () {
        var self = this;
        self.title = ko.observable();
        self.save = save;
    };

    return ViewModel;
});
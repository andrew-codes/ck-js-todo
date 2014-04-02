/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout'),
        app = require('durandal/app'),
        task = require('viewmodels/task');

    var save = function () {
        app.trigger('task:new', this);
    };

    var newTask = {
        title: ko.observable(),
        save: save
    };

    return newTask;
});
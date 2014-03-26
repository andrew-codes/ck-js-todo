/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout'),
        app = require('durandal/app'),
        task = require('app/viewmodels/task');

    var save = function () {
        var newTask = task.create(this);
        app.trigger('task:new', newTask);
    };

    var newTask = {
        title: ko.observable(),
        save: save
    };

    return newTask;
});
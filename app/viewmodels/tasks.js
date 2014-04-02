/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout'),
        app = require('durandal/app'),
        tasks = {
            taskCollection: ko.observableArray()
        },
        addNewTask = function (task) {
            tasks.taskCollection.push(task);
        };

    app.on('task:new').then(addNewTask);

    return tasks;
});
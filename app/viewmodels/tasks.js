/*global define */
define(function (require) {
    'use strict';

    var ko = require('knockout'),
        app = require('durandal/app');


    var tasks = {
        allTasks: ko.observableArray()
    };

    var addNewTask = function (task) {
        tasks.allTasks.push(task);
    };

    app.on('task:new').then(addNewTask);

    return tasks;
});
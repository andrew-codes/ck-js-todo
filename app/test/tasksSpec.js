/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('tasks', function () {
        var sut,
            app,
            ko;
        beforeEach(function (done) {
            app = require('durandal/app');
            sut = require('viewmodels/tasks');
            ko = require('knockout');
            done();
        });
        describe('given a new task', function () {
            var newTask;
            beforeEach(function () {
                newTask = { title: ko.observable('My new task')};
            });
            describe('when the application-wide new task event is triggered with the new task', function () {
                var oldLength;
                beforeEach(function () {
                    oldLength = sut.taskCollection().length;
                    app.trigger('task:new', newTask);
                });
                it('should add the new task to the tasks collection', function () {
                    sut.taskCollection().length.should.equal(oldLength + 1);
                    sut.taskCollection()[oldLength].should.equal(newTask);
                });
            });
        });
    });
});
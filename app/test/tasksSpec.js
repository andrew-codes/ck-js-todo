/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('tasks', function () {
        var sut,
            app,
            task,
            newTask;
        beforeEach(function (done) {
            app = require('durandal/app');
            sut = require('viewmodels/tasks');
            task = require('viewmodels/task');
            var ko = require('knockout');
            newTask = { title: ko.observable('My new task')};
            sinon.stub(task, 'create').returns(newTask);
            done();
        });
        afterEach(function () {
            task.create.restore();
        });
        describe('given a new task', function () {
            describe('when the new task event is triggered', function () {
                var oldLength;
                beforeEach(function () {
                    oldLength = sut.allTasks().length;
                    app.trigger('task:new', newTask);
                });
                it('should add the new task as a read only task viewmodel to the all tasks collection', function () {
                    sut.allTasks().length.should.equal(oldLength + 1);
                    sut.allTasks()[oldLength].should.equal(newTask);
                });
            });
        });
    });
});
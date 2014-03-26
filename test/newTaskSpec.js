/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('newTask', function () {
        var sut,
            app,
            newTask,
            taskTitle,
            task,
            triggerSpy,
            createSpy;
        beforeEach(function (done) {
            app = require('durandal/app');
            var ko = require('knockout');
            sut = require('app/viewmodels/newTask');
            task = require('app/viewmodels/task');
            taskTitle = 'My new task';
            newTask = {
                title: ko.observable(taskTitle)
            };
            createSpy = sinon.stub(task, 'create').returns(newTask);
            triggerSpy = sinon.stub(app, 'trigger');
            done();
        });
        afterEach(function () {
            triggerSpy.restore();
            createSpy.restore();
        });

        describe('given a task title', function () {
            beforeEach(function () {
                sut.title('My new task');
            });
            describe('when saving a new task', function () {
                beforeEach(function () {
                    sut.save();
                });
                it('should create the new task from the provided data', function () {
                    createSpy.should.have.been.calledWith(sut);
                });
                it('should trigger the new task event with the new task', function () {
                    triggerSpy.should.have.been.calledWith('task:new', newTask);
                });
            });
        });

    });
});
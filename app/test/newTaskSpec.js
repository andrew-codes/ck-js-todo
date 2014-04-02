/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('newTask', function () {
        var sut,
            app,
            newTask,
            taskTitle,
            triggerSpy,
            createSpy;
        beforeEach(function (done) {
            app = require('durandal/app');
            sut = require('viewmodels/newTask');
            taskTitle = 'My new task';
            newTask = {
                title: taskTitle
            };
            triggerSpy = sinon.stub(app, 'trigger');
            done();
        });
        afterEach(function () {
            triggerSpy.restore();
        });

        describe('given a task title', function () {
            beforeEach(function () {
                sut.title('My new task');
            });
            describe('when saving a new task', function () {
                beforeEach(function () {
                    sut.save();
                });
                it('should trigger the new task event with the new task data', function () {
                    triggerSpy.should.have.been.calledWith('task:new', sut);
                });
            });
        });

    });
});
/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('newTask', function () {
        var sut,
            app,
            taskTitle,
            triggerSpy,
            mapping;
        beforeEach(function (done) {
            var Sut = require('viewmodels/newTask');
            app = require('durandal/app');
            mapping = require('knockout-mapping');
            sut = new Sut();
            taskTitle = 'My new task';
            triggerSpy = sinon.stub(app, 'trigger');
            done();
        });
        afterEach(function () {
            triggerSpy.restore();
        });

        describe('given a task title', function () {
            var actual;
            beforeEach(function () {
                actual = null;
                sut.title(taskTitle);
            });
            describe('when saving a new task', function () {
                beforeEach(function () {
                    sut.save();
                    actual = mapping.toJS(sut);
                });
                it('should trigger the new task event with the new task data', function () {
                    triggerSpy.should.have.been.calledWith('task:new', actual);
                });
            });
        });

    });
});
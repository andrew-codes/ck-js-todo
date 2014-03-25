/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('index', function () {
        var sut;
        beforeEach(function (done) {
            sut = require('index');
            done();
        });
        describe('when loading our module', function () {
            it('should exist', function () {
                sut.should.not.be.null;
            });
        });

        describe('when starting the application', function () {
            it('should load a blank list of tasks', function () {
                sut.tasks().length.should.be.equal(0);
            });
        });
    });
});
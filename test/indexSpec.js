/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('index', function () {
        var sut;
        beforeEach(function (done) {
            sut = require('app/index');
            done();
        });

        it('should exist', function () {
            sut.should.not.be.null;
        });
    });
});
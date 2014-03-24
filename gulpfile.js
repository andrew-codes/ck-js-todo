'use strict';

var gulp = require('gulp');
var rjs = require('requirejs');
var karma = require('gulp-karma');

gulp.task('default', ['test'], function () {
    console.log('Default task run');
});

gulp.task('test', function () {
    gulp.src('./undefined.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (error) {
            throw error;
        });
});
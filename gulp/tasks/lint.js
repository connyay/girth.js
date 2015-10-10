/*global module, require, console*/
'use strict';

var gulp   = require('gulp'),
    conf   = require('../config'),
    jscs   = require('gulp-jscs'),
    jshint = require('gulp-jshint');


gulp.task('lint-jshint', ['jscs'], function () {
    return gulp.src(conf.src.js)
           .pipe(jshint({
               node: true,
               eqeqeq: true,
               forin: true,
               freeze: true,
               nomen: true
           }))
           .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
    return gulp.src(conf.src.js)
           .pipe(jscs())
           .pipe(jscs.reporter());
});


// Lint Task
gulp.task('lint', ['jscs', 'lint-jshint']);
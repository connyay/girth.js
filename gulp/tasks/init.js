/*global module, require, console*/
'use strict';

var gulp    = require('gulp'),
    install = require("gulp-install"),
    git     = require("gulp-git");

gulp.task('pull', function () {
    git.pull('origin', 'master', {args: '--rebase'}, function (err) {
        if (err) { throw err; }
    });
});

gulp.task('init', function () {
    gulp.src(['./bower.json', './package.json']).pipe(install());
});

gulp.task('reinit', ['pull', 'init']);

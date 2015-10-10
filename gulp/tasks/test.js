/*global require*/
'use strict';
var gulp  = require('gulp'),
    mocha = require('gulp-mocha'),
    conf  = require('../config');

gulp.task('test', function () {
    return gulp.src('./test.js', {read: false})
           .pipe(mocha({reporter: 'spec'}));
});




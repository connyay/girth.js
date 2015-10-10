'use strict';
var gulp     = require('gulp'),
    conf     = require('../config');

gulp.task('watch-lint', function () {
    gulp.watch(conf.src.js, ['lint']);
});

gulp.task('watch-test', function () {
    gulp.watch(conf.src.js, ['test']);
});

gulp.task('watch', ['watch-lint', 'watch-test']);



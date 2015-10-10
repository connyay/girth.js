/*global module, require, console*/
'use strict';


// Include gulp
var gulp     = require('gulp'),
    conf     = require('./config'),
    tasks    = require('./tasklist');

// Load up all the tasks
tasks.forEach(function (task) {
    require('./tasks/' + task);
});

// Default Task
gulp.task('default', ['lint', 'test', 'watch']);


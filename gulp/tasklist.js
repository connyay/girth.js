/*global module, require, console*/
'use strict';

var fs    = require('fs'),
    path  = require('path');

module.exports = fs.readdirSync('./gulp/tasks/').filter(function (name) {
    if (name.indexOf('#') === -1) {
        return /(\.(js)$)/i.test(path.extname(name));
    }
    return null;
});

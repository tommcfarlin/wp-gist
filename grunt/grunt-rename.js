module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        replace = require('../config/replace.js'),
        task = {};

    if (grunt.file.exists(replace.project.slug + '.php')) {
        task = {
            src: replace.project.slug + '.php',
            dest: config.project.slug + '.php'
        };
    }

    grunt.config('rename', {
        project: task
    });

};

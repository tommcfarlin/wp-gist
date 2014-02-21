module.exports = function (grunt) {

    'use strict';

    // Track time.
    require('time-grunt')(grunt);

    // Load plugins.
    require('load-grunt-tasks')(grunt);

    // Load tasks.
    grunt.loadTasks('grunt');

};

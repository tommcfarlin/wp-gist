module.exports = function (grunt) {

    'use strict';

    grunt.config('concurrent', {
        css: ['css'],
        js: ['js'],
        version: ['version']
    });

};
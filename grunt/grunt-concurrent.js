module.exports = function (grunt) {

    'use strict';

    grunt.config('concurrent', {
        css: ['css'],
        images: ['images'],
        js: ['js'],
        version: ['version']
    });

};
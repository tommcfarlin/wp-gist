module.exports = function (grunt) {

    'use strict';

    grunt.config('concurrent', {
        bump: ['bump'],
        css: ['css']
    });

};
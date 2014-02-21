module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        css: {
            files: [
                'sass/**/*.scss'
            ],
            tasks: [
                'css'
            ]
        },
        js: {
            files: [
                'grunt/*.js',
                'Gruntfile.js'
            ],
            tasks: [
                'build'
            ]
        }
    });

};
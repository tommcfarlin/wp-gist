module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        css: {
            files: [
                'admin/sass/**/*.scss',
                'sass/**/*.scss'
            ],
            tasks: [
                'css'
            ]
        }
    });

};
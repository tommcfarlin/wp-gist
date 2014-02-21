module.exports = function (grunt) {

    'use strict';

    grunt.config('sass', {
        css: {
            options: {
                outputStyle: 'compressed'
            },
            files: [
                {
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }
            ]
        }
    });

};
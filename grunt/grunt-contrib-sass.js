module.exports = function (grunt) {

    'use strict';

    grunt.config('sass', {
        css: {
            options: {
                noCache: true,
                trace: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: '<%= config.paths.temp %>/css',
                    ext: '.css'
                }
            ]
        }
    });

};
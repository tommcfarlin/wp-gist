module.exports = function (grunt) {

    'use strict';

    grunt.config('sass', {
        admin: {
            options: {
                noCache: true,
                trace: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'admin/sass',
                    src: ['**/*.scss'],
                    dest: '<%= config.paths.temp %>/admin/css',
                    ext: '.css'
                }
            ]
        },
        plugin: {
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
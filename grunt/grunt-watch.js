module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        css: {
            files: [
                '<%= config.paths.bower %>/**/*.scss',
                'css/src/*.css',
                'sass/**/*.scss'
            ],
            tasks: [
                'css'
            ]
        },
        images: {
            files: [
                'grunticon/*.png',
                'grunticon/*.svg'
            ],
            tasks: [
                'images'
            ]
        },
        js: {
            files: [
                'bower.js',
                '<%= config.paths.bower %>/**/*.js',
                'grunt/*.js',
                'Gruntfile.js',
                'js/src/*.js'
            ],
            tasks: [
                'js'
            ]
        }
    });

};
module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        css: {
            files: [
                '<%= config.paths.bower %>/**/*.scss',
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
                'bower.json',
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
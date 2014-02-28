module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        assemble : {
            files: [
                'layouts/**/*.hbs',
                'pages/**/*.hbs',
                'partials/**/*.hbs'
            ],
            tasks: [
                'assemble'
            ]
        },
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
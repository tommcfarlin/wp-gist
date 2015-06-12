module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('watch', {
        css: {
            files: [
                config.paths.source + '/**/*.scss'
            ],
            tasks: [
                'css'
            ]
        },
        images: {
            files: [
                config.paths.source + '/**/*.svg'
            ],
            tasks: [
                'images'
            ]
        },
        js: {
            files: [
                config.paths.source + '/**/*.js',
                '!' + config.paths.source + '/**/' + config.files.browserify + '.*.js'
            ],
            tasks: [
                'js'
            ]
        }
    });

};

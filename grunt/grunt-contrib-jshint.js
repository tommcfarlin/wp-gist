module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        stylish = require('jshint-stylish'),

        jshintrc = config.paths.curl + '/.jshintrc', // .jshintrc file from WordPress core.
        options;

    if (grunt.file.exists(jshintrc)) {
        options = grunt.file.readJSON(jshintrc);
    } else {
        options = {};
    }

    // Enable additional options.
    options.node = true;
    options.noempty = true;

    // Add ignores.
    options.ignores = [
        config.paths.source + '/**/' + config.files.browserify + '.*.js'
    ];

    // Add reporter.
    options.reporter = stylish;

    grunt.config('jshint', {
        options: options,
        js: {
            src: [
                '*.js',
                'config/*.js',
                'grunt/*.js',

                config.paths.source + '/**/*.js'
            ]
        },
        json: {
            options: {
                quotmark: 'double'
            },
            src: [
                '*.json'
            ]
        }
    });

};

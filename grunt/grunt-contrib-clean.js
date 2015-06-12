module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('clean', {
        build: [
            config.paths.source + '/**/css',
            config.paths.source + '/**/' + config.files.browserify + '.*.js'
        ],
        deploy: [
            '**/.DS_Store',
            '**/.git*',
            '**/bower.json',
            '**/composer.json',
            '**/composer.lock',
            '**/LICENSE',
            '**/package.json',
            '**/README.md',

            '**/*.ai',
            '**/*.psd',
            '**/*.pxm',
            '**/*.sketch',

            '**/' + config.paths.curl + '/**',

            '**/bower_components/**',
            '**/less/**',
            '**/sass/**',
            '**/tests/**'
        ]
    });

};

module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('clean', {
        build: [
            config.paths.source + '/**/css',
            config.paths.source + '/**/' + config.files.browserify + '.*.js'
        ],
        release: [
            'dist'
        ]
    });

};

module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('phplint', {
        files: [
            config.paths.source + '/**/*.php',
            '*.php'
        ]
    });

};

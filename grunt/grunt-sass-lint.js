module.exports = function (grunt) {

    'use strict';

    var _ = require('lodash'),
        config = require('config'),
        glob = require('glob'),

        source = config.paths.source + '/**/*.scss',
        task = {},
        files;

    files = glob.sync(source, {});

    if (!_.isEmpty(files)) {
        task = {
            options: {
                rules: {
                    'force-element-nesting': [0],
                    'no-important': [0],
                    'no-qualifying-elements': [0],
                    indentation: [1, {
                        size: 4
                    }]
                }
            },
            target: [
                source
            ]
        };
    }

    grunt.config('sasslint', task);

};

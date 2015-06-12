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
                config: 'config/.scss-lint.yml'
            },
            src: [
                source
            ]
        };
    }

    grunt.config('scsslint', {
        sass: task
    });

};

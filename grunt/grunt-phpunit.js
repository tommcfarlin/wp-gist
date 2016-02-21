module.exports = function (grunt) {

    'use strict';

    var _ = require('lodash'),
        glob = require('glob'),

        source = 'tests/**/*Test*.php',
        task = {
            options: {
                bin: 'vendor/bin/phpunit',
                bootstrap: 'vendor/manovotny/wp-phpunit-helpers/wp-phpunit-helpers.php',
                colors: true,
                coverage: true
            }
        },
        files;

    files = glob.sync(source, {});

    if (!_.isEmpty(files)) {
        task.tests = {
            dir: 'tests'
        };
    }

    grunt.config('phpunit', task);

};

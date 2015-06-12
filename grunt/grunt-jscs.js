module.exports = function (grunt) {

    'use strict';

    var config = require('config'),

        crockford = 'node_modules/grunt-jscs/node_modules/jscs/presets/crockford.json', // Start with the `crockford` preset from JSCS.
        options;

    if (grunt.file.exists(crockford)) {
        options = grunt.file.readJSON(crockford);
    } else {
        options = {};
    }

    // Remove options.
    delete options.disallowYodaConditions;

    // Add options.
    options.requireCamelCaseOrUpperCaseIdentifiers = 'ignoreProperties';

    // Exclude files.
    options.excludeFiles = [
        config.paths.source + '/**/' + config.files.browserify + '.*.js'
    ];

    grunt.config('jscs', {
        js: {
            options: options,
            src: [
                '*.js',
                'config/*.js',
                'grunt/*.js',

                config.paths.source + '/**/*.js'
            ]
        }
    });

};

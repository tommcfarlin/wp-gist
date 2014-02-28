module.exports = function (grunt) {

    'use strict';

    grunt.config('clean', {
        before: [
            'css',
            '<%= config.paths.temp %>'
        ],
        after: [
            '<%= config.paths.temp %>'
        ]
    });

};
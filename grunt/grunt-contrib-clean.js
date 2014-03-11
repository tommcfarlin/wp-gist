module.exports = function (grunt) {

    'use strict';

    grunt.config('clean', {
        before: [
            'admin/css',
            'css',
            '<%= config.paths.temp %>'
        ],
        after: [
            '<%= config.paths.temp %>'
        ]
    });

};
module.exports = function (grunt) {

    'use strict';

    grunt.config('clean', {
        before: [
            'css',
            'images',
            'js/*.js',
            '<%= config.paths.temp %>'
        ],
        after: [
            '<%= config.paths.temp %>'
        ]
    });

};
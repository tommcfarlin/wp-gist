module.exports = function (grunt) {

    'use strict';

    grunt.config('cssmin', {
        css: {
            options: {
                keepSpecialComments: 0,
                report: 'gzip'
            },
            files: {
                'css/style.min.css': [
                    '<%= config.paths.temp %>/css/*.css'
                ]
            }
        }
    });

};
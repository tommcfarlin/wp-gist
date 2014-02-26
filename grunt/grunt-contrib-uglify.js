module.exports = function (grunt) {

    'use strict';

    grunt.config('uglify', {
        options: {
            report: 'gzip'
        },
        js: {
            files: {
                'js/script.min.js': [
                    '<%= config.paths.temp %>/js/script.js'
                ]
            }
        },
        ie: {
            files: {
                'js/script-ie.min.js': [
                    '<%= config.paths.temp %>/js/script-ie.js'
                ]
            }
        }
    });

};
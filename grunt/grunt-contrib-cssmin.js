module.exports = function (grunt) {

    'use strict';

    grunt.config('cssmin', {
        admin: {
            options: {
                keepSpecialComments: 0,
                report: 'gzip'
            },
            files: {
                'admin/css/shortcode-notice.min.css': [
                    '<%= config.paths.temp %>/admin/css/*.css'
                ]
            }
        },
        plugin: {
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
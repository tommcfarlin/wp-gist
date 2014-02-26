module.exports = function (grunt) {

    'use strict';

    grunt.config('concat', {
        options: {
            separator: ';'
        },
        js: {
            src: [
                '<%= config.paths.bower %>/jquery/dist/jquery.js'
            ],
            dest: '<%= config.paths.temp %>/js/script.js'
        },
        ie: {
            src: [
                '<%= config.paths.bower %>/html5shiv/dist/html5shiv.js',
                '<%= config.paths.bower %>/html5shiv/dist/html5shiv-printshiv.js',
                '<%= config.paths.bower %>/respond/respond.src.js'
            ],
            dest: '<%= config.paths.temp %>/js/script-ie.js'
        }
    });

};
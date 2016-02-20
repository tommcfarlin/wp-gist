module.exports = function (grunt) {

    'use strict';

    grunt.config('copy', {
        release: {
            files: [
                {
                    expand: true,
                    src: [
                        'src/**',
                        'vendor/**',
                        '*.md',
                        '*.php',
                        'LICENSE'
                    ],
                    dest: 'dist'
                }
            ]
        }
    });

};

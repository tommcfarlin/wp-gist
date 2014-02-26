module.exports = function (grunt) {

    'use strict';

    grunt.config('svgmin', {
        svg: {
            files: [{
                expand: true,
                cwd: 'grunticon',
                src: ['**/*.svg'],
                dest: 'temp/grunticon',
                ext: '.svg'
            }]
        }
    });

};
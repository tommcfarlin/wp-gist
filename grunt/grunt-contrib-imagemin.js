module.exports = function (grunt) {

    'use strict';

    grunt.config('imagemin', {
        grunticon: {
            files: [{
                expand: true,
                cwd: 'grunticon',
                src: ['*.{png,jpg,gif}'],
                dest: '<%= config.paths.temp %>/grunticon'
            }]
        },
        images: {
            files: [{
                expand: true,
                cwd: 'images/png',
                src: ['*.{png,jpg,gif}'],
                dest: 'images/png'
            }]
        }
    });

};
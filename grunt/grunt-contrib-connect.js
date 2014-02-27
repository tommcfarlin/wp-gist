module.exports = function (grunt) {

    'use strict';

    grunt.config('connect', {
        server: {
            options: {
                hostname: 'localhost',
                keepalive: true,
                port: 4000
            }
        }
    });

};
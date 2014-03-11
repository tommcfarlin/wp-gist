module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        config: {
            paths: {
                bower: 'bower_components',
                temp: 'temp'
            },
            version: {
                from: '2.2.0',
                to: '3.0.0'
            }
        }
    });

};

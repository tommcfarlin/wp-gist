module.exports = function (grunt) {

    'use strict';

    require('load-grunt-config')(grunt, {
        loadGruntTasks: {
            pattern: [
                'grunt-*'
            ]
        }
    });

    grunt.loadTasks('grunt');

};

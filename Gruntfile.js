module.exports = function (grunt) {

    'use strict';

    // Track time.
    require('time-grunt')(grunt);

    // Load plugins.
    require('load-grunt-tasks')(grunt, {
        pattern: [
            'assemble',
            'grunt-*'
        ]
    });

    // Load tasks.
    grunt.loadTasks('grunt');

    /*
     * For some strange reason, Assemble cannot be loaded in a separate
     * task file like all the other tasks, so we need to load it here
     * in the main Gruntfile for now.
     */

    // Assemble task.
    grunt.config('assemble', {
        options: {
            flatten: true,
            layout: 'layouts/default.hbs',
            partials: ['partials/*.hbs']
        },
        pages: {
            src: ['pages/*.hbs'],
            dest: '.'
        }
    });

};
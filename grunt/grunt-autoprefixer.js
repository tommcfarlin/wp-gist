module.exports = function (grunt) {

    'use strict';

    var _ = require('lodash'),
        config = require('config'),

        adminPath = config.paths.source + '/admin/css',
        sitePath = config.paths.source + '/site/css',

        baseTask = {
            expand: true,
            flatten: true
        },

        adminTask = _.extend({
            src: adminPath + '/**/*.css',
            dest: adminPath
        }, baseTask),

        siteTask = _.extend({
            src: sitePath + '/**/*.css',
            dest: sitePath
        }, baseTask);

    grunt.config('autoprefixer', {
        options: {
            browsers: [
                'last 2 versions',
                'ie 8',
                'ie 9'
            ]
        },
        admin: adminTask,
        site: siteTask
    });

};

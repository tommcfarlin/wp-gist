module.exports = function (grunt) {

    'use strict';

    var _ = require('lodash'),
        config = require('config'),

        options = {
            outputStyle: 'nested'
        },

        adminPath = config.paths.source + '/admin',
        sitePath = config.paths.source + '/site',

        baseFiles = {
            expand: true,
            src: [
                '**/*.scss'
            ],
            ext: '.css'
        },
        adminFiles = _.extend({
            cwd: adminPath + '/sass',
            dest: adminPath + '/css'
        }, baseFiles),
        siteFiles = _.extend({
            cwd: sitePath + '/sass',
            dest: sitePath + '/css'
        }, baseFiles);

    grunt.config('sass', {
        admin: {
            options: options,
            files: [
                adminFiles
            ]
        },
        site: {
            options: options,
            files: [
                siteFiles
            ]
        }
    });

};

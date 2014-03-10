module.exports = function (grunt) {

    'use strict';

    var copyright = {
            from: '@copyright   <%= config.copyright.from %>',
            to: '@copyright   <%= config.copyright.to %>'
        },
        versionClass = {
            from: '$version = \'<%= config.version.from %>\'',
            to: '$version = \'<%= config.version.to %>\''
        },
        versionJson = {
            from: '"version": "<%= config.version.from %>"',
            to: '"version": "<%= config.version.to %>"'
        },
        versionPlugin = {
            from: '* Version:             <%= config.version.from %>',
            to: '* Version:             <%= config.version.to %>'
        };

    grunt.config('replace', {
        package: {
            src: [
                'package.json'
            ],
            overwrite: true,
            replacements: [{
                from: versionJson.from,
                to: versionJson.to
            }]
        },
        plugin: {
            src: [
                'admin/classes/*.php',
                'admin/view/*.php',
                'classes/*.php',
                'uninstall.php',
                'wp-gist.php'
            ],
            overwrite: true,
            replacements: [
                {
                    from: copyright.from,
                    to: copyright.to
                },
                {
                    from: versionClass.from,
                    to: versionClass.to
                },
                {
                    from: versionPlugin.from,
                    to: versionPlugin.to
                }
            ]
        }
    });

};
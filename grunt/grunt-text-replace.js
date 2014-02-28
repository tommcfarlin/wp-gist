module.exports = function (grunt) {

    'use strict';

    var jsonVersion = {
            from: '"version": "<%= config.version.from %>"',
            to: '"version": "<%= config.version.to %>"'
        },
        phpVersion = {
            from: '$version = \'<%= config.version.from %>\'',
            to: '$version = \'<%= config.version.to %>\''
        };

    grunt.config('replace', {
        package: {
            src: [
                'package.json'
            ],
            overwrite: true,
            replacements: [{
                from: jsonVersion.from,
                to: jsonVersion.to
            }]
        },
        plugin: {
            src: [
                'classes/class-wp-gist.php'
            ],
            overwrite: true,
            replacements: [{
                from: phpVersion.from,
                to: phpVersion.to
            }]
        }
    });

};
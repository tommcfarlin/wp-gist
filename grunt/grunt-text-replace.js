module.exports = function (grunt) {

    'use strict';

    var cacheVersion = {
            from: '?ver=<%= config.version.from %>',
            to: '?ver=<%= config.version.to %>'
        },
        jsonVersion = {
            from: '"version": "<%= config.version.from %>"',
            to: '"version": "<%= config.version.to %>"'
        };

    grunt.config('replace', {
        bower: {
            src: [
                'bower.json'
            ],
            overwrite: true,
            replacements: [{
                from: jsonVersion.from,
                to: jsonVersion.to
            }]
        },
        cache: {
            src: [
                '_includes/footer.html',
                '_includes/head.html'
            ],
            overwrite: true,
            replacements: [{
                from: cacheVersion.from,
                to: cacheVersion.to
            }]
        },
        package: {
            src: [
                'package.json'
            ],
            overwrite: true,
            replacements: [{
                from: jsonVersion.from,
                to: jsonVersion.to
            }]
        }
    });

};
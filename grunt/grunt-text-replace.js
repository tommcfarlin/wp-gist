module.exports = function (grunt) {

    'use strict';

    grunt.config('replace', {
        package: {
            src: [
                'package.json'
            ],
            overwrite: true,
            replacements: [{
                from: '"version": "2.1.0"',
                to: '"version": "2.2.0"'
            }]
        },
        plugin: {
            src: [
                'classes/class-wp-gist.php'
            ],
            overwrite: true,
            replacements: [{
                from: '$version = \'2.1.0\'',
                to: '$version = \'2.2.0\''
            }]
        }
    });

};
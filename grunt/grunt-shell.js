module.exports = function (grunt) {

    'use strict';

    grunt.config('shell', {
        init: {
            command: [
                'bower install',
                'composer install'
            ].join('&&')
        },
        refresh: {
            command: 'composer dump-autoload'
        },
        release: {
            command: 'composer update --prefer-dist --no-interaction --no-dev --optimize-autoloader -vvv'
        },
        reset: {
            command: 'composer update'
        },
        update: {
            command: [
                'npm prune',
                'npm install',
                'npm update',
                'npm update caniuse-db',
                'bower prune',
                'bower update',
                'composer update'
            ].join('&&')
        },
        upgrade: {
            command: 'npm-check-updates -u'
        }
    });

};

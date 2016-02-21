module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
        },
        files: {
            browserify: 'bundle'
        },
        paths: {
            curl: 'curl_downloads',
            source: 'src',
            translations: 'lang'
        },
        project: {
            composer: {
                name: 'manovotny/wp-gist',
                type: 'library' // Should be `library` or `project`.
            },
            description: 'Adds support for GitHub Gist embeds in WordPress.',
            git: 'git://github.com/manovotny/wp-gist.git',
            name: 'WP Gist',
            slug: 'wp-gist',
            type: 'plugin', // Should be `plugin` or `theme`.
            url: 'https://github.com/manovotny/wp-gist',
            version: '3.0.0'
        }
    };

}());

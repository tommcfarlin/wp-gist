module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
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
            url: 'https://github.com/manovotny/wp-gist',
            version: '3.1.0'
        },
        translations: {
            domain: 'wp-gist',
            path: 'lang'
        }
    };

}());

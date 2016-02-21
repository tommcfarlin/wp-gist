module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        replace = require('../config/replace.js'),

        replaceFile = 'config/replace.js',
        overwrite = true;

    grunt.config('replace', {
        author_email: {
            src: [
                '*.json',
                '*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"email": "' + replace.author.email + '"',
                    to: '"email": "' + config.author.email + '"'
                }
            ]
        },
        author_name: {
            src: [
                '*.json',
                '*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'Author: ' + replace.author.name,
                    to: 'Author: ' + config.author.name
                },
                {
                    from: '"author": "' + replace.author.name,
                    to: '"author": "' + config.author.name
                },
                {
                    from: '"name": "' + replace.author.name + '"',
                    to: '"name": "' + config.author.name + '"'
                }
            ]
        },
        author_url: {
            src: [
                '*.json',
                '*.php',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: ' <' + replace.author.url + '>',
                    to: ' <' + config.author.url + '>'
                },
                {
                    from: 'Author URI: ' + replace.author.url,
                    to: 'Author URI: ' + config.author.url
                },
                {
                    from: '"homepage": "' + replace.author.url + '"',
                    to: '"homepage": "' + config.author.url + '"'
                }
            ]
        },
        author_username: {
            src: [
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'Author: ' + replace.author.username,
                    to: 'Author: ' + config.author.username
                }
            ]
        },
        project_composer_name: {
            src: [
                'composer.json'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"name": "' + replace.project.composer.name + '"',
                    to: '"name": "' + config.project.composer.name + '"'
                }
            ]
        },
        project_composer_type: {
            src: [
                'composer.json'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"type": "' + replace.project.composer.type + '"',
                    to: '"type": "' + config.project.composer.type + '"'
                }
            ]
        },
        project_description: {
            src: [
                '*.php',
                '*.json',
                'README.md',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"description": "' + replace.project.description + '"',
                    to: '"description": "' + config.project.description + '"'
                },
                {
                    from: 'Description: ' + replace.project.description,
                    to: 'Description: ' + config.project.description
                },
                {
                    from: replace.project.description,
                    to: config.project.description
                }
            ]
        },
        project_git: {
            src: [
                'bower.json',
                'package.json'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"url": "' + replace.project.git + '"',
                    to: '"url": "' + config.project.git + '"'
                }
            ]
        },
        project_name: {
            src: [
                '*.php',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'Plugin Name: ' + replace.project.name,
                    to: 'Plugin Name: ' + config.project.name
                },
                {
                    from: 'Theme Name: ' + replace.project.name,
                    to: 'Theme Name: ' + config.project.name
                }
            ]
        },
        project_slug: {
            src: [
                'bower.json',
                'composer.json',
                'package.json',
                'README.md'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"name": "' + replace.project.slug + '"',
                    to: '"name": "' + config.project.slug + '"'
                },
                {
                    from: replace.project.slug + '.php',
                    to: config.project.slug + '.php'
                },
                {
                    from: replace.project.slug,
                    to: config.project.slug
                }
            ]
        },
        project_url: {
            src: [
                '*.php',
                'composer.json',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'GitHub Plugin URI: ' + replace.project.url,
                    to: 'GitHub Plugin URI: ' + config.project.url
                },
                {
                    from: 'GitHub Theme URI: ' + replace.project.url,
                    to: 'GitHub Theme URI: ' + config.project.url
                },
                {
                    from: '"homepage": "' + replace.project.url + '"',
                    to: '"homepage": "' + config.project.url + '"'
                },
                {
                    from: 'Plugin URI: ' + replace.project.url,
                    to: 'Plugin URI: ' + config.project.url
                },
                {
                    from: 'Theme URI: ' + replace.project.url,
                    to: 'Theme URI: ' + config.project.url
                }
            ]
        },
        project_version: {
            src: [
                '*.php',
                '*.json',

                config.paths.source + '/classes/*.php',

                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"version": "' + replace.project.version + '"',
                    to: '"version": "' + config.project.version + '"'
                },
                {
                    from: 'Version: ' + replace.project.version,
                    to: 'Version: ' + config.project.version
                },
                {
                    from: '$version = \'' + replace.project.version + '\'',
                    to: '$version = \'' + config.project.version + '\''
                }
            ]
        },
        translations_domain: {
            src: [
                '*.php',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'Text Domain: ' + replace.translations.domain,
                    to: 'Text Domain: ' + config.project.slug
                }
            ]
        },
        translations_path: {
            src: [
                '*.php',
                'style.css'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'Domain Path: /' + replace.translations.path,
                    to: 'Domain Path: /' + config.paths.translations
                }
            ]
        },
        update_author: {
            src: [
                replaceFile
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'email: \'' + replace.author.email + '\'',
                    to: 'email: \'' + config.author.email + '\''
                },
                {
                    from: 'name: \'' + replace.author.name + '\'',
                    to: 'name: \'' + config.author.name + '\''
                },
                {
                    from: 'url: \'' + replace.author.url + '\'',
                    to: 'url: \'' + config.author.url + '\''
                },
                {
                    from: 'username: \'' + replace.author.username + '\'',
                    to: 'username: \'' + config.author.username + '\''
                }
            ]
        },
        update_project: {
            src: [
                replaceFile
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'name: \'' + replace.project.composer.name + '\'',
                    to: 'name: \'' + config.project.composer.name + '\''
                },
                {
                    from: 'type: \'' + replace.project.composer.type + '\'',
                    to: 'type: \'' + config.project.composer.type + '\''
                },
                {
                    from: 'description: \'' + replace.project.description + '\'',
                    to: 'description: \'' + config.project.description + '\''
                },
                {
                    from: 'domain: \'' + replace.translations.domain + '\'',
                    to: 'domain: \'' + config.project.slug + '\''
                },
                {
                    from: 'git: \'' + replace.project.git + '\'',
                    to: 'git: \'' + config.project.git + '\''
                },
                {
                    from: 'name: \'' + replace.project.name + '\'',
                    to: 'name: \'' + config.project.name + '\''
                },
                {
                    from: 'path: \'' + replace.translations.path + '\'',
                    to: 'path: \'' + config.paths.translations + '\''
                },
                {
                    from: 'slug: \'' + replace.project.slug + '\'',
                    to: 'slug: \'' + config.project.slug + '\''
                },
                {
                    from: 'type: \'' + replace.project.type + '\'',
                    to: 'type: \'' + config.project.type + '\''
                },
                {
                    from: 'url: \'' + replace.project.url + '\'',
                    to: 'url: \'' + config.project.url + '\''
                },
                {
                    from: 'username: \'' + replace.project.username + '\'',
                    to: 'username: \'' + config.project.username + '\''
                },
                {
                    from: 'version: \'' + replace.project.version + '\'',
                    to: 'version: \'' + config.project.version + '\''
                }
            ]
        },
        update_translations: {
            src: [
                replaceFile
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: 'domain: \'' + replace.translations.domain + '\'',
                    to: 'domain: \'' + config.project.slug + '\''
                },
                {
                    from: 'path: \'' + replace.translations.path + '\'',
                    to: 'path: \'' + config.paths.translations + '\''
                }
            ]
        }
    });

};

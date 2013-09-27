module.exports = function (grunt) {
    'use strict';

    // Configure project.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    cleanBowerDir: true,
                    install: true,
                    targetDir: 'lib',
                    layout: 'byComponent',
                    verbose: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            site: {
                src: [
                    'lib/jquery/jquery.js',
                    'lib/bootstrap/bootstrap.js'
                ],
                dest: 'js/dev/site.js'
            },
            siteIE: {
                src: [
                    'lib/html5shiv/html5shiv.js',
                    'lib/html5shiv/html5shiv-printshiv.js',
                    'lib/respond/respond.src.js'
                ],
                dest: 'js/dev/ie.js'
            }
        },
        grunticon: {
            less: {
                options: {
                    cssdimensions: true,
                    cssprefix: '',
                    datapngcss: 'png.css',
                    datasvgcss: 'svg.css',
                    dest: 'images',
                    loadersnippet: 'loader.html',
                    previewhtml: 'preview.html',
                    src: 'grunticon',
                    svgo: true,
                    urlpngcss: 'fallback.css'
                }
            }
        },
        less: {
            site: {
                options: {
                    ieCompat: true,
                    paths: [
                        'less'
                    ],
                    report: 'gzip',
                    syncImport: true,
                    yuicompress: true
                },
                files: {
                    'css/site.min.css': 'less/site.less'
                }
            }
        },
        uglify: {
            options: {
                report: 'gzip'
            },
            site: {
                files: {
                    'js/site.min.js': [
                        'js/dev/site.js'
                    ]
                }
            },
            siteIE: {
                files: {
                    'js/ie.min.js': [
                        'js/dev/ie.js'
                    ]
                }
            }
        },
        watch: {
            less: {
                files: [
                    'less/*.less'
                ],
                tasks: ['less']
            },
            images: {
                files: [
                    'grunticon/*.png',
                    'grunticon/*.svg'
                ],
                tasks: ['grunticon']
            },
            js: {
                files: [
                    'lib/bootstrap/*.js',
                    'lib/html5shiv/*.js',
                    'lib/jquery/*.js',
                    'lib/respond/*.js'
                ],
                tasks: [
                    'concat',
                    'uglify'
                ]
            }
        }
    });

    // Load tasks.
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-grunticon');

    // Default task(s).
    grunt.registerTask('default', [
        'grunticon',
        'less',
        'concat',
        'uglify'
    ]);

};
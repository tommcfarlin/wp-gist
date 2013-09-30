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
            main: {
                src: [
                    'lib/jquery/jquery.js',
                    'lib/bootstrap/bootstrap.js'
                ],
                dest: 'js/uncompressed/script.js'
            },
            mainIE: {
                src: [
                    'lib/html5shiv/html5shiv.js',
                    'lib/html5shiv/html5shiv-printshiv.js',
                    'lib/respond/respond.src.js'
                ],
                dest: 'js/uncompressed/script-ie.js'
            }
        },
        grunticon: {
            main: {
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
            main: {
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
                    'css/style.min.css': 'less/style.less'
                }
            }
        },
        uglify: {
            options: {
                report: 'gzip'
            },
            main: {
                files: {
                    'js/script.min.js': [
                        'js/uncompressed/script.js'
                    ]
                }
            },
            mainIE: {
                files: {
                    'js/script-ie.min.js': [
                        'js/uncompressed/script-ie.js'
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

    // Default tasks.
    grunt.registerTask('default', [
        'grunticon',
        'less',
        'concat',
        'uglify'
    ]);

};
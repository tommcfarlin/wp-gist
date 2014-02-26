module.exports = function (grunt) {

    'use strict';

    grunt.config('grunticon', {
        images: {
            files: [{
                expand: true,
                cwd: 'grunticon',
                src: [
                    '*.png',
                    '*.svg'
                ],
                dest: 'images'
            }],
            options: {
                cssprefix: '.',
                datapngcss: 'png.css',
                datasvgcss: 'svg.css',
                loadersnippet: 'loader.html',
                previewhtml: 'preview.html',
                template: 'grunticon/template.hbs',
                urlpngcss: 'fallback.css'
            }
        }
    });

};
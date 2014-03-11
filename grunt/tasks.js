module.exports = function (grunt) {

    'use strict';

    // Default.
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    // Build.
    grunt.registerTask('build', [
        'clean:before',
        'concurrent:css',
        'concurrent:images',
        'concurrent:js',
        'concurrent:version',
        'clean:after'
    ]);

    // CSS.
    grunt.registerTask('css', [
        'newer:sass',
        'newer:cssmin'
    ]);

    // Images.
    grunt.registerTask('images', [
        'newer:svgmin',
        'newer:imagemin:grunticon',
        'grunticon',
        'newer:imagemin:images'
    ]);

    // JavaScript.
    grunt.registerTask('js', [
        'newer:jslint',
        'newer:concat',
        'newer:uglify'
    ]);

    // Versioning.
    grunt.registerTask('version', [
        'replace'
    ]);

};

module.exports = function (grunt) {

    'use strict';

    // Default task.
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    // Build task.
    grunt.registerTask('build', [
        'clean:before',
        'concurrent:css',
        'concurrent:images',
        'concurrent:js',
        'concurrent:version',
        'clean:after'
    ]);

    // CSS task.
    grunt.registerTask('css', [
        'newer:sass',
        'newer:cssmin'
    ]);

    // Images task.
    grunt.registerTask('images', [
        'newer:svgmin',
        'newer:imagemin:grunticon',
        'grunticon',
        'newer:imagemin:images'
    ]);

    // JavaScript task.
    grunt.registerTask('js', [
        'newer:jslint',
        'newer:concat',
        'newer:uglify'
    ]);

    // Versioning task.
    grunt.registerTask('version', [
        'replace'
    ]);

};

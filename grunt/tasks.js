module.exports = function (grunt) {

    'use strict';

    // Default task.
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    // Build task.
    grunt.registerTask('build', [
        'clean',
        'concurrent:css',
        'concurrent:js',
        'concurrent:version'
    ]);

    // CSS task.
    grunt.registerTask('css', [
        'newer:sass'
    ]);

    // JavaScript task.
    grunt.registerTask('js', [
        'newer:jslint'
    ]);

    // Versioning task.
    grunt.registerTask('version', [
        'replace'
    ]);

};

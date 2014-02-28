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
        'concurrent:version',
        'clean:after'
    ]);

    // CSS.
    grunt.registerTask('css', [
        'newer:sass',
        'newer:cssmin'
    ]);

    // Versioning.
    grunt.registerTask('version', [
        'replace'
    ]);

};

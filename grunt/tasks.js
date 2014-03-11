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
        'concurrent:bump',
        'clean:after'
    ]);

    // Bump.
    grunt.registerTask('bump', [
        'replace'
    ]);

    // CSS.
    grunt.registerTask('css', [
        'newer:sass',
        'newer:cssmin'
    ]);

};

module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		watch: {

			styles: {
				files: ['less/**/*.less'],
				tasks: ['less']
			},

		},

		less: {
			dist: {
				options: {
					yuicompress: true
				},
				files: {
				  "css/public.css": "less/public.less"
				}
			}
		}

	});

	grunt.registerTask( 'default', ['less'] );
};

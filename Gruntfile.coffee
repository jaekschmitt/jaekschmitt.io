module.exports = (grunt) ->

	grunt.initConfig

		compass: 
			dist: 
				options:
					sassDir: 'client/public/stylesheets/sass',
					cssDir: 'client/public/stylesheets/css'
		

		watch:
			compass:
				files: ['client/public/stylesheets/sass/**/*.scss'],
				tasks: ['compass']

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

	grunt.registerTask 'default', ['compass', 'watch']
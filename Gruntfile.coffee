module.exports = (grunt) ->

	grunt.initConfig

		compass: 
			dist: 
				options:
					sassDir: 'client/public/stylesheets/sass',
					cssDir: 'client/public/stylesheets/css'
		
		autoprefixer:
			dist:
				src: '<%= compass.dist.options.cssDir %>/site.css'
				dest: '<%= compass.dist.options.cssDir %>/site.css'
				options:
					browsers: ['last 2 versions']				

		watch:
			compass:
				files: ['client/public/stylesheets/sass/**/*.scss'],
				tasks: ['compass', 'autoprefixer']

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks)

	grunt.registerTask 'default', ['compass', 'autoprefixer', 'watch']
	grunt.registerTask 'build', ['compass', 'autoprefixer']
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
	
	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['concat']);
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('default', ['nodeunit']);
};
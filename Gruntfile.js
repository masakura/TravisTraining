module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'hoge.js']
    },

    jscs: {
      all: ['Gruntfile.js', 'hoge.js']
    }
  });

  grunt.registerTask('jscheck', ['jshint', 'jscs']);

  grunt.registerTask('test', function () {
    grunt.log.write('TEST!');
  });

  grunt.registerTask('fulltest', ['jscheck', 'test']);

  grunt.registerTask('default', ['fulltest']);
};

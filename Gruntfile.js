module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'hoge.js', 'spec/**/*.js']
    },

    jscs: {
      all: ['Gruntfile.js', 'hoge.js', 'spec/**/*.js']
    },

    'jasmine_node': { // jshint ignore:line
      all: ['spec']
    }
  });

  grunt.registerTask('jscheck', ['jshint', 'jscs']);

  grunt.registerTask('test', ['jasmine_node']);

  grunt.registerTask('fulltest', ['jscheck', 'test']);

  grunt.registerTask('default', ['fulltest']);
};

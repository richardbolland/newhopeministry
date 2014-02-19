(function () {
  'use strict';

  module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.config('jshint', {
      options: {
        globals: {
          module: true,
          require: true
        },
      },
      files: ['gruntfile.js']
    });

    grunt.config('csslint', {
      options: {
        'adjoining-classes': false
      },
      files: ['css/main.css']
    });

    grunt.registerTask('default', ['jshint', 'csslint']);
    grunt.registerTask('test', ['default']);
  };
}());

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
      main: ['gruntfile.js']
    });

    grunt.config('csslint', {
      options: {
        'adjoining-classes': false
      },
      main: ['css/main.css']
    });

    grunt.config('clean', {
      main: ['distribute']
    });

    grunt.config('copy', {
      main: {
        files: [
          {
            expand : true,
            cwd    : 'source',
            src    : ['**', '**/.*'],
            dest   : 'distribute'
          }
        ]
      }
    });

    grunt.registerTask('default', ['test', 'clean', 'copy']);
    grunt.registerTask('test', ['jshint', 'csslint']);
  };
}());

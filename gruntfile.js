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
      main: ['gruntfile.js', 'test/**/*.js']
    });

    grunt.config('csslint', {
      options: {
        'adjoining-classes': false
      },
      main: ['css/main.css']
    });

    grunt.config('nodeunit', {
      main: ['test/**/*.js'],
      options: {
        //
      }
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

    grunt.config('connect', {
      server: {
        options: {
          base: 'source',
          open: true,
          port: 1337,
          livereload: true
        }
      }
    });

    grunt.config('watch', {
      build: {
        files: [
          'source/css/*.css',
          'source/js/*.js',
          'source/img/*.js',
          'source/index.html',
        ],
        tasks: [],
        options: {
          livereload: true
        }
      }
    });

    grunt.registerTask('default', ['test', 'clean', 'copy']);
    grunt.registerTask('test', ['jshint', 'csslint', 'nodeunit']);
    grunt.registerTask('serve', ['connect', 'watch']);
  };
}());

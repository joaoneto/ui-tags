module.exports = function (grunt) {
  var env = process.env.CI ? 'continuous' : 'unit';

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      unit: {
      },
      continuous: {
        autoWatch: false,
        singleRun: true
      }
    },
    uglify: {
      build: {
        files: {
          'build/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['src/**'], dest: 'build/', filter: 'isFile' }
        ]
      }
    },
    clean: {
      build: {
        src: ['build']
      }
    },
  });

  grunt.registerTask('test', ['karma:' + env]);
  grunt.registerTask('build', ['clean:build', 'uglify', 'copy']);
  grunt.registerTask('default', ['test']);
};

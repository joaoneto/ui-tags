module.exports = function (grunt) {
  var env = process.env.CI ? 'continuous' : 'unit';

  grunt.loadNpmTasks('grunt-karma');

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
    }
  });

  grunt.registerTask('test', ['karma:' + env]);
  grunt.registerTask('default', ['test']);
};

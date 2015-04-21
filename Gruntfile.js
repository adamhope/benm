module.exports = function(grunt) {

    var path = require('path');

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {

      data: {
        pkg: grunt.file.readJSON('package.json')
      }

    });

    grunt.registerTask('inputHandler', function() {
      grunt.task.run(grunt.config('selectedTask'));
    });

};

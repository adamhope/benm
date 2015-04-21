module.exports = {
    scripts: {
        files: ['client/templates/*.hbs', 'client/src/**/*.js'],
        tasks: ['clean:dev', 'browserify:app', 'concat', 'copy:dev']
    },
    less: {
        files: ['client/styles/**/*.less'],
        tasks: ['less:transpile', 'copy:dev']
    },
    test: {
        files: ['build/app.js', 'client/spec/**/*.test.js'],
        tasks: ['browserify:test']
    },
    karma: {
        files: ['build/tests.js'],
        tasks: ['jshint:test', 'karma:watcher:run']
    }
};

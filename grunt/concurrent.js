module.exports = {
    dev: {
        tasks: ['nodemon:dev', 'shell:mongo', 'watch:scripts', 'watch:less', 'watch:test'],
        options: {
            logConcurrentOutput: true
        }
    },
    test: {
        tasks: ['watch:karma'],
        options: {
            logConcurrentOutput: true
        }
    }
};

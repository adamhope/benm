module.exports = {
    options: {
        globals: ['expect', 'sinon'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
    },

    server: {
        src: ['spec/spechelper.js', 'spec/**/*.test.js']
    }
};

module.exports = {
    transpile: {
        files: {
            'build/<%= pkg.name %>.css': [
                'client/styles/normalize.min.css',
                'client/requires/*/css/*',
                'client/styles/less/main.less'
            ]
        }
    }
};

module.exports = {
    dev: {
        options: {
            file: 'server.js',
            nodeArgs: ['--debug'],
            watchedFolders: ['controllers', 'app'],
            env: {
                PORT: '3300'
            }
        }
    }
};

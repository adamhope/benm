module.exports = {
    dev: {
        files: [{
            src: 'build/<%= pkg.name %>.js',
            dest: 'public/js/<%= pkg.name %>.js'
        }, {
            src: 'build/<%= pkg.name %>.css',
            dest: 'public/css/<%= pkg.name %>.css'
        }, {
            src: 'client/img/*',
            dest: 'public/img/'
        }]
    },
    prod: {
        files: [{
            src: ['client/img/*'],
            dest: 'dist/img/'
        }]
    }
};

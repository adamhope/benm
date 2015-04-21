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
        }, {
            expand: true,
            cwd: 'client',
            src: 'fonts/*',
            dest: 'public/'
        }]
    },
    prod: {
        files: [{
            src: ['client/img/*'],
            dest: 'dist/img/'
        },{
            src: ['client/fonts/*'],
            dest: 'dist/fonts/'
        }]
    }
};

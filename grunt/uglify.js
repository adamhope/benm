module.exports = {
    compile: {
        options: {
            compress: true,
            verbose: true
        },
        files: [{
            src: 'build/<%= pkg.name %>.js',
            dest: 'dist/js/<%= pkg.name %>.js'
        }]
    }
};

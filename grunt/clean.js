module.exports = {
    build: ['build'],
    dev: {
        src: ['build/app.js', 'build/<%= pkg.name %>.css', 'build/<%= pkg.name %>.js']
    },
    prod: ['dist']
};


module.exports ={
    vendor: {
        src: ['client/requires/**/*.js'],
        dest: 'build/vendor.js',
        options: {
            shim: {
                jquery: {
                    path: 'client/requires/jquery/js/jquery.js',
                    exports: '$'
                },
                underscore: {
                    path: 'client/requires/underscore/js/underscore.js',
                    exports: '_'
                },
                backbone: {
                    path: 'client/requires/backbone/js/backbone.js',
                    exports: 'Backbone',
                    depends: {
                        underscore: 'underscore'
                    }
                },
                'backbone.marionette': {
                    path: 'client/requires/backbone.marionette/js/backbone.marionette.js',
                    exports: 'Marionette',
                    depends: {
                        jquery: '$',
                        backbone: 'Backbone',
                        underscore: '_'
                    }
                }
            }
        }
    },
    app: {
        files: {
            'build/app.js': ['client/src/main.js']
        },
        options: {
            transform: ['hbsfy'],
            external: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
        }
    },
    test: {
        files: {
            'build/tests.js': [
                'client/spec/**/*.test.js'
            ]
        },
        options: {
            transform: ['hbsfy'],
            external: ['jquery', 'underscore', 'backbone', 'backbone.marionette']
        }
    }
};

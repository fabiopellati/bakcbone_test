requirejs.config({
    baseUrl: 'js/app',
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
        ],
        backbone: [
            'http://backbonejs.org/backbone'
        ],
        underscore: [
            'http://underscorejs.org/underscore'
        ],
        text: [
            'https://raw.githubusercontent.com/requirejs/text/latest/text'
        ]
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});
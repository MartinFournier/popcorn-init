require.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    paths: {
        'jquery': '3rd/jquery/dist/jquery',
        'underscore': '3rd/underscore/underscore',
        'backbone': '3rd/backbone/backbone',
        'marionette': '3rd/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '3rd/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '3rd/backbone.babysitter/lib/amd/backbone.babysitter',
        'handlebars': '3rd/handlebars/handlebars',
        'hbs': '3rd/require-handlebars-plugin/hbs',
        'localstorage': '3rd/backbone.localStorage/backbone.localStorage',
        'semantic': '3rd/semantic/build/packaged/javascript/semantic'
    }
})

require(['app'], function (app) {
    app.start();
});
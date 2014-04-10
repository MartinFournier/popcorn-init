define(['jquery', 'marionette', 'backbone', 'semantic'], function ($, Marionette, Backbone, Semantic) {
    var app = new Marionette.Application();

    app.addInitializer(function () {
        $('#menu-help').bind('click', app.showHelp)
    });

    app.showHelp = function () {
        $('#modal-help').modal('show');
    }

    return app;
});
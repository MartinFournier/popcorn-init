define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'entities/characters/characterCollection',
    'views/characters',
], function ($, Marionette, Backbone, Semantic, CharactersCollection, CharacterCollectionView) {
    var app = new Marionette.Application();
    window.app = app;

    app.characters = new CharactersCollection();
    app.charactersView = new CharacterCollectionView({
        el: '#container-characters',
        collection: app.characters
    });

    app.addInitializer(function () {
        $('#menu-help').bind('click', app.showHelp)
        $('#button-add-character').bind('click', function () {
            app.characters.addNew();
        });
        app.characters.populate();
    });

    app.showHelp = function () {
        $('#modal-help').modal('show');
    }

    return app;
});
define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'entities/characters/characterCollection',
    'views/characters',
], function ($, Marionette, Backbone, Semantic, CharactersCollection, CharacterCollectionView) {
    var app = new Marionette.Application();

    app.addInitializer(function () {
        $('#menu-help').bind('click', app.showHelp)

        var characters = new CharactersCollection();
        var characterView = new CharacterCollectionView({
            el: '#container-characters',
            collection: characters
        });

        characters.add([{ name: "Dummy Guy One" }, { name: "Dummy Guy Two" }]);
        characters.each(function (model) {
            model.save();
        });
    });

    app.showHelp = function () {
        $('#modal-help').modal('show');
    }

    return app;
});
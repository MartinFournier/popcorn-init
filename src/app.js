define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'entities/characters/characterCollection',
    'entities/combat/combatModel',
    'views/characters',
    'views/combat'
], function (
    $, 
    Marionette, 
    Backbone, 
    Semantic, 
    CharactersCollection,
    CombatModel,
    CharacterCollectionView,
    CombatView    
) {
    var app = new Marionette.Application();
    window.app = app;

    app.characters = new CharactersCollection();
    app.charactersView = new CharacterCollectionView({
        el: '#container-characters',
        collection: app.characters
    });

    app.combat = new CombatModel();
    app.combat.characters = app.characters;

    app.combatView = new CombatView({
        el: '#container-combat',
        model: app.combat
    });

    app.addInitializer(function () {
        $('#menu-help').bind('click', app.showHelp)
        $('#button-add-character').bind('click', function () {
            app.characters.addNew();
        });

        app.combat.initialize();
        app.characters.populate();
        app.combatView.render();
    });

    app.showHelp = function () {
        $('#modal-help').modal('show');
    }

    return app;
});
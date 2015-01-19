define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'entities/characters/characterCollection',
    'entities/combat/combatModel',
    'entities/help/helpModel',
    'views/characters',
    'views/combat',
    'views/help'
], function (
    $,
    Marionette,
    Backbone,
    Semantic,
    CharactersCollection,
    CombatModel,
    HelpModel,
    CharacterCollectionView,
    CombatView,
    HelpView
) {
    var app = new Marionette.Application();
    window.app = app;

    app.help = new HelpModel();
    app.helpView = new HelpView({
        el: '#container-help',
        model: app.help
    });

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
        $('#button-add-character').bind('click', function () {
            app.characters.addNew();
        });

        //app.helpView.initialize();
        app.helpView.render();
        app.combat.initialize();
        app.characters.populate();
        app.combatView.render();
    });

    return app;
});

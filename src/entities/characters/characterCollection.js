define([
    "backbone",
    "localstorage",
    "entities/characters/characterModel"
], function (Backbone, LocalStorage, CharacterModel) {
    var CharacterCollection = Backbone.Collection.extend({
        model: CharacterModel,
        localStorage: new Backbone.LocalStorage("CharacterCollection")
    });

    return CharacterCollection;
});
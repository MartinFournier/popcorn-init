define([
    "backbone",
    "localstorage",
    "entities/characters/characterModel"
], function (Backbone, LocalStorage, CharacterModel) {
    var CharacterCollection = Backbone.Collection.extend({
        model: CharacterModel,
        localStorage: new Backbone.LocalStorage("CharacterCollection")
    });

    CharacterCollection.prototype.saveAll = function () {
        this.each(function (model) {
            model.save();
        });
    }

    CharacterCollection.prototype.defaultCharacters = function () {
        this.add([
            { name: "Dummy Guy One" },
            { name: "Dummy Guy Two" }
        ]);
    }

    CharacterCollection.prototype.populateSuccess = function(context) {
        if (context.length === 0) {
            context.defaultCharacters();
        }
    }

    CharacterCollection.prototype.populate = function () {
        this.fetch({
            success: this.populateSuccess,
            error: this.defaultCharacters
        });
    }

    return CharacterCollection;
});
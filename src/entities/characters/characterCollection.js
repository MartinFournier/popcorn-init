define([
    "backbone",
    "localstorage",
    "entities/characters/characterModel"
], function (Backbone, LocalStorage, CharacterModel) {
    var CharacterCollection = Backbone.Collection.extend({
        model: CharacterModel,
        localStorage: new Backbone.LocalStorage("CharacterCollection"),

        addNew: function () {
            this.add([{ name: "" }]);
        },

        saveAll: function () {
            this.each(function (model) {
                model.save();
            });
        },

        defaultCharacters: function () {
            this.add([
                { name: "Dummy Guy One" },
                { name: "Dummy Guy Two" }
            ]);
        },

        populate: function () {
            this.fetch({
                success: this.populateSuccess,
                error: this.defaultCharacters
            });
        },

        populateSuccess: function (context) {
            if (context.length === 0) {
                context.defaultCharacters();
            }
        },

        resetState: function () {
            this.each(function (model) {
                model.resetState();
            });
        },

        resetCombat: function () {
            this.each(function (model){
                model.resetCombat();
            });
        }
    });

    return CharacterCollection;
});

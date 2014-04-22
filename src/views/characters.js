define([
    "marionette",
    "hbs!views/templates/character"
], function (Marionette, characterTemplate) {
    var CharacterView = Marionette.ItemView.extend({
        template: characterTemplate,
        className: "item",

        events: {
            'keyup .character-name': 'editName',
            'click .remove-character': 'removeCharacter'
        },

        editName: function (e) {
            var val = e.target.value;
            this.model.set('name', val);
            this.model.save();
        },

        removeCharacter: function (e) {
            this.model.destroy();
        }
    });

    var CharacterCollectionView = Marionette.CollectionView.extend({
        itemView: CharacterView
    });

    return CharacterCollectionView;
});
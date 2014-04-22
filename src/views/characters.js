define([
    "marionette",
    "hbs!views/templates/character"
], function (Marionette, characterTemplate) {
    var CharacterView = Marionette.ItemView.extend({
        template: characterTemplate,
        className: "item",

        events: {
            'keyup .character-name': 'editName',
            'click .remove-character': 'removeCharacter',
            'click .button-status': 'nextStatus'
        },

        editName: function (e) {
            var val = e.target.value;
            this.model.set('name', val);
            this.model.save();
        },

        removeCharacter: function (e) {
            this.model.destroy();
        },

        nextStatus: function (e) {
            this.model.nextStatus();
            this.render();
            this.model.save();
        }
    });

    var CharacterCollectionView = Marionette.CollectionView.extend({
        itemView: CharacterView
    });

    return CharacterCollectionView;
});
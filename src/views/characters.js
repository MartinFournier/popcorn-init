define([
    "marionette",
    "hbs!views/templates/character"
], function (Marionette, characterTemplate) {
    var CharacterView = Marionette.ItemView.extend({
        template: characterTemplate,
        className: "item",

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
    });

    var CharacterCollectionView = Marionette.CollectionView.extend({
        itemView: CharacterView
    });

    return CharacterCollectionView;
});
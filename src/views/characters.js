define([
    "marionette",
    "hbs!views/templates/character"
], function (Marionette, characterTemplate) {
    var CharacterView = Marionette.ItemView.extend({
        template: characterTemplate,
        className: "item",

        events: {
            'keyup .character-name': 'editName',
            'keyup .character-hp': 'editHp',
            'click .remove-character': 'removeCharacter',
            'click .button-status': 'nextStatus',
            'click .button-character-type': 'nextType',
            'click .character-options': 'showOptions',
            'click .button-character-hp': 'doDamage'
        },

        modelEvents: {
            'resetState': 'render'
        },

        editName: function (e) {
            var val = e.target.value;
            this.model.set('name', val);
            this.model.save();
        },

        editHp: function(e) {
            var val = e.target.value;
            this.model.set('hp', val);
            this.model.save();
        },

        serializeData: function () {
            var data = this.model.toJSON();
            data.status = this.model.getStatus();
            data.type = this.model.getType();
            return data;
        },

        removeCharacter: function () {
            var name = this.model.get('name');
            if (!name) name = "no-name dude"
            var doDelete = confirm(
                'Are you sure you want to remove ' + name + '?'
            );

            if (doDelete) this.model.destroy();
        },

        nextStatus: function () {
            this.model.nextStatus();
            this.saveAndRender();
        },

        nextType: function () {
            this.model.nextType();
            this.saveAndRender();
        },

        doDamage: function() {
            var damage = parseInt(prompt('Enter damage taken'));
            var actualHp = this.model.get('hp');
            var newHp = actualHp - damage;
            this.model.set('hp', newHp);
            this.saveAndRender();
        },

        saveAndRender: function() {
            this.render();
            this.model.save();
        }
    });

    var CharacterCollectionView = Marionette.CollectionView.extend({
        itemView: CharacterView
    });

    return CharacterCollectionView;
});

define([
    'underscore',
    'backbone',
    "localstorage"
], function (_, Backbone, LocalStorage) {
    var CombatModel = Backbone.Model.extend({
        defaults: {
            turn: 1,
            id: 1
        },
        localStorage: new Backbone.LocalStorage("Combat"),

        initialize: function () {
            this.fetch();
            this.save();
        },

        nextTurn: function () {
            var turn = this.get('turn');
            turn++;
            this.set('turn', turn);
            this.save();
        },

        resetCombat: function () {
            this.set('turn', 1);
            this.save();
        }
    });

    return CombatModel;
});
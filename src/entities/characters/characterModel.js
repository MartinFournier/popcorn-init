define([
    'underscore',
    'backbone',
    'entities/characters/characterStatuses',
    'entities/characters/characterTypes'
], function (_, Backbone, characterStatuses, characterTypes) {
    var CharacterModel = Backbone.Model.extend({
        defaults: {
            statusId: 0,
            typeId: 0
        },

        cycleItem: function(key, collection) {
            var i = this.get(key);
            i++;
            if (i >= collection.length) {
                i = 0;
            }
            this.set(key, i);
        },

        getItem: function(key, collection) {
            var i = this.get(key);
            return collection[i];
        },

        nextStatus: function () {
            this.cycleItem('statusId', characterStatuses);
        },

        getStatus: function () {
            return this.getItem('statusId', characterStatuses);
        },

        nextType: function() {
            this.cycleItem('typeId', characterTypes);
        },

        getType: function() {
            return this.getItem('typeId', characterTypes);
        },

        resetState: function() {
            var currentStatus = this.getStatus();
            if (currentStatus.sticky) return;
            this.resetCombat();
        },

        resetCombat: function() {
            this.set('statusId', 0);
            this.save();
            this.trigger('resetState');
        },

        getFavorite: function() {
            return this.get('isFavorite');
        },

        setFavorite: function(val) {
            this.set('isFavorite', val);
        },

        isDisabled: function() {
            return this.getStatus().disabled;
        }
    });

    return CharacterModel;
});

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var statuses = [
        { color: 'teal', icon: 'gamepad', text: 'Ready' },
        { color: 'black', icon: 'ok sign', text: 'Played' },
        { color: 'orange', icon: 'hide', text: 'Waiting' }
    ]

    var CharacterModel = Backbone.Model.extend({
        defaults: {
            statusId: 0,
        },

        nextStatus: function () {
            var i = this.get('statusId')
            i++;
            if (i >= statuses.length) {
                i = 0;
            }
            this.set('statusId', i);
        },

        getStatus: function () {
            var i = this.get('statusId');
            return statuses[i];
        },

        resetState: function() {
            this.set('statusId', 0);
            this.save();
            this.trigger('resetState');
        }
        
    });

    return CharacterModel;
});
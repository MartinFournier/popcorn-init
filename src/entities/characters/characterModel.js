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
            idxStatus: 0,
            status: statuses[0]
        },

        nextStatus: function () {
            var i = this.get('idxStatus')
            i++;
            if (i > statuses.length - 1) {
                i = 0;
            }
            this.set('idxStatus', i);
            this.set('status', statuses[i]);
        }
    });

    return CharacterModel;
});
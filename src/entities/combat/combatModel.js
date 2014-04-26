define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var CombatModel = Backbone.Model.extend({
        defaults: {
            turn: 0
        }
    });

    return CombatModel;
});
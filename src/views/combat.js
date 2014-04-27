define([
    "marionette",
    "hbs!views/templates/combat"
], function (Marionette, combatTemplate) {
    var CombatView = Marionette.ItemView.extend({
        template: combatTemplate,

        events: {
            'click #combat-reset': 'reset',
            'click #combat-next': 'next'
        },
        
        reset: function () {
            this.model.resetCombat();
            this.render();
        },

        next: function () {
            this.model.nextTurn();
            this.render();
        }
    });
    return CombatView;
});
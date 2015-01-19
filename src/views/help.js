define([
    "marionette",
    "hbs!views/templates/help"
], function (Marionette, helpTemplate) {
    var HelpView = Marionette.ItemView.extend({
        template: helpTemplate,

        events: {
            'click #menu-help': 'showHelp'
        },

        showHelp: function () {
            $('#modal-help').modal('show');
        },

        /*initialize: function() {
            console.log('init');
            this.render();
            console.log(this.$el);
        }*/
    });

    return HelpView;
});

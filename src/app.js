define(['jquery', 'marionette', 'backbone'], function ($, Marionette, Backbone) {
    var app = new Marionette.Application();
    
    app.addInitializer(function(){
      console.log('init.');
    });
    
    return app;
});
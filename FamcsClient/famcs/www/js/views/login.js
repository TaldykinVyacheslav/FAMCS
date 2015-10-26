/**
 * Created by zegoline on 25.10.15.
 */

var app = app || {};

(function ($) {
  'use strict';

  app.LoginView = Backbone.View.extend({
    events: {
      "click #loginButton": "login"
    },

    render: function() {
      $(this.el).html(this.template());
      return this;
    },

    login: function(event) {
      event.preventDefault();
      console.log('Logging in...');

      var url = 'http://famcs.azurewebsites.net/api/v1/users/Login';
      var formValues = {
        UserName: "admin",
        Password: "password",
        RememberMe: "false"
      };

      /*$.ajax({
        url: url,
        type: 'POST',
        dataType: "json",
        data: formValues,
        success: function(data) {
          console.log('Login successful');
        },
        error
      });*/


    }



  });
})();
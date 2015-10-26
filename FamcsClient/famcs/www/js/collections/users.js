/**
 * Created by zegoline on 19.10.15.
 */

var app = app || {};

(function() {
  'use strict';

  var Users = Backbone.Collection.extend({
    model : app.User
  });

  app.Users = new Users();
})();
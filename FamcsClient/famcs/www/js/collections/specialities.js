/**
 * Created by zegoline on 19.10.15.
 */

var app = app || {};

(function() {
  'use strict';

  var Specialities = Backbone.Collection.extend({
    model : app.Speciality
  });

  app.Specialities = new Specialities();
})();
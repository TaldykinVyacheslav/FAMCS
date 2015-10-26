/**
 * Created by zegoline on 19.10.15.
 */

var app = app || {};

(function() {
  'use strict';

  var Departments = Backbone.Collection.extend({
    model : app.Department
  });

  app.Departments = new Departments();
})();
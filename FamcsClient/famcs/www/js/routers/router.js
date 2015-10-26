/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  // Todo Router
  // ----------
  var FamcsRouter = Backbone.Router.extend({
    routes: {
      '':             'index',
      'trips':        'trips',
      'trips/new':    'newTrip',
      'trips/:id':    'showTrip'
    },

    index: function() {
      var faculty = new app.
      $('#content').empty().append(faculty);
    }
  });

  app.FamcsRouter = new FamcsRouter();
  Backbone.history.start();
})();
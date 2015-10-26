/**
 * Created by zegoline on 25.10.15.
 */


var app = app || {};

(function ($) {
  'use strict';

  app.NavBar = Backbone.View.extend({
    initialize:function(options){
      Backbone.history.on('route',function(source, path){
        this.render(path);
      }, this);
    },
    //This is a collection of possible routes and their accompanying
    //user-friendly titles
    titles: {
      "":"Home",
      "adventure":"Adventure",
      "contact":"Contact"
    },
    events:{
      'click a':function(source) {
        var hrefRslt = source.target.getAttribute('href');
        Backbone.history.navigate(hrefRslt, {trigger:true});
        //Cancel the regular event handling so that we won't actual change URLs
        //We are letting Backbone handle routing
        return false;
      }
    },
    //Each time the routes change, we refresh the navigation
    //items.
    render:function(route){
      this.$el.empty();
      var template = _.template("<li class='<%=active%>'><a href='<%=url%>'><%=visible%></a></li>");
      for (var key in this.titles)
      {
        this.$el.append(template({url:key,visible:this.titles[key],active:route === key ? 'active' : ''}));
      }
    }
  });
})();
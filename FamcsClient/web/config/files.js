/*
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: files.js
 */

/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/js/jquery.js",
        "vendor/js/angular.js",
        "vendor/js/angular-*.js",
        "vendor/js/jquery-*.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ],
      "concatenated": "generated/js/app.js",
      "concatenatedSpec": "generated/js/spec.js"
    },
    css: {
      "concatenated": "generated/css/app.css"
    },
    less: {
      "generated": "generated/css/app.less.css",
      compile: {
        options: {
          paths: ["vendor/css/**/*.css", "app/css/**/*.less"]
        }
      }
    },
    "ngtemplates": {
      "dest": "generated/angular/template-cache.js"
    }
  };
};

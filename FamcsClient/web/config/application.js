/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    // grunt-angular-templates assumes your module is named "app", but
    // you can override it like so:
    //
    // ngtemplates: {
    //   options: {
    //     module: "myModuleName"
    //   }
    // }

    server: {
      pushState: true,
      // API Proxying
      //
      // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
      // port as your lineman development server. By enabling the API proxy and setting the port, all
      // requests for paths that don't match a static asset in ./generated will be forwarded to
      // whatever service might be running on the specified port.
      //
      apiProxy: {
        prefix: 'api/v1',
        enabled: true,
        host: 'famcs.azurewebsites.net',
        port: 80
      },

      liveReload: {
        enabled: true,
        port: 35730
      }
    },

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: true

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

    // Copy source-map from generated to dist
    copy: {
      dev: {
        "files": [
          {
            "expand": true,
            "cwd": "vendor/static",
            "src": "**",
            "dest": "generated"
          },
          {
            "expand": true,
            "cwd": "app/static",
            "src": "**",
            "dest": "generated"
          }
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: "vendor/static",
          src: "**",
          dest: "dist"
        }, {
          expand: true,
          cwd: "app/static",
          src: "**",
          dest: "dist"
        }, {
          expand: true,
          cwd: "generated/js",
          src: "app.js.map",
          dest: "dist/js"
        }]
      }
    },

    images: {
      "dev": {
        "dest": "generated"
      }
    },

    jshint: {
      options: {
        latedef: false
      }
    },

    livereload: true
  };
};

angular.module("app", ["ngResource", "ngRoute", "ngCookies", "ui.bootstrap"])
    .run(['$rootScope', '$location', 'AuthenticationService', function($rootScope, $location, AuthenticationService) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };

  // global routing handling
  $rootScope.$on("$locationChangeStart", function (event) {
    $rootScope.showNavBar = true;

    if ($location.path() === '/loading') {
      // just skip it
    } else if(AuthenticationService.isLoggedIn()) {
      var path = $location.path() === '/login' ? '/home' : $location.path();

      if (AuthenticationService.getCurrentUser().$resolved) {
        if ($location.path() === '/login') {
          // if logged in => redirect from login to home page...
          $location.path(path).replace();
        }
      } else {
        // ... but first wait until user is loaded
        $location.path('/loading');
        AuthenticationService.getCurrentUser().$promise.then(function() {
          $location.path(path).replace();
        });
      }

    } else if (!AuthenticationService.isLoggedIn()) {
      // if not logged in => redirect to login
      $rootScope.showNavBar = false;
      $location.path('/login');
    }
  });
}]);

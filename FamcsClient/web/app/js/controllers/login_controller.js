/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: login_controller.js
 */

angular.module("app").controller('LoginController', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLogin = function(response) {
    var responseStr = '';

    for(var i = 0; i < 'Succeeded'.length; i++) {
      responseStr += response[i] || '';
    }

    if(responseStr === 'Succeeded') {
      $location.path('home');
    } else {
      $scope.error = true;
    }
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).$promise.then(onLogin);
  };
});

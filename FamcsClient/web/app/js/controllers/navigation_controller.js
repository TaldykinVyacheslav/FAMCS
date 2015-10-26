/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: home_controller.js
 */

angular.module("app").controller('NavigationController', function($scope, $location, AuthenticationService) {

  AuthenticationService.addLoginHandler(function () {
    $scope.currentUser = AuthenticationService.getCurrentUser();
  });

  AuthenticationService.addLogoutHandler(function () {
    $scope.currentUser = null;
  });

  $scope.logout = function () {
    $scope.isCollapsed = true;
    AuthenticationService.logout();
    $location.path('login');
  };
});

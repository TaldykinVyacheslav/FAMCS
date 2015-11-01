/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: home_controller.js
 */

angular.module("app").controller('HomeController',
    ['$scope',
function($scope) {
  $scope.logout = function () {
    $scope.isCollapsed = true;
    AuthenticationService.logout();
    $location.path('/login');
  };
}]);
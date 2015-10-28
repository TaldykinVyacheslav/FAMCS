/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: home_controller.js
 */

angular.module("app").controller('GeneralController',
    ['$scope', '$location', '$interval', 'AuthenticationService', 'DateService', 'SynchroResource',
      'settings', 'lastSyncReport', 'syncStatus',
      function($scope, $location, $interval, AuthenticationService, DateService, SynchroResource,
               settings, lastSyncReport, syncStatus)
{
  $scope.logout = function () {
    $scope.isCollapsed = true;
    AuthenticationService.logout();
    $location.path('/login');
  };
}]);
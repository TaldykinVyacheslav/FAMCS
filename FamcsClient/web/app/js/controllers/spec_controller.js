/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: settings_controller.js
 */

angular.module("app").controller('SpecController',
['$scope', 'specialities',
  function($scope, specialities) {
    $scope.specialities = specialities;
  }
]);
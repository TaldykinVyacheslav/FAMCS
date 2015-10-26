/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: history_details_controller.js
 */

angular.module("app").controller('HistoryDetailsController', ['$scope', 'statisticsDetails', function($scope, statisticsDetails) {
  $scope.statisticsDetails = statisticsDetails;
}]);
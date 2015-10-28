/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: history_controller.js
 */

angular.module("app").controller('HistoryController', [
  '$scope', 'DateService', 'HistoryResource', 'reports', 'reportsSize',
function($scope, DateService, HistoryResource, reports, reportsSize) {
  $scope.reports = reports;
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.pagesNumber = Math.ceil(reportsSize / $scope.pageSize);
  $scope.pagesLabels = _.range(1, $scope.pagesNumber <= 5 ? ($scope.pagesNumber + 1) : 6);
  $scope.sortType = 'startTime';
  $scope.sortAsc = false;

  $scope.updateReports = function(pageNum, sortType, sortAsc) {
    var sortDir = sortAsc ? 'ASC' : 'DESC';
    $scope.currentPage = pageNum || $scope.currentPage;
    $scope.sortType = sortType || $scope.sortType;
    $scope.sortAsc = angular.isDefined(sortAsc) ? sortAsc : $scope.sortAsc;

    HistoryResource.list({pageNum : ($scope.currentPage - 1), orderBy: sortType, sortDir: sortDir}).$promise.then(function(response) {
      $scope.reports = response;
      formatReports($scope.reports);
    });
  };

  // format reports for table
  function formatReports(reports) {
    _.each(reports, function(report) {
      report.duration = report.status === 'FINISHED' ? DateService.fromIntervalToString(report.startTime, report.endTime) : '-';
      report.startTime = DateService.fromTimestampToString(report.startTime);
      report.endTime = report.status === 'FINISHED' ? DateService.fromTimestampToString(report.endTime) : '-';
      report.resourcesInvolved = report.status === 'FINISHED' ? report.resourcesInvolved : '-';
    });
  }

  formatReports($scope.reports);
}]);
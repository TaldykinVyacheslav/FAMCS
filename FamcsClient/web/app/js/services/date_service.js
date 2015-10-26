/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: timestamp_service.js
 */
angular.module("app").factory('DateService', [function() {
  return {
    fromTimestampToDate: function(timestamp) {
      return moment.unix(timestamp / 1000).startOf('minute').toDate();
    },
    fromDateToTimestamp: function(date){
      return date.getTime();
    },
    fromTimestampToString: function(timestamp) {
      return timestamp && moment.unix(timestamp / 1000).format('YYYY, Do MMMM, HH:mm');
    },
    fromIntervalToString: function(startTimestamp, endTimestamp) {
      return moment.utc(endTimestamp - startTimestamp).format("HH:mm:ss");
    }
  };
}]);

/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: history_resource.js
 */

angular.module("app").factory("HistoryResource", ['$resource', function($resource) {
  return $resource('/msc/api/history',
    { },
    {
      'list': {
        method: 'GET',
        isArray: true
      },
      'getSize': {
        method: 'GET',
        'url': '/msc/api/history/size',
        'interceptor': {
          response: function (response) {
            return response.data;
          }
        }
      }
    }
  );
}]);
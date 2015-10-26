/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: synchro_resource.js
 */

angular.module("app").factory("SynchroResource", ['$resource', function ($resource) {
  return $resource('/msc/api/sync', {},
    {
      'execute': {
        'method': 'POST',
        'url': '/msc/api/sync/execute'
      },
      'getSyncStatus': {
        'method': 'GET',
        'url': '/msc/api/sync/sync-status'
      },
      'getLastSyncReport': {
        'method': 'GET',
        'url': '/msc/api/sync/last-sync'
      }
    });
  }
]);
/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: settings_resource.js
 */

angular.module("app").factory("SettingsResource", ['$resource', function ($resource) {
  return $resource('/msc/api/settings', {} , { 'update': { method: 'PUT' } });
}]);
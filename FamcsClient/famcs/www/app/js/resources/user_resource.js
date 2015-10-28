/*
 * Marketo-Sage Connector (MSC)
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: user_resource.js
 */

angular.module("app").factory("UserResource", ['$resource', function ($resource) {
    return $resource(
      '/api/v1/user/get/:id',
      {id:'@id'},
      {
        login: {
          method: "POST",
          url: "/api/v1/user/login"
        }
      }
    );
}]);
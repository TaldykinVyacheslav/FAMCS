/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").factory("DepResource", ['$resource', function ($resource) {
  return $resource(
    '/api/v1/department/get/:id',
    {id:'@id'},
    {
      create: {
        method: "POST",
        url: "/api/v1/department/create"
      }
    }
  );
}]);
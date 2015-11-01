/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").factory("GrResource", ['$resource', function ($resource) {
  return $resource(
    '/api/v1/group/get/:id',
    {id:'@id'},
    {
      create: {
        method: "POST",
        url: "/api/v1/group/create"
      }
    }
  );
}]);
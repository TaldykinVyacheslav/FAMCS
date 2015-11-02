/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").factory("StudResource", ['$resource', function ($resource) {
  return $resource(
    '/api/v1/user/get/:id',
    {id:'@id'},
    {
      create: {
        method: "POST",
        url: "/api/v1/user/createStudent"
      },
      assign: {
        method: "POST",
        url: "api/v1/user/AssignStudentToGroup/:st_id/:gr_id",
        params: {gr_id:'@gr_id', st_id: '@st_id'}
      },
      getByGroup: {
        method: "GET",
        url: "api/v1/user/GetByGroupId/:id",
        params: {id: '@id'}
      }
    }
  );
}]);
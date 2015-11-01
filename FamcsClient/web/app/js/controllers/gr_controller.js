/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('GrController',[
  '$scope', 'groups',
  function($scope, groups) {
    $scope.groups = groups;
  }
]);

/**
 * Created by zegoline on 28.10.15.
 */

angular.module("app").controller('DepController',[
  '$scope', 'departments',
  function($scope, departments) {
    $scope.departments = departments.Result.slice(0, departments.Result.length - 1);
  }
]);

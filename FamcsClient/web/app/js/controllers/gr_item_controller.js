/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('GrItemController',[
  '$scope', 'addMode', 'gr', 'specialities', 'departments',
  function($scope, addMode, gr, specialities, departments) {
    $scope.addMode = addMode;
    $scope.gr = gr;
    $scope.specialities = specialities;
    $scope.departments = departments;
  }
]);

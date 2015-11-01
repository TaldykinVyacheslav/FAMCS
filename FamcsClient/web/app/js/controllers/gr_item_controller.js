/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('GrItemController',[
  '$scope', '$window', 'GrResource', 'addMode', 'gr', 'specialities', 'departments',
  function($scope, $window, GrResource, addMode, gr, specialities, departments) {
    $scope.addMode = addMode;
    $scope.gr = addMode ? gr : gr.Result;
    $scope.specialities = specialities.Result;
    $scope.departments = departments.Result.slice(0, departments.Result.length - 1);;

    $scope.save = function() {
      GrResource.create($scope.gr).$promise.then(function() {
        $window.history.back();
      });
    };

    $scope.cancel = function() {
      $window.history.back();
    };
  }
]);

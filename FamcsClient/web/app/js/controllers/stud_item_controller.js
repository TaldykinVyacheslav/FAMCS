/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('StudItemController',
  ['$scope', '$window', 'StudResource', 'addMode', 'stud', 'specialities', 'departments', 'groups',
    function($scope, $window, StudResource, addMode, stud, specialities, departments, groups) {
      $scope.addMode = addMode;
      $scope.stud = addMode ? stud : stud.Result;
      $scope.groups = groups.Result;
      $scope.specialities = specialities.Result;
      $scope.departments = departments.Result.slice(0, departments.Result.length - 1);
      $scope.studGroup = undefined;

      if(!addMode) {
        angular.forEach($scope.groups, function(group) {
          StudResource.getByGroup({id: group.Id}).$promise.then(function(response) {
            var students = response.Result;
            angular.forEach(students, function(stud) {
              if(stud.Id === $scope.stud.Id) {
                $scope.studGroup = group;
              }
            });
          });
        });
      }

      $scope.save = function() {
        StudResource.create($scope.stud).$promise.then(function(response) {
          var stud = response.Result;

          StudResource.assign({st_id: stud.Id, gr_id: $scope.studGroup.Id}).$promise.then(function() {
            $window.history.back();
          });
        });
      };

      $scope.cancel = function() {
        $window.history.back();
      };
    }
  ]);
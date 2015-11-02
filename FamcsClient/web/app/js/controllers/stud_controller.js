/**
 * Created by zegoline on 28.10.15.
 */

angular.module("app").controller('StudController',
  ['$scope', 'StudResource', 'SpecResource', 'DepResource', 'students', 'specialities', 'departments', 'groups',
    function($scope, StudResource, SpecResource, DepResource, students, specialities, departments, groups) {
      $scope.students = students.Result.slice(8, students.Result.length);
      $scope.groups = groups.Result;
      $scope.specialities = specialities.Result;
      $scope.departments = departments.Result.slice(0, departments.Result.length - 1);
      $scope.studGr = $scope.studSpec = $scope.studDep = undefined;

      // find dep, spec and group for each student
      angular.forEach($scope.students, function(stud) {

        angular.forEach($scope.groups, function(group) {
          StudResource.getByGroup({id: group.Id}).$promise.then(function(response) {
            var students = response.Result;
            angular.forEach(students, function(grStud) {
              if(grStud.Id === stud.Id) {
                stud.grId = group.Id;
                stud.depId = group.DepartmentId;
                stud.specId = group.SpecialtyId;

                stud.gr = group;

                SpecResource.get({id: stud.specId}).$promise.then(function(response) {
                  stud.spec = response.Result;
                });

                DepResource.get({id: stud.depId}).$promise.then(function(response) {
                  stud.dep = response.Result;
                });
              }
            });
          });
        });

      });
    }
  ]
);
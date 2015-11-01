/**
 * Created by zegoline on 28.10.15.
 */

angular.module("app").controller('StudController',
  ['$scope', 'students', 'specialities', 'departments', 'groups',
    function($scope, students, specialities, departments, groups) {
      $scope.students = students;
      $scope.groups = groups;
      $scope.departments = departments;
      $scope.specialities = specialities;
    }
  ]
);
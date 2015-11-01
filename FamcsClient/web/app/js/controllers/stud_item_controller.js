/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('StudItemController',
  ['$scope', 'addMode', 'stud', 'specialities', 'departments', 'groups',
    function($scope, addMode, stud, specialities, departments, groups) {
      $scope.addMode = addMode;
      $scope.stud = stud;
      $scope.groups = groups;
      $scope.departments = departments;
      $scope.specialities = specialities;
    }
  ]);
/**
 * Created by zegoline on 28.10.15.
 */

angular.module("app").controller('StudController',
  ['$scope', 'students',
    function($scope, students) {
      $scope.students = students;
    }
  ]
);
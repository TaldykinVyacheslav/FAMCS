/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('DepItemController',
  ['$scope', 'addMode', 'dep',
    function($scope, addMode, dep) {
      $scope.addMode = addMode;
      $scope.dep = dep;
    }
  ]);
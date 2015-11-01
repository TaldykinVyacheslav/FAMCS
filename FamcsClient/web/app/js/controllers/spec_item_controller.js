/**
 * Created by zegoline on 1.11.15.
 */

angular.module("app").controller('SpecItemController',
  ['$scope', 'addMode', 'spec',
    function($scope, addMode, spec) {
      $scope.addMode = addMode;
      $scope.spec = spec;
    }
  ]);
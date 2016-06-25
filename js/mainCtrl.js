angular.module('assessment', [])
  .controller('mainCtrl', function($scope, mainService) {

    $scope.products = mainService.getData();
  })

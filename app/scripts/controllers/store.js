'use strict';

/**
 * @ngdoc function
 * @name angularCommerceApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the angularCommerceApp
 */
angular.module('angularCommerceApp')
  .controller('StoreCtrl', function ($scope, $routeParams, DataService) {
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku !== null) {
      $scope.product = $scope.store.getProduct($routeParams.productSku);
    }

  });

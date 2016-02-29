

/**
 * @ngdoc overview
 * @name angularCommerceApp
 * @description
 * # angularCommerceApp
 *
 * Main module of the application.
 */
angular
  .module('angularCommerceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//$routeProvider.
//when('/store', {
//  templateUrl: 'partials/store.htm',
//  controller: storeController
//}).
//when('/products/:productSku', {
//  templateUrl: 'partials/product.htm',
//  controller: storeController
//}).
//when('/cart', {
//  templateUrl: 'partials/shoppingCart.htm',
//  controller: storeController
//}).
//otherwise({
//  redirectTo: '/store'
//});
//}]);


angular.module('assessment', ['ui.router'])
  .config(function($stateProvider, $urlRouteProvider) {

    $urlRouteProvider.otherwise('home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'views/blog.html'
      })

      .state('shop', {
        url: '/shop',
        templateUrl: 'views/shop.html',
        controller: 'mainCtrl'
      })
  });

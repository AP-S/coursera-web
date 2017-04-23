(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  console.log("Routes configuration execute");
  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  // Home
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
      categoryItems: ['MenuDataService',
            function (MenuDataService) {
              return MenuDataService.getAllCategories()
                .then(function (items) {
                  return items.data;
                });
            }]
    }
  })
  // .state('items', {
  //     url: '/items',
  //     templateUrl: 'src/items.template.html'
  //   });
    .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (items) {
                  return items.data.menu_items;
                });
            }]
    }
  });
}
console.log("menuapp module executed");
// var promise = MenuDataService.getAllCategories();
// console.log("promise", promise);

})();

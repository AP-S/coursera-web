(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

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
    templateUrl: 'src/categories/template/categories.template.html',
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
    .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/items/template/items.template.html',
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

})();

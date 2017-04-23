(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoryItems'];
function CategoriesController(categoryItems) {
  var categoryList = this;
  categoryList.categoryItems = categoryItems;
  console.log("CategoriesController categoryList.categoryItems", categoryList.categoryItems);

  categoryList.test = "controller's test";
}

})();

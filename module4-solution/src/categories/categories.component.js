(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories/template/categoriesList.template.html',
  bindings: {
    items: '<',
    test: '<'
  }
});

})();
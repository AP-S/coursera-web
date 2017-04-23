(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categoriesList.template.html',
  bindings: {
    items: '<',
    test: '<'
  }
});

})();
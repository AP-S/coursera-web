(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/items/template/itemsList.template.html',
  bindings: {
    items: '<'
  }
});

})();
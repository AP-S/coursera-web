(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/itemsList.template.html',
  bindings: {
    items: '<'
  }
});

})();
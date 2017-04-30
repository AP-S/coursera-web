(function () {
"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/user/userInfo.html',
  bindings: {
    user: '<'
  }
});
})();

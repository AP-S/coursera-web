(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['allMenuItems', 'RegistrationService'];
function RegistrationController(allMenuItems, RegistrationService) {
  var $ctrl = this;
  $ctrl.allMenuItems = allMenuItems;
  $ctrl.registrationService = RegistrationService;

  $ctrl.user = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    favoriteMenuItemCode: "",
    favoriteMenuItem: {}
  };

  $ctrl.notFound = false;
  $ctrl.userSaved = false;

  $ctrl.validateFavoriteMenuItemCode = function() {
    var found = false;
      allMenuItems.menu_items.forEach(function (item) {
        if (item.short_name === $ctrl.user.favoriteMenuItemCode) {
            found = true;
        }
      })
      if (found) {
        $ctrl.notFound = false;
      } else {
         $ctrl.notFound = true;
      }
  };

  $ctrl.submit = function () {
      //console.log("submit  called");

      var found = false;
      allMenuItems.menu_items.forEach(function (item) {
        if (item.short_name === $ctrl.user.favoriteMenuItemCode) {
            found = true;
            $ctrl.user.favoriteMenuItem = item;
            //console.log("favoriteItem:", $ctrl.user.favoriteMenuItem);
        }
      })
      if (found) {
        //console.log("found");
        $ctrl.notFound = false;
        $ctrl.registrationService.saveUser($ctrl.user);
         $ctrl.userSaved = true;
      } else {
        //console.log("not found");
         $ctrl.notFound = true;
      }
  }
}

})();
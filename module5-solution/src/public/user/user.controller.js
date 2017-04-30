(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);

UserController.$inject = ['RegistrationService'];
function UserController(RegistrationService) {
  var $ctrl = this;
  
  $ctrl.registrationService = RegistrationService;

  $ctrl.user = $ctrl.registrationService.getUser();

  }
})();
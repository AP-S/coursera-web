(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);


function RegistrationService() {
  var service = this;

  service.user = undefined;

  service.saveUser = function (user) {    
      service.user = user;
      //console.log("registration service saves user ", service.user);
    };
  
  service.getUser = function () {
      return service.user;
    };
}
})();

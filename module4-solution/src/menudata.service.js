(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

 console.log("service created");
 service.getAllCategories = function() {   
   return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      console.log("all categories");
      console.log(response.data);      
      return response;
  }).catch(function (error) {
    console.log("API request failed. Status " + error.status + " status text " + error.statusText);
  });
};

service.getItemsForCategory = function(categoryShortName) {   
   return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {category: categoryShortName}
    }).then(function (response) {
      console.log("categoryShortName", categoryShortName);
      console.log("category all items");
      console.log(response.data);      
      return response;
  }).catch(function (error) {
    console.log("API request failed. Status " + error.status + " status text " + error.statusText);
  });
};


}
})();
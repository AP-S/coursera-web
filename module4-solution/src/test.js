(function () {

angular.module('MenuApp',[])
.service('MenuDataService ', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

 service.getAllCategories = function() {   
   return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      console.log("all items");
      console.log(response.data.menu_items);      
      return response;
  }).catch(function (error) {
    console.log("API request failed. Status " + error.status + " status text " + error.statusText);
  });
};

var promise = getAllCategories();
console.log("promise", promise);
}



})();
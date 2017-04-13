(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      listTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function NarrowItDownDirectiveController() {
  var list = this;

  list.hasListItems = function() {
    console.log("hasListItems ", list.found.length);
    if (list.found && list.found.length > 0)
    {
      return true;
    }

    return false;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var vm = this;
  vm.found = [];
  
  vm.formatTitle = function(count) {
    return "Found items (" + count + ")";
  }
  
  vm.narrowItDown = function() {
    if (vm.searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm.toLowerCase());
  
    promise.then(function (promise) {
      vm.found = promise.data.menu_items;
      vm.title = vm.formatTitle(vm.found.length);
      console.log("found ", vm.found);
    });
  }
  }


  vm.removeItem = function(index) {
    vm.found.splice(index, 1);
    vm.title = vm.formatTitle(vm.found.length);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

 service.getMatchedMenuItems = function(searchTerm) {   
   return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      console.log("all items");
      console.log(response.data.menu_items);
    
    var menu_items = [];
    if (response && response.data && response.data.menu_items) {
      response.data.menu_items.forEach(function(element) {
        if (element.name.toLowerCase().includes(searchTerm)) {
          menu_items.push(element);    
        }
      });
      
      response.data.menu_items = menu_items;
    }

    return response;
  }).catch(function (error) {
    console.log("API request failed. Status " + error.status + " status text " + error.statusText);
  });
 }
}

})();

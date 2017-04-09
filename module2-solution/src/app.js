(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controller for source list (to buy list) 
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var sourceList = this;

  sourceList.items = ShoppingListCheckOffService.getSourceItems();
  console.log("source list " + sourceList.items);

  sourceList.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

// Controller for target list (already bought list)
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var targetList = this;

  targetList.items = ShoppingListCheckOffService.getTargetItems();
  console.log("target list " + targetList.items)
}

// Service for source and target list data
function ShoppingListCheckOffService() {
  var service = this;

  // source list of shopping items
  var sourceItems = initialiseSourceList();
  console.log("service: " + sourceItems);
  // target list of shopping items
  var targetItems = [];

   service.getSourceItems = function () {
    return sourceItems;
  };

service.getTargetItems = function () {
    return targetItems;
  };

  service.moveItem = function (sourceIndex) {
        targetItems.push(sourceItems[sourceIndex]);
        sourceItems.splice(sourceIndex, 1);
  };

  function initialiseSourceList() {
      return [
      {name: "Milk",
       quantity: "1 liter"},
      {name: "Chicken",
       quantity: "400 g"},
      {name: "Bread",
       quantity: "1 pcs"},
      {name: "Butter",
       quantity: "1 pcs"},
      {name: "Cucumber",
       quantity: "1 pcs"}
  ];
  }
}
})();

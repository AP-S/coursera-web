(function () {
'use strict';

angular.module('MyModule1App', [])
.controller('MyModule1Controller', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.lunchItemsMessage = "";
  $scope.userLunchItemsString = "";
  $scope.lunchItemState = "normal";
  $scope.lunchItemState = "empty";


  $scope.calculateLunchItems = function () {
    
    if ($scope.userLunchItemsString != undefined && $scope.userLunchItemsString.length > 0) {
      var userLunchItems = $scope.userLunchItemsString.split(",");
      userLunchItems = filterOutEmptyItems(userLunchItems);
      $scope.lunchItemState = "normal";
      if (userLunchItems.length < 4)
      {
        $scope.lunchItemsMessage = "Enjoy!";
      }
      else{
        $scope.lunchItemsMessage = "Too much!";
      }
    }
    else {
      $scope.lunchItemState = "empty";
      $scope.lunchItemsMessage = "Please enter data first";
    }
  };

  function filterOutEmptyItems(items) {
    var filteredItems = [];

    for(var index = 0; index < items.length; index++){
      if (items[index] != undefined && items[index].trim().length > 0) {
        filteredItems.push(items[index]);
      }
    }

    return filteredItems;
  }
}

})();

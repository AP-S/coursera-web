(function () {
'use strict';

angular.module('TrainStationApp', [])
.controller('StationController', StationController)
.service('StationService', StationService)
.constant('StationApiBasePath', "https://rata.digitraffic.fi/api/v1/metadata/stations");


StationController.$inject = ['StationService'];
function StationController(StationService) {
  var stationsInfo = this;

  var promise = StationService.getStations();

  promise.then(function (response) {
    stationsInfo.stations = response.data;
    console.log(stationsInfo);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  // stationsInfo.logTimetable = function (stationShortCode) {
  //   var promise = StationService.getTimetable(stationShortCode);

  //   promise.then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };

}


StationService.$inject = ['$http', 'StationApiBasePath'];
function StationService($http, StationApiBasePath) {
  var service = this;

  console.log("api: " + StationApiBasePath);
  service.getStations = function () {
    var response = $http({
      method: "GET",
      url: StationApiBasePath
    });

    return response;
  };


  // service.getTimetable = function (stationShortCode) {
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/menu_items.json"),
  //     params: {
  //       category: shortName
  //     }
  //   });

  //   return response;
  // };

}

})();

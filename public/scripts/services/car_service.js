(function(angular, window, undefined) {
  'use strict';

  var CarService,
      fn;

  CarService = function ($http) {
    this.getCars = function() {
      return $http.get('/api/car');
    };
  };


  angular.module('services').service('CarService', ['$http', CarService]);
})(angular, window);

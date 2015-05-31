(function(angular, window, undefined) {
  'use strict';

  var CarService,
      fn;

  CarService = function ($http) {
    this.getCars = function() {
      return $http.get('/api/car');
    };

    this.getById = function(id) {
      return $http.get('/api/car/' + id);
    };

    this.save = function(car) {
      var promise;

      if (car.id) {
        promise = $http.put('/api/car/' + car.id, car);
      } else {
        promise = $http.post('/api/car/', car);
      }

      return promise;
    }
  };


  angular.module('services').service('CarService', ['$http', CarService]);
})(angular, window);

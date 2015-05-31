(function(angular, window, undefined) {
  'use strict';

  function DetailController($routeParams, $location, CarService, BrandFactory) {
    var vm = this,
        getCarCallback,
        getBrandsCallback,
        saveCallback;

    vm.car = {};
    vm.brands = [];

    getCarCallback = function(car) {
      if (car) {
        vm.car = car;
      }
    };

    getBrandsCallback = function(brands) {
      vm.brands = brands;
    };

    saveCallback = function(car) {
      vm.car = car;
      $location.path('/');
    };

    vm.save = function(car) {
      CarService.save(car).success(saveCallback);
    };

    if ($routeParams.id) {
      CarService.getById($routeParams.id).success(getCarCallback)
    }

    BrandFactory.getBrands().success(getBrandsCallback);
  }

  angular.module('app').controller('DetailController', [
    '$routeParams',
    '$location',
    'CarService',
    'BrandFactory',
    DetailController
  ]);
})(angular, window);

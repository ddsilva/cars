(function(angular, window, undefined) {
  'use strict';

  function ListController (CarService, BrandFactory){
    var vm = this,
        carsCallback,
        brandsCalback;

    vm.filter = '';
    vm.cars = [];
    vm.brands = [];

    carsCallback = function(cars) {
      vm.cars = cars;
    };

    brandsCalback = function(brands) {
      vm.brands = brands;
    };

    CarService.getCars().success(carsCallback);
    BrandFactory.getBrands().success(brandsCalback);
  }

  angular.module('app').controller('ListController', ['CarService', 'BrandFactory', ListController]);
})(angular, window);

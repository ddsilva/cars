(function(angular, window, undefined) {
  'use strict';

  function ListController (CarService, BrandFactory){
    var vm = this,
        carsCallback,
        brandsCalback,
        removeCallback;

    vm.filter = '';
    vm.cars = [];
    vm.brands = [];

    vm.removeCar = function(car) {
      if (confirm('Deseja remover o carro?')) {
        CarService.remove(car).success(removeCallback);
      }
    }

    carsCallback = function(cars) {
      vm.cars = cars;
    };

    brandsCalback = function(brands) {
      vm.brands = brands;
    };

    removeCallback = function(car) {
      _.remove(vm.cars, function(c) {
        return c.id == car.id;
      });
    }

    CarService.getCars().success(carsCallback);
    BrandFactory.getBrands().success(brandsCalback);
  }

  angular.module('app').controller('ListController', ['CarService', 'BrandFactory', ListController]);
})(angular, window);

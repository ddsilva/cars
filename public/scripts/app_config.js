(function (angular, window, undefined) {
  'use strict';

  function configFn($routeProvider) {};

  angular.module('app').config(['$routeProvider', configFn]);
})(angular, window);

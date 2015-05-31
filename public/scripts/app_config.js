(function (angular, window, undefined) {
  'use strict';

  function configFn($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'ListController',
        templateUrl: 'templates/list.html',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular.module('app').config(['$routeProvider', configFn]);
})(angular, window);

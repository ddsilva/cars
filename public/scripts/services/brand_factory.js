(function(angular, window, undefined) {
  'use strict';

  function BrandFactory($http, $q){
    return {
      getBrands: function() {
        return $http.get('/api/brand');
      }
    }
  }

  angular.module('services').factory('BrandFactory', ['$http', '$q', BrandFactory]);
})(angular, window);

(function(angular, window, undefined) {
  'use strict';

  function idListFilter() {
    return function(id, list) {
      var item = _.findWhere(list, {id: id});

      return item ? item.name : '';
    }
  }

  angular.module('filters').filter('idListFilter', idListFilter);
})(angular, window);

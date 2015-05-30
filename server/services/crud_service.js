var _ = require('lodash'),
    CrudService,
    fn;

    CrudService = function (dataInterface) {
      this.dataInterface = dataInterface || {};

      this.items = [];
      this.lastIndex = 1;
    };

    // Public
    fn = CrudService.prototype;

    fn.getAll = function() {
      return this.items;
    };

    fn.getById = function(id) {
      return _.findWhere(this.items, {id: parseInt(id)}) || null;
    };

    fn.create = function(data) {
      var item;

      data = data || {};

      item = _.extend(_.clone(this.dataInterface), {
        id: this.lastIndex++
      }, data);

      this.items.push(item);

      return item;
    };

    fn.update = function(id, data) {
      var item = this.getById(id);

      data = data || {};

      if (item) {
        _.extend(item, data);
        item.id = parseInt(id);
      }

      return item;
    };

    fn.remove = function(id) {
      var item = this.getById(id);

      if (item) {
        _.remove(this.items, function(c) {
          return c.id == item.id;
        });
      }

      return item;
    };

module.exports = CrudService;

var _ = require('lodash'),
    CrudService = require('./crud_service'),
    manufactorService = require('./manufactor_service'),
    dataInterface,
    carService;

dataInterface = {
  manufactor: null,
  name: null,
  year: null
};

// Service instance
carService = new CrudService(dataInterface);

// Overrides create
carService.create = function(data) {
  var item;

  data = data || {};

  item = _.extend(_.clone(this.dataInterface), {
    id: this.lastIndex++
  }, data);

  if (item.manufactor) {
    item.manufactor = manufactorService.getById(item.manufactor);
  }

  this.items.push(item);

  return item;
};

// Overrides update
carService.update = function(id, data) {
  var item = this.getById(id);

  data = data || {};

  if (item) {
    _.extend(item, data);
    item.id = parseInt(id);
  }

  if (item.manufactor) {
    item.manufactor = manufactorService.getById(item.manufactor);
  }

  return item;
};

module.exports = carService;

var _ = require('lodash'),
    CrudService = require('./crud_service'),
    brandService = require('./brand_service'),
    dataInterface,
    carService;

dataInterface = {
  brand: null,
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

  if (item.brand) {
    item.brand = brandService.getById(item.brand);
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

  if (data.brand) {
    item.brand = brandService.getById(item.brand);
  }

  return item;
};

module.exports = carService;

var CrudService = require('./crud_service'),
    dataInterface;

dataInterface = {
  brand: null,
  name: null,
  year: null
};

module.exports = new CrudService(dataInterface);

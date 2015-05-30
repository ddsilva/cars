var CrudService = require('./crud_service'),
    dataInterface;

dataInterface = {
  name: null
};

module.exports = new CrudService(dataInterface);

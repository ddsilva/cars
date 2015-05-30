var CrudRouterFactory = require('./crud_router_factory'),
    carService = require('../services/car_service');

module.exports = CrudRouterFactory.setupRouter('/car', carService);

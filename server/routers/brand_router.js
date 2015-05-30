var CrudRouterFactory = require('./crud_router_factory'),
    brandService = require('../services/brand_service');

module.exports = CrudRouterFactory.setupRouter('/brand', brandService);

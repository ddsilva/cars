var _ = require('lodash'),
    router = require('express').Router(),
    CrudService = require('../services/crud_service'),
    CrudRouterFactory,
    _methods;

// Methods
// -------------------------------------

_methods = {
  getAll: function(service, req, res, next) {
    res.json(service.getAll());
  },

  getById: function(service, req, res, next) {
    var item = service.getById(req.params.id);

    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  },

  create: function(service, req, res, next) {
    var newItem = service.create(req.body);
    res.json(newItem);
  },

  update: function(service, req, res, next) {
    var item = service.update(req.params.id, req.body);

    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  },

  remove: function(service, req, res) {
    var item = service.remove(req.params.id);

    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  }
};

// Singleton class
CrudRouterFactory = function() {
  // check singleton instance
  if (typeof CrudRouterFactory.instance === 'object') {
    return CrudRouterFactory.instance;
  }

  _.bindAll(this);

  // Cache singleton instance
  CrudRouterFactory.instance = this;
};

fn = CrudRouterFactory.prototype;

fn.setupRouter = function(url, serviceInstance) {
  if (!url || !_.isString(url)) {
    throw "It's required an url string pattern";
  }

  service = serviceInstance || new CrudService();

  router.get    (url          , _.bind(_methods.getAll, this, service));
  router.get    (url + '/:id' , _.bind(_methods.getById, this, service));
  router.post   (url          , _.bind(_methods.create, this, service));
  router.put    (url + '/:id' , _.bind(_methods.update, this, service));
  router.delete (url + '/:id' , _.bind(_methods.remove, this, service));

  return router;
};

module.exports = new CrudRouterFactory();

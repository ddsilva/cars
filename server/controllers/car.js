var express = require('express'),
    router = express.Router(),
    carService = require('../services/car'),
    routerMethods;

routerMethods = {
  getAll: function(req, res, next) {
    res.json(carService.getAll());
  },

  getById: function(req, res, next) {
    var car = carService.getById(req.params.id);

    if (car) {
      res.json(car);
    } else {
      res.sendStatus(404);
    }
  },

  create: function(req, res, next) {
    var newCar = carService.create(req.body);
    res.json(newCar);
  },

  update: function(req, res, next) {
    var car = carService.update(req.params.id, req.body);

    if (car) {
      res.json(car);
    } else {
      res.sendStatus(404);
    }
  },

  remove: function(req,res) {
    var car = carService.remove(req.params.id);

    if (car) {
      res.json(car);
    } else {
      res.sendStatus(404);
    }
  }
}

router.get('/car', routerMethods.getAll);
router.get('/car/:id', routerMethods.getById);
router.post('/car', routerMethods.create);
router.put('/car/:id', routerMethods.update);
router.delete('/car/:id', routerMethods.remove);


module.exports = router;

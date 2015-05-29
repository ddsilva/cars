var _ = require('lodash'),
    _getCar,
    express = require('express'),
    router = express.Router(),
    cars = [],
    index = 1;

// GET all cars
router.get('/car', function(req, res, next) {
  res.json(cars);
});

// GET a car by ID
router.get('/car/:id', function(req, res, next) {
  var car = _getCar(req.params.id);

  if (car) {
    res.json(car);
  } else {
    res.sendStatus(404);
  }
});

// CREATE a new car
router.post('/car', function(req, res, next) {
  var car = _.extend({
    id: index ++
  }, req.body);

  cars.push(car);

  res.json(car);
});

// UPDATE a car
router.put('/car/:id', function(req, res, next) {
  var car = _getCar(req.params.id);

  if (!car) {
    res.sendStatus(404);
    return;
  }

  _.extend(car, req.body);
  car.id = parseInt(req.params.id);

  res.json(car);
});

// REMOVE a car
router.delete('/car/:id',function(req,res) {
  var car = _getCar(req.params.id);

  if (!car) {
    res.sendStatus(404);
    return;
  }

  cars = _.reject(cars, function(c) {
    return c.id == car.id;
  })

  res.json(car);
});

// Search a car
_getCar = function (id) {
  return _.findWhere(cars, {id: parseInt(id)});
}


module.exports = router;

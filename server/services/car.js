var _getCar,
    _ = require('lodash'),
    _privates,
    publicInterface,
    CarService;

    _privates = {
      cars: [],
      lastIndex: 1
    };

    publicInterface = {
      getAll: function() {
        return _privates.cars;
      },

      getById: function(id) {
        return _.findWhere(_privates.cars, {id: parseInt(id)});
      },

      create: function(data) {
        var car;

        data = data || {};

        car = _.extend({
          id: _privates.lastIndex ++
        }, data);

        _privates.cars.push(car);

        return car;
      },

      update: function(id, data) {
        var car = this.getById(id);

        if (car) {
          _.extend(car, data);
          car.id = parseInt(id);
        }

        return car;
      },

      remove: function(id) {
        var car = this.getById(id);

        if (car) {
          _privates.cars = _.reject(_privates.cars, function(c) {
            return c.id == car.id;
          });
        }

        return car;
      }
    };

    CarService = function () {
      // check singleton instance
      if (typeof CarService.instance === 'object') {
        return CarService.instance;
      }

      // Cache singleton instance
      CarService.instance = this;
    };

    _.extend(CarService.prototype, publicInterface);

module.exports = new CarService();

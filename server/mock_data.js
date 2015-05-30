var carService = require('./services/car_service'),
    brandService = require('./services/brand_service');

// Create some default brands
brandService.create({name: 'Honda'});
brandService.create({name: 'Toyota'});
brandService.create({name: 'Ford'});
brandService.create({name: 'Volkswagen'});
brandService.create({name: 'Fiat'});
brandService.create({name: 'Chevrolet'});

// Create some default cars
carService.create({
  name: 'Civic',
  year: 2010,
  brand: 1
});

carService.create({
  name: 'Fit',
  year: 2004,
  brand: 1
});

carService.create({
  name: 'Corola',
  year: 2013,
  brand: 2
});

carService.create({
  name: 'Focus',
  year: 2009,
  brand: 3
});

carService.create({
  name: 'Ka',
  year: 2013,
  brand: 3
});

carService.create({
  name: 'Gol',
  year: 2003,
  brand: 4
});

carService.create({
  name: 'Fox',
  year: 2010,
  brand: 4
});

carService.create({
  name: 'Palio',
  year: 2012,
  brand: 5
});

carService.create({
  name: 'Uno',
  year: 2006,
  brand: 5
});


carService.create({
  name: 'Astra',
  year: 2005,
  brand: 6
});

carService.create({
  name: 'Classic',
  year: 2011,
  brand: 6
});

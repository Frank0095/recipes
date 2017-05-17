const mongoose = require('mongoose');
const faker = require('faker');

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/acmestore');

const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

const products = [];

console.time('Seed data');
console.log('Removing old products');
Product
  .remove({})
  .then(function() {
    console.log('Generating products');
    for(var i = 0; i < 50; i++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productAdjective(),
        imageUrl: 'http://placehold.it/50x50',
        retailPrice: faker.commerce.price()
      });
    }

    console.log('Inserting products');
    return Product.insertMany(products);
  })
  .then(function() {
    console.log('Done');
    console.timeEnd('Seed data');
  });

require('dotenv').config();
const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const logger = require('./lib/logger');
const gzip = require('compression');

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/acmestore');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', require('./routes/user.route.js'));
app.use('/api/products', require('./routes/product.route.js'));
app.use('/api/orders', require('./routes/order.route.js'));

app.use(function(err, req, res, next) {
    if(err) {
        logger.log('error', err);
        return res.status(500).send({ errors: ['Oops! Something went wrong on our end.']});
    }

    next();
});

const port = process.env.PORT || 8080;

app.listen(port, function(req, res) {
    console.log(port);
});
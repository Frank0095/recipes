const router = require('express').Router();
const requiresAuth = require('../lib/requiresAuth');
const Order = require('../models/Order');
const stripe = require('stripe')(process.env.STRIPE_SK);

router.route('/:stripeToken')
            .post(requiresAuth(), addOrder);

module.exports = router;

//////////////

function addOrder(req, res, next) {
    stripe
        .charges
        .create({
            amount: req.body.retailPrice * 100,
            currency: 'usd',
            source: req.params.stripeToken,
            description: 'Acme Store'
        })
        .then(function(charge) {
            const newOrder = new Order({
                product: req.body,
                user: req.user,
                stripeCharge: charge
            });

            return newOrder.save();  
        })
        .then(product => res.json(product))
        .catch(next);
}
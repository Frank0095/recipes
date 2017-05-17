const router = require('express').Router();
const requiresAuth = require('../lib/requiresAuth');
const Product = require('../models/Product');

router.route('/')
            .get(getAllProducts)
            .post(requiresAuth(), addProduct);

router.route('/:id')
            .get(getProductById)
            .put(requiresAuth(), updateProduct)
            .delete(requiresAuth(), deleteProduct);

module.exports = router;

//////////////

function getAllProducts(req, res, next) {
    Product
        .find()
        .exec()
        .then(data => res.json(data))
        .catch(next);
}

function getProductById(req, res, next) {
    Product
        .findById(req.params.id)
        .exec()
        .then(product => {
            if(product) {
                res.json(product);
            } else {
                res.status(404).send();
            }
        })
        .catch(next);
}

function addProduct(req, res, next) {
    const newProduct = new Product(req.body);

    newProduct
        .save()
        .then(product => res.json(product))
        .catch(next);
}

function updateProduct(req, res, next) {
    Product
        .findById(req.params.id)
        .exec()
        .then(product => {
            if(product) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.imageUrl = req.body.imageUrl;
                product.retailPrice = req.body.retailPrice;

                return product.save();
            } else {
                res.status(404).send();
            }
        })
        .then(p => res.status(204).send())
        .catch(next);
}

function deleteProduct(req, res, next) {
    Product
        .remove({ _id: req.params.id })
        .exec()
        .then(data =>{
            if(data.result.n === 1) {
                res.status(200).send();
            } else {
                res.status(404).send();
            }            
        })
        .catch(next);
}
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const router = require('express').Router()

// Products belongsTo Category
router.use('/Category', Category)

// Categories have many Products
router.use('/Category/Product', Product)

// Products belongToMany Tags (through ProductTag)
router.use('/Product/ProductTag', ProductTag)

// Tags belongToMany Products (through ProductTag)
router.use('/ProductTag/Tag', Tag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// Verify the accuracy of this code 
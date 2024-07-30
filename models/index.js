// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const router = require('express').Router()

// Products belongsTo Category
Product.belongsTo(Category)
// router.use('/Category', Category)

// Categories have many Products
Category.hasMany(Product)
// router.use('/Category/Product', Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag
})
// router.use('/Product/ProductTag', ProductTag)

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag
})
// router.use('/ProductTag/Tag', Tag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  // router
};


// Verify the accuracy of this code 
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const router = require('express').Router()



// once associated use includes
// set up foreign keys 
// Products belongsTo Category
Product.belongsTo(Category, 
{foreignKey: "categoryId"})
// router.use('/Category', Category)

// Categories have many Products
Category.hasMany(Product, 
{foreignKey: "categoryId"})
// router.use('/Category/Product', Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag,
  foreignKey: "product_id"
})
// router.use('/Product/ProductTag', ProductTag)

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tagId"
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
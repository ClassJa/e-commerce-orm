// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 10,
      // figure out how to have a default value of 10,
      validate: {
        isNumeric: true
      }
    }, 
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      }
      // is this correct? 
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

const sequelize = require('../settings');
const {DataTypes} = require('sequelize');


const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    price: {type: DataTypes.STRING},
    amount: {type: DataTypes.STRING} 
});

module.exports = {
    Products
}
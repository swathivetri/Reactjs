const sequelize = require('../utils/database');
const Product = require('./product');

const initDB = async () => {
    await sequelize.sync();
};

module.exports = { Product, initDB };

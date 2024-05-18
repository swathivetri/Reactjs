const { Product } = require('../models');

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        await product.update(req.body);
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (error) {
        res.status(500).send();
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(500).send();
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { category: req.params.category } });
        res.send(products);
    } catch (error) {
        res.status(500).send();
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        await product.destroy();
        res.send(product);
    } catch (error) {
        res.status(500).send();
    }
};

module.exports = {
    addProduct,
    updateProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    deleteProduct
};

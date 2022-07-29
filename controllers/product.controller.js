const { Products } = require("../postgreSQL/models/model");
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

class ProductController {
    
    async getAllProducts(req, res) {
        const allProducts = await Products.findAll({raw: true});

        res.status(200).json(allProducts);
    }

    async getProductById(req, res) {
        const { id } = req.params;
        const getProductId = await Products.findOne(
            { where: { id } }
        );

        return res.status(200).json(getProductId);
    }

    async addNewProduct(req, res) {
        const { name, price, amount } = req.body;
        const addProduct = await Products.create({ name, price, amount });

        return res.status(200).json(addProduct);
    }

    async deleteProduct(req, res) {
        const {id} = req.params;
        const delProduct = await Products.destroy(
            {where: {id}}
        );

        return res.status(200).json(delProduct);
    }

    async updateProduct(req, res) {
        const {id} = req.params;                            
        const {newName, newPrice, newAmount} = req.body;                                                    
        const newProduct = await Products.update({ name: newName, price: newPrice, amount: newAmount }, {   
            where: {                                                                                        
              id                                                                                                       
            }
          });

        return res.status(200).json(newProduct);
    }

    async uploadPhoto(req, res) {
            try {
                if(!req.files) {
                    res.send({
                        status: false,
                        message: 'No photo uploaded'
                    });
                } else {
                    let photo = req.files.photo;
                    
                    photo.mv('./photos/' + photo.name);
        
                    res.send({
                        status: true,
                        message: 'Photo is uploaded',
                        data: {
                            name: photo.name,
                            mimetype: photo.mimetype,
                            size: photo.size
                        }
                    });
                }
            } catch (err) {
                res.status(500).send(err);
            }
        }
}

module.exports = new ProductController();
const express = require("express");
const route = express.Router();

const productModel = require("../../Models/productSchema")

route.post("/fruits-veggies", async (req, res) => {
    try {
        const product = new productModel(req.body);
        product.save()

        res.status(201).json({
            message: `Product added successfully`,
            data: product
        })
    } catch (error) {
        res.status(500).json({ message: `Error in adding Product ${error.message}`})
    }
})

route.get("/fruits-veggies", async (req, res) => {
    try {
        const fruitsVeggies = await productModel.find({ category: "fruits and vegetables"})
        res.status(200).json({
            message: `Products fetched successfully`,
            data: fruitsVeggies
        })
    } catch (error) {
        res.status(500).json({
            message:`Error fetching in Fruits and Veggies ${error.message}`
        })
    }
})

module.exports = route;
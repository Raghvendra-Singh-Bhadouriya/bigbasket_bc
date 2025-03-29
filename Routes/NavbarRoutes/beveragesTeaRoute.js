const express = require("express");
const route = express.Router();

const productModel = require("../../Models/productSchema")

route.post("/beverages/tea", async (req, res) => {
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

route.get("/beverages/tea", async (req, res) => {
    try {
        const beveragesTea = await productModel.find({ category: "beverages-tea"})
        res.status(200).json({
            message: `Products fetched successfully`,
            data: beveragesTea
        })
    } catch (error) {
        res.status(500).json({
            message:`Error fetching in Fruits and Veggies ${error.message}`
        })
    }
})

module.exports = route;
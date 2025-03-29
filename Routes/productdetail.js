const express = require("express")
const route = express.Router()

const productModel = require("../Models/productSchema")

route.get("/product-detail/:category/:id", async (req, res) => {
    try {
        const { category, id } = req.params;

        // if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: "Invalid product ID format" });
        // }

        const product = await productModel.findById({ category: category, _id: id})
        console.log(product)

        if(!product){
            return res.status(404).json({
                message:`Product not found`
            })
        }

        res.status(200).json({
            message:`Product found successfully`,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message:`Error in fetching product ${error.message}`
        })
    }
})

module.exports = route;
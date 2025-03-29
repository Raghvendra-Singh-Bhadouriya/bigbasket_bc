const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    imgurl:{
        type: String,
        required: true
    },
    cmpnyname:{
        type: String,
        required: true
    },
    productname:{
        type: String,
        required: true
    },
    quantity:{
        type: String
    },
    category:{
        type: String,
        required: true
    },
    starRating:{
        type: String,
    },
    NumRating:{
        type: String,
    },
    mrp:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    wetprice:{
        type: String,
    },
    off:{
        type: String,
    },
    taxes:{
        type: String,
        required: true
    }
},{
    versionKey: false
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel;
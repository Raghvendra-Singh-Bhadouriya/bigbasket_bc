require("dotenv").config()
const URL = process.env.MONGODB_URL

const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect(URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB not connected", error.message)
    }
}

module.exports = connectDB;
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    number:{
        type: String,
        maxLength: 10,
        unique: true,
        required: true
    }
},{
    versionKey: false,
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;
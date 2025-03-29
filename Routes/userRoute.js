const userModel = require("../Models/userSchema");
const express = require("express")
const router = express.Router();

router.post("/login-signup", async (req, res) => {
    try {
        const { number } = req.body;

        if(number.length > 10){
            return res.status(400).json({
                message:`Number must be 10 digits only`
            })
        }

        const existUser = await userModel.findOne({number})

        if(!existUser){
            const newUser = new userModel(req.body)
            newUser.save()

            return res.status(201).json({
                message:`User Registered successfully`,
                data: newUser
            })
        }

        res.status(200).json({
            message:`User LoggedIn successfully`
        })
    } catch (error) {
        res.status(500).json({
            message: `LogIn failed ${error.message}`
        })
    }
})

router.get("/allUsers", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            message: "User Found Successfully",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message:`Unsuccessfull to fetched Users`
        })
    }
})


module.exports = router;
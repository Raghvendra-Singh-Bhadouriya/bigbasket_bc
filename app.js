require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000
const connection = require("./config/db")
const userRouter = require("./Routes/userRoute")
const fruitsVeggiesRouter = require("./Routes/NavbarRoutes/fruitsandveggiesRoute")
const beveragesTeaRouter = require("./Routes/NavbarRoutes/beveragesTeaRoute")
const gheeVanaspatiRouter = require("./Routes/NavbarRoutes/gheeVanaspati")
const productDetailRouter = require("./Routes/productdetail")

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("welcome to the Home Page")
})
app.use("/", userRouter)
app.use("/", fruitsVeggiesRouter)
app.use("/", beveragesTeaRouter)
app.use("/", gheeVanaspatiRouter)
app.use("/", productDetailRouter)

app.listen(PORT, async () => {
    try {
        await connection()
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log("Internal server error",error.message)
    }
})
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const multer = require("multer")
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config({path:'./config.env'})
const port = process.env.PORT
const DB = process.env.URL
const authRouter = require("./Controller/auth")
const userRouter = require("./Controller/user")
const productRouter = require("./Controller/product")
const cartRouter = require("./Controller/cart")
const orderRouter = require("./Controller/order")
const stripeRouter = require("./Controller/stripe")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/my-uploads/images')
//     },
//     filename: function (req, file, cb) {
//       cb(Date.now() + '-' + file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products",  productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/checkout", stripeRouter)

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})

app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})
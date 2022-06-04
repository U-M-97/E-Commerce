const router = require("express").Router()
const Product = require("../models/product")
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken")

router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const newProduct = new Product(req.body)
    console.log(newProduct)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
        console.log(savedProduct)
    } catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {new:true})
            res.status(200).json(updateProduct)
    }catch(err){
        res.status(500).json(err)
    }
    
})

router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req,res)=>{
    const qNew = req.query.new
    const qCategory = req.query.category

    try{
        let products

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in: [qCategory]
                }
            })
        }else{
            products = await Product.find()
        }

        res.status(200).json(products)
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router
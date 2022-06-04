const Order = require("../models/order")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const router = require("express").Router()

router.post("/", verifyToken, async (req,res)=>{
    const newOrder = new Order(req.body)
    try{
      const savedOrder = await newOrder.save()
      res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/:id", verifyToken, async (req,res)=>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            },
            {new:true})
            res.status(200).json(updateOrder)
    }catch(err){
        res.status(500).json(err)
}
})

router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const deleteOrder = await Order.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:userId", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const orders = await Order.find()
        res.status(200).json(orders) 
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/income", verifyTokenAndAdmin, async (req,res)=>{
    const productId = req.query.pid
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth}, ...Order(productId && {
                products: { $elemMatch: { productId }}
            })}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales"}
                }
            }
        ])
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router
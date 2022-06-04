const User = require("../models/user")
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken")
const CryptoJS = require("crypto")

const router = require("express").Router()

router.put("/:id" , verifyTokenAndAuthorization, async (req, res) =>{
    if(req.body.password){
        req.body.pasword = CryptoJS.AES.encrypt(
            req.body.password, process.env.Secret_Key
        ).toString()
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true })
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }

})

router.delete("/:id", verifyTokenAndAdmin, async (req,res) =>{
    try{
        console.log(req.params.id)
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted Successfully")
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new;
    try{
        const users = query
        ? await User.find().sort({_id:-1}).limit(5)
        : await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/stats", verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try{
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1},
                }
            }
        ])
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})





module.exports = router
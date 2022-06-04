const express = require("express")
const router = express.Router()
const User = require('../models/user')
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post('/register', async (req,res)=>{
    const {img, username, email, password ,isAdmin} = req.body
    const hashPassword = CryptoJS.AES.encrypt(password, process.env.Secret_Key).toString()
    const newUser = new User({
        img,username,email,isAdmin,
        password: hashPassword
    })

    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
        console.log(savedUser)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
    
})

router.post('/login', async (req,res)=>{
    try{
        const user = await User.findOne({
            username: req.body.username
        })

        !user && res.status(400).json("Wrong Credentials")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.Secret_Key)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password
        inputPassword != originalPassword && res.status(400).json("Wrong Credentials")

        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            
                process.env.JWT_SEC,
                {expiresIn:"3d"}
                
        )
        
        const {password, ...others} = user._doc
        
        res.status(200).json({others, token})

    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router
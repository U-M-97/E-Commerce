const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        img:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema)
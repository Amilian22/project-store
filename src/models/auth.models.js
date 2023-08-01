

import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password: {
        required: true,
        type: String,
    }
}, {
    timestamps: true
})


export default mongoose.model("User", userSchema)
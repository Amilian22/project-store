import mongoose from "mongoose";

import key from "dotenv";

key.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_KEY);
        console.log("DB is connect");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
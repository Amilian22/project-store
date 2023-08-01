import mongoose from "mongoose";

import { config } from "dotenv";

const run = config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_KEY);
        console.log("DB is connect");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
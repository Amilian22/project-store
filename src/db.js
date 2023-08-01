import mongoose from "mongoose";
import key from "dotenv";

key.config();


const connectDB = async () => {
    const url = process.env.MONGO_ATLAS_KEY;
    try {
        await mongoose.connect(url);
        console.log("DB is connect");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
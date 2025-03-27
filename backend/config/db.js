import mongoose from "mongoose";

export const connectDB = () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGODB_URL);
        // console.log(`MongoDB Connected: ${conn.connection.host}`)
        mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }

    


}
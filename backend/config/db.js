import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database Conncted"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;
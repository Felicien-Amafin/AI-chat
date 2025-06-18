import mongoose from "mongoose";

const connectToDb = async ()=> {
    //Connecting to mongoDB 
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongo db');
    } catch (error) {
        console.log('Error while connecting to mongodb', error.message);
    }
}

export default connectToDb;
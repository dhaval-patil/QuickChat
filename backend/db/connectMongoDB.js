import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting a MongoDB", error.message);
  }
};

export default connectToMongoDB;

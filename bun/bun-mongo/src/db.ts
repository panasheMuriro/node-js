import mongoose from "mongoose";

// MongoDB URI (replace with your MongoDB URI)
const uri = "mongodb://localhost:27017/bun";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit on failure
  }
};

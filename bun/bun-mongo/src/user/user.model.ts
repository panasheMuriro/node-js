import mongoose from "mongoose";

// Define the schema for a User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Create the model from the schema
const User = mongoose.model("User", userSchema);

export default User;

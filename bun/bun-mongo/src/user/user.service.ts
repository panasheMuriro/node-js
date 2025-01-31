 // Import Mongoose User model

import User from "./user.model";

export class UserService {
  // Get all users
  async getUsers() {
    const users = await User.find(); // Mongoose finds all users
    return users;
  }

  // Get user by ID
  async getUserById(id: string) {
    const user = await User.findById(id); // Mongoose finds a user by ID
    return user;
  }

  // Create a new user
  async createUser(name: string) {
    const user = new User({ name }); // Create a new user instance
    await user.save(); // Save the user to MongoDB
    return user;
  }
}

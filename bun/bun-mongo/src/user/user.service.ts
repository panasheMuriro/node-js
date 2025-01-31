import { User, type IUser } from "./user.model";

export class UserService {
  async createUser(userData: IUser): Promise<IUser> {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id).exec();
  }

  async getAllUsers(): Promise<IUser[]> {
    return await User.find().exec();
  }

  async updateUser(id: string, userData: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, userData, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete(id).exec();
  }
}
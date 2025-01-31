import type { Context } from "hono";
import { UserService } from "./user.service";
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(c: Context) {
    const userData = await c.req.json();
    const user = await this.userService.createUser(userData);
    return c.json(user, 201);
  }

  async getUserById(c: Context) {
    const id = c.req.param('id');
    const user = await this.userService.getUserById(id);
    return user ? c.json(user) : c.json({ message: 'User not found' }, 404);
  }

  async getAllUsers(c: Context) {
    const users = await this.userService.getAllUsers();
    return c.json(users);
  }

  async updateUser(c: Context) {
    const id = c.req.param('id');
    const userData = await c.req.json();
    const user = await this.userService.updateUser(id, userData);
    return user ? c.json(user) : c.json({ message: 'User not found' }, 404);
  }

  async deleteUser(c: Context) {
    const id = c.req.param('id');
    await this.userService.deleteUser(id);
    return c.json({ message: 'User deleted' });
  }
}
import { Hono } from 'hono';
import { UserController } from './user.controller';

export class UserModule {
  private userController: UserController;

  constructor(app: Hono) {
    this.userController = new UserController();
    this.setupRoutes(app);
  }

  private setupRoutes(app: Hono) {
    app.post('/users', (c) => this.userController.createUser(c));
    app.get('/users/:id', (c) => this.userController.getUserById(c));
    app.get('/users', (c) => this.userController.getAllUsers(c));
    app.put('/users/:id', (c) => this.userController.updateUser(c));
    app.delete('/users/:id', (c) => this.userController.deleteUser(c));
  }
}
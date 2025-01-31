import { UserController } from "./user.controller";

export class UserModule {
  userController: UserController;

  constructor() {
    this.userController = new UserController();
  }

  handleRequest(req: Request) {
    const url = new URL(req.url);
    if (url.pathname === "/users" && req.method === "GET") {
      return this.userController.getUsers();
    }
    if (url.pathname.startsWith("/users/") && req.method === "GET") {
      const id = parseInt(url.pathname.split("/")[2]);
      return this.userController.getUserById(id);
    }
    return new Response("Not Found", { status: 404 });
  }
}

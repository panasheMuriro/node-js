import { UserService } from "./user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUsers() {
    return new Response(JSON.stringify(this.userService.getUsers()), {
      headers: { "Content-Type": "application/json" },
    });
  }

  getUserById(id: number) {
    const user = this.userService.getUserById(id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

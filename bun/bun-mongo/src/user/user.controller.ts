import { UserService } from "./user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers() {
    const users = await this.userService.getUsers();
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  }

  async getUserById(id: string) {
    const user = await this.userService.getUserById(id);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  }

  async createUser(req: Request) {
    // Get the body as text and parse it as JSON
    // console.log(req.body);
    const body = await req.json();
    console.log(body)
    const { name } = body;
    const newUser = await this.userService.createUser(name);
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
}

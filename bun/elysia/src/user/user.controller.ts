import { UserService } from "./user.service";

const userService = new UserService();
export const userController = {
  getUsers: () => userService.getUsers(),
};

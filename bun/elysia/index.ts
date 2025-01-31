// user.service.ts
// app.ts
import { Elysia } from "elysia";
import { userController } from "./src/user/user.controller";

const app = new Elysia();
app.get("/users", userController.getUsers);
app.listen(3000);

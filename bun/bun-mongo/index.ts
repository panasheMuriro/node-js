import { Hono } from "hono";
import { connectDB } from "./src/db";
import { UserController } from "./src/user/user.controller";


const app = new Hono();
const userController = new UserController();

// Connect to MongoDB before starting the app
connectDB().then(() => {
  console.log("MongoDB connected successfully");

  // Define Hono routes and map to controller actions
  app.get("/users", (c) => userController.getUsers());
  app.get("/users/:id", (c) => userController.getUserById(c.req.param("id")));
  app.post("/users", (c) => userController.createUser(c));

  // Start the server
//   app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
//   });
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});

export default app

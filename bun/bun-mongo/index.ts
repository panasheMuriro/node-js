import { Hono } from "hono";
import mongoose from "mongoose";
import { UserModule } from "./src/user/user.module";

const app = new Hono();
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/bun-hono-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Initialize modules
new UserModule(app);
export default app;

import express from "express";

// project imports
import { login, register } from "./controllers/userControllers.js";
import { isAuth } from "./middlewares/authMiddlewares.js";

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("<h1>Hello from server</h1>"));

// Auth routes
router.post("/user/register", register);
router.post("/user/login", login);
// router.get("/user/profile", getProfile);
// router.post("/user/profile", updateProfile);

export default router;

import express from "express";

// project imports
import { addSubject, changePassword, getProfile, login, register, updateProfile } from "./controllers/userControllers.js";
import { isAuth } from "./middlewares/authMiddlewares.js";

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("<h1>Hello from server</h1>"));

// Auth routes
router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/profile", isAuth, getProfile);
router.post("/user/profile", isAuth, updateProfile);

router.post("/add-subject", isAuth, addSubject);
router.post("/change-password", isAuth, changePassword);

export default router;

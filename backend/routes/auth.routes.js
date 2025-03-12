import express from "express";
import {
  loginUser,
  logoutUser,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", loginUser);
router.get("/logout", logoutUser);

export default router;

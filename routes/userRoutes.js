import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/register", userController.createUser);
router.post("/forgot-password", userController.forgotPassword);
router.post("/login", userController.login);

export default router;

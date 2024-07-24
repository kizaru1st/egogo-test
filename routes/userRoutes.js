import express from "express";
import { CreateUser, GetUser, UpdateUser, DeleteUser } from "../controller/userController.js";

const router = express.Router();

router.post("/", CreateUser);
router.get("/", GetUser);
router.patch("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

export default router;
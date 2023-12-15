import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getFromDB);
router.get("/:id", UserController.getSingleUSer);
router.post("/create-user", UserController.createUser);

export default router;

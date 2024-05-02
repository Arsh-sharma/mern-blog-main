import express from "express";
import {
  test,
  userUpdate,
  deleteUser,
  signOut,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, userUpdate);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);

export default router;
import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", deleteUser);

//get a user
router.get("/:id", getUser);

// subscribe to a user
router.put("/sub/:id", verifyToken, subscribe);

// unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

// like a video
router.put("/like/:videoId", verifyToken, like);

// dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;

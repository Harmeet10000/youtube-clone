import express from "express";
import {
 
} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id",verifyToken, updateVideos);
router.delete("/:id",verifyToken, deleteVideos);
router.get("/find/:id", getVideos);

export default router;

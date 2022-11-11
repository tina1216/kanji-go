import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createComment, deleteComment, getAllComment } from "../controllers/comment.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createComment);

//update
//router.put("/:id", verifyAdmin, updateQuiz);

//delete
router.delete("/:id", verifyAdmin, deleteComment);


//get all
router.get("/", getAllComment)


export default router
import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {createComment, createQuestion, deleteComment, deleteQuestion, getAllQuestion, getQuestion, updateQuestion} from "../controllers/question.js";

const router = express.Router();

//create
router.post("/qna", createQuestion);

//update
router.put("/:id",verifyUser, verifyAdmin, updateQuestion);

//delete
router.delete("/:id", verifyUser, verifyAdmin, deleteQuestion);

//get one
router.get("/:id", getQuestion)

//get all
router.get("/", getAllQuestion)

//---------------------
//create comment
router.put("/comment", createComment)

//delete comment
router.delete("/comment/:id", verifyUser, verifyAdmin, deleteComment)


export default router
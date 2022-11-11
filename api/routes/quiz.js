import express from "express";
import { createQuiz, updateQuiz, deleteQuiz, getAllQuiz, getQuiz } from "../controllers/quiz.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createQuiz);

//update
router.put("/:id", verifyAdmin, updateQuiz);

//delete
router.delete("/:id", verifyAdmin, deleteQuiz);

//get
router.get("/:id", getQuiz)


//get all
router.get("/", getAllQuiz)


export default router
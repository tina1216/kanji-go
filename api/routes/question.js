import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {createQuestion, deleteQuestion, getAllQuestion, getQuestion, updateQuestion} from "../controllers/question.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createQuestion);

//update
router.put("/:id", verifyAdmin, updateQuestion);

//delete
router.delete("/:id", verifyAdmin, deleteQuestion);

//get one
router.get("/:id", getQuestion)

//get all
router.get("/", getAllQuestion)


export default router
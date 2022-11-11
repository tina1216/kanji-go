import express from "express";
import Kanji from "../models/Kanji.js";
import Quiz from "../models/Quiz.js"
import { createKanji, deleteKanji, getAllKanji, getKanji, updateKanji } from "../controllers/kanji.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:quizId", verifyAdmin, createKanji);

//update
router.put("/:id", verifyAdmin, updateKanji);

//delete
router.delete("/:id/:quizId", verifyAdmin, deleteKanji);

//get
router.get("/:id", getKanji)


//get all
router.get("/", getAllKanji)


export default router
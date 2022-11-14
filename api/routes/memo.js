import express from "express";
import { createMemo, deleteMemo, getAllMemo, getMemo, updateMemo } from "../controllers/memo.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/createMemo", verifyUser, createMemo);
// router.post("/createMemo", createMemo);

//update
router.put("/:id", verifyUser, updateMemo);

//delete
// router.delete("/:id", verifyUser, deleteMemo);
router.delete("/:id", deleteMemo);

//get
router.get("/:id", getMemo)


//get all memo
router.get("/", getAllMemo)


export default router
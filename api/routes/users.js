import express from "express";
import { updateUser, deleteUser, getAllUsers, getUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);
// router.delete("/:id", deleteUser);

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", getAllUsers)
// router.get("/", getAllUsers)


export default router
import express from "express";
import User from "../models/User.js";
import { updateUser, deleteUser, getAllUsers, getUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//come back from next() in verifyToken.js
// router.get("/checkAuth", verifyToken, (req, res, next) => {
//     res.send("Successfully signed in")
// })

// router.get("/checkuser/:id", verifyUser,  (req, res, next) => {
//     res.send("Successfully signed in and can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin,  (req, res, next) => {
//     res.send("Signed in as an admin - you can delete accounts")
// })

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", verifyAdmin, getAllUsers)



export default router
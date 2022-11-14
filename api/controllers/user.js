import User from "../models/User.js";
import bcrypt from "bcrypt"

export const updateUser = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        //const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});

        const user = await User.findById(req.params.id)

        if(user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            user.profImg = req.body.profImg || user.profImg
            user.isAdmin = req.body.isAdmin || user.isAdmin
        }

        if(req.body.password === "") {
            //same password as before
            user.password = user.password
        } else {
            //update password
            const salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(req.body.password, salt);
        }
        
        //const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            password: updatedUser.password,
            isAdmin: updatedUser.isAdmin
        })
    } catch(err) {
        res.status(500).json(err)
    }
}

export const deleteUser = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}

//get a user
export const getUser = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const User = await User.findById(req.params.id);
        res.status(200).json(User)
    } catch(err) {
        res.status(500).json(err)
    }
}


export const getAllUsers = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const Users = await User.find(req.params.id);
        res.status(200).json(Users)
    } catch(err) {
        res.status(500).json(err)
    }
}
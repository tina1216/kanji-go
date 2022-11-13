import User from "../models/User.js";

export const updateUser = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser)
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
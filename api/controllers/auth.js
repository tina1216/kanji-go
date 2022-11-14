import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

//signup
export const signup = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash
        })
        
        await newUser.save()
        res.status(200).send("User has been created.")
    
    } catch (error) {
        return res.status(500).json(error)
    }
}

//signin
export const signin = async(req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        const user = await User.findOne({email: req.body.email})
        !user && res.status(404).send("User not found")

        const isPswCorrect = await bcrypt.compare(req.body.password, user.password)
        !isPswCorrect && res.status(400).send("Wrong email address or password")

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

        const {password, isAdmin, ...otherDetails} = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true, 
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }).status(200).json({isAdmin, ...otherDetails })

        //res.cookie("access_token", token, {httpOnly: true}).status(200).json({ ...otherDetails })
    } catch (error) {
        res.status(500).json(error)
        next(error)
    }
}

//signout
export const signout = async(req, res) => {
    try {
        res.clearCookie('access_token');
        res.
        res.status(200).json('Logout success')
    } catch (error) {
        res.status(500).json(error) 
    }
}
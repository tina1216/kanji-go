import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

//signup
export const signup = async(req, res) => {
    console.log(req.body)
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
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

        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(404).send("User not found")
        }

        const isPswCorrect = await bcrypt.compare(req.body.password, user.password)
        console.log(isPswCorrect)
        if(!isPswCorrect) {
            return res.status(400).send("Wrong email address or password")
        }

        //jwt - check if the user is admin
        const token = jwt.sign({id: user.id, isAdmin: user.isAdmin}, process.env.JWT)

        const {password, isAdmin, ...otherDetails} = user._doc;
        
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({...otherDetails})

    } catch (error) {
        res.status(500).json(error)
        next(error)
    }
}

//signout
export const signout = async(req, res) => {
    try {
        console.log("Sign out")
        
        //no more token
        res.cookie("token", "", {
            path: "/",
            httpOnly: true,
            expires: new Date(0),//expire cookie
            sameSite: "none",
            secure: true,
          });
          return res.status(200).json({ message: "Successfully Signed Out" });
    } catch (error) {
        res.status(500).json(error)
      
    }
}
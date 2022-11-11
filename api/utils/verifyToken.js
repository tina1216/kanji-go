import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    
    if(!token) {
        return res.status(401).send("Not authenticated.");
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) {
            return res.status(403).send("Token is not valid.");
        }
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        //check if the user is the owner or admin
        if(req.user.id == req.params.id || req.user.isAdmin) {
            next()
        } else {
            return res.status(403).send("Not Authorized.");
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        //check if the user is admin
        if(req.user.isAdmin) {
            next()
        } else {
            return res.status(403).send("Not Authorized.");
        }
    })
}
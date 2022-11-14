import jwt from "jsonwebtoken";

export const verifyToken = async(req, res, next) => {
    console.log('Cookies: ', req.cookies)
    const token = req.cookies.access_token;
    console.log('Token: ', token)

    try {
        if(!token) {
            return res.status(401).send("Not authenticated.");
        }
    
        await jwt.verify(token, process.env.JWT, (err, user) => {
            if(err) {
                res.status(403).send("Token is not valid.");
                return next()
            }
            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(500).json(err.toString());
    }
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
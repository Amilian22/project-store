import jwt from "jsonwebtoken";

import TOKEN_SECRET from "../config.js";


const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" })
        }
        req.user = user;
        next()
    })
}

export default authRequired;
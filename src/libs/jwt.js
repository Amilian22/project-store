import jwt from "jsonwebtoken";
import TOKEN_SECRET from "../config.js"

const createAccesToken = async (payload) => {
    return new Promise((res, rej) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            }, (error, token) => {
                if (error) {
                    rej(error)
                }
                res(token)
            }
        )
    })
}

export default createAccesToken;
import { UnAuthenticationError } from "../errors";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        throw new UnAuthenticationError("Authentication Invalid")
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userID: payload.userID};
        next()
    }
    catch(error){
        throw new UnAuthenticationError("Authentication Invalid")
    }
}

export default auth;
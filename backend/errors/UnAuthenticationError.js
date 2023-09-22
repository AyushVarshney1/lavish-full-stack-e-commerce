import CustomAPIError from "./CustomAPIError.js";
import { StatusCodes } from "http-status-codes";

class UnAuthenticationError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

export default UnAuthenticationError
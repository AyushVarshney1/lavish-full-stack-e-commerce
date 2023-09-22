import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultMessage = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something Went wrong, please try again later",
  };

  if (err.name === 'ValidationError') {
    defaultMessage.statusCode = StatusCodes.BAD_REQUEST
    defaultMessage.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }

  res.status(defaultMessage.statusCode).json({ msg: defaultMessage.message });
};

export default errorHandlerMiddleware;

import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import connectDB from "./connectDatabase/connectDB.js";
import authRouter from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import cookieParser from "cookie-parser";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import {dirname} from 'path';
import { fileURLToPath } from "url";
import path from "path";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

const __dirname = dirname(fileURLToPath(import.meta.url));


dotenv.config();
const app = express();

app.use(express.static(path.resolve(__dirname, '..', './client/build')))

app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(cookieParser())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRoute);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', './client/build', 'index.html'))
})

app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("Database Connected")
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
};

start()

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './Routers/userRouter.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRouter);

app.listen(5000, () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to database."))
    .catch((err) => console.log(err));
})
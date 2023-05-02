import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());

//MIDDLEWARE
dotenv.config();
app.use(cors());

app.use("/api/user", userRoute);

const db = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MONGO Runs!");
  });
};

app.listen(3999, () => {
  db();
});
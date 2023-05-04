import express from "express";
import { newUser } from "../components/User.js";

const router = express.Router();

router.post("/new", newUser);

export default router;

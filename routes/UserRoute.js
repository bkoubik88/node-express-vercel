import express from "express";
import { newUser, getUser } from "../components/User.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/", getUser);

export default router;

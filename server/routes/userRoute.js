import express from "express";
import { userLogin, userRegistration } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/register", userRegistration);
userRoute.post("/login", userLogin);

export default userRoute;

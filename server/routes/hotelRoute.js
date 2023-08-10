import express from "express";
import { authentication } from "../authentication/authentication.js";
import {
  deleteRoom,
  editRoom,
  getRoom,
  postRoom,
} from "../controller/hotelController.js";
const hotelRoute = express.Router();

hotelRoute.get("/getRoom", authentication, getRoom);
hotelRoute.post("/postRoom", authentication, postRoom);
hotelRoute.delete("/deleteRoom/:id", authentication, deleteRoom);
hotelRoute.patch("/editRoom/:id", authentication, editRoom);

export default hotelRoute;

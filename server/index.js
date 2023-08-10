import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import hotelRoute from "./routes/hotelRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", userRoute);
app.use("/", hotelRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log("connected");
  } catch (error) {
    console.log("not connected");
  }
});

import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connect=mongoose.connect(process.env.PORT_URL);

export default connect;
import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
  name: { type: String, require: true },
  imageUrls: { type: String, require: true },
  rentPerDay: { type: Number, require: true },
  type: { type: String, require: true },
  noOfPerson: { type: Number, require: true },
  phone: { type: Number, require: true },
  booked: { type: Boolean, default: false },
  description: { type: String, require: true },
});

const Hotel = mongoose.model("hotel", hotelSchema);

export default Hotel;

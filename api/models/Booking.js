import mongoose from "mongoose";

const BookingInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
});
export default mongoose.model("Booking", BookingInfoSchema);

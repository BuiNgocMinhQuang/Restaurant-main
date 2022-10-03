import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Booking from "./routes/booking.js";
const app = express();
dotenv.config();

const connenct = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
//middele
app.use(express.json());
app.use("/booking", Booking);

app.listen(2504, () => {
  connenct();
  console.log("Connected to backend");
});

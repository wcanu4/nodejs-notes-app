import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

try {
  const db = await mongoose.connect("mongodb+srv://waltercanu:camil4479@cluster0.qgitapi.mongodb.net/test");
  console.log("Connected to ", db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});


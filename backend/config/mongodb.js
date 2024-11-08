// config/mongodb.js
import mongoose from "mongoose";
import dotenv from "dotenv";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/appointmed`);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;

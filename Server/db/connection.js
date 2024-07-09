import mongoose from "mongoose";
import { config } from "dotenv";
config();

const DB = process.env.DB_CONNECTION;
const connection = mongoose
  .connect(DB, {})
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("No connection" + err);
  });

export default connection;

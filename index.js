import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/userRoutes.js";
import cors from "cors";

// config
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use("/api/v1", UserRoute);


// DB Config
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
main()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server Started"));

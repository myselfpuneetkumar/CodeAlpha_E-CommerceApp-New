import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Routes
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

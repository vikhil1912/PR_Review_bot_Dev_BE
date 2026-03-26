import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { clerkMiddleware, requireAuth } from "@clerk/express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(clerkMiddleware());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL.replace(/\/$/, ""),
      credentials: true,
    })
  );
}


app.listen(port, () => {
  console.log(`App is listening to the port:${port}`);
  connectDB();
});
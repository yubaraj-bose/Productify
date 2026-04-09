import express from "express";
import cors from "cors";
import path from "path";

import { ENV } from "./config/env";
import { clerkMiddleware, requireAuth } from "@clerk/express";

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import commentRoutes from "./routes/commentRoutes";

const app = express();

/* ---------------------------
   CORS Configuration
---------------------------- */
app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    credentials: true,
  })
);

/* ---------------------------
   Middlewares
---------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(clerkMiddleware());

/* ---------------------------
   Health Check (Public)
---------------------------- */
app.get("/api/health", (req, res) => {
  res.json({
    message:
      "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

/* ---------------------------
   Public Routes
---------------------------- */
app.use("/api/products", productRoutes);

/* ---------------------------
   Protected Routes
---------------------------- */
app.use("/api/users", requireAuth(), userRoutes);
app.use("/api/comments", requireAuth(), commentRoutes);

/* ---------------------------
   Production Static Serving
---------------------------- */
if (ENV.NODE_ENV === "production") {
  const rootDir = path.resolve();

  app.use(express.static(path.join(rootDir, "../frontend/dist")));

  // Express 5 requires "/*" not "*"
  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(rootDir, "../frontend/dist/index.html")
    );
  });
}

/* ---------------------------
   Start Server
---------------------------- */
app.listen(ENV.PORT, "0.0.0.0", () => {
  console.log("🚀 Server is running on PORT:", ENV.PORT);
});
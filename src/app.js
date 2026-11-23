import express from "express";

import healthRouter from "./routers/healthRouter.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

import postRoutes from "./routers/postRoutes.js"

const app = express();

//built-in middleware to parse req.bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRoutes)

app.get("/", (req, res) => {
res.status(200).json({ message: "Portfolio API is running" });
});

app.use("/api/health", healthRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
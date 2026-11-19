import express from "express";

import healthRouter from "./routers/healthRouter.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.status(200).json({ message: "Portfolio API is running" });
});

app.use("/api/health", healthRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
import "./loadEnv.mjs";

import express from "express";
import cors from "cors";
import marketplaceRouter from "./routes/marketplace.mjs";
import userRouter from "./routes/user.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/marketplace/", marketplaceRouter);
app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});

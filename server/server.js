import express from "express";
import dotenv from "dotenv";

// project imports
import configureExpress from "./config/appConfig.js";
import connectDB from "./config/db.js";

// dotenv config
dotenv.config();
const app = express();

const { DB_URL, PORT = 4000 } = process.env;

connectDB(DB_URL);
configureExpress(app);

// Run the server
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);

app.on("unhandledRejection", (err) => {
	console.log("Error: err");
	app.close(() => app.exit(1));
});

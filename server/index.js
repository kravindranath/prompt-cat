import express from "express";
import cors from "cors";
import routes from "./routes.js"; // Importing routes

const app = express();
app.use(cors());
app.use(express.json());

// Use the routes file
// Now requests must go to /api/capture or /api/categorize
app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

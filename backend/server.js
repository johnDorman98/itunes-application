const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const searchRoutes = require("./routes/searchRoutes");
const tokenRoutes = require("./routes/tokenRoutes");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/search", searchRoutes);
app.use("/api/token", tokenRoutes);

// Display request url
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// Start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

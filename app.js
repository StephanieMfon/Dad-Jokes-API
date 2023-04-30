const countNumberOfJokesRead = require("./src/modules/countNumberOfJokesRead");
const express = require("express");
// Start express app
const app = express();
const router = require("./src/routes/dadjokes.routes");
app.use(countNumberOfJokesRead);
app.use("/api/v1", router);

// Error Handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 400;
  const message = "Something went wrong" || err.message;
  const environment = process.env.NODE_ENV || "development";
  res.status(statusCode).json({
    success: "false",
    status: "failed",
    message: message,
    stack: environment === "development" ? err.stack : {},
  });
});

module.exports = app;

const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();

// Example of a synchronous route
app.get("/example", (req, res, next) => {
  // Your synchronous route logic here
  // If an error occurs, you can still use next()
  // For example: next(new Error('Something went wrong'));
});

// Example of an asynchronous route using express-async-handler
app.get(
  "/data",
  asyncHandler(async (req, res, next) => {
    // Your asynchronous code here
    // In case of an error, it will automatically be passed to the error handling middleware
    const data = await fetchData(); // Replace fetchData() with your async function
    res.json(data);
  })
);

// Error handling middleware for catching all types of errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).send("Something broke!");
});

// 404 Not Found Handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Server Initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Replace this with your actual asynchronous function
async function fetchData() {
  // Mock async operation, like fetching data from a database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data fetched successfully" });
    }, 1000);
  });
}

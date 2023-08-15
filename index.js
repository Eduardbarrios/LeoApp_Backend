const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
	console.log(`Servidor en ejecución en http://localhost:${port}`);
});

// Import the fileRoutes module
const fileRoutes = require("./src/Routes/fileRoutes");
const { scheduleTask } = require("./src/utils/cronScript");

// Use the fileRoutes middleware for all routes starting with '/api'
app.use("/api", fileRoutes);

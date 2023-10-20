const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, "0.0.0.0", () => {
	console.log(`Servidor en ejecución en http://localhost:${port}`);
});

// Import the fileRoutes module
const fileRoutes = require("./src/Routes/fileRoutes");
const { scheduleTask } = require("./src/utils/cronScript");

//codigo para examinar a detalle una consulta recibida por el api y mostrar los detalles en la consola
app.use((req, res, next) => {
	console.log("Solicitud recibida en:", req.url);
	console.log("Método de solicitud:", req.method);
	console.log("Cuerpo de la solicitud:", req.body);
	console.log("Encabezados:", req.headers);
	next();
});

// Use the fileRoutes middleware for all routes starting with '/api'
app.use("/api", fileRoutes);

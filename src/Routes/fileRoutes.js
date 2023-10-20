const express = require("express");
const router = express.Router();
const getUserDetails = require("../Controllers/getUserDetails");
const { scheduleTask } = require("../utils/cronScript");
const { createUserWithDetails } = require("../firebase/createUser");
const { createNewUser } = require("../Controllers/createUserDB");

//Define a route for getting single user Detail
router.get("/user/:UID", getUserDetails.getUserDetails);

//router to create a new user
router.post("/create-user", async (req, res) => {
	// Los detalles del usuario deben enviarse en el cuerpo de la solicitud POST
	const userDetails = req.body;
	try {
		const uid = await createUserWithDetails(userDetails);
		res.status(201).json({ uid }); // Devuelve el ID del usuario creado
		await createNewUser(userDetails, uid);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		}); // Devuelve un mensaje de error en caso de falla
	}
});

//iniciar tarea de cron con post
router.post("/iniciar-tarea", (req, res) => {
	scheduleTask.start();
	res.json({ message: "Tarea programada iniciada manualmente" });
});
//detener tarea de cron con post
router.post("/detener-tarea", (req, res) => {
	scheduleTask.stop();
	res.json({ message: "Tarea programada detenida manualmente" });
});

//testing conection
router.get("/test", async (req, res) => {
	console.log("you are connected to the backend");
	res.json({ message: "you are connected to the backend" });
});

module.exports = router;

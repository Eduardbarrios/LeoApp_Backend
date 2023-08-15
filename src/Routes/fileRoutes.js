const express = require("express");
const router = express.Router();
const getUsersQuery = require("../Controllers/getUsersQuery");
const getUserDetails = require("../Controllers/getUserDetails");
const { scheduleTask } = require("../utils/cronScript");

// Define a route for getting all users
router.get("/usuarios", getUsersQuery.getAllUsersList);
//Define a route for getting dingle user Detail
router.get("/user/:id", getUserDetails.getUserDetails);

//iniciar tarea de cron con post
router.post("/iniciar-tarea", (req, res) => {
	scheduleTask.start();
	res.json({ message: "Tarea programada iniciada manualmente" });
});

module.exports = router;

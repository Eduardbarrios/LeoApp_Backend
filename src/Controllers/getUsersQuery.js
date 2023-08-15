const pool = require("../Models/db");
const { executeGetQuery } = require("../utils/QuerysGenericModule");

// Function to retrieve all users from the database
const query = "SELECT id, correo_electronico as email FROM usuarios;";
const getAllUsersList = async (req, res) => {
	await executeGetQuery(req, res, query, "getAllUsersList");
};

module.exports = {
	getAllUsersList,
};

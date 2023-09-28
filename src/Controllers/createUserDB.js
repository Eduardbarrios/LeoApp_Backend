const pool = require("../Models/db");

const createNewUser = async (userDetails, UID) => {
	const insertQuery = `
   INSERT INTO usuarios (UID, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, numero_telefono, correo_electronico, numero_cedula, direccion)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
 `;

	const queryValues = [
		UID,
		userDetails.primer_nombre,
		userDetails.segundo_nombre,
		userDetails.primer_apellido,
		userDetails.segundo_apellido,
		userDetails.numero_telefono,
		userDetails.correo_electronico,
		userDetails.numero_cedula,
		userDetails.direccion,
	];
	try {
		await pool.promise().query(insertQuery, queryValues);
		res.json({ message: "Usuario creado exitosamente." });
	} catch (error) {
		console.error("Error al crear el usuario:", error);
		res.status(500).json({ error: "Error al crear el usuario." });
	}
};

module.exports = {
	createNewUser,
};

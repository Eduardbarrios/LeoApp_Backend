const pool = require("../Models/db");

const executeGetQuery = async (
	req,
	res,
	query,
	paramName = null,
	consultName
) => {
	try {
		const paramValue = req?.params[paramName]; // Obtén el valor del parámetro de la solicitud
		const [result, fields] = await pool.promise().query(query, [paramValue]); // Usa el valor del parámetro en la consulta
		res?.json(result);
		return result;
	} catch (error) {
		console.error(`Error en la consulta ${consultName}:`, error);
		res.status(500).json({ error: `Error en la consulta ${consultName}` });
	}
};

module.exports = {
	executeGetQuery,
};

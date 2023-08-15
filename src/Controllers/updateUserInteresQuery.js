const pool = require("../Models/db");

const actualizarInteresesMasivo = async (newIntereses) => {
	try {
		// Construir la consulta SQL
		const query = `
      INSERT INTO intereses (usuario_id, interes_total)
      VALUES ?
      ON DUPLICATE KEY UPDATE
        interes_total = VALUES(interes_total);
    `;

		// Ejecutar la consulta con inserción masiva
		const [result] = await pool.promise().query(query, [newIntereses]);
		console.log(
			`Registros de intereses actualizados: ${
				result.affectedRows
			} - Hora: ${new Date()}`
		);
	} catch (error) {
		console.error("Error al actualizar los registros de intereses:", error);
	}
};

module.exports = {
	actualizarInteresesMasivo,
};

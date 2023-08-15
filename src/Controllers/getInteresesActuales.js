const { executeGetQuery } = require("../utils/QuerysGenericModule");
const query = `
      SELECT
        usuario_id, interes_total 
      FROM intereses`;
const consultarInteresesActuales = async () => {
	const result = await executeGetQuery(
		(req = null),
		(res = null),
		query,
		"consultarInteresesActuales"
	);
	return result;
};

module.exports = {
	consultarInteresesActuales,
};

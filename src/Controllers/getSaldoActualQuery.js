const pool = require("../Models/db");
const { executeGetQuery } = require("../utils/QuerysGenericModule");

const query = `
  SELECT
    u.id AS usuario_id,
    u.primer_nombre,
    u.primer_apellido,
    IFNULL((
      (SELECT IFNULL(SUM(monto_inversion), 0) + IFNULL(u.monto_inicial_inversion, 0) FROM inversiones WHERE usuario_id = u.id)
      - (SELECT IFNULL(SUM(monto_retiro), 0) FROM retiros WHERE usuario_id = u.id)
    ), 0) AS saldo_actual
  FROM usuarios u`;
const consultarSaldoUsuarios = async () => {
	const result = await executeGetQuery(
		(req = null),
		(res = null),
		query,
		"consultarSaldoUsuarios"
	);
	console.log(result);
	return result;
};
module.exports = {
	consultarSaldoUsuarios,
};

const { executeGetQuery } = require("../utils/QuerysGenericModule");

const query = `
SELECT
u.id AS usuario_id,
u.UID as UID,
u.correo_electronico AS email,
u.primer_nombre,
u.primer_apellido,
u.numero_telefono,
IFNULL((
    (SELECT IFNULL(SUM(monto_inversion), 0)  FROM inversiones WHERE usuario_id = u.id)
    - (SELECT IFNULL(SUM(monto_retiro), 0) FROM retiros WHERE usuario_id = u.id)
), 0) AS saldo_actual,
i.interes_total
FROM
usuarios u
LEFT JOIN (
SELECT
    usuario_id, SUM(interes_total) AS interes_total
FROM
    intereses
GROUP BY
    usuario_id
) i ON u.id = i.usuario_id
WHERE
u.UID = ?;
`;

const getUserDetails = async (req, res) => {
	await executeGetQuery(req, res, query, "UID", "getUserDetails");
};

module.exports = {
	getUserDetails,
};

const {
	consultarInteresesActuales,
} = require("../Controllers/getInteresesActuales");
const {
	consultarSaldoUsuarios,
} = require("../Controllers/getSaldoActualQuery");
const {
	actualizarInteresesMasivo,
} = require("../Controllers/updateUserInteresQuery");

const updateIntereses = async () => {
	const saldos = await consultarSaldoUsuarios();
	const currentInteres = await consultarInteresesActuales();
	const newIntereses = saldos.map((saldo, index) => [
		saldo.usuario_id,
		saldo.saldo_actual * (1 / 300) + currentInteres[index]?.interes_total,
	]);
	await actualizarInteresesMasivo(newIntereses);
};

module.exports = {
	updateIntereses,
};

const cron = require("node-cron");
const { updateIntereses } = require("./updateInteresScript");

// Programar la ejecución todos los días a las 00:00 AM
//para prpobar la app se ha programado para que se ejecute cada 1 min
const scheduleTask = cron.schedule(
	"*/2 * * * * *",
	async () => {
		/* Obtén los saldos que deseas actualizar */
		await updateIntereses();
		console.log("intereses actualizados con node-cron");
	},
	{
		scheduled: false,
	}
);

module.exports = {
	scheduleTask,
};

require("dotenv").config();
const admin = require("firebase-admin");

// Path al archivo JSON de clave de servicio desde las variables de entorno
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Inicializar la aplicación de Firebase con las credenciales de servicio
export const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});
/* // UID del usuario que deseas obtener
const uid = "0ZcHA5MkjxMO4ZQgTvX69aongck2";

// Obtener los datos del usuario
admin
	.auth()
	.getUser(uid)
	.then((userRecord) => {
		// Ver los datos del usuario
		console.log("Datos del usuario:", userRecord.toJSON());
	})
	.catch((error) => {
		console.log("Error al obtener los datos del usuario:", error);
	});
 */

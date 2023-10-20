require("dotenv").config();
const admin = require("firebase-admin");

// Path al archivo JSON de clave de servicio desde las variables de entorno
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Inicializar la aplicación de Firebase con las credenciales de servicio
const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});
module.exports = {
	firebase,
};

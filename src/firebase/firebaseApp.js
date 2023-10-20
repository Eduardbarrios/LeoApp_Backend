require("dotenv").config();
const admin = require("firebase-admin");

const credencialesString = process.env.CREDENTIALS;
const credencialesJson = JSON.parse(string);

// Path al archivo JSON de clave de servicio desde las variables de entorno
const serviceAccount = credencialesJson;

// Inicializar la aplicación de Firebase con las credenciales de servicio
const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});
module.exports = {
	firebase,
};

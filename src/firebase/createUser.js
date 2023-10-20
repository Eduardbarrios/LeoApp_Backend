const { response } = require("express");
const { firebase } = require("./firebaseApp");

async function createUserWithDetails(userDetails) {
	info = {
		email: userDetails.correo_electronico,
		emailVerified: userDetails.emailVerified || false,
		phoneNumber: userDetails.numero_telefono || "",
		password: userDetails.password,
		displayName:
			`${userDetails.primer_nombre} ${userDetails.primer_apellido}` || "",
		disabled: userDetails.disabled || false,
	};
	try {
		const userRecord = await firebase.auth().createUser(info);

		return userRecord.uid;
	} catch (error) {
		throw error;
	}
}

/* 	createUserWithDetails, es un metodo para crear usuarios en firebase, el cuál recibe
como parametro un objeto con la siguiente información:
{
    email: 'user@example.com',
    emailVerified: false ,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
 }
 Todas las propiedades de esta tabla son opcionales. Si no se especifica una de las propiedades, su valor quedará vacío, a menos que se indique un valor predeterminado en la tabla.
 */

module.exports = {
	createUserWithDetails,
};

const mysql = require("mysql2");
require("dotenv").config();

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
	host: process.env.MYSQLHOST,
	port: process.env.MYSQLPORT,
	user: process.env.MYSQLUSER,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
});

// Conéctate a la base de datos
connection.connect((error) => {
	if (error) {
		console.error("Error al conectar a la base de datos:", error);
		return;
	}
	console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;

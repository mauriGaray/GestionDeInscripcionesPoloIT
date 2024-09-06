const mysql = require("mysql2");
require("dotenv").config(); // Importar variables de entorno
const pool = mysql.createPool({
  // Crear un pool de conexiones
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión a la base de datos exitosa");
    connection.release(); // Liberar la conexión después de la prueba
  }
});
module.exports = pool.promise(); // Exportar el pool para usar promesas

const pool = require("../config/db");
const findUserByEmail = async (email) => {
  const [rows] = await pool.query(
    `SELECT documento, nombre, apellido, email, contraseña, 'egresado' AS rol 
     FROM Egresado WHERE email = ?
     UNION
     SELECT documento, nombre, apellido, email, contraseña, 'mentor' AS rol 
     FROM Mentor WHERE email = ?`,
    [email, email]
  );
  return rows;
};

module.exports = {
  findUserByEmail,
};

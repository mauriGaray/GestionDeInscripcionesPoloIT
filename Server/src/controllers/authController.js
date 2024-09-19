const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const egresadoModel = require("../models/egresado.model");
const { findUserByEmail } = require("../models/auth.model");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
// Registro de un nuevo egresado
async function register(req, res) {
  const {
    documento,
    nombre,
    apellido,
    email,
    contraseña,
    genero,
    nacionalidad,
    ciudad,
    provincia,
    curso_id,
  } = req.body;

  try {
    // Verificar si el egresado ya existe
    const existingEgresado = await egresadoModel.findEgresadoByEmail(email);
    if (existingEgresado) {
      return res.status(400).json("El egresado ya está registrado.");
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear el egresado
    await egresadoModel.createEgresado({
      documento,
      nombre,
      apellido,
      email,
      contraseña: hashedPassword,
      genero,
      nacionalidad,
      ciudad,
      provincia,
      curso_id,
    });

    res.status(201).json("Egresado registrado con éxito.");
  } catch (error) {
    console.error(error);
    res.status(500).json("Error en el registro.");
  }
}

const login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Buscar al usuario por email
    const users = await findUserByEmail(email);

    if (users.length === 0) {
      return res.status(404).json("Usuario no encontrado.");
    }

    const user = users[0];

    // Verificar contraseña
    const validPassword = await bcrypt.compare(contraseña, user.contraseña);
    if (!validPassword) {
      return res.status(401).json("Contraseña incorrecta.");
    }

    // Crear el token JWT con el rol del usuario
    const token = jwt.sign(
      { documento: user.documento, email: user.email, rol: user.rol }, // Agregar el rol
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json("Error del servidor.");
  }
};

// Middleware para verificar el token JWT
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json("Token requerido.");
  }

  // Eliminar "Bearer " del encabezado
  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json("Token inválido.");
    }
    req.user = decoded;
    next();
  });
}
function verifyRole(rolesPermitidos) {
  return (req, res, next) => {
    const { rol } = req.user;

    if (!rolesPermitidos.includes(rol)) {
      return res
        .status(403)
        .json("Acceso denegado: no tienes el rol adecuado.");
    }

    next();
  };
}

module.exports = {
  register,
  login,
  verifyToken,
  verifyRole,
};

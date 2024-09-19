const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const egresadoModel = require("../models/egresado.model");
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

// Inicio de sesión del egresado
async function login(req, res) {
  const { email, contraseña } = req.body;

  try {
    // Buscar el egresado por email
    const egresado = await egresadoModel.findEgresadoByEmail(email);
    if (!egresado) {
      return res.status(400).json("Email o contraseña incorrectos.");
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(
      contraseña,
      egresado.contraseña
    );
    if (!isPasswordValid) {
      return res.status(400).json("Email o contraseña incorrectos.");
    }

    // Crear un token JWT
    const token = jwt.sign(
      { documento: egresado.documento, email: egresado.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json("Error en el inicio de sesión.");
  }
}

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

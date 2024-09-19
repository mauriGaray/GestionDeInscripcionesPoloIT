const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const egresadoModel = require("../models/egresado.model");
const { findUserByEmail } = require("../models/auth.model");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

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

    const hashedPassword = await bcrypt.hash(contraseña, 10);

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

    const users = await findUserByEmail(email);

    if (users.length === 0) {
      return res.status(404).json("Usuario no encontrado.");
    }

    const user = users[0];

    const validPassword = await bcrypt.compare(contraseña, user.contraseña);
    if (!validPassword) {
      return res.status(401).json("Contraseña incorrecta.");
    }

    const token = jwt.sign(
      { documento: user.documento, email: user.email, rol: user.rol },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json("Error del servidor.");
  }
};

module.exports = {
  register,
  login,
  verifyToken,
  verifyRole,
};

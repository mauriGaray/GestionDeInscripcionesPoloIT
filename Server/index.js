// Importar módulos
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Importar variables de entorno
const methodOverride = require("method-override");
const path = require("path");
const { error404, error500 } = require("./src/controllers/errorController");
const db = require("./src/config/db");

// Inicializar aplicación Express
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;
// Middleware para habilitar CORS
app.use(cors());

// Importar rutas
const egresadoRoutes = require("./src/routes/egresadoRoutes");
const mentorRoutes = require("./src/routes/mentorRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const proyectoRoutes = require("./src/routes/proyectosRoutes");
const cursosRoutes = require("./src/routes/cursoRoutes");
const matchingRoutes = require("./src/routes/matchingRoutes");
const authRoutes = require("./src/routes/authRoutes");
const { verifyToken, verifyRole } = require("./src/middlewares/authMiddleware");
// Middleware para procesar datos de formularios y peticiones JSON
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios
app.use(express.json()); // Para parsear el cuerpo de peticiones POST en formato JSON

// Middleware para habilitar otros métodos HTTP como PUT y DELETE
app.use(methodOverride("_method"));

// Configuración de archivos estáticos
app.use(express.static("dist"));
app.use(express.static(path.resolve(__dirname, "public")));

// Rutas de API

app.use("/api/v0/auth", authRoutes);

app.use(verifyToken);

app.use("/api/v0/egresado", egresadoRoutes);
app.use("/api/v0/mentor", mentorRoutes);
app.use("/api/v0/proyecto", proyectoRoutes);

app.use(verifyRole(["admin"]));

app.use("/api/v0/curso", cursosRoutes);
app.use("/api/v0/admin", adminRoutes);
app.use("/api/v0/matching", matchingRoutes);

app.use(error404);
app.use(error500);

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

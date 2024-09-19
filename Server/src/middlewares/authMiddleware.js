const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json("Token requerido.");
  }

  const tokenParts = token.split(" ");
  if (tokenParts[0] !== "Bearer" || !tokenParts[1]) {
    return res.status(400).json("Formato de token inválido.");
  }

  jwt.verify(tokenParts[1], JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json("Token inválido.");
    }
    req.user = decoded;
    next();
  });
}

module.exports = { verifyToken };
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
  verifyToken,
  verifyRole,
};

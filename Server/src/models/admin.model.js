const getAdminPerfil = async (documento) => {
  const [rows] = await pool.execute("SELECT * FROM admin WHERE documento = ?", [
    documento,
  ]);
  return rows[0];
};
const updateAdmin = async (admin) => {
  res.status(200).json({ message: "Perfil actualizado correctamente" });
};

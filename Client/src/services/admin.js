import api from "./api";

export const actualizarPerfil = async (perfilData) => {
  try {
    const response = await api.put("/admin/perfil", perfilData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando perfil", error);
    throw error;
  }
};

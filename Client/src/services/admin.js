import api from "./api";

export const obtenerPerfilAdmin = async (dniAdmin) => {
  try {
    const response = await api.get("/perfilAdmin", dniAdmin);

    return response.data;
  } catch (error) {
    console.error("Error obteniendo perfil", error);
    throw error;
  }
};

export const actualizarPerfil = async (perfilData) => {
  try {
    const response = await api.put("/updatePerfilAdmin", perfilData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando perfil", error);
    throw error;
  }
};

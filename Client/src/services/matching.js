import api from "./api";

export const asignarEgresadosAProyectos = async () => {
  try {
    const response = await api.get("/matching/egresadosyproyectos");

    return response.data;
  } catch (error) {
    console.error("Error asignando egresados a proyectos", error);
    throw error;
  }
};

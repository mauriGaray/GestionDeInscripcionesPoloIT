const transformarFecha = (fecha) => {
  const fechaObj = new Date(fecha);

  const opciones = { year: "numeric", month: "long", day: "numeric" };

  return fechaObj.toLocaleDateString("es-ES", opciones);
};

export default transformarFecha;

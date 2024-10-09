import React, { useState } from 'react';

export const FormRegister = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    documento: '',
    genero: '',
    nacionalidad: '',
    ciudad: '',
    provincia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    <div className="flex items-center justify-center">
      <div className="p-8 w-full max-w-7xl">
        <h2 className="text-2xl font-bold mb-6 text-left text-gray-700">Registro</h2>

        <form onSubmit={handleSubmit}>

          <div className="flex gap-12">
            {/* Campo de nombre */}
            <div className="mb-4 w-3/6">
              <label htmlFor="nombre" className="block text-gray-600 text-sm font-semibold mb-2">
                Nombres
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombres"
                required
              />
            </div>

            {/* Campo de apellido */}
            <div className="mb-4 w-3/6">
              <label htmlFor="apellido" className="block text-gray-600 text-sm font-semibold mb-2">
                Apellidos
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Apellidos"
                required
              />
            </div>
          </div>

          <div className="flex gap-12">
            {/* Campo de email */}
            <div className="mb-4 w-3/6">
              <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@ejemplo.com"
                required
              />
            </div>

            {/* Campo de contraseña */}
            <div className="mb-4 w-3/6">
              <label htmlFor="constraseña" className="block text-gray-600 text-sm font-semibold mb-2">
                Contraseña
              </label>
              <input
                id="contraseña"
                name="contraseña"
                type="contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contraseña"
                required
              />
            </div>
          </div>

          <div className="flex gap-12">
            {/* Campo de Tipo de Documento */}
            <div className="mb-4">
              <label htmlFor="tipo" className="block text-gray-600 text-sm font-semibold mb-2">
                Tipo de Documento
              </label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Selecciona tipo de documento</option>
                <option value="dni">DNI</option>
                <option value="cedula">Cédula de Identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {/* Campo de Documento */}
            <div className="mb-4">
              <label htmlFor="documento" className="block text-gray-600 text-sm font-semibold mb-2">
                Documento
              </label>
              <input
                id="documento"
                name="documento"
                type="text"
                value={formData.documento}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Documento"
                required
              />
            </div>

            {/* Campo de género */}
            <div className="mb-4">
              <label htmlFor="genero" className="block text-gray-600 text-sm font-semibold mb-2">
                Género
              </label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Selecciona tu género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="flex gap-12">
            {/* Campo de nacionalidad */}
            <div className="mb-4 w-3/6">
              <label htmlFor="nacionalidad" className="block text-gray-600 text-sm font-semibold mb-2">
                Nacionalidad
              </label>
              <select
                id="nacionalidad"
                name="nacionalidad"
                type="text"
                value={formData.nacionalidad}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nacionalidad"
                required
              >
                <option value="">Selecciona tu país</option>
                <option value="argentina">Argentina</option>
                <option value="bolivia">Bolivia</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="españa">España</option>
                <option value="italia">Italia</option>
                <option value="paraguay">Paraguay</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
                <option value="otro">Otro</option>  
              </select>
            </div>

            {/* Campo de ciudad */}
            <div className="mb-4 w-3/6">
              <label htmlFor="ciudad" className="block text-gray-600 text-sm font-semibold mb-2">
                Ciudad
              </label>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                value={formData.ciudad}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ciudad"
                required
              />
            </div>

            {/* Campo de provincia */}
            <div className="mb-4 w-3/6">
              <label htmlFor="provincia" className="block text-gray-600 text-sm font-semibold mb-2">
                Provincia
              </label>
              <input
                id="provincia"
                name="provincia"
                type="text"
                value={formData.provincia}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Provincia"
                required
              />
            </div>
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-40 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

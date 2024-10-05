import React, { useState } from 'react';
import './login.css';

export const FormLogin = ({setAuthState}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    if (!username || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    // Lógica de autenticación (como enviar los datos a una API)
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Limpiar los campos después del envío
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container w-80 h-auto p-8 lg:ml-20 rounded-lg text-center">
        <h2 className="mt-0 mb-10 text-3xl text-white font-bold">BIENVENIDO</h2>

        {/* Mostrar el mensaje de error si existe */}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
            <div className="mb-8 w-full">
                <input className="w-full h-8 rounded-sm text-xs text-center border-solid border-[#ccc] focus:border-[#34A853] focus:outline-none"
                    type="username"
                    id="username"
                    placeholder="USUARIO"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div className="mb-8 w-full">
                <input className="w-full h-8 rounded-sm text-xs text-center border-solid border-[#ccc] focus:border-[#34A853] focus:outline-none"
                    type="password"
                    id="password"
                    placeholder="CONTRASEÑA"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="login-btn w-3/4 p-2 m-4 bg-green-600 text-white text-xs rounded cursor-pointer border-none">ACCEDER</button>

        </form>
        
        <button className="google-btn flex justify-center items-center p-1 w-full text-xs text-white gap-2 cursor-pointer border-0">
            Ingresá con 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
            <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
            <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
            <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
            </svg> 
        </button>
        <div className="flex justify-center mt-6 text-xs text-white">
            <p className="m-0">No tenés cuenta?</p>
            <button 
                onClick={() => setAuthState('register')}
                className='register-btn p-0 ml-2 bg-transparent text-xs text-indigo-400 cursor-pointer border-none font-bold'>Registrate
            </button>
        </div>
    </div>
  );
}
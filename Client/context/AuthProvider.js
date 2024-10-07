// src/context/AuthProvider.js
import React, { useReducer, useEffect } from "react";
import AuthContext from "./AuthContext";

// Estado inicial del contexto de autenticación
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  isAuthenticated: false,
};

// Reducer para gestionar el estado global de autenticación
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        role: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Proveedor del contexto de autenticación
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Guardar el token y el rol en localStorage cada vez que cambian
  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role); // Guardar el rol en localStorage
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("role"); // Eliminar el rol de localStorage
    }
  }, [state.token, state.role]);

  // Función para manejar el inicio de sesión
  const login = (user, token, role) => {
    dispatch({ type: "LOGIN", payload: { user, token, role } });
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
